// The scene: one live map state projected into the four world draw calls.
// Every lens (canvas, mind expansion, AR) drives this same class.
import * as THREE from 'three';
import {
  type MapDoc, type MMNode, type NodeId, type NodeState,
  nodeList, linkList, recencyOf, resolveStates,
} from '../core/model.js';
import {
  NodeLayer, FilamentLayer, HoldingShell, GROUND, TEXT_COLOR, hue,
  type NodeInstance, type LinkInstance,
} from './world.js';
import { TextLayer, type FontMeta, type TextRun } from './text.js';

export type LensKind = 'canvas' | 'expansion' | 'ar';

export interface LensProfile {
  nodeMinPx: number; nodeMaxPx: number;
  textMinPx: number; textMaxPx: number;
  textPerLine: number; textLines: number;
  fadeStart: number; fadeEnd: number;
  fov: number;
}

export const LENS_PROFILE: Record<LensKind, LensProfile> = {
  // Everyday editing: comfortable reading, moderate depth.
  canvas:    { nodeMinPx: 15, nodeMaxPx: 84,  textMinPx: 12.5, textMaxPx: 24, textPerLine: 22, textLines: 2, fadeStart: 46, fadeEnd: 250, fov: 52 },
  // Whole-brain: everything on screen at once and still legible at 100+ nodes.
  expansion: { nodeMinPx: 15, nodeMaxPx: 90,  textMinPx: 11.5, textMaxPx: 22, textPerLine: 26, textLines: 1, fadeStart: 90, fadeEnd: 420, fov: 46 },
  // AR: a view-first lens; text a little larger for a handheld surface.
  ar:        { nodeMinPx: 16, nodeMaxPx: 96,  textMinPx: 13.0, textMaxPx: 21, textPerLine: 24, textLines: 1, fadeStart: 34, fadeEnd: 190, fov: 62 },
};

/** Node size varies with connection degree — a real signal, not decoration. */
export function sizeForDegree(deg: number): number {
  return 0.46 + 0.34 * Math.min(deg, 8) / 8;
}

export interface CameraPose { target: THREE.Vector3; yaw: number; pitch: number; dist: number; }

/**
 * The settled (least-recent) end of a hue's chroma range, solved so that the
 * step from settled to freshly-touched is a constant chroma distance across
 * every hue in the palette rather than a constant saturation number.
 *
 * RECENCY_STEP is that distance, in the same units as the shader's mix toward
 * the hue's own luminance-preserving grey. A hue whose full chroma is smaller
 * than the step cannot carry it and is floored instead of going achromatic.
 */
const RECENCY_STEP = 0.20, SETTLED_FLOOR = 0.28;
const SETTLED_CACHE = new Map<number, number>();
function settledSat(c: THREE.Color): number {
  const key = c.getHex();
  let v = SETTLED_CACHE.get(key);
  if (v === undefined) {
    const lum = 0.299 * c.r + 0.587 * c.g + 0.114 * c.b;
    const chroma = Math.hypot(c.r - lum, c.g - lum, c.b - lum);
    v = chroma < 1e-4 ? SETTLED_FLOOR : Math.min(Math.max(1 - RECENCY_STEP / chroma, SETTLED_FLOOR), 0.92);
    SETTLED_CACHE.set(key, v);
  }
  return v;
}

export class Scene {
  readonly scene = new THREE.Scene();
  readonly camera: THREE.PerspectiveCamera;
  readonly nodes = new NodeLayer();
  readonly filaments = new FilamentLayer();
  readonly holding = new HoldingShell();
  readonly text: TextLayer;
  readonly renderer: THREE.WebGLRenderer;

  pose: CameraPose = { target: new THREE.Vector3(), yaw: 0.6, pitch: 0.22, dist: 70 };
  lens: LensKind = 'canvas';
  /** Frozen time for diffable captures; the only animated thing is the unplaced pulse. */
  clock = 0;

  private doc: MapDoc | null = null;
  private selected: NodeId | null = null;
  private hits = new Set<NodeId>();
  private screenCache: { id: NodeId; x: number; y: number; r: number; z: number; pxPerWorld: number }[] = [];
  /** Run order and priority for label deconfliction, rebuilt with the text. */
  private runMeta: { id: NodeId; priority: number; baseAlpha: number }[] = [];
  private runAlphas = new Float32Array(0);
  private runShifts = new Float32Array(0);
  private dirty = true;

