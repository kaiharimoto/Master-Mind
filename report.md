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
validation. **Verified.** The validation figure is **99.0 % detection and
99.7 % pose accuracy** over three passes on a clip the thresholds were not
derived from; the 100 % this section carried until cycle 7 was a single pass and
did not reproduce — see F-028.

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

**F-017 · The holding boundary was drawn at half the radius the model declares.**
Found by the Audience in cycle 4 as "three unplaced nodes sit outside the dashed
circle", and it was not a projection artefact: the shell's uniform is the quad's
half-extent while the dashed ring is drawn at half the quad, so passing the
declared radius drew a circle of **half** that radius. Members of the holding
cluster had been sitting outside the very boundary the `holding N` chip was
counting them into, in every cycle.
**Fix:** the uniform takes twice the intended world radius, and the radius is
solved each frame from the members' own projected positions — the boundary is
drawn in screen space while its members sit in 3D, so a member nearer the camera
can project outside a circle that contains it in world terms. **Verified**: all
eight members inside the boundary at the framing artifact 06 uses.

**F-018 · A capture could report a false machine-checked claim as `captured`.**
See the cycle-3 section, finding H1. Recorded here because it is the class of
fault §09 names, not merely an artifact defect: `clusterMoved: false,
clusterInternalArrangementPreserved: false` sat inside a record whose status read
`captured` with `error: null` for two consecutive cycles, because verification
looked only at resolution, frame rate and duration.
**Fix:** a driver declares the claims its artifact must carry, and a capture that
fails one is a **failed capture**. Sixteen of the twenty artifacts declare theirs.
The underlying behaviour turned out to be correct — the grab always translated
the cluster rigidly, max member drift `0.000000` — so this was a false negative,
which is exactly why it survived: nothing looked, and the frames looked fine.

**F-019 · A failed capture left the previous run's file on disk.**
Found in cycle 5 while responding to the Audience: a `compose` failure in
artifact 03 was recorded as `driver-error`, and the frame from the run *before*
it stayed in the output directory. The manifest said the capture had failed and
the directory held a frame from another build. Frozen into a cycle, that is an
artifact whose provenance its own manifest denies — and it would have looked
entirely normal to a critic, because the frame was a real frame, just not the
one the record described.
**Fix:** a driver error deletes the artifact file, so a failed capture is
**visibly missing** rather than silently stale. **Verified** by reproducing the
compose failure and confirming the file is removed.

The compose failure itself was an apostrophe in a caption: `esc()` escapes `'`
for ffmpeg's `drawtext`, and ffmpeg's own parser did not accept the escape
inside a single-quoted filter argument. The caption uses a typographic
apostrophe, which is not a filter metacharacter.

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

## Cycle 3 — the critics' findings and what was done

**Total 88.0/100 · every category above its minimum · REGRESSION-FREE · no
position regression.** 85 → 86.1 → 88.0. The Auditor, who alone makes the call,
declared the cycle regression-free; all three critics independently reported no
position regression, and `positions.json` is byte-identical across all four
cycles.

| Critic | Category | Cycle 2 | Cycle 3 | Weight | Minimum | |
|---|---|---:|---:|---:|---:|---|
| The Audience | 01 Core workflow | 21 | **22** | 25 | 20 | +1 |
| The Audience | 02 Landmarks live | 22 | 22 | 25 | 20 | — |
| The Auditor | 03 One model and sacred positions | 17 | **17.5** | 20 | 17 | +0.5 · **hard gate met** |
| The Auditor | 04 Evidence and report integrity | 13 | **13.5** | 15 | 13 | +0.5 · **hard gate met** |
| The Art Director | 05 Quality compliance | 8.5 | 8.5 | 10 | 8 | — |
| The Art Director | 06 Finder round-trip | 4.6 | **4.5** | 5 | 4 | −0.1 |
| | **Total** | 86.1 | **88.0** | 100 | | |

Sixteen findings: none blocking, four major, twelve minor. Every one is recorded
below with what happened to it.

### The four major findings

| # | Critic | Finding | Response |
|---|---|---|---|
| H1 | Auditor · a17 | `clusterMoved: false, clusterInternalArrangementPreserved: false` sat inside a record whose status read `captured` with `error: null`, for **two consecutive cycles**, against a guarantee the settings reference states in words | **Fixed, and the answer is not what the finding assumed.** The grab always *did* translate the cluster rigidly: measured properly, the centroid travelled **17.28 units** and the maximum per-member drift across **16 members** is **exactly 0.000000**. What was broken was the *check*. It compared a single string of offsets rounded to three decimals, and used that one comparison to answer both "did the cluster move" (a question about the centroid, which a shape string cannot answer at all) and "was its arrangement kept". So it could answer neither, and it reported a false negative. **And the harness shipped it**, because verification only ever looked at resolution, frame rate and duration. Both questions are now measured as numbers with stated tolerances, sampled either side of the grab beat rather than at the ends of the take — and see the general fix below. |
| H2 | Auditor · a02 | 02 and 04 — the two artifacts the rubric names as the continuous cross-cycle position instruments — were reframed between cycles: 0 of 93 and 1 of 123 node cores landed within 1.5 px of their previous pixels, so neither could be position-diffed from the frames | **Fixed exactly as prescribed.** Both cameras are **pinned** to a constant (yaw, pitch, distance, target), recorded in the driver and in the manifest, derived once from the fit rule each comment names. A cycle-over-cycle pixel diff of 02 or 04 is now itself the position proof: if a node's projected pixel moves, either a position changed or the camera did, and the camera cannot. Verified — the pinned pose reproduces cycle 3's frames byte-identically. |
| H3 | Audience · a03 | The AR hero is a dark field of nodes marked as AR only by a tab and two text chips; nothing *in the picture* shows the map being oriented by the device | **Fixed, and the correction was taken verbatim.** 03 is now two panels of the same map at two device orientations — heading 34° and heading 96° — with the readouts moving in step, the anchor node `Sauerkraut by weight` traceable between them (**x = 314 px → x = 431 px**), and a caption on each panel stating that every node position is unchanged. The capture **throws** unless the heading actually changed by more than 25° and the two panels' positions are identical. No HUD, no horizon, no grid: the only thing that changes is where the map is seen from. |
| H4 | Art Director · a07 | The luminance ladder **inverts across hues**: unplaced bone clips to white at 1.00 while the selected node sits at 0.71, and two *plain* nodes differ by more than the gap between connected and selected. The states are carried by ring geometry alone, not by the distinct luminous signature the specification asks for | **Fixed at the root, and it costs something.** The ladder was a raw multiplier on hues that are not lightness-matched — bone is ~1.6× as luminous as magenta before any state applies. A node is now drawn at a shared reference lightness and the ladder applied on top. Measured after: **selected 0.526 > search hit 0.497 > unplaced 0.454–0.461 > connected 0.376 > plain 0.260–0.265** — monotonic for every hue, and nothing in holding can outshine the selection. The cost, stated plainly: the world is dimmer, because the ladder can only be monotonic across this palette if every hue renders at the dimmest one's level. `DIRECTION.md` D-013 records the trade and why the alternative — brightening the dark hues toward white — was rejected: it would have taken chroma away from the recency channel D-007 depends on. |

**The general fix behind H1.** A driver now **declares the claims its artifact
must carry**, and a capture that fails one is a **failed capture** — a finding,
not a footnote. Fourteen of the twenty artifacts declare theirs: that the gyro
drove the view, that the pose operation took effect, that the dropped node is
placed and stayed put, that the filament was created by this capture, that the
twin's two surfaces agree and sit on two distinct sockets, that all three finder
suggestion kinds were accepted. This is the class of fault §09 calls fatal, and
one instance of it went undetected for two cycles because nothing was looking.

### The twelve minor findings

