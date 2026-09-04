# report.md — findings, autonomous decisions, substitutions, rebuttals

Master Mind · `task-id: master-mind-an-idea-mapping-tool`

Every claim below is backed by a command actually run in this container. Where
something was **not** attempted, this document says so in those words rather
than implying it was.

---

## Cycle 0 — environment census (STEP 01)

The census was the first action of the build, as §00/COMPUTE requires.

### Machine

| Property | Value | Command |
|---|---|---|
| OS | Ubuntu 24.04.4 LTS, kernel 6.18.44-fc-v24, x86_64 | `cat /etc/os-release; uname -a` |
| CPU | 4 logical cores | `nproc` |
| Memory | 15 GiB total, ~15 GiB available | `free -h` |
| Disk | 252 G volume, ~30 G writable allowance free | `df -h /` |
| Privilege | uid 0 (root), `apt-get` functional | `id`; `apt-get -s install ffmpeg` |

### Findings

**F-001 · §00's "no tool access and no filesystem" clause does not describe this environment.**
The brief instructs the agent to produce unexecuted text for a human relay. This
session has a real shell, filesystem, network and browser. Following the clause
would have violated §02's "perform the actual work" and produced exactly the
silent cut §09 forbids. **Decision:** perform real work; record the conflict here
rather than ignore it. See `DIRECTION.md` D-000.
*Severity: contract-level. Subsystem: harness. Resolution: recorded, work performed.*

**F-002 · No GPU. Software rendering only.**
`ls /dev/dri` → *No such file or directory*. `lspci` absent. No `glxinfo`, no
`vulkaninfo`. Chromium reports `ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device
(Subzero)), SwiftShader driver)` — a CPU rasteriser.
*Consequence:* every capture in this run is software-rendered on 4 cores. The
renderer is therefore designed to a hard draw-call budget (see PLAN.md) rather
than assuming GPU headroom. **Verified.**

**F-003 · No KVM and no nested virtualisation. An Android emulator cannot run.**
`ls /dev/kvm` → *No such file or directory*. `grep -cE '(vmx|svm)' /proc/cpuinfo`
→ `0`. `adb` and `emulator` are not installed.
*Consequence:* no Android build of any engine — Unity, Capacitor or otherwise —
can be **executed** in this container. The Android APK is still built for real;
the Android *surface* is driven in Chromium under a Pixel-class device profile
with real touch and real `DeviceOrientationEvent` injection, so the app's own
gyro and touch code paths run unmodified.
**This is an environment substitution, declared here. It is not presented as a
physical device anywhere in the evidence set; every Android-surface artifact
carries a lens tag naming it.** The APK itself is still built for real — see
F-013 — so what is substituted is the *device*, not the build. **Verified.**

**F-004 · No webcam, and no way to create one at OS level.**
`ls /dev/video*` → *No such file or directory*. `modinfo`, `lsmod` and `insmod`
are all absent from this image, so `v4l2loopback` — the standard virtual-webcam
route named in §00 — cannot be installed or loaded.
*Consequence:* the virtual camera is created one layer up, inside Chromium
(`--use-fake-device-for-media-stream --use-file-for-fake-video-capture`), which
serves a clip through the genuine `getUserMedia` path. Real MediaPipe
HandLandmarker runs on that stream and poses are classified from real landmark
geometry.
**This is an environment substitution, declared here.** The clip is the camera,
not the answer — see `DIRECTION.md` D-003. **Verified.**

**F-005 · Unity is obtainable but not runnable here. Primary tool substituted.**
What was verified: Unity's release API is reachable and offers
`Unity-6000.0.83f1` for Linux x86_64 — 4.42 GB download, 8.42 GB installed
(`https://services.api.unity.com/unity/editor/release/v1/releases`). Unity
2022 LTS is likewise listed. So acquisition is *not* the blocker.
The blockers are F-002, F-003 and F-007, and they are decisive independently of
each other: a Unity Android player cannot be executed (no KVM), a Unity Windows
player cannot be executed (no Wine), and both would be software-rendered if they
could. Artifacts 03, 05, 11, 12, 16, 17, 18, 19 and 20 all require a *running*
build.
**Licence: attempted and verified, not assumed.** The full 4.42 GB editor was
downloaded, extracted and executed in this container. Raw log excerpts are in
`docs/evidence-notes/unity-probe.md`. Result:

- `./Editor/Unity -version` → `6000.0.83f1`. It runs.
- `-createManualActivationFile` → succeeds, writes `Unity_v6000.0.83f1.alf`
  (committed alongside the note). Turning that into a `.ulf` requires signing
  in at `license.unity3d.com` with a Unity ID this session does not hold.
- `-batchmode -nographics -quit -createProject` → **exit 198**:
  `[Licensing::Client] Error: Code 404 ... Found 0 entitlement groups and 0 free
  entitlements matching requested entitlement ids` and
  `No valid Unity Editor license found. Please activate your license.`

So the licence wall is real and was hit, not presumed. It is nonetheless *not*
the load-bearing blocker: even with a licence, F-002/F-003/F-007 mean neither
built target could be executed to capture live evidence. The 13 GB working copy
was deleted after the probe to reclaim disk.
**Substitution:** one TypeScript + Three.js/WebGL2 codebase, Electron for the
Windows target and Capacitor for the Android target. See `DIRECTION.md` D-001.

**F-006 · Firebase requires a credential this session does not hold.**
Creating a Firebase project requires a Google account. §02 names credentials as
a legitimate stop, but §00/AUTONOMY forbids stopping.
**Substitution:** a real WebSocket sync service in `src/server` with the exact
semantics §07/06 is scored on — property-level last-writer-wins, never drop a
node, never resolve by re-layout — with two *separate browser processes*
connecting over a socket. What is substituted is the hosting tier, not the
mechanism. See `DIRECTION.md` D-002.