  constructor(readonly canvas: HTMLCanvasElement, fontMeta: FontMeta, atlas: THREE.Texture) {
    THREE.ColorManagement.enabled = false;
    this.renderer = new THREE.WebGLRenderer({
      // MSAA on a CPU rasteriser costs more than it buys: node rings and SDF
      // text are already analytically antialiased in their own shaders.
      canvas, antialias: false, alpha: false, powerPreference: 'high-performance',
      preserveDrawingBuffer: false,
    });
    this.renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    this.renderer.setPixelRatio(1);
    this.renderer.setClearColor(new THREE.Color(GROUND), 1);
    this.camera = new THREE.PerspectiveCamera(52, 16 / 9, 0.1, 4000);
    this.text = new TextLayer(fontMeta, atlas, { emWorld: 0.92, minPx: 12.5, maxPx: 40 });
    this.scene.add(this.filaments.mesh, this.holding.mesh, this.nodes.mesh, this.text.mesh);
    this.applyLens('canvas');
  }

  applyLens(kind: LensKind) {
    this.lens = kind;
    const p = LENS_PROFILE[kind];
    this.nodes.setPx(p.nodeMinPx, p.nodeMaxPx);
    this.nodes.setFade(p.fadeStart, p.fadeEnd);
    this.filaments.setFade(p.fadeStart, p.fadeEnd);
    this.text.setSizePx(p.textMinPx, p.textMaxPx);
    this.text.setNodePx(p.nodeMinPx, p.nodeMaxPx);
    this.text.setFade(p.fadeStart, p.fadeEnd);
    this.camera.fov = p.fov;
    this.camera.updateProjectionMatrix();
    this.dirty = true;
  }

  setSize(w: number, h: number) {
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.nodes.setViewport(w, h);
    this.text.setViewport(w, h);
  }

  setDoc(doc: MapDoc | null) { this.doc = doc; this.dirty = true; }
  getDoc() { return this.doc; }
  setSelection(id: NodeId | null) { if (id !== this.selected) { this.selected = id; this.dirty = true; } }
  getSelection() { return this.selected; }
  setHits(ids: Iterable<NodeId>) { this.hits = new Set(ids); this.dirty = true; }
  getHits() { return this.hits; }
  markDirty() { this.dirty = true; }

  /** Project the live doc into instance buffers. Positions are copied, never computed. */
  rebuild() {
    const doc = this.doc;
    if (!doc) { this.nodes.build([]); this.filaments.build([]); this.text.build([]); return; }
    const states = resolveStates(doc, this.selected, this.hits);
    const deg = new Map<NodeId, number>();
    for (const l of Object.values(doc.links)) {
      deg.set(l.a, (deg.get(l.a) ?? 0) + 1);
      deg.set(l.b, (deg.get(l.b) ?? 0) + 1);
    }
    const ns = nodeList(doc);
    const inst: NodeInstance[] = [];
    const runs: TextRun[] = [];
    // Lower number wins a collision. Nearer nodes break ties, per frame.
    const PRIORITY: Record<NodeState, number> = {
      selected: 0, searchHit: 1, unplaced: 2, connected: 3, plain: 4,
    };
    this.runMeta = [];
    const posOf = new Map<NodeId, THREE.Vector3>();
    const textCol = new THREE.Color(TEXT_COLOR);
    for (const n of ns) {
      const st: NodeState = states.get(n.id) ?? 'plain';
      const p = new THREE.Vector3(n.pos[0], n.pos[1], n.pos[2]);
      posOf.set(n.id, p);
      const size = sizeForDegree(deg.get(n.id) ?? 0);
      // Chroma is the recency channel (D-007). It touches nothing else.
      //
      // The span is now NORMALISED PER HUE. A single saturation range gave each
      // hue a different perceptual step, because mixing toward grey moves a
      // high-chroma amber much further than a near-achromatic bone: the same
      // number did not mean the same thing, and the frontier could not be read
      // off the frame. The settled end of each hue's range is solved so that
      // settled -> recent is the same chroma DISTANCE for every hue.
      // The CHANNEL is unchanged; only how its span is computed.
      const col = hue(n.color), s0 = settledSat(col);
      const sat = s0 + (1 - s0) * recencyOf(doc, n);
      inst.push({ pos: p, color: col, state: st, size, sat });
      this.runMeta.push({ id: n.id, priority: PRIORITY[st], baseAlpha: st === 'plain' ? 0.86 : 1.0 });
      // Unplaced nodes sit in a ring. Their labels are pushed to the outward
      // side so they radiate from the holding cluster rather than pile onto it.
      const side: -1 | 0 | 1 = n.placed ? 0 : (n.pos[0] < doc.holding.origin[0] ? -1 : 1);
      runs.push({
        // A search hit wears four ticks at 1.9x its core radius. Anchoring the
        // label to the core radius put the text straight through the south
        // tick, so the state signature was overdrawn by its own label. The
        // label clears the signature, not just the node.
        anchor: p, text: n.text, color: textCol,
        nodeSizeWorld: st === 'searchHit' ? size * 1.9 : size, side,
        alpha: st === 'plain' ? 0.86 : 1.0,
        // Deterministic, position-free stagger: half the labels sit above their
        // node, half below. Halves label collisions in dense districts and never
        // moves anything.
        above: (n.id.charCodeAt(1) & 1) === 1,
      });
    }
    this.nodes.build(inst);
    const p = LENS_PROFILE[this.lens];
    this.text.build(runs, p.textPerLine, p.textLines);
    if (this.runAlphas.length !== this.runMeta.length) this.runAlphas = new Float32Array(this.runMeta.length);
    if (this.runShifts.length !== this.runMeta.length * 2) this.runShifts = new Float32Array(this.runMeta.length * 2);

    // A filament is live when it touches the selection or a search hit.
    const links: LinkInstance[] = [];
    for (const l of linkList(doc)) {
      const a = posOf.get(l.a), b = posOf.get(l.b);
      if (!a || !b) continue;
      const live = l.a === this.selected || l.b === this.selected || this.hits.has(l.a) || this.hits.has(l.b);
      links.push({ a, b, live });
    }
    this.filaments.build(links);
    this.holding.set(new THREE.Vector3(...doc.holding.origin), doc.holding.radius);
    this.screenCache = [];
    this.dirty = false;
  }

