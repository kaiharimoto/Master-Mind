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

  /**
   * The last change that landed, and whether it came from this surface or
   * arrived from another one. A shared map should say who touched it last;
   * on two surfaces of one map it is also what tells a propagated change apart
   * from a locally repeated one.
   */
  lastChange: { actor: string; remote: boolean; what: string; at: number } | null = null;

  private describe(op: Op): string {
    if (op.t === 'node.set') {
      const f = op.fields as Record<string, unknown>;
      if ('pos' in f && f.placed === true) return 'placed a node';
      if ('pos' in f) return 'moved a node';
      if ('text' in f) return 'edited text';
      if ('color' in f) return 'changed a colour';
      if ('label' in f) return 'set a label';
      return 'edited a node';
    }
    if (op.t === 'link.add') return 'connected two nodes';
    if (op.t === 'link.del') return 'removed a filament';
    if (op.t === 'node.del') return 'deleted a node';
    return op.t;
  }

  attach(t: Transport) {
    this.transport = t;
    t.onRemote(op => {
      this.lastTs = Math.max(this.lastTs, op.ts);
      if (applyOp(this.doc, op)) {
        this.lastChange = { actor: op.actor, remote: op.actor !== this.actor,
                            what: this.describe(op), at: op.ts };
        this.emit(op);
      }
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
    if (applyOp(this.doc, op)) {
      this.lastChange = { actor: op.actor, remote: false, what: this.describe(op), at: op.ts };
      this.emit(op);
    }
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

  // -- undoing a move ------------------------------------------------------

  /**
   * PUTTING A DISTRICT BACK.
   *
   * Positions are sacred and layouts are never auto-tidied — which cuts both
   * ways: nothing may move a thought without an explicit act, and an explicit
   * act that moved the wrong thing left no way back. The closed fist takes
   * whatever district the hand is over, and the cycle-11 Audience watched four
   * grabs pile two districts on top of each other across artifact 17, ending
   * the take with a messier map than it started and no route to the one before.
   *
   * So: a bounded stack of MOVES, and only moves. Each entry is one user act —
   * a drag, a cluster grab, a placement — holding every coordinate that act
   * changed, as it stood before. Undoing writes those coordinates back through
   * `commit`, so it crosses to the other surface like any other explicit act
   * and is not a local rewind of a shared model. Nothing else is undoable: this
   * is not a general history, it is the way back from a move.
   */
  private moveStack: { what: string; at: number; before: [NodeId, Vec3][] }[] = [];
  /** Acts that fell off the bottom of the stack and can no longer be undone. */
  movesDropped = 0;
  private pending: Map<NodeId, Vec3> | null = null;

  /**
   * Start collecting one act's worth of position changes.
   *
   * AN OPEN GROUP IS CLOSED FIRST. Two paths call this — a pointer drag and a
   * hand grab — and a hand grab is released by the hand LEAVING, which never
   * happens if tracking is switched off mid-hold. Artifact 17 does exactly
   * that at frame 780 and then starts a mouse drag, and the second `beginMove`
   * replaced the pending map: the last fist's coordinates were never recorded,
   * so the take emptied its undo stack and still did not give the map back.
   * `mapReturnedToItsStartingLayout` caught it.
   */
  beginMove() {
    if (this.pending && this.pending.size) this.endMove('moved thoughts');
    this.pending = new Map();
  }

  /**
   * Close the act. Pushed only if a coordinate actually differs — a press that
   * never moved anything must not fill the stack with entries that undo to the
   * state they are already in.
   */
  endMove(what: string) {
    const p = this.pending;
    this.pending = null;
    if (!p || !p.size) return;
    const before: [NodeId, Vec3][] = [];
    for (const [id, pos] of p) {
      const n = this.doc.nodes[id];
      if (!n) continue;
      if (n.pos[0] !== pos[0] || n.pos[1] !== pos[1] || n.pos[2] !== pos[2]) before.push([id, pos]);
    }
    if (!before.length) return;
    this.moveStack.push({ what, at: Date.now(), before });
    // A CAP THAT DROPS ACTS SILENTLY IS A CAP THAT LOSES MAPS. At 24 the
    // hand-vocabulary take overran it — a held fist opens a new act every time
    // the detector loses the hand for a frame — so the oldest moves fell off
    // the bottom and undoing everything on the stack could not return the
    // layout. `mapReturnedToItsStartingLayout` caught it. The bound is now high
    // enough for a working session, each entry is a handful of vectors, and
    // what it does drop is counted so it can never be silent again.
    while (this.moveStack.length > 200) { this.moveStack.shift(); this.movesDropped++; }
  }

  /** Record a node's position as it stood before the act now being collected. */
  private noteMove(id: NodeId) {
    if (!this.pending || this.pending.has(id)) return;
    const n = this.doc.nodes[id];
    if (n) this.pending.set(id, [n.pos[0], n.pos[1], n.pos[2]]);
  }

  /** What the next undo would put back, for anything that wants to say so. */
  get undoableMove() {
    const top = this.moveStack[this.moveStack.length - 1];
    return top ? { what: top.what, nodes: top.before.length } : null;
  }
  get undoDepth() { return this.moveStack.length; }

  /**
   * Put the last move back, coordinate for coordinate.
   *
   * The ORIGINAL vectors are written, never an inverse delta: adding 1.7 and
   * subtracting 1.7 does not return a float to where it started, and a position
   * guarantee measured to six decimals cannot afford the difference.
   */
  undoMove(): { what: string; nodes: number } | null {
    const top = this.moveStack.pop();
    if (!top) return null;
    for (const [id, pos] of top.before) {
      if (!this.doc.nodes[id]) continue;
      this.commit(ts => ({ t: 'node.set', id, actor: this.actor, ts,
                           fields: { pos: [pos[0], pos[1], pos[2]], lastTouchedAt: Date.now() } }));
    }
    return { what: top.what, nodes: top.before.length };
  }

  // -- placement (explicit user acts only) ---------------------------------

  /** Drag out of holding to a permanent spot. The node stays exactly there. */
  place(id: NodeId, pos: Vec3, label?: string) {
    const n = this.doc.nodes[id];
    if (!n) return;
    // 'holding' is a state, not a name. It is cleared on placement so the word
    // does not outlive the state it described.
    const nextLabel = label !== undefined ? label : (n.label === 'holding' ? '' : n.label);
    this.noteMove(id);
    this.commit(ts => ({
      t: 'node.set', id, actor: this.actor, ts,
      fields: { pos, placed: true, lastTouchedAt: Date.now(), label: nextLabel },
    }));
  }

  /** Move an already-placed node. Also an explicit drag. */
  move(id: NodeId, pos: Vec3) {
    if (!this.doc.nodes[id]) return;
    this.noteMove(id);
    this.commit(ts => ({ t: 'node.set', id, actor: this.actor, ts, fields: { pos, lastTouchedAt: Date.now() } }));
  }

  /** Move a whole cluster, preserving every internal arrangement exactly. */
  moveCluster(ids: NodeId[], delta: Vec3) {
    for (const id of ids) {
      const n = this.doc.nodes[id];
      if (!n) continue;
      this.noteMove(id);
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
