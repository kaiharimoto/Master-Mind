#!/usr/bin/env node
// Invariant tests for the properties rubric cat 03 is scored on.
import { createRequire } from 'node:module';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const M = require(resolve(ROOT, 'src/server/model.cjs'));

let pass = 0, fail = 0;
const ok = (name, cond, extra = '') => {
  if (cond) { pass++; console.log(`  ok   ${name}`); }
  else { fail++; console.log(`  FAIL ${name} ${extra}`); }
};
const doc = () => {
  const d = M.emptyDoc('m', 'M', 1000);
  M.applyOp(d, { t: 'node.set', id: 'a', actor: 'A', ts: 1000,
                 fields: { text: 'alpha', label: 'L', color: 'amber', pos: [1, 2, 3], placed: true, createdAt: 1000, lastTouchedAt: 1000 } });
  return d;
};

console.log('property-level last-writer-wins');
{
  const d = doc();
  // Two surfaces edit different properties concurrently; both must survive.
  M.applyOp(d, { t: 'node.set', id: 'a', actor: 'WIN', ts: 2000, fields: { text: 'from windows' } });
  M.applyOp(d, { t: 'node.set', id: 'a', actor: 'AND', ts: 2001, fields: { color: 'teal' } });
  ok('two surfaces editing different properties both land',
     d.nodes.a.text === 'from windows' && d.nodes.a.color === 'teal');
  ok('an untouched property is not disturbed', JSON.stringify(d.nodes.a.pos) === '[1,2,3]');
}
{
  const d = doc();
  M.applyOp(d, { t: 'node.set', id: 'a', actor: 'A', ts: 3000, fields: { text: 'late' } });
  M.applyOp(d, { t: 'node.set', id: 'a', actor: 'B', ts: 2000, fields: { text: 'early, arrives second' } });
  ok('an older write does not overwrite a newer one', d.nodes.a.text === 'late');
}
{
  // Order-independence: the same op set in any order gives the same document.
  const ops = [
    { t: 'node.set', id: 'b', actor: 'A', ts: 5000, fields: { text: 'b', pos: [9, 9, 9], placed: true, color: 'lime', label: '', createdAt: 5000, lastTouchedAt: 5000 } },
    { t: 'node.set', id: 'a', actor: 'B', ts: 5001, fields: { pos: [4, 5, 6] } },
    { t: 'link.add', id: 'l1', a: 'a', b: 'b', actor: 'A', ts: 5002 },
    { t: 'node.set', id: 'a', actor: 'C', ts: 5003, fields: { color: 'violet' } },
    { t: 'node.set', id: 'b', actor: 'A', ts: 5004, fields: { text: 'b2' } },
  ];
  const shots = [];
  for (const perm of [[0,1,2,3,4],[4,3,2,1,0],[2,0,4,1,3],[3,1,4,0,2]]) {
    const d = doc();
    for (const i of perm) M.applyOp(d, ops[i]);
    shots.push(JSON.stringify({ n: d.nodes, l: d.links }));
  }
  ok('the same op set converges from any arrival order', shots.every(s => s === shots[0]));
}

console.log('a node is never dropped to resolve a conflict');
{
  const d = doc();
  M.applyOp(d, { t: 'node.set', id: 'a', actor: 'AND', ts: 4000, fields: { text: 'edited on android' } });
  M.applyOp(d, { t: 'node.del', id: 'a', actor: 'WIN', ts: 3999 });
  ok('a delete concurrent with a later edit loses', !!d.nodes.a && d.nodes.a.text === 'edited on android');
}
{
  const d = doc();
  M.applyOp(d, { t: 'node.del', id: 'a', actor: 'W', ts: 6000 });
  ok('an explicit delete with nothing newer does remove the node', !d.nodes.a);
}

console.log('positions are sacred');
{
  const d = doc();
  const before = JSON.stringify(Object.fromEntries(Object.entries(d.nodes).map(([k, v]) => [k, v.pos])));
  for (const op of [
    { t: 'node.set', id: 'z', actor: 'A', ts: 7000, fields: { text: 'z', pos: [0, 0, 0], placed: false, color: 'bone', label: '', createdAt: 7000, lastTouchedAt: 7000 } },
    { t: 'link.add', id: 'lz', a: 'a', b: 'z', actor: 'A', ts: 7001 },
    { t: 'node.set', id: 'z', actor: 'A', ts: 7002, fields: { text: 'zz' } },
    { t: 'link.del', id: 'lz', actor: 'A', ts: 7003 },
    { t: 'map.set', actor: 'A', ts: 7004, fields: { name: 'renamed' } },
  ]) M.applyOp(d, op);
  const after = JSON.stringify({ a: d.nodes.a.pos });
  ok('adding, linking, editing, unlinking and renaming move nothing',
     after === '{"a":[1,2,3]}', `got ${after}`);
  ok('the map still holds both nodes', Object.keys(d.nodes).length === 2);
}
{
  // The whole seeded map, round-tripped through every op type that is not a
  // position write, must come back position-identical.
  const seed = JSON.parse(require('node:fs').readFileSync(resolve(ROOT, 'seeds/map-fermentation.json'), 'utf8'));
  const before = Object.fromEntries(Object.values(seed.nodes).map(n => [n.id, n.pos.join(',')]));
  const ids = Object.keys(seed.nodes);
  let ts = Date.now();
  for (let i = 0; i < 60; i++) {
    const id = ids[i * 7 % ids.length];
    M.applyOp(seed, { t: 'node.set', id, actor: 'T', ts: ++ts, fields: { text: `edit ${i}` } });
    M.applyOp(seed, { t: 'node.set', id, actor: 'T', ts: ++ts, fields: { color: 'teal' } });
  }
  const moved = Object.values(seed.nodes).filter(n => before[n.id] !== n.pos.join(','));
  ok('120 edits across the seeded map moved 0 nodes', moved.length === 0, `moved ${moved.length}`);
}

console.log('search and state resolution');
{
  const seed = JSON.parse(require('node:fs').readFileSync(resolve(ROOT, 'seeds/map-fermentation.json'), 'utf8'));
  const hits = M.searchMatches(seed, 'koji');
  ok('search finds text matches across districts', hits.length >= 5, `${hits.length}`);
  const sel = hits[0].id;
  const st = M.resolveStates(seed, sel, new Set([hits[1].id]));
  const counts = {};
  for (const v of st.values()) counts[v] = (counts[v] || 0) + 1;
  ok('all five states are reachable from one live map',
     st.get(sel) === 'selected' && st.get(hits[1].id) === 'searchHit' &&
     counts.unplaced === 8 && counts.plain > 0 && (counts.connected || 0) > 0,
     JSON.stringify(counts));
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
