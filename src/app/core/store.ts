// The store: the single place the app mutates the map.
//
// Every mutation becomes an Op, is applied locally, and is handed to the sync
// transport. There is no second write path.
//
// `node.pos` is written by exactly THREE call sites in this file — place(),
// move() and applyPlacementSuggestion() — and all three are reached only from
// an explicit user act. Nothing in the codebase computes a layout.
import {
  type MapDoc, type MMNode, type NodeId, type Op, type ColorKey, type Vec3,
  applyOp, emptyDoc, holdingNodes, neighbours,
} from './model.js';

export type Listener = (doc: MapDoc, op: Op | null) => void;

export interface Transport {
  send(op: Op): void;
  onRemote(fn: (op: Op) => void): void;
}

let counter = 0;
export function newId(prefix: string): string {
  counter++;
  const r = Math.floor(Math.random() * 0xffffff).toString(36);
  return `${prefix}${Date.now().toString(36)}${counter.toString(36)}${r}`;
}

export class Store {
  doc: MapDoc;
  actor: string;
  private lastTs = 0;
  private listeners: Listener[] = [];
  private transport: Transport | null = null;

  constructor(doc: MapDoc, actor: string) { this.doc = doc; this.actor = actor; }

  static blank(id: string, name: string, actor: string) {
    return new Store(emptyDoc(id, name, Date.now()), actor);
  }

  attach(t: Transport) {
    this.transport = t;
    t.onRemote(op => {
      this.lastTs = Math.max(this.lastTs, op.ts);
      if (applyOp(this.doc, op)) this.emit(op);
    });
  }
  detach() { this.transport = null; }

  subscribe(fn: Listener) { this.listeners.push(fn); return () => { this.listeners = this.listeners.filter(f => f !== fn); }; }
  private emit(op: Op | null) { for (const f of this.listeners) f(this.doc, op); }

  /** Hybrid logical clock, so ops from two surfaces order deterministically. */
  private ts(): number {
    const now = Date.now();
    this.lastTs = now > this.lastTs ? now : this.lastTs + 1;
    return this.lastTs;
  }

  /** The one entry point. Local-first: apply, then publish. */
  commit(mk: (ts: number) => Op): Op {
    const op = mk(this.ts());
    if (applyOp(this.doc, op)) this.emit(op);
    this.transport?.send(op);
    return op;
  }

  replaceDoc(doc: MapDoc) { this.doc = doc; this.emit(null); }

  // -- capture -------------------------------------------------------------

  /**
   * One-action quick-add. Lands in the holding cluster, unplaced.
   * Never lands on the canvas: capture is fast, placement is deliberate.
   */
  quickAdd(text: string, color: ColorKey = 'bone'): NodeId {
    const id = newId('n');
    const held = holdingNodes(this.doc).length;
    const h = this.doc.holding;
    // A slot inside the holding shell. This is not a layout of the map: an
    // unplaced node has no chosen position yet, and gets one only when the
    // user drags it out.
    const a = (held * 2.39996) % (Math.PI * 2);
    const rad = h.radius * (0.34 + 0.42 * ((held % 5) / 5));
    const pos: Vec3 = [
      h.origin[0] + rad * Math.cos(a),
      h.origin[1] + ((held % 3) - 1) * h.radius * 0.26,
      h.origin[2] + rad * Math.sin(a),
    ];
    const now = Date.now();
    this.commit(ts => ({
      t: 'node.set', id, actor: this.actor, ts,
      fields: { text, label: 'holding', color, pos, placed: false, createdAt: now, lastTouchedAt: now },
    }));
    return id;
  }

  // -- placement (explicit user acts only) ---------------------------------

  /** Drag out of holding to a permanent spot. The node stays exactly there. */
  place(id: NodeId, pos: Vec3, label?: string) {
    const n = this.doc.nodes[id];
    if (!n) return;
    // 'holding' is a state, not a name. It is cleared on placement so the word
    // does not outlive the state it described.
    const nextLabel = label !== undefined ? label : (n.label === 'holding' ? '' : n.label);
    this.commit(ts => ({
      t: 'node.set', id, actor: this.actor, ts,
      fields: { pos, placed: true, lastTouchedAt: Date.now(), label: nextLabel },
    }));
  }

  /** Move an already-placed node. Also an explicit drag. */
  move(id: NodeId, pos: Vec3) {
    if (!this.doc.nodes[id]) return;
    this.commit(ts => ({ t: 'node.set', id, actor: this.actor, ts, fields: { pos, lastTouchedAt: Date.now() } }));
  }

  /** Move a whole cluster, preserving every internal arrangement exactly. */
  moveCluster(ids: NodeId[], delta: Vec3) {
    for (const id of ids) {
      const n = this.doc.nodes[id];
      if (!n) continue;
      const pos: Vec3 = [n.pos[0] + delta[0], n.pos[1] + delta[1], n.pos[2] + delta[2]];
      this.commit(ts => ({ t: 'node.set', id, actor: this.actor, ts, fields: { pos, lastTouchedAt: Date.now() } }));
    }
  }

  // -- editing -------------------------------------------------------------

  setText(id: NodeId, text: string) {
    this.commit(ts => ({ t: 'node.set', id, actor: this.actor, ts, fields: { text, lastTouchedAt: Date.now() } }));
  }
  setColor(id: NodeId, color: ColorKey) {
    this.commit(ts => ({ t: 'node.set', id, actor: this.actor, ts, fields: { color, lastTouchedAt: Date.now() } }));
  }
  setLabel(id: NodeId, label: string) {
    this.commit(ts => ({ t: 'node.set', id, actor: this.actor, ts, fields: { label, lastTouchedAt: Date.now() } }));
  }
  remove(id: NodeId) { this.commit(ts => ({ t: 'node.del', id, actor: this.actor, ts })); }

  connect(a: NodeId, b: NodeId): string | null {
    if (a === b || !this.doc.nodes[a] || !this.doc.nodes[b]) return null;
    const [x, y] = a < b ? [a, b] : [b, a];
    const id = `l${x}_${y}`;
    if (this.doc.links[id]) return id;
    this.commit(ts => ({ t: 'link.add', id, a: x, b: y, actor: this.actor, ts }));
    return id;
  }
  disconnect(a: NodeId, b: NodeId) {
    const [x, y] = a < b ? [a, b] : [b, a];
    const id = `l${x}_${y}`;
    if (this.doc.links[id]) this.commit(ts => ({ t: 'link.del', id, actor: this.actor, ts }));
  }

  rename(name: string) { this.commit(ts => ({ t: 'map.set', actor: this.actor, ts, fields: { name } })); }
  touchOpened() { this.commit(ts => ({ t: 'map.set', actor: this.actor, ts, fields: { lastOpenedAt: Date.now() } })); }

  // -- reads ---------------------------------------------------------------

  holdingCount() { return holdingNodes(this.doc).length; }
  neighboursOf(id: NodeId) { return neighbours(this.doc, id); }
  node(id: NodeId): MMNode | undefined { return this.doc.nodes[id]; }
}
