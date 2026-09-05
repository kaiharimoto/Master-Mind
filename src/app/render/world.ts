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

/**
 * Relative luminance — the REAL one, Rec.709 weights.
 *
 * This was Rec.601 luma (0.299/0.587/0.114) while everything around it called
 * the result "relative luminance". The renderer writes linear values into the
 * framebuffer (colour management off, LinearSRGB output), so a critic sampling
 * the shipped frame with the standard definition measures something else
 * entirely: two nodes equalised to the same rung here came out 0.4107 and
 * 0.4713 there — a spread of 0.060 against a reported 0.0002, and the plain and
 * connected rungs inverted. The ladder was sound; the yardstick was mis-named,
 * and a measurement nobody else can reproduce is not evidence. Rec.709 on
 * linear values is what the pixels in the frame actually are.
 */
/**
 * Rec.709 weights on the ENCODED channel values. This is *luma*, not relative
 * luminance, and it is now named for what it is.
 *
 * F-029 replaced Rec.601 coefficients with Rec.709 and stopped there. The
 * sRGB-to-linear transfer step was never added, so what the report called
 * relative luminance was Rec.709-weighted luma of gamma-encoded values — and
 * the whole point of that correction had been that an outsider sampling the
 * shipped frame should reproduce the manifest. The cycle-8 Art Director did
 * exactly that, with the standard definition, and measured the two connected
 * cores at 0.1594 and 0.1817 against a reported spread of 0.0002. A second
 * yardstick problem inside the fix for the first one.
 *
 * The ladder is SOLVED in this space and stays solved in it: measured properly
 * the bands are still disjoint and the within-rung spread is 29 % of the
 * smallest inter-rung gap, so the palette is not what is wrong and the Art
 * Director ruled explicitly that it should not change. What was wrong is the
 * word. Both numbers are reported now — see relLuminance — so the manifest can
 * be reproduced by either definition and neither is called something it is not.
 */
const luma709 = (r: number, g: number, b: number) => 0.2126 * r + 0.7152 * g + 0.0722 * b;

/**
 * TRUE relative luminance: linearise the sRGB channels, then weight them.
 * What a reader measuring the shipped frame with the standard definition gets.
 */
export const relLuminance = (r: number, g: number, b: number) =>
  0.2126 * s2lPub(r) + 0.7152 * s2lPub(g) + 0.0722 * s2lPub(b);
const s2lPub = (c: number) => (c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));

