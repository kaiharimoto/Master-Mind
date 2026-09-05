// Input controllers over the Scene. One per surface; both drive the same store.
import * as THREE from 'three';
import type { NodeId, Vec3 } from '../core/model.js';
import type { Store } from '../core/store.js';
import type { Scene } from '../render/scene.js';

const clamp = (v: number, a: number, b: number) => Math.min(Math.max(v, a), b);
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export interface ControlHooks {
  onSelect: (id: NodeId | null) => void;
  onQuickAdd: (screen: { x: number; y: number }) => void;
  onGestureFired: (gestureId: string, detail: string) => void;
  onDragEnd?: () => void;
}

export class Controls {
  private dragging: NodeId | null = null;
  private dragPlane = new THREE.Vector3();
  private dragCluster: NodeId[] | null = null;
  private dragLast = new THREE.Vector3();
  private downAt = { x: 0, y: 0, t: 0 };
  private lpFired = false;
  /** True once a begun drag has actually moved. A press that never moves is a tap. */
  private dragMoved = false;
  private lastTapId: NodeId | null = null;
  private lastTapT = 0;
  private linkFrom: NodeId | null = null;
  private orbiting = false;
  private pinchDist = 0;
  private lp: { x: number; y: number; at: number } | null = null;
  /** Supplied by the app: virtual time during capture, wall clock otherwise. */
  now: () => number = () => performance.now();
  longPressMs = 500;
  /** Set while a fly-to is in flight. */
  private fly: { from: { t: THREE.Vector3; yaw: number; pitch: number; d: number };
                 to:   { t: THREE.Vector3; yaw: number; pitch: number; d: number };
                 t0: number; ms: number } | null = null;

  minDist = 4; maxDist = 900;
  /** AR uses gyro for orientation; pointer drag then only inspects. */
  gyroDriven = false;
  private gyroBase: { yaw: number; pitch: number } | null = null;

  constructor(private scene: Scene, private store: Store, private hooks: ControlHooks) {}

  get linkArmed() { return this.linkFrom; }

  /**
   * Time-based input that must not depend on wall clock: the long-press that
   * fires quick-add. Called once per rendered frame.
   */
  tickTimers(nowMs = this.now()) {
    if (this.lp && nowMs - this.lp.at >= this.longPressMs) {
      const { x, y } = this.lp;
      this.lp = null; this.orbiting = false; this.lpFired = true;
      this.hooks.onGestureFired('longpress', 'Quick-add into holding');
      this.hooks.onQuickAdd({ x, y });
    }
  }
  clearLink() { this.linkFrom = null; }

  // -- camera --------------------------------------------------------------

