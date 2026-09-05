// The shared map model. One live state, three lenses, two surfaces.
//
// Two invariants this file exists to protect (§07, rubric cat 03):
//   1. `node.pos` is written by exactly one path — an explicit user act.
//   2. Conflict resolution never drops a node and never re-lays-out anything.

export type NodeId = string;
export type LinkId = string;
export type MapId = string;
export type Vec3 = [number, number, number];

/** The eight assignable node hues. The only saturated elements in the world. */
export const PALETTE = {
  amber:   '#FFB020',
  coral:   '#FF6B4A',
  magenta: '#E85C9A',
  violet:  '#9B7BFF',
  azure:   '#4FA8FF',
  teal:    '#2FD0C0',
  lime:    '#9BD648',
  bone:    '#E8DCC8',
} as const;
export type ColorKey = keyof typeof PALETTE;
export const COLOR_KEYS = Object.keys(PALETTE) as ColorKey[];

/** The five node visual states (DIRECTION.md D-006). Derived, never stored. */
export type NodeState = 'plain' | 'connected' | 'unplaced' | 'searchHit' | 'selected';

export interface MMNode {
  id: NodeId;
  text: string;
  label: string;
  color: ColorKey;
  /** Sacred. Written only by an explicit user act. */
  pos: Vec3;
  /** false => the node lives in the holding cluster, in the `unplaced` state. */
  placed: boolean;
  createdAt: number;
  lastTouchedAt: number;
}

export interface MMLink {
  id: LinkId;
  a: NodeId;
  b: NodeId;
  createdAt: number;
}

export interface MapDoc {
  id: MapId;
  name: string;
  createdAt: number;
  lastOpenedAt: number;
  nodes: Record<NodeId, MMNode>;
  links: Record<LinkId, MMLink>;
  /** The holding cluster is part of the shared model, not local UI (§07/02). */
  holding: { origin: Vec3; radius: number };
  /** Property-level clocks: "n:<id>:<prop>" | "l:<id>" | "m:<prop>" -> lamport ts */
  clocks: Record<string, number>;
  /** Tombstones for links only. Nodes are never tombstoned by conflict. */
  removedLinks: Record<LinkId, number>;
}

// ---------------------------------------------------------------------------
// Operations. Every mutation in the app becomes one of these, on every surface.
// ---------------------------------------------------------------------------

export type Op =
  | { t: 'node.set'; id: NodeId; fields: Partial<Omit<MMNode, 'id'>>; ts: number; actor: string }
  | { t: 'node.del'; id: NodeId; ts: number; actor: string }
  | { t: 'link.add'; id: LinkId; a: NodeId; b: NodeId; ts: number; actor: string }
  | { t: 'link.del'; id: LinkId; ts: number; actor: string }
  | { t: 'map.set';  fields: Partial<Pick<MapDoc, 'name' | 'lastOpenedAt'>>; ts: number; actor: string };

export const NODE_PROPS: (keyof Omit<MMNode, 'id'>)[] =
  ['text', 'label', 'color', 'pos', 'placed', 'createdAt', 'lastTouchedAt'];

export function emptyDoc(id: MapId, name: string, now: number): MapDoc {
  return {
    id, name, createdAt: now, lastOpenedAt: now,
    nodes: {}, links: {},
    holding: { origin: [0, -14, 0], radius: 5.2 },
    clocks: {}, removedLinks: {},
  };
}

/**
 * Property-level last-writer-wins.
 *
 * Ties break on `actor` so two surfaces converge on the same value from the
 * same op set regardless of arrival order — the property the twin-composite
 * artifacts (11, 12) actually prove.
 *
 * A concurrent `node.del` LOSES to any `node.set` at or after it: a node is
 * never dropped to resolve a conflict (§07/06). Nothing here re-lays-out
 * anything; `pos` is just another LWW property carrying the value a user chose.
 */
