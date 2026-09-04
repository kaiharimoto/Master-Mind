#!/usr/bin/env node
// Builds the Android target: a real .apk from the same bundle every other
// surface runs, via Capacitor and Gradle.
//
// The APK is BUILT here, not executed: this container has no /dev/kvm, so an
// emulator cannot run (report.md F-003). The Android surface in the evidence
// set is driven in Chromium under a device profile with real touch and real
// DeviceOrientationEvent injection, which exercises the app's own code paths.
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, statSync, writeFileSync, readdirSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const SRC = dirname(fileURLToPath(import.meta.url));
const SDK = process.env.ANDROID_HOME || resolve(SRC, '.android-sdk');

const sh = (cmd, args, opts = {}) => {
  const r = spawnSync(cmd, args, { cwd: SRC, stdio: 'inherit', ...opts,
    env: { ...process.env, ANDROID_HOME: SDK, ANDROID_SDK_ROOT: SDK, ...(opts.env || {}) } });
  return r.status === 0;
};

function ensureSdk() {
  const mgr = join(SDK, 'cmdline-tools/latest/bin/sdkmanager');
  if (!existsSync(mgr)) {
    console.log('fetching Android command-line tools…');
    mkdirSync(join(SDK, 'cmdline-tools'), { recursive: true });
    const zip = join(SDK, 'clt.zip');
    if (!sh('curl', ['-sSL', '-o', zip,
      'https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip'])) return false;
    if (!sh('unzip', ['-q', '-o', zip, '-d', join(SDK, 'cmdline-tools')])) return false;
    if (!sh('mv', [join(SDK, 'cmdline-tools/cmdline-tools'), join(SDK, 'cmdline-tools/latest')])) return false;
  }
  // Non-interactive licence acceptance: no prompt, no manual step (§06).
  spawnSync('bash', ['-lc', `yes | "${mgr}" --sdk_root="${SDK}" --licenses >/dev/null 2>&1`],
    { env: { ...process.env, ANDROID_HOME: SDK } });
  console.log('installing platform 34 and build-tools…');
  return sh(mgr, [`--sdk_root=${SDK}`, 'platform-tools', 'platforms;android-34', 'build-tools;34.0.0'],
    { stdio: 'ignore' });
}

console.log('building the app bundle first…');
if (!sh('node', ['build.mjs'])) process.exit(1);
if (!ensureSdk()) { console.error('Android SDK setup failed'); process.exit(1); }
writeFileSync(join(SDK, 'sdk-ok'), 'ok');

if (!existsSync(resolve(SRC, 'android'))) {
  console.log('creating the Capacitor Android project…');
  if (!sh('npx', ['--yes', 'cap', 'add', 'android'])) process.exit(1);
}
if (!sh('npx', ['--yes', 'cap', 'sync', 'android'])) process.exit(1);
writeFileSync(resolve(SRC, 'android/local.properties'), `sdk.dir=${SDK}\n`);

console.log('running Gradle assembleDebug…');
if (!sh('./gradlew', ['assembleDebug', '--no-daemon'], { cwd: resolve(SRC, 'android') })) process.exit(1);

const apkDir = resolve(SRC, 'android/app/build/outputs/apk/debug');
const apks = existsSync(apkDir) ? readdirSync(apkDir).filter(f => f.endsWith('.apk')) : [];
if (!apks.length) { console.error('no APK produced'); process.exit(1); }
for (const a of apks) console.log(`\nAndroid target: ${a}  ${(statSync(join(apkDir, a)).size / 1e6).toFixed(1)} MB`);