**F-007 · CORRECTED. Wine was absent at census but installable, and the Windows
target both builds and RUNS here.**
At census time `command -v wine` returned nothing, and the census recorded that
the Windows binary could not be executed. That was true of the image as found
and **false of the environment**: `apt-get install -y wine64` succeeds. This
entry is corrected rather than left standing.

What was then verified, in this order:

1. **The Windows target builds.** `src/build-windows.mjs` produces a real
   `win32-x64` Electron application: 97 files, 326 MB, `Master Mind.exe`
   188.8 MB, assembled from the official Electron 33.4.11 win32-x64
   distribution. Manifest and hashes in `src/targets/windows/BUILD.json`.
   *Not* built through `electron-builder`: its Windows path shells out to
   `rcedit-ia32.exe` to rewrite the executable's version resources, which needs
   32-bit Wine, and `wine32` cannot be installed here (`libgphoto2-6t64:i386`
   depends on `libgd3:i386`, which apt refuses to resolve). What that costs is
   the PE version metadata and a custom icon — nothing about the application.
2. **The Windows target runs.** Launched under `wine` on an Xvfb display with a
   remote debugging port, it reports
   `Mozilla/5.0 (Windows NT 10.0; Win64; x64) … Electron/33.4.11` and serves a
   live CDP endpoint.
3. **It works.** Connected over CDP: the map loads (150 nodes, 208 links, 8 in
   holding), sync reports `live`, and WebGL2 is available through
   ANGLE/SwiftShader. Screenshot: `docs/evidence-notes/windows-target-running.png`.
4. **It is slow.** 8.5 fps at 1600×950 under Wine, against 12.5 fps for the same
   bundle in Chromium directly (F-002). Both are software-rasterised.

**Consequence for the evidence set.** The Windows-surface artifacts are captured
in Chromium rather than inside the Wine-hosted binary, because the harness needs
a freshly seeded sync service and an isolated browser context *per artifact*,
and because Wine costs a further third of the frame rate. The renderer is the
same bundle either way — and that is now demonstrated rather than asserted. The
one place it matters most, the twin composite, uses the **real Windows binary**
for its Windows side; see the artifact 11/12 recipe.

**F-013 · Both platform targets build for real.**
Not claimed — done, in this container, with the outputs hashed:

| Target | Output | Size | Toolchain |
|---|---|---:|---|
| Windows | `src/targets/windows/win-unpacked/Master Mind.exe` + 96 files | 188.8 MB exe, 326 MB total | Electron 33.4.11 win32-x64, assembled by `src/build-windows.mjs` |
| Android | `src/targets/android/app-debug.apk` | 22.8 MB | Capacitor 6.2.1 + Gradle, Android SDK platform 34, build-tools 34.0.0, via `src/build-android.mjs` |

The APK really carries the app: 19 web assets under `assets/public/`, including
both committed seed fixtures, the SDF font atlas and the 7.8 MB MediaPipe hand
landmarker model. Manifests and SHA-256s in `src/targets/*/BUILD.json`.
The Android SDK is installed non-interactively (licences accepted by piping
`yes` into `sdkmanager --licenses`), so the build has no manual step.

The Windows binary also **runs** (F-007). The APK does not and cannot: F-003.

**F-014 · Chromium's DevTools sensor override does not deliver orientation here.**
`DeviceOrientation.setDeviceOrientationOverride` is accepted by the browser but
no `deviceorientation` event reaches the page in this headless build — verified
by asking the app what it had received after the call (it had received nothing).
**Substitution:** the harness dispatches a real `DeviceOrientationEvent`, and
the app's own `deviceorientation` listener is what moves the camera. Nothing
writes the camera pose directly. Artifact 03 records the orientation sent, the
orientation the app reports receiving, and the pose before and after, so the
claim "gyro-oriented" is checkable rather than asserted: the vantage moves from
yaw 0.600 / pitch 0.220 to yaw 0.007 / pitch −0.269 purely through that
listener. **Verified.**

**F-008 · Capture toolchain is present and sufficient.**
Chromium 1194 with WebGL2 under SwiftShader (verified by a live probe returning
`WebGL 2.0 (OpenGL ES 3.0 Chromium)`), Playwright 1.56.1, a Playwright-bundled
ffmpeg (VP8/WebM), and full ffmpeg installable via `apt-get`. Xvfb present.
1920×1080 and 2560×1440 captures and ≥24 fps video are therefore reachable
without a GPU. **Verified.**

**F-009 · Reading of §00's no-subagent rule against §04's fresh-context rule.**
§00 forbids subagents and parallelism because "the build pipelines and any
virtualized devices are single shared resources"; §04 requires each critic to be
a fresh-context subagent; §06 resolves the two by requiring critics to be
"fresh-context sessions dispatched strictly sequentially".
**Decision:** the build is performed by this single agent, strictly sequentially.
Critics are fresh-context subagents dispatched **one at a time**, never
concurrently, each receiving only the mission goal, the rubric, the current
evidence set, the previous cycle's evidence set and `DIRECTION.md`. No build
pipeline or virtual device is ever driven by more than one process at a time.
A background *file download* is not a build pipeline and is not counted as
parallelism.

