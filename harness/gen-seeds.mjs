#!/usr/bin/env node
// Deterministic seed fixtures. Committed. NEVER regenerated at runtime (§09).
// Re-running this script must reproduce byte-identical files.
import { writeFileSync, mkdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const mulberry32 = (a) => () => {
  a |= 0; a = (a + 0x6D2B79F5) | 0;
  let t = Math.imul(a ^ (a >>> 15), 1 | a);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
let _s = 0x5EED1;
const rnd = () => { _s = (_s + 0x9E3779B9) | 0; return mulberry32(_s)(); };
const rr = (lo, hi) => lo + rnd() * (hi - lo);
const r3 = (n) => Math.round(n * 1000) / 1000;

const DAY = 86400000;
const T0 = Date.UTC(2023, 8, 14);           // the map's founding day
const NOW = Date.UTC(2026, 7, 20, 9, 12);   // the fixture's "today"

// --- The 100+ node map -----------------------------------------------------
// Topic written for this run: a working fermentation notebook, grown over
// three years. Old dense districts, a three-week-old frontier, cross-links
// between districts, and a partly full holding cluster.
const DISTRICTS = [
  { name: 'Microbiology', color: 'violet', c: [-26, 6, -4], r: 7.2, age: [0, 210], nodes: [
    'Lactobacillus plantarum','Leuconostoc mesenteroides','Saccharomyces cerevisiae','Wild yeast capture',
    'Aspergillus oryzae','Acetobacter aceti','Brettanomyces','Pediococcus','Bacterial succession',
    'Heterofermentative','Homofermentative','Osmotolerance','Salt tolerance curve','Anaerobic vs aerobic',
    'Biofilm formation','Kahm yeast is harmless','Mold vs yeast ID','Phage collapse in dairy'] },
  { name: 'Lacto-vegetables', color: 'lime', c: [-18, -13, 9], r: 7.6, age: [4, 300], nodes: [
    '2% brine baseline','3.5% for cucumbers','Sauerkraut by weight','Dry-salt vs brine','Kimchi: gochugaru',
    'Jangajji soy pickles','Curtido','Giardiniera','Fermented hot sauce','Weight everything down',
    'Headspace matters','Airlock vs burp','Cabbage core sugars','Carrot batons hold crunch',
    'Grape leaf tannin trick','Cloudy brine is normal','Slime means a stalled ferment','Ferment at 18-22C',
    'Second ferment in fridge','Brine as seasoning'] },
  { name: 'Sourdough', color: 'amber', c: [-24, 19, 6], r: 7.0, age: [11, 340], nodes: [
    'Starter: 1:5:5 feed','Stiff levain keeps longer','Rye starts fastest','Hydration 75% baseline',
    'Autolyse 40 min','Bulk to 50% rise','Coil folds, not slaps','Cold retard overnight','Open crumb myth',
    'Scoring at 30 degrees','Steam the first 20 min','Dutch oven vs steam pan','Discard crackers',
    'Sour is acetic, not lactic','Whole grain speeds acid','Float test is unreliable',
    'Ambient temp dominates','Starter hibernation'] },
  { name: 'Koji', color: 'coral', c: [14, 8, -8], r: 6.8, age: [380, 700], nodes: [
    'Koji on pearl barley','Rice koji: polish to 90%','Inoculate at 30C','Hyphae bloom on day 2',
    'Stir at 24h to cool','Koji-kin sourcing','Shio koji','Amazake','Miso at 12% salt',
    'Barley miso, 18 months','Soy sauce moromi','Doubanjiang','Koji-cured egg yolk',
    'Amylase plus protease','Bed depth 4cm max','Sweet vs savoury paths'] },
  { name: 'Vinegar', color: 'azure', c: [26, -9, 4], r: 6.2, age: [430, 760], nodes: [
    'Mother formation','Acetobacter needs air','Apple scrap vinegar','Rice vinegar base',
    'Acidity titration','Solera stacking','Balsamic mosto cotto','Oxygen surface area',
    'Fruit fly discipline','Vinegar from failed wine','5% target acidity','Sherry vinegar butt',
    'Kombucha SCOBY overlap','A pellicle is not a mother'] },
  { name: 'Dairy', color: 'bone', c: [19, 21, 7], r: 6.0, age: [500, 820], nodes: [
    'Mesophilic vs thermophilic','Yogurt at 43C','Kefir grains double','Creme fraiche shortcut',
    'Chevre at room temp','Rennet vs acid set','Curd knitting','Brine-washed rind',
    'Blue: P. roqueforti','Whey as a brine starter','Lactose to lactic acid','Raw milk caution',
    'Cheese cave humidity'] },
  { name: 'Safety and pH', color: 'magenta', c: [-2, 1, 14], r: 6.6, age: [2, 900], nodes: [
    'pH 4.6 is the line','Calibrate the meter','Strips lie above pH 4','Botulism needs low acid',
    'Garlic in oil: never','Fuzzy mold means discard','Salt by weight only','Sanitise, do not sterilise',
    'Dechlorinate the water','Trust smell over sight','Log every batch','When in doubt, toss it'] },
  { name: 'Equipment', color: 'teal', c: [-6, -21, -6], r: 6.4, age: [20, 880], nodes: [
    'Fido jars burp themselves','Crock with a water moat','Glass weights','Vacuum bags for lacto',
    'Immersion circulator at 60C','Cheap pH meters drift','Dehydrator as incubator','Cambro for volume',
    'Muslin vs cheesecloth','Label tape and a marker','Silicone airlock lids','Digital scale, 0.1g'] },
  { name: 'Reading', color: 'lime', c: [4, 27, -14], r: 8.4, age: [30, 950], nodes: [
    'Noma Guide to Fermentation','Katz: Wild Fermentation','The Art of Fermentation','Koji Alchemy',
    'Ruhlman on ratios','r/fermentation threads','The Sourdough Journey','Cheese science toolkit',
    'Serious Eats on pickles','Paper: microbial succession'] },
  // The frontier: three weeks old, loosely tied in, full chroma by D-007.
  { name: 'Garum', color: 'coral', c: [34, 16, -20], r: 4.6, age: [1055, 1070], nodes: [
    'Garum at 20% salt','Koji-accelerated garum','60C for eight weeks','Anchovy vs mackerel',
    'Colatura di alici','Beef garum trial','Peach pit garum?','Filter through muslin','Umami stacking'] },
];

// Cross-district links: the geography's connective tissue.
const CROSS = [
  ['Aspergillus oryzae','Koji on pearl barley'],['Acetobacter aceti','Mother formation'],
  ['Lactobacillus plantarum','2% brine baseline'],['Saccharomyces cerevisiae','Starter: 1:5:5 feed'],
  ['Wild yeast capture','Rye starts fastest'],['Phage collapse in dairy','Mesophilic vs thermophilic'],
  ['Leuconostoc mesenteroides','Sauerkraut by weight'],['Salt tolerance curve','Miso at 12% salt'],
  ['pH 4.6 is the line','3.5% for cucumbers'],['pH 4.6 is the line','5% target acidity'],
  ['Calibrate the meter','Cheap pH meters drift'],['Botulism needs low acid','Vacuum bags for lacto'],
  ['Salt by weight only','Sauerkraut by weight'],['Salt by weight only','Digital scale, 0.1g'],
  ['Immersion circulator at 60C','60C for eight weeks'],['Koji-cured egg yolk','Koji-accelerated garum'],
  ['Amylase plus protease','Garum at 20% salt'],['Miso at 12% salt','Soy sauce moromi'],
  ['Whey as a brine starter','Brine as seasoning'],['Kombucha SCOBY overlap','A pellicle is not a mother'],
  ['Vinegar from failed wine','Brettanomyces'],['Dehydrator as incubator','Inoculate at 30C'],
  ['Noma Guide to Fermentation','Shio koji'],['Katz: Wild Fermentation','Curtido'],
  ['Koji Alchemy','Barley miso, 18 months'],['Paper: microbial succession','Bacterial succession'],
  ['The Sourdough Journey','Open crumb myth'],['Cheese science toolkit','Curd knitting'],
  ['Serious Eats on pickles','Giardiniera'],['Fermented hot sauce','Doubanjiang'],
  ['Crock with a water moat','Weight everything down'],['Glass weights','Headspace matters'],
  ['Trust smell over sight','Kahm yeast is harmless'],['Fuzzy mold means discard','Mold vs yeast ID'],
  ['Osmotolerance','Garum at 20% salt'],['Anaerobic vs aerobic','Oxygen surface area'],
  ['Ferment at 18-22C','Ambient temp dominates'],['Log every batch','Label tape and a marker'],
];

const HOLDING_BIG = [
  ['Coffee cherry cascara ferment?', 3], ['Ask M about her crock', 6],
  ['Nixtamal plus koji', 1], ['Sour cherry kvass', 9],
  ['Recalibrate the pH meter', 0], ['Preserved lemon, batch 3', 2],
  ['Black garlic: 60C for 40 days', 4], ['Read the succession paper', 12],
];

function build() {
  const nodes = {}, links = {}, byText = {};
  const mk = (text, label, color, pos, placed, createdAt, touched) => {
    const id = 'n' + createHash('sha1').update(text + '|' + label).digest('hex').slice(0, 10);
    nodes[id] = { id, text, label, color, pos: pos.map(r3), placed, createdAt, lastTouchedAt: touched };
    byText[text] = id;
    return id;
  };
  const link = (a, b, ts) => {
    if (!a || !b || a === b) return;
    const [x, y] = a < b ? [a, b] : [b, a];
    const id = 'l' + createHash('sha1').update(x + '|' + y).digest('hex').slice(0, 10);
    if (!links[id]) links[id] = { id, a: x, b: y, createdAt: ts };
  };

  const MIN_SEP = 2.45;      // nobody piles thoughts on top of each other
  const SPREAD = 1.14;       // district centres
  const RADIUS = 1.30;       // district size
  for (const d of DISTRICTS) {
    const ids = [];
    const centre = d.c.map(v => v * SPREAD);
    const placedPts = [];
    d.nodes.forEach((text, i) => {
      const t = i / Math.max(1, d.nodes.length - 1);
      // Rejection-sampled so labels have room: a hand-placed map does not stack
      // nodes on one spot. Deterministic - the PRNG is seeded.
      let pos = null;
      for (let attempt = 0; attempt < 220 && !pos; attempt++) {
        const grow = 1 + attempt / 90;
        const rad = d.r * RADIUS * grow * (0.30 + 0.70 * Math.pow(rnd(), 0.58));
        const th = rnd() * Math.PI * 2, ph = Math.acos(2 * rnd() - 1);
        const cand = [
          centre[0] + rad * Math.sin(ph) * Math.cos(th),
          centre[1] + rad * Math.sin(ph) * Math.sin(th) * 0.80,
          centre[2] + rad * Math.cos(ph),
        ];
        const ok = placedPts.every(q => Math.hypot(cand[0] - q[0], cand[1] - q[1], cand[2] - q[2]) >= MIN_SEP);
        if (ok) pos = cand;
      }
      if (!pos) {
        const rad = d.r * RADIUS * 1.9;
        const th = rnd() * Math.PI * 2;
        pos = [centre[0] + rad * Math.cos(th), centre[1] + rr(-2, 2), centre[2] + rad * Math.sin(th)];
      }
      placedPts.push(pos);
      const created = T0 + (d.age[0] + t * (d.age[1] - d.age[0]) + rr(-6, 6)) * DAY;
      ids.push(mk(text, d.name, d.color, pos, true, Math.round(created), Math.round(created + rr(0, 40) * DAY)));
    });
    ids.forEach((id, i) => {
      if (i === 0) return;
      link(id, ids[Math.floor(rnd() * i)], nodes[id].createdAt);
      if (rnd() < 0.42) link(id, ids[Math.floor(rnd() * i)], nodes[id].createdAt);
    });
  }
  for (const [a, b] of CROSS) link(byText[a], byText[b], NOW - 200 * DAY);

  const doc = {
    id: 'map-fermentation', name: 'Fermentation notebook',
    createdAt: T0, lastOpenedAt: NOW - 3 * 3600000,
    nodes, links, holding: { origin: [-5, -40, 22], radius: 6.6 },
    clocks: {}, removedLinks: {},
  };
  HOLDING_BIG.forEach(([text, daysAgo], i) => {
    const a = (i / HOLDING_BIG.length) * Math.PI * 2;
    const rad = doc.holding.radius * (0.42 + 0.42 * rnd());
    const pos = [
      doc.holding.origin[0] + rad * Math.cos(a),
      doc.holding.origin[1] + rr(-1.9, 1.9),
      doc.holding.origin[2] + rad * Math.sin(a),
    ];
    const created = NOW - daysAgo * DAY - Math.round(rr(0, 8) * 3600000);
    mk(text, 'holding', 'bone', pos, false, created, created);
  });
  return doc;
}

function buildSmall() {
  _s = 0xA11CE;
  const nodes = {}, links = {}, byText = {};
  const N = Date.UTC(2026, 7, 20, 8, 40);
  const mk = (text, label, color, pos, placed, created) => {
    const id = 's' + createHash('sha1').update(text).digest('hex').slice(0, 10);
    nodes[id] = { id, text, label, color, pos: pos.map(r3), placed, createdAt: created, lastTouchedAt: created };
    byText[text] = id; return id;
  };
  const placed = [
    ['Opening: where did you park?', 'arc',    'amber', [-7.4, 3.1, 0.6], 26],
    ['Method of loci',               'ground', 'violet',[-2.6, 6.4, -2.2], 25],
    ['Lists flatten meaning',        'ground', 'violet',[ 1.9, 4.2, 2.8], 21],
    ['Positions are the memory',     'spine',  'coral', [ 0.4, 0.2, -0.7], 19],
    ['Demo: search fly-to',          'demo',   'teal',  [ 5.8, -1.6, 1.4], 11],
    ['Slide budget: 12',             'admin',  'bone',  [-6.1, -4.3, -3.1], 8],
    ['Closing: build your own',      'arc',    'amber', [ 7.1, 4.9, -2.4], 5],
  ];
  for (const [t, l, c, p, d] of placed) mk(t, l, c, p, true, N - d * DAY);
  const L = (a, b) => {
    const [x, y] = byText[a] < byText[b] ? [byText[a], byText[b]] : [byText[b], byText[a]];
    const id = 'l' + createHash('sha1').update(x + '|' + y).digest('hex').slice(0, 10);
    links[id] = { id, a: x, b: y, createdAt: N - 12 * DAY };
  };
  L('Opening: where did you park?', 'Method of loci');
  L('Method of loci', 'Positions are the memory');
  L('Lists flatten meaning', 'Positions are the memory');
  L('Positions are the memory', 'Demo: search fly-to');
  L('Demo: search fly-to', 'Closing: build your own');
  L('Opening: where did you park?', 'Slide budget: 12');

  const doc = {
    id: 'map-talk', name: 'Talk — spatial memory',
    createdAt: N - 26 * DAY, lastOpenedAt: N,
    nodes, links, holding: { origin: [0, -9.5, 3], radius: 3.6 },
    clocks: {}, removedLinks: {},
  };
  [['Steal the parking-lot bit', 0.4], ['Ask about the demo laptop', 1.1],
   ['Cut the history section?', 0.2], ['Timebox to 18 minutes', 2.4]
  ].forEach(([text, daysAgo], i) => {
    const a = (i / 4) * Math.PI * 2 + 0.4;
    const rad = doc.holding.radius * 0.62;
    mk(text, 'holding', 'bone',
       [doc.holding.origin[0] + rad * Math.cos(a), doc.holding.origin[1] + rr(-1.1, 1.1),
        doc.holding.origin[2] + rad * Math.sin(a)],
       false, Math.round(N - daysAgo * DAY));
  });
  return doc;
}

mkdirSync(resolve(ROOT, 'seeds'), { recursive: true });
const out = [];
for (const doc of [build(), buildSmall()]) {
  const json = JSON.stringify(doc, null, 1);
  const file = `seeds/${doc.id}.json`;
  writeFileSync(resolve(ROOT, file), json);
  const hash = createHash('sha256').update(json).digest('hex');
  const placed = Object.values(doc.nodes).filter(n => n.placed).length;
  const held = Object.values(doc.nodes).length - placed;
  out.push({ file, id: doc.id, name: doc.name, nodes: Object.keys(doc.nodes).length,
             placed, holding: held, links: Object.keys(doc.links).length, sha256: hash });
}
writeFileSync(resolve(ROOT, 'seeds/MANIFEST.json'), JSON.stringify(out, null, 2));
console.table(out.map(o => ({ ...o, sha256: o.sha256.slice(0, 16) + '…' })));