  applyPose() {
    const { target, yaw, pitch, dist } = this.pose;
    const cp = Math.cos(pitch);
    this.camera.position.set(
      target.x + dist * cp * Math.sin(yaw),
      target.y + dist * Math.sin(pitch),
      target.z + dist * cp * Math.cos(yaw),
    );
    this.camera.up.set(0, 1, 0);
    this.camera.lookAt(target);
    this.camera.updateMatrixWorld();
  }

  render() {
    if (this.dirty) this.rebuild();
    this.nodes.setTime(this.clock);
    this.applyPose();
    this.deconflictLabels();
    this.renderer.render(this.scene, this.camera);
    this.screenCache = [];
  }

  /**
   * Screen-space label deconfliction.
   *
   * Labels are laid out from world positions, so in a dense district they
   * overprint each other and the one thought you flew in to read can be the one
   * you cannot. This walks them in priority order — selected, search hit,
   * unplaced, connected to selection, plain, nearest first within a rank — and
   * fades a label in proportion to how much of it a higher-priority label has
   * already claimed.
   *
   * It fades rather than hides: nothing ever pops out of existence, and a
   * crowded label recedes instead of disappearing.
   */
  private deconflictLabels() {
    const doc = this.doc;
    if (!doc || !this.runMeta.length) return;
    const p = LENS_PROFILE[this.lens];
    const scr = this.screenPositions();
    if (!scr.length) return;
    const byId = new Map(scr.map(s => [s.id, s]));
    const em = 0.92;

    type Box = { i: number; x0: number; y0: number; x1: number; y1: number; pri: number; z: number };
    // A label may be re-anchored to a free side of its OWN node before it is
    // dimmed. Fading alone left dense districts as a pile of half-lit text;
    // moving the text to a clear side of the same node keeps it readable and
    // keeps it attached. The node itself never moves.
    const CAND: [number, number][] = [
      [0, 0], [0, -1.30], [0, 1.30],
      [-0.62, -0.62], [0.62, -0.62], [-0.62, 0.62], [0.62, 0.62],
      [0, -2.55], [0, 2.55],
    ];
    const boxes: Box[] = [];
    const shape: { w: number; h: number; emPx: number; bx0: number; by0: number }[] = [];
    for (let i = 0; i < this.runMeta.length; i++) {
      const meta = this.runMeta[i];
      const s = byId.get(meta.id);
      const span = this.text.spans[i];
      this.runShifts[i * 2] = 0; this.runShifts[i * 2 + 1] = 0;
      if (!s || !span) { this.runAlphas[i] = 0; shape[i] = { w: 0, h: 0, emPx: 1, bx0: 0, by0: 0 }; continue; }
      const emPx = Math.min(Math.max(em * s.pxPerWorld, p.textMinPx), p.textMaxPx);
      const nodePx = Math.min(Math.max(s.r / 0.6, p.nodeMinPx), p.nodeMaxPx);
      // The rectangle is derived from the run's OWN glyph extents, in the
      // shader's space, so the model and what is drawn cannot drift apart. An
      // approximation from the line count put boxes as much as 1.4 em from the
      // glyphs and reported two visibly overlapping labels as disjoint.
      const node = -span.vSide * nodePx * 0.62;
      const x0 = s.x + span.x0Em * emPx;
      const w = Math.max((span.x1Em - span.x0Em) * emPx, 6);
      // Shader y is up; screen y is down.
      const y0 = s.y - (span.y1Em * emPx + node);
      const h = Math.max((span.y1Em - span.y0Em) * emPx, 6);
      shape[i] = { w, h, emPx, bx0: x0, by0: y0 };
      boxes.push({ i, x0, x1: x0 + w, y0, y1: y0 + h, pri: meta.priority, z: s.z });
      this.runAlphas[i] = meta.baseAlpha;
    }
    boxes.sort((a, b) => a.pri - b.pri || a.z - b.z);

    // The bright tier is DISJOINT: a label is drawn at full weight only when its
    // clearest placement overlaps nothing already accepted, so two labels at
    // full weight can never sit on each other. Everything else ramps to zero by
    // DIM_MAX. Fewer labels are bright at whole-map framing than a softer rule
    // would give, which is the honest cost of the invariant.
    const BRIGHT_MAX = 0, DIM_MAX = 0.30;
    const taken: Box[] = [];
    const coverage = (x0: number, y0: number, x1: number, y1: number, area: number) => {
      let covered = 0;
      for (const t of taken) {
        const ox = Math.min(x1, t.x1) - Math.max(x0, t.x0);
        if (ox <= 0) continue;
        const oy = Math.min(y1, t.y1) - Math.max(y0, t.y0);
        if (oy <= 0) continue;
        covered += ox * oy;
        if (covered >= area) break;
      }
      return Math.min(covered / area, 1);
    };
    for (const b of boxes) {
      const sh = shape[b.i];
      const area = Math.max(sh.w * sh.h, 1);
      let best = { frac: 1, dx: 0, dy: 0 };
      for (const [cx, cy] of CAND) {
        const dx = cx * sh.emPx, dy = cy * sh.emPx;
        const frac = coverage(sh.bx0 + dx, sh.by0 + dy, sh.bx0 + sh.w + dx, sh.by0 + sh.h + dy, area);
        // The unshifted anchor is preferred: a candidate only wins if it is
        // meaningfully clearer, so labels do not jitter between placements.
        if (frac < best.frac - (cx === 0 && cy === 0 ? 0 : 0.06) ||
            (cx === 0 && cy === 0 && frac <= best.frac)) best = { frac, dx: cx, dy: cy };
        if (best.frac <= 0) break;   // already clear of everything accepted
      }
      this.runShifts[b.i * 2] = best.dx;
      this.runShifts[b.i * 2 + 1] = -best.dy;   // screen y grows downward; the shader's y does not
      const px = { x0: sh.bx0 + best.dx * sh.emPx, y0: sh.by0 + best.dy * sh.emPx };
      // Two tiers, and the bright one is exclusive BY CONSTRUCTION.
      //
      // A label is drawn at full weight only if its clearest placement is at
      // most BRIGHT_MAX covered by everything already accepted — so no two
      // labels at full weight can overlap, which is the property that makes a
      // dense district readable rather than merely dimmer. Everything else
      // ramps down and is gone by DIM_MAX, so a buried label does not survive
      // as a ghost smearing the one on top of it. Both ramps are continuous in
      // coverage, so a label recedes as the camera moves; it never pops.
      // Squared falloff inside the dim tier: gentle at the boundary so nothing
      // pops as the camera turns, decisive by the time a label is a tenth
      // covered, so a demoted label stops competing with the one on top of it
      // instead of smearing it.
      const t = Math.max(0, 1 - (best.frac - BRIGHT_MAX) / (DIM_MAX - BRIGHT_MAX));
      const k = best.frac <= BRIGHT_MAX ? 1 : t * t;
      this.runAlphas[b.i] = this.runMeta[b.i].baseAlpha * k;
      // A label still carrying real weight reserves its rect, so the labels
      // behind it in priority order are placed around it rather than through it.
      if (k > 0.42) taken.push({ i: b.i, x0: px.x0, y0: px.y0, x1: px.x0 + sh.w, y1: px.y0 + sh.h,
                                 pri: b.pri, z: b.z });
    }
    this.text.setRunAlphas(this.runAlphas);
    this.text.setRunShifts(this.runShifts);
  }