**F-010 · The app renders ~12 fps at 1920×1080 here; video is frame-stepped.**
Measured with the real app under load (orbiting the 150-node map): 12.5 fps at
1920×1080, 13.8 at 1280×720, 14.7 at 960×540 — nearly resolution-independent,
so the cost is Chromium's compositing of a software-rasterised surface, not fill
rate. Disabling MSAA and the preserved drawing buffer bought about 20 %.
The evidence set requires ≥24 fps at 1920×1080.
**Substitution:** videos are rendered frame-accurate on the app's own virtual
clock at 30 fps and encoded from those frames (`DIRECTION.md` D-011). Every
frame is really rendered by the running app from the live model; interactions
are dispatched as ordinary DOM events between frames. Nothing is interpolated
and nothing is cut — only the wall-clock pace of recording differs.
**Interactive frame rate is reported honestly here rather than implied away:**
on real hardware with a GPU this app would not be near that limit, but in this
container it is about 12 fps. **Verified.**

**F-011 · The fourth hand pose was chosen by measurement, not preference.**
A pinch cannot be proven through this environment's camera: with the clip
synthesised (F-004), MediaPipe reported the thumb and index 0.49–0.76 hand-spans
apart across six geometries that rendered them touching, and never classified a
pinch reliably. A single pointing finger was also unstable — MediaPipe read the
raised digit as the thumb.
**Resolution:** the select/confirm slot is filled by a **two-finger V**. §07
names the four *operations*, not the poses, so this is a design choice inside
the brief rather than a change to it — and it is recorded rather than quietly
made. See `DIRECTION.md` D-010 for the measured separation and the held-out
validation (99.0 % detection, 100 % pose accuracy on a clip the thresholds were
not derived from). **Verified.**

**F-012 · Seed fixtures were finalised before the first capture, then frozen.**
The seeds were regenerated three times during STEP 02 while node spacing and
district colours were settled — all before any artifact existed and before any
review cycle. From the first capture onward they are frozen: §09 makes
regenerating them afterwards fatal to every position-regression claim, and
`seeds/MANIFEST.json` carries the content hashes that make a silent change
detectable.

**F-015 · The label deconflictor was arbitrating against rectangles that were
not where the text is.** Found while responding to cycle 2, not reported by any
critic. Deconfliction modelled each label's rectangle from its line count and an
assumed gap below the node. The text shader places glyphs from a baseline, so
the model sat up to **1.4 em** from the glyphs actually drawn — an `above` label
was modelled about half an em too high and a `below` label about nine tenths of
an em too low. Two labels the frame showed printing through each other were
therefore measured as 33 px apart and declared disjoint: the arbiter was working
correctly on the wrong geometry.
**Fix:** each run now records its exact glyph extent in em during the build, in
the shader's own space, and deconfliction reads that. The model and what is
drawn cannot drift apart, because they are the same numbers.
This is the reason two critics could both report label collisions in a cycle
that had already shipped a deconflictor. **Verified** by measuring the rendered
frame against the arbiter's own boxes: they now agree.

**F-016 · The capture harness never rebuilt the app.**
Nothing in `run-capture.mjs` or `cycle.mjs` built the bundle, so a capture could
run against a `dist/` older than the source it claims to show — a fix that was
written, typechecked and committed but never built would be reported as "not
working" from a frame that never contained it. This actually happened during the
cycle-2 response: a probe of the new deconflictor rendered the old one.
**Fix:** the harness builds from source before capturing anything, fails the run
if the build fails, and records the bundle's size and sha256 in the manifest, so
the evidence set states which build produced it. **Verified.**

---

## Deviations ledger

| # | Brief says | Actually done | Why | Type |
|---|---|---|---|---|
| 1 | Agent has no tools; emit instructions | Real work performed | F-001 | Contract reading |
| 2 | Unity 2022 LTS | TypeScript + Three.js, Electron + Capacitor targets | F-002/03/05/07 | Tool substitution |
| 3 | Firebase managed tier | Local WebSocket sync service, same semantics | F-006 | Hosting substitution |
| 4 | Physical/`v4l2loopback` webcam | Chromium fake capture device + real MediaPipe | F-004 | Environment substitution |
| 5 | AR Foundation / ARCore on device | Device-profile surface with real gyro + touch injection | F-003 | Environment substitution |
| 5b | Windows standalone executed | Windows binary built **and executed under Wine**; evidence-set Windows surface captured in Chromium for isolation and speed, twin composite uses the real binary | F-007 | Corrected finding |
| 6 | ≥24 fps realtime video | Frame-accurate rendering on the app's virtual clock at 30 fps | F-010 | Capture-method substitution |
| 7 | (poses unnamed by the brief) Pinch | Two-finger V for select/confirm | F-011 | Design choice, measured |

No artifact ordinal, filename, definition or minimum resolution has been changed.

---

## Cycle 1 — critic findings and what was done

**The Audience · 41/50** (core workflow 21/25, landmarks live 20/25 — both at or
above their minima). Nine findings, one blocking. Every one is recorded here
with what happened to it; none is argued away.

