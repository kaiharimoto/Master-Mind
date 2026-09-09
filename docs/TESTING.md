# docs/TESTING.md — how to try Master Mind yourself

Everything here is a command you can run and a thing you can look at. Nothing
asks you to take a claim on trust: where a number is quoted, the command that
produces it is beside it.

`docs/setup.md` is the cold-start recipe — one command from a base OS image.
This file is the shorter path for someone who already has the repository and
wants to *use* the thing.

---

## 1. Run it in five minutes

```bash
bash src/bootstrap.sh          # ~15 min from a bare image; installs pinned tools,
                               # builds both targets, verifies 161 seeded positions
```

Already have Node 22 and the dependencies?

```bash
cd src && npm ci && node build.mjs      # shared bundle
node src/server/sync.mjs &              # the sync service
node harness/serve.cjs 8080 &           # static host
# open http://127.0.0.1:8080/index.html?port=8898
```

**What to do first, in the order the tool is designed around:**

1. Type a thought into the field at the top and press Enter. It lands in the
   dashed **holding** ring, unplaced, and the badge counts it.
2. Drag it out of the ring to somewhere you will remember. It stays exactly
   there — nothing ever tidies a layout.
3. Select it, press **Connect**, click another thought. A filament joins them.
4. Type part of its text into search. The view flies to it *in its actual
   place*, and the breakdown says why each hit matched.
5. Press **Ctrl+Z**. The move comes back, by coordinate.

## 2. The two landmark modes

| | |
|---|---|
| **Android AR** | `src/dist-android/app-debug.apk` — 23 MB, installs on a device or emulator. Tilt the phone: the vantage moves, the thoughts do not. Six touch gestures; the full table is in Settings. |
| **Windows mind expansion** | `src/dist-windows/Master Mind.exe` — a real win32-x64 Electron build. Switch the lens to *Mind expansion* and enable hand tracking in Settings. Four webcam poses: open palm, gathered hand, two fingers, closed fist. |

**Every hand pose has a mouse equivalent** (Settings lists them), so the lens is
usable with no camera at all.

## 3. Verify the claims rather than believing them

```bash
node harness/test-model.mjs      # 11 invariants, incl. "120 edits moved 0 nodes"
node harness/validate-poses.mjs  # detection 99.2 %, pose accuracy 99.5 %
node harness/run-capture.mjs     # recaptures all 20 evidence artifacts
node harness/cycle.mjs N         # capture + diff against cycle N-1 + freeze
```

Every artifact carries its recipe in `docs/capture/<id>.md`, and every claim it
asserts is in `evidence/MANIFEST.json` under that artifact's `result`. A claim
listed in a driver's `requires` that comes out false **fails the capture** — the
artifact is recorded `claim-not-met`, not shipped with a false flag inside it.

To check a frozen set against its own ledger, from outside the process that
wrote it:

```bash
cd evidence/cycles/cycle-15 && sha256sum -c ../cycle-15.sha256
```

## 4. What is substituted, and what that costs you

Both substitutions are declared on the frames themselves, not only here.

- **The webcam.** There is no camera in the capture container, so the hand lens
  is driven by a rendered clip through Chromium's fake capture device. The
  detector is the real MediaPipe HandLandmarker and re-solves every frame — you
  can see confidence and finger-extension telemetry change across consecutive
  frames of one held pose. **What no artifact shows is a real human hand.** Plug
  in a webcam and the same lens runs on it; that is the first thing to try if
  you want to falsify this build.
- **The phone.** The AR lens runs on a Chromium Android device profile with real
  `deviceorientation` and touch events, and **no camera pass-through**. The
  gyroscope control is real; the see-through half of "AR" is not demonstrated.

## 5. Known gaps

Listed in full, with measurements, in the final report at the end of
`report.md`. The short version:

- At whole-map framing about half the thoughts carry no on-canvas label and are
  named in a side list instead. The list is complete and grouped by district,
  but it knows nothing about *where* each thought sits.
- The hand vocabulary's four poses buy three kinds of operation; none of them
  captures, connects or places a thought.
- No frame shows either detector failing and recovering.