  /** Screen-space positions and radii, for picking and for UI anchoring. */
  screenPositions(): { id: NodeId; x: number; y: number; r: number; z: number; pxPerWorld: number }[] {
    if (this.screenCache.length) return this.screenCache;
    const doc = this.doc;
    if (!doc) return [];
    const el = this.renderer.domElement;
    const w = el.width, h = el.height;
    const p = LENS_PROFILE[this.lens];
    const deg = new Map<NodeId, number>();
    for (const l of Object.values(doc.links)) {
      deg.set(l.a, (deg.get(l.a) ?? 0) + 1);
      deg.set(l.b, (deg.get(l.b) ?? 0) + 1);
    }
    const v = new THREE.Vector3();
    const out: { id: NodeId; x: number; y: number; r: number; z: number; pxPerWorld: number }[] = [];
    const projScale = this.camera.projectionMatrix.elements[5];
    for (const n of nodeList(doc)) {
      v.set(n.pos[0], n.pos[1], n.pos[2]).applyMatrix4(this.camera.matrixWorldInverse);
      const dist = -v.z;
      if (dist <= 0.05) continue;
      const pxPerWorld = h * projScale * 0.5 / dist;
      const half = Math.min(Math.max(sizeForDegree(deg.get(n.id) ?? 0) * pxPerWorld, p.nodeMinPx), p.nodeMaxPx);
      v.applyMatrix4(this.camera.projectionMatrix);
      out.push({ id: n.id, x: (v.x * 0.5 + 0.5) * w, y: (1 - (v.y * 0.5 + 0.5)) * h,
                 r: half * 0.6, z: dist, pxPerWorld });
    }
    this.screenCache = out;
    return out;
  }

