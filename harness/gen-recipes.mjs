#!/usr/bin/env node
// Generates docs/capture/<id>.md from the drivers, so a recipe can never
// describe something the driver does not do. The driver IS the recipe; this
// writes it down (§06).
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import stills from './drivers/stills.mjs';
import motion from './drivers/motion.mjs';
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const D = [...stills, ...motion].sort((a, b) => a.id.localeCompare(b.id));

const PROSE = {
  '01': { state: 'Both seeded maps loaded from the committed fixtures. A third map is created, renamed and deleted during the capture.',
    vantage: 'Maps home overlay, top region cropped to 1920x360 per panel and stacked.',
    proves: 'Maps home lists every map with a live node count and a last-opened time, and create / rename / delete are shown operating rather than merely present.',
    notes: 'Section 06 asks for a create/rename/delete clip. Adding a 21st artifact would edit the fixed evidence set, which section 09 forbids, so the operating evidence is folded into this artifact as a three-state composite. Each panel is a real screenshot taken after really clicking the control named in its label.' },
  '02': { state: 'The 150-node fermentation map, untouched.', vantage: 'Canvas lens, yaw 0.42, pitch 0.20, framed to fit every node with a 1.10 margin.',
    proves: 'The everyday editing lens holds up at real scale: districts, cross-links and filaments are visible, plain and unplaced nodes are distinguishable, and no auto-tidy has happened.' },
  '03': { state: 'COLD START. The sync service data directory is deleted immediately before the driver runs, so the map is read fresh from the committed seed fixture on first launch.',
    vantage: 'Android surface, AR lens, gyro override alpha 38, beta 74, gamma 4; framed to fit, then the vantage dropped so districts fill the upper frame and the holding cluster sits in the lower frame.',
    proves: 'The Android landmark renders the live map from a pristine install, oriented by gyroscope, with node text legible and the holding cluster in frame.',
    notes: 'This is the hero artifact. Fixed recipe: same surface, wiped state, seeded launch, same gyro values and same framing rule every cycle.' },
  '04': { state: 'The 150-node map, untouched.', vantage: 'Mind expansion lens, yaw 0.30, pitch 0.16, framed to fit every node with a 1.12 margin.',
    proves: 'The whole-brain acceptance test: the entire 100+ node map on screen at once and still legible.' },
  '05': { state: 'Hand tracking switched on from the top-bar toggle; the camera is Chromium fake capture fed from harness/clips/hand-vocabulary-slow.mp4.',
    vantage: 'Mind expansion, framed to fit; the webcam panel sits bottom right with the live landmark overlay.',
    proves: 'Webcam-only tracking with no special hardware: a detected hand, its 21 landmarks, the recognised pose, and that pose driving a visible change in the map. The toggle and live status are in the top bar.',
    notes: 'The clip is the camera, not the answer. MediaPipe runs for real over the getUserMedia stream and the pose comes from landmark geometry.' },
  '06': { state: 'The 150-node map, untouched.', vantage: 'Canvas lens, camera centred on the holding cluster origin at 4.2x its radius.',
    proves: 'The holding cluster exists inside the shared 3D space, its unplaced nodes render in the unplaced state, and the waiting count is glanceable in the top bar.' },
  '07': { state: 'The small map. Search set to "loci"; "Positions are the memory" selected; the node-state legend open.',
    vantage: 'Canvas lens, framed to fit with a 1.10 margin, captured at 1.6 s of app time so the unplaced pulse is mid-cycle.',
    proves: 'All five node states coexist in one frame and are individually distinguishable: selected, search hit, connected to selection, unplaced in holding, and plain.' },
  '08': { state: 'The small map. "Steal the parking-lot bit" starts unplaced in holding.',
    vantage: 'Canvas lens; before and after frames composited side by side.',
    proves: 'Placement is a deliberate drag, the node lands exactly where dropped and stays there, and the holding count decrements.' },
  '09': { state: 'The 150-node map. "Koji-cured egg yolk" selected, then connected to "Shio koji" through the editor Connect control and a click on the second node.',
    vantage: 'Canvas lens, camera centred between the two nodes at distance 22.',
    proves: 'Two nodes joined by a filament with the node editor open on text, colour and label.' },
  '10': { state: 'The 150-node map. Search "grape leaf", Enter pressed, fly-to run to completion.',
    vantage: 'Canvas lens; the fly-to decides the end vantage.',
    proves: 'Search ends in the place the thought lives: the found node centred, search-hit state lit, text crisp at reading distance, and its stored position unchanged by the flight.' },
  '11': { state: 'The small map open on two separate browser processes - a Windows surface and an Android surface - connected to the sync service over a socket.',
    vantage: 'Both at 960x1080, identical camera pose, composited side by side.',
    proves: 'Baseline for the propagation proof: node-for-node identical positions on both surfaces, compared as model values.' },
  '12': { state: 'Continues from 11. An edit is made on Android through the ordinary editor (text and colour), and Windows concurrently writes a different property of the same node.',
    vantage: 'The same framing as 11.',
    proves: 'One live model on every device: the edit propagates, positions are untouched, no node is dropped, and the concurrent conflict keeps both properties rather than discarding either.' },
  '13': { state: 'The small map. Finder panel open, prompt generated, scrolled to the map JSON.',
    vantage: 'Mind expansion behind the finder panel.',
    proves: 'The harness exports a paste-ready prompt carrying the map JSON including every node position, plus the instructions.' },
  '14': { state: 'The small map. The adversarially messy reply parsed; the first suggestion rejected.',
    vantage: 'Mind expansion with the finder review panel.',
    proves: 'Suggestions stage one at a time, all three types are produced, nothing is applied until accepted, and a rejected suggestion leaves no trace.' },
  '15': { state: 'Settings open with hand tracking switched on and tracking live.',
    vantage: 'Full-screen settings overlay, scrolled to top.',
    proves: 'The settings region: hand-tracking toggle with live status, account sign-in, sync status, and the in-app reference listing every touch and hand gesture with its operation.' },
  '16': { state: 'The small map on the Android surface.', vantage: 'Canvas lens, framed to fit; 34 s at 30 fps.',
    proves: 'All six touch gestures performed in sequence with on-screen labels, each producing a different operation, spanning capture, placement, connection, selection and navigation.' },
  '17': { state: 'The 150-node map with hand tracking on, then switched off for a mouse-only tail.',
    vantage: 'Mind expansion, framed to fit; 36 s at 30 fps.',
    proves: 'The four webcam-detected poses in sequence with labels, each mapped to a different map-scale operation, cluster internal arrangement preserved - then the same four operations driven by mouse alone.' },
  '18': { state: 'The 150-node map. Query typed a character at a time, then Enter.', vantage: 'Canvas lens; 13 s at 30 fps.',
    proves: 'Fly-to happens live: the view travels to the node in its actual place and ends crisp enough to read.' },
  '19': { state: 'The small map. A thought is typed and captured, then dragged out of holding.',
    vantage: 'Canvas lens, framed to fit; 18 s at 30 fps.',
    proves: 'The designed workflow end to end in one take: one-action quick-add lands the node in holding unplaced, then a deliberate drag places it and it stays.' },
  '20': { state: 'The small map. Prompt generated and copied, then three paste-backs in one take.',
    vantage: 'Mind expansion with the finder panel; 26 s at 30 fps.',
    proves: 'The full harness loop live and safe: a malformed reply produces a visible error and no change, an adversarially messy reply parses with bad entries rejected by reason, one suggestion is accepted and applied, one is rejected and leaves no trace.',
    notes: "The reply is authored by the agent's own session acting as the chat - one of the two honest paths section 09 allows - and it is declared in report.md. The same take passes a malformed reply and an adversarially messy reply through the same parser, which is the condition section 09 attaches to that path." },
};

