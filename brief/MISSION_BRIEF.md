This is a mission brief. Read all of it, then begin. Follow it exactly, including the state block on every reply.

# Master Mind: an idea mapping tool…

Master Mind is an idea-mapping tool that visualizes, organizes, and connects ideas smartly in a 3D space, like the neurons of a brain. It is built for Android and Windows simultaneously, with maps synced to the cloud across devices. Its landmark features are AR projection with gyroscope and touch control on Android, and mind expansion mode manipulated by webcam hand tracking on Windows.

`task-id: master-mind-an-idea-mapping-tool` · 15+ review cycles · 3 critics · 20 final artifacts · exit at 90/100

---

## 00 / RUNTIME

**COMPUTE** · The Anthropic cloud machine the agent itself runs on — whatever it finds available, most likely a headless Linux VM with no physical Android device and no webcam. The first action of the build is therefore a hardware census: verify graphics/GPU capability, whether an Android emulator can run (KVM or software rendering), whether a virtual webcam can be created from pre-recorded hand-video clips, and whether the Windows build can execute locally (Wine or equivalent). Evidence is captured through whatever means exist; a hardware-dependent artifact that cannot be captured as defined is recorded as a finding in report.md with the nearest honest substitute — its ordinal and definition never change.

**PRIMARY TOOL** · Unity 2022 LTS with C#, one project exporting both Windows standalone and Android. Sync via Firebase's managed free tier, no self-hosted services. Hand tracking via MediaPipe. AR projection via AR Foundation/ARCore, validated on the best AR surface this environment offers.

**HARNESS** · A single agent working strictly sequentially: no subagents, no parallelism, since the build pipelines and any virtualized devices are single shared resources. Every review cycle (~every 4 hours) it must recapture the full 20-artifact evidence set, diff it against the previous cycle's set, append findings, autonomous decisions, and any capture failures to a running report.md, and only then continue the build order. A failed capture is a finding, never a silent workaround or a re-scope.

**STARTING ASSETS** · Nothing pre-made. Everything is generated from scratch.

**BUDGET** · Unlimited tokens: the run is bounded by completion, not by a number. The loop — build, recapture evidence, diff, report — continues until every step in the build order is complete and the entire 20-artifact evidence set captures successfully.

**WALL CLOCK** · No fixed end time. The run proceeds in review cycles of roughly 4 hours, repeated until finished, where finished means: all steps complete, all 20 artifacts captured as defined or written up as findings, and the final report.md written.

**AUTONOMY** · Fully autonomous, zero human intervention until the quality gates are met.


You have **no tool access and no filesystem** in this conversation. You are producing the work as text, turn by turn, for a human who is relaying your output by hand. Never claim to have run a command, written a file, or inspected an artifact. When the mission needs work you cannot perform here, produce the exact instructions or content the human should apply, and say plainly that it is unexecuted.

---

## 01 / TASK

**SCALE** · A lean personal tool: unlimited maps, text nodes with colors and labels, search, and settings — the bones of a real tool. Both landmark modes exist and work, but are functional rather than the polish focus. The core loop of capturing, connecting, organizing, and refinding thoughts must be useful and streamlined for one coherent designed workflow, not a pile of separate features.

**JUDGED BY** · A technical audience the builder will demo to — peers, a portfolio, a post online. The standard: both landmark features work live and feel new, and the mapping-and-organization core underneath is genuinely usable, not staged.


**Defining story**

Space is the memory: you remember where a thought was, and the phone's AR view and the Windows big screen exist to put you back inside that place. Node positions are sacred and consistent across devices, finding and refinding a thought matters more than creating new ones, and layouts are never auto-tidied — mapping and spatial organization are themselves what make the tool usable.

**Avoid these interpretations and shortcuts**
- Anything that moves, drifts, or wobbles a placed node without an explicit user act — the organism look is welcome, its motion is not; positions are sacred and stillness is the map's default state.
- Decorative glow and chrome: HUD frames, wireframe grid floors, lens flares, ambient neon that encodes no state — glow is reserved for meaning (unplaced, selected, connected-to-selection, search hit), and any pixel glowing without meaning steals contrast from the states that need it.
- Celebratory effect churn: particle bursts on connect, bounce on every action, placement fireworks — motion and light inform the user, they never react for applause.
- Uniform luminance: every node glowing at the same intensity so the five states stop reading at a glance; plain nodes must sit visibly below unplaced/selected/search-hit nodes in brightness, and the background below everything.
- Fog, grids, or ground planes as depth cues borrowed from sci-fi stages — depth comes from position, size, filament perspective, and distance-fade into dark.