| # | Critic | Finding | Response |
|---|---|---|---|
| H5 | Audience · a10 | At the fly-to end-state every node outside the hit's own district has fallen to near-ground luminance — the surrounding map is the thing that tells you where the thought lives | **Fixed.** Depth now attenuates **luminance rather than alpha** (D-014) and the floor was raised, so distant districts keep a landmark step above the ground instead of blending into it. |
| H6 | Auditor · a18 | 18 is 13 s but the fly-to completes by 5.5 s; twelve of twenty sampled frames are an identical motionless end-state | **Fixed.** The take was rebalanced onto the query and the approach — typing at 15 frames per character, then the flight — and shortened to 11 s with a 2.8 s tail. The end-state claim is already made in full resolution by artifact 10. |
| H7 | Audience · a05 | The orange operation caption is overlapped by the mouse-equivalent button row, which cuts off its lower half — in the single most important hand-tracking still | **Fixed.** The caption sits clear of the tool row rather than sharing its band. |
| H8 | Art Director · a02 | Two *suppressed* labels can still be placed on top of each other: the faded tier is not deconflicted against itself, so ghost strokes cross foreground text | **Fixed.** Every label that is drawn at all now reserves its rectangle, so the faded tier is arbitrated against itself. Reserving only labels above a weight threshold was what let two ghosts land together. |
| H9 | Audience · a04 | A visible minority of labels are faded to near-nothing in the dense districts, and the arbiter does not treat the node markers themselves as occluders | **Partly fixed, and one half of it declined on the merits.** Node discs are now scored as a **placement preference** — a candidate over a marker loses to a clear one — rather than as occupancy, which would have silenced many more names for no legibility gain. The candidate set went from nine anchors to seventeen, so fewer labels are suppressed at all. **The request for a floor under fully-suppressed labels is declined**: the Art Director asked, in the same cycle, for suppression to reach zero so a buried label leaves no stroke, and that invariant is what makes the dense districts readable. Reducing the number of suppressions is the way to serve both, and is what was done. |
| H10 | Art Director · a04 | Thin vertical glyph stems disappear at the whole-brain zoom — `Ruhlman` renders as `Ruh:man`, `Miso` as `M:so` — at exactly the zoom the detail standard names | **Fixed.** The SDF alpha threshold window widens and drops slightly as the rendered size approaches the clamp, so thin stems thicken instead of vanishing; above ~17 px nothing changes. The expansion lens's text floor was also raised from 11.5 px to 13 px. |
| H11 | Art Director · a02 | Recency chroma is measurable but cannot be separated from depth by eye: distance compresses saturation by about as much as the channel spans | **Fixed as prescribed** (D-014). Distance scales RGB uniformly, which leaves `(max−min)/max` exactly where it was, so the whole declared chroma range is reserved for recency and depth reads purely as lightness. |
| H12 | Art Director · a20 | The GROUPING card is the one suggestion type that is *rejected* rather than accepted, so the grouping type and the reject path cancel each other's proof | **Fixed exactly as prescribed.** The grouping is accepted — two nodes' labels go `arc`/`ground` → `Framing` on camera — and the rejection is carried by a connection, which is equally checkable. The artifact now **requires** `allThreeKindsAccepted`. |
| H13 | Auditor · a12 | 12's after-frame carries a teal→magenta hue change that no caption accounts for | **Fixed.** The caption names every edit in the beat: the Android drag with its coordinates, and the concurrent retext/recolour on Android against the relabel on Windows that exercises property-level last-writer-wins. As the Auditor says, naming the second edit turns an unexplained delta into the strongest evidence in the set for LWW. |
| H14 | Auditor · a13 | `DIFF.json` gives all 19 changed artifacts the identical `whatChanged` string and reports nothing substantive, in a cycle where three artifacts were visibly redesigned | **Fixed.** With no baseline fingerprint the diff now falls back to an **SSIM band** — anything more than 0.05 below its own threshold is flagged *provisionally substantive, inspect* — and every row names the artifact's declared subject. From cycle 4 the fingerprints exist on both sides and the diff reports real recipe changes. |
| H15 | Audience · a16 | The gyroscope segment's heading/tilt/roll readout is unresolvable at contact-sheet scale, so a gyro-driven vantage cannot be told from another pan | **Fixed.** The readout **comes forward while the device is actually turning** and settles back on its own. It is the one input in the vocabulary that is not a touch, and it now survives downsampling. |
| H16 | Audience · a17 | Through the pose section the map is too small for node labels, so spread, gather and grab read as a slight change of scale rather than as distinguishable operations | **Fixed by making the operation legible as a number.** The hand panel carries the live **view distance** alongside the pose and its metrics, the way artifact 05's before/after readout does for a single pose — so the three map-scale operations are distinguishable at the framing they need in order to have room to happen at all. |


## Cycle 4 — the critics' findings and what was done

**Total 86.75/100 · every category above its minimum · NOT regression-free.**
88.0 → 86.75. The regression is mine and its cause is a single change: the
lightness normalisation that fixed cycle 3's inverted state ladder cost more
than it bought.

| Critic | Category | C3 | C4 | Weight | Minimum | |
|---|---|---:|---:|---:|---:|---|
| The Audience | 01 Core workflow | 22 | 21.5 | 25 | 20 | −0.5 |
| The Audience | 02 Landmarks live | 22 | 22 | 25 | 20 | — |
| The Auditor | 03 One model and sacred positions | 17.5 | 17.5 | 20 | 17 | — · **hard gate met** |
| The Auditor | 04 Evidence and report integrity | 13.5 | 13 | 15 | 13 | −0.5 · **hard gate met** |
| The Art Director | 05 Quality compliance | 8.5 | 8.5 | 10 | 8 | — |
| The Art Director | 06 Finder round-trip | 4.5 | 4.25 | 5 | 4 | −0.25 |
| | **Total** | 88.0 | **86.75** | 100 | | |

Twenty-one findings: none blocking, eight major, thirteen minor.

**The Auditor named the two concrete losses that cost the regression-free
verdict**, and both were caption-and-crop faults rather than anything structural:
artifact 12's provenance line overflowed and took the `camera frozen from 11`
clause off the frame — *"the whole licence for reading its pixels the way I read
them"* — and artifact 03's right panel sliced labels mid-word at its edge. Both
are fixed below.

### The eight major findings

| # | Critic | Finding | Response |
|---|---|---|---|
| J1 | Audience · a06 | The reference-lightness fix drew every hue at the dimmest hue's level, so the world lost about half its luminance and a quarter to a third of its chroma — *"the chroma cost the record says was avoided"* | **Accepted in full; the fix was half-done and is now finished in OKLab.** Each state has an **absolute** relative-luminance rung — 0.30 / 0.44 / 0.57 / 0.69 / 0.80 — and a hue is taken to its rung with its hue angle fixed and chroma reduced only as far as the sRGB gamut requires. Measured on 07: **selected 0.897, search hit 0.795, unplaced 0.669, connected 0.507, plain 0.346.** Plain amber's saturation is back to **0.96 from 0.35**. `DIRECTION.md` D-015. |
| J2 | Art Director · a07 | The ladder is monotonic but its top is collapsed: the selected-to-search-hit step is **0.014** while two nodes in the *same* state differ by 0.033 — above the third rung the ladder is carried by ring geometry alone | **Fixed, and measured against the number asked for.** Every step is now at least **0.102**, against the 0.05 requested; the residual variance *within* a rung is **0.002**, down from 0.033. |
| J3 | Auditor · a12 | The provenance line is cut mid-word and has lost the `camera frozen from 11` clause, which is what licenses reading identical pixels between 11 and 12 as identical world positions | **Fixed.** Captions are two lines and each is sized to its own panel, so a clause can no longer be pushed off the frame — a caption that will not fit is split, never truncated. `CAMERA FROZEN FROM 11` is set in caps on the second line. |
| J4 | Auditor · a06 | `DIFF.json` called six artifacts *unchanged* while the node-state ladder was rebuilt underneath them — the unplaced core fell from 0.997 to 0.461, which is the entire subject of artifact 06. SSIM is blind to it because the structure did not move | **Fixed as prescribed.** The diff now masks to pixels above the ground and compares **peak luminance, mean luminance and lit-pixel count** cycle over cycle, beside SSIM. A move of more than 10 % in any of them forces `changed` regardless of SSIM, with the numbers in the row. |
| J5 | Auditor · a03 | Nothing on the AR hero or on artifact 16 says the Android surface is Chromium under a device profile rather than a physical device — the disclosure 05, 11 and 12 all carry | **Fixed.** The lens tag carries it on every frame of both, read from the runtime rather than typed: `chromium 141.0.7390.37 · android device profile` and, in AR, `real orientation + touch events · no camera pass-through`. |
| J6 | Audience · a03 | Nothing in the picture marks the hero as AR rather than as a second canvas, and there is no in-frame note of what stands in for the phone camera | **Fixed, both halves.** The absence is declared on the frame in the same style as artifact 05's synthesised-capture banner. And the AR lens has an affordance a desk lens has no use for: a **reticle that names the node the device is pointed at**, visible in a still. |
| J7 | Auditor · a17 | The closed-fist cluster grab — the only operation in the build that writes many positions at once — is the one write path never shown as a frozen-camera before and after | **Fixed, and made a product feature rather than a capture trick.** Every cluster move is now measured by the app and stated on screen: `cluster Koji · 16 nodes moved together · travelled 17.52 · internal arrangement drift 0.000000`. The take holds its camera still through the grab beat, so the cluster is the only thing that moves. |
| J8 | Art Director · a02 | A second tier of labels is faded but not gone, so the whole-brain view reads as two competing text layers — one legible, one a mid-grey smear | **Fixed.** The faded tier ramps to **zero by 16 % coverage**, panels and the frame edge are occluders so no label is cut mid-word, and truncation scales with node density. What it costs is stated on the frame — `N labels hidden at this zoom — move closer to read them` — counted only for nodes actually on screen. |