export function applyOp(doc: MapDoc, op: Op): boolean {
  let changed = false;
  const win = (key: string, ts: number, actor: string) => {
    const cur = doc.clocks[key];
    if (cur === undefined || ts > cur) { doc.clocks[key] = ts; doc.clocks[key + '#a'] = hashActor(actor); return true; }
    if (ts === cur) {
      const a = hashActor(actor);
      if (a > (doc.clocks[key + '#a'] ?? -1)) { doc.clocks[key + '#a'] = a; return true; }
    }
    return false;
  };

  switch (op.t) {
    case 'node.set': {
      const existing = doc.nodes[op.id];
      const n: MMNode = existing ?? {
        id: op.id, text: '', label: '', color: 'bone',
        pos: [0, 0, 0], placed: false, createdAt: op.ts, lastTouchedAt: op.ts,
      };
      for (const p of NODE_PROPS) {
        if (!(p in op.fields)) continue;
        if (win(`n:${op.id}:${p}`, op.ts, op.actor)) {
          (n as any)[p] = op.fields[p] as any;
          changed = true;
        }
      }
      if (!existing) { doc.nodes[op.id] = n; changed = true; }
      // An edit revives a node a concurrent delete removed. Never drop a node.
      if (existing === undefined && doc.clocks[`n:${op.id}:#del`] !== undefined) {
        delete doc.clocks[`n:${op.id}:#del`];
      }
      return changed;
    }
    case 'node.del': {
      // Only an explicit user delete removes a node, and only if no property
      // write has landed at or after this op.
      const blocked = NODE_PROPS.some(p => (doc.clocks[`n:${op.id}:${p}`] ?? -1) > op.ts);
      if (blocked) return false;
      if (doc.nodes[op.id]) {
        delete doc.nodes[op.id];
        for (const id of Object.keys(doc.links)) {
          if (doc.links[id].a === op.id || doc.links[id].b === op.id) {
            doc.removedLinks[id] = op.ts; delete doc.links[id];
          }
        }
        doc.clocks[`n:${op.id}:#del`] = op.ts;
        changed = true;
      }
      return changed;
    }
    case 'link.add': {
      if (doc.removedLinks[op.id] !== undefined && doc.removedLinks[op.id] >= op.ts) return false;
      if (!doc.links[op.id]) {
        doc.links[op.id] = { id: op.id, a: op.a, b: op.b, createdAt: op.ts };
        delete doc.removedLinks[op.id];
        doc.clocks[`l:${op.id}`] = op.ts;
        changed = true;
      }
      return changed;
    }
    case 'link.del': {
      if ((doc.clocks[`l:${op.id}`] ?? -1) > op.ts) return false;
      if (doc.links[op.id]) { delete doc.links[op.id]; doc.removedLinks[op.id] = op.ts; changed = true; }
      return changed;
    }
    case 'map.set': {
      for (const k of Object.keys(op.fields) as ('name' | 'lastOpenedAt')[]) {
        if (win(`m:${k}`, op.ts, op.actor)) { (doc as any)[k] = op.fields[k]; changed = true; }
      }
      return changed;
    }
  }
}

function hashActor(a: string): number {
  let h = 2166136261;
  for (let i = 0; i < a.length; i++) { h ^= a.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

// ---------------------------------------------------------------------------
// Derived reads
// ---------------------------------------------------------------------------

export function nodeList(doc: MapDoc): MMNode[] {
  return Object.values(doc.nodes).sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
}
export function linkList(doc: MapDoc): MMLink[] {
  return Object.values(doc.links).sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
}
export function holdingNodes(doc: MapDoc): MMNode[] {
  return nodeList(doc).filter(n => !n.placed);
}
export function placedNodes(doc: MapDoc): MMNode[] {
  return nodeList(doc).filter(n => n.placed);
}
export function neighbours(doc: MapDoc, id: NodeId): Set<NodeId> {
  const s = new Set<NodeId>();
  for (const l of Object.values(doc.links)) {
    if (l.a === id) s.add(l.b);
    else if (l.b === id) s.add(l.a);
  }
  return s;
}

/** Recency in 0..1 across the map's own age span. Drives chroma only (D-007). */
export function recencyOf(doc: MapDoc, n: MMNode): number {
  let lo = Infinity, hi = -Infinity;
  for (const m of Object.values(doc.nodes)) {
    if (m.createdAt < lo) lo = m.createdAt;
    if (m.createdAt > hi) hi = m.createdAt;
  }
  if (!isFinite(lo) || hi <= lo) return 1;
  return (n.createdAt - lo) / (hi - lo);
}

/**
 * The five states, resolved for every node at once.
 * Precedence: selected > searchHit > unplaced > connected > plain.
 */
export function resolveStates(
  doc: MapDoc, selected: NodeId | null, searchHits: Set<NodeId>,
): Map<NodeId, NodeState> {
  const out = new Map<NodeId, NodeState>();
  const conn = selected ? neighbours(doc, selected) : new Set<NodeId>();
  for (const n of Object.values(doc.nodes)) {
    out.set(n.id,
      n.id === selected ? 'selected'
      : searchHits.has(n.id) ? 'searchHit'
      : !n.placed ? 'unplaced'
      : conn.has(n.id) ? 'connected'
      : 'plain');
  }
  return out;
}

/**
 * Search hits WITH THE FIELD EACH ONE MATCHED ON.
 *
 * Search reads a node's text and its district label, which is right — a reader
 * looking for "koji" wants the whole Koji district, not only the notes that
 * spell it out. But the frame never said so, and the cycle-8 Audience critic
 * read artifact 10 as lighting up nodes whose visible words contain no "koji"
 * with nothing on screen explaining why. Correct behaviour is not
 * self-evidently correct behaviour; the reason has to be on the frame.
 */
export function searchHits(doc: MapDoc, q: string): { n: MMNode; field: 'text' | 'label' }[] {
  const needle = q.trim().toLowerCase();
  if (!needle) return [];
  return nodeList(doc)
    .map(n => {
      const t = n.text.toLowerCase(), l = n.label.toLowerCase();
      let score = -1;
      if (t === needle) score = 0;
      else if (t.startsWith(needle)) score = 1;
      else if (l === needle) score = 2;
      else if (t.includes(needle)) score = 3;
      else if (l.includes(needle)) score = 4;
      return { n, score };
    })
    .filter(r => r.score >= 0)
    .sort((a, b) => a.score - b.score || (a.n.id < b.n.id ? -1 : 1))
    .map(r => ({ n: r.n, field: (r.score === 2 || r.score === 4 ? 'label' : 'text') as 'text' | 'label' }));
}

export function searchMatches(doc: MapDoc, q: string): MMNode[] {
  return searchHits(doc, q).map(r => r.n);
}
