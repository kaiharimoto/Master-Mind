// The world: nodes, filaments, holding shell. Three draw calls.
//
// The five node states are drawn analytically in the fragment shader
// (DIRECTION.md D-006) so the whole family costs one instanced draw. There is
// no post-processing, no bloom, no shadow pass, no fog volume and no ground
// plane anywhere in this file — see D-009 for the full list of absences.
import * as THREE from 'three';
import { PALETTE, type ColorKey, type NodeState } from '../core/model.js';

export const GROUND = '#120E0B';
export const FILAMENT_REST = '#8A7F76';
export const FILAMENT_LIVE = '#D8CCC0';
export const TEXT_COLOR = '#EFE6D8';

export const STATE_ID: Record<NodeState, number> = {
  plain: 0, connected: 1, unplaced: 2, searchHit: 3, selected: 4,
};
/** The luminance ladder. Monotonic by design; ground sits below all of it. */
export const STATE_INTENSITY: Record<NodeState, number> = {
  plain: 0.50, connected: 0.72, unplaced: 0.86, searchHit: 0.95, selected: 1.00,
};

const COLOR_CACHE = new Map<string, THREE.Color>();
export function hue(key: ColorKey | string): THREE.Color {
  const hex = (PALETTE as Record<string, string>)[key] ?? key;
  let c = COLOR_CACHE.get(hex);
  if (!c) { c = new THREE.Color(hex); COLOR_CACHE.set(hex, c); }
  return c;
}

const NODE_VERT = /* glsl */`
precision highp float;
attribute vec3  iPos;
attribute vec3  iColor;
attribute float iState;
attribute float iSize;     // quad half-extent in world units
attribute float iSat;      // recency -> chroma (D-007)
uniform vec2  uViewport;
uniform float uMinPx;
uniform float uMaxPx;
uniform float uFadeStart;
uniform float uFadeEnd;
varying vec2  vQuad;
varying vec3  vColor;
varying float vState;
varying float vFade;
void main() {
  vec4 mv = modelViewMatrix * vec4(iPos, 1.0);
  float dist = max(-mv.z, 1e-4);
  float pxPerWorld = uViewport.y * projectionMatrix[1][1] * 0.5 / dist;
  float px = clamp(iSize * pxPerWorld, uMinPx, uMaxPx);
  float halfW = px / pxPerWorld;
  mv.xy += position.xy * 2.0 * halfW;
  gl_Position = projectionMatrix * mv;
  vQuad = position.xy * 2.0;
  float lum = dot(iColor, vec3(0.299, 0.587, 0.114));
  vColor = mix(vec3(lum), iColor, iSat);
  vState = iState;
  // Distance fades toward the dark. Never to nothing: no zoom level where
  // quality quietly ends (§01 detail standard).
  vFade = mix(1.0, 0.30, clamp((dist - uFadeStart) / (uFadeEnd - uFadeStart), 0.0, 1.0));
}`;