---

## 02 / PROTOCOL

Perform the actual work. Do not answer with only a plan, a tutorial, or sample code.

The user may be unavailable. Make conservative, reversible assumptions, record them, and continue. Do not pause for non-blocking choices, optional downloads, or missing conveniences. Stop only for credentials, a potentially destructive external action, or an ambiguity that cannot be resolved without materially changing the authorised project.

Continue until the explicit quality gates in this brief are satisfied — not merely until the first working result exists.

**Before committing to the implementation**

Inspect the working environment, the available tools and their versions, and any existing assets. Optional dependencies must not become blockers; provide a native alternative instead.

**Maintain these working documents throughout**

```
master-mind/
  DIRECTION.md      # the visual or design language, and decisions made
  PLAN.md           # dimensions, structure, coverage, required parts
  INVENTORY.md      # component families, sources, status, substitutions
  TASK_STATE.md     # completed work, worst problems, next action, score
  checkpoints/      # a recoverable milestone after every stable stage
```

**If context is compacted or work resumes later**

Re-read this brief plus `DIRECTION.md` and `TASK_STATE.md`, open the latest valid checkpoint, and continue from the recorded next action rather than rebuilding blindly. Keep `TASK_STATE.md` carrying the last successful commands, the current rubric score, and known failures, so that any future session can resume mid-flight.

**Progress heartbeat — required on every reply**

End every response with this block, fenced exactly as shown. It is read by tooling; keep it short, keep the keys, and never omit it.

```mpstate
v=1
task=master-mind-an-idea-mapping-tool
phase=<bootstrap|build|review|validation|done>
step=<current step, a few words>
cycle=<review cycle number, 0 before review begins>
score=<current rubric score out of 100, or 0>
next=<the single next action>
blocked=<none, or what is blocking>
ask=<none, or one question for the user>
```

Because this conversation may be cut off by a usage limit at any point, the block above is the only thing that survives. Treat it as the handover note to your own successor.

---

## 03 / BUILD ORDER

Work in this order. Keep the whole thing viewable and evaluable after every stage — never leave it in a state that cannot be inspected.

**STEP 01 — Environment census + pipelines**

Run the hardware census (graphics, emulator viability, virtual webcam, Windows execution path, network). Wire CLI builds for both Windows and Android, get the Android build launching on the best available surface, create the Firebase project. Then the thin AR probe: render one node, rotate the camera, confirm whether the AR path exists in this environment — and record the finding either way.

**STEP 02 — Shared model + holding cluster + seed maps**

Build the shared map model (nodes, positions, text, color, label, links, holding state) on Firebase, with the holding cluster as part of the model, syncing like everything else. Seed both maps: the 100+ node lived-in map with districts and cross-links, and the small mid-workflow map with nodes waiting in holding. Artifacts 01, 06, and 07 are first capturable here.

**STEP 03 — Canvas editing**

Build the everyday 3D canvas: one-action quick-add into holding, drag-to-place, move, connect, edit text/color/label, and the five node visual states. Never auto-tidy. Artifacts 02, 08, and 09 are first capturable here.

**STEP 04 — Sync twin proof**

Enable full cloud sync of the model across both surfaces: property-level last-writer-wins, never drop a node, never resolve by re-layout. Capture the twin composite pair (artifacts 11, 12) on the two surfaces this environment provides, before and after an edit made on one side.

**STEP 05 — AR lens (Android)**

Build AR projection with gyroscopic orientation and the touch gesture vocabulary: look-around, inspect, search fly-to, quick-add into holding. If true AR cannot run in this environment, build the lens fully and prove it through the nearest honest surface, such as emulator-simulated camera and gyro, recording the substitution in report.md.

**STEP 06 — Hand tracking + mind expansion**

MediaPipe webcam hand tracking (toggleable, with live status) driving mind expansion mode: the 4-pose vocabulary with a mouse equivalent for every operation, whole-brain view legible at 100+ nodes, cluster moves preserving internal arrangement. If no physical webcam exists, feed pre-recorded hand clips through a virtual webcam and record that substitution in report.md. Artifacts 04 and 05 are first capturable here.

**STEP 07 — Search fly-to in every lens**

Search available from every surface, flying the view to the node in its actual place with the search-hit state lit. Artifacts 10 and 18 are first capturable here.

**STEP 08 — Finder (JSON prompt harness)**

Prompt export with the map's JSON including positions, paste-back parse tolerant of messy real-world AI output, review UI in mind expansion with the three suggestion types staged one by one, apply-on-accept, no-trace-on-reject. Artifacts 13, 14, and 20 are first capturable here.

