// The smart connection finder and organiser: a JSON prompt harness.
//
// The finder NEVER modifies the map. It produces staged suggestions; the store
// is written only from applySuggestion(), and only when the user accepts. A
// rejection leaves no trace of any kind.
import type { MapDoc, MMNode, NodeId, Vec3 } from '../core/model.js';
import { nodeList, holdingNodes } from '../core/model.js';
import type { Store } from '../core/store.js';

export type Suggestion =
  | { kind: 'connection'; id: string; a: NodeId; b: NodeId; why: string }
  | { kind: 'grouping'; id: string; nodes: NodeId[]; name: string; why: string }
  | { kind: 'placement'; id: string; node: NodeId; pos: Vec3; why: string };

export const SUGGESTION_KINDS = ['connection', 'grouping', 'placement'] as const;

// --- export ---------------------------------------------------------------

/**
 * A paste-ready prompt carrying the map's JSON *including node positions*, so
 * a placement suggestion can propose a real spot in the user's own geography.
 */
export function buildPrompt(doc: MapDoc): string {
  const nodes = nodeList(doc).map(n => ({
    id: n.id, text: n.text, label: n.label, color: n.color,
    pos: n.pos.map(v => Math.round(v * 100) / 100), placed: n.placed,
  }));
  const links = Object.values(doc.links).map(l => [l.a, l.b]);
  const held = holdingNodes(doc).map(n => n.id);
  const payload = { map: doc.name, holding: doc.holding, nodes, links, unplaced: held };
  return `You are helping organise a 3-D idea map called "${doc.name}".

Below is the map as JSON. Every node has an "id", its "text", a "label", and a
"pos" of [x, y, z] — its actual position in the map's space. Nodes with
"placed": false are waiting in the holding cluster and have no chosen home yet.

Suggest improvements in THREE kinds. Return ONLY JSON, in this shape:

{
  "connections": [ { "a": "<node id>", "b": "<node id>", "why": "<one line>" } ],
  "groupings":   [ { "name": "<group name>", "nodes": ["<id>", "<id>"], "why": "<one line>" } ],
  "placements":  [ { "node": "<unplaced node id>", "pos": [x, y, z], "why": "<one line>" } ]
}

Rules:
- Only use ids that appear in the map.
- "connections" must join two nodes that are not already linked.
- "placements" may only name a node from "unplaced", and the position you give
  should sit near the district it belongs with — do not re-arrange anything else.
- Do not move nodes that are already placed. Their positions are deliberate.

MAP JSON:
${JSON.stringify(payload)}`;
}

// --- tolerant parse -------------------------------------------------------

export interface ParseResult {
  ok: boolean;
  suggestions: Suggestion[];
  error?: string;
  /** Entries that were understood as suggestions but rejected, with the reason. */
  dropped: { what: string; why: string }[];
}

/** Pull the most plausible JSON blob out of prose, fences and chatter. */
function extractJson(raw: string): string | null {
  const fenced = [...raw.matchAll(/```(?:json|JSON|js|javascript)?\s*([\s\S]*?)```/g)]
    .map(m => m[1].trim()).filter(Boolean);
  const candidates = [...fenced];
  // Longest balanced {...} or [...] anywhere in the text.
  for (const open of ['{', '[']) {
    const close = open === '{' ? '}' : ']';
    let depth = 0, start = -1, inStr = false, esc = false, best = '';
    for (let i = 0; i < raw.length; i++) {
      const c = raw[i];
      if (esc) { esc = false; continue; }
      if (c === '\\') { esc = true; continue; }
      if (c === '"' || c === "'") { if (!inStr) inStr = c as any; else if (inStr === (c as any)) inStr = false as any; continue; }
      if (inStr) continue;
      if (c === open) { if (depth === 0) start = i; depth++; }
      else if (c === close) { depth--; if (depth === 0 && start >= 0) { const s = raw.slice(start, i + 1); if (s.length > best.length) best = s; } }
    }
    if (best) candidates.push(best);
  }
  candidates.sort((a, b) => b.length - a.length);
  return candidates[0] ?? null;
}

