// Boots the sync service and a static server for the built app.
const { spawn } = require('child_process');
const { serve } = require('/home/user/Master-Mind/harness/serve.cjs');
const ROOT = '/home/user/Master-Mind';

async function launch({ httpPort = 8730, wsPort = 8788, data = null, quiet = true } = {}) {
  const env = { ...process.env, MM_PORT: String(wsPort) };
  if (data) env.MM_DATA = data;
  const sync = spawn('node', [`${ROOT}/src/server/sync.mjs`], { env, stdio: quiet ? ['ignore','pipe','pipe'] : 'inherit' });
  let out = '';
  if (quiet) { sync.stdout.on('data', d => out += d); sync.stderr.on('data', d => out += d); }
  await new Promise((res, rej) => {
    const t0 = Date.now();
    const iv = setInterval(() => {
      if (out.includes('master-mind sync on')) { clearInterval(iv); res(); }
      else if (Date.now() - t0 > 15000) { clearInterval(iv); rej(new Error('sync server did not start: ' + out)); }
    }, 60);
  });
  const http = await serve(`${ROOT}/src/dist`, httpPort);
  return {
    httpPort, wsPort, syncLog: () => out,
    url: (q = '') => `http://127.0.0.1:${httpPort}/index.html?port=${wsPort}${q}`,
    close: () => { try { sync.kill('SIGTERM'); } catch {} try { http.close(); } catch {} },
  };
}
module.exports = { launch, ROOT };