**STEP 09 — Polish + final evidence**

Performance pass at 100+ nodes, a compliance pass against the Quality section (avoid-list, palette, materials, atmosphere, detail, storytelling), then the final full evidence recapture of all 20 artifacts and the closing report.md summarizing every deviation taken during the run.


---

## 04 / REVIEW LOOP

Use the complete evidence set in section 08 as the fixed judgeset. Perform at least **15 complete cycles** of:

build or change → capture the fixed evidence set → inspect the actual captured artifacts → diagnose → fix → re-capture the identical set

Criticism must be based on the captured evidence — not on code, the object tree, descriptions, or the builder's own summary.

For each finding, record the artifact it came from, the severity, the affected subsystem, the likely root cause, and an actionable correction. Repair systemic issues affecting several artifacts before isolated polish.

Use 3 specialist critics. Each must be a **fresh-context subagent** that receives only the mission goal, the captured evidence, and the rubric — never the build history.

- **The Audience** — Core workflow and Landmarks live (50 points). The enthusiast posture: does the capture-place-refind loop actually work and read as streamlined (artifacts 06, 08, 09, 10, 19), and do both landmark modes work live — the 5-gesture touch vocabulary and AR lens (artifacts 03, 16), the 4-pose hand vocabulary and mind expansion with mouse equivalents (artifacts 04, 05, 17)? It judges as the technical demo audience would: what the frames show, nothing promised in prose.
- **The Auditor** — One model and sacred positions, and Evidence and report integrity (35 points, both hard gates). The skeptic posture: the twin composites show identical positions before and after cross-surface edits with no node dropped (artifacts 11, 12); no auto-tidy appears anywhere across the set; every capture is honest, substitutions are written up rather than staged, and report.md records decisions and failures truthfully. It alone diffs the current evidence set against the previous cycle's and declares whether the cycle is regression-free for the convergence rule.
- **The Art Director** — Quality compliance and Finder round-trip (15 points). The arbiter posture: the avoid-list is honored, palette, materials, and atmosphere hold, the five node states are legible at a glance (artifact 07), text survives whole-brain zoom to reading distance (artifacts 02, 04, 10), the seeds read lived-in rather than staged — and it owns the delegated 'which looks better' call from the Quality section, so the organic-versus-holographic reading is decided by one designated judge instead of drifting. It also scores the finder harness round-trip (artifacts 13, 14, 20).

**After every cycle**

After every repair cycle, compare each artifact against the preceding version and label it improved, unchanged, or regressed. Fix or roll back regressions before continuing.

If the score is below the exit threshold and improves by less than one point across two consecutive complete cycles, perform a structural pass instead of adding more small detail.

---

## 05 / RUBRIC

Score the work out of 100 against these weighted categories.

| # | Category | Weight | Minimum | Judged on |
|---|---|---:|---:|---|
| 01 | Core workflow | 25 | 20 | The capture-place-refind loop is coherent and streamlined in every lens: one-action quick-add lands nodes in the holding cluster unplaced (artifacts 06, 19); placement is a deliberate drag to a permanent spot where the node stays (artifact 08); search flies to the node in its actual place and ends crisp enough to read (artifact 10); connect and edit work on the canvas (artifact 09). |
| 02 | Landmarks live | 25 | 20 | Both landmark modes are operable and demonstrated live: AR projection with gyroscopic orientation and the 5-gesture touch vocabulary (artifacts 03, 16), and mind expansion driven by the 4-pose webcam hand vocabulary with mouse equivalents for every operation (artifacts 04, 05, 17). Each gesture maps to a different operation. A lens proven through a recorded substitution is scored on the substitution's honesty and the lens's functionality, never penalized into unreachability by the environment. |
| 03 | One model and sacred positions | 20 | 17 | One live map state renders through all three lenses and syncs across surfaces: the twin composite pair shows identical positions before and after a cross-surface edit with no node dropped (artifacts 11, 12); no feature ever auto-tidies, drifts, or rearranges placed nodes — moving a node is always an explicit user act. Verified continuously by regression on artifacts 02, 04, 11, and 12 across cycles. |
| 04 | Evidence and report integrity | 15 | 13 | All 20 artifacts are recaptured as defined each cycle, and any capture that cannot be made is written up in report.md as a finding with the nearest honest substitute — never silently re-scoped or staged to misrepresent the build. report.md records autonomous decisions, deviations, and failures every cycle. Scored by diffing the current evidence set against the previous cycle's and auditing report.md for honesty. |
| 05 | Quality compliance | 10 | 8 | The build honors the Quality section: nothing on the avoid-list (no auto-motion of nodes, no decorative glow or chrome, no celebratory churn, no uniform luminance, no fog or grid depth cues); palette, materials, and atmosphere as specified; the five node states legible at a glance and consistent across lenses (artifact 07); text crisp from whole-brain zoom to reading distance (artifacts 02, 04, 10); seeded maps reading as lived-in with meaningful geography, not staged (artifacts 01, 02). |
| 06 | Finder round-trip | 5 | 4 | The JSON prompt harness round-trip works live and safely: paste-ready prompt export containing the map's JSON including positions (artifact 13), tolerant parse of messy real-world AI replies, three suggestion types staged one by one in mind expansion, applied only on explicit acceptance with no trace on rejection (artifacts 14, 20). |
| | **Total** | **100** | | |