  /**
   * Horizontal extent of everything drawn, labels included. Node positions
   * alone under-report it: a label is far wider than the node it belongs to,
   * and it is the label that ends up under a panel.
   */
  contentBoundsX(): { lo: number; hi: number } {
    const p = LENS_PROFILE[this.lens];
    let lo = Infinity, hi = -Infinity;
    const byId = new Map(this.screenPositions().map(s => [s.id, s]));
    for (let i = 0; i < this.runMeta.length; i++) {
      const s = byId.get(this.runMeta[i].id);
      const span = this.text.spans[i];
      if (!s) continue;
      const emPx = Math.min(Math.max(0.92 * s.pxPerWorld, p.textMinPx), p.textMaxPx);
      const half = Math.max(span ? (span.widthEm * emPx) / 2 : 0, s.r);
      lo = Math.min(lo, s.x - half);
      hi = Math.max(hi, s.x + half);
    }
    return { lo, hi };
  }

  pick(sx: number, sy: number, slopPx = 10): NodeId | null {
    let best: NodeId | null = null, bestD = Infinity, bestZ = Infinity;
    for (const s of this.screenPositions()) {
      const d = Math.hypot(s.x - sx, s.y - sy);
      const hitR = Math.max(s.r, 6) + slopPx;
      if (d <= hitR && (s.z < bestZ - 0.001 || (Math.abs(s.z - bestZ) < 0.001 && d < bestD))) {
        best = s.id; bestD = d; bestZ = s.z;
      }
    }
    return best;
  }

  /** Screen point -> a world position on the plane through `depthAt` facing the camera. */
  screenToWorld(sx: number, sy: number, depthAt: THREE.Vector3): THREE.Vector3 {
    const el = this.renderer.domElement;
    const ndc = new THREE.Vector3((sx / el.width) * 2 - 1, -(sy / el.height) * 2 + 1, 0.5);
    ndc.unproject(this.camera);
    const dir = ndc.sub(this.camera.position).normalize();
    const n = new THREE.Vector3();
    this.camera.getWorldDirection(n);
    const denom = dir.dot(n);
    const t = denom === 0 ? 0 : depthAt.clone().sub(this.camera.position).dot(n) / denom;
    return this.camera.position.clone().add(dir.multiplyScalar(t));
  }