| # | Severity | Finding | Response |
|---|---|---|---|
| 1 | blocking | Artifact 03's status read `gyro · waiting for orientation` while the badge claimed `gyro-oriented`, and no artifact showed AR in motion | **Fixed, two parts.** F-014: Chromium's DevTools sensor override silently delivers nothing here, so the harness now dispatches a real `DeviceOrientationEvent` and then *asks the app what it received*. The hero records orientation sent, orientation received, and pose before and after. And artifact 16 — the Android take in motion — now runs **inside the AR lens** and turns the device through 64° of yaw mid-take, so the vantage swinging while every node stays put is visible in one clip. |
| 2 | major | Artifact 17 announced "grab the nearest cluster" and "gather the map" over an empty canvas for most of the take | **Fixed.** A held pose was applying its zoom every frame, walking the camera off the map within seconds. Continuous hand operations are now rate-limited on the app clock and distance is clamped to a band around the framed view. Recaptured: the map is present in every sampled frame. |
| 3 | major | The active hand-tracking chip rendered near-black on a dark fill and was unreadable | **Fixed.** `button.ghost` was declared after `button.on` with equal specificity, so a ghost button that was *on* kept a transparent background and got the dark on-state text colour. |
| 4 | major | Labels overprint each other in every dense frame — in artifact 10 the very node the search flew to was the one you could not read | **Fixed, and it is the largest change of the cycle.** The renderer now deconflicts labels in screen space every frame: they are walked in priority order — selected, search hit, unplaced, connected, plain, nearest first within a rank — and a label fades in proportion to how much of it a higher-priority label has already claimed. It fades rather than hides, so nothing pops out of existence. |
| 5 | minor | The flown-to node wore the *selected* ring, not the search-hit signature the build documents | **Fixed.** Fly-to no longer selects. The node you flew to wears the search-hit ticks — which is the state the flight was about — and clicking is what selects. The ticks were also made long and thin so they read as marks pointing at the node rather than four small squares. |
| 6 | minor | The editor panel occludes world text at the right edge | **Fixed.** Opening the editor now slides the view so the node being edited is centred in what remains visible. |
| 7 | minor | The lens badge was clipped mid-word by the Grab button | **Fixed.** The tool row starts clear of the badge. |
| 8 | minor | The AR still carries the full desktop toolbar and nothing reads as a handheld surface | **Fixed.** The AR lens now drops the controls that belong to a desk — the capture field, the finder, the maps list — leaving look, search, inspect and capture, with the live orientation readout. |
| 9 | minor | `17_hand_vocabulary.mp4` changed size twice during the review and was briefly unreadable | **Accepted as a process fault, and fixed at the source.** The critics were reading the live `evidence/` directory while fixes were being recaptured into it. From cycle 2 the set is snapshotted to an immutable `evidence/cycles/cycle-N/` first and the briefs point there, so a recapture can never move under a review. |

## Cycle 1 — scores

| Critic | Category | Score | Weight | Minimum | |
|---|---|---:|---:|---:|---|
| The Audience | 01 Core workflow | 21 | 25 | 20 | above minimum |
| The Audience | 02 Landmarks live | 20 | 25 | 20 | at minimum |
| The Auditor | 03 One model and sacred positions | 18 | 20 | 17 | above minimum · **hard gate met** |
| The Auditor | 04 Evidence and report integrity | 13.5 | 15 | 13.5 | at minimum · **hard gate met** |
| The Art Director | 05 Quality compliance | 8 | 10 | 8 | at minimum |
| The Art Director | 06 Finder round-trip | 4.5 | 5 | 4 | above minimum |
| | **Total** | **85** | **100** | | |

The Auditor declared the cycle **regression-free** with **no position
regression**: the published ledger of 150 + 11 node positions was byte-identical
to the previous set and agreed to the decimal with four independent on-screen
coordinate readouts and with the JSON artifact 13 exports.

## Cycle 1 — the Auditor's findings and what was done

| # | Severity | Finding | Response |
|---|---|---|---|
| A1 | major | The twin composite proves sync for a text-and-colour edit only. No artifact shows a node MOVED on one surface arriving at the same coordinates on the other — the mission's own defining claim | **Fixed.** Artifact 12 now drags a named node on the Android surface and shows it arriving on Windows, with both editors left open on the moved node so the two coordinate readouts sit in the frame. The driver asserts that exactly one node moved and every other position is unchanged, and it **throws** if the drag failed to move anything — which caught a real bug on the first attempt: the drag was dispatching mouse events at a surface that only listens for touch, so the proof would have been vacuous. |
| A2 | major | `MANIFEST.json` is stamped cycle 0, reports 1 of 20 captured, and lists one artifact, while `DIFF.json` claims 20 | **Fixed.** The manifest merges per artifact instead of being overwritten by every partial run, keeps the cycle stamp, records which artifacts a given run recaptured, and states explicitly where a digest is unchanged — so a deterministic re-render can be told from a stale file. |
| A3 | minor | Nothing evidences the hero's "local state wiped, fresh first launch", and `evidence/coldstart/` is empty | **Fixed, both halves.** The sync service now reports where an open map was loaded from, and the app shows `first launch · restored from the committed seed <file> <sha>` — so the claim is visible in the artifact that makes it. And `src/bootstrap.sh` has been run: see the cold-start section below. |
| A4 | minor | The hero pulled back far enough that dense districts collapse into overlapping text | **Fixed.** The hero frames one district at reading distance with the holding ring at the edge of frame, rather than the whole brain. |
| A5 | minor | The states legend clips a node's label | **Fixed.** Any open panel now slides the view so the map's real extent — labels included, since labels are what ends up under a panel — is centred in the band still visible. |
| A6 | minor | Nothing demonstrates "cluster internal arrangement preserved" after a fist grab | **Fixed.** Artifact 17's tail grabs a named cluster with the mouse, moves it, and reports its internal arrangement before and after. |
| A7 | minor | Both twin panels are clipped at their outer edges, so the holding counts cannot be compared | **Fixed.** A narrow surface drops the desk-only controls rather than pushing its status chips off the edge. |
| A8 | minor | The active hands chip renders blank | **Fixed** (same CSS specificity bug the Audience raised). |
| A9 | minor | Artifact 17 halved in size while being reported unchanged | **Fixed.** The diff records video bitrate and flags a re-encode that moves it by more than a quarter as changed regardless of SSIM. The thresholds now state how they were derived. |

## Cycle 1 — the Art Director's findings and what was done

The Art Director also **ruled the delegated organic-versus-holographic
question**: *organic-bioluminescent*, ratified from measured frames. Recorded in
`DIRECTION.md` D-004 and not reopened.