**Exit threshold — 90 / 100.** Do not declare the mission complete below it.

Additional exit conditions, all of which must hold:
- Every category at or above its stated minimum, where one is given.
- Complete coverage of every required part and every artifact in the evidence set.
- No regression across the final two review cycles.

---

## 06 / VALIDATION

Before declaring completion, prove the result survives being reopened from nothing.

Clean container from a base OS image: no toolchain, no Unity, no SDKs, no cached credentials, no preset environment variables. The only input is the delivered master-mind/ directory. src/bootstrap.sh installs pinned toolchain versions, builds both targets, launches them, loads both committed seed fixtures, and recaptures the designated cold-start artifact plus 02, 06 and 07 into evidence/coldstart/. Verified by comparing node positions in the fresh capture against the committed fixture hash, not by eye. Any manual step, interactive prompt, unset variable or out-of-directory secret is a cold-start failure and is recorded as one rather than patched around.

Confirm each of the following:
- All 20 evidence artifacts captured from the final build as defined, or each uncapturable one recorded as a finding with its honest substitute named.
- The exit rule satisfied — total ≥ 90, both hard gates met, two consecutive zero-regression cycles — or the 15-cycle cap fired with a final report.md listing every unmet gate, soft minimum, and remaining gap.
- Cold-start validation performed as the run's closing act, with the fresh-build hero capture present in evidence/.
- report.md closed with a complete deviations and rebuttals summary covering the whole run.
- No avoid-list violation visible anywhere in the final evidence set.
- Critics run as fresh-context sessions dispatched strictly sequentially — resolving §00's no-subagent rule and §04's fresh-context rule without dropping either.
- Each critic receives: mission goal, rubric, current evidence set, previous cycle's evidence set, and the DIRECTION.md decision record. Nothing else.
- Every one of the 20 artifacts has a written recipe in docs/capture/<id>.md; a cycle is complete only when each was captured by running its own recipe.
- Evidence set extended so every required part and family floor is provable: all three suggestion types in one frame, a mouse-only operation clip, a parse-failure frame, a concurrent-conflict twin pair, a maps-home create/rename/delete clip, and a lens tag on artifacts 08, 10, 18 and 19.
- 'Hard gate' is defined: cats 03 and 04 block exit at any score; the other four minima block only a declared-complete exit.
- Regression has a numeric tolerance: a per-artifact perceptual-diff threshold is recorded, and node positions are compared as model values rather than pixels.
- Node recency is either a modelled property with a declared visual channel that does not reuse any of the five state signatures, or the 'age varies visibly' requirement is struck.
- Cycles interleave with the build order, and an artifact not yet reachable by build order is recorded as 'not yet buildable' — distinct from an environment substitution and not counted against cat 04.
- DIRECTION.md, PLAN.md, INVENTORY.md, TASK_STATE.md and demo-script.md each carry a rubric line or an artifact, or are removed from the brief.
- The final report states one of complete / incomplete-honest / failed, and lists which of the 20 artifacts were captured as defined, which were substituted, and which were never reached.

The final response must list actual project and output paths, the evidence-backed rubric result, and any remaining non-critical limitations honestly.

---

## 07 / BRIEF

**Required parts**

Every one of the following must exist with real depth, believable access, and enough substance to explain its purpose.

**01 · Map canvas** — The everyday 3D editing surface on both platforms, where the capture-place-refind loop lives.
- One-action quick-add creates a text node that lands in the holding cluster in the unplaced state.
- Nodes are editable: text, color, and label.
- Any two nodes can be connected with a link.
- Nodes are placed by dragging them out of holding to a permanent spot; placed nodes can be moved and stay exactly where dropped.
- Placed nodes are never auto-tidied, re-laid-out, or rearranged by any feature.

