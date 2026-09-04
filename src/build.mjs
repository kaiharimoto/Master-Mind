#!/usr/bin/env node
// Builds the single app bundle plus its assets. Same output for both targets.
import { build } from 'esbuild';
import { mkdirSync, cpSync, writeFileSync, readdirSync, readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const SRC = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(SRC, '..');
const OUT = resolve(SRC, 'dist');
const dev = process.argv.includes('--dev');

mkdirSync(resolve(OUT, 'assets'), { recursive: true });
mkdirSync(resolve(OUT, 'maps'), { recursive: true });

await build({
  entryPoints: [resolve(SRC, 'app/main.ts')],
  bundle: true, format: 'esm', target: 'es2022',
  outfile: resolve(OUT, 'app.js'),
  minify: !dev, sourcemap: dev, logLevel: 'warning',
});

// Assets: the SDF atlas, the vendored font, the MediaPipe model and its WASM.
for (const f of ['font-sdf.png', 'font-sdf.json', 'hand_landmarker.task', 'DejaVuSans.ttf'])
  cpSync(resolve(SRC, 'app/assets', f), resolve(OUT, 'assets', f));
cpSync(resolve(SRC, 'node_modules/@mediapipe/tasks-vision/wasm'), resolve(OUT, 'assets/mp-wasm'), { recursive: true });

// Committed seed fixtures ship inside the build. They are never generated at
// runtime; the app and the sync service both read these exact files.
for (const f of readdirSync(resolve(ROOT, 'seeds')))
  if (f.endsWith('.json')) cpSync(resolve(ROOT, 'seeds', f), resolve(OUT, 'maps', f));

writeFileSync(resolve(OUT, 'index.html'), `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<title>Master Mind</title></head>
<body><script type="module" src="./app.js"></script></body></html>
`);

const hash = (p) => createHash('sha256').update(readFileSync(p)).digest('hex').slice(0, 16);
console.log(`built  app.js ${hash(resolve(OUT, 'app.js'))}  atlas ${hash(resolve(OUT, 'assets/font-sdf.png'))}`);
for (const f of readdirSync(resolve(OUT, 'maps'))) console.log(`  seed ${f} ${hash(resolve(OUT, 'maps', f))}`);