### The thirteen minor findings

| # | Critic | Finding | Response |
|---|---|---|---|
| J9 | Audience · a06 | Three of the eight unplaced nodes sit **outside** the drawn dashed boundary that the `holding 8` chip counts them into | **Fixed, and it was a real rendering bug.** The shell's uniform is a quad half-extent and the ring is drawn at half the quad, so the boundary had always been drawn at **half the radius the model declares**. It is now sized from the members' own projections every frame, so every node the chip counts is visibly inside it. Recorded as F-017. |
| J10 | Auditor · a03 | The right panel slices labels mid-word at its edge | **Fixed.** The frame edge is reserved in the arbiter, so a label whose best anchor still crosses it re-anchors inward or fades — the same treatment a buried label gets. |
| J11 | Art Director · a14 | The still contradicts itself: the pill reads `Rejected — no trace left on the map` over a panel reading `Suggestion 1 of 4` with an untouched card. Two moments in one frame prove neither | **Fixed as prescribed.** 14 is a rejection-boundary pair: the staged card with the named pair on the left, the same map one click later on the right, with `links unchanged · queue advanced` measured under it. |
| J12 | Auditor · a20 | `substantive: true` was set on a reworded description while the frames were identical at every timestamp | **Fixed.** `substantive` now requires a **measured** output change — the SSIM or subject-luminance test must fire — and a pure description edit is reported as `recipe reworded, output unchanged`. |
| J13 | Auditor · a11 | Both twin composites run on the 11-node map, so the one-model claim is demonstrated only at eleven nodes | **Fixed without moving the artifact off the map where a reader can count.** The twin now also opens the **150-node map on both surfaces in the same take** and prints its position-ledger digest on each half: `map-fermentation 150 nodes · pos sha 2e0c939c6c — same both sockets`. |
| J14 | Auditor · a07 | D-013 quotes measurements that cycle 3's own artifact 07 does not show | **Fixed, and the general form of the fault addressed.** `DIRECTION.md` now carries a table giving, for every decision, the cycle it was **taken** in *and* the cycle whose evidence **first shows it**. A decision recorded in the cycle it was taken cannot be visible until the next capture, and the record now says so rather than leaving a reader to find the mismatch. |
| J15 | Art Director · a07 | The connected ring is the least assertive lit state — it reads as a dark halo rather than as a ring | **Fixed.** Ring geometry draws at a fixed **signature lightness** independent of the core's rung, so the core's rung alone carries the ladder and the geometry alone carries the signature. |
| J16 | Art Director · a13 | No frame shows a suggestion rejected for trying to relocate an already-placed node | **Fixed.** The rejection existed in the validator and in the reply fixture, but was being pushed off the end of a three-item list. Rejections that **protected a position** now sort first, and the frame leads with `placement of "Positions are the memory" — that node is already placed — placed positions are not the finder's to change`. |
| J17 | Audience · a17 | No captioned mouse equivalent for Gather, though the button is in every frame | **Fixed.** It was firing, but too briefly to survive a contact sheet. Each mouse equivalent now gets its own beat with room to be sampled, and the take runs 41 s. |
| J18 | Audience · a17 | Nothing identifies which cluster the fist grabbed or shows its arrangement preserved | **Fixed** — the cluster readout in J7 names it and prints the drift. |
| J19 | Audience · a08 | The editor panel clips a label mid-word in both halves, and the same appears in 09 | **Fixed** — panels are occluders in the arbiter now (J8). |
| J20 | Audience · a04 | A minority of labels are faded to near-invisibility, so the frame does not quite deliver "the entire map legible" | **Addressed by reducing the number rather than by adding a floor.** Truncation scales with density, and the candidate set is seventeen anchors, so fewer labels reach the suppressed tier; what remains hidden is **stated on the frame with a count**. A floor was declined for the third cycle running, for the reason the Art Director gives in J8: a half-drawn label is the smear. |
| J21 | Art Director · a02 | Recency chroma is present but does not read at a glance: within a hue family the 10th–90th percentile saturation spread is only 0.37–0.52 | **Fixed by widening the span at the settled end**, which there is now room for: depth no longer competes for saturation (D-014) and the OKLab ladder preserves far more chroma. The channel is unchanged; the span moved from 0.20 to 0.30 of a hue's own chroma. |


## Cycle 5 — the critics' findings and what was done

**Total 85.5/100 · every category above its minimum · REGRESSION-FREE · no
position regression.** 86.75 → 85.5. The cycle is regression-free — the Auditor
declared it so, and all three critics agreed there is no position regression —
but the total fell, because two of my own cycle-4 responses cost more than they
bought.

| Critic | Category | C4 | C5 | Weight | Minimum | |
|---|---|---:|---:|---:|---:|---|
| The Audience | 01 Core workflow | 21.5 | 21 | 25 | 20 | −0.5 |
| The Audience | 02 Landmarks live | 22 | 22 | 25 | 20 | — |
| The Auditor | 03 One model and sacred positions | 17.5 | 17 | 20 | 17 | −0.5 · **hard gate met** |
| The Auditor | 04 Evidence and report integrity | 13 | 13 | 15 | 13 | — · **hard gate met** |
| The Art Director | 05 Quality compliance | 8.5 | 8 | 10 | 8 | −0.5 |
| The Art Director | 06 Finder round-trip | 4.25 | 4.5 | 5 | 4 | +0.25 |
| | **Total** | 86.75 | **85.5** | 100 | | |

Nineteen findings: none blocking, six major, thirteen minor.

**Two self-inflicted costs, named as such.** The Audience: *"this is the
regression I have to call — the two frames whose whole job is legibility got
harder to read this cycle."* The density-scaled truncation I added to answer
cycle 4's collision findings clipped **every** label rather than only the ones
that collided. And the Art Director found the deconflictor *"treats labels as
obstacles and nodes as empty space"* — text was being drawn straight over node
cores, erasing the quietest state in the frame.

### The six major findings

| # | Critic | Finding | Response |
|---|---|---|---|
| K1 | Audience · a09 | The editor is *offered* everywhere and never seen *working*: no frame in the set shows a node's text, colour or label actually changing. *"A quarter of what artifact 09 promises rests on a screenshot of buttons."* | **Fixed.** 09's after panel now differs from its before panel in the node's core hue (coral → teal, with the swatch outline moved), in the text the canvas renders (`Koji-cured egg yolk` → `Koji-cured egg yolk · aged 60d`), and in the new filament — with the coordinate readout identical in both, so the edit is visibly not a move. The artifact **requires** `editorWroteToTheModel`. |
| K2 | Audience · a03 | Most labels in the hero are truncated where cycle 4 rendered them whole, and 04 does it while leaving nearly half its frame width empty. *"A hero frame whose selling point is 'node text legible' should not be the frame where the fewest complete thoughts can be read."* | **Fixed, taking the correction literally.** Every label is built at full length; **how much of it is drawn is a placement decision made per frame**. A label renders whole wherever its box is unclaimed, and shortening is reserved for labels the arbiter could not place at any of its twenty-three anchors — with a fade over the last two glyphs so a shortened name reads as continuing. Coverage dominates the anchor score six to one, so a shortened *clear* placement always beats a full one that could only be placed buried. The framing half is **declined on measurement** — see the rebuttals. |
| K3 | Auditor · a12 | The provenance line describes a 150-node map that is **not on screen** while the frame plainly shows the 11-node map | **Fixed as prescribed.** Each half prints the **shown** map's own figures — `map-talk · 11 nodes · pos sha …` — and the big-map check moved to its own line, labelled `also verified this run, not shown on screen: map-fermentation 150/150 nodes, pos sha … identical on both sockets`. |
| K4 | Auditor · a12 | Both caption lines run off the right edge, taking with them the sentence stating what the property-level merge preserved and the verdict that both sockets agree | **Fixed at the mechanism, not the wording.** Captions wrap to as many lines as they need at `·` boundaries, the strip is sized to hold them, and **`compose` throws** if any clause would be dropped or overflow. A caption that will not fit is now a failed capture. |
| K5 | Art Director · a07 | Label glyphs are drawn on top of node cores — text at 0.87 sitting across a plain core at 0.098. *"The deconflictor treats labels as obstacles and nodes as empty space."* | **Fixed as prescribed.** A node's projected disc counts against a placement **exactly as heavily as another label**, and feeds the same tier decision rather than acting as a tie-break. With six further anchors and a shorter last-resort width, suppressed labels at whole-map framing fell from **36 to 20** while bright-on-bright overlaps stayed at **zero**. |
| K6 | Art Director · a02 | The app declares 51 labels hidden at whole-brain framing and gives a losing label no fallback between full size and nothing | **Fixed by giving it three fallbacks.** A label that cannot be placed whole is tried at 72 %, then 50 %, then 34 % of its glyphs before it is faded at all. Suppressed count at the same framing: **20**, down from 51. |