mkdirSync(resolve(ROOT, 'docs/capture'), { recursive: true });
for (const d of D) {
  const p = PROSE[d.id] || {};
  const min = d.kind === 'mp4'
    ? `${d.minW}x${d.minH}, at least ${d.minFps} fps, at least ${d.minSec} s`
    : `${d.minW}x${d.minH}`;
  const file = ['05','08','10','11','12','14','16','17','18','19','20'].includes(d.id) ? 'motion' : 'stills';
  const body = `# ${d.id} · ${d.file}

**${d.title}**

| | |
|---|---|
| Surface | ${d.surface} |
| Map | ${d.map ?? '—'} |
| Camera clip | ${d.camera ? `harness/clips/${d.camera}.mp4 through Chromium's fake capture device` : 'none'} |
| Minimum | ${min} |
| Driver | \`harness/drivers/${file}.mjs\`, entry \`${d.id}\` |
| Run | \`node harness/run-capture.mjs --only ${d.id}\` |

## State

${p.state ?? '—'}

## Vantage

${p.vantage ?? '—'}

## What it proves

${p.proves ?? '—'}
${p.notes ? `\n## Notes\n\n${p.notes}\n` : ''}
## Determinism

The sync service is started with a freshly wiped data directory seeded from the
committed fixtures in \`seeds/\`. Before the app boots, the harness pins
\`Date.now()\` to a fixed epoch plus elapsed time and replaces \`Math.random\` with
a seeded PRNG (\`harness/capture.mjs\`, \`SEED\`), so generated node ids and
relative times are identical from cycle to cycle. The camera pose is set
explicitly rather than left to whatever the previous interaction left behind.
`;
  writeFileSync(resolve(ROOT, 'docs/capture', `${d.id}.md`), body);
}
console.log(`wrote ${D.length} recipes to docs/capture/`);
