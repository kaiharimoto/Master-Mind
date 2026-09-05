// SDF text. One instanced draw call for every glyph in the world.
//
// Text is screen-size clamped (12..42 px) rather than LOD-switched, so it is
// crisp at whole-brain overview and at reading distance with no pop-in
// (DIRECTION.md D-008, rubric cat 05).
import * as THREE from 'three';

export interface FontMeta {
  glyph: number; pad: number; cell: number; spread: number;
  cols: number; rows: number; atlasW: number; atlasH: number;
  ascent: number; descent: number; lineHeight: number;
  chars: Record<string, { adv: number; u0: number; v0: number; u1: number; v1: number }>;
}

/** Where a glyph cell sits relative to the pen, in em. Derived from build-font.mjs. */
const CELL_EM = (m: FontMeta) => m.cell / m.glyph;
const BASE_FROM_TOP = (m: FontMeta) => (m.pad + m.glyph * 0.78) / m.glyph;

export interface TextRun {
  anchor: THREE.Vector3; text: string; color: THREE.Color;
  nodeSizeWorld: number; alpha: number; above?: boolean;
  /** -1 sets the label to the left of the node, +1 to the right, 0 centred. */
  side?: -1 | 0 | 1;
  /**
   * Characters per line for THIS run, overriding the lens default.
   *
   * Truncation is a local problem: a label in open ground has nothing to
   * collide with and should render whole, while one inside a dense district has
   * to give up characters to stay legible at all. A single lens-wide clamp
   * traded whole words everywhere to solve crowding somewhere.
   */
  perLine?: number;
}

/** Greedy wrap to at most `maxLines` lines of about `perLine` characters. */
export function wrap(text: string, perLine = 17, maxLines = 2): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let cur = '';
  for (const w of words) {
    if (!cur) { cur = w; continue; }
    if ((cur + ' ' + w).length <= perLine) cur += ' ' + w;
    else { lines.push(cur); cur = w; if (lines.length === maxLines) break; }
  }
  if (lines.length < maxLines && cur) lines.push(cur);
  if (lines.length === maxLines) {
    // If anything was dropped, mark the truncation rather than lying about it.
    const shown = lines.join(' ');
    if (shown.replace(/\s+/g, ' ') !== text.replace(/\s+/g, ' ')) {
      lines[maxLines - 1] = lines[maxLines - 1].slice(0, perLine - 1) + '…';
    }
  }
  return lines;
}

const VERT = /* glsl */`
precision highp float;
attribute vec4 aRect;      // x, y (em, baseline-relative), w, h
attribute vec4 aUV;        // u0, v0, u1, v1
attribute vec3 aAnchor;    // world position of the node the text belongs to
attribute vec3 aColor;
attribute float aNodeSize; // world radius of that node, for vertical offset
attribute float aAlpha;
attribute vec2  aOff;      // x: em offset of the block, y: +1 below / -1 above
attribute vec2  aShift;    // per-frame re-anchor, in em, from label deconfliction
uniform vec2  uViewport;
uniform float uEmWorld;    // em height in world units
uniform float uMinPx;
uniform float uMaxPx;
uniform float uNodeMinPx;
uniform float uNodeMaxPx;
uniform float uFadeStart;
uniform float uFadeEnd;
varying vec2  vUV;
varying vec3  vColor;
varying float vFade;
varying float vPx;
void main() {
  vec4 mv = modelViewMatrix * vec4(aAnchor, 1.0);
  float dist = max(-mv.z, 1e-4);
  float pxPerWorld = uViewport.y * projectionMatrix[1][1] * 0.5 / dist;
  float emPx   = clamp(uEmWorld  * pxPerWorld, uMinPx, uMaxPx);
  float nodePx = clamp(aNodeSize * pxPerWorld, uNodeMinPx, uNodeMaxPx);
  vec2 corner = position.xy + 0.5;                 // PlaneGeometry(1,1) -> 0..1
  vec2 em = aRect.xy + corner * aRect.zw;
  vec2 px = em * emPx;
  px.y += aOff.x * emPx - aOff.y * nodePx * 0.62;  // sit clear of the node, above or below
  px += aShift * emPx;                             // and wherever declutter re-anchored it
  vec4 clip = projectionMatrix * mv;
  clip.xy += px / uViewport * 2.0 * clip.w;
  gl_Position = clip;
  vUV = mix(aUV.xy, aUV.zw, vec2(corner.x, 1.0 - corner.y));
  vColor = aColor;
  vFade = aAlpha * mix(1.0, 0.34, clamp((dist - uFadeStart) / (uFadeEnd - uFadeStart), 0.0, 1.0));
  vPx = emPx;
}`;

