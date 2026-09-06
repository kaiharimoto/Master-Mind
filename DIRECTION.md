# DIRECTION.md — visual language and decision record

Master Mind. Recorded decisions are **not reopened** (§09). Each entry is dated
by review cycle. Entries marked `PENDING` name who decides and when.

---

## D-000 · Reading of §00's "no tool access" clause  · cycle 0 · SETTLED

The brief's §00 states the agent has "no tool access and no filesystem" and must
emit unexecuted instructions. That clause does not describe this environment:
this session has a real shell, a real filesystem, a real network and a real
browser. Emitting unexecuted instructions here would violate §02 ("Perform the
actual work. Do not answer with only a plan, a tutorial, or sample code") and
§09's silent-cut condition.

**Decision.** Perform real work. Every claim in `report.md` is backed by a
command actually run in this container. The clause is recorded as finding
**F-001** rather than silently ignored.

---

## D-001 · Primary tool: Unity → TypeScript + Three.js  · cycle 0 · SETTLED

§00 names Unity 2022 LTS as PRIMARY TOOL and §09 makes changing the tool a
contract violation *unless recorded as a finding*. It is recorded, as **F-005**.

The blockers are hardware, not preference, and are independently decisive even
if a Unity licence were granted:

| Blocker | Verified how | Consequence for Unity |
|---|---|---|
| No GPU — `/dev/dri` absent | `ls /dev/dri` → no such file | Editor GUI and both players are software-rendered only |
| No KVM — `/dev/kvm` absent, 0 CPUs with `vmx`/`svm` | `ls /dev/kvm`; `grep -c '(vmx\|svm)' /proc/cpuinfo` → 0 | The Android player **cannot be run at all** |
| No Wine *at census* — later installed | `command -v wine` → not found; `apt-get install -y wine64` then succeeded | Corrected in F-007: the Windows target builds **and runs**. Unity is still blocked by the two rows above |

A Unity build is therefore producible but **not runnable**, and artifacts 03,
05, 11, 12, 16, 17, 18, 19 and 20 all require a *running* build. The licence
question is not load-bearing and is reported as such rather than asserted.

**Decision.** One TypeScript codebase on Three.js/WebGL2, rendered by the
Chromium already in this image under ANGLE/SwiftShader. It preserves every
property the rubric actually scores — one shared model, three lenses, real
input recognition, real cross-process sync, real 1920×1080+ capture at ≥24 fps —
and it *runs here*, which Unity does not.

Target mapping, and how each is honest about what it is:

- **Windows target** — Electron. `src/build-windows.mjs` emits a real
  `win32-x64` application from the official Electron distribution, and it
  **runs here under Wine** at 8.5 fps with WebGL2 and live sync (F-007). The
  evidence set is captured in Chromium for per-artifact isolation and speed;
  the twin composite uses the real Windows binary for its Windows side.
- **Android target** — Capacitor + Android SDK → a real 22.8 MB `.apk` via
  Gradle, carrying both seed fixtures, the font atlas and the hand-landmarker
  model (F-013). The APK is built, not executed (no KVM). The Android *surface* is driven in
  Chromium under a Pixel-class device profile with real touch events
  (`Input.dispatchTouchEvent`) and real orientation events
  (`Emulation.setDeviceOrientationOverride` → `DeviceOrientationEvent`), so the
  app's own gyro and touch code paths execute unmodified. Declared as **F-003**.

---

## D-002 · Sync: Firebase → local networked sync service  · cycle 0 · SETTLED

Creating a Firebase project requires a Google account credential this session
does not hold, and §02 lists credentials as a legitimate stop. Stopping the run
is not available (§00 AUTONOMY), so this is finding **F-006**.

**Decision.** A real networked sync service (`src/server`, WebSocket) with the
exact semantics §07/06 scores: property-level last-writer-wins, never drop a
node, never resolve by re-layout. Two *separate browser processes* — the Windows
surface and the Android surface — connect to it over a socket. The proof the
rubric asks for (a change on one surface becomes truth on the other, positions
untouched) is produced by genuine network propagation between two processes, not
by sharing a file or a tab. What is substituted is the *hosting* (localhost
instead of Google's managed tier), not the *mechanism*.

---

## D-003 · Hand tracking: real MediaPipe on a browser-level virtual camera · cycle 0 · SETTLED

There is no webcam (`/dev/video*` absent) and no way to create one: this kernel
exposes no module tooling (`modinfo`, `lsmod`, `insmod` all absent), so
`v4l2loopback` is impossible. Finding **F-004**.

**Decision.** Chromium's fake capture device
(`--use-fake-device-for-media-stream --use-file-for-fake-video-capture=<y4m>`)
serves a pre-recorded clip through the genuine `getUserMedia` path. On top of
that stream runs the real `@mediapipe/tasks-vision` HandLandmarker (WASM, vendored,
pinned `1.0.1`) producing real 21-point landmarks, and poses are classified
**from those landmarks by geometry** — never from clip metadata, filename, or
frame index.

This is the line §09 draws: a gesture proven "only against the exact
pre-recorded clip rather than the recognized-pose path" is forgery. The clip is
the *camera*, not the *answer*. To keep that verifiable, the pose classifier is
tested against clips it has never been tuned on, and artifact 05 shows the live
landmark overlay next to the operation it drove.

---

## D-004 · Reading: **organic-bioluminescent**  · cycle 1 · SETTLED — RULED BY THE ART DIRECTOR

**Ruled and closed.** The Art Director ratified organic-bioluminescent in cycle
1, from the frames, and the ruling is not reopened.

Its reasoning, in its own terms: the arbiter test is whichever keeps the five
node states legible and the space still, and the organic reading already passes
both halves. Sampled directly from artifact 07 the ground is exactly (18,14,11)
— `#120E0B` — and reads identically at five widely separated points, with no
vignette, gradient, grid or fog plane, so the only luminance in the world
belongs to nodes and filaments. That empty ground is what makes the state ladder
work. Filaments measure 28,23,19 at rest and 141,123,107 when carrying state — a
five-fold step landing on exactly the links incident to the selection and the
search hit. A restrained-holographic reading would have to introduce translucent
planes, cyan edge geometry or chrome to be legible as itself, and each is an
extra luminance and an extra ring-like contour competing with the state
signatures on the only channel this design has left.

---

## D-004-orig · The provisional working reading (superseded by the ruling above)

§01/Atmosphere delegates the organic-versus-holographic call to one arbiter, and
§04 names that arbiter as the Art Director critic. The Art Director cannot rule
before evidence exists, so:

- **Provisional working reading (cycle 0): organic-bioluminescent.** Warm dark
  ground, self-luminous cores, filaments as the connective tissue — the brief's
  own "like the neurons of a brain". Restrained-holographic pulls toward cyan
  wireframe and chrome, which fights the avoid-list.
- The Art Director ratifies or overturns this **once**, in cycle 1, from the
  captured frames. That ruling is written here and **never reopened**.

---

## D-005 · Palette  · cycle 0 · SETTLED

| Role | Value | Note |
|---|---|---|
| Ground | `#120E0B` | near-black warm dark, charcoal-brown. Flat — no vignette, no gradient, no grid, no fog plane |
| Filament, resting | `#8A7F76` @ α 0.22 | faint pale filament |
| Filament, carrying state | `#D8CCC0` @ α 0.78 | brightens only for selected / search-hit |
| Text | `#EFE6D8` | bone, high contrast on ground |
| Node hues (user-chosen, the only saturated elements) | amber `#FFB020` · coral `#FF6B4A` · magenta `#E85C9A` · violet `#9B7BFF` · azure `#4FA8FF` · teal `#2FD0C0` · lime `#9BD648` · bone `#E8DCC8` | |

Distance fades toward the ground colour by attenuating node and filament
brightness with depth. There is no fog volume, no haze layer, no ground plane
and no grid anywhere in the world.

---

## D-006 · The five node states — dual-coded  · cycle 0 · SETTLED

Every state carries **both** a luminance step and a distinct ring geometry, so
the family reads at a glance and stays diffable. Uniform luminance is the
failure this is built to avoid: the ladder is deliberate and monotonic.

| State | Core intensity | Ring geometry | Motion |
|---|---:|---|---|
| plain | 0.50 | none — bare core | none |
| connected-to-selection | 0.72 | one thin outer ring @ 1.50× core | none |
| unplaced / in holding | 0.86 | dashed ring, 8 dashes @ 1.70× core | slow light pulse 0.82↔0.94 over 3.2 s |
| search hit | 0.95 | four ticks at N/E/S/W outside 1.90× core | none |
| selected | 1.00 | solid heavy ring @ 1.35× core | none |

Ground sits at ≈0.05 luminance, below every node state. Plain sits visibly below
the other four. The only motion in the world is the unplaced pulse — which moves
**light, never position**, the one exception §01/Atmosphere grants.

---

## D-007 · Node recency channel: **chroma**  · cycle 0 · SETTLED

§06 requires recency to be either a modelled property with a declared visual
channel that reuses none of the five state signatures, or struck. It is
**modelled**: every node carries `createdAt` and `lastTouchedAt` in the synced
model.

**Declared channel: chroma.** `saturation = mix(0.45, 1.00, recency)`. Old,
settled districts read muted; the recently grown frontier reads at full chroma.
The channel touches neither the luminance ladder (D-006) nor any ring geometry,
so it cannot be confused with a state. Recency never moves a node.

*Cycle 1 refinement (the channel is unchanged; only its span moved).* The Art
Director measured the saturation spread at whole-brain framing as 0.13–0.54
within single hue families and found it indistinguishable from depth
attenuation — the channel was present but did not read. The span was widened
from `0.62..1.00` to `0.45..1.00` so the frontier's lead exceeds the depth-fade
range. This tunes a parameter inside the decision; it does not reopen the
decision, which is that recency's channel is chroma.

---

## D-008 · Materials  · cycle 0 · SETTLED

- Nodes are self-luminous. No lighting rig, no shadow map, no environment map.
- Filaments are 1-px-wide additive-free lines — thin, present at every zoom,
  never beams. Their perspective convergence is a depth cue; nothing else is.
- Text is an SDF atlas (single channel, generated deterministically at build
  time from DejaVu Sans) rendered as instanced quads, screen-size clamped to
  12–42 px. Crisp at whole-brain and at reading distance, with no LOD switch and
  therefore no pop-in.
- UI surfaces are matte, flat, opaque, borderless. No glass, no chrome, no
  reflective cards, no rounded floating panels in world space.

---

## D-009 · What is deliberately absent  · cycle 0 · SETTLED

Enumerated so the avoid-list is checkable rather than asserted: no auto-layout,
no force simulation, no idle drift, no easing on placed positions, no particle
system, no bloom or glow post-pass, no lens flare, no HUD frame, no wireframe
floor, no grid, no fog, no ground plane, no celebratory effect on connect or
place, no bounce, no node motion that the user did not directly cause.

Node positions change on exactly one code path: an explicit user drag or a
user-accepted finder placement suggestion. That path is the only writer of
`node.pos` in the entire codebase, and it is asserted by test.

---

## D-010 · Fourth hand pose: pinch → two fingers  · cycle 0 · SETTLED

§07's Windows hand family names the four **operations** (grab a cluster, spread,
gather, select/confirm) and requires poses "physically distinct enough for a
webcam to tell apart reliably". The pose that fills the select/confirm slot was
chosen by measurement, not preference.

A pinch was tried first and does not survive this environment's camera. With no
real webcam (F-004), the clip is synthesised, and MediaPipe consistently refuses
to see a synthetic thumb-to-index contact: across six geometries it reported the
thumb and index tips 0.49–0.76 hand-spans apart when they were rendered
touching, and classified the pose as an open hand. A single raised finger fared
no better — MediaPipe identified the raised digit as the thumb and its reach
readings ranged 0.99–3.08, overlapping a closed fist.

**Decision: a two-finger V** — index and middle extended, ring and little finger
curled. Measured against real MediaPipe output, the four poses separate with no
overlap at all:

| Pose | Fingertips beyond 1.5 hand-spans | Fan (mean pairwise tip distance / span) |
|---|---:|---|
| open palm, fanned | 4 | 0.95 – 1.08 |
| gathered hand | 4 | 0.35 – 0.40 |
| two fingers | 2 | — |
| closed fist | 0 | — |

The classifier therefore counts **how many fingertips reach past 1.5 hand-spans**
and, for open hands, how fanned they are. It never asks *which* digit is raised
— the one thing MediaPipe is unreliable about here.

Validated on a **held-out clip** the thresholds were not derived from (different
hand scale, 14° rotation instead of 5°, different drift, different background,
poses in a different order): **99.0 % detection, 99.7 % pose accuracy**
(`harness/validate-poses.mjs`, results in `harness/clips/validation.json`).

*Corrected in cycle 7.* This read 100 % until then, from a single pass that did
not reproduce. The validator now runs three passes and reports the range; all
three measure 99.7 %, and the misses are all one pose — `fist` read as `NO_HAND`
on 3 of 273 frames. Recorded as F-028. The decision itself is unchanged; the
number attached to it is the one that reproduces.

## D-011 · Video is rendered frame-accurate on the app's own clock  · cycle 0 · SETTLED

Measured in this container: the app produces about **12 frames per second** of
wall clock at 1920×1080 under the software rasteriser (F-002). The evidence set
requires ≥24 fps.

**Decision.** The app carries a virtual clock. `App.renderAt(ms)` renders exactly
one frame at a given time; the capture harness steps it at a fixed 1/30 s and
encodes the frames. Every frame in every video is really rendered by the running
app from the live model — nothing is interpolated, tweened, or cut. What differs
from a realtime recording is only how fast the wall clock ran while it was made.
Interactions (touch events, clicks, typing) are dispatched between steps through
the ordinary DOM, so the app's own input paths execute unchanged.

Recorded as **F-010**. The alternative — shipping 12 fps video — would have
failed the stated minimum, and dropping the resolution would have failed another.

## D-012 · Labels may be re-anchored; nodes never move  · cycle 2 · SETTLED

Two critics, independently, called dense-district label collision the largest
remaining legibility cost, and both offered the same class of correction:
displacement rather than dimming alone. Displacement raises an obvious hazard in
a build whose central claim is that **a node's position is sacred and written by
exactly one path** — an explicit user act.

**Decision.** Label *text* may be re-anchored in screen space; a *node* never
moves for legibility, ever.

The deconflictor tries each label at nine anchors around its own node — its
authored side, one and two line-heights up or down, and the four diagonals at
0.62 em — scores each by the fraction a higher-priority label has already
claimed, and takes the clearest. The unshifted anchor wins ties and is only
displaced by a candidate that is meaningfully clearer, so a label does not
jitter between placements as the camera turns. What remains buried in its best
available placement is faded to nothing, so a suppressed label does not smear
the one on top of it.

Every anchor is adjacent to the node it names, so no leader lines are needed and
no label detaches from its subject. The shift lives in a per-frame attribute
(`aShift`) consumed by the text shader; it never touches `node.pos`, and the
position ledger the auditor compares is untouched by it — as `positions.json`
being byte-identical across cycles 1 and 2 already showed while the earlier,
dimming-only version of this code was live.

**Not a reopening of D-006 or D-007.** The five states keep their signatures and
recency keeps chroma. This decides only where a label may be drawn.

### Amendment, cycle 9 — the far ring was a departure from this decision, and is withdrawn

Cycle 8 added a *far ring* of anchors — twelve directions at four radii, out to
about fifteen em — so that names crowded out of a dense district could reach
open ground, with a leader drawn back to the node. It bought roughly thirty more
drawn labels on the whole-map frames.

It also broke the sentence three paragraphs above. **"Every anchor is adjacent
to the node it names… no label detaches from its subject"** stopped being true
of the shipped frames, and the cycle-8 Art Director measured the cost: **18
label runs on artifact 02 sitting entirely clear of every node, against 1 in
cycle 7**, with label ink overhanging the node field by 277 px against 46. Its
delegated ruling — and this call is the Art Director's under §04 — was to keep
the anchor *directions* and lose the *reach*.

**Displacement is now a hard constraint, not a term in a score:** no candidate
whose box lies more than **2.6 em** — about two line-heights — from the nearest
edge of its own node's mark, and a label with no candidate inside that is
suppressed and counted rather than relocated. `everyLabelStaysBesideItsNode` is
a required claim on every artifact that carries labels, asserted in the label's
own type size, because 40 px is far beside 12 px type and adjacent beside 24 px
type.

**This restores D-012 rather than reopening it.** The decision always said
adjacent; cycle 8's code stopped honouring it and cycle 9 makes the code match
the decision and gates it so the drift is caught by a claim rather than by a
critic.

One clause of D-012 did not survive contact and is amended rather than quietly
dropped: *"no leader lines are needed"*. Leaders exist, and they earn their
place on a different problem than the one this decision anticipated — **not
distance, but ambiguity**. In the holding ring the unplaced nodes pack tightly
enough that a label's nearest dot can be a neighbour's rather than its own, and
there a line joining name to mark is the only thing that makes attribution
certain. Leaders are drawn for that case and no longer for reach.

The cost is stated on the frame rather than absorbed: artifact 02 draws **66 of
150** labels and says so — "84 labels hidden · 36 shortened at this zoom". A
suppressed label costs one label; an orphan costs one label and adds a false
object.

### Amendment, cycle 12 — the truncation floor gets a tier below it, and the reason the floor existed is what governs the tier

The cycle-9 Art Director ruled a ten-glyph floor on truncation: below it a label
is not shortened at all, it takes its chances on being placed whole and is
hidden and listed if it cannot be. The reason given was specific and correct —
sixteen of artifact 02's thirty-six truncations kept six characters or fewer,
and **"Rice…" (Rice vinegar base) was indistinguishable from a prefix of "Rice
koji: polish to 70 %" drawn in the same frame**. A stub that could be either of
two thoughts on screen costs a full name's ink and collision budget and returns
nothing.

The cycle-11 Art Director, ruling on the same category, asks for the opposite:
an always-on compressed identity for suppressed nodes, because **about 78 % of
the nodes on a whole-brain frame carry no text at all** and an overview of
coloured dots plus a sidebar is not what the detail standard asks for. That
critic called the district-grouped index "an honest and well-made mitigation"
and still scored the category at its minimum on this gap.

**This is the Art Director's own call, revisited by the Art Director on a
different proposal — not the builder reopening a settled decision, and not the
floor being dropped.** It is recorded here rather than applied quietly because
the two rulings read as contradictory and a reader is owed the reconciliation.

**Decision.** The ten-glyph floor stands for *shortening a name*. Below it there
is one further tier, tried last and only where the alternative is no text at
all: a **compressed identity**, admissible if and only if it is **unique in the
frame**. Its length is not a constant — it is solved per frame as the shortest
prefix between three and eight characters that no other text on screen shares.
Two thoughts beginning "Rice" therefore get "Rice v…" and "Rice k…", never
"Rice…" twice. The exact failure the floor was raised against is excluded by
construction rather than by a promise, and the ellipsis still marks it as
incomplete.

A compressed identity is **counted and reported apart from a shortened name**,
because they are different omissions: a shortened name has lost its tail, a
compressed one was never said. The badge states all three numbers, and the
recovery column still carries the full text of everything the frame is not
saying.

Measured on the 150-node map at canvas framing the tier takes the drawn count
from **34 to 69** and the hidden count from **109 to 81**.

**And which names survive is now a structural question.** Within a priority tier
the arbiter settled ties on camera depth. Degree is folded in as a fraction of a
tier — capped so it can never promote a plain node past a search hit — so a
thought that joins six others is named ahead of a leaf. That was the second half
of the same critic's correction.

### Amendment, cycle 13 — two critics ruled opposite ways on the stub, and the reconciliation is the same one that admitted it

The cycle-11 Art Director asked for the compressed identity and scored the
category at its minimum without it. The cycle-12 Audience, looking at the result,
judged three-character stubs — "Bed…", "Amy…", "Fil…" — to be *"ink without a
thought"*, noted that the total of unreadable labels was essentially unchanged
from the cycle before, and asked for a minimum useful truncation: at least one
whole word, or drop the label to the list.

Both are right about what they looked at, and neither is overruled here. The
Art Director owns this call under §04 and the tier stays; the Audience's
substance is answered by making the stub carry more:

**Decision.** A compressed identity carries a **whole word wherever one fits**.
The length is the longer of the uniqueness floor and the first word boundary at
or below `STUB_MAX + 4`. Uniqueness still governs the floor, so nothing becomes
ambiguous by growing. Measured on the 150-node map at canvas framing: **27
stubs instead of 35, every one of them carrying a word** — "Bed depth…",
"Kombucha…", "Solera…", "Koji on…" — and 65 names drawn against 34 before the
tier existed. The badge stops calling them first letters, because they are not
that any more.

What is conceded to the Audience and not fixed: at whole-map framing on a
150-node map the count of thoughts a frame cannot name is still 85 of 150. The
tier moved a large number of them from *unnamed* to *identified*, and it did not
move the wall.

## D-013 · Node hues render at one reference lightness  · cycle 3 · SETTLED

D-006 declares a luminance ladder — plain 0.50, connected 0.72, unplaced 0.86,
search hit 0.95, selected 1.00 — and says the states are dual-coded, luminance
*and* ring. The ladder was applied as a raw multiplier on the authored hue, and
the authored hues are not lightness-matched: bone (`#E8DCC8`) is about 1.6× as
luminous as magenta (`#E85C9A`) before any state is applied.

Measured on the rendered frame in cycle 3: **unplaced bone 1.00 (clipping to
white), search hit 0.74, selected 0.71, connected 0.67, plain bone 0.60, plain
amber 0.50.** The holding cluster was the brightest thing on screen, brighter
than the selection, and two *plain* nodes differed by more than the gap between
connected and selected. The declared ladder was monotonic only inside a single
hue family; across the map the states were carried by ring geometry alone.

**Decision.** A node is drawn at a shared reference lightness — the least
luminous hue in the palette, so no hue has to be brightened past what it can
carry — and the state ladder is applied on top of that. Hue and chroma are
untouched, `PALETTE` is unchanged, and the editor swatches still show the
authored colours. Only the lightness a node is *drawn* at is set by its state.

Measured after the change: **selected 0.526, search hit 0.497, unplaced
0.454–0.461, connected 0.376, plain 0.260–0.265.** Monotonic for every hue, and
nothing in holding can outshine the selection.

**What it costs, stated plainly.** The whole world is dimmer: the top of the
ladder sits at 0.53 where it used to reach 0.74, because the ladder can only be
monotonic across this palette if every hue renders at the dimmest one's level.
The core's hot centre was broadened to recover some of the loss. Against a
ground of 0.07 the selection is still a 7.5× step, and the alternative —
brightening the low-luminance hues by mixing them toward white — would have
taken chroma away from the recency channel D-007 depends on.

**Not a reopening of D-005 or D-006.** The palette is the same eight hues, and
the ladder is the same five declared values. This is how they are applied.

## D-014 · Depth attenuates luminance only  · cycle 3 · SETTLED

Distance used to fade a node's **alpha**, blending it toward the ground colour,
which pulled its hue toward the ground's and compressed saturation by about as
much as the recency channel spans. Age and distance therefore landed in the same
numeric range, and the Art Director's measurement found the frontier only 18 %
more saturated than a settled district — indistinguishable from being nearer.

**Decision.** Distance scales the node's **RGB** and leaves alpha at coverage.
Uniform RGB scaling leaves `(max−min)/max` exactly where it was, so the entire
declared chroma range stays reserved for recency (D-007) and depth reads purely
as lightness. The fade floor was softened from 0.30 to 0.46 to match the change
of channel.


---

## When each decision first became visible in the evidence

The Auditor found D-013 quoting measurements that cycle 3's own artifact 07 does
not show — because a decision recorded in the cycle it was *taken* is first
visible in the cycle whose evidence is captured *after* it. Both are stated here
so a reader diffing the record against a frame is never misled.

| Decision | Decided in | First visible in | Where to check it |
|---|---|---|---|
| D-004 organic-bioluminescent | cycle 1 | cycle 1 | every artifact |
| D-005 palette | cycle 0 | cycle 1 | 02, 07 |
| D-006 five states | cycle 0 | cycle 1 | 07 |
| D-007 recency = chroma | cycle 0 | cycle 1 (span widened cycle 2, cycle 5) | 02 |
| D-010 two-finger V | cycle 0 | cycle 1 | 17 |
| D-011 frame-accurate video | cycle 0 | cycle 1 | 16–20 |
| D-012 label re-anchoring | cycle 2 | cycle 3 | 02, 04, 06 |
| D-013 one reference lightness | cycle 3 | **cycle 4** (rebuilt in OKLab cycle 4, visible cycle 5) | 06, 07, 10 |
| D-014 depth attenuates luminance | cycle 3 | **cycle 4** | 10, 18 |
| D-015 rung spacing and gamut mapping | cycle 4 | **cycle 5** | 07 |

The measurements quoted inside a decision name the artifact they were taken
from. Where a decision was revised after its first capture, both the original
and the revision are stated in that decision's own entry rather than the
original being edited away.

## D-015 · The rungs are absolute, and gamut-mapped in OKLab  · cycle 4 · SETTLED

D-013 fixed the ladder's *ordering* by drawing every hue at one reference
lightness, and picked the dimmest hue's level so nothing would clip. Measured in
cycle 4 that cost more than it bought: the world lost about a third of its
light, on-screen chroma fell about a quarter, and the top two rungs came out
**0.014 apart — less than the 0.033 residual variance between two nodes in the
same state.** Above the third rung the ladder was being carried by ring geometry
alone, which is the failure D-006 exists to prevent.

**Decision.** Each state has an **absolute relative-luminance rung**, spaced
across the band that is actually available rather than as multipliers of a
reference:

| | plain | connected | unplaced | search hit | selected |
|---|---:|---:|---:|---:|---:|
| rung | 0.30 | 0.44 | 0.57 | 0.69 | 0.80 |
| measured on 07 (core centre) | 0.346 | 0.507 | 0.669 | 0.795 | 0.897 |

Every step is at least 0.10, and the variance *within* a rung is 0.002 — down
from 0.033. A hue is taken to its rung in **OKLab**: the hue angle is fixed, the
lightness lands exactly, and chroma is reduced only as far as the sRGB gamut
requires there. Plain amber measures saturation 0.96 where the previous
RGB-space normalisation left it at 0.35.

**What it still costs.** A hue cannot be both very light and fully saturated, so
the top rungs carry less chroma than the bottom ones — coral keeps about 70 % of
its chroma at *selected* and all of it at *plain*. That is a property of colour,
not a choice, and the selected state is additionally carried by its heavy ring.

**Not a reopening of D-005 or D-006.** The palette is the same eight hues; the
states are the same five, in the same order, still dual-coded with ring
geometry. What changed is the numbers the lightness channel uses, so that the
channel does the job D-006 gave it.

### Amendment, cycle 5 — the rungs were lowered to buy chroma back

The table above is what cycle 4 decided. In cycle 5 the whole ladder was shifted
down by 0.04–0.10 so the top rungs could keep more of their hue: at 0.80 the
lightest rung had almost no chroma left to spend, which is the cost D-015 names
in the paragraph above, and the critics were reading *selected* as white. The
rungs in force are:

| | plain | connected | unplaced | search hit | selected |
|---|---:|---:|---:|---:|---:|
| rung, cycle 5 onward | 0.26 | 0.37 | 0.48 | 0.59 | 0.70 |
| measured on 07 (core centre, cycle 8) | 0.2975 | 0.4247 | 0.5628 | 0.6769 | 0.8025 |

Every step is at least 0.114 and the widest scatter *within* a rung is 0.002, so
the property D-015 was made to guarantee is unchanged; only the numbers moved.
From cycle 7 these are not restated from the source — artifact 07's driver reads
them off the frame it just wrote, at each node's own core centre, and the
capture fails if the ladder stops climbing or a step stops clearing the
within-rung scatter.

### Correction, cycle 8 — "relative luminance" now means what it says

The function the whole ladder is solved against was **Rec.601 luma**
(0.299/0.587/0.114) while every reference to it, here and in the report, called
the result *relative luminance*. The renderer writes linear values into the
framebuffer, so a reader sampling the shipped frame with the standard
definition — Rec.709, 0.2126/0.7152/0.0722 — measured something else: two nodes
equalised onto one rung came out **0.4107 and 0.4713**, a spread of 0.060
against a reported 0.0002, with the plain and connected rungs inverted. The
ladder was doing its job; the yardstick was mis-named, and a number nobody else
can reproduce is not evidence.

`relLum`, the shader's desaturation mix and the harness's sampler are all
Rec.709 now, so the palette is solved in the same space a reader measures in.
The rungs are unchanged; the RGB each hue lands on shifted, since a green needs
less signal and a red more to reach the same true luminance. Verified by an
independent sampler over the shipped artifact 07: the two *plain* cores measure
0.2975 and 0.2984, the two *connected* 0.4242 and 0.4249, the four *unplaced*
0.5615–0.5637, *selected* 0.8003. Recorded as F-029.

**This amendment is a correction of the record, not a new decision.** The change
happened in cycle 5's code and this table was not updated with it, so for two
cycles DIRECTION.md stated rungs the app did not use. Recorded as F-023.

### Correction, cycle 9 — the sentence above is still wrong, and this is why

*"The palette is solved in the same space a reader measures in."* It is not, and
the cycle-8 Art Director proved it by doing exactly what that sentence invites:
sampling artifact 07 with the standard definition. It got **0.1594 and 0.1817**
for the two *connected* cores against the 0.4242 and 0.4249 recorded above.

The cycle-8 correction changed the coefficients from Rec.601 to Rec.709 and
**never added the sRGB-to-linear transfer step**. Relative luminance is
*linearise, then weight*. Weighting encoded values is **luma**. So the fix for a
mis-named yardstick installed a second mis-named yardstick, and the failure has
the same shape both times: a number the builder can produce and a reader cannot.

Two changes, and deliberately neither of them is to the palette:

1. **The function is named `luma709`**, because that is what it computes. The
   ladder is solved in it and stays solved in it — this is not a reopening of
   D-013, D-015 or D-016, and the Art Director ruled explicitly that the palette
   should not change.
2. **True `relLuminance` is reported beside it.** Artifact 07 now carries the
   ladder in *both* yardsticks and its capture is gated on both. It had been
   gated only on the space the palette is solved in, which is precisely why the
   gate could not fail for this reason.

Measured off the shipped frame in true relative luminance: plain **0.0759**,
connected **0.1683**, unplaced **0.2781**, search hit **0.4195**, selected
**0.6233** — monotonic, smallest step 0.0924 against a within-rung spread of
0.022, so the bands stay disjoint. **The ladder was sound both times.** Only the
word was wrong, twice. Recorded as F-032.

---

## D-016 · Depth may darken a node only inside its own rung’s band  · cycle 7 · SETTLED

*Decided in cycle 7. First visible in cycle 7's artifacts 02, 04, 07, 12.*

**Problem.** D-014 gave distance the luminance channel and reserved chroma for
recency. It did not say how much luminance distance could spend, and the answer
was "all of it": one floor of 0.55 applied to every state. The two things then
had no arbitration between them. Measured on cycle 6's whole-map framing, a
*connected* teal came out at 0.223 and a *plain* violet at 0.146 — a spread of
0.077, where the ladder in D-013 is built on steps of 0.11. A near plain node
and a far connected node were within a hair of each other, and at a slightly
greater distance the pair would have crossed. The state channel was being read
off a value that distance had already spent.

**Decision.** Distance attenuates a node's luminance by at most **0.55 of the
gap down to the rung below its own state** — never toward black, and never past
its own band:

| | plain | connected | unplaced | search hit | selected |
|---|---:|---:|---:|---:|---:|
| rung (D-015, as amended in cycle 5) | 0.26 | 0.37 | 0.48 | 0.59 | 0.70 |
| floor | 0.172 | 0.309 | 0.419 | 0.529 | 0.639 |
| fade ratio | 0.66 | 0.84 | 0.87 | 0.90 | 0.91 |

The bands are **disjoint**. Whatever two nodes' distances are, a connected node
is lighter than every plain node, an unplaced node lighter than every connected
one, and so on up the ladder. The worst-case separation between adjacent states
falls from "they can cross" to 0.0495.

**What it costs.** Depth reads less strongly on the bright states — *selected*
can only darken by 9 % across the whole depth range, against 34 % for *plain*.
Distance is still carried by perspective and by marker size, which are
untouched; what it no longer does is borrow from the state ladder.

**Not a reopening of D-014.** Distance still attenuates luminance and only
luminance; it still does not touch alpha; chroma is still reserved for recency.
What is added is the bound.