### The thirteen minor findings

| # | Critic | Finding | Response |
|---|---|---|---|
| K7 | Audience · a19 | The holding chip falls to 4 while the node is still inside the dashed boundary and under the cursor — *"the count reports intent instead of outcome"* | **Fixed at the source.** Placement commits on pointer-**up**. A node in flight is still held: its position tracks the drag, its state does not. Verified across the take — the chip holds at 5 with `UNPLACED, IN HOLDING` at 8.6 s, 10.2 s and 11.6 s, and falls to 4 at 13.0 s when the drag is released. |
| K8 | Audience · a10 | The search-hit ticks are the faintest marks in the composition; the hit is told from a selected node mainly by being brighter, *"which is also what a selected node is"* | **Fixed.** The signature is a full crosshair spanning to 3.3× the core radius at nearly double the weight, so the state is identifiable by **shape** at reading distance. |
| K9 | Audience · a06 | Several holding labels sit far enough from any dot that the pairing is guesswork | **Fixed.** The anchor score carries a distance term, so a far anchor must be meaningfully clearer to win. *"A label that names the wrong thought costs more than one that cannot be read"* — that is the rule now. |
| K10 | Audience · a17 | Three of the four mouse-equivalent chips are named by the **pose** rather than by the input, so the frames never say what a mouse user actually does | **Fixed.** The caption names the input: `Scroll up — the Open palm equivalent`. The vocabulary already knew; the caption was not asking it. |
| K11 | Audience · a03 | The panel titles read as a projection demonstration while the footer says there is no camera pass-through — *"the claim and the evidence read against each other"* | **Fixed as prescribed.** The titles say what the frame proves — `Gyroscopic vantage — device held at heading 34°` / `Turned to heading 96° — every node position unchanged` — and the falsifiable measurement is promoted: *the anchor node travelled 117 px across the frame while its stored position did not change.* |
| K12 | Auditor · a11 | The frame carries no node count and no position hash, so *"node-for-node identical"* can only be judged by counting labels by eye | **Fixed.** Both halves print `map-talk · 11 nodes · pos sha <x> · same ledger both sockets`. |
| K13 | Auditor · a04 | Labels are ellipsised, so many more are drawn but a large share can no longer be identified | **Fixed** — the same change as K2. |
| K14 | Auditor · a12 | The hidden-label badge is itself partly covered by the editor panel, reading `1 label hid` | **Fixed.** The badge exists to declare what the frame is not showing, so it stands down rather than being the thing hidden. |
| K15 | Auditor · a14 | The half-width panel keeps the full-width toolbar, so the rightmost control is cut to `Setti` | **Fixed.** The toolbar gives up spacing before it gives up a control, between desk width and phone width. |
| K16 | Art Director · a07 | The top two rungs shed nearly all chroma — coral at *selected* renders saturation 0.17 against its own 0.71 | **Fixed to the floor the Art Director set.** The ladder's top came down from 0.80 to 0.70, where the worst hue in the palette keeps about half its plain-rung chroma. Coral at *selected* now measures **0.34**. The rungs are evenly spaced 0.11 apart — still more than twice the 0.05 minimum. |
| K17 | Art Director · a06 | The dashed holding boundary measures 0.115, **brighter than a plain node core at 0.098** — the most dominant contour in four artifacts | **Fixed.** The boundary is pinned below the quietest node state. It encodes real state and belongs in the world, but not louder than the nodes it contains. |
| K18 | Art Director · a14 | The still that carries the finder category shows only staging and rejection; no pane shows a suggestion taking effect | **Fixed as prescribed.** 14 is a triptych — staged, **accepted** (`links 6 → 7`, the applied pair named), rejected (queue advanced, links unchanged) — and requires `acceptanceLanded`. |
| K19 | Art Director · a20 | Each contact-sheet tile is 486 px, so the holding badge is unreadable in every tile and the decrement has to be inferred | **Fixed as prescribed.** Sheets are 2×10 at 960 px tiles. The badge, the toasts and the prompt text are all readable. |


## Cycle 6 — the critics' findings and what was done

**Total 88.0/100 · every category above its minimum · REGRESSION-FREE · no
position regression · 20/20 captured as defined · zero declared-claim
failures.** 85.5 → 88.0.

| Critic | Category | C5 | C6 | Weight | Minimum | |
|---|---|---:|---:|---:|---:|---|
| The Audience | 01 Core workflow | 21 | 21.5 | 25 | 20 | +0.5 |
| The Audience | 02 Landmarks live | 22 | 22.5 | 25 | 20 | +0.5 |
| The Auditor | 03 One model and sacred positions | 17 | 17.5 | 20 | 17 | +0.5 · **hard gate met** |
| The Auditor | 04 Evidence and report integrity | 13 | 13.5 | 15 | 13 | +0.5 · **hard gate met** |
| The Art Director | 05 Quality compliance | 8 | 8.5 | 10 | 8 | +0.5 |
| The Art Director | 06 Finder round-trip | 4.5 | 4.5 | 5 | 4 | — |
| | **Total** | 85.5 | **88.0** | 100 | | |

**A process fault in this cycle, recorded rather than tidied away.** The three
critics' verdicts were returned into the conversation and never written to
disk. When the context was cut, the verbatim reports were gone; the scores, the
category splits and the findings below survived only because they had been
carried forward in the progress state. Nothing here is reconstructed from
memory of wording — the findings are stated as findings, and only the phrases
preserved verbatim in that carried-forward state are quoted. **From cycle 7 each
critic's verdict is written to `evidence/critics/<role>-cycle-N.md` as it is
received, before any response is written to it**, so a builder cannot be the
only copy of a score he is not allowed to alter (§09).

### The three majors

| # | Critic | Finding | Response |
|---|---|---|---|
| L1 | Auditor · a17 | The contact sheets stamp their timestamp at the top-left of every tile, over the app's own top bar | **Fixed.** The timestamp sits in a 44 px gutter *under* each tile. The map name, the holding count and the sync state are legible in all twenty tiles of every sheet. |
| L2 | Auditor + Art Director · a14 | The finder-review still draws three full app frames at half scale and leaves its bottom **43 %** (rows 616–1079, measured) black | **Fixed, and it turned up two defects.** The artifact is now two rows: the three whole frames, and under them the same three moments cropped to the pair each panel is about. Building it exposed **F-021** and **F-022** below. |
| L3 | Auditor · a12 | The twin is never *shown* at 150-node scale — the check runs on the same two sockets every cycle and reaches the frame only as the words *"not shown on screen"* | **Fixed as prescribed.** Artifact 12 carries a second row: both surfaces on the 150-node map under one camera copied from the Windows side, each printing its own position-ledger digest. The two ledgers are byte-identical, and the artifact **requires** `bigMapShownOnBothSurfaces` and `bigMapLedgersIdentical`. |

### The minors

