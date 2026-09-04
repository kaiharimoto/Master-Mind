#!/usr/bin/env node
// Builds the Windows target: a real win32-x64 Electron application carrying
// the same bundle every other surface runs.
//
// Assembled directly from the official Electron win32-x64 distribution rather
// than through electron-builder. electron-builder's Windows path calls
// rcedit-ia32.exe to rewrite the executable's version resources, which needs a
// 32-bit Wine this container cannot install (see report.md F-007). Everything
// else electron-builder would do — layout, asar-free app tree, renamed
// executable — is done here. What is skipped is only the PE version metadata
// and the custom icon; the application itself is complete and real.
//
// The binary is BUILT, not executed for evidence: see report.md F-007.
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, cpSync, rmSync, renameSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

const SRC = dirname(fileURLToPath(import.meta.url));
const VERSION = JSON.parse(readFileSync(resolve(SRC, 'node_modules/electron/package.json'), 'utf8')).version;
const OUT = resolve(SRC, 'targets/windows/win-unpacked');
const CACHE = resolve(SRC, '.electron-cache');
const ZIP = join(CACHE, `electron-v${VERSION}-win32-x64.zip`);
const URL = `https://github.com/electron/electron/releases/download/v${VERSION}/electron-v${VERSION}-win32-x64.zip`;

const sh = (cmd, args, opts = {}) => spawnSync(cmd, args, { stdio: 'inherit', cwd: SRC, ...opts }).status === 0;

console.log('building the app bundle first…');
if (!sh('node', ['build.mjs'])) process.exit(1);

mkdirSync(CACHE, { recursive: true });
if (!existsSync(ZIP)) {
  console.log(`fetching Electron ${VERSION} win32-x64…`);
  if (!sh('curl', ['-sSL', '--fail', '-o', ZIP, URL])) { console.error('download failed'); process.exit(1); }
}
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
if (!sh('unzip', ['-q', ZIP, '-d', OUT])) process.exit(1);

// The application tree Electron loads on Windows.
const appDir = join(OUT, 'resources/app');
mkdirSync(appDir, { recursive: true });
cpSync(resolve(SRC, 'dist'), join(appDir, 'dist'), { recursive: true });
cpSync(resolve(SRC, 'server'), join(appDir, 'server'), { recursive: true });
cpSync(resolve(SRC, 'electron/main.cjs'), join(appDir, 'main.cjs'));
cpSync(resolve(SRC, '../seeds'), join(appDir, 'seeds'), { recursive: true });
writeFileSync(join(appDir, 'package.json'), JSON.stringify({
  name: 'master-mind', productName: 'Master Mind', version: '1.0.0',
  main: 'main.cjs', author: 'Master Mind',
  description: 'Master Mind — idea mapping in 3D',
}, null, 2));

// Ship it under the product name, as a packaged Electron app does.
if (existsSync(join(OUT, 'electron.exe'))) renameSync(join(OUT, 'electron.exe'), join(OUT, 'Master Mind.exe'));

const walk = (d) => readdirSync(d, { withFileTypes: true }).flatMap(e =>
  e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)]);
const files = walk(OUT);
const bytes = files.reduce((a, f) => a + statSync(f).size, 0);
const exe = join(OUT, 'Master Mind.exe');
const manifest = {
  target: 'windows', arch: 'x64', electron: VERSION,
  executable: 'Master Mind.exe',
  executableBytes: statSync(exe).size,
  executableSha256: createHash('sha256').update(readFileSync(exe)).digest('hex'),
  files: files.length, totalBytes: bytes,
  builtAt: new Date().toISOString(),
  note: 'PE version metadata and icon are not rewritten: that step needs 32-bit Wine, which this container cannot install (report.md F-007).',
};
writeFileSync(resolve(SRC, 'targets/windows/BUILD.json'), JSON.stringify(manifest, null, 2));
console.log(`\nWindows target: ${files.length} files, ${(bytes / 1e6).toFixed(0)} MB`);
console.log(`  ${manifest.executable}  ${(manifest.executableBytes / 1e6).toFixed(1)} MB  sha256 ${manifest.executableSha256.slice(0, 16)}…`);