| # | Severity | Finding | Response |
|---|---|---|---|
| D1 | major | Label declutter never reached the Canvas lens; artifact 02 is unreadable at whole-brain zoom | **Was already shared code, not lens-specific — artifact 02 simply had not been recaptured since the change.** Cycle 2 recaptures it. |
| D2 | major | Holding-cluster labels collide in every frame containing the cluster | **Fixed.** A label on a node in the holding ring is now set to the outward side rather than centred, so the labels radiate instead of stacking. |
| D3 | minor | The legend clips a node label | **Fixed** (A5). |
| D4 | minor | The search-hit ticks read as a transform gizmo's drag handles | **Fixed.** Longer, thinner, and tinted from the node's own hue rather than bone white. |
| D5 | minor | Recency is measurable but does not read against depth attenuation | **Fixed by widening the span, not by changing the channel.** D-007's chroma range moved from 0.62–1.00 to 0.45–1.00. The decision — that recency's channel is chroma — is untouched. |
| D6 | minor | No frame shows a PLACEMENT suggestion being accepted, the only finder path that writes a position | **Fixed.** Artifact 20 now accepts one on camera, reached the way a user reaches it. The node was unplaced, lands exactly where the reply suggested, and holding steps 4 → 3. |
| D7 | minor | Artifact 13 is scrolled past the instructions | **Fixed.** The prompt panel shows the preamble and the position records together. |

## Cycle 2 — the Audience's findings and what was done

**The Audience · 43/50** (core workflow 21/25, landmarks live 22/25 — both above
their minima; +2 on cycle 1). Eight findings, none blocking.

