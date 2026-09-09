# Master Mind

An idea-mapping tool that visualises, organises and connects ideas in a 3D
space. Built for **Android** and **Windows** at once, with maps synced across
devices. Its two landmark modes are **AR projection** with gyroscope and touch
control on Android, and a **mind expansion** mode driven by webcam hand tracking
on Windows.

**Space is the memory.** You remember where a thought was, and both lenses exist
to put you back inside that place. Node positions are sacred and consistent
across devices; finding and refinding a thought matters more than creating new
ones; layouts are never auto-tidied.

---

## Start here

| I want to… | Read |
|---|---|
| **Use it** — install, click, try the gestures | [`docs/TESTING.md`](docs/TESTING.md) |
| **Build it from nothing** — one command, no interactive step | [`docs/setup.md`](docs/setup.md) |
| **Check the claims** — what was proven, what was not | the final report at the end of [`report.md`](report.md) |
| **See it** | [`evidence/cycles/cycle-15/`](evidence/cycles/cycle-15/) — 20 artifacts, each with a recipe in `docs/capture/` |

```bash
bash src/bootstrap.sh     # from a base OS image: pinned tools, both targets,
                          # 161 seeded positions verified against the fixtures
```

## What it does

- **Capture** a thought in one action; it waits in a dashed **holding** ring
  until you place it.
- **Place** it by dragging it out. It stays exactly there. Nothing tidies it.
- **Connect** thoughts into filaments; **edit** text, colour and label in place.
- **Refind** by search — the view flies to the thought *in its actual place* —
  or by going back to where you remember leaving it.
- **Undo** by coordinate, so a move is always reversible.
- **Sync** across devices: the same map on Windows and Android, node for node.
- **Finder**: export a paste-ready prompt carrying every position, paste any
  reply back, and accept or reject each suggestion one at a time. Placed
  positions are not the finder's to change.

## Honest limits

Both environment substitutions are stamped on the artifacts themselves, not
confessed only here:

- **No camera on the capture machine.** The hand lens runs a real MediaPipe
  HandLandmarker against a rendered clip through Chromium's fake capture device.
  The detector is live and re-solves every frame; the hand it sees is not real.
  Plug in a webcam and the same lens runs on it.
- **No phone.** The AR lens runs on a Chromium Android device profile with real
  `deviceorientation` and touch events and **no camera pass-through**. The
  gyroscope control is real; the see-through half of "AR" is not demonstrated.

The final report lists every unmet gate with its measurement, including the ones
above. The build scored **86.0/100** against a 90 target across fifteen reviewed
cycles, with both hard gates — one model and sacred positions, and evidence
integrity — held in each of the last four.