**02 · Holding cluster** — The visible staging zone inside the 3D space where captured thoughts wait to be deliberately placed.
- The holding cluster is part of the shared map model, not local UI, so its contents sync like everything else.
- Unplaced nodes render in the unplaced visual state.
- It is rendered and navigable in the canvas and in mind expansion mode, and visible in AR.
- The count of waiting nodes is glanceable, so capture never silently buries a thought.

**03 · AR projection (Android)** — Puts the user back inside the map's place: a live, view-first lens using gyroscope and touch for the ultimate viewing and refinding experience.
- Renders the current live map state with positions identical to every other lens.
- Gyroscopic control orients the view; touch gestures operate on the map per the gesture vocabulary floor.
- Supports at minimum look-around, selecting and inspecting a node, search fly-to, and quick-add capture into holding.
- Full editing and placement are not required in AR; it is a view-and-refind lens.

**04 · Mind expansion mode (Windows)** — The whole-brain overview: the entire map spreads across the screen so the user regains spatial memory of everything at once and organizes at map scale.
- The entire current map renders at once and stays legible at 100+ nodes; the seeded large map is the acceptance test.
- Hands grab, spread, and gather whole clusters; moving a cluster moves its member nodes together and preserves their internal arrangement.
- Placement of unplaced nodes out of the holding cluster is available here.
- It is the home surface for the connection finder's staged suggestions.

**05 · Hand tracking input (Windows)** — Webcam-based hand control for mind expansion mode, with no special hardware.
- Works with a standard webcam and detects hand poses without calibration hardware.
- At least 4 distinct hand gestures, each mapped to a different operation.
- Every hand-gesture operation has a full mouse equivalent, so mind expansion stays fully operable if tracking misbehaves during a live demo.
- Hand tracking can be toggled in settings.

**06 · Cloud sync** — One live map state shared across Android, Windows, and the cloud.
- All maps sync: positions, text, colors, labels, connections, and holding state.
- A change made in any lens becomes the map's truth on every surface and device.
- Conflict resolution never drops a node and never resolves by re-layout; at most property-level last-writer-wins.
- Account sign-in and sync status are visible in settings.

**07 · Search and refind** — Finding a thought means being taken to where it lives.
- Search is available in every lens and searches node text and labels.
- A result flies the view to the node in its actual place rather than dead-ending in a list, and the hit shows the search-hit visual state.
- Search works against the shared model on every platform.

**08 · Smart connection finder and organizer (JSON prompt harness)** — Suggests connections, groupings, and placements as reviewable suggestions the user applies deliberately.
- The app generates a paste-ready prompt containing the map's JSON, including node positions, plus instructions.
- The user pastes it into any AI chat, pastes the reply back, and the app parses it into staged suggestions.
- Suggestions are presented one by one to accept or reject; acceptance writes into the shared model exactly like a manual edit, and rejection leaves no trace.
- Nothing is ever auto-applied; the finder never modifies the map directly.
- The parser tolerates messy real-world AI output; a parse failure shows a visible error and changes nothing.
- Prompt generation works for the current map from either platform, and the suggestion review UI lives primarily in mind expansion mode.

**09 · Maps home** — Create, open, and manage unlimited maps.
- Lists maps with node counts and last-opened time.
- Create, rename, and delete maps; opening a map leads into all lenses on that platform.

**10 · Settings** — Minimal controls that keep the tool honest and demoable.
- Hand tracking on/off toggle with live tracking status.
- Account sign-in and sync status.
- An in-app gesture reference listing every touch and hand gesture and its operation, keeping both vocabularies inspectable.

No required part may exist only as a label. A part may be compact, but its interior, its boundaries, and its relationship to the rest must be legible in the final evidence.

**Relationships that must hold**
- One model, three lenses: the canvas, AR, and mind expansion all render one live shared map state, and a change made in any lens is immediately the map's truth on every surface and device.
- Node positions are sacred: positions live in the synced model, are identical on every device, and no feature — including the finder and cluster moves — ever auto-tidies or rearranges placed nodes; moving a node is always an explicit user act.
- Capture fast, place deliberately: every quick-add lands in the holding cluster in the unplaced state, and a node becomes placed only by an explicit user drag into a permanent spot.
- Search flies: from any surface, a search hit flies the view to the node where it actually is.
- Suggestions are inert: finder suggestions stage for review, apply only on explicit acceptance, and rejection leaves no trace.
- Parse failures are safe: malformed AI replies produce a visible error and zero map changes.
- Seeded content exercises the whole: the 100+ node map contains clusters, cross-links, and unplaced nodes waiting in holding, and doubles as the legibility test for mind expansion; the small map shows the capture-then-place workflow mid-flight.
- Every gesture operation has a mouse or touch equivalent on its platform, so the live demo never depends on tracking or any single input mode succeeding.