| # | Severity | Finding | Response |
|---|---|---|---|
| B1 | major | Artifact 09 — the still dedicated to connect-and-edit — is frozen on the *arm* step (`Now click the node to connect to.`); no newly created filament is visible, so the artifact documents the invitation rather than the result | **Fixed, and the correction was taken verbatim.** 09 is now a two-panel before/after in one framing: the left panel is the armed state, the right panel is one interaction later with the new filament drawn between the two named nodes and centred in frame. The driver records `connectedByThisCapture: true` and asserts the link is absent in the before panel and present in the after panel, so a composite that failed to create an edge fails the capture instead of shipping. |
| B2 | major | Node labels collide and half-occlude each other throughout the dense districts in **every** whole-map frame — five specific collisions cited across 03, 04, 06, 09 and 10 | **Accepted, and the fix went further than the correction asked.** Cycle 1's arbiter only dimmed the loser, so two overlapping labels both stayed readable *and* both stayed drawn. Deconfliction now **re-anchors before it dims** — nine placements around the label's own node — and full brightness is reserved for a label that overlaps **nothing** already accepted, so bright labels are mutually exclusive by construction. What is still covered in its best placement falls off squared and is gone by 30 %. Measured on the 150-node map: **0 bright-on-bright overlaps**, and overlaps among all still-legible labels 42 → 18. Nothing moves and no node is re-laid-out — text only. See F-015 for the modelling bug this uncovered. |
| B3 | minor | Artifact 04 clips the holding cluster off the bottom edge; cycle 1's looser framing had it fully in frame | **Fixed.** The mind-expansion fit now includes the holding cluster in its bounds and the margin was returned to 1.09. The label-size gain from the tighter crop was, as the Audience says, small against losing a region of the map. |
| B4 | minor | A node dragged out of holding to a permanent spot still carries the literal Label `holding` in the inspector (19 at 9.6 s and 17.6 s, and 08's After panel) | **Fixed at the source.** `holding` is a state, not a name. Quick-add still shows it while the node is held, and `store.place()` now clears it on placement unless the user has typed a real label — so the word cannot outlive the state it described. |
| B5 | minor | Artifact 05 shows the detected hand and its metrics but nothing in-frame demonstrates the Spread *taking effect* — the ~7 % expansion is only measurable by diffing against artifact 04 | **Fixed.** 05 is now a two-panel composite in one framing: the map before the pose and at the end of the spread, with the webcam panel and pose readout on both. The captured measurement is in the frame — mean radial distance 125.53 → 109.57 — and the driver requires `operationTookEffect: true`. |
| B6 | minor | The tracking panel is titled `WEBCAM · HAND TRACKING` over a visibly computer-generated hand, with no on-frame marker that the source is synthesised — while every other substitution in this set announces itself | **Fixed, and this is the finding I am most glad was raised.** The panel now reads `SYNTHESISED CAPTURE · HAND-VOCABULARY-SLOW.Y4M · REAL HANDLANDMARKER`, and the title is *derived* from the stream the app actually opened rather than typed in: the app inspects its own `MediaStreamTrack` label and marks itself synthetic from it, so a real camera would retitle the panel by itself and a synthetic one cannot be silently relabelled. |
| B7 | minor | Artifact 08's tighter cycle-2 crop clips labels mid-word (`hod of loci`, `et: 12`) and pushes the compose field out of frame | **Fixed.** Each panel was widened (fit margin 1.34) so no label is cut at a boundary. |
| B8 | minor | The only segment of artifact 16 where the gyro readout moves is also the `Pinch / spread — Zoom in` beat, conflating orientation with a touch gesture that changes the same view | **Fixed.** Orientation has its own labelled beat — `Device orientation — look around`, no touch input for its whole duration, gyro numbers sweeping — placed before the pinch beat, so gyroscopic control is demonstrated in isolation. |


## Cycle 2 — the Auditor's findings and what was done

**The Auditor · 30/35** (one model and sacred positions 17/20, evidence and
report integrity 13/15 — **both hard gates met, both at their floor**; 31.5 → 30
on cycle 1). **The cycle was declared NOT regression-free**, with **no position
regression**: `positions.json` is byte-identical across the two cycles and 02's
node screen coordinates are unchanged through a full rebuild, but four artifacts
prove less than they did last cycle. That verdict is recorded as given and is
not argued with — it is the correct call, and the cause is one habit running
through five recaptures.

**The regression, named plainly.** Chasing label legibility, I tightened the
framing of 04, 08 and 05 and let the twin's camera pan between its two shots.
Every one of those trades cost evidence that was already in hand: a clipped
holding cluster, a clipped holding ring, a spread you can no longer see, and a
twin pair that no longer superposes. *A frame that proves less is a regression
even when the code underneath got better*, and cycle 3 is spent recovering all
four before anything new is attempted.

| # | Severity | Finding | Response |
|---|---|---|---|
| E1 | major | Artifact 12's AFTER is framed differently from 11's BEFORE — every node's projected x moves 289–350 px while y is preserved, and a placed node is pushed off the left edge, so "positions untouched, no node dropped" is no longer checkable from the frame | **Fixed, and the root cause was exactly the one named.** Selecting a node pans the view to clear the editor panel, so the AFTER shot was taken from a different eye. The twin camera is now framed **once**, captured as an explicit pose, and **restored immediately before every shot on both halves**, so the two frames superpose. The drag is kept as the edit. Both halves print the moved node's before → after coordinates in the frame. And the capture now **throws** if any node is within 4 px of an edge in either half, so an artifact that claims "no node was dropped" cannot ship with a node off the frame. |
| E2 | major | The two halves are identical in ephemeral UI state as well as model state, and nothing identifies the Windows side as the separate Wine/Electron process the decision record claims — the composite cannot distinguish two synced processes from one state rendered twice | **Fixed as asked, and made underivable by hand.** The sync service now assigns every socket a number and reports it with its pid; the app exposes a `provenance()` reading its own runtime from `navigator.userAgent`, its platform, its transport URL and that server-assigned socket number. Each half of the composite carries that line: `electron 32.x · Win32 · wine · the built win32-x64 binary · ws 127.0.0.1:8998 · socket #1` against `chromium … · android device profile · touch · socket #2`. Nothing in it is typed by the capture script. **And when the Wine binary fails to come up, the strip says `chromium fallback — NOT the built binary` in the frame** — the artifact can no longer over-claim by silently degrading. |
| E3 | minor | Artifact 04's holding cluster runs off the bottom edge, two labels cut and one occluded by the Select button | **Fixed** (the Audience raised the same clip as B3). The expansion fit bounds the placed nodes and the holding cluster together, with margin returned to 1.09. |
| E4 | minor | Artifact 08 clips the holding ring in both panes, so the four-to-three decrement can be read only from the toolbar pill, not seen in the cluster | **Fixed** (B7 is the same crop). Both panes were widened so the whole dashed ring is in frame; the pill stays, so the decrement is shown twice — once glanceable, once countable. |
| E5 | minor | `DIFF.json` is headed `previousCycle: 0, capturedPrev: 2` while twenty rows plainly compare against cycle 1's twenty files | **Fixed, and it is now underivable from a stale header.** The previous cycle is read from the snapshot directory being diffed and the previous count from the **artifact files actually on disk** — a count that trusted the previous manifest's own list would have inherited exactly the error it is meant to catch. What the old manifest claims about itself is kept alongside as `previousManifestSelfReport`, and any disagreement is reported rather than silently corrected. The diff also fails loudly if its comparable row count and the previous file count disagree. |
| E6 | major | Artifact 16 was recaptured in a different **lens** and 12 changed the **operation it demonstrates**, and neither is annotated anywhere: the diff records only a similarity number, so a re-framing, a bug fix and a change to what an artifact proves all surface as the same kind of change | **Fixed.** Every driver now declares what its artifact demonstrates, and its capture function is hashed. The diff compares both across cycles and writes a `whatChanged` line naming a changed lens, surface, demonstrated subject or capture script — and an artifact whose recipe changed substantively is reported as `changed` even when its pixels did not move. |
| E7 | minor | Artifact 05's spread is only ~8 % wider than the neutral framing in 04, so the pose's operation taking effect is barely legible | **Fixed** (B5 is the same finding from the other side). 05 is a two-pane before/after at one camera with the measured radial distance printed on the frame. |
| E8 | minor | Label priority and fading help, but the dense districts are still an unreadable pile — dimming resolves priority without displacement | **Fixed by taking the correction offered.** Deconfliction now **re-anchors before it dims**: each label is tried at nine placements around its own node, the clearest is chosen, and only what is still buried in its best placement is faded out. The node never moves, no label detaches from the node it names, and the unshifted anchor is preferred unless a candidate is meaningfully clearer, so labels do not jitter as the camera turns. |


## Cycle 2 — the Art Director's findings and what was done

**The Art Director · 13.1/15** (quality compliance 8.5/10, finder round-trip
4.6/5 — both above their minima; 12.5 → 13.1 on cycle 1). Eight findings, two
major, none blocking. **The delegated question stays closed:** *"I am not
reopening anything: D-004 was ruled organic-bioluminescent in cycle 1 and is
closed, and cycle 2's frames independently confirm the ruling was right."*

The specified world was checked by measurement rather than impression: the
ground sampled at seven widely separated points across three artifacts is
exactly `#120E0B` every time, filaments step from (28,23,19) at rest to
(141,123,107) when carrying state and land on exactly the incident links, and
two idle frames 2.6 s apart in artifact 20 differ **only** in a toast and three
symmetric halos on the holding nodes — every placed node bit-identical. The
avoid-list holds: no drift, no easing, no idle motion, no bloom, no particles.

| # | Severity | Finding | Response |
|---|---|---|---|
| G1 | major | The declutter pass only *demotes* — it does not stop two labels that both survive at full brightness from landing on each other, so the densest districts of 02 still hold three-deep pileups (`Wild` / `Aspergillus` / `Osmotolerance`). "Labels that survive to the bright tier must never overlap another bright label." | **Fixed, and the invariant was taken literally.** Deconfliction re-anchors before it dims — nine placements around the label's own node — and **full brightness is reserved for a label whose clearest placement overlaps nothing already accepted**. Not "almost nothing": zero. Anything else is in the dimmed tier and falls off squared to nothing by 30 % coverage. The bright tier is mutually exclusive by construction rather than by tuning. Measured on the 150-node map at whole-map framing: **70 labels bright, 0 bright-on-bright overlaps.** Fewer labels are bright than a softer rule would allow, which is the honest cost of the invariant. |
| G2 | major | Artifact 04 does not contain the entire map: the holding ring runs off the bottom, two labels are cut mid-glyph, and the pose bar's Select button sits on a node label | **Fixed as prescribed.** `fitAll` bounds the union of the placed nodes and the holding cluster's origin-plus-radius, and the solve now **insets the viewport by the pose bar's height and one label line** before choosing a distance, so nothing in the map can land under the bar or off an edge. |
| G3 | minor | In 07 the holding label `Cut the history section?` is dimmed to illegibility beneath `Ask about the demo laptop`, and the south tick of the search-hit signature on `Method of loci` is overdrawn by that node's own label | **Fixed.** A search-hit node's label is offset by the **tick radius** rather than the core radius, so a state signature is never overdrawn by its own text. The holding collision is the G1 case and is resolved by re-anchoring. |
| G4 | minor | The widened recency chroma is measurable (within-family spread 0.12 → 0.38 coral, 0.07 → 0.29 azure) but a viewer still cannot pick the frontier out of the frame: the same saturation number means different things in the amber and violet families, and nothing tells the viewer chroma encodes age | **Fixed, as a parameter refinement — the channel is untouched.** Chroma is normalised per hue against that hue's own saturation ceiling, so the recency lead is a constant *perceptual* step rather than a constant saturation number. And the States legend now carries the key — `muted = settled · full chroma = recently touched` — so the frame teaches its own channel the way the five state signatures already do. D-007 stands: recency's channel is chroma. |
| G5 | minor | In 20 at 11.3 s the red `No JSON found` banner is still displayed against a reply box that has already been replaced — the error outlives the input it described | **Fixed.** The parse banner and any staged queue clear on the reply field's `input` event, so a parse result can never be shown against text it was not produced from. |
| G6 | minor | 13's taller prompt pushes `Parse reply` below the frame edge; cycle 1 showed it | **Fixed.** The finder panel is capped at the viewport minus the top and bottom bars and its body scrolls internally, so Generate / Copy / Parse are on screen regardless of prompt length. |
| G7 | minor | The seed-provenance banner is bisected by the finder panel and reads as an orphaned fragment `…d6d5b` in 13, 14 and throughout 20 — "a half-rendered hash fragment reads as a rendering bug in an evidence frame" | **Fixed.** The banner is suppressed while a modal panel is open. It is a first-launch provenance note, not a permanent chrome element, and it has no business being half-drawn behind a panel. |
| G8 | minor | `DIFF.json` declares `previousCycle: 0, capturedPrev: 2` while comparing all 20 against cycle 1 | **Fixed** — the Auditor raised the same header as E5, and the fix derives both values from the snapshot actually being diffed. |

## Cycle 2 — scores

| Critic | Category | Score | Weight | Minimum | |
|---|---|---:|---:|---:|---|
| The Audience | 01 Core workflow | 21 | 25 | 20 | above minimum |
| The Audience | 02 Landmarks live | 22 | 25 | 20 | above minimum · **+2** |
| The Auditor | 03 One model and sacred positions | 17 | 20 | 17 | at minimum · **hard gate met** · −1 |
| The Auditor | 04 Evidence and report integrity | 13 | 15 | 13 | at minimum · **hard gate met** · −0.5 |
| The Art Director | 05 Quality compliance | 8.5 | 10 | 8 | above minimum · **+0.5** |
| The Art Director | 06 Finder round-trip | 4.6 | 5 | 4 | above minimum · **+0.1** |
| | **Total** | **86.1** | **100** | | 85 → 86.1 |

**Regression-free: NO.** The Auditor — who alone makes that call — declared the
cycle not regression-free on the twin composite, and the Art Director
independently found the same class of loss in artifact 04. **No position
regression**: `positions.json` is byte-identical across the two cycles.

Cycle 2 therefore fails the exit condition on two counts: 86.1 is below the
90 threshold, and the run of two consecutive regression-free cycles has not
started. No critic score has been altered by the builder.


## Cycle 3 — what changed, and what it cost

Cycle 3 is a repair cycle. The Auditor declared cycle 2 not regression-free on
the twin composite, and the Art Director found the same class of loss in
artifact 04; both are recovered here, along with every other finding from the
three cycle-2 critics. **20/20 captured as defined. Positions IDENTICAL** —
`positions.json` is byte-identical to cycles 1 and 2, so three full rebuilds
have moved nothing.

**The renderer.** Two critics reported label collisions in a cycle that had
already shipped a deconflictor, which meant the deconflictor was wrong rather
than absent. It was: it modelled label rectangles from a line count and an
assumed gap, and that model sat up to 1.4 em from the glyphs actually drawn
(F-015). Runs now carry their exact extent, measured during the build in the
shader's own space. On top of the corrected geometry the arbiter re-anchors
before it dims — nine placements around the label's own node — and reserves full
brightness for a label that overlaps *nothing* already accepted.

Measured on the 150-node map at whole-map framing:

| | cycle 2 rule | cycle 3 rule |
|---|---:|---:|
| labels at full brightness | 81 | 70 |
| **bright-on-bright overlaps** | **8** | **0** |
| overlapping pairs among all legible labels | 42 | 18 |
| worst single overlap | 254 px² | 137 px² |

Eleven labels lost their full brightness. That is the price of the invariant and
it is worth stating plainly rather than reporting only the improvement.

**Framing.** `fitAll` now bounds the placed nodes together with the holding
ring's own radius, and reserves the measured height and width of the chrome —
the bars *and any open panel* — before solving for distance. An open panel is
chrome: a map framed to the whole viewport with the editor open is a map with a
region behind a panel, which is exactly how cycle 2 lost the holding ring from
08 and put the far end of 09's new filament off the edge. Three artifacts now
**assert** what they are meant to show and fail the capture otherwise:

- **08** throws unless the whole dashed holding ring is inside the visible band,
  and unless the dropped node lands clear of the editor.
- **09** throws unless both named nodes are in the band the editor leaves.
- **11 / 12** throw if any node is within 4 px of a frame edge in either half.

**The twin.** The camera is framed once, captured as an explicit pose and
restored before every shot on both halves, so 11 and 12 superpose. Each half
carries a provenance line read from its own running process. In this run:

```
Windows — electron 33.4.11 · Win32 · wine · the built binary · socket #1 on 127.0.0.1:8871
Android — chromium 141.0.7390.37 · Linux x86_64 · android device profile · touch · socket #2
```

Two runtimes, two sockets, one sync service (pid 5461). If the Wine binary fails
to come up the strip reads `FALLBACK — NOT the built binary`, so the artifact
cannot over-claim by silently degrading.

**Evidence integrity.** `DIFF.json` derives the previous cycle from the snapshot
directory and the previous count from the artifact files on disk, keeps the old
manifest's self-description alongside, and reports a disagreement rather than
correcting it silently. This cycle: `previousCycle 2`, `capturedPrev 20`,
`headerDisagreement: null`, `rowsVsCapturedPrev: ok`. Every driver now declares
what its artifact demonstrates and hashes its capture function, so from cycle 4
a diff can name a changed lens, surface, subject or script instead of reporting
a bare similarity number. And the harness builds the app before capturing
anything and records the bundle hash (F-016) — nothing did this before, and a
capture could run against a bundle older than the code it claimed to show.

## Cold-start validation

`bash src/bootstrap.sh`, run end to end with no interactive step:

```
1/9  system packages          ffmpeg 6.1.1, Xvfb, DejaVu, OpenJDK 21, wine64
2/9  node                     22.22.2
3/9  npm dependencies         npm ci against the committed lockfile
                              three 0.185.1 · @mediapipe/tasks-vision 1.0.1
4/9  chromium                 installed for Playwright 1.56.1
5/9  seed fixtures            ok  seeds/map-fermentation.json  150 nodes (8 in holding), 208 links
                              ok  seeds/map-talk.json           11 nodes (4 in holding), 6 links
6/9  deterministic assets     SDF atlas 960x800, 112 glyphs · hand clips · 11/11 invariants pass
7/9  both platform targets    Master Mind.exe 188.8 MB · app-debug.apk 23.1 MB
8/9  recapture                02, 03, 06, 07 into evidence/coldstart/  — 4/4 as defined
9/9  position verification    ok  map-fermentation: 150 positions match the committed fixture
                              ok  map-talk:          11 positions match the committed fixture
                              161 positions compared as MODEL VALUES, 0 mismatched
```

No manual step, no interactive prompt, no unset variable, no secret from outside
the directory. The full log is at `evidence/coldstart/bootstrap.log`.

## Rebuttals

*None. Every cycle-1 finding was accepted and acted on. No critic score has been
altered by the builder.*

One finding was **partly declined on the facts rather than on judgement**: D1
asserted that the label declutter was implemented only in the mind-expansion
lens. It was not — it lives in the shared renderer and applies to every lens.
What the Art Director actually observed was true and worth acting on: artifact
02 was byte-identical to the previous cycle because it had not been recaptured
since the change landed. The correction is a recapture, not a code change, and
cycle 2 makes it.

## Capture failures

**No artifact has failed its check in any cycle.** Both cycles recorded 20/20
captured as defined, at or above every declared minimum resolution and duration.
The failures below are harness faults, recorded because §09 makes a silently
re-scoped or swallowed failure fatal — a failure is a finding here even when it
costs no artifact.

| Cycle | Fault | What it cost | Resolution |
|---|---|---|---|
| 1 | The critics read the live `evidence/` directory while fixes were being recaptured into it; `17_hand_vocabulary.mp4` changed under a review and was briefly unreadable | One critic read a half-written file | Each cycle is now frozen to an immutable `evidence/cycles/cycle-N/` before any critic is dispatched, and the briefs point there |
| 1 | The twin driver dragged a node on the Android surface with mouse events, on a surface that listens only for touch — nothing moved, and the sync proof would have been vacuous | Nothing: caught before it shipped | Switched to CDP touch events, and the driver now **throws** if the dragged node's position is unchanged |
| 2 | `run-capture.mjs` exited non-zero *after* all 20 artifacts had passed their checks — a promise left over from a closed browser rejecting during teardown. `cycle.mjs` printed `capture run reported a failure` with no cause attached | Nothing to the evidence set; the diagnostic was lost | Late unhandled rejections and exceptions are now caught, named, written to `MANIFEST.lateFaults` and printed, and `cycle.mjs` reports the exit status and signal |

Every capture failure that has cost an artifact: **none.** Every capture whose
definition was narrowed to make it pass: **none.**