  boundsOf(nodes: MMNode[] = this.doc ? nodeList(this.doc) : []): { centre: THREE.Vector3; radius: number } {
    if (!nodes.length) return { centre: new THREE.Vector3(), radius: 10 };
    const min = new THREE.Vector3(Infinity, Infinity, Infinity);
    const max = new THREE.Vector3(-Infinity, -Infinity, -Infinity);
    for (const n of nodes) {
      min.min(new THREE.Vector3(...n.pos)); max.max(new THREE.Vector3(...n.pos));
    }
    const centre = min.clone().add(max).multiplyScalar(0.5);
    return { centre, radius: Math.max(max.distanceTo(min) * 0.5, 4) };
  }

  /** Distance at which a sphere of `radius` fits the frame. */
  fitDistance(radius: number, margin = 1.18): number {
    const vFov = (this.camera.fov * Math.PI) / 180;
    const hFov = 2 * Math.atan(Math.tan(vFov / 2) * this.camera.aspect);
    return (radius * margin) / Math.tan(Math.min(vFov, hFov) / 2);
  }

  /**
   * The distance at which every node fits the frame for the CURRENT yaw/pitch.
   * Solved per bounding-box corner rather than with a bounding sphere, which
   * over-estimates badly for a map that is wide and flat.
   */
  fitAll(nodes: MMNode[] = this.doc ? nodeList(this.doc) : [], margin = 1.04,
         insets: { top?: number; bottom?: number; left?: number; right?: number } = {}):
    { target: THREE.Vector3; dist: number } {
    if (!nodes.length) return { target: new THREE.Vector3(), dist: 60 };
    // The holding cluster is part of the map, and the dashed boundary is drawn
    // at the ring's radius — further out than any node inside it. Fitting only
    // node positions clipped the boundary off the bottom of artifact 04, which
    // both the Auditor and the Art Director called a regression. The ring's own
    // extent is fitted with the nodes.
    const pts: [number, number, number][] = nodes.map(n => [n.pos[0], n.pos[1], n.pos[2]]);
    const H = this.doc?.holding;
    if (H) {
      const [ox, oy, oz] = H.origin, r = H.radius;
      for (const [dx, dy, dz] of [[r, 0, 0], [-r, 0, 0], [0, r, 0], [0, -r, 0], [0, 0, r], [0, 0, -r]])
        pts.push([ox + dx, oy + dy, oz + dz]);
    }
    const min = new THREE.Vector3(Infinity, Infinity, Infinity);
    const max = new THREE.Vector3(-Infinity, -Infinity, -Infinity);
    for (const p of pts) { min.min(new THREE.Vector3(...p)); max.max(new THREE.Vector3(...p)); }
    const target = min.clone().add(max).multiplyScalar(0.5);
    const vFov = (this.camera.fov * Math.PI) / 180;
    const tanV = Math.tan(vFov / 2);
    const tanH = tanV * this.camera.aspect;
    const { yaw, pitch } = this.pose;
    const cp = Math.cos(pitch);
    const dir = new THREE.Vector3(cp * Math.sin(yaw), Math.sin(pitch), cp * Math.cos(yaw)).normalize();
    const up = new THREE.Vector3(0, 1, 0);
    const right = new THREE.Vector3().crossVectors(up, dir).normalize();
    const camUp = new THREE.Vector3().crossVectors(dir, right).normalize();
    // Solved against every node rather than the bounding cube's corners: the
    // cube's corners are empty space, and fitting them wastes a third of the frame.
    //
    // Insets are fractions of the viewport reserved for chrome — the pose bar
    // along the bottom, the toolbar along the top. A point must clear the band
    // that is actually visible, not the whole frame, so a node can no longer
    // land underneath a button. Reserving a fraction f on one side shrinks the
    // usable half-extent on that side to (1 - 2f) of the frustum's.
    const kTop = Math.max(1 - 2 * (insets.top ?? 0), 0.2);
    const kBot = Math.max(1 - 2 * (insets.bottom ?? 0), 0.2);
    const kLeft = Math.max(1 - 2 * (insets.left ?? 0), 0.2);
    const kRight = Math.max(1 - 2 * (insets.right ?? 0), 0.2);
    let d = 0;
    const u = new THREE.Vector3();
    for (const p of pts) {
      u.set(p[0], p[1], p[2]).sub(target);
      const ux = u.dot(right), uy = u.dot(camUp), uz = u.dot(dir);
      d = Math.max(d,
        uz + Math.abs(ux) / (tanH * (ux >= 0 ? kRight : kLeft)),
        uz + Math.abs(uy) / (tanV * (uy >= 0 ? kTop : kBot)));
    }
    return { target, dist: Math.max(d * margin, 6) };
  }
}
