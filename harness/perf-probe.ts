import * as THREE from 'three';
import { Scene } from '../src/app/render/scene.js';
import type { MapDoc } from '../src/app/core/model.js';

declare global { interface Window { __probe: (n: number) => Promise<any>; __diag: () => Promise<any>; } }

async function loadFont(): Promise<[any, THREE.Texture]> {
  const meta = await (await fetch('./font-sdf.json')).json();
  const tex = await new Promise<THREE.Texture>((res, rej) =>
    new THREE.TextureLoader().load('./font-sdf.png', res, undefined, rej));
  return [meta, tex];
}

window.__probe = async (frames: number) => {
  const doc: MapDoc = await (await fetch('./map-fermentation.json')).json();
  const canvas = document.getElementById('c') as HTMLCanvasElement;
  canvas.width = 1920; canvas.height = 1080;
  const [meta, tex] = await loadFont();
  const s = new Scene(canvas, meta, tex);
  s.setDoc(doc);
  s.setSize(1920, 1080);
  s.applyLens('expansion');
  const f = s.fitAll();
  s.pose.target.copy(f.target);
  s.pose.dist = f.dist;
  s.render();
  const gl = s.renderer.getContext();
  const t0 = performance.now();
  for (let i = 0; i < frames; i++) { s.clock = i / 60; s.markDirty(); s.render(); }
  gl.finish();
  const rebuilt = performance.now() - t0;
  const t1 = performance.now();
  for (let i = 0; i < frames; i++) { s.clock = i / 60; s.render(); }
  gl.finish();
  const still = performance.now() - t1;
  return {
    nodes: Object.keys(doc.nodes).length, links: Object.keys(doc.links).length,
    drawCalls: s.renderer.info.render.calls, triangles: s.renderer.info.render.triangles,
    msPerFrameRebuild: +(rebuilt / frames).toFixed(2), fpsRebuild: +(1000 / (rebuilt / frames)).toFixed(1),
    msPerFrameStatic: +(still / frames).toFixed(2), fpsStatic: +(1000 / (still / frames)).toFixed(1),
  };
};

window.__diag = async () => {
  const doc: any = await (await fetch('./map-fermentation.json')).json();
  const canvas = document.getElementById('c') as HTMLCanvasElement;
  canvas.width = 1920; canvas.height = 1080;
  const [meta, tex] = await loadFont();
  const s = new Scene(canvas, meta, tex);
  s.setDoc(doc);
  s.setSize(1920, 1080); s.applyLens('expansion');
  const f = s.fitAll(); s.pose.target.copy(f.target); s.pose.dist = f.dist;
  s.renderer.info.autoReset = false; s.renderer.info.reset();
  s.render();
  const gg = (m: any) => ({ ic: m.geometry.instanceCount, attrs: Object.keys(m.geometry.attributes),
                            idx: !!m.geometry.index, visible: m.visible, prog: !!(m.material as any).program });
  return { info: JSON.parse(JSON.stringify(s.renderer.info.render)),
           nodes: gg(s.nodes.mesh), text: gg(s.text.mesh),
           fil: { attrs: Object.keys(s.filaments.mesh.geometry.attributes), range: s.filaments.mesh.geometry.drawRange },
           camPos: s.camera.position.toArray().map(n=>+n.toFixed(2)), dist: +s.pose.dist.toFixed(1),
           target: s.pose.target.toArray().map(n=>+n.toFixed(2)) };
};
