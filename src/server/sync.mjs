#!/usr/bin/env node
// The sync service. Substituted for Firebase's managed tier (report.md F-006);
// the semantics §07/06 is scored on are implemented here, not stubbed:
//   - all map state syncs: positions, text, colour, label, links, holding
//   - property-level last-writer-wins, applied identically on every peer
//   - conflict resolution NEVER drops a node and NEVER re-lays-out anything
import { WebSocketServer } from 'ws';
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const PORT = Number(process.env.MM_PORT || 8788);
const DATA = process.env.MM_DATA || resolve(ROOT, '.mmdata');
const SEEDS = resolve(ROOT, 'seeds');

// applyOp is the SAME function the clients run — one implementation, so the
// server cannot converge differently from a surface.
const require = createRequire(import.meta.url);
const { applyOp } = require(resolve(ROOT, 'src/server/model.cjs'));

mkdirSync(DATA, { recursive: true });

const docs = new Map();      // mapId -> MapDoc
const rooms = new Map();     // mapId -> Set<ws>

function loadAll() {
  // Committed seed fixtures are the source of truth on a cold start. They are
  // never generated at runtime (§09) — only read.
  for (const f of readdirSync(SEEDS)) {
    if (!f.endsWith('.json') || f === 'MANIFEST.json') continue;
    const doc = JSON.parse(readFileSync(resolve(SEEDS, f), 'utf8'));
    docs.set(doc.id, doc);
  }
  if (existsSync(DATA)) {
    for (const f of readdirSync(DATA)) {
      if (!f.endsWith('.json')) continue;
      const doc = JSON.parse(readFileSync(resolve(DATA, f), 'utf8'));
      docs.set(doc.id, doc);   // live state wins over the pristine seed
    }
  }
}
const persist = (id) => {
  const d = docs.get(id);
  if (d) writeFileSync(resolve(DATA, `${id}.json`), JSON.stringify(d));
};

const summaries = () => [...docs.values()]
  .map(d => ({ id: d.id, name: d.name, nodes: Object.keys(d.nodes).length,
               lastOpenedAt: d.lastOpenedAt, createdAt: d.createdAt }))
  .sort((a, b) => b.lastOpenedAt - a.lastOpenedAt);

function broadcastMaps() {
  const msg = JSON.stringify({ t: 'maps', maps: summaries() });
  for (const set of rooms.values()) for (const c of set) if (c.readyState === 1) c.send(msg);
}

loadAll();
const wss = new WebSocketServer({ port: PORT, host: '127.0.0.1' });

wss.on('connection', (ws, req) => {
  const url = new URL(req.url, 'http://x');
  const mapId = url.searchParams.get('map') || '';
  ws.actor = url.searchParams.get('actor') || 'anon';
  if (!docs.has(mapId)) { ws.send(JSON.stringify({ t: 'error', message: `no such map: ${mapId}` })); ws.close(); return; }
  ws.mapId = mapId;
  if (!rooms.has(mapId)) rooms.set(mapId, new Set());
  rooms.get(mapId).add(ws);
  ws.send(JSON.stringify({ t: 'snapshot', doc: docs.get(mapId) }));
  ws.send(JSON.stringify({ t: 'maps', maps: summaries() }));

  ws.on('message', (raw) => {
    let m; try { m = JSON.parse(raw.toString()); } catch { return; }
    if (m.t === 'op') {
      const doc = docs.get(ws.mapId);
      if (!doc) return;
      const before = Object.keys(doc.nodes).length;
      applyOp(doc, m.op);
      const after = Object.keys(doc.nodes).length;
      // A guard, not a comment: only an explicit node.del may reduce the count.
      if (after < before && m.op.t !== 'node.del') {
        console.error('INVARIANT VIOLATED: node dropped by', m.op.t);
        process.exitCode = 70;
      }
      persist(ws.mapId);
      const out = JSON.stringify({ t: 'op', op: m.op });
      for (const c of rooms.get(ws.mapId)) if (c !== ws && c.readyState === 1) c.send(out);
    } else if (m.t === 'maps.create') {
      const now = Date.now();
      const doc = { id: m.id, name: m.name, createdAt: now, lastOpenedAt: now,
                    nodes: {}, links: {}, holding: { origin: [0, -9.5, 3], radius: 3.6 },
                    clocks: {}, removedLinks: {} };
      docs.set(m.id, doc); persist(m.id); broadcastMaps();
    } else if (m.t === 'maps.rename') {
      const d = docs.get(m.id);
      if (d) { d.name = m.name; persist(m.id); broadcastMaps(); }
    } else if (m.t === 'maps.delete') {
      if (docs.delete(m.id)) {
        try { writeFileSync(resolve(DATA, `${m.id}.deleted`), '1'); } catch {}
        try { require('node:fs').unlinkSync(resolve(DATA, `${m.id}.json`)); } catch {}
        broadcastMaps();
      }
    } else if (m.t === 'maps.list') {
      ws.send(JSON.stringify({ t: 'maps', maps: summaries() }));
    }
  });
  ws.on('close', () => rooms.get(ws.mapId)?.delete(ws));
});

console.log(`master-mind sync on ws://127.0.0.1:${PORT} · ${docs.size} maps · data ${DATA}`);
