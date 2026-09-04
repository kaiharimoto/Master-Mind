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
  private screenCache: { id: NodeId; x: number; y: number; r: number; z: number }[] = [];
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
    const posOf = new Map<NodeId, THREE.Vector3>();
    const textCol = new THREE.Color(TEXT_COLOR);
    for (const n of ns) {
      const st: NodeState = states.get(n.id) ?? 'plain';
      const p = new THREE.Vector3(n.pos[0], n.pos[1], n.pos[2]);
      posOf.set(n.id, p);
      const size = sizeForDegree(deg.get(n.id) ?? 0);
      // Chroma is the recency channel (D-007). It touches nothing else.
      const sat = 0.62 + 0.38 * recencyOf(doc, n);
      inst.push({ pos: p, color: hue(n.color), state: st, size, sat });
      runs.push({
        anchor: p, text: n.text, color: textCol, nodeSizeWorld: size,
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
    this.renderer.render(this.scene, this.camera);
    this.screenCache = [];
  }

  /** Screen-space positions and radii, for picking and for UI anchoring. */
  screenPositions(): { id: NodeId; x: number; y: number; r: number; z: number }[] {
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
    const out: { id: NodeId; x: number; y: number; r: number; z: number }[] = [];
    const projScale = this.camera.projectionMatrix.elements[5];
    for (const n of nodeList(doc)) {
      v.set(n.pos[0], n.pos[1], n.pos[2]).applyMatrix4(this.camera.matrixWorldInverse);
      const dist = -v.z;
      if (dist <= 0.05) continue;
      const pxPerWorld = h * projScale * 0.5 / dist;
      const half = Math.min(Math.max(sizeForDegree(deg.get(n.id) ?? 0) * pxPerWorld, p.nodeMinPx), p.nodeMaxPx);
      v.applyMatrix4(this.camera.projectionMatrix);
      out.push({ id: n.id, x: (v.x * 0.5 + 0.5) * w, y: (1 - (v.y * 0.5 + 0.5)) * h, r: half * 0.6, z: dist });
    }
    this.screenCache = out;
    return out;
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
  fitAll(nodes: MMNode[] = this.doc ? nodeList(this.doc) : [], margin = 1.04):
    { target: THREE.Vector3; dist: number } {
    if (!nodes.length) return { target: new THREE.Vector3(), dist: 60 };
    const min = new THREE.Vector3(Infinity, Infinity, Infinity);
    const max = new THREE.Vector3(-Infinity, -Infinity, -Infinity);
    for (const n of nodes) { min.min(new THREE.Vector3(...n.pos)); max.max(new THREE.Vector3(...n.pos)); }
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
    let d = 0;
    const u = new THREE.Vector3();
    for (const n of nodes) {
      u.set(n.pos[0], n.pos[1], n.pos[2]).sub(target);
      const ux = u.dot(right), uy = u.dot(camUp), uz = u.dot(dir);
      d = Math.max(d, Math.abs(ux) / tanH + uz, Math.abs(uy) / tanV + uz);
    }
    return { target, dist: Math.max(d * margin, 6) };
  }
}
