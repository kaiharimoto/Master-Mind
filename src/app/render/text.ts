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
  /**
   * The run's right edge in em after each glyph, so a consumer can ask "how
   * wide would this label be if I only drew the first K characters?" without
   * rebuilding it. Truncation is then a rendering decision the deconflictor
   * makes per frame, rather than a wrap decision baked in at build time.
   * Only meaningful for single-line runs; multi-line runs get an empty array
   * and are never shortened.
   */
  glyphRight: number[];
  /**
   * Glyph indices at which a WORD ends, so a shortened label is cut between
   * words rather than mid-glyph. A fragment that looks like a finished phrase
   * is worse than a hidden label: the reader cannot tell a short thought from a
   * truncated one.
   */
  wordEnds: number[];
  /**
   * The index of this run's ellipsis glyph, and its laid-out right edge. Every
   * single-line run carries one, drawn only when the run is shortened and moved
   * to sit immediately after the last visible glyph.
   */
  ellipsis: number;
  ellipsisLeftEm: number;
  ellipsisWidthEm: number;
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

  /**
   * The screen rectangle a run's glyphs are ACTUALLY drawn into, computed from
   * the instance attributes and the uniforms the vertex shader reads — not from
   * the span geometry the arbiter reasons about.
   *
   * The two have now disagreed twice: once because the rectangle was estimated
   * from a line count (F-015), and once because a search hit's label is pushed
   * out past its core and the arbiter measured the core. Both times the effect
   * was labels certified as disjoint landing on top of each other. This is the
   * audit that can tell, per frame, whether the arbiter is reasoning about the
   * frame that is drawn.
   */
  drawnRect(run: number, nodeScreenX: number, nodeScreenY: number, pxPerWorld: number) {
    const sp = this.spans[run];
    if (!sp) return null;
    const u = this.material.uniforms;
    const emPx = Math.min(Math.max(u.uEmWorld.value * pxPerWorld, u.uMinPx.value), u.uMaxPx.value);
    const R = this.aRect.array as Float32Array, S = this.aShift.array as Float32Array;
    const A = this.aAlpha.array as Float32Array, O = this.aOff.array as Float32Array;
    const N = this.aNodeSize.array as Float32Array;
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (let k = 0; k < sp.count; k++) {
      const j = sp.start + k;
      if (A[j] <= 0.01) continue;
      const nodePx = Math.min(Math.max(N[j] * pxPerWorld, u.uNodeMinPx.value), u.uNodeMaxPx.value);
      const gx0 = nodeScreenX + (R[j * 4] + S[j * 2]) * emPx;
      const gx1 = gx0 + R[j * 4 + 2] * emPx;
      // Shader y is up; screen y is down.
      const top = nodeScreenY -
        ((R[j * 4 + 1] + R[j * 4 + 3]) * emPx + O[j * 2] * emPx - O[j * 2 + 1] * nodePx * 0.62 + S[j * 2 + 1] * emPx);
      const bot = top + R[j * 4 + 3] * emPx;
      if (gx0 < x0) x0 = gx0;
      if (gx1 > x1) x1 = gx1;
      if (top < y0) y0 = top;
      if (bot > y1) y1 = bot;
    }
    return Number.isFinite(x0) ? { x0, y0, x1, y1 } : null;
  }

  /** The em size this run is drawn at, in pixels, at a given scale. */
  emPxFor(_run: number, pxPerWorld: number): number {
    const u = this.material.uniforms;
    return Math.min(Math.max(u.uEmWorld.value * pxPerWorld, u.uMinPx.value), u.uMaxPx.value);
  }

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
  /**
   * Per-run alpha, and how many of its glyphs to draw.
   *
   * `visible[r]` under the run's glyph count shortens the label for this frame:
   * the tail is not drawn, and the last two visible glyphs fade, so a shortened
   * name reads as continuing rather than as ending oddly. Every label is built
   * at full length; shortening is a placement decision made per frame, so a
   * label in open ground is never clipped to solve crowding somewhere else.
   */
  /**
   * Was this run drawn SHORTENED — that is, is its ellipsis lit?
   *
   * Read from the alpha buffer the shader is drawing from rather than from the
   * arbiter's intent, so it describes the frame that exists. `setRunAlphas`
   * lights the ellipsis glyph only when the run was cut, so its alpha is the
   * cut flag.
   */
  isTruncated(run: number): boolean {
    const sp = this.spans[run];
    if (!sp || sp.ellipsis < 0) return false;
    const arr = this.aAlpha.array as Float32Array;
    return arr[sp.start + sp.ellipsis] > 0.01;
  }

  setRunAlphas(alphas: Float32Array, visible?: Int32Array) {
    const arr = this.aAlpha.array as Float32Array;
    for (let r = 0; r < this.spans.length && r < alphas.length; r++) {
      const { start, count } = this.spans[r];
      const vis = visible && visible[r] > 0 ? Math.min(visible[r], count) : count;
      // The tail fade marks a label that was CUT. A label drawn whole ends where
      // the word ends and must not be dimmed for it — the fade was being applied
      // to every label's last two glyphs, so complete names read as truncated.
      const sp = this.spans[r];
      const cut = vis < (sp.ellipsis >= 0 ? count - 1 : count);
      for (let k = 0; k < count; k++) {
        // The ellipsis is drawn ONLY when the run is shortened, and everything
        // that survives is drawn at full weight: a fragment that fades out
        // reads as a finished phrase, which is a worse failure than a hidden
        // label because the reader cannot tell the two apart.
        if (k === sp.ellipsis) { arr[start + k] = cut ? alphas[r] : 0; continue; }
        arr[start + k] = k >= vis ? 0 : alphas[r];
      }
    }
    this.aAlpha.needsUpdate = true;
  }

  /**
   * Per-run screen-space re-anchor, in em. Deconfliction uses it to move a
   * colliding label to a free side of its own node rather than only dimming it:
   * the label stays attached to the node it names, and no node moves.
   */
  setRunShifts(shifts: Float32Array, ellipsisDx?: Float32Array) {
    const arr = this.aShift.array as Float32Array;
    for (let r = 0; r < this.spans.length && r * 2 + 1 < shifts.length; r++) {
      const sp = this.spans[r];
      const { start, count } = sp;
      for (let k = 0; k < count; k++) {
        // The ellipsis carries the run's shift plus its own move back to the
        // cut point, so it sits immediately after the last surviving word.
        const extra = k === sp.ellipsis && ellipsisDx ? ellipsisDx[r] : 0;
        arr[(start + k) * 2] = shifts[r * 2] + extra;
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
      if (lines.length === 1) total++;   // the run's own ellipsis glyph
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
      const glyphRight: number[] = [];
      const wordEnds: number[] = [];
      let ellipsisIdx = -1, ellipsisLeft = 0, ellipsisW = 0;
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
          if (lines.length === 1) { glyphRight.push(pen + g.adv); if (ch === ' ') wordEnds.push(glyphRight.length - 1); }
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
      // One ellipsis glyph per single-line run, laid out after the text. It is
      // drawn only when the run is shortened, and shifted back to the cut point.
      if (lines.length === 1) {
        const g = m.chars['…'] ?? m.chars['.'];
        if (g) {
          // The ellipsis belongs to THIS run's block: same vertical offset and
          // same side of the node as its own glyphs. Giving it the below-node
          // constants while the run hung above put every above-run's ellipsis a
          // full block below its own text, reading as a stray mark in front of
          // whatever label sat there — '… Rye starts fastest'.
          const pen = glyphRight.length ? glyphRight[glyphRight.length - 1] : 0;
          const rx = pen - m.pad / m.glyph;
          const ry = -(cellEm - baseTop);
          ellipsisIdx = i - spanStart;
          // Recorded as the PEN, the same basis as glyphRight, so the shift that
          // moves it back to a cut point is exact rather than a pad off.
          ellipsisLeft = pen;
          // The CELL width, not the advance: a shortened run's reserved width is
          // built from pen positions, and the drawn cell overhangs the pen by
          // the atlas padding. Reserving the advance left the drawn glyphs
          // 1.6 px outside their own reservation — small, but the arbiter's
          // guarantee is that they are inside it.
          ellipsisW = cellEm;
          this.aRect.setXYZW(i, rx, ry, cellEm, cellEm);
          this.aUV.setXYZW(i, g.u0, g.v0, g.u1, g.v1);
          this.aAnchor.setXYZ(i, run.anchor.x, run.anchor.y, run.anchor.z);
          this.aColor.setXYZ(i, run.color.r, run.color.g, run.color.b);
          this.aNodeSize.setX(i, run.nodeSizeWorld);
          this.aAlpha.setX(i, 0);
          this.aOff.setXY(i, emY, vSide);
          i++;
        }
      }
      if (!Number.isFinite(ex0)) { ex0 = ex1 = ey0 = ey1 = 0; }
      this.spans.push({ start: spanStart, count: i - spanStart, widthEm: widest,
                        lines: lines.length, above, side: run.side ?? 0,
                        x0Em: ex0, x1Em: ex1, y0Em: emY + ey0, y1Em: emY + ey1, vSide,
                        glyphRight, wordEnds, ellipsis: ellipsisIdx,
                        ellipsisLeftEm: ellipsisLeft, ellipsisWidthEm: ellipsisW });
    }
    for (const a of [this.aRect, this.aUV, this.aAnchor, this.aColor, this.aNodeSize, this.aAlpha, this.aOff]) a.needsUpdate = true;
    this.geo.instanceCount = i;
  }
}
