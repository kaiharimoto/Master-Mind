# Master Mind 1.0.0 — downloads

## Android — `master-mind-1.0.0.apk` (22 MB)

Built from this commit by `src/build-android.mjs` (Capacitor + Gradle).
`sha256 1d6ae742ef4327ea14af9ba9…` — check it after downloading:

```bash
sha256sum master-mind-1.0.0.apk
```

**Install on a phone**

1. On GitHub, open `release/master-mind-1.0.0.apk` and press **Download raw file**
   (the download button at the top right of the file view). On the phone's
   browser that saves it straight to Downloads.
2. Open it from the notification or from Files. Android will ask you to allow
   installs from that app — **Settings → Install unknown apps** — because this
   is a debug build signed with a debug key, not a Play Store release.
3. Open **Master Mind**. It starts on the maps home with two seeded maps: a
   150-node fermentation notebook and an 11-node talk map.

**What to try first**, in the order the tool is designed around: type a thought
into the field at the top → it lands in the dashed holding ring → drag it out to
a spot you will remember → double-tap it, then tap another to connect them →
search for a word in it and watch the view fly to it *in its actual place*.
Tilt the phone: the AR lens moves the vantage, and no thought moves with it.

Every touch gesture is listed in **Settings**, with the operation it performs.

## Windows

Not in this repository: the packaged Electron app is 188 MB of binaries, over
GitHub's 100 MB per-file limit. Build it in one command — the same command that
produced the artifact set:

```bash
cd src && npm ci && node build.mjs && node build-windows.mjs
# → src/targets/windows/win-unpacked/Master Mind.exe
```

Or take the whole thing from a bare machine, toolchain and all:

```bash
bash src/bootstrap.sh
```

## What this build is

Fifteen reviewed evidence cycles, scored 86.0/100 against a 90 target by three
independent critics per cycle. `report.md` ends with the final report: the
score, every unmet gate with its measurement, and the commands to reproduce any
of it. `docs/TESTING.md` is the short path to using it.

**Two things it does not do**, both declared on the evidence frames themselves:
the hand-tracking lens has only ever seen a rendered hand (there is no camera in
the build environment — plug one in and the same detector runs on it), and the
AR lens is gyroscope and touch with no camera pass-through.
