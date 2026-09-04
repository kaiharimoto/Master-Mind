const { chromium } = require('/home/user/Master-Mind/src/node_modules/playwright');
const { serve } = require('/home/user/Master-Mind/harness/serve.cjs');
const ARGS=['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--no-sandbox','--disable-dev-shm-usage','--hide-scrollbars','--force-device-scale-factor=1'];
(async()=>{
  const srv=await serve('/tmp/mmprobe',8731);
  const b=await chromium.launch({args:ARGS});
  const p=await b.newPage({viewport:{width:1920,height:1080},deviceScaleFactor:1});
  p.on('console',m=>console.log('  [page]',m.text()));
  p.on('pageerror',e=>console.log('  [ERR]',e.message));
  await p.goto('http://127.0.0.1:8731/index.html');
  await p.waitForFunction(()=>!!window.__probe,null,{timeout:30000});
  const r=await p.evaluate(n=>window.__probe(n), 60);
  console.log("DIAG",JSON.stringify(await p.evaluate(()=>window.__diag()),null,1));
  console.log(JSON.stringify(r,null,1));
  await p.screenshot({path:'/tmp/mmprobe/shot.png'});
  await b.close(); srv.close();
})();
