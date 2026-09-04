#!/usr/bin/env node
// Deterministic single-channel SDF atlas from the vendored DejaVu Sans.
// Runs glyph rasterisation + Felzenszwalb EDT inside Chromium (Node has no canvas).
// Output: src/app/assets/font-sdf.png  +  src/app/assets/font-sdf.json
import { execSync } from 'node:child_process';
import { writeFileSync, readFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');
const { chromium } = await import(resolve(ROOT, 'src/node_modules/playwright/index.mjs'));

const GLYPH = 64, PAD = 8, CELL = GLYPH + PAD * 2, SPREAD = 8, COLS = 12;
const CHARS = (() => {
  let s = '';
  for (let c = 32; c <= 126; c++) s += String.fromCharCode(c);
  return s + '–—‘’“”·×→…°éèüöäñ';
})();

const fontB64 = readFileSync(resolve(ROOT, 'src/app/assets/DejaVuSans.ttf')).toString('base64');

const browser = await chromium.launch({
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--force-device-scale-factor=1',
         '--disable-lcd-text', '--disable-font-subpixel-positioning'],
});
const page = await browser.newPage({ viewport: { width: 64, height: 64 }, deviceScaleFactor: 1 });

const result = await page.evaluate(async ({ fontB64, CHARS, GLYPH, PAD, CELL, SPREAD, COLS }) => {
  const bin = atob(fontB64);
  const buf = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) buf[i] = bin.charCodeAt(i);
  const face = new FontFace('MMSans', buf.buffer);
  await face.load();
  document.fonts.add(face);
  await document.fonts.ready;

  const INF = 1e20;
  // Felzenszwalb & Huttenlocher 1D squared-EDT.
  function edt1d(f, d, v, z, n) {
    v[0] = 0; z[0] = -INF; z[1] = INF;
    let k = 0;
    for (let q = 1; q < n; q++) {
      let s = ((f[q] + q * q) - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
      while (s <= z[k]) { k--; s = ((f[q] + q * q) - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]); }
      k++; v[k] = q; z[k] = s; z[k + 1] = INF;
    }
    k = 0;
    for (let q = 0; q < n; q++) {
      while (z[k + 1] < q) k++;
      d[q] = (q - v[k]) * (q - v[k]) + f[v[k]];
    }
  }
  function edt2d(data, w, h) {
    const f = new Float64Array(Math.max(w, h)), d = new Float64Array(Math.max(w, h));
    const v = new Int32Array(Math.max(w, h)), z = new Float64Array(Math.max(w, h) + 1);
    for (let x = 0; x < w; x++) { for (let y = 0; y < h; y++) f[y] = data[y * w + x]; edt1d(f, d, v, z, h); for (let y = 0; y < h; y++) data[y * w + x] = d[y]; }
    for (let y = 0; y < h; y++) { for (let x = 0; x < w; x++) f[x] = data[y * w + x]; edt1d(f, d, v, z, w); for (let x = 0; x < w; x++) data[y * w + x] = d[x]; }
    return data;
  }

  const chars = [...CHARS];
  const rows = Math.ceil(chars.length / COLS);
  const AW = COLS * CELL, AH = rows * CELL;

  const atlas = document.createElement('canvas'); atlas.width = AW; atlas.height = AH;
  const actx = atlas.getContext('2d', { willReadFrequently: true });
  actx.fillStyle = '#000'; actx.fillRect(0, 0, AW, AH);
  const aimg = actx.createImageData(AW, AH);

  const g = document.createElement('canvas'); g.width = CELL; g.height = CELL;
  const gctx = g.getContext('2d', { willReadFrequently: true });
  const font = `${GLYPH}px MMSans`;
  gctx.font = font;
  const mAll = gctx.measureText('Hxg');
  const ascent = mAll.actualBoundingBoxAscent, descent = mAll.actualBoundingBoxDescent;

  const metrics = {};
  chars.forEach((ch, i) => {
    const cx = (i % COLS) * CELL, cy = Math.floor(i / COLS) * CELL;
    gctx.clearRect(0, 0, CELL, CELL);
    gctx.fillStyle = '#fff';
    gctx.font = font;
    gctx.textBaseline = 'alphabetic';
    gctx.fillText(ch, PAD, PAD + GLYPH * 0.78);
    const m = gctx.measureText(ch);

    const px = gctx.getImageData(0, 0, CELL, CELL).data;
    const n = CELL * CELL;
    const inner = new Float64Array(n), outer = new Float64Array(n);
    for (let p = 0; p < n; p++) {
      const a = px[p * 4 + 3] / 255;
      outer[p] = a > 0.5 ? 0 : INF;   // distance to the glyph
      inner[p] = a > 0.5 ? INF : 0;   // distance to the background
    }
    edt2d(outer, CELL, CELL); edt2d(inner, CELL, CELL);
    for (let p = 0; p < n; p++) {
      const sd = Math.sqrt(outer[p]) - Math.sqrt(inner[p]);      // >0 outside, <0 inside
      const val = Math.max(0, Math.min(255, Math.round(255 * (0.5 - sd / (SPREAD * 2)))));
      const y = cy + Math.floor(p / CELL), x = cx + (p % CELL);
      const o = (y * AW + x) * 4;
      aimg.data[o] = val; aimg.data[o + 1] = val; aimg.data[o + 2] = val; aimg.data[o + 3] = 255;
    }
    metrics[ch] = {
      adv: m.width / GLYPH,
      u0: cx / AW, v0: cy / AH, u1: (cx + CELL) / AW, v1: (cy + CELL) / AH,
    };
  });
  actx.putImageData(aimg, 0, 0);
  return {
    png: atlas.toDataURL('image/png').split(',')[1],
    meta: { glyph: GLYPH, pad: PAD, cell: CELL, spread: SPREAD, cols: COLS, rows,
            atlasW: AW, atlasH: AH, ascent: ascent / GLYPH, descent: descent / GLYPH,
            lineHeight: 1.18, chars: metrics },
  };
}, { fontB64, CHARS, GLYPH, PAD, CELL, SPREAD, COLS });

await browser.close();
mkdirSync(resolve(ROOT, 'src/app/assets'), { recursive: true });
writeFileSync(resolve(ROOT, 'src/app/assets/font-sdf.png'), Buffer.from(result.png, 'base64'));
writeFileSync(resolve(ROOT, 'src/app/assets/font-sdf.json'), JSON.stringify(result.meta));
console.log(`atlas ${result.meta.atlasW}x${result.meta.atlasH}, ${Object.keys(result.meta.chars).length} glyphs`);
