// Windows target entry point.
//
// The renderer loads the SAME bundle that runs everywhere else (src/dist).
// The sync service is started as a child process so the desktop app is
// self-contained; on a real deployment it would point at a hosted service
// instead (report.md F-006).
const { app, BrowserWindow, shell } = require('electron');
const { spawn } = require('node:child_process');
const path = require('node:path');
const http = require('node:http');
const fs = require('node:fs');

// In development main.cjs sits in src/electron/; in the packaged app it sits at
// the app root beside dist/ and server/. Resolve for both.
const ROOT = fs.existsSync(path.join(__dirname, 'dist')) ? __dirname : path.resolve(__dirname, '..');
const HTTP_PORT = Number(process.env.MM_HTTP_PORT || 8730);
const WS_PORT = Number(process.env.MM_PORT || 8788);

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json',
  '.png': 'image/png', '.wasm': 'application/wasm', '.task': 'application/octet-stream',
  '.ttf': 'font/ttf', '.css': 'text/css' };

function serveDist() {
  const root = path.join(ROOT, 'dist');
  return new Promise(res => {
    http.createServer((req, rep) => {
      const u = decodeURIComponent(req.url.split('?')[0]);
      const f = path.join(root, u === '/' ? '/index.html' : u);
      if (!f.startsWith(root)) { rep.writeHead(403); return rep.end(); }
      fs.readFile(f, (e, d) => {
        if (e) { rep.writeHead(404); return rep.end('not found'); }
        rep.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream' });
        rep.end(d);
      });
    }).listen(HTTP_PORT, '127.0.0.1', res);
  });
}

let sync;
app.whenReady().then(async () => {
  const seeds = fs.existsSync(path.join(ROOT, 'seeds'))
    ? path.join(ROOT, 'seeds') : path.resolve(ROOT, '../seeds');
  sync = spawn(process.execPath, [path.join(ROOT, 'server/sync.mjs')], {
    env: { ...process.env, MM_PORT: String(WS_PORT), ELECTRON_RUN_AS_NODE: '1',
           MM_SEEDS: seeds, MM_DATA: path.join(app.getPath('userData'), 'maps') },
    stdio: 'ignore',
  });
  await serveDist();
  const win = new BrowserWindow({
    width: 1600, height: 950, backgroundColor: '#120E0B', autoHideMenuBar: true,
    title: 'Master Mind',
    webPreferences: { contextIsolation: true, nodeIntegration: false },
  });
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: 'deny' }; });
  win.loadURL(`http://127.0.0.1:${HTTP_PORT}/index.html?surface=windows&port=${WS_PORT}`);
});

app.on('window-all-closed', () => { try { sync && sync.kill(); } catch {} app.quit(); });