/** Repairs the mess real chat replies actually contain. */
function repair(s: string): string {
  let t = s;
  t = t.replace(/[\u201C\u201D\u201E\u2033]/g, '"').replace(/[\u2018\u2019\u2032]/g, "'");
  t = t.replace(/\/\*[\s\S]*?\*\//g, '');
  t = t.replace(/(^|[^:"'\\])\/\/[^\n\r]*/g, '$1');   // // comments, not URLs
  t = t.replace(/\bTrue\b/g, 'true').replace(/\bFalse\b/g, 'false')
       .replace(/\bNone\b/g, 'null').replace(/\bNaN\b/g, 'null');
  t = t.replace(/([{,]\s*)([A-Za-z_$][\w$]*)\s*:/g, '$1"$2":');   // unquoted keys
  t = t.replace(/'((?:[^'\\]|\\.)*)'/g, (_m, g) => JSON.stringify(g.replace(/\\'/g, "'")));
  t = t.replace(/,(\s*[}\]])/g, '$1');                            // trailing commas
  // Balance whatever the model truncated.
  let depthC = 0, depthS = 0, inStr = false, esc = false;
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (esc) { esc = false; continue; }
    if (c === '\\') { esc = true; continue; }
    if (c === '"') { inStr = !inStr; continue; }
    if (inStr) continue;
    if (c === '{') depthC++; else if (c === '}') depthC--;
    else if (c === '[') depthS++; else if (c === ']') depthS--;
  }
  if (inStr) t += '"';
  t = t.replace(/,\s*$/, '');
  while (depthS-- > 0) t += ']';
  while (depthC-- > 0) t += '}';
  return t;
}

let sid = 0;
const nextSid = () => `s${++sid}`;