const FRAG = /* glsl */`
precision highp float;
uniform sampler2D uAtlas;
uniform vec3 uOutline;
varying vec2 vUV;
varying vec3 vColor;
varying float vFade;
varying float vPx;
void main() {
  float s = texture2D(uAtlas, vUV).r;
  // At the small-size clamp a single-channel SDF loses sub-pixel stems — the
  // 'l' of "Ruhlman", the 'i' of "Miso" — to the alpha threshold, at exactly
  // the whole-brain zoom the detail standard names. The threshold window widens
  // and drops slightly as the rendered size approaches the clamp, so thin stems
  // thicken instead of vanishing. Above ~17 px nothing changes.
  float small = clamp((17.0 - vPx) / 6.0, 0.0, 1.0);
  float w = max(fwidth(s) * (1.0 + 0.85 * small), 0.0015);
  float t = 0.5 - 0.055 * small;
  float glyph   = smoothstep(t - w, t + w, s);
  float outline = smoothstep(t - 0.13 - w, t - 0.13 + w, s);
  if (outline < 0.004) discard;
  // Dark rim under the glyph: a contrast device for overlapping text, not glow.
  vec3 col = mix(uOutline, vColor, glyph);
  gl_FragColor = vec4(col, outline * vFade);
}`;

/** Where each run's glyphs live in the instance buffer, and how big it is. */
export interface RunSpan {
  start: number; count: number; widthEm: number; lines: number; above: boolean; side: -1 | 0 | 1;
  /**
   * The run's exact glyph extent in em, relative to its node anchor, in the
   * shader's own space (+y up) and EXCLUDING the node-radius term — which is
   * `-vSide * nodePx * 0.62` and depends on screen scale, so the consumer adds
   * it. Deconfliction models label rectangles from these instead of guessing
   * from a line count: an approximate model put boxes up to 1.4 em away from
   * the glyphs actually drawn, and declared two overlapping labels disjoint.
   */
  x0Em: number; x1Em: number; y0Em: number; y1Em: number; vSide: number;
}

export class TextLayer {
  readonly mesh: THREE.Mesh;
  /** One entry per run, in the order build() received them. */
  readonly spans: RunSpan[] = [];
  private geo: THREE.InstancedBufferGeometry;
  private cap = 0;
  private aRect!: THREE.InstancedBufferAttribute;
  private aUV!: THREE.InstancedBufferAttribute;
  private aAnchor!: THREE.InstancedBufferAttribute;
  private aColor!: THREE.InstancedBufferAttribute;
  private aNodeSize!: THREE.InstancedBufferAttribute;
  private aAlpha!: THREE.InstancedBufferAttribute;
  private aOff!: THREE.InstancedBufferAttribute;
  private aShift!: THREE.InstancedBufferAttribute;