const NODE_FRAG = /* glsl */`
precision highp float;
#define TAU 6.28318530718
#define CORE 0.30
varying vec2  vQuad;
varying vec3  vColor;
varying float vState;
varying float vFade;
uniform float uTime;
uniform float uI0; uniform float uI1; uniform float uI2; uniform float uI3; uniform float uI4;

float band(float r, float radius, float halfw, float aa) {
  return 1.0 - smoothstep(halfw - aa, halfw + aa, abs(r - radius));
}
void main() {
  float r  = length(vQuad);
  float aa = max(fwidth(r) * 1.1, 0.004);
  int st = int(vState + 0.5);

  float intensity =
      st == 4 ? uI4 : st == 3 ? uI3 : st == 2 ? uI2 : st == 1 ? uI1 : uI0;
  // The single motion in the world: unplaced nodes pulse in LIGHT, never in
  // position. §01/Atmosphere grants exactly this one exception.
  if (st == 2) intensity *= mix(0.955, 1.093, 0.5 + 0.5 * sin(uTime * (TAU / 3.2)));

  // Core: a tight self-luminous disc with a hotter centre and no halo outside it.
  float core = 1.0 - smoothstep(CORE - aa, CORE + aa, r);
  float hot  = 1.0 + 0.42 * (1.0 - clamp(r / CORE, 0.0, 1.0));

  float ring = 0.0;
  vec3  ringCol = vColor;
  float u = atan(vQuad.y, vQuad.x) / TAU + 0.5;

  if (st == 4) {                                   // selected: solid heavy ring
    ring = band(r, CORE * 1.35, 0.052, aa);
    ringCol = mix(vColor, vec3(1.0), 0.30);
  } else if (st == 1) {                            // connected: one thin ring
    ring = band(r, CORE * 1.50, 0.019, aa);
  } else if (st == 2) {                            // unplaced: dashed ring
    float f = fract(u * 8.0);
    float dash = smoothstep(0.0, 0.05, f) * (1.0 - smoothstep(0.50, 0.55, f));
    ring = band(r, CORE * 1.70, 0.030, aa) * dash;
  } else if (st == 3) {                            // search hit: four ticks
    // Long and thin, so they read as marks pointing at the node rather than as
    // four little squares sitting beside it.
    float radial = smoothstep(CORE * 1.72 - aa, CORE * 1.72 + aa, r)
                 * (1.0 - smoothstep(CORE * 2.62 - aa, CORE * 2.62 + aa, r));
    float f = fract(u * 4.0);
    float d = min(f, 1.0 - f);
    ring = radial * (1.0 - smoothstep(0.018, 0.036, d));
    // Tinted from the node's own hue, lifted toward bone. Pure white squares
    // read as a transform gizmo's drag handles rather than as a state.
    ringCol = mix(vColor, vec3(0.955, 0.918, 0.862), 0.42);
  }

  float a = max(core, ring);
  if (a < 0.004) discard;
  // Colour is NOT pre-multiplied by coverage: alpha carries coverage, and the
  // distance fade rides on alpha so it blends toward the ground colour.
  vec3 col = (vColor * hot * core + ringCol * ring) / max(core + ring, 1e-4);
  gl_FragColor = vec4(col * intensity, a * vFade);
}`;

export interface NodeInstance {
  pos: THREE.Vector3; color: THREE.Color; state: NodeState; size: number; sat: number;
}

export class NodeLayer {
  readonly mesh: THREE.Mesh;
  private geo: THREE.InstancedBufferGeometry;
  private cap = 0;
  private iPos!: THREE.InstancedBufferAttribute;
  private iColor!: THREE.InstancedBufferAttribute;
  private iState!: THREE.InstancedBufferAttribute;
  private iSize!: THREE.InstancedBufferAttribute;
  private iSat!: THREE.InstancedBufferAttribute;