| # | Critic | Finding | Response |
|---|---|---|---|
| L4 | all three · a02/a03/a04 | Labels are cut mid-word with no elision mark — *"Starte", "Whole g", "Bulk"* — so *"a viewer cannot tell a short thought from a truncated one"* | **Fixed as prescribed.** Shortening cuts at a **word boundary** and appends the ellipsis glyph there, and a label drawn whole is no longer faded at its tail. Measured over the 37 shortened runs in artifact 04's frame: zero vertical mismatches, ellipsis 0.28–0.64 em after the last surviving glyph in every one. Two placement faults found by probing the instance buffer rather than by eye — the ellipsis carried the below-node block offset unconditionally, and its left edge was recorded in a different coordinate basis from the cut points. |
| L5 | Audience · a08/a09/a17 | The mouse-equivalent caption reads **"mouse-alt-drag — the mouse-alt-drag equivalent"** | **Fixed.** Only a hand pose actually *stood in for* by the mouse gets the equivalence clause; the desk's own inputs are named from a vocabulary table — `Alt-drag`, `Scroll up` — rather than by echoing an event id. |
| L6 | Art Director · a02 | Depth attenuation eats the rung spacing: a connected teal at **0.223** against a plain violet at **0.146**, a spread of 0.077 where the ladder is built on steps of 0.11 | **Fixed at the mechanism — D-016.** Distance may darken a node by at most 0.55 of the gap down to the rung *below its own state*, so the five bands are **disjoint**: whatever two nodes' distances are, a connected node is lighter than every plain node, and so on up the ladder. Depth still costs luminance only and still never touches alpha, so D-014 is bounded, not reopened. |
| L7 | Auditor · a08 | The two panels are not demonstrably camera-frozen, so a reader cannot tell the placement from a re-framing | **Fixed.** 08 records every node's projected point except the dragged one, before and after, and **requires** `cameraFrozenAcrossPanels`. |
| L8 | Auditor · a09 | Opening the editor re-frames the whole map by about 120 px | **Fixed, and the cause was a bug — F-024.** The pan now moves the least that clears the panel rather than re-centring, and `panTarget` converts screen pixels through the projection instead of a tuned constant that was about twice the true scale. Measured at whole-map framing on both maps: **0.0 px** of movement on opening the editor, with the selected node clear of the panel. |
| L9 | Auditor · manifest | `capturedInThisRun` cannot answer whether a frozen set was captured wholly inside the cycle it is filed under | **Fixed.** Every artifact carries `capturedInCycle`, and the manifest carries `allCapturedInThisCycle` and names any stale rows. |
| L11 | Art Director · a04 | The violet district's recency reads flat — on-screen chroma 0.26–0.33 across the whole district | **Declined on measurement, and made checkable.** See the rebuttals: those thoughts were all captured early, so the district *is* settled and the channel is reporting it. What was missing was any way to check that, so the editor now states the selected node's date and its rank — `Captured 2025-06-12 · newer than 70% of this map · mid chroma` — checked against the model by artifact 09's `recencyMatchesModel`, and artifact 04 records the recency and chroma span of every district. |
| L12 | Art Director · a20 | The round-trip never rejects a **placement** — the one finder path that writes a position, on a map whose positions are declared sacred | **Fixed as prescribed.** The take now rejects a placement before accepting one: `Steal the parking-lot bit` stays at `2.056, -10.26, 3.869` with the holding count unchanged at 4, and the next placement is accepted and lands exactly where it was suggested. The artifact **requires** `placementRejectionLeftNoTrace` and `bothRejectionKindsShown`. |
| L10 | Audience · a10 | The search artifact only ever shows a **single** hit, so the state that exists to tell candidates apart is never shown telling anything apart | **Fixed.** The query matches 19 nodes, 13 of them in the final frame, and the artifact **requires** `severalHitsMatched`, `severalHitsShown` and `flownHitCentred`. Rebuilding it exposed **F-025**. |

## Cycle 7 — findings from the work itself

Twelve findings came out of cycles 7 and 8's own work rather than from a critic. Two are
recorded because a capture **failed** on them, which §09 makes a finding rather
than something to route around; two more — F-026 and F-027 — are faults in the
cross-cycle regression instrument itself, which means every "regression-free"
verdict before this cycle was made on a diff that under-reported change.

**F-020 — a declared claim that asserted more than it meant.** Artifact 14's
first `cameraFrozenAcrossPanels` claim compared `screenPositions()` records
verbatim. A node's marker radius is derived from its degree, so accepting a
connection legitimately grows both endpoints, and the capture failed. The claim
was always about the camera; comparing the radius made it assert something else.
It now compares projected points. Recorded because the failure is the finding —
the narrowing is of a claim that was mis-stated, not of the artifact.

**F-021 — a true flag about the wrong suggestion.** Artifact 14 read
`rejectedId` from `suggestions[0]` **before** the accept click, so it held the
id of the **accepted** suggestion; `rejectedIsGone` then passed because that
suggestion had been accepted. This is the same class as F-018: a machine-checked
claim whose subject was not what its name said. The rejected suggestion is now
read off the card immediately before it is rejected, and a new claim,
`rejectedPairUnjoined`, checks the model holds no link between the pair it
named. Shipped as `captured` in cycles 5 and 6.

**F-022 — a bar that could not be met, restated with its reason.** The detail
row's first magnification bar was ×1.0 — the app at its own pixels — and the
capture failed on it: the rejected pair spans **722 px of a 1280 px frame**, so
no 640 px panel can hold both endpoints at that scale. Moving those nodes, or
rejecting a more conveniently placed suggestion instead, would be arranging the
take to suit the frame. The bar is restated as *strictly closer than the frame
above it*, every panel prints its own magnification and crop rectangle, and the
failure is recorded here rather than erased by the restatement.

**F-023 — a recorded decision the code had stopped matching.** D-015's rung
table in `DIRECTION.md` still carried the cycle-4 numbers (0.30 / 0.44 / 0.57 /
0.69 / 0.80) after cycle 5 lowered the whole ladder to 0.26 / 0.37 / 0.48 / 0.59
/ 0.70 to buy chroma back on the top rungs. For two cycles the recorded decision
and the running code disagreed. D-015 now carries a dated amendment recording
the change and its reason; the original decision is left standing rather than
edited. From cycle 7 the numbers are **measured off artifact 07's own frame**,
so the prose and the pixels cannot drift again: 0.288 / 0.425 / 0.562 / 0.676 /
0.801, minimum step 0.114, widest within-rung scatter 0.028, and the capture
fails if the ladder stops climbing or a step stops clearing that scatter.

**F-024 — a pan calibrated by a tuned constant.** `panTarget` converted screen
pixels to world units with `dist * 0.0016`, about **twice** the true scale at
this field of view. A caller asking to clear a panel by 1266 px moved the map by
2500 and threw the view somewhere else — most of what L8's whole-map jump
actually was. It now uses the projection's own `pxPerWorld`, the same conversion
every shader and screen-space measurement in the app already uses.

**F-025 — the arbiter and the draw disagreed again.** A search hit's label is
pushed out to **1.9×** the core radius so it clears the signature's ticks, but
the deconflictor derived its clearance from `screenPositions()`, which reports
the core. During a search, every hit's label was drawn as much as 40 px from the
rectangle reserved for it, and two labels the arbiter had certified as disjoint
landed on top of each other — *"Barley miso, 18 months"* overprinted by
*"Amazake"* in artifact 10. Same class as F-015, in the one case F-015 did not
cover.

**F-031 — a typed name wiped by a background redraw.** Artifact 01's capture
**failed** in cycle 8: `page.waitForFunction` timed out waiting for the map the
driver had just created to appear by name. It had appeared — as *"Untitled
map"*. The maps overlay rebuilds its whole DOM whenever the map list arrives
from the sync service, which can land between a person typing a name and
pressing **Create**; the rebuilt input starts empty, so the name is silently
replaced by the placeholder. Cycle 8's heavier label solver widened that window
enough to hit it every run. The fix is in the app, not the driver: the typed
value survives the redraw. Recorded as a capture failure, and the artifact was
recaptured before any critic read the set.

Its second-order cost is recorded too. Fixing it changed the app bundle after
nineteen of the twenty artifacts had already been captured, so **the whole cycle
was recaptured** rather than shipping a frozen set whose artifacts came from two
different builds. The manifest records one bundle hash per run and that hash
has to be true of every artifact under it.

**F-030 — a frozen set was written to, and nothing was guarding it.** Cycle 8's
first run archived the working evidence directory **into
`evidence/cycles/cycle-7`** — the set three critics had already reviewed. The
archive step writes to `prevDir`, and the F-026 fix had just made `prevDir` the
frozen directory rather than `history/`; one fix to the regression instrument
created a hole in the thing it protects. The run stopped only because copying
`evidence/cycles/` into a subdirectory of itself eventually became structurally
impossible, not because anything checked.