  constructor(private meta: FontMeta, atlas: THREE.Texture, opts: { emWorld: number; minPx: number; maxPx: number }) {
    atlas.flipY = false;
    atlas.colorSpace = THREE.NoColorSpace;
    atlas.minFilter = THREE.LinearMipmapLinearFilter;
    atlas.magFilter = THREE.LinearFilter;
    atlas.generateMipmaps = true;
    atlas.needsUpdate = true;
    this.geo = new THREE.InstancedBufferGeometry();
    const plane = new THREE.PlaneGeometry(1, 1);
    this.geo.index = plane.index;
    this.geo.attributes.position = plane.attributes.position;
    const mat = new THREE.ShaderMaterial({
      vertexShader: VERT, fragmentShader: FRAG,
      uniforms: {
        uAtlas: { value: atlas },
        uViewport: { value: new THREE.Vector2(1920, 1080) },
        uEmWorld: { value: opts.emWorld },
        uMinPx: { value: opts.minPx }, uMaxPx: { value: opts.maxPx },
        uNodeMinPx: { value: 4 }, uNodeMaxPx: { value: 96 },
        uFadeStart: { value: 40 }, uFadeEnd: { value: 260 },
        uOutline: { value: new THREE.Color('#120E0B') },
      },
      transparent: true, depthWrite: false, depthTest: true,
      blending: THREE.NormalBlending,
    });
    this.mesh = new THREE.Mesh(this.geo, mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 30;
    this.grow(4096);
  }

  get material() { return this.mesh.material as THREE.ShaderMaterial; }

  setViewport(w: number, h: number) { this.material.uniforms.uViewport.value.set(w, h); }
  setNodePx(min: number, max: number) {
    this.material.uniforms.uNodeMinPx.value = min;
    this.material.uniforms.uNodeMaxPx.value = max;
  }
  setSizePx(min: number, max: number) {
    this.material.uniforms.uMinPx.value = min;
    this.material.uniforms.uMaxPx.value = max;
  }
  setFade(start: number, end: number) {
    this.material.uniforms.uFadeStart.value = start;
    this.material.uniforms.uFadeEnd.value = end;
  }

  private grow(n: number) {
    if (n <= this.cap) return;
    this.cap = Math.max(n, Math.ceil(this.cap * 1.6));
    const mk = (size: number) => new THREE.InstancedBufferAttribute(new Float32Array(this.cap * size), size);
    this.aRect = mk(4); this.aUV = mk(4); this.aAnchor = mk(3);
    this.aColor = mk(3); this.aNodeSize = mk(1); this.aAlpha = mk(1); this.aOff = mk(2);
    this.aShift = mk(2);
    this.geo.setAttribute('aRect', this.aRect);
    this.geo.setAttribute('aUV', this.aUV);
    this.geo.setAttribute('aAnchor', this.aAnchor);
    this.geo.setAttribute('aColor', this.aColor);
    this.geo.setAttribute('aNodeSize', this.aNodeSize);
    this.geo.setAttribute('aAlpha', this.aAlpha);
    this.geo.setAttribute('aOff', this.aOff);
    this.geo.setAttribute('aShift', this.aShift);
  }

  /**
   * Per-run alpha, written straight into the instance buffer. Used by the
   * screen-space label deconfliction so a lower-priority label recedes behind
   * a higher-priority one instead of overprinting it.
   */
  setRunAlphas(alphas: Float32Array) {
    const arr = this.aAlpha.array as Float32Array;
    for (let r = 0; r < this.spans.length && r < alphas.length; r++) {
      const { start, count } = this.spans[r];
      for (let k = 0; k < count; k++) arr[start + k] = alphas[r];
    }
    this.aAlpha.needsUpdate = true;
  }

  /**
   * Per-run screen-space re-anchor, in em. Deconfliction uses it to move a
   * colliding label to a free side of its own node rather than only dimming it:
   * the label stays attached to the node it names, and no node moves.
   */
  setRunShifts(shifts: Float32Array) {
    const arr = this.aShift.array as Float32Array;
    for (let r = 0; r < this.spans.length && r * 2 + 1 < shifts.length; r++) {
      const { start, count } = this.spans[r];
      for (let k = 0; k < count; k++) {
        arr[(start + k) * 2] = shifts[r * 2];
        arr[(start + k) * 2 + 1] = shifts[r * 2 + 1];
      }
    }
    this.aShift.needsUpdate = true;
  }

  /** Rebuild every glyph instance. Called only when the doc or selection changes. */
  build(runs: TextRun[], perLine = 17, maxLines = 2) {
    const m = this.meta, cellEm = CELL_EM(m), baseTop = BASE_FROM_TOP(m);
    // Count first so the buffers are sized once.
    let total = 0;
    const laid: { run: TextRun; lines: string[] }[] = [];
    for (const run of runs) {
      const lines = wrap(run.text, run.perLine ?? perLine, maxLines);
      laid.push({ run, lines });
      for (const l of lines) for (const ch of l) if (m.chars[ch]) total++;
    }
    this.grow(Math.max(total, 1));
    // A rebuild clears any re-anchoring from the previous frame; deconfliction
    // recomputes it before the next draw.
    (this.aShift.array as Float32Array).fill(0);
    this.aShift.needsUpdate = true;
    this.spans.length = 0;
    let i = 0;
    for (const { run, lines } of laid) {
      const spanStart = i;
      let widest = 0;
      for (const l of lines) {
        let w = 0;
        for (const ch of l) w += (m.chars[ch]?.adv ?? 0);
        if (w > widest) widest = w;
      }
      const above = !!run.above;
      // Below: block hangs under the node. Above: block sits clear on top of it.
      const emY = above ? 0.55 + (lines.length - 1) * m.lineHeight + 0.30 : -0.92;
      const vSide = above ? -1 : 1;   // which way the block hangs off the node
      let ex0 = Infinity, ex1 = -Infinity, ey0 = Infinity, ey1 = -Infinity;
      lines.forEach((line, li) => {
        let width = 0;
        for (const ch of line) width += (m.chars[ch]?.adv ?? 0);
        // Labels in a ring stack on top of each other when every one is
        // centred. Setting them to the outward side makes them radiate.
        const hSide = run.side ?? 0;
        let pen = hSide === 0 ? -width / 2 : hSide < 0 ? -width - 0.55 : 0.55;
        const baseY = -li * m.lineHeight;
        for (const ch of line) {
          const g = m.chars[ch];
          if (!g) continue;
          const rx = pen - m.pad / m.glyph, ry = baseY - (cellEm - baseTop);
          if (rx < ex0) ex0 = rx;
          if (rx + cellEm > ex1) ex1 = rx + cellEm;
          if (ry < ey0) ey0 = ry;
          if (ry + cellEm > ey1) ey1 = ry + cellEm;
          this.aRect.setXYZW(i, rx, ry, cellEm, cellEm);
          this.aUV.setXYZW(i, g.u0, g.v0, g.u1, g.v1);
          this.aAnchor.setXYZ(i, run.anchor.x, run.anchor.y, run.anchor.z);
          this.aColor.setXYZ(i, run.color.r, run.color.g, run.color.b);
          this.aNodeSize.setX(i, run.nodeSizeWorld);
          this.aAlpha.setX(i, run.alpha);
          this.aOff.setXY(i, emY, vSide);
          pen += g.adv;
          i++;
        }
      });
      if (!Number.isFinite(ex0)) { ex0 = ex1 = ey0 = ey1 = 0; }
      this.spans.push({ start: spanStart, count: i - spanStart, widthEm: widest,
                        lines: lines.length, above, side: run.side ?? 0,
                        x0Em: ex0, x1Em: ex1, y0Em: emY + ey0, y1Em: emY + ey1, vSide });
    }
    for (const a of [this.aRect, this.aUV, this.aAnchor, this.aColor, this.aNodeSize, this.aAlpha, this.aOff]) a.needsUpdate = true;
    this.geo.instanceCount = i;
  }
}