  orbit(dx: number, dy: number) {
    this.scene.pose.yaw -= dx * 0.0055;
    this.scene.pose.pitch = clamp(this.scene.pose.pitch + dy * 0.0045, -1.45, 1.45);
  }
  zoom(factor: number) {
    this.scene.pose.dist = clamp(this.scene.pose.dist * factor, this.minDist, this.maxDist);
  }
  panTarget(dx: number, dy: number) {
    const p = this.scene.pose, cp = Math.cos(p.pitch);
    const dir = new THREE.Vector3(cp * Math.sin(p.yaw), Math.sin(p.pitch), cp * Math.cos(p.yaw));
    const right = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), dir).normalize();
    const up = new THREE.Vector3().crossVectors(dir, right).normalize();
    const k = p.dist * 0.0016;
    p.target.addScaledVector(right, -dx * k).addScaledVector(up, dy * k);
  }

  /** Fly the view to a node in its actual place, ending crisp enough to read. */
  flyTo(id: NodeId, ms = 1300, endDist = 13) {
    const n = this.store.node(id);
    if (!n) return;
    const p = this.scene.pose;
    this.fly = {
      from: { t: p.target.clone(), yaw: p.yaw, pitch: p.pitch, d: p.dist },
      to: { t: new THREE.Vector3(n.pos[0], n.pos[1], n.pos[2]),
            yaw: p.yaw + 0.34, pitch: clamp(p.pitch * 0.55 + 0.08, -0.6, 0.6), d: endDist },
      t0: this.now(), ms,
    };
  }
  get flying() { return this.fly !== null; }
  /** Advance a fly-to. `nowMs` lets the harness drive it deterministically. */
  tickFly(nowMs = this.now()): boolean {
    if (!this.fly) return false;
    const f = this.fly;
    const k = easeInOut(clamp((nowMs - f.t0) / f.ms, 0, 1));
    const p = this.scene.pose;
    p.target.lerpVectors(f.from.t, f.to.t, k);
    p.yaw = f.from.yaw + (f.to.yaw - f.from.yaw) * k;
    p.pitch = f.from.pitch + (f.to.pitch - f.from.pitch) * k;
    p.dist = f.from.d + (f.to.d - f.from.d) * k;
    if (k >= 1) { this.fly = null; return false; }
    return true;
  }

  // -- gyro (Android AR) ---------------------------------------------------

  /** Orientation drives the view. Positions are untouched — this moves the camera. */
  applyOrientation(alpha: number, beta: number, _gamma: number) {
    const yaw = -(alpha * Math.PI) / 180;
    const pitch = clamp(((beta - 90) * Math.PI) / 180, -1.2, 1.2);
    if (!this.gyroBase) this.gyroBase = { yaw: this.scene.pose.yaw - yaw, pitch: this.scene.pose.pitch - pitch };
    this.scene.pose.yaw = this.gyroBase.yaw + yaw;
    this.scene.pose.pitch = clamp(this.gyroBase.pitch + pitch, -1.35, 1.35);
  }
  resetGyroBase() { this.gyroBase = null; }

  // -- picking and dragging ------------------------------------------------

  /**
   * The last cluster move: what was grabbed, how far it travelled, and how far
   * any member drifted relative to the others. Moving a district is the only
   * act in the build that writes many positions at once, so it reports what it
   * did rather than leaving "the internal arrangement is preserved" on trust.
   */
  lastClusterMove: { label: string; members: number; travelled: number; drift: number } | null = null;
  private clusterStart: { ids: NodeId[]; offsets: Vec3[]; centroid: Vec3 } | null = null;

  private snapshotCluster(ids: NodeId[]) {
    const ns = ids.map(i => this.store.doc.nodes[i]).filter(Boolean);
    if (!ns.length) return null;
    const c: Vec3 = [0, 0, 0];
    for (const n of ns) { c[0] += n.pos[0]; c[1] += n.pos[1]; c[2] += n.pos[2]; }
    c[0] /= ns.length; c[1] /= ns.length; c[2] /= ns.length;
    return { ids: ns.map(n => n.id), centroid: c,
             offsets: ns.map(n => [n.pos[0] - c[0], n.pos[1] - c[1], n.pos[2] - c[2]] as Vec3) };
  }

  private beginDrag(id: NodeId, cluster: boolean) {
    const n = this.store.node(id);
    if (!n) return;
    this.dragging = id;
    this.dragMoved = false;
    this.dragPlane.set(n.pos[0], n.pos[1], n.pos[2]);
    this.dragLast.copy(this.dragPlane);
    if (cluster) {
      // A cluster is the district a node belongs to. Moving it translates every
      // member by the same delta, so the internal arrangement is preserved exactly.
      const label = n.label;
      this.dragCluster = Object.values(this.store.doc.nodes)
        .filter(m => m.placed && m.label === label).map(m => m.id);
      this.clusterStart = this.snapshotCluster(this.dragCluster);
    } else { this.dragCluster = null; this.clusterStart = null; }
  }

  private moveDrag(sx: number, sy: number) {
    if (!this.dragging) return;
    const world = this.scene.screenToWorld(sx, sy, this.dragPlane);
    if (this.dragCluster) {
      const d: Vec3 = [world.x - this.dragLast.x, world.y - this.dragLast.y, world.z - this.dragLast.z];
      this.store.moveCluster(this.dragCluster, d);
      this.dragLast.copy(world);
    } else {
      // A node in flight is still HELD. Placement is committed on release, not
      // on the first pixel of movement: clearing the unplaced flag at drag-start
      // made the holding count report intent rather than outcome, so the chip
      // fell to 4 while the node was still visibly inside the dashed boundary
      // and under the cursor. Position tracks the drag; state does not.
      const pos: Vec3 = [world.x, world.y, world.z];
      this.store.move(this.dragging, pos);
    }
    this.scene.markDirty();
  }

  private endDrag() {
    // The thought lands here, and the holding count falls here.
    if (this.dragging && this.dragMoved && !this.dragCluster) {
      const n = this.store.node(this.dragging);
      if (n && !n.placed) this.store.place(this.dragging, [n.pos[0], n.pos[1], n.pos[2]]);
    }
    if (this.dragging) this.hooks.onDragEnd?.();
    if (this.dragCluster && this.clusterStart && this.dragMoved) {
      const end = this.snapshotCluster(this.clusterStart.ids);
      const n0 = this.store.node(this.clusterStart.ids[0]);
      if (end && n0) {
        let drift = 0;
        for (let i = 0; i < end.offsets.length; i++) {
          const a = this.clusterStart.offsets[i], b = end.offsets[i];
          drift = Math.max(drift, Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]));
        }
        this.lastClusterMove = {
          label: n0.label || '(unlabelled)', members: end.ids.length,
          travelled: Math.hypot(end.centroid[0] - this.clusterStart.centroid[0],
                                end.centroid[1] - this.clusterStart.centroid[1],
                                end.centroid[2] - this.clusterStart.centroid[2]),
          drift,
        };
      }
    }
    this.dragging = null; this.dragCluster = null; this.clusterStart = null;
  }

  /** The cluster a node belongs to — used by the hand "grab cluster" pose too. */
  clusterOf(id: NodeId): NodeId[] {
    const n = this.store.node(id);
    if (!n) return [];
    return Object.values(this.store.doc.nodes).filter(m => m.placed && m.label === n.label).map(m => m.id);
  }

  // -- mouse (Windows) -----------------------------------------------------

  attachMouse(el: HTMLElement) {
    el.addEventListener('mousedown', e => {
      const [x, y] = this.toCanvas(el, e.clientX, e.clientY);
      this.downAt = { x, y, t: this.now() };
      const id = this.scene.pick(x, y);
      if (id && e.button === 0) {
        this.beginDrag(id, e.altKey);
        this.hooks.onGestureFired(e.altKey ? 'mouse-alt-drag' : 'mouse-drag', e.altKey ? 'Grab cluster' : 'Move node');
      } else if (e.button === 0) this.orbiting = true;
    });
    el.addEventListener('mousemove', e => {
      const [x, y] = this.toCanvas(el, e.clientX, e.clientY);
      if (this.dragging) {
        if (!this.dragMoved && Math.hypot(x - this.downAt.x, y - this.downAt.y) <= 4) return;
        this.dragMoved = true;
        this.moveDrag(x, y);
      } else if (this.orbiting) this.orbit(e.movementX, e.movementY);
    });
    const up = (e: MouseEvent) => {
      const [x, y] = this.toCanvas(el, e.clientX, e.clientY);
      const moved = Math.hypot(x - this.downAt.x, y - this.downAt.y);
      if (moved < 5 && !this.dragCluster) {
        const id = this.scene.pick(x, y);
        if (this.linkFrom && id && id !== this.linkFrom) {
          this.store.connect(this.linkFrom, id);
          this.hooks.onGestureFired('mouse-click', 'Connect');
          this.linkFrom = null;
        }
        this.hooks.onSelect(id);
      }
      this.endDrag(); this.orbiting = false;
    };
    el.addEventListener('mouseup', up);
    el.addEventListener('mouseleave', () => { this.endDrag(); this.orbiting = false; });
    el.addEventListener('wheel', e => {
      e.preventDefault();
      this.zoom(e.deltaY > 0 ? 1.12 : 1 / 1.12);
      this.hooks.onGestureFired(e.deltaY > 0 ? 'mouse-scroll-down' : 'mouse-scroll-up', e.deltaY > 0 ? 'Gather' : 'Spread');
    }, { passive: false });
    el.addEventListener('contextmenu', e => e.preventDefault());
  }

  armLink(id: NodeId) { this.linkFrom = id; }

  // -- touch (Android) -----------------------------------------------------

  attachTouch(el: HTMLElement) {
    const cancelLp = () => { this.lp = null; };

    el.addEventListener('touchstart', e => {
      e.preventDefault();
      if (e.touches.length === 2) {
        cancelLp(); this.endDrag(); this.orbiting = false;
        this.pinchDist = this.touchSpan(e.touches);
        return;
      }
      const t = e.touches[0];
      const [x, y] = this.toCanvas(el, t.clientX, t.clientY);
      this.downAt = { x, y, t: this.now() };
      const id = this.scene.pick(x, y);
      if (id) {
        this.beginDrag(id, false);
      } else {
        this.orbiting = true;
        // Long-press on empty space is the capture gesture.
        this.lp = { x, y, at: this.now() };
      }
    }, { passive: false });

    el.addEventListener('touchmove', e => {
      e.preventDefault();
      if (e.touches.length === 2) {
        const d = this.touchSpan(e.touches);
        if (this.pinchDist > 0) {
          this.zoom(this.pinchDist / d);
          this.hooks.onGestureFired('pinch', d > this.pinchDist ? 'Zoom in' : 'Zoom out');
        }
        this.pinchDist = d;
        return;
      }
      const t = e.touches[0];
      const [x, y] = this.toCanvas(el, t.clientX, t.clientY);
      // Measured from where the finger went down, not from the running orbit
      // anchor — otherwise an orbit never travels far enough to cancel the
      // long-press, and a second capture fires mid-gesture.
      const far = this.lp
        ? Math.hypot(x - this.lp.x, y - this.lp.y) > 8
        : Math.hypot(x - this.downAt.x, y - this.downAt.y) > 8;
      if (far) cancelLp();
      if (this.dragging) {
        // A press that never travels is a tap, not a placement — so the node
        // only moves once the finger has actually gone somewhere.
        if (!far && !this.dragMoved) return;
        this.dragMoved = true;
        this.moveDrag(x, y);
        this.hooks.onGestureFired('dragnode', 'Place / move');
      } else if (this.orbiting) {
        this.orbit(x - this.downAt.x, y - this.downAt.y);
        this.downAt.x = x; this.downAt.y = y;
        this.hooks.onGestureFired('dragempty', 'Look around');
      }
    }, { passive: false });

    el.addEventListener('touchend', e => {
      e.preventDefault();
      cancelLp();
      const moved = this.dragMoved || this.lpFired;
      this.lpFired = false;
      const now = this.now();
      const t = e.changedTouches[0];
      const [x, y] = this.toCanvas(el, t.clientX, t.clientY);
      const still = Math.hypot(x - this.downAt.x, y - this.downAt.y) < 12;
      const id = this.scene.pick(x, y);
      if (still && !moved) {
        const isDouble = id !== null && this.lastTapId !== null && now - this.lastTapT < 420;
        if (isDouble && id) {
          if (this.lastTapId === id) { this.linkFrom = id; this.hooks.onGestureFired('doubletap', 'Link armed'); }
          else { this.store.connect(this.lastTapId!, id); this.hooks.onGestureFired('doubletap', 'Connect'); this.linkFrom = null; }
          this.lastTapId = null; this.lastTapT = 0;
        } else {
          if (this.linkFrom && id && id !== this.linkFrom) {
            this.store.connect(this.linkFrom, id);
            this.hooks.onGestureFired('doubletap', 'Connect');
            this.linkFrom = null;
          } else this.hooks.onGestureFired('tap', id ? 'Select and inspect' : 'Deselect');
          this.hooks.onSelect(id);
          this.lastTapId = id; this.lastTapT = now;
        }
      }
      this.endDrag(); this.orbiting = false; this.pinchDist = 0;
    }, { passive: false });
  }

  private touchSpan(t: TouchList) {
    return Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
  }
  private toCanvas(el: HTMLElement, cx: number, cy: number): [number, number] {
    const r = el.getBoundingClientRect();
    const c = this.scene.renderer.domElement;
    return [((cx - r.left) / r.width) * c.width, ((cy - r.top) / r.height) * c.height];
  }
}