**Component families**

Build coherent reusable families rather than unrelated one-offs. Repetition may use instances, but silhouette, orientation, state, and placement must vary enough to avoid copy-paste regularity.

- **Android touch gesture vocabulary** — Distinct touch gestures available in the canvas and AR on Android. _At least 5._
  Variation: Each gesture maps to a different operation, and together they span capture (quick-add), placement (drag/place), connection, selection, and navigation — no two gestures share an operation.
- **Windows hand gesture vocabulary** — Distinct webcam-detected hand poses that operate mind expansion mode. _At least 4._
  Variation: Each maps to a different map-scale operation (grab a cluster, spread the map, gather, select/confirm), and the poses must be physically distinct enough for a webcam to tell apart reliably.
- **Node visual states** — At-a-glance visual states a node can be in, consistent across all three lenses. _At least 5._
  Variation: Unplaced/in-holding, selected, connected-to-selection, search hit, and plain — mutually distinguishable at a glance and meaningful in canvas, AR, and mind expansion alike.
- **Suggestion types** — Kinds of staged suggestions the connection finder/organizer can produce. _At least 3._
  Variation: Connections between existing nodes, proposed groupings of related nodes, and proposed placements for unplaced nodes — each acts on a different aspect of the map and is individually accept-or-rejectable.
- **Seeded maps** — Pre-built maps shipped with the app so search, refind, and both landmarks are demoable on first launch. _At least 2._
  Variation: One map with 100+ nodes on a real substantive topic the agent writes itself, structured with clusters and cross-links; one small personal-style map with a few unplaced nodes sitting in holding, captured mid-workflow.

**Palette**
- Near-black warm dark background — deep charcoal-brown, a place rather than a void, not blue-purple cyberpunk
- Self-luminous nodes in the user's chosen colors as the only saturated elements in the world
- Links as faint pale filaments, brightening only when they carry a selected or search-hit state
- Distance fades toward the dark rather than toward fog or a grid
- A distinct luminous signature per state — unplaced, selected, connected-to-selection, search hit — with plain nodes deliberately quiet

**Materials and surfaces**
- Nodes are self-luminous; no lighting rig, no cast shadows required for the map itself
- Text is a first-class material: high-contrast, scale-proof, sharp from whole-brain zoom to reading distance — the through-line ends with someone reading the node they flew to
- Links read as filaments, not lines or beams: thin, always visible at every zoom
- Any UI surfaces are matte and minimal; no glass panels, chrome, or reflective cards floating in the space

**Atmosphere and light**

Deep-space stillness: a dark place that feels like a place, not a document or a demo stage. The world is calm by default — the only motion comes from the user's hands, the camera, and state changes they cause; a slow pulse of light on a state is allowed since it moves light, never positions. The overall reading may lean organic-bioluminescent or restrained-holographic — neither is banned, and which looks better is the builder's call, with one arbiter: whichever keeps the five node states legible and the space still wins.

**Detail standard**

Inspection survives at every distance: node text legible and states distinguishable from whole-brain overview with 100+ nodes on screen down to a single node after a search fly-to; links visible at both extremes; no LOD blur, no pop-in, no zoom level where quality quietly ends.

**Evidence of use**

The result must feel operational rather than staged. Include restrained evidence such as:
- The 100+ node map is lived-in, not staged: old dense thematic neighborhoods, a more recently grown frontier cluster, cross-links between districts, and a partly full holding cluster with unplaced nodes still waiting.
- Every placed node sits in a region that makes sense, so a search fly-to can demonstrate 'you remember where it was' — the geography itself is the evidence of use.
- The small personal map is frozen mid-workflow: recently captured nodes in holding, others placed and connected, showing the capture-then-place loop in progress.
- Density and age vary visibly across each map so it reads as grown over time, not generated in one pass.

Every detail must communicate function, recent activity, maintenance, or occupancy. Do not scatter clutter to hide weak fundamentals.


---

## 08 / DELIVERABLES

**Evidence set — the fixed judgeset**

Produce exactly these 20 artifacts, with these names. They are re-captured identically every review cycle, and they must collectively prove that every required part is complete — not merely repeat the best angle.

**01 · `01_maps_home.png`** — Maps home
  Maps home region: both seeded maps listed with live node counts (the large map showing 100+) and last-opened times, create/rename/delete present; also proves seeded content ships inside the build.
  _Minimum: 1920x1080_

