// The scene: one live map state projected into the four world draw calls.
// Every lens (canvas, mind expansion, AR) drives this same class.
import * as THREE from 'three';
import {
  type MapDoc, type MMNode, type NodeId, type NodeState,
  nodeList, linkList, recencyOf, resolveStates,
} from '../core/model.js';
import {
  NodeLayer, FilamentLayer, HoldingShell, GROUND, TEXT_COLOR, hue, stateColour,
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
  expansion: { nodeMinPx: 15, nodeMaxPx: 90,  textMinPx: 13.0, textMaxPx: 22, textPerLine: 15, textLines: 1, fadeStart: 90, fadeEnd: 420, fov: 46 },
  // AR: a view-first lens; text a little larger for a handheld surface.
  ar:        { nodeMinPx: 16, nodeMaxPx: 96,  textMinPx: 13.0, textMaxPx: 21, textPerLine: 16, textLines: 1, fadeStart: 34, fadeEnd: 190, fov: 62 },
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
// Widened at the settled end. The channel was measurable but did not read at a
// glance: within a hue family the 10th-to-90th-percentile saturation spread ran
// only 0.37 to 0.52. With depth no longer competing for saturation (D-014) and
// chroma far better preserved by the OKLab ladder (D-013), there is room to
// separate the ends further.
const RECENCY_STEP = 0.30, SETTLED_FLOOR = 0.22;
const SETTLED_CACHE = new Map<number, number>();
function settledSat(c: THREE.Color): number {
  const key = c.getHex();
  let v = SETTLED_CACHE.get(key);
  if (v === undefined) {
    const lum = 0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b;
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
  private runMeta: { id: NodeId; priority: number; baseAlpha: number; nodeSizeWorld: number; held: boolean }[] = [];
  private runAlphas = new Float32Array(0);
  private runShifts = new Float32Array(0);
  private runVisible = new Int32Array(0);
  private runEllipsisDx = new Float32Array(0);
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
      // The node is drawn at its state's exact lightness so the ladder is
      // monotonic across hues (D-013); the authored hue is what the editor
      // swatches and the district colour still mean.
      //
      // The recency span is measured from the AUTHORED hue, not from the
      // state-mapped one. Measuring it from the darker colour shrank the span
      // as a node got dimmer, which cost saturation the recency channel is
      // supposed to own — the Audience measured a plain amber falling from 0.66
      // to 0.35 saturation across the change that introduced it.
      const col = stateColour(n.color, st), s0 = settledSat(hue(n.color));
      const sat = s0 + (1 - s0) * recencyOf(doc, n);
      inst.push({ pos: p, color: col, state: st, size, sat });
      // The label's OWN clearance radius, carried alongside the run.
      //
      // A search hit's label is pushed out to 1.9x the core so it clears the
      // signature's ticks (below). The deconflictor derived its clearance from
      // screenPositions() instead, which reports the CORE — so during a search
      // every hit's label was drawn as much as 40 px from the rectangle the
      // arbiter had reserved for it, and two labels the arbiter had certified
      // as disjoint landed on top of each other: 'Barley miso, 18 months'
      // overprinted by 'Amazake' in cycle 7's artifact 10. Same class as F-015,
      // in the one case F-015 did not cover.
      const labelSize = st === 'searchHit' ? size * 1.9 : size;
      this.runMeta.push({ id: n.id, priority: PRIORITY[st], baseAlpha: st === 'plain' ? 0.86 : 1.0,
                          nodeSizeWorld: labelSize, held: !n.placed });
      // Unplaced nodes sit in a ring. Their labels are pushed to the outward
      // side so they radiate from the holding cluster rather than pile onto it.
      const side: -1 | 0 | 1 = n.placed ? 0 : (n.pos[0] < doc.holding.origin[0] ? -1 : 1);
      runs.push({
        // A search hit wears four ticks at 1.9x its core radius. Anchoring the
        // label to the core radius put the text straight through the south
        // tick, so the state signature was overdrawn by its own label. The
        // label clears the signature, not just the node.
        anchor: p, text: n.text, color: textCol,
        nodeSizeWorld: labelSize, side,
        alpha: st === 'plain' ? 0.86 : 1.0,
        // Deterministic, position-free stagger: half the labels sit above their
        // node, half below. Halves label collisions in dense districts and never
        // moves anything.
        above: (n.id.charCodeAt(1) & 1) === 1,
      });
    }
    this.nodes.build(inst);
    const p = LENS_PROFILE[this.lens];
    this.text.build(runs, 28, p.textLines);
    if (this.runAlphas.length !== this.runMeta.length) this.runAlphas = new Float32Array(this.runMeta.length);
    if (this.runShifts.length !== this.runMeta.length * 2) this.runShifts = new Float32Array(this.runMeta.length * 2);
    if (this.runVisible.length !== this.runMeta.length) this.runVisible = new Int32Array(this.runMeta.length);
    if (this.runEllipsisDx.length !== this.runMeta.length) this.runEllipsisDx = new Float32Array(this.runMeta.length);

    // A filament is live when it touches the selection or a search hit.
    const links: LinkInstance[] = [];
    for (const l of linkList(doc)) {
      const a = posOf.get(l.a), b = posOf.get(l.b);
      if (!a || !b) continue;
      const live = l.a === this.selected || l.b === this.selected || this.hits.has(l.a) || this.hits.has(l.b);
      // A link between two districts carries the geography claim: near ones are
      // implied by proximity, a long cross-district run is not implied by
      // anything and is the thing worth seeing.
      const cross = doc.nodes[l.a] && doc.nodes[l.b] && doc.nodes[l.a].color !== doc.nodes[l.b].color;
      links.push({ a, b, live, cross });
    }
    this.filaments.build(links);
    this.holdingMembers = ns.filter(n => !n.placed).map(n => n.pos.slice() as [number, number, number]);
    this.fitHoldingShell();
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

  private holdingMembers: [number, number, number][] = [];

  /**
   * Size the holding boundary so it CONTAINS the nodes the holding count counts.
   *
   * The declared radius is a model constant, but the boundary is drawn as a
   * screen-space circle while its members sit in 3D — so a member nearer the
   * camera projected outside the very ring it was being counted into. The
   * radius is solved in screen space from the members' own projections and
   * converted back, every frame, because it depends on the camera.
   */
  private fitHoldingShell() {
    const doc = this.doc;
    if (!doc) return;
    const o = new THREE.Vector3(...doc.holding.origin);
    const c = this.project([o.x, o.y, o.z]);
    let need = doc.holding.radius;
    if (c) {
      const pxPerWorld = this.renderer.domElement.height *
        this.camera.projectionMatrix.elements[5] * 0.5 / c.z;
      let maxPx = doc.holding.radius * pxPerWorld;
      for (const p of this.holdingMembers) {
        const s = this.project(p);
        if (!s) continue;
        const d = Math.hypot(s.x - c.x, s.y - c.y);
        if (d > maxPx) maxPx = d;
      }
      // Plus a node's own width, so a member sits inside the line, not on it.
      need = (maxPx + LENS_PROFILE[this.lens].nodeMinPx * 1.6) / pxPerWorld;
    }
    this.holding.set(o, need);
  }

  render() {
    if (this.dirty) this.rebuild();
    this.nodes.setTime(this.clock);
    this.applyPose();
    this.fitHoldingShell();
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
      [0, 0],
      [0, -1.30], [0, 1.30],
      [-0.62, -0.62], [0.62, -0.62], [-0.62, 0.62], [0.62, 0.62],
      [0, -2.55], [0, 2.55],
      [-1.45, 0], [1.45, 0],
      [-1.30, -1.30], [1.30, -1.30], [-1.30, 1.30], [1.30, 1.30],
      [0, -3.80], [0, 3.80],
      // Reaching further is allowed rather than giving up — still adjacent
      // enough to read as this node's label, and the distance term above makes
      // a far anchor pay for itself.
      [-2.30, -2.30], [2.30, -2.30], [-2.30, 2.30], [2.30, 2.30],
      [0, -5.10], [0, 5.10],
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
      // The SHADER's formula, on the run's own clearance radius — not the core
      // radius screenPositions() reports.
      const nodePx = Math.min(Math.max(meta.nodeSizeWorld * s.pxPerWorld, p.nodeMinPx), p.nodeMaxPx);
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
    // ONE text layer. A gentle ramp left a second tier at roughly half
    // brightness still running under the primaries, so the whole-brain view read
    // as two competing layers — one legible, one a mid-grey smear. The ramp is
    // now short enough to be effectively binary while still being continuous,
    // so nothing pops as the camera turns, and a label that cannot find a clear
    // anchor is gone rather than half-said. What that costs is reported in the
    // frame: see suppressed().
    // THE FAR RING. Whole-brain framing put a near-square node cloud in the
    // middle of a 16:9 frame and dropped thirty names for crowding while about
    // 930 px of canvas either side held nothing at all. These reach out into
    // that ground — twelve directions at four radii — and anything placed here
    // is drawn with a leader back to its node.
    const FAR: [number, number][] = [];
    for (const r of [5.6, 8.2, 11.5, 15.5])
      for (let k = 0; k < 12; k++) {
        const th = (k / 12) * Math.PI * 2;
        FAR.push([r * Math.cos(th) * 1.9, r * Math.sin(th)]);
      }

    const BRIGHT_MAX = 0, DIM_MAX = 0.16;
    this.labelRects.clear();
    this.labelNeedsLeader.clear();
    this.lastScreen.clear();
    for (const q of scr) this.lastScreen.set(q.id, { x: q.x, y: q.y, pxPerWorld: q.pxPerWorld });
    const panels: Box[] = [];
    const taken: Box[] = [];
    // Node markers are occluders too: text landing on a disc is as unreadable as
    // text landing on other text. They are scored as a PREFERENCE rather than as
    // occupancy — a candidate over a marker loses to a clear one, but a label
    // does not get demoted merely for grazing a dot, which would silence a lot
    // of names in the dense districts for no legibility gain.
    const discs = scr.map(q => ({ id: q.id, x0: q.x - q.r, x1: q.x + q.r, y0: q.y - q.r, y1: q.y + q.r }));
    // An open panel is an occluder, not a hole in the world: a label running
    // under the editor was being cut mid-word rather than re-anchored or faded.
    // Panels are seeded into the reserved set before any label is placed, so
    // they win against everything.
    const dpr = this.renderer.domElement.width / Math.max(window.innerWidth, 1);
    for (const sel of ['#editor', '#finder', '#states', '#hands', '#top', '#unlabelled']) {
      const e = document.querySelector(sel) as HTMLElement | null;
      if (!e) continue;
      const r = e.getBoundingClientRect();
      if (r.width < 2 || r.height < 2) continue;
      panels.push({ i: -1, x0: r.left * dpr, y0: r.top * dpr,
                    x1: r.right * dpr, y1: r.bottom * dpr, pri: -1, z: -1 });
    }
    const discCover = (ownId: NodeId, x0: number, y0: number, x1: number, y1: number, area: number) => {
      let c = 0;
      for (const d of discs) {
        if (d.id === ownId) continue;
        const ox = Math.min(x1, d.x1) - Math.max(x0, d.x0);
        if (ox <= 0) continue;
        const oy = Math.min(y1, d.y1) - Math.max(y0, d.y0);
        if (oy <= 0) continue;
        c += ox * oy;
        if (c >= area) break;
      }
      return Math.min(c / area, 1);
    };
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
    // The frame edge is an occluder too. A label whose best anchor still crosses
    // it was being CUT MID-WORD — 'erance curve', 'tobacillus plantarum' — which
    // reads as a rendering fault rather than as a label that did not fit. Off-
    // frame margins are reserved so such a label re-anchors inward or fades,
    // the same treatment a buried one gets.
    // The frame edge is a HARD constraint, not an occluder to be scored.
    //
    // Seeding the off-frame margins as coverage only demoted a clipped label to
    // the dim tier: a label with 3 % of its area past the edge still drew at
    // two-thirds weight with its first glyph cut in half — 'Salt tolerance
    // curve' and 'Heterofermentative' both had ink in column 0 of artifact 10,
    // in a frame whose own audit reported a worst overhang of 0 px, because the
    // audit compared the drawn box against the RESERVED box and neither was
    // ever compared against the viewport. A candidate that does not fit inside
    // the frame is now rejected outright; a label with no candidate that fits
    // is not drawn, and is counted in the suppressed total like any other.
    const VW = this.renderer.domElement.width, VH = this.renderer.domElement.height;
    taken.push(...panels);
    for (const b of boxes) {
      const sh = shape[b.i];
      const own = byId.get(this.runMeta[b.i].id);
      const span = this.text.spans[b.i];
      const glyphs = span.glyphRight;
      // Widths this label is willing to be drawn at, longest first. A label is
      // SHORTENED only if it cannot be placed whole at any anchor — truncation
      // is a last resort before fading, not a lens-wide clamp applied to every
      // name to solve crowding somewhere else. Multi-line runs are never
      // shortened (there is no single tail to fade).
      // Cut points are WORD BOUNDARIES, longest first, and a shortened label
      // always carries its ellipsis — so it announces itself as shortened
      // rather than reading as a finished phrase. Where no whole word survives,
      // the label is not shortened at all and takes its chances on being faded.
      const widths: { w: number; vis: number }[] = [{ w: sh.w, vis: 0 }];
      if (span.ellipsis >= 0 && span.wordEnds.length) {
        const ellW = span.ellipsisWidthEm * sh.emPx;
        for (let wi = span.wordEnds.length - 1; wi >= 0; wi--) {
          const k = span.wordEnds[wi];
          if (k < 3 || k >= glyphs.length) continue;
          widths.push({ w: Math.max((glyphs[k - 1] - span.x0Em) * sh.emPx + ellW, 6), vis: k });
          if (widths.length >= 4) break;
        }
      }
      let best = { frac: 1, score: 99, dx: 0, dy: 0, w: sh.w, vis: 0, fits: false, far: false };
      // The near anchors first; the far ring only if none of them worked. The
      // far search costs 48 candidates a label, which is affordable for the
      // forty or so that fail and would not be for all hundred and fifty.
      for (const pass of [0, 1]) {
      if (pass === 1 && best.fits && best.frac <= BRIGHT_MAX) break;
      const anchors = pass === 0 ? CAND : FAR;
      for (const cand of widths) {
        const area = Math.max(cand.w * sh.h, 1);
        // A shortened label is only taken if a longer one could not be placed,
        // so length is worth a real penalty rather than a tie-break.
        const shortPenalty = cand.vis ? 0.55 : 0;
        for (const [cx, cy] of anchors) {
          const dx = cx * sh.emPx, dy = cy * sh.emPx;
          const x0 = sh.bx0 + dx, y0 = sh.by0 + dy;
          // NODE DISCS ARE OCCUPANCY, not a preference. Text drawn over a core
          // erases the quietest state in the frame — a plain node measured 0.098
          // with bone glyphs at 0.87 sitting across it — so a marker counts
          // against a placement exactly as heavily as another label does, and
          // feeds the same tier decision.
          // Off the frame is not a placement at all — and flush against the
          // edge is not one either. A label whose first glyph begins at x=0 is
          // whole, but it reads as one that was cut, which costs the reader the
          // same certainty. A small margin settles it.
          const M = 8;
          if (x0 < M || y0 < M || x0 + cand.w > VW - M || y0 + sh.h > VH - M) continue;
          // NOR IS ACROSS THE LABEL'S OWN MARKER. A node's own disc is left out
          // of the coverage sum — a label is supposed to sit beside its node
          // and would otherwise be penalised for doing so — but that is not a
          // licence to be drawn THROUGH it. 'Sweet vs savoury paths' was
          // re-anchored to one of the level-with-the-node candidates and ended
          // up with its own disc and both search-hit ticks sitting on the word
          // 'savoury'. The rule is exact rather than a coverage weight: the
          // text box must clear the mark itself by 4 px, so the label never
          // touches the dot it names.
          if (own) {
            const keep = own.r + 4;                       // the mark, plus air
            const nx = Math.min(Math.max(own.x, x0), x0 + cand.w);
            const ny = Math.min(Math.max(own.y, y0), y0 + sh.h);
            if (Math.hypot(own.x - nx, own.y - ny) < keep) continue;
          }
          const dc = discCover(this.runMeta[b.i].id, x0, y0, x0 + cand.w, y0 + sh.h, area);
          const frac = Math.min(1, coverage(x0, y0, x0 + cand.w, y0 + sh.h, area) + dc);
          // Text-on-text decides the tier; text-on-marker only breaks ties; and
          // a label that wanders pays for the distance. Inside a tight cluster
          // an unpenalised anchor could push a name out to open ground where it
          // read cleanly but attached ambiguously — a label that names the
          // wrong thought costs more than one that cannot be read.
          // A HELD THOUGHT'S LABEL STAYS NEXT TO IT. The holding cluster is a
          // tight ring of unplaced nodes, so a label re-anchored two rings out
          // lands nearer a neighbour's dot than its own: measured on artifact
          // 06, 'Nixtamal plus koji' ended 30 px from one dot and 32 px from
          // another. Distance costs these labels five times what it costs a
          // placed node's, which is enough to keep attribution unambiguous
          // without pinning them to a side.
              // Distance is charged the same on the far ring, so a label still
          // takes the nearest free ground it can find rather than the emptiest.
          const away = Math.hypot(cx, cy) / 3.8 * (this.runMeta[b.i].held ? 5 : 1);
          // Coverage dominates: a CLEAR placement always beats a covered one,
          // however much shorter or further it is. Otherwise a full-length
          // label that could only be placed 20 % buried would win over the same
          // label shortened and completely clear, and then be dimmed for being
          // buried — losing both the words and the legibility.
          // COVERAGE DOMINATES ABSOLUTELY. The comment below has said so since
          // cycle 5 and the weight of 6 did not deliver it: a held label's
          // distance penalty could outscore a half-buried placement, so the
          // label took the buried anchor and the legibility floor then cut it
          // to nothing — a name dropped in a frame that was 97 % empty. At
          // 1000, any clear placement beats any covered one, and length and
          // distance decide only among the clear ones, which is what the rule
          // was always meant to say.
          const score = 1000 * frac + shortPenalty + 0.22 * away;
          // The unshifted, full-length anchor is preferred: a candidate only
          // wins if it is meaningfully clearer, so labels do not jitter.
          const home = cx === 0 && cy === 0 && !cand.vis;
          if (score < best.score - (home ? 0 : 0.06) || (home && score <= best.score))
            best = { frac, score, dx: cx, dy: cy, w: cand.w, vis: cand.vis, fits: true,
                     far: pass === 1 };
        }
        if (best.frac <= 0 && !best.vis) break;   // placed whole and clear
      }
      }
      this.runVisible[b.i] = best.vis;
      // Move the ellipsis back from the end of the full run to the cut point.
      this.runEllipsisDx[b.i] = best.vis
        ? (span.glyphRight[best.vis - 1] - span.ellipsisLeftEm)
        : 0;
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
      const k = !best.fits ? 0 : best.frac <= BRIGHT_MAX ? 1 : t * t;
      // A label that had to leave its own neighbourhood to find room is drawn
      // WITH A LEADER, so travelling does not cost attribution. Dropping a name
      // is now the last resort it was always supposed to be: reached only when
      // no free ground exists on either ring.
      if (k > 0.02 && best.far) this.labelNeedsLeader.add(this.runMeta[b.i].id);
      // A LABEL IS LEGIBLE OR IT IS NOT DRAWN. The dim tier ramped smoothly to
      // nothing, so labels shipped at 1.79:1 to 2.73:1 against the ground —
      // present, unreadable, and competing with the ones that could be read.
      // The floor is the alpha at which the ink reaches 3:1 on this ground:
      // 0.0574 + a * 0.8481 = 0.2722 gives a = 0.26. Below it the label is not
      // drawn at all, and the frame says so.
      const DIM_FLOOR = 0.26;
      const raw = this.runMeta[b.i].baseAlpha * k;
      this.runAlphas[b.i] = raw >= DIM_FLOOR ? raw : 0;
      // ANY label that is drawn at all reserves its rect. Reserving only the
      // ones above a weight threshold let two suppressed labels be placed on
      // top of each other — the faded tier was not deconflicted against itself,
      // so ghost strokes still crossed foreground text.
      // Reserved only if it is DRAWN. The test used the pre-floor weight, so a
      // label the legibility floor had just cut to nothing still occupied its
      // rectangle and pushed other names off the map for room it was not
      // using.
      if (this.runAlphas[b.i] > 0.02)
        taken.push({ i: b.i, x0: px.x0, y0: px.y0, x1: px.x0 + best.w, y1: px.y0 + sh.h,
                     pri: b.pri, z: b.z });
      // Where this label was actually DRAWN, in canvas pixels. Anything that
      // has to reason about a node's footprint on screen — a crop that must
      // not cut a name in half, a hit test, a safe area — needs the label's
      // rectangle after re-anchoring and shortening, not the node's disc.
      this.labelRects.set(this.runMeta[b.i].id,
        { x0: px.x0, y0: px.y0, x1: px.x0 + best.w, y1: px.y0 + sh.h, alpha: this.runAlphas[b.i] });
    }
    this.text.setRunAlphas(this.runAlphas, this.runVisible);
    this.text.setRunShifts(this.runShifts, this.runEllipsisDx);
    // Counted only for nodes actually ON SCREEN. A node behind the camera has no
    // label to hide, and counting it would overstate what the view is omitting.
    // Counted from the same map the frame is drawn from, so the number the
    // chrome prints and the labels that are actually missing cannot disagree.
    this.suppressed = 0;
    this.suppressedIds.length = 0;
    for (const meta of this.runMeta) {
      const r = this.labelRects.get(meta.id);
      if (r && r.alpha > 0.02) continue;
      const q = byId.get(meta.id);
      if (q && q.x >= 0 && q.y >= 0 && q.x <= VW && q.y <= VH) {
        this.suppressed++;
        this.suppressedIds.push(meta.id);
      }
    }
  }

  /**
   * How many labels the arbiter could not place at this framing. Reported so a
   * viewer is told what the overview is not showing, rather than left to assume
   * the map has anonymous nodes.
   */
  suppressed = 0;

  /**
   * WHICH labels the arbiter could not place, on screen, this frame. The count
   * alone tells a reader that something is missing but not what; with the ids
   * the frame can name them instead of only admitting to them.
   */
  suppressedIds: NodeId[] = [];

  /**
   * The rectangle each visible label occupies on screen, after re-anchoring and
   * shortening. Rebuilt every frame by the deconflictor, so it describes the
   * frame that was drawn rather than an estimate of it.
   */
  labelRects = new Map<NodeId, { x0: number; y0: number; x1: number; y1: number; alpha: number }>();

  /**
   * The projected positions the LAST deconfliction ran against.
   *
   * The audit below used to re-project at the moment it was called, which is
   * the same thing only while the camera is still. Sampled mid-flight it
   * compared boxes reserved at one camera against glyphs measured at another
   * and reported a 178 px disagreement that was entirely its own. What the
   * audit has to answer is whether the arbiter and the draw agreed in ONE
   * frame, so both sides must come from that frame.
   */
  private lastScreen = new Map<NodeId, { x: number; y: number; pxPerWorld: number }>();

  /**
   * Labels placed on the FAR ring — out in open canvas, away from the node they
   * name. Ruled by the Art Director in cycle 7: when the solver runs out of
   * room it pushes a label outward with a leader rather than dropping it, and
   * drops only when the canvas is genuinely full.
   */
  labelNeedsLeader = new Set<NodeId>();

  /**
   * Does the arbiter's reserved rectangle contain the glyphs that were drawn?
   *
   * Reported as the worst gap in pixels over every visible label. Zero means
   * every label is inside the box that was reserved for it, which is the
   * property the whole deconfliction rests on: a certified-disjoint bright tier
   * means nothing if the boxes are not where the text is.
   */
  labelDrawAudit(): { checked: number; worstGapPx: number; worst: string | null;
                      worstOffFramePx: number; worstOffFrame: string | null } {
    const el = this.renderer.domElement;
    let worst = 0, worstId: string | null = null, checked = 0;
    let off = 0, offId: string | null = null;
    for (let i = 0; i < this.runMeta.length; i++) {
      const meta = this.runMeta[i];
      const res = this.labelRects.get(meta.id);
      const s = this.lastScreen.get(meta.id);
      if (!res || !s || res.alpha <= 0.02) continue;
      const drawn = this.text.drawnRect(i, s.x, s.y, s.pxPerWorld);
      if (!drawn) continue;
      checked++;
      const gap = Math.max(res.x0 - drawn.x0, drawn.x1 - res.x1, res.y0 - drawn.y0, drawn.y1 - res.y1);
      if (gap > worst) { worst = gap; worstId = meta.id; }
      // And how far outside the FRAME the drawn glyphs run. The reserved box
      // agreeing with the drawn box says nothing about either being on screen.
      const out = Math.max(-drawn.x0, drawn.x1 - el.width, -drawn.y0, drawn.y1 - el.height);
      if (out > off) { off = out; offId = meta.id; }
    }
    return { checked, worstGapPx: Number(worst.toFixed(2)), worst: worstId,
             worstOffFramePx: Number(off.toFixed(2)), worstOffFrame: offId };
  }

  /**
   * One world point in screen pixels. The holding boundary is drawn from the
   * document's ring, not from a node, so anything checking that the ring is on
   * screen needs to project a point that has no node behind it.
   */
  project(p: [number, number, number]): { x: number; y: number; z: number } | null {
    const el = this.renderer.domElement;
    const v = new THREE.Vector3(p[0], p[1], p[2]).applyMatrix4(this.camera.matrixWorldInverse);
    const dist = -v.z;
    if (dist <= 0.05) return null;
    v.applyMatrix4(this.camera.projectionMatrix);
    return { x: (v.x * 0.5 + 0.5) * el.width, y: (1 - (v.y * 0.5 + 0.5)) * el.height, z: dist };
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
         insets: { top?: number; bottom?: number; left?: number; right?: number } = {},
         withHolding = true):
    { target: THREE.Vector3; dist: number } {
    if (!nodes.length) return { target: new THREE.Vector3(), dist: 60 };
    // The holding cluster is part of the map, and the dashed boundary is drawn
    // at the ring's radius — further out than any node inside it. Fitting only
    // node positions clipped the boundary off the bottom of artifact 04, which
    // both the Auditor and the Art Director called a regression. The ring's own
    // extent is fitted with the nodes.
    const pts: [number, number, number][] = nodes.map(n => [n.pos[0], n.pos[1], n.pos[2]]);
    // Only when the whole map is being framed. Fitting a chosen pair of nodes
    // must not silently also fit the holding ring on the other side of the map.
    const H = withHolding ? this.doc?.holding : null;
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
