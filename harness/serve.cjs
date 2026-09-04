// Minimal static file server used by the capture harness and the probes.
const http=require('http'),fs=require('fs'),path=require('path');
const MIME={'.html':'text/html','.js':'text/javascript','.mjs':'text/javascript','.json':'application/json',
 '.png':'image/png','.wasm':'application/wasm','.task':'application/octet-stream','.ttf':'font/ttf',
 '.y4m':'video/x-yuv4mpeg2','.css':'text/css','.map':'application/json','.webm':'video/webm'};
function serve(root, port){
  return new Promise(res=>{
    const s=http.createServer((req,rep)=>{
      const u=decodeURIComponent(req.url.split('?')[0]);
      let f=path.join(root, u==='/'?'/index.html':u);
      if(!f.startsWith(root)){rep.writeHead(403);return rep.end();}
      fs.readFile(f,(e,d)=>{
        if(e){rep.writeHead(404);return rep.end('not found: '+u);}
        rep.writeHead(200,{'Content-Type':MIME[path.extname(f)]||'application/octet-stream',
          'Cross-Origin-Opener-Policy':'same-origin','Cross-Origin-Embedder-Policy':'require-corp',
          'Cache-Control':'no-store'});
        rep.end(d);
      });
    });
    s.listen(port,'127.0.0.1',()=>res(s));
  });
}
module.exports={serve};
