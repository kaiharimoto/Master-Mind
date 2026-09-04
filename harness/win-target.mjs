#!/usr/bin/env node
// Launches the built Windows target under Wine and hands back a CDP handle.
//
// This is the real win32-x64 Electron application from src/targets/windows,
// running on an Xvfb display. It is used for the Windows side of the twin
// composite so that proof comes from the actual Windows binary rather than
// from the same bundle in a Linux browser (report.md F-007).
import { spawn, spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const EXE_DIR = resolve(ROOT, 'src/targets/windows/win-unpacked');
const DISPLAY = process.env.MM_WIN_DISPLAY || ':77';
const PORT = Number(process.env.MM_WIN_CDP || 9333);

const alive = async () => {
  try {
    const r = await fetch(`http://127.0.0.1:${PORT}/json/version`, { signal: AbortSignal.timeout(2500) });
    return r.ok ? await r.json() : null;
  } catch { return null; }
};

export async function windowsTarget({ timeoutMs = 180000 } = {}) {
  if (!existsSync(resolve(EXE_DIR, 'Master Mind.exe'))) return { available: false, why: 'not built' };
  if (!spawnSync('bash', ['-lc', 'command -v wine']).stdout.toString().trim()) return { available: false, why: 'wine not installed' };

  let v = await alive();
  let xvfb = null, app = null;
  if (!v) {
    if (spawnSync('bash', ['-lc', `DISPLAY=${DISPLAY} xdpyinfo >/dev/null 2>&1`]).status !== 0) {
      xvfb = spawn('Xvfb', [DISPLAY, '-screen', '0', '1920x1200x24', '-nolisten', 'tcp'],
        { stdio: 'ignore', detached: true });
      await new Promise(r => setTimeout(r, 2500));
    }
    app = spawn('wine', ['./Master Mind.exe', '--no-sandbox', `--remote-debugging-port=${PORT}`,
      '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
      { cwd: EXE_DIR, env: { ...process.env, DISPLAY }, stdio: 'ignore', detached: true });
    const t0 = Date.now();
    while (!(v = await alive())) {
      if (Date.now() - t0 > timeoutMs) return { available: false, why: 'CDP never came up' };
      await new Promise(r => setTimeout(r, 2000));
    }
  }
  return {
    available: true, cdpUrl: `http://127.0.0.1:${PORT}`, version: v,
    close: () => {
      try { app && process.kill(-app.pid, 'SIGTERM'); } catch {}
      try { xvfb && process.kill(-xvfb.pid, 'SIGTERM'); } catch {}
    },
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const t = await windowsTarget();
  console.log(JSON.stringify({ available: t.available, why: t.why, ua: t.version?.['User-Agent'] }, null, 1));
  process.exit(t.available ? 0 : 1);
}