**02 · `02_canvas_large_map.png`** — Canvas at scale
  Map canvas rendering the 100+ node seeded map: districts, cross-links, and filaments visible, no auto-tidy artifacts, plain and unplaced nodes distinguishable; proves the everyday editing lens holds up at real scale.
  _Minimum: 1920x1080_

**03 · `03_hero_ar_coldstart.png`** — Hero — AR projection, cold start
  The cold-start check: local state wiped, fresh first launch, AR projection open on the seeded 100+ node map; gyro-oriented vantage, node text legible, holding cluster visible in frame; proves the Android landmark works live from a pristine install and that seed content is part of the build, not staged beforehand. Fixed capture recipe: same device, wiped state, seeded launch, same vantage every cycle.
  _Minimum: 2560x1440 preferred; never below device-native 1920x1080_
  _This is the hero artifact._

**04 · `04_mind_expansion.png`** — Mind expansion overview
  Whole-brain overview on Windows: the entire 100+ node map on screen at once and legible; proves the mode's acceptance test and that map-scale legibility survives its home surface.
  _Minimum: 1920x1080_

**05 · `05_hand_tracking.png`** — Hand tracking live
  Webcam frame with a detected hand and its recognized pose overlaid, alongside mind expansion showing that pose's mapped operation taking effect; proves webcam-only tracking with no special hardware, and the toggle/live status from settings.
  _Minimum: 1920x1080_

**06 · `06_holding_cluster.png`** — Holding cluster
  The holding cluster in the shared 3D space with unplaced nodes waiting and the waiting-count glanceable; proves the staging zone exists as part of the model, not local UI.
  _Minimum: 1920x1080_

**07 · `07_five_node_states.png`** — Five node states staged
  A deliberately staged frame in which unplaced, selected, connected-to-selection, search-hit, and plain nodes coexist and are individually distinguishable at a glance; proves the node visual states family floor (min 5) in one diffable image.
  _Minimum: 1920x1080_

**08 · `08_placement_endstate.png`** — Placement end-state
  Composite of before/after: an unplaced node in holding, then the same node at its permanent dropped spot with the holding count decremented; proves placement is a deliberate act and the node sits exactly where dropped.
  _Minimum: 1920x1080_

**09 · `09_connect_edit.png`** — Connect and edit
  Two nodes joined by a filament link with the node editor open showing text, color, and label controls; proves connection and node editing on the canvas.
  _Minimum: 1920x1080_

**10 · `10_search_flyto_end.png`** — Search fly-to end-state
  After a fly-to: the found node centered in its actual place, search-hit state lit, text crisp at reading distance; proves search ends in the place the thought lives and the through-line's final step survives close inspection.
  _Minimum: 1920x1080_

**11 · `11_sync_twin_before.png`** — Twin composite — before
  Windows window and Android surface framed identically on the same map, node-for-node identical positions; establishes the baseline for the propagation proof.
  _Minimum: 1920x1080_

**12 · `12_sync_twin_after.png`** — Twin composite — after
  The same framing after an edit made on Android: the Windows side changed identically, positions untouched, no node dropped; proves one live model on every device and that positions are sacred across platforms.
  _Minimum: 1920x1080_

**13 · `13_finder_prompt.png`** — Finder prompt export
  The generated paste-ready prompt showing the map's JSON including node positions plus instructions; proves the harness export works from the current map and that placement suggestions can propose real spots.
  _Minimum: 1920x1080_

**14 · `14_finder_review.png`** — Finder review
  The review UI in mind expansion with a staged suggestion presented for accept or reject; proves suggestions are inert until accepted, and shows a rejected instance leaving no trace.
  _Minimum: 1920x1080_

**15 · `15_settings_gestures.png`** — Settings and gesture reference
  Settings with hand-tracking toggle and live status, account sign-in, sync status, and the in-app reference listing every touch and hand gesture with its operation; proves the settings region and that both gesture vocabularies are inspectable.
  _Minimum: 1920x1080_

**16 · `16_touch_vocabulary.mp4`** — Touch gesture vocabulary
  All 5 Android touch gestures performed in sequence with on-screen labels, each producing a visibly different operation spanning capture (quick-add), placement, connection, selection, and navigation; proves the touch family floor (min 5) working live.
  _Minimum: 1920x1080, ≥24 fps, ≥30 s_

**17 · `17_hand_vocabulary.mp4`** — Hand gesture vocabulary
  All 4 webcam-detected hand poses performed in sequence with labels, each mapped to a different map-scale operation (grab cluster, spread, gather, select/confirm) with cluster internal arrangement preserved; proves the hand family floor (min 4) working live.
  _Minimum: 1920x1080, ≥24 fps, ≥24 s_

