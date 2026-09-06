// The three paste-backs used by artifact 20.
//
// §09: an artifact-20 round-trip whose parsed reply was authored by the agent
// is acceptable only if at least one malformed reply AND one adversarially
// messy reply go through the same parser on camera in the same take. All three
// below do, in that order. The authored path is declared in report.md.

/** 1 — malformed. Must produce a visible error and change nothing. */
export const MALFORMED = `Sure! Here are some ideas for your map:

- Link "Method of loci" with "Demo: search fly-to" because they rhyme
- Maybe group the opening bits together

Hope that helps! Let me know if you want me to format it differently.`;

/** 2 — adversarially messy: fences, prose, smart quotes, unquoted keys,
 *  trailing commas, a Python literal, a bad node id, a self-link, an already
 *  existing link, a placement of an already-placed node, and truncation. */
export const MESSY = `Absolutely — here's what I'd suggest.

\`\`\`json
{
  // grouping the two framing ideas
  connections: [
    { a: 'Lists flatten meaning', b: "Opening: where did you park?", why: 'both set up the problem before the method', },
    { a: 'Method of loci', b: 'Method of loci', why: 'self link, should be dropped' },
    { "a": "Positions are the memory", "b": "Demo: search fly-to", "why": "already joined" },
    { a: "Slide budget: 12", b: "Closing: build your own", why: 'the ending has to fit the budget' },
    { a: "node-that-does-not-exist", b: "Method of loci", why: "bogus id" },
  ],
  groupings: [
    { name: 'Framing', nodes: ['Opening: where did you park?', 'Lists flatten meaning'], why: 'the setup half of the talk', },
    { name: '', nodes: ['Method of loci'], why: 'no name and only one node' },
  ],
  placements: [
    { node: 'Steal the parking-lot bit', pos: [-6.2, 2.4, 1.1], why: 'sits with the opening it belongs to' },
    { node: 'Timebox to 18 minutes', pos: [-5.4, -3.6, -2.2], why: 'next to the slide budget' },
    { node: "Positions are the memory", pos: [0,0,0], why: 'already placed — must not move' },
    { node: 'Cut the history section?', pos: ['nope', None, 3], why: 'not three numbers' },
  ],
}
\`\`\`

Those should tighten the middle of the talk. Want me to go deeper on the`;

/**
 * 3 — the same adversarial shape at 150 nodes.
 *
 * The cycle-11 Art Director's last open point on the finder category: the whole
 * round-trip had only ever been run against the eleven-node map, "leaving
 * prompt size, parse volume, staging behaviour and the rejection log unproven
 * at the scale the product actually claims". This reply is written against the
 * fermentation notebook and carries every failure the messy reply carries —
 * a self-link, an already-existing pair, a node that does not exist, a
 * placement of an already-placed thought, a malformed coordinate — plus the
 * volume: nine connections, two groupings, three placements.
 */
export const BIG_MESSY = `Right — I read the whole map. Here's what stands out.

\`\`\`json
{
  connections: [
    { a: 'Lactobacillus plantarum', b: 'pH 4.6 is the line', why: 'the organism is why the line is where it is', },
    { a: "Acetobacter aceti", b: 'Acetobacter needs air', why: 'the same fact stated twice, worth joining' },
    { a: 'Aspergillus oryzae', b: "Rice koji: polish to 70 %", why: 'organism and substrate' },
    { a: 'Wild yeast capture', b: 'Stiff levain vs liquid', why: 'both are about what you caught' },
    { a: 'Calibrate the meter', b: 'Recalibrate the pH meter', why: 'the note and the task' },
    { a: 'Mother formation', b: 'Mother formation', why: 'self link, should be dropped' },
    { "a": "Strips lie above pH 4", "b": "pH 4.6 is the line", "why": "may already be joined" },
    { a: 'Saccharomyces cerevisiae', b: 'not-a-real-node-id', why: 'bogus' },
    { a: "Botulism needs low acid", b: "Garlic in oil: never", why: 'the rule and its worst case' },
  ],
  groupings: [
    { name: 'Acidity', nodes: ['pH 4.6 is the line', 'Acidity titration', 'Strips lie above pH 4'] },
    { name: '', nodes: ['Mother formation'] },
  ],
  placements: [
    { node: 'Sour cherry kvass', pos: [12.5, -3.25, 7.0], why: 'near the vinegar work' },
    { node: 'Lactobacillus plantarum', pos: [0, 0, 0], why: 'already placed — must not move' },
    { node: 'Nixtamal plus koji', pos: ['maybe', None, 2], why: 'not three numbers' },
  ],
}
\`\`\`

That should be enough to be going on with — happy to go deeper on the`;

export const ORDER = [
  { label: 'a malformed reply — prose, no JSON', text: MALFORMED, expectOk: false },
  { label: 'a messy real-world reply — fences, comments, single quotes, bad ids', text: MESSY, expectOk: true },
  { label: 'the same adversarial shape against the 150-node map', text: BIG_MESSY, expectOk: true },
];