**The first version of this entry said "nothing was lost". That was wrong, and
the way it was wrong is the finding.** The copy got far enough first: **15 of
cycle 7's frozen files were overwritten with cycle 8's working copies** — 02,
03, 04, 06, 07, 10, 11, 12, 13, 14, 17, 18, 19, 20 and the manifest. I then
checked `git status`, saw a clean tree, and concluded nothing had changed. The
tree was clean *because I had already committed the damage* in `11597f3`. And
the guard I wrote in response compared the frozen directory against the
`MANIFEST.json` **inside that directory** — so a whole-directory overwrite
replaced the artifacts and their attestation together, the comparison was
self-consistent, and it reported the set intact. It was structurally incapable
of detecting the one failure it was written for, and it told me so in the cycle
log: *"frozen cycle-7 set verified: every artifact matches its recorded hash."*

It surfaced two steps later and from outside: the cycle-8 **Audience** critic
reported artifacts 02, 04, 06 and 10 as byte-identical to cycle 7. They were
identical because cycle 7's copies had become cycle 8's. Restored with
`git checkout f1d5805 -- evidence/cycles/cycle-7` (15 files differed), and the
stray `critics/` verdicts the same run had copied in were removed, leaving the
set byte-identical to `f1d5805`. Every claim the corrupted baseline supported is
withdrawn: the cycle-8 diff reported 13 of 20 changed against it and is re-run
against the restored set at **18 of 20 changed, 7 substantive**, with 02, 04, 06
and 10 restored to the changed list. The cycle-8 Audience verdict's regression
section rested on the corrupted baseline and is treated as void; its findings
about the cycle-8 files themselves stand.

Three changes. The archive writes to `history/` again, and both the archive and
the freeze exclude `cycles/` and `critics/`. **The ledger now lives outside the
set it describes**: `evidence/cycles/cycle-<n>.sha256`, one `sha256  path` line
per file, written at freeze time and compared before any diff — a
whole-directory overwrite does not carry it along, which is exactly what the
manifest-inside-the-directory version could not manage. And the ledgers for
cycles 2–8 were back-filled only after each set was checked against the commit
that introduced it; `evidence/cycles/README.md` records that provenance rather
than presenting a back-filled hash as a freeze-time one.

The general lesson is not about directories. **A verification that draws its
expected value from the same artifact it is checking cannot fail**, and it will
report success in the exact case it was built for. Twice here the check and the
subject were the same object: `git status` against a tree whose damage I had
committed, and a manifest against the directory containing it.

**F-029 — the ladder's yardstick was mis-named.** Everything about the state
ladder called its measure *relative luminance*, and the function was Rec.601
luma. The renderer writes linear values, so a critic sampling the shipped frame
with the standard Rec.709 definition measured two nodes on one rung at 0.4107
and 0.4713 — a spread of 0.060 against a reported 0.0002, and the plain and
connected rungs inverted. **The ladder was sound; the yardstick was not the one
the word names**, and a measurement only the builder's own sampler can reproduce
is not evidence. `relLum`, the shader's desaturation mix and the harness sampler
are Rec.709 now, so the palette is solved in the space a reader measures in. An
independent sampler over the shipped artifact 07 reproduces the manifest: plain
0.2975 / 0.2984, connected 0.4242 / 0.4249, unplaced 0.5615–0.5637, selected
0.8003 — within-rung spread at most 0.002 against a minimum step of 0.114.
D-015 carries the correction.

**F-028 — a stated measurement that did not reproduce.** This report claimed
**100 % pose accuracy** on the held-out clip. It does not reproduce: re-run in
cycle 7 the same validator measured 98.2 % and then 99.4 %. The probe runs over
the real `getUserMedia` path against a browser-level fake camera (D-003), so it
samples whatever frames the live stream delivers in the time it is given, and on
a loaded box that is not the same set twice — both of those runs shared the
machine with another heavy job. Making it deterministic would mean decoding the
clip and feeding frames straight in, which is the exact shortcut the real-path
requirement exists to prevent, so instead **the measurement is repeated and
reported as a range**: three passes, 99.7 % each, 99.0 % detection, with the
three misses all one pose (`fist` read as `NO_HAND` on 3 of 273 frames). The
per-pass figures are written to `harness/clips/validation.json`. The claim in
the report is corrected to what reproduces.

**F-026 — the regression diff was comparing against the wrong set.** Each cycle
archived the *working* `evidence/` directory to `history/cycle-N` at the start of
the next cycle and diffed against that. Any artifact recaptured between cycles —
which is most of them, since a driver is worked on before the cycle runs — was
therefore already in the "previous" set, and the diff skipped exactly the
artifacts that had changed. Cycle 7 first reported **5 of 20 changed**; against
the frozen cycle-6 set the critics actually reviewed, the figure is **13 changed
and 1 uncomparable**. This is the instrument the Auditor's regression-free
verdict rests on, and it had been under-reporting since the freeze mechanism was
introduced in cycle 2. The diff now uses `evidence/cycles/cycle-N` and prints
which set it used.

**F-027 — two blind spots in the video half of that instrument.** Videos were
compared through their derived contact sheets, and when the sheets changed shape
this cycle SSIM returned no score at all: five of the six videos came back
`uncomparable` **with no reason recorded**, so a change to a review aid silently
disabled the regression check for a third of the set. And the direct fallback
was capped at `-t 4`: artifact 20's take rejects a placement at 24 s, which over
four seconds scored 0.99 and read UNCHANGED, and over its full duration scores
**0.909** against a 0.950 threshold. Videos are now compared over their whole
duration with both streams scaled to 480 px wide — about three seconds a pair —
an uncomparable row states why it could not be compared, and the diff records
which method scored each video and warns that the fallback sits on a different
noise floor from the thresholds, which were calibrated on the sheet method.

The fix is the rectangle; the **guard** is new. `Scene.labelDrawAudit()`
recomputes, from the instance attributes and uniforms the vertex shader reads,
the box each label is actually drawn into, and reports the worst overhang past
its reservation. Artifacts 02, 04 and 10 carry it as a declared claim, so a
frame where the arbiter is reasoning about a layout other than the one drawn is
a **failed capture**. Measured after the fix: 117, 120 and 40 labels audited,
worst overhang **0.00 px** in all three. It also caught a second, smaller
disagreement on the way — a shortened run reserved the ellipsis's advance where
the drawn cell is wider, leaving glyphs 1.63 px outside their own reservation.

## Cycle 7 — the critics' findings and what was done

**Total 82.0/100 · category 05 BELOW its minimum · regression-free by the
Auditor's declaration · no position regression · 20/20 captured as defined.**
88.0 → 82.0. The worst cycle of the run, and the first time a category has
fallen below its minimum.

| Critic | Category | C6 | C7 | Weight | Minimum | |
|---|---|---:|---:|---:|---:|---|
| The Audience | 01 Core workflow | 21.5 | 21 | 25 | 20 | −0.5 |
| The Audience | 02 Landmarks live | 22.5 | 20 | 25 | 20 | −2.5 · at the minimum |
| The Auditor | 03 One model and sacred positions | 17.5 | 18 | 20 | 17 | +0.5 · **hard gate met** |
| The Auditor | 04 Evidence and report integrity | 13.5 | 13 | 15 | 13 | −0.5 · **hard gate met, only just** |
| The Art Director | 05 Quality compliance | 8.5 | **6** | 10 | **8** | −2.5 · **BELOW MINIMUM** |
| The Art Director | 06 Finder round-trip | 4.5 | 4 | 5 | 4 | −0.5 |
| | **Total** | 88.0 | **82.0** | 100 | | |

All three verdicts are in `evidence/critics/`, written down verbatim as they
arrived and before any response was made to them.

**The two critics disagree about whether this cycle regressed, and both are
recorded.** §04 gives the regression call to the Auditor alone, and the Auditor
declares cycle 7 regression-free, having checked the thing that looked like a
regression — the hidden-label count rising from 26 and 17 to 33 and 30 — and
ruled it an improvement: cycle 6 was drawing *silently hard-truncated* labels
(«Beef gar», «Amylase pl», «5% targe») and cycle 7 replaced them with honest
ellipsis and dropped what it could not shorten. The Art Director, judging the
same frames against the legibility clause, called four artifacts regressions —
02, 04, 10 and 13 — and scored category 05 below its minimum. **Both readings
are right about what they measured.** The labels were more honest and there were
fewer of them, and I had taken the second as the price of the first. It was not:
see below.