const s2l = (c: number) => (c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
const l2s = (c: number) => (c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055);

/** sRGB to OKLab. Lightness and chroma separate cleanly here; in raw RGB they do not. */
function rgb2oklab(r: number, g: number, b: number): [number, number, number] {
  const R = s2l(r), G = s2l(g), B = s2l(b);
  const l = Math.cbrt(0.4122214708 * R + 0.5363325363 * G + 0.0514459929 * B);
  const m = Math.cbrt(0.2119034982 * R + 0.6806995451 * G + 0.1073969566 * B);
  const s = Math.cbrt(0.0883024619 * R + 0.2817188376 * G + 0.6299787005 * B);
  return [0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s,
          1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s,
          0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s];
}
function oklab2rgb(L: number, a: number, bb: number): [number, number, number] {
  const l = (L + 0.3963377774 * a + 0.2158037573 * bb) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * bb) ** 3;
  const s = (L - 0.0894841775 * a - 1.2914855480 * bb) ** 3;
  return [l2s(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
          l2s(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
          l2s(-0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s)];
}

/**
 * The rendered lightness of each state, as RELATIVE LUMINANCE — the quantity a
 * critic measures off the frame, not a multiplier on an authored colour.
 *
 * D-006 declared the ladder as five multipliers (0.50 … 1.00) applied to the
 * hue. The hues are not lightness-matched, so that ladder was monotonic only
 * inside a hue family: an unplaced bone node clipped to white and outshone the
 * selection. Normalising every hue to one reference fixed the ordering but had
 * to pick the dimmest hue's level, which cost the world a third of its light
 * and left the top two rungs 0.014 apart — less than the residual variance
 * between two nodes in the *same* state.
 *
 * The rungs are now absolute and evenly spaced across the band that is actually
 * available: 0.11 apart, with zero per-hue variance within a rung.
 *
 * The top was lowered from 0.80 to 0.70 in cycle 5. A hue cannot be both very
 * light and saturated, and at 0.80 the top rungs shed most of their colour —
 * coral rendered at saturation 0.17 against its own 0.71. At 0.70 the worst hue
 * in the palette keeps about half its plain-rung chroma, which is the floor the
 * Art Director set, and every step is still more than twice the 0.05 minimum.
 */
export const STATE_LUM: Record<NodeState, number> = {
  plain: 0.26, connected: 0.37, unplaced: 0.48, searchHit: 0.59, selected: 0.70,
};

/**
 * How far distance may darken a node — as a share of the gap DOWN TO THE RUNG
 * BELOW its own state, never as a fixed fraction of black.
 *
 * A single floor for every state meant depth and state were spending the same
 * channel with no arbitration: at whole-map framing a connected teal measured
 * 0.223 and a plain violet 0.146, a spread of 0.077 where the ladder is built
 * on steps of 0.11, so a near plain node and a far connected one were within a
 * hair of each other. Bounding each state's fade inside its own band makes the
 * bands DISJOINT: whatever their distances, a connected node is always lighter
 * than any plain node, and so on up the ladder. Depth still reads — as a
 * gradient within a state — and it still costs only luminance, so chroma stays
 * reserved for recency (D-014, refined by D-016).
 */
export const DEPTH_SHARE = 0.55;
/** The ground the lowest rung fades toward; nothing is drawn below it. */
const LUM_GROUND = 0.10;
const LUM_ORDER: NodeState[] = ['plain', 'connected', 'unplaced', 'searchHit', 'selected'];
export const STATE_FADE_FLOOR: number[] = LUM_ORDER.map((st, i) => {
  const lum = STATE_LUM[st];
  const below = i === 0 ? LUM_GROUND : STATE_LUM[LUM_ORDER[i - 1]];
  return (lum - DEPTH_SHARE * (lum - below)) / lum;
});

/**
 * A hue at an exact relative luminance, carrying as much of its own chroma as
 * the sRGB gamut allows there.
 *
 * Hue angle is fixed (OKLab a and b are scaled together, never rotated), the
 * lightness lands on the rung exactly, and chroma is maximised rather than
 * merely surviving — a plain amber keeps saturation 1.00 where the previous,
 * RGB-space normalisation left it at 0.35.
 */
const STATE_CACHE = new Map<string, THREE.Color>();
export function stateColour(key: ColorKey | string, state: NodeState): THREE.Color {
  const ck = `${key}|${state}`;
  let out = STATE_CACHE.get(ck);
  if (!out) {
    const base = hue(key);
    const target = STATE_LUM[state];
    const [, a0, b0] = rgb2oklab(base.r, base.g, base.b);
    // For a given chroma scale, the OKLab lightness that hits the target.
    const solveL = (t: number) => {
      let lo = 0, hi = 1.4;
      for (let i = 0; i < 28; i++) {
        const L = (lo + hi) / 2;
        const v = oklab2rgb(L, a0 * t, b0 * t);
        const c = v.map(x => Math.min(1, Math.max(0, x))) as [number, number, number];
        if (luma709(c[0], c[1], c[2]) < target) lo = L; else hi = L;
      }
      return (lo + hi) / 2;
    };
    // The most chroma that still lands in gamut ON the rung.
    let lo = 0, hi = 1, best: [number, number, number] | null = null;
    for (let i = 0; i < 22; i++) {
      const t = (lo + hi) / 2;
      const v = oklab2rgb(solveL(t), a0 * t, b0 * t);
      const fits = v.every(x => x >= -0.002 && x <= 1.002) &&
                   Math.abs(luma709(Math.min(1, Math.max(0, v[0])), Math.min(1, Math.max(0, v[1])),
                                   Math.min(1, Math.max(0, v[2]))) - target) < 0.004;
      if (fits) { best = v.map(x => Math.min(1, Math.max(0, x))) as [number, number, number]; lo = t; }
      else hi = t;
    }
    if (!best) {
      const v = oklab2rgb(solveL(0), 0, 0);
      best = v.map(x => Math.min(1, Math.max(0, x))) as [number, number, number];
    }
    out = new THREE.Color(best[0], best[1], best[2]);
    STATE_CACHE.set(ck, out);
  }
  return out;
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
uniform float uFadeFloor0; uniform float uFadeFloor1; uniform float uFadeFloor2;
uniform float uFadeFloor3; uniform float uFadeFloor4;
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
  // Rec.709 on encoded values, the same weighting the palette is solved
  // against (see luma709) — luma, deliberately, not relative luminance.
  // A desaturating mix has to hold luminance constant, and it can only do that
  // if it agrees with the function that set the luminance in the first place.
  float lum = dot(iColor, vec3(0.2126, 0.7152, 0.0722));
  vColor = mix(vec3(lum), iColor, iSat);
  vState = iState;
  // Distance fades toward the dark. Never to nothing: no zoom level where
  // quality quietly ends (§01 detail standard).
  // Softer than it was, because this now scales LUMINANCE directly rather than
  // alpha over a near-black ground: the same floor would have darkened the
  // world well past where it sat before. Distance still reads, and the state
  // ladder keeps its full range at every depth.
  // A LANDMARK FLOOR. Distant districts have to stay readable as landmarks —
  // at the end of a fly-to, the surrounding map is the thing that tells you
  // where the thought lives, and it had fallen to near-ground. A step above the
  // ground, not at it.
  // The floor is the state's OWN band, so distance can never carry a node down
  // into the range of a lower state. See STATE_FADE_FLOOR.
  float fl = uFadeFloor0;
  int sti = int(iState + 0.5);
  if (sti == 1) fl = uFadeFloor1;
  else if (sti == 2) fl = uFadeFloor2;
  else if (sti == 3) fl = uFadeFloor3;
  else if (sti == 4) fl = uFadeFloor4;
  vFade = mix(1.0, fl, clamp((dist - uFadeStart) / (uFadeEnd - uFadeStart), 0.0, 1.0));
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

  // The state's lightness is baked into the colour on the way in, so that the
  // ladder can be exact for every hue (see stateColour). What is left here is
  // the one motion in the world: unplaced nodes pulse in LIGHT, never in
  // position. §01/Atmosphere grants exactly this one exception.
  float intensity = 1.0;
  if (st == 2) intensity = mix(0.955, 1.093, 0.5 + 0.5 * sin(uTime * (TAU / 3.2)));

  // Core: a tight self-luminous disc with a hotter centre and no halo outside it.
  float core = 1.0 - smoothstep(CORE - aa, CORE + aa, r);
  // The hot centre. Raised when the palette was lightness-equalised: the ladder
  // is exact but sits at the least luminous hue's level, and without a stronger
  // core the nodes read as flat discs rather than as small light sources. The
  // boost is the same for every state, so the ladder's ordering is untouched.
  // The hot centre, raised and broadened when the palette was lightness
  // equalised: the ladder is exact but now sits at the least luminous hue's
  // level, and a linear falloff put the boost in the innermost pixel or two
  // only, so the discs read as flat rather than as small light sources. The
  // boost is identical for every state, so the ladder's ordering is untouched.
  // A small hot centre. It was raised while the ladder sat at the dimmest hue's
  // level and had to make up the difference; with the ladder now drawn at its
  // own reference lightness, the same boost blew every state out to white.
  float hot  = 1.0 + 0.16 * pow(1.0 - clamp(r / CORE, 0.0, 1.0), 0.40);

  // A state's RING is its signature and is drawn at a fixed signature lightness,
  // independent of which rung the core sits on. Drawing the ring at the core's
  // own rung made the connected ring — the lowest lit state — read as a dark
  // halo rather than as a ring, so the core's rung alone now carries the ladder
  // and the geometry alone carries the signature.
  float coreLum = max(dot(vColor, vec3(0.299, 0.587, 0.114)), 1e-4);
  vec3  sig = clamp(vColor * (0.78 / coreLum), 0.0, 1.0);
  float ring = 0.0;
  vec3  ringCol = sig;
  float u = atan(vQuad.y, vQuad.x) / TAU + 0.5;

  if (st == 4) {                                   // selected: solid heavy ring
    ring = band(r, CORE * 1.35, 0.052, aa);
    ringCol = mix(sig, vec3(1.0), 0.30);
  } else if (st == 1) {                            // connected: one thin ring
    ring = band(r, CORE * 1.50, 0.019, aa);
  } else if (st == 2) {                            // unplaced: dashed ring
    float f = fract(u * 8.0);
    float dash = smoothstep(0.0, 0.05, f) * (1.0 - smoothstep(0.50, 0.55, f));
    ring = band(r, CORE * 1.70, 0.030, aa) * dash;
  } else if (st == 3) {                            // search hit: four ticks
    // Long and thin, so they read as marks pointing at the node rather than as
    // four little squares sitting beside it.
    // A full crosshair span rather than four short marks. At the end of a
    // fly-to the hit fills the frame and the ticks were the faintest thing in
    // it — the state was being told apart from 'selected' by being marginally
    // brighter, which is the dual coding failing exactly where it matters most.
    float radial = smoothstep(CORE * 1.70 - aa, CORE * 1.70 + aa, r)
                 * (1.0 - smoothstep(CORE * 3.30 - aa, CORE * 3.30 + aa, r));
    float f = fract(u * 4.0);
    float d = min(f, 1.0 - f);
    ring = radial * (1.0 - smoothstep(0.026, 0.048, d));
    // Tinted from the node's own hue, lifted toward bone. Pure white squares
    // read as a transform gizmo's drag handles rather than as a state.
    ringCol = mix(sig, vec3(0.955, 0.918, 0.862), 0.42);
  }

  float a = max(core, ring);
  if (a < 0.004) discard;
  // Colour is NOT pre-multiplied by coverage: alpha carries coverage, and the
  // distance fade rides on alpha so it blends toward the ground colour.
  vec3 col = (vColor * hot * core + ringCol * ring) / max(core + ring, 1e-4);
  // Distance attenuates LUMINANCE, not alpha. Blending a distant node toward
  // the ground pulled its colour toward the ground's hue, which compressed
  // saturation by about as much as the recency channel spans — so age and
  // distance landed in the same numeric range and could not be told apart by
  // eye. Scaling RGB uniformly leaves (max-min)/max exactly where it was, so
  // the whole chroma range stays reserved for recency (D-007).
  gl_FragColor = vec4(col * intensity * vFade, a);
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
        uFadeFloor0: { value: STATE_FADE_FLOOR[0] },
        uFadeFloor1: { value: STATE_FADE_FLOOR[1] },
        uFadeFloor2: { value: STATE_FADE_FLOOR[2] },
        uFadeFloor3: { value: STATE_FADE_FLOOR[3] },
        uFadeFloor4: { value: STATE_FADE_FLOOR[4] },
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
  // A FLOOR, not a fade to nothing. At whole-brain framing every link is far,
  // so the distance fade took the whole graph under the perceptual threshold at
  // once: a rest filament measured (26,21,17) against an (18,14,11) ground —
  // 1.06:1 — so the map's connections were present in the data and absent from
  // the render. The floor is set from the contrast the ground demands: at 0.40
  // of its rest alpha a filament blends to about (44,38,33), roughly 1.35:1.
  vAlpha = aAlpha * mix(1.0, 0.40, clamp((dist - uFadeStart) / (uFadeEnd - uFadeStart), 0.0, 1.0));
  gl_Position = projectionMatrix * mv;
}`;
const LINE_FRAG = /* glsl */`
precision highp float;
varying vec3 vColor;
varying float vAlpha;
void main() { gl_FragColor = vec4(vColor, vAlpha); }`;

export interface LinkInstance { a: THREE.Vector3; b: THREE.Vector3; live: boolean; cross?: boolean; }

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
  /**
   * `crossAlpha` sits above the rest alpha. A link between two districts is the
   * structural claim the map's geography rests on — that these thoughts belong
   * to different neighbourhoods and are still connected — so it is drawn a step
   * stronger than a link inside one district, where the proximity already says
   * it.
   */
  build(links: LinkInstance[], restAlpha = 0.22, liveAlpha = 0.78, crossAlpha = 0.30) {
    this.grow(Math.max(links.length, 1));
    links.forEach((l, i) => {
      const c = l.live ? this.live : this.rest;
      const a = l.live ? liveAlpha : l.cross ? crossAlpha : restAlpha;
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
  // Below the quietest node state. The boundary encodes real state and belongs
  // in the world, but it was measuring 0.115 against a plain node core at 0.098
  // — the largest and brightest contour in four artifacts, out-reading the
  // nodes it contains.
  gl_FragColor = vec4(vec3(0.34, 0.32, 0.29), ring * 0.55 * vFade);
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
  /**
   * `radius` is the WORLD radius the drawn circle should have.
   *
   * The quad's half-extent is uRadius and the ring is drawn at half the quad,
   * so the uniform is twice the radius. It was being fed the radius directly,
   * which drew the boundary at half the size the model declares — which is why
   * members of the holding cluster sat outside the very ring that counted them.
   */
  set(centre: THREE.Vector3, radius: number) {
    this.material.uniforms.uCentre.value.copy(centre);
    this.material.uniforms.uRadius.value = radius * 2;
  }
}