  constructor() {
    this.geo = new THREE.InstancedBufferGeometry();
    const plane = new THREE.PlaneGeometry(1, 1);
    this.geo.index = plane.index;
    this.geo.attributes.position = plane.attributes.position;
    const mat = new THREE.ShaderMaterial({
      vertexShader: NODE_VERT, fragmentShader: NODE_FRAG,
      uniforms: {
        uViewport: { value: new THREE.Vector2(1920, 1080) },
        uMinPx: { value: 7 }, uMaxPx: { value: 190 },
        uFadeStart: { value: 55 }, uFadeEnd: { value: 300 },
        uTime: { value: 0 },
        uI0: { value: STATE_INTENSITY.plain },
        uI1: { value: STATE_INTENSITY.connected },
        uI2: { value: STATE_INTENSITY.unplaced },
        uI3: { value: STATE_INTENSITY.searchHit },
        uI4: { value: STATE_INTENSITY.selected },
      },
      transparent: true, depthWrite: false, depthTest: true,
      blending: THREE.NormalBlending,
    });
    this.mesh = new THREE.Mesh(this.geo, mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 20;
    this.grow(256);
  }
  get material() { return this.mesh.material as THREE.ShaderMaterial; }
  setViewport(w: number, h: number) { this.material.uniforms.uViewport.value.set(w, h); }
  setPx(min: number, max: number) {
    this.material.uniforms.uMinPx.value = min; this.material.uniforms.uMaxPx.value = max;
  }
  setFade(start: number, end: number) {
    this.material.uniforms.uFadeStart.value = start; this.material.uniforms.uFadeEnd.value = end;
  }
  /** Drives the unplaced pulse only. Frozen by the harness for diffable captures. */
  setTime(t: number) { this.material.uniforms.uTime.value = t; }

  private grow(n: number) {
    if (n <= this.cap) return;
    this.cap = Math.max(n, Math.ceil(this.cap * 1.6));
    const mk = (s: number) => new THREE.InstancedBufferAttribute(new Float32Array(this.cap * s), s);
    this.iPos = mk(3); this.iColor = mk(3); this.iState = mk(1); this.iSize = mk(1); this.iSat = mk(1);
    this.geo.setAttribute('iPos', this.iPos);
    this.geo.setAttribute('iColor', this.iColor);
    this.geo.setAttribute('iState', this.iState);
    this.geo.setAttribute('iSize', this.iSize);
    this.geo.setAttribute('iSat', this.iSat);
  }

  build(list: NodeInstance[]) {
    this.grow(Math.max(list.length, 1));
    list.forEach((n, i) => {
      this.iPos.setXYZ(i, n.pos.x, n.pos.y, n.pos.z);
      this.iColor.setXYZ(i, n.color.r, n.color.g, n.color.b);
      this.iState.setX(i, STATE_ID[n.state]);
      this.iSize.setX(i, n.size);
      this.iSat.setX(i, n.sat);
    });
    for (const a of [this.iPos, this.iColor, this.iState, this.iSize, this.iSat]) a.needsUpdate = true;
    this.geo.instanceCount = list.length;
  }
}

// ---------------------------------------------------------------------------
// Filaments. One LineSegments draw. Thin at every zoom; never beams.
// ---------------------------------------------------------------------------

const LINE_VERT = /* glsl */`
precision highp float;
attribute vec3 aColor;
attribute float aAlpha;
uniform float uFadeStart;
uniform float uFadeEnd;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  float dist = max(-mv.z, 1e-4);
  vColor = aColor;
  vAlpha = aAlpha * mix(1.0, 0.28, clamp((dist - uFadeStart) / (uFadeEnd - uFadeStart), 0.0, 1.0));
  gl_Position = projectionMatrix * mv;
}`;
const LINE_FRAG = /* glsl */`
precision highp float;
varying vec3 vColor;
varying float vAlpha;
void main() { gl_FragColor = vec4(vColor, vAlpha); }`;

export interface LinkInstance { a: THREE.Vector3; b: THREE.Vector3; live: boolean; }

export class FilamentLayer {
  readonly mesh: THREE.LineSegments;
  private geo = new THREE.BufferGeometry();
  private cap = 0;
  private pos!: THREE.BufferAttribute;
  private col!: THREE.BufferAttribute;
  private alp!: THREE.BufferAttribute;
  private rest = new THREE.Color(FILAMENT_REST);
  private live = new THREE.Color(FILAMENT_LIVE);