### The Art Director's two blocking findings

| # | Finding | Response |
|---|---|---|
| C1 | *"Labels are suppressed at whole-brain zoom while half the canvas is empty."* 02 hid **33**, 04 hid **30**, and content in 04 occupied **51 % of frame width** — 930 px of canvas empty while thirty names were dropped for crowding. About 18 more measured 1.79:1 to 2.73:1 against the ground. | **Fixed to the ruling, and past its target.** See the ruling below. Measured on the shipped frames: **02, 04 and 06 now draw every label they have — 150 of 150 — with zero hidden, zero overlaps of any kind, and every drawn label at 3:1 or better.** |
| C2 | *"Link filaments are below the visibility threshold, so the map's connections do not render at all."* The modal filament pixel measured **(26,21,17) against an (18,14,11) ground**, consistent across five districts, and identical in cycle 6 — a carried defect. | **Fixed at the mechanism.** Link alpha was driven down by the same distance fade as everything else, with no floor, so at whole-brain framing every link fell under the threshold at once. The fade now floors at 0.40 of the rest alpha, and a **cross-district** link — the structural claim — is drawn a step stronger than one inside a district. The two modal values are now **(34,27,22) and (46,38,32)**, 1.49:1 and 1.90:1 against the ground. |

### The ruling, and what it took to honour it

The Art Director made a second delegated call: *"when the label solver runs out
of room, it must push labels outward with a short leader into free canvas —
the mechanism already shipped for the holding cluster — rather than dropping
them. Dropping is only permitted when the canvas is genuinely full."*

That is now the rule. There is a **far ring** — twelve directions at four radii —
tried only for the labels the near anchors could not place, and anything placed
on it is drawn with a leader back to its node. Building it exposed two defects
that had been quietly costing labels for cycles:

- **A label the legibility floor had cut to nothing still reserved its
  rectangle**, because the test used the pre-floor weight. Names were being
  pushed off the map to make room for labels that were not being drawn.
- **Coverage did not dominate.** The comment in the scorer has read *"a CLEAR
  placement always beats a covered one, however much shorter or further it is"*
  since cycle 5, and the weight of 6 did not deliver it: a held label's distance
  penalty could outscore a half-buried anchor, the label took the buried one,
  and the floor then cut it. At 1000, any clear placement beats any covered one
  and length and distance decide only among the clear ones.

The Art Director also **ruled D-004 closed**: organic-bioluminescent, with four
binding rules — filled self-luminous cores, state by core luminance first and
ring geometry second, no holographic vocabulary, and saturation reserved for the
district and age encoding. That confirms the decision already recorded and is
not reopened.

### The other findings

| # | Critic | Finding | Response |
|---|---|---|---|
| A1/C10 | Audience · Art Director · a03/a16 | The AR reticle is fixed in screen space, correctly, but names a node **21, 91, 127 and 149 px away** with nothing joining the two; and the hero has no focal point | **Fixed twice over.** A leader runs from the ring's edge to the node the chip names — measured 39.3 px from the ring to the node's own pixel. And the aimed node now takes the top rung of the ladder with its filaments live, without opening the editor, so the brightest thing in the frame is the thing the readout names. |
| A3 | Audience · a10 | Two labels have ink in column 0 while the frame's own audit reports `labelWorstOverhangPx: 0` | **Fixed, and it was a false machine-checked claim in the cycle that added the check.** The audit compared the drawn box against the reserved box and neither was ever compared against the viewport. The frame edge is now a hard constraint with an 8 px margin, and the audit reports off-frame overhang. |
| A4/C4 | Audience · Art Director | Labels are drawn through the nodes they name | **Fixed.** A label's box must clear its own mark by 4 px. |
| B1 | Auditor · a07 | `withinRungSpread` is not reproducible off the frame the recipe says it was measured off | **Fixed at the yardstick — F-029.** The ladder was equalised in Rec.601 luma while everything called it *relative luminance*. Now Rec.709 throughout, and an independent sampler reproduces the manifest. |
| B2/C5 | Auditor · Art Director · a14 | The detail row is clipped by the frame bottom; a "detail" panel at ×0.79 is a reduction; the top row is too small to read the panel | **All three fixed.** The caption strip is solved from the captions actually used (last lit row 1045 of 1079); the magnification is expressed against the panel it is a detail of (×2.09, ×1.5, ×1.5, ×1.37); and a fourth cell crops the card, its controls and the rejection log at **×2.09**. |
| B3 | Auditor · a12 | The node editor covers a placed node in both surfaces of the artifact headlined `noNodeDropped` | **Fixed.** The twin's camera is framed with the editor's band reserved, and the artifact requires that no node sits under any chrome — zero on both surfaces. |
| B8 | Auditor · a18 | The zero-overhang guarantee does not hold in the takes | **Fixed, and the first version of the check was wrong.** It re-projected at call time, so mid-flight it compared boxes reserved at one camera against glyphs drawn at another and reported 178 px. It now uses the positions the deconflictor ran on: 26 samples across the take, worst overhang 0. |
| C3/A10 | Art Director · Audience · a10/a19 | Thirteen co-equal search hits with no focal point; and the core loop is never shown at scale | **Both fixed.** Flying to a hit now selects it — top rung, live filaments, open for editing. And artifact 19 runs the whole loop on the **150-node** map: links 208 → 209, refound by search, position identical at the drop, after the connect and at the end of the flight. |
| C6/C7 | Art Director · a14/a20 | Accept and Reject are visually identical; the rejection log is the least legible block on the panel | **Both fixed.** Accept takes the amber the kind tag already uses; Reject keeps the outline. The log is a list — one entry per line, subject at reading contrast, reason a step below, overflow as a count. |
| A5 | Audience · a16 | Two of seven gestures map to the same operation | **Fixed at the behaviour, not the wording.** In the AR lens the pose is rebuilt from the device's absolute heading every event, so a finger drag on empty space was overwritten within a frame — the gesture fired and nothing lasted. The drag now carries its delta into the gyro base, so it **re-aims** where the heading points. |
| A6 | Audience · a05/a17 | *"Spread the map"* is a camera dolly and the label invites the wrong reading | **Fixed.** They are *Move closer* and *Pull back*. On a map whose premise is that positions are sacred, "spread the map" invites exactly the reading the premise forbids. |
| A7/C8 | Audience · Art Director · a06 | Holding labels are not attributable to their nodes | **Fixed.** Distance costs a held label five times what it costs a placed one, and where the nearest node to a label's box is still not its own, a leader joins them. The artifact requires every held label to be attributable. |
| A8/B4 | Audience · Auditor · a03 | `anchorMovedOnScreen` is an x-component printed as travel across the frame | **Fixed.** 214 px, with the components, matching both critics' own measurements. |
| A9 | Audience · a17 | One mouse equivalent does not name its pose; the cluster chip covers the provenance chip | **Both fixed.** All four desk inputs name the pose they stand in for; the cluster proof stacks under the seed chip. |
| B6/B7 | Auditor · DIFF.json | The diff never names a real pixel change and its buckets total 19 of 20 | **Both fixed.** Each artifact records the counters its own chrome printed and the diff compares them as first-class fields; the buckets sum to the set size. |
| C9 | Art Director · a13 | The map is clipped by the finder panel | **Fixed.** The map is framed after the panel reaches its final width, and the artifact requires that no label sits under the panel. |

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

**Cycles 1 and 2: none.** Every finding was accepted and acted on.

**Cycle 3: one finding declined in part, on the merits, and one correction
declined in favour of the same critic's own stricter alternative.**

*H9 — the Audience asked for a floor under fully-suppressed labels so a name is
never entirely absent at whole-map framing. The Art Director, in the same cycle,
asked for the opposite: that suppression reach alpha 0 so a buried label leaves
no stroke at all (H8).* The two cannot both hold. I followed the Art Director,
because the invariant that makes a dense district readable is that nothing is
drawn where it cannot be read, and a floor under buried labels is exactly the
ghosting the Art Director measured. The Audience's underlying concern — that too
many names vanish — was addressed the other way: the candidate anchor set went
from nine placements to seventeen, so fewer labels reach the suppressed tier at
all. Node markers were added as a placement *preference* rather than as
occupancy for the same reason: scoring them as hard occupancy would have
silenced many more names for no legibility gain.

