// A synthetic hand, rendered from the MediaPipe 21-landmark topology.
//
// There is no camera in this container and no way to make one (report.md
// F-004), so the clip that feeds Chromium's fake capture device is generated
// here. The clip is the CAMERA, not the answer: the app still runs real
// MediaPipe over it and classifies the pose from real landmark geometry.
export const HAND_JS = `
const DEG = Math.PI / 180;
// Finger bases on the palm arc, in palm units (wrist at 0,0, middle MCP at 0,1).
const MCP = [ [-0.30, 0.90], [-0.02, 1.00], [0.24, 0.96], [0.47, 0.84] ];
const SEG = [ [0.44,0.27,0.21], [0.49,0.30,0.22], [0.44,0.27,0.20], [0.34,0.21,0.18] ];
const BASE_ANGLE = [ -6, -1, 5, 13 ];        // degrees from straight up
const WIDTH = [ 0.155, 0.160, 0.150, 0.128 ]; // finger half-width at the base

// pose -> { curl per finger (deg per joint), spread (deg), thumb }
export const POSES = {
  spread: { curl:[3,3,3,4],      spread:[-20,-7,8,22],  thumbAng:-64, thumbCurl:6,  label:'spread' },
  gather: { curl:[7,7,7,8],      spread:[10,2,-7,-19],  thumbAng:-26, thumbCurl:10, label:'gather' },
  fist:   { curl:[92,95,95,93],  spread:[-3,-1,1,3],    thumbAng:40,  thumbCurl:26, label:'fist' },
  two:    { curl:[4,4,93,92],    spread:[-16,7,2,4],    thumbAng:38,  thumbCurl:27, label:'two' },
};

function lerp(a,b,t){ return a+(b-a)*t; }
export function blend(p,q,t){
  return { curl: p.curl.map((v,i)=>lerp(v,q.curl[i],t)),
           spread: p.spread.map((v,i)=>lerp(v,q.spread[i],t)),
           thumbAng: lerp(p.thumbAng,q.thumbAng,t),
           thumbCurl: lerp(p.thumbCurl,q.thumbCurl,t) };
}

/** 21 landmarks in palm units, y up. Order matches MediaPipe exactly. */
export function landmarks(p){
  const L = new Array(21);
  L[0] = [0,0];
  // Thumb: CMC, MCP, IP, TIP
  const tSeg = [0.34,0.26,0.22];
  let tx = -0.30, ty = 0.24, ta = 90 + -p.thumbAng;
  L[1] = [tx,ty];
  for(let s=0;s<3;s++){
    ta -= p.thumbCurl;
    tx += Math.cos(ta*DEG)*tSeg[s]; ty += Math.sin(ta*DEG)*tSeg[s];
    L[2+s] = [tx,ty];
  }
  for(let f=0; f<4; f++){
    let [x,y] = MCP[f];
    L[5+f*4] = [x,y];
    let a = 90 - (BASE_ANGLE[f] + p.spread[f]);
    for(let s=0;s<3;s++){
      a -= p.curl[f] * (s===0?1:s===1?1.15:0.95);
      x += Math.cos(a*DEG)*SEG[f][s];
      y += Math.sin(a*DEG)*SEG[f][s];
      L[6+f*4+s] = [x,y];
    }
  }
  return L;
}

const SKIN_HI = '#E7B694', SKIN = '#D39A76', SKIN_LO = '#A9704F';

export function drawHand(ctx, W, H, p, opt={}){
  const scale = opt.scale ?? H*0.30;
  const cx = opt.cx ?? W*0.50, cy = opt.cy ?? H*0.86;
  const rot = (opt.rot ?? 0)*DEG;
  const L = landmarks(p);
  const P = L.map(([x,y])=>{
    const rx = x*Math.cos(rot)-y*Math.sin(rot), ry = x*Math.sin(rot)+y*Math.cos(rot);
    return [cx+rx*scale, cy-ry*scale];
  });

  // Forearm stub, so the hand reads as attached to a person.
  ctx.save();
  const wr = P[0], mid = P[9];
  const ang = Math.atan2(wr[1]-mid[1], wr[0]-mid[0]);
  const armW = scale*0.42;
  const g0 = ctx.createLinearGradient(wr[0]-Math.sin(ang)*armW, wr[1]+Math.cos(ang)*armW,
                                      wr[0]+Math.sin(ang)*armW, wr[1]-Math.cos(ang)*armW);
  g0.addColorStop(0, SKIN_LO); g0.addColorStop(0.45, SKIN); g0.addColorStop(1, SKIN_HI);
  ctx.fillStyle = g0;
  ctx.beginPath();
  ctx.moveTo(wr[0]-Math.sin(ang)*armW, wr[1]+Math.cos(ang)*armW);
  ctx.lineTo(wr[0]+Math.sin(ang)*armW, wr[1]-Math.cos(ang)*armW);
  ctx.lineTo(wr[0]+Math.cos(ang)*scale*2.2+Math.sin(ang)*armW*1.15,
             wr[1]+Math.sin(ang)*scale*2.2-Math.cos(ang)*armW*1.15);
  ctx.lineTo(wr[0]+Math.cos(ang)*scale*2.2-Math.sin(ang)*armW*1.15,
             wr[1]+Math.sin(ang)*scale*2.2+Math.cos(ang)*armW*1.15);
  ctx.closePath(); ctx.fill();
  ctx.restore();

  // Palm: a rounded blob through the wrist and the four MCPs.
  const palmPts = [P[0], P[1], P[5], P[9], P[13], P[17]];
  const pg = ctx.createLinearGradient(P[0][0], P[0][1], P[9][0], P[9][1]);
  pg.addColorStop(0, SKIN_LO); pg.addColorStop(0.5, SKIN); pg.addColorStop(1, SKIN_HI);
  ctx.fillStyle = pg;
  ctx.strokeStyle = pg;
  ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  ctx.lineWidth = scale*0.46;
  ctx.beginPath();
  ctx.moveTo(palmPts[0][0], palmPts[0][1]);
  for (let i=1;i<palmPts.length;i++) ctx.lineTo(palmPts[i][0], palmPts[i][1]);
  ctx.closePath(); ctx.stroke(); ctx.fill();

  // Fingers: tapered rounded strokes, drawn base-first so tips sit on top.
  const chains = [[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20],[1,2,3,4]];
  const w0 = [0.165, 0.170, 0.158, 0.135, 0.205];
  chains.forEach((ch, fi) => {
    for (let s=0; s<ch.length-1; s++){
      const a = P[ch[s]], b = P[ch[s+1]];
      const t = s/(ch.length-1);
      const wA = scale*w0[fi]*(1-0.16*t), wB = scale*w0[fi]*(1-0.16*(t+0.34));
      const gg = ctx.createLinearGradient(a[0]-wA, a[1], a[0]+wA, a[1]);
      gg.addColorStop(0, SKIN_LO); gg.addColorStop(0.45, SKIN); gg.addColorStop(1, SKIN_HI);
      ctx.strokeStyle = gg; ctx.lineWidth = (wA+wB);
      ctx.beginPath(); ctx.moveTo(a[0],a[1]); ctx.lineTo(b[0],b[1]); ctx.stroke();
      ctx.fillStyle = gg;
      ctx.beginPath(); ctx.arc(b[0],b[1], wB*0.98, 0, 7); ctx.fill();
    }
    // Nail-ish highlight at the tip: a small specular cue.
    const tip = P[ch[ch.length-1]];
    ctx.fillStyle = 'rgba(255,236,220,0.30)';
    ctx.beginPath(); ctx.arc(tip[0]-scale*0.02, tip[1]-scale*0.03, scale*w0[fi]*0.46, 0, 7); ctx.fill();
  });

  // Knuckle shading, so the silhouette is not a flat cut-out.
  ctx.globalAlpha = 0.20; ctx.fillStyle = SKIN_LO;
  for (const i of [5,9,13,17,2,6,10,14,18]) {
    ctx.beginPath(); ctx.ellipse(P[i][0], P[i][1], scale*0.075, scale*0.05, 0, 0, 7); ctx.fill();
  }
  ctx.globalAlpha = 1;
  return P;
}

export function drawScene(ctx, W, H, p, opt){
  // A plain, slightly uneven wall: what a webcam actually sees behind a hand.
  const bg = ctx.createLinearGradient(0, 0, W*0.4, H);
  bg.addColorStop(0, '#6E6A63'); bg.addColorStop(0.55, '#5C5850'); bg.addColorStop(1, '#494540');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
  const v = ctx.createRadialGradient(W/2, H/2, H*0.25, W/2, H/2, H*0.92);
  v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(0,0,0,0.34)');
  ctx.fillStyle = v; ctx.fillRect(0, 0, W, H);
  ctx.save();
  ctx.filter = 'blur(0.7px)';
  const P = drawHand(ctx, W, H, p, opt);
  ctx.restore();
  // Sensor grain, deterministic per pixel block.
  const g = ctx.getImageData(0, 0, W, H);
  const d = g.data;
  let seed = 0x9E3779B9;
  for (let i = 0; i < d.length; i += 4) {
    seed ^= seed << 13; seed >>>= 0; seed ^= seed >> 17; seed ^= seed << 5; seed >>>= 0;
    const n = ((seed & 0xff) - 128) * 0.055;
    d[i] += n; d[i + 1] += n; d[i + 2] += n;
  }
  ctx.putImageData(g, 0, 0);
  return P;
}
`;
