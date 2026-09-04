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

## Rebuttals

*None. Every cycle-1 finding was accepted and acted on; no critic score has been
altered by the builder.*

## Capture failures

*None yet — no capture has been attempted.*