*H1 — the Auditor's root-cause reading was that the grab beat "appears not to
actually translate the cluster".* It did. Measured properly, the centroid
travelled 17.28 units and the maximum per-member drift across 16 members is
exactly 0.000000 — a rigid translation, which is what the settings reference
promises. The observation was right and the finding was worth every point it
cost: a false flag was sitting inside a record marked `captured`. But the fault
was in the check, not in the behaviour, and the record says so rather than
claiming a fix to something that was never broken.

**Cycle 5: one correction declined on measurement.**

*K2 — the Audience asked for artifact 04 and the AR hero to be framed so the
node cloud fills the usable width, estimating it would buy about 1.5× the
on-screen text size.* The truncation half of that finding was accepted and fixed.
The framing half was tried and reverted.

I measured sixteen camera angles on the 150-node map. The best available width
fill is **47 % against the current angle's 42 %** — about 12 % more linear text
size, not 1.5× — and the frame it produces is worse in every other respect: the
map body climbs to the top, the holding cluster falls into the bottom-left
corner with a dead band between them, and 47 labels are suppressed against 43.
The remaining margin is the map's own aspect — a tall node cloud with the
holding cluster well below it — against a 16:9 frame, and the holding cluster's
position is in a frozen seed that §09 forbids regenerating.

Against that 12 %, re-pinning 04 would break the cycle-over-cycle pixel diff the
Auditor asked for in cycle 4 and used in cycle 5 to certify no position
regression. That is a bad trade, so it was not taken. The measurement is
recorded in the driver beside the pin, not just here.

**No critic score has been altered by the builder.**

One finding was **partly declined on the facts rather than on judgement**: D1
asserted that the label declutter was implemented only in the mind-expansion
lens. It was not — it lives in the shared renderer and applies to every lens.
What the Art Director actually observed was true and worth acting on: artifact
02 was byte-identical to the previous cycle because it had not been recaptured
since the change landed. The correction is a recapture, not a code change, and
cycle 2 makes it.

### Rebuttal — the violet district's flat recency is the seed's, not the channel's

The Art Director measured the violet district's on-screen chroma at 0.26–0.33
and read it as a channel that had gone flat. Measured across artifact 04's frame
and recorded on the artifact itself:

| district | n | recency span | on-screen chroma |
|---|---:|---|---|
| violet | 18 | 0.00 – 0.20 | 0.055 – 0.457 |
| amber | 18 | 0.01 – 0.32 | 0.047 – 0.453 |
| azure | 14 | 0.41 – 0.71 | 0.048 – 0.456 |
| bone | 21 | 0.47 – 1.00 | 0.054 – 0.456 |
| coral | 25 | 0.36 – 1.00 | 0.059 – 0.457 |
| lime | 30 | 0.00 – 0.89 | 0.045 – 0.456 |
| magenta | 12 | 0.01 – 0.85 | 0.050 – 0.354 |
| teal | 12 | 0.02 – 0.82 | 0.099 – 0.455 |

Recency is normalised across the **whole map** (D-007), and the violet district's
thoughts all carry early timestamps: their recency spans 0.00–0.20 of the map's
range. The mix parameter for a plain violet therefore runs 0.36 to 0.49, and at
that hue's plain-rung chroma that is on-screen 0.234 to 0.32 — which is the
0.26–0.33 the Art Director measured. **The district is settled, and the channel
is saying so.** Across the map the channel spans 0.045 to 0.457, an order of
magnitude.

Making that district look more varied would mean either regenerating the seed —
which §09 makes fatal to every position-regression claim in category 03 — or
normalising recency per district, which would make the same colour mean
different ages in different parts of one map, and the legend says it means one
thing.

What the finding did expose is that **nothing in the app let a reader check
it**. The legend declared the channel; no surface stated any node's actual age.
The editor now does, and artifact 09 checks the line against the model rather
than against itself.

## Capture failures

**Seven capture failures have occurred, in cycles 5, 6, 7 and 8.** Every one was
recorded by the harness as `driver-error` or `claim-not-met` rather than passed
off as captured, every one was fixed at its cause, and every one was recaptured
before the set was frozen. Three of the four were caught by machinery that
exists because an earlier cycle's finding demanded it.

**Every frozen, reviewed cycle recorded 20/20 captured as defined**, at or above
every declared minimum resolution and duration. The remaining rows are harness
faults that cost no artifact. All of them are recorded because §09 makes a
silently re-scoped or swallowed failure fatal — a failure is a finding here even
when nothing is lost by it.

| Cycle | Fault | What it cost | Resolution |
|---|---|---|---|
| 8 | Artifact 01 recorded **`driver-error`**: the driver typed a map name, pressed Create, and waited for that name to appear. The map was created as *"Untitled map"* — the overlay had rebuilt itself from a sync response between the typing and the click, and the fresh input started empty | One artifact, one run, before the set was frozen for review. Fixing it changed the app bundle after nineteen artifacts were captured, so the **whole cycle was recaptured** | The typed value survives the redraw. Recorded as F-031: the fault was in the app, not in the driver, and the capture found it |
| 7 | Artifact 14 recorded **`claim-not-met`** on `cameraFrozenAcrossPanels`, a claim that compared whole `screenPositions()` records including a degree-derived marker radius that legitimately grows when a link lands | One artifact, one run, before the set was frozen | The claim compares projected points. Recorded as F-020 — the claim was mis-stated, and the failure is the finding |
| 7 | Artifact 14 recorded **`claim-not-met`** on `detailIsMagnified` at a ×1.0 bar that the geometry of this map cannot meet | One artifact, one run, before the set was frozen | The bar is restated as *strictly closer than the frame above it*, with its reason and every panel's measured magnification on the artifact. The take was **not** rearranged to meet the original bar. Recorded as F-022 |
| 6 | The Wine target was closed on the twin's success path only. When the twin driver threw mid-sequence, the Windows binary, `wineserver` and Xvfb stayed alive and the capture process finished its work and then **never exited** — which reads as a slow capture rather than a leak | Cycle 6's first run hung after capturing; killed and re-run | The target is closed in a `finally`, so the platform boundary is torn down whether the take succeeds or fails |
| 6 | Artifact 12's caption referenced a binding declared after it, so the twin sequence threw. Artifact 11 recorded `driver-error`; artifact 12 recorded **`claim-not-met`**, listing all nine of its declared claims as unmet | Two artifacts in cycle 6's first run; both recaptured before the set was frozen | The after-positions are read before the caption that prints them. **This is the declared-claim gate doing its job**: without it, artifact 12 would have been recorded `captured` with nine `undefined` claims inside it — exactly the fault F-018 describes |
| 6 | `compose` refused a caption whose longest clause had no break point, failing the capture rather than clipping it | One artifact, one run | `wrapCaption` breaks on separators first and then on spaces, so it does not depend on the caller having put separators in the right places |
| 5 | Artifact 14's driver was captured at 960 px wide, and below 1200 px the surface drops the desk-only controls — including the Finder button the artifact is about. `page.click` timed out and the capture was recorded `driver-error` | One artifact in the cycle-5 run; recaptured before the set was frozen | The driver was wrong, not the rule: a narrow surface *should* drop desk controls. Captured at 1280 px instead, which is above the threshold and still a mild downscale into a 960 px panel |
| 1 | The critics read the live `evidence/` directory while fixes were being recaptured into it; `17_hand_vocabulary.mp4` changed under a review and was briefly unreadable | One critic read a half-written file | Each cycle is now frozen to an immutable `evidence/cycles/cycle-N/` before any critic is dispatched, and the briefs point there |
| 1 | The twin driver dragged a node on the Android surface with mouse events, on a surface that listens only for touch — nothing moved, and the sync proof would have been vacuous | Nothing: caught before it shipped | Switched to CDP touch events, and the driver now **throws** if the dragged node's position is unchanged |
| 2 | `run-capture.mjs` exited non-zero *after* all 20 artifacts had passed their checks — a promise left over from a closed browser rejecting during teardown. `cycle.mjs` printed `capture run reported a failure` with no cause attached | Nothing to the evidence set; the diagnostic was lost | Late unhandled rejections and exceptions are now caught, named, written to `MANIFEST.lateFaults` and printed, and `cycle.mjs` reports the exit status and signal |

Every capture failure that has cost an artifact **in a frozen, reviewed set**:
none — artifact 14's cycle-5 failure was fixed and recaptured before the set was
frozen, and the failure is recorded here rather than erased by the recapture.
Every capture whose **definition** was narrowed to make it pass: **none.**