export function parseReply(raw: string, doc: MapDoc): ParseResult {
  const dropped: { what: string; why: string }[] = [];
  if (!raw || !raw.trim()) return { ok: false, suggestions: [], dropped, error: 'The reply was empty. Nothing was changed.' };

  const blob = extractJson(raw);
  if (!blob) return { ok: false, suggestions: [], dropped, error: 'No JSON found in that reply. Nothing was changed.' };

  let data: any = null;
  for (const attempt of [blob, repair(blob)]) {
    try { data = JSON.parse(attempt); break; } catch { /* try the repaired form */ }
  }
  if (data === null || typeof data !== 'object') {
    return { ok: false, suggestions: [], dropped, error: 'That reply is not valid JSON, even after repair. Nothing was changed.' };
  }

  // Accept the shapes models actually emit.
  let conns: any[] = [], groups: any[] = [], places: any[] = [];
  const bag = Array.isArray(data) ? { list: data } : data;
  if (Array.isArray((bag as any).list) || Array.isArray((bag as any).suggestions)) {
    for (const s of ((bag as any).list ?? (bag as any).suggestions) as any[]) {
      const k = String(s?.kind ?? s?.type ?? '').toLowerCase();
      if (k.startsWith('conn')) conns.push(s);
      else if (k.startsWith('group')) groups.push(s);
      else if (k.startsWith('plac')) places.push(s);
      else if (s?.a && s?.b) conns.push(s);
      else if (s?.nodes) groups.push(s);
      else if (s?.pos) places.push(s);
      else dropped.push({ what: JSON.stringify(s).slice(0, 60), why: 'unrecognised suggestion kind' });
    }
  }
  const grab = (...keys: string[]) => { for (const k of keys) if (Array.isArray((bag as any)[k])) return (bag as any)[k]; return []; };
  conns = conns.concat(grab('connections', 'connect', 'links'));
  groups = groups.concat(grab('groupings', 'groups', 'clusters'));
  places = places.concat(grab('placements', 'placement', 'positions'));

  // Resolve node references by id first, then by exact text, then case-folded.
  const byId = new Map<string, MMNode>();
  const byText = new Map<string, MMNode>();
  for (const n of nodeList(doc)) { byId.set(n.id, n); byText.set(n.text.trim().toLowerCase(), n); }
  const resolve = (v: unknown): MMNode | null => {
    if (typeof v !== 'string') return null;
    return byId.get(v) ?? byText.get(v.trim().toLowerCase()) ?? null;
  };
  const linked = new Set(Object.values(doc.links).map(l => (l.a < l.b ? `${l.a}|${l.b}` : `${l.b}|${l.a}`)));

  const out: Suggestion[] = [];
  for (const c of conns) {
    const a = resolve(c?.a ?? c?.from ?? c?.source), b = resolve(c?.b ?? c?.to ?? c?.target);
    if (!a || !b) { dropped.push({ what: `connection ${c?.a} ↔ ${c?.b}`, why: 'unknown node' }); continue; }
    if (a.id === b.id) { dropped.push({ what: `connection on ${a.text}`, why: 'a node cannot link to itself' }); continue; }
    const key = a.id < b.id ? `${a.id}|${b.id}` : `${b.id}|${a.id}`;
    if (linked.has(key)) { dropped.push({ what: `${a.text} ↔ ${b.text}`, why: 'already linked' }); continue; }
    out.push({ kind: 'connection', id: nextSid(), a: a.id, b: b.id, why: String(c?.why ?? c?.reason ?? '').slice(0, 160) });
  }
  for (const g of groups) {
    const raws = Array.isArray(g?.nodes) ? g.nodes : Array.isArray(g?.members) ? g.members : [];
    const ids = raws.map(resolve).filter(Boolean).map((n: any) => n.id as NodeId);
    const name = String(g?.name ?? g?.label ?? g?.title ?? '').trim();
    if (ids.length < 2 || !name) { dropped.push({ what: `grouping "${name || '?'}"`, why: ids.length < 2 ? 'fewer than two known nodes' : 'no group name' }); continue; }
    out.push({ kind: 'grouping', id: nextSid(), nodes: ids, name: name.slice(0, 40), why: String(g?.why ?? g?.reason ?? '').slice(0, 160) });
  }
  for (const p of places) {
    const n = resolve(p?.node ?? p?.id ?? p?.target);
    const raw3 = Array.isArray(p?.pos) ? p.pos : Array.isArray(p?.position) ? p.position : null;
    if (!n) { dropped.push({ what: `placement of ${p?.node}`, why: 'unknown node' }); continue; }
    if (n.placed) { dropped.push({ what: `placement of "${n.text}"`, why: 'that node is already placed — placed positions are not the finder\'s to change' }); continue; }
    const nums = (raw3 ?? []).map((v: unknown) => Number(v));
    if (nums.length !== 3 || nums.some((v: number) => !isFinite(v))) { dropped.push({ what: `placement of "${n.text}"`, why: 'position is not three finite numbers' }); continue; }
    out.push({ kind: 'placement', id: nextSid(), node: n.id, pos: [nums[0], nums[1], nums[2]], why: String(p?.why ?? p?.reason ?? '').slice(0, 160) });
  }

  if (!out.length) {
    return { ok: false, suggestions: [], dropped,
             error: dropped.length ? `Nothing usable in that reply — ${dropped.length} entr${dropped.length === 1 ? 'y' : 'ies'} rejected. Nothing was changed.`
                                   : 'That reply held no suggestions. Nothing was changed.' };
  }
  return { ok: true, suggestions: out, dropped };
}

// --- apply ----------------------------------------------------------------

/** Accepting writes through the ordinary store path, exactly like a manual edit. */
export function applySuggestion(store: Store, s: Suggestion): void {
  if (s.kind === 'connection') store.connect(s.a, s.b);
  else if (s.kind === 'grouping') for (const id of s.nodes) store.setLabel(id, s.name);
  else if (s.kind === 'placement') store.place(s.node, s.pos, store.node(s.node)?.label || '');
}

export function describe(s: Suggestion, doc: MapDoc): string {
  const t = (id: NodeId) => doc.nodes[id]?.text ?? id;
  if (s.kind === 'connection') return `Connect “${t(s.a)}” to “${t(s.b)}”`;
  if (s.kind === 'grouping') return `Group ${s.nodes.length} nodes as “${s.name}”`;
  return `Place “${t(s.node)}” at ${s.pos.map(v => v.toFixed(1)).join(', ')}`;
}