  constructor() {
    const mat = new THREE.ShaderMaterial({
      vertexShader: LINE_VERT, fragmentShader: LINE_FRAG,
      uniforms: { uFadeStart: { value: 55 }, uFadeEnd: { value: 300 } },
      transparent: true, depthWrite: false, depthTest: true, blending: THREE.NormalBlending,
    });
    this.mesh = new THREE.LineSegments(this.geo, mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 10;
    this.grow(1024);
  }
  get material() { return this.mesh.material as THREE.ShaderMaterial; }
  setFade(start: number, end: number) {
    this.material.uniforms.uFadeStart.value = start; this.material.uniforms.uFadeEnd.value = end;
  }
  private grow(n: number) {
    if (n <= this.cap) return;
    this.cap = Math.max(n, Math.ceil(this.cap * 1.6));
    this.pos = new THREE.BufferAttribute(new Float32Array(this.cap * 6), 3);
    this.col = new THREE.BufferAttribute(new Float32Array(this.cap * 6), 3);
    this.alp = new THREE.BufferAttribute(new Float32Array(this.cap * 2), 1);
    this.geo.setAttribute('position', this.pos);
    this.geo.setAttribute('aColor', this.col);
    this.geo.setAttribute('aAlpha', this.alp);
  }
  build(links: LinkInstance[], restAlpha = 0.22, liveAlpha = 0.78) {
    this.grow(Math.max(links.length, 1));
    links.forEach((l, i) => {
      const c = l.live ? this.live : this.rest;
      const a = l.live ? liveAlpha : restAlpha;
      this.pos.setXYZ(i * 2, l.a.x, l.a.y, l.a.z);
      this.pos.setXYZ(i * 2 + 1, l.b.x, l.b.y, l.b.z);
      this.col.setXYZ(i * 2, c.r, c.g, c.b);
      this.col.setXYZ(i * 2 + 1, c.r, c.g, c.b);
      this.alp.setX(i * 2, a); this.alp.setX(i * 2 + 1, a);
    });
    this.pos.needsUpdate = this.col.needsUpdate = this.alp.needsUpdate = true;
    this.geo.setDrawRange(0, links.length * 2);
    this.geo.computeBoundingSphere();
  }
}

// ---------------------------------------------------------------------------
// Holding-cluster shell: a dim dashed boundary marking the staging zone.
// Functional, matte, borderless. Not chrome — it is the only thing that says
// where captured-but-unplaced thoughts live.
// ---------------------------------------------------------------------------

const SHELL_VERT = /* glsl */`
precision highp float;
uniform vec3  uCentre;
uniform float uRadius;
uniform vec2  uViewport;
varying vec2 vQuad;
varying float vFade;
void main() {
  vec4 mv = modelViewMatrix * vec4(uCentre, 1.0);
  float dist = max(-mv.z, 1e-4);
  mv.xy += position.xy * 2.0 * uRadius;
  gl_Position = projectionMatrix * mv;
  vQuad = position.xy * 2.0;
  vFade = mix(1.0, 0.35, clamp((dist - 55.0) / 245.0, 0.0, 1.0));
}`;
const SHELL_FRAG = /* glsl */`
precision highp float;
#define TAU 6.28318530718
varying vec2 vQuad;
varying float vFade;
void main() {
  float r = length(vQuad);
  float aa = max(fwidth(r) * 1.1, 0.004);
  float u = atan(vQuad.y, vQuad.x) / TAU + 0.5;
  float f = fract(u * 44.0);
  float dash = smoothstep(0.0, 0.10, f) * (1.0 - smoothstep(0.42, 0.52, f));
  float ring = (1.0 - smoothstep(0.006 - aa, 0.006 + aa, abs(r - 0.5))) * dash;
  if (ring < 0.004) discard;
  gl_FragColor = vec4(vec3(0.62, 0.58, 0.53), ring * 0.60 * vFade);
}`;

export class HoldingShell {
  readonly mesh: THREE.Mesh;
  constructor() {
    const mat = new THREE.ShaderMaterial({
      vertexShader: SHELL_VERT, fragmentShader: SHELL_FRAG,
      uniforms: {
        uCentre: { value: new THREE.Vector3() }, uRadius: { value: 5 },
        uViewport: { value: new THREE.Vector2(1920, 1080) },
      },
      transparent: true, depthWrite: false, depthTest: true,
    });
    this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 5;
  }
  get material() { return this.mesh.material as THREE.ShaderMaterial; }
  set(centre: THREE.Vector3, radius: number) {
    this.material.uniforms.uCentre.value.copy(centre);
    this.material.uniforms.uRadius.value = radius;
  }
}