**18 · `18_search_flyto.mp4`** — Search fly-to in motion
  A query typed, the view flying to the node in its actual place, ending crisp enough to read; proves fly-to works live in real time, not as a cut.
  _Minimum: 1920x1080, ≥24 fps, ≥10 s_

**19 · `19_capture_place_arc.mp4`** — Capture-place arc
  One-action quick-add dropping a node into holding unplaced, then the same node dragged out to a permanent spot where it stays; proves the designed workflow end to end in one take.
  _Minimum: 1920x1080, ≥24 fps, ≥15 s_

**20 · `20_finder_roundtrip.mp4`** — Finder round-trip
  The full harness loop live: copy the generated prompt, paste into an AI chat, paste the reply back, parse to staged suggestions, accept one (map changes exactly as accepted) and reject one (no trace); proves the finder works live and safely with messy real-world output.
  _Minimum: 1920x1080, ≥24 fps, ≥20 s_

**File structure**

```
brief/                     # every locked brief block verbatim, plus LOCKED.md naming exactly which blocks are frozen
src/                       # the single Unity project, pinned editor and SDK versions, committed build config, and bootstrap.sh
evidence/                  # the current 20-artifact set the critics score this cycle
evidence/history/cycle-N/  # each cycle's full recapture, retained for the Auditor's diffs
report.md                  # findings, autonomous decisions, substitutions, rebuttals, and the closing deviations summary
docs/setup.md              # the exact recipe the cold-start check follows, executable start to finish with no interactive step
demo-script.md             # The two-minute demo arc through both landmarks for the technical audience.
seeds/                     # both seed maps as committed deterministic JSON fixtures with content hashes; never generated at runtime
harness/                   # the capture harness — one scripted driver per artifact, its input recordings, and its determinism seed
evidence/coldstart/        # the clean-container recapture that closes the run
docs/capture/              # one capture recipe per artifact — surface, state, vantage, driver, resolution
checkpoints/               # a recoverable milestone after every stable stage
DIRECTION.md               # the visual language and the decision record, including the one-time organic-versus-holographic ruling
TASK_STATE.md              # last successful commands, current score, known failures, next action
```


---

## 09 / FAILURE CONDITIONS

The following make the delivered result unacceptable:

- Forgery — unacceptable at any score: any evidence artifact whose scene cannot be reproduced live, every cycle, from the running build — staged demos, hardcoded states, sync proven by copying files, gestures proven only against the exact pre-recorded clip rather than the recognized-pose path, or a finder round-trip demonstrated with a fabricated AI reply instead of a real paste-back. Artifact 20's honest paths are a reachable AI API or the agent's own session acting as the chat, declared in report.md. Presenting an environment substitution (virtual webcam, emulated AR) as the real thing is forgery; declaring it as a finding keeps it honest.
- Contract violation — unacceptable at any score: editing the evidence set, rubric, critics, build order, tool, or any settled decision mid-run; re-scoping a failed capture instead of recording a finding; treating a hard gate, the exit rule, or the 15-cycle cap as advisory. Deviation happens only as a recorded finding, never a silent rewrite.
- Silent cut — unacceptable at any score: a landmark, sync, or the finder shipping as a mock while any artifact implies live function; an unmet gate at the cap reported as mostly done; a region, gesture, or suggestion type claimed in report.md with no evidence behind it. Cuts happen loudly — named in report.md with reasons — or not at all. Stopping at the cap with an honest closed report is a defined good ending; no failure condition attaches to the score itself.
- Incompleteness is not a good ending: a run that stops with any required part unbuilt terminates as 'incomplete-honest', is labelled that way in report.md and in the final response, and is never described as complete or as a defined good ending.
- An artifact 20 round-trip whose parsed reply was authored by the agent, unless at least one malformed reply and one adversarially messy reply are passed through the same parser on camera in the same take.
- Any regression verdict computed from captures not taken by running that artifact's written capture recipe.
- Any required part whose only evidence is a control being present rather than operating: maps create/rename/delete, mouse equivalents, parse failure, mind-expansion placement, per-lens search.
- Seed content that is not the committed deterministic fixture; regenerating seeds at any point voids every position-regression claim in cat 03.
- A DIRECTION.md decision reopened after it is recorded, including the organic-versus-holographic reading.
- A critic score altered by the builder; rebuttals are recorded and settled only by re-scoring against the same evidence.
- A cycle counted as complete while any artifact was uncapturable for build-order reasons rather than environment reasons.

---

Begin now. Work in `master-mind`. Do not ask for confirmation before starting.