var cm=0,Xu=1,hm=2;var eo=1,um=2,jr=3,es=0,Mn=1,Ii=2,Pi=0,Jn=1,$u=2,qu=3,Yu=4,dm=5;var ws=100,fm=101,pm=102,mm=103,gm=104,xm=200,vm=201,ym=202,_m=203,gl=204,xl=205,bm=206,Mm=207,Sm=208,wm=209,Em=210,Am=211,Tm=212,Cm=213,Rm=214,vl=0,yl=1,_l=2,er=3,bl=4,Ml=5,Sl=6,wl=7,Ku=0,Im=1,Pm=2,ui=0,Zu=1,ju=2,Ju=3,Qu=4,ed=5,td=6,nd=7;var id=300,Ps=301,rr=302,Ql=303,ec=304,to=306,El=1e3,Ei=1001,Al=1002,cn=1003,Lm=1004;var no=1005;var en=1006,tc=1007;var Li=1008;var Gn=1009,sd=1010,rd=1011,Jr=1012,nc=1013,di=1014,fi=1015,Ni=1016,ic=1017,sc=1018,Qr=1020,ad=35902,od=35899,ld=1021,cd=1022,Qn=1023,Ai=1026,Ls=1027,hd=1028,rc=1029,Ns=1030,ac=1031;var oc=1033,io=33776,so=33777,ro=33778,ao=33779,lc=35840,cc=35841,hc=35842,uc=35843,dc=36196,fc=37492,pc=37496,mc=37488,gc=37489,oo=37490,xc=37491,vc=37808,yc=37809,_c=37810,bc=37811,Mc=37812,Sc=37813,wc=37814,Ec=37815,Ac=37816,Tc=37817,Cc=37818,Rc=37819,Ic=37820,Pc=37821,Lc=36492,Nc=36494,Dc=36495,Fc=36283,Uc=36284,lo=36285,Oc=36286;var Ua=2300,Tl=2301,pl=2302,Ou=2303,ku=2400,Bu=2401,zu=2402;var Nm=3200;var ud=0,Dm=1,pi="",Bn="srgb",tr="srgb-linear",Oa="linear",mt="srgb";var js=7680;var Vu=519,Fm=512,Um=513,Om=514,kc=515,km=516,Bm=517,Bc=518,zm=519,Hu=35044;var dd="300 es",hi=2e3,ka=2001;function O1(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function k1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Xr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Vm(){let n=Xr("canvas");return n.style.display="block",n}var zp={},$r=null;function fd(...n){let e="THREE."+n.shift();$r?$r("log",e,...n):console.log(e,...n)}function Hm(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ke(...n){n=Hm(n);let e="THREE."+n.shift();if($r)$r("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ze(...n){n=Hm(n);let e="THREE."+n.shift();if($r)$r("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Qs(...n){let e=n.join(" ");e in zp||(zp[e]=!0,ke(...n))}function Gm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Wm={[vl]:yl,[_l]:Sl,[bl]:wl,[er]:Ml,[yl]:vl,[Sl]:_l,[wl]:bl,[Ml]:er},Ti=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var fu=Math.PI/180,Cl=180/Math.PI;function co(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function nt(n,e,t){return Math.max(e,Math.min(t,n))}function B1(n,e){return(n%e+e)%e}function pu(n,e,t){return(1-t)*n+t*e}function Ia(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function En(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Qe=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ci=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(d!==x||l!==u||c!==f||h!==g){let p=l*u+c*f+h*g+d*x;p<0&&(u=-u,f=-f,g=-g,x=-x,p=-p);let m=1-o;if(p<.9995){let A=Math.acos(p),R=Math.sin(A);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R,l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+x*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+x*o;let A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mu.copy(this).projectOnVector(e),this.sub(mu)}reflect(e){return this.sub(mu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mu=new D,Vp=new Ci,Ve=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],x=s[0],p=s[3],m=s[6],A=s[1],R=s[4],M=s[7],b=s[2],S=s[5],w=s[8];return r[0]=a*x+o*A+l*b,r[3]=a*p+o*R+l*S,r[6]=a*m+o*M+l*w,r[1]=c*x+h*A+d*b,r[4]=c*p+h*R+d*S,r[7]=c*m+h*M+d*w,r[2]=u*x+f*A+g*b,r[5]=u*p+f*R+g*S,r[8]=u*m+f*M+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(s*c-h*i)*x,e[2]=(o*i-s*a)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Qs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gu.makeScale(e,t)),this}rotate(e){return Qs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gu.makeRotation(-e)),this}translate(e,t){return Qs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},gu=new Ve,Hp=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gp=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function z1(){let n={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===mt&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(s.r=Wr(s.r),s.g=Wr(s.g),s.b=Wr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pi?Oa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Qs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Qs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[tr]:{primaries:e,whitePoint:i,transfer:Oa,toXYZ:Hp,fromXYZ:Gp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bn},outputColorSpaceConfig:{drawingBufferColorSpace:Bn}},[Bn]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:Hp,fromXYZ:Gp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bn}}}),n}var Je=z1();function Qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Pr,Rl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Pr===void 0&&(Pr=Xr("canvas")),Pr.width=e.width,Pr.height=e.height;let s=Pr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Pr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Qi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Qi(t[i]/255)*255):t[i]=Qi(t[i]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},V1=0,qr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=co(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(xu(s[a].image)):r.push(xu(s[a]))}else r=xu(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function xu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Rl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}var H1=0,vu=new D,bn=class n extends Ti{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ei,s=Ei,r=en,a=Li,o=Qn,l=Gn,c=n.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H1++}),this.uuid=co(),this.name="",this.source=new qr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vu).x}get height(){return this.source.getSize(vu).y}get depth(){return this.source.getSize(vu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==id)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case El:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case Al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case El:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case Al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=id;bn.DEFAULT_ANISOTROPY=1;var Nt=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(c+1)/2,M=(f+1)/2,b=(m+1)/2,S=(h+u)/4,w=(d+x)/4,v=(g+p)/4;return R>M&&R>b?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=S/i,r=w/i):M>b?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=S/s,r=v/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=w/r,s=v/r),this.set(i,s,r,t),this}let A=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(A)<.001&&(A=1),this.x=(p-g)/A,this.y=(d-x)/A,this.z=(u-h)/A,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Il=class extends Ti{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new bn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new qr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},zn=class extends Il{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ba=class extends bn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pl=class extends bn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bt=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,o,l,c,h,d,u,f,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,d,u,f,g,x,p)}set(e,t,i,s,r,a,o,l,c,h,d,u,f,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Lr.setFromMatrixColumn(e,0).length(),r=1/Lr.setFromMatrixColumn(e,1).length(),a=1/Lr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,x=c*d;t[0]=u+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,x=c*d;t[0]=u-x*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-x*d}else if(e.order==="XZY"){let u=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(G1,e,W1)}lookAt(e,t,i){let s=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),xs.crossVectors(i,On),xs.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),xs.crossVectors(i,On)),xs.normalize(),$o.crossVectors(On,xs),s[0]=xs.x,s[4]=$o.x,s[8]=On.x,s[1]=xs.y,s[5]=$o.y,s[9]=On.y,s[2]=xs.z,s[6]=$o.z,s[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],x=i[6],p=i[10],m=i[14],A=i[3],R=i[7],M=i[11],b=i[15],S=s[0],w=s[4],v=s[8],E=s[12],I=s[1],T=s[5],P=s[9],U=s[13],B=s[2],L=s[6],G=s[10],z=s[14],$=s[3],J=s[7],te=s[11],se=s[15];return r[0]=a*S+o*I+l*B+c*$,r[4]=a*w+o*T+l*L+c*J,r[8]=a*v+o*P+l*G+c*te,r[12]=a*E+o*U+l*z+c*se,r[1]=h*S+d*I+u*B+f*$,r[5]=h*w+d*T+u*L+f*J,r[9]=h*v+d*P+u*G+f*te,r[13]=h*E+d*U+u*z+f*se,r[2]=g*S+x*I+p*B+m*$,r[6]=g*w+x*T+p*L+m*J,r[10]=g*v+x*P+p*G+m*te,r[14]=g*E+x*U+p*z+m*se,r[3]=A*S+R*I+M*B+b*$,r[7]=A*w+R*T+M*L+b*J,r[11]=A*v+R*P+M*G+b*te,r[15]=A*E+R*U+M*z+b*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],x=e[7],p=e[11],m=e[15],A=l*f-c*u,R=o*f-c*d,M=o*u-l*d,b=a*f-c*h,S=a*u-l*h,w=a*d-o*h;return t*(x*A-p*R+m*M)-i*(g*A-p*b+m*S)+s*(g*R-x*b+m*w)-r*(g*M-x*S+p*w)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],x=e[13],p=e[14],m=e[15],A=t*o-i*a,R=t*l-s*a,M=t*c-r*a,b=i*l-s*o,S=i*c-r*o,w=s*c-r*l,v=h*x-d*g,E=h*p-u*g,I=h*m-f*g,T=d*p-u*x,P=d*m-f*x,U=u*m-f*p,B=A*U-R*P+M*T+b*I-S*E+w*v;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/B;return e[0]=(o*U-l*P+c*T)*L,e[1]=(s*P-i*U-r*T)*L,e[2]=(x*w-p*S+m*b)*L,e[3]=(u*S-d*w-f*b)*L,e[4]=(l*I-a*U-c*E)*L,e[5]=(t*U-s*I+r*E)*L,e[6]=(p*M-g*w-m*R)*L,e[7]=(h*w-u*M+f*R)*L,e[8]=(a*P-o*I+c*v)*L,e[9]=(i*I-t*P-r*v)*L,e[10]=(g*S-x*M+m*A)*L,e[11]=(d*M-h*S-f*A)*L,e[12]=(o*E-a*T-l*v)*L,e[13]=(t*T-i*E+s*v)*L,e[14]=(x*R-g*b-p*A)*L,e[15]=(h*b-d*R+u*A)*L,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,x=a*h,p=a*d,m=o*d,A=l*c,R=l*h,M=l*d,b=i.x,S=i.y,w=i.z;return s[0]=(1-(x+m))*b,s[1]=(f+M)*b,s[2]=(g-R)*b,s[3]=0,s[4]=(f-M)*S,s[5]=(1-(u+m))*S,s[6]=(p+A)*S,s[7]=0,s[8]=(g+R)*w,s[9]=(p-A)*w,s[10]=(1-(u+x))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Lr.set(s[0],s[1],s[2]).length(),o=Lr.set(s[4],s[5],s[6]).length(),l=Lr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),oi.copy(this);let c=1/a,h=1/o,d=1/l;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=d,oi.elements[9]*=d,oi.elements[10]*=d,t.setFromRotationMatrix(oi),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=hi,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===hi)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ka)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=hi,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s),g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===hi)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===ka)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Lr=new D,oi=new Bt,G1=new D(0,0,0),W1=new D(1,1,1),xs=new D,$o=new D,On=new D,Wp=new Bt,Xp=new Ci,Es=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Wp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xp.setFromEuler(this),this.setFromQuaternion(Xp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Es.DEFAULT_ORDER="XYZ";var za=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},X1=0,$p=new D,Nr=new Ci,Yi=new Bt,qo=new D,Pa=new D,$1=new D,q1=new Ci,qp=new D(1,0,0),Yp=new D(0,1,0),Kp=new D(0,0,1),Zp={type:"added"},Y1={type:"removed"},Dr={type:"childadded",child:null},yu={type:"childremoved",child:null},Vn=class n extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X1++}),this.uuid=co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new D,t=new Es,i=new Ci,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Bt},normalMatrix:{value:new Ve}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(qp,e)}rotateY(e){return this.rotateOnAxis(Yp,e)}rotateZ(e){return this.rotateOnAxis(Kp,e)}translateOnAxis(e,t){return $p.copy(e).applyQuaternion(this.quaternion),this.position.add($p.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qp,e)}translateY(e){return this.translateOnAxis(Yp,e)}translateZ(e){return this.translateOnAxis(Kp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?qo.copy(e):qo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Pa,qo,this.up):Yi.lookAt(qo,Pa,this.up),this.quaternion.setFromRotationMatrix(Yi),s&&(Yi.extractRotation(s.matrixWorld),Nr.setFromRotationMatrix(Yi),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zp),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Y1),yu.child=e,this.dispatchEvent(yu),yu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zp),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,e,$1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,q1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Vn.DEFAULT_UP=new D(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Js=class extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}},K1={type:"move"},Yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(K1)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Js;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Xm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vs={h:0,s:0,l:0},Yo={h:0,s:0,l:0};function _u(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var He=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Je.workingColorSpace){if(e=B1(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=_u(a,r,e+1/3),this.g=_u(a,r,e),this.b=_u(a,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=Bn){function i(r){r!==void 0&&parseFloat(r)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bn){let i=Xm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return Je.workingToColorSpace(xn.copy(this),e),Math.round(nt(xn.r*255,0,255))*65536+Math.round(nt(xn.g*255,0,255))*256+Math.round(nt(xn.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(xn.copy(this),t);let i=xn.r,s=xn.g,r=xn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Bn){Je.workingToColorSpace(xn.copy(this),e);let t=xn.r,i=xn.g,s=xn.b;return e!==Bn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(vs),this.setHSL(vs.h+e,vs.s+t,vs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vs),e.getHSL(Yo);let i=pu(vs.h,Yo.h,t),s=pu(vs.s,Yo.s,t),r=pu(vs.l,Yo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new He;He.NAMES=Xm;var Va=class extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Es,this.environmentIntensity=1,this.environmentRotation=new Es,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},li=new D,Ki=new D,bu=new D,Zi=new D,Fr=new D,Ur=new D,jp=new D,Mu=new D,Su=new D,wu=new D,Eu=new Nt,Au=new Nt,Tu=new Nt,Ss=class n{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),li.subVectors(e,t),s.cross(li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){li.subVectors(s,t),Ki.subVectors(i,t),bu.subVectors(e,t);let a=li.dot(li),o=li.dot(Ki),l=li.dot(bu),c=Ki.dot(Ki),h=Ki.dot(bu),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zi.x),l.addScaledVector(a,Zi.y),l.addScaledVector(o,Zi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Eu.setScalar(0),Au.setScalar(0),Tu.setScalar(0),Eu.fromBufferAttribute(e,t),Au.fromBufferAttribute(e,i),Tu.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Eu,r.x),a.addScaledVector(Au,r.y),a.addScaledVector(Tu,r.z),a}static isFrontFacing(e,t,i,s){return li.subVectors(i,t),Ki.subVectors(e,t),li.cross(Ki).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),li.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Fr.subVectors(s,i),Ur.subVectors(r,i),Mu.subVectors(e,i);let l=Fr.dot(Mu),c=Ur.dot(Mu);if(l<=0&&c<=0)return t.copy(i);Su.subVectors(e,s);let h=Fr.dot(Su),d=Ur.dot(Su);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Fr,a);wu.subVectors(e,r);let f=Fr.dot(wu),g=Ur.dot(wu);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Ur,o);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return jp.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(jp,o);let m=1/(p+x+u);return a=x*m,o=u*m,t.copy(i).addScaledVector(Fr,a).addScaledVector(Ur,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},As=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ci):ci.fromBufferAttribute(r,a),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ko.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ko.copy(i.boundingBox)),Ko.applyMatrix4(e.matrixWorld),this.union(Ko)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(La),Zo.subVectors(this.max,La),Or.subVectors(e.a,La),kr.subVectors(e.b,La),Br.subVectors(e.c,La),ys.subVectors(kr,Or),_s.subVectors(Br,kr),qs.subVectors(Or,Br);let t=[0,-ys.z,ys.y,0,-_s.z,_s.y,0,-qs.z,qs.y,ys.z,0,-ys.x,_s.z,0,-_s.x,qs.z,0,-qs.x,-ys.y,ys.x,0,-_s.y,_s.x,0,-qs.y,qs.x,0];return!Cu(t,Or,kr,Br,Zo)||(t=[1,0,0,0,1,0,0,0,1],!Cu(t,Or,kr,Br,Zo))?!1:(jo.crossVectors(ys,_s),t=[jo.x,jo.y,jo.z],Cu(t,Or,kr,Br,Zo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ji=[new D,new D,new D,new D,new D,new D,new D,new D],ci=new D,Ko=new As,Or=new D,kr=new D,Br=new D,ys=new D,_s=new D,qs=new D,La=new D,Zo=new D,jo=new D,Ys=new D;function Cu(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ys.fromArray(n,r);let o=s.x*Math.abs(Ys.x)+s.y*Math.abs(Ys.y)+s.z*Math.abs(Ys.z),l=e.dot(Ys),c=t.dot(Ys),h=i.dot(Ys);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Zt=new D,Jo=new Qe,Z1=0,ln=class extends Ti{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Z1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Hu,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jo.fromBufferAttribute(this,t),Jo.applyMatrix3(e),this.setXY(t,Jo.x,Jo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ia(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=En(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ia(t,this.array)),t}setX(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ia(t,this.array)),t}setY(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ia(t,this.array)),t}setZ(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ia(t,this.array)),t}setW(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),i=En(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),i=En(i,this.array),s=En(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),i=En(i,this.array),s=En(s,this.array),r=En(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hu&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ha=class extends ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ga=class extends ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var An=class extends ln{constructor(e,t,i){super(new Float32Array(e),t,i)}},j1=new As,Na=new D,Ru=new D,nr=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):j1.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Na.subVectors(e,this.center);let t=Na.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Na,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ru.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Na.copy(e.center).add(Ru)),this.expandByPoint(Na.copy(e.center).sub(Ru))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},J1=0,jn=new Bt,Iu=new Vn,zr=new D,kn=new As,Da=new As,on=new D,Tn=class n extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J1++}),this.uuid=co(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(O1(e)?Ga:Ha)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ve().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,i){return jn.makeTranslation(e,t,i),this.applyMatrix4(jn),this}scale(e,t,i){return jn.makeScale(e,t,i),this.applyMatrix4(jn),this}lookAt(e){return Iu.lookAt(e),Iu.updateMatrix(),this.applyMatrix4(Iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new An(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Da.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(kn.min,Da.min),kn.expandByPoint(on),on.addVectors(kn.max,Da.max),kn.expandByPoint(on)):(kn.expandByPoint(Da.min),kn.expandByPoint(Da.max))}kn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)on.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(on));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)on.fromBufferAttribute(o,c),l&&(zr.fromBufferAttribute(e,c),on.add(zr)),s=Math.max(s,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ln(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new D,l[v]=new D;let c=new D,h=new D,d=new D,u=new Qe,f=new Qe,g=new Qe,x=new D,p=new D;function m(v,E,I){c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,I),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,I),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(T),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(T),o[v].add(x),o[E].add(x),o[I].add(x),l[v].add(p),l[E].add(p),l[I].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let v=0,E=A.length;v<E;++v){let I=A[v],T=I.start,P=I.count;for(let U=T,B=T+P;U<B;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let R=new D,M=new D,b=new D,S=new D;function w(v){b.fromBufferAttribute(s,v),S.copy(b);let E=o[v];R.copy(E),R.sub(b.multiplyScalar(b.dot(E))).normalize(),M.crossVectors(S,E);let T=M.dot(l[v])<0?-1:1;a.setXYZW(v,R.x,R.y,R.z,T)}for(let v=0,E=A.length;v<E;++v){let I=A[v],T=I.start,P=I.count;for(let U=T,B=T+P;U<B;U+=3)w(e.getX(U+0)),w(e.getX(U+1)),w(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,d=new D;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),x=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new ln(u,h,d)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Q1=0,Ts=class extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Q1++}),this.uuid=co(),this.name="",this.type="Material",this.blending=Jn,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gl,this.blendDst=xl,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Jn&&(i.blending=this.blending),this.side!==es&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gl&&(i.blendSrc=this.blendSrc),this.blendDst!==xl&&(i.blendDst=this.blendDst),this.blendEquation!==ws&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(i.stencilFail=this.stencilFail),this.stencilZFail!==js&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Qe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ji=new D,Pu=new D,Qo=new D,bs=new D,Lu=new D,el=new D,Nu=new D,Wa=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,t),Ji.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Pu.copy(e).add(t).multiplyScalar(.5),Qo.copy(t).sub(e).normalize(),bs.copy(this.origin).sub(Pu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Qo),o=bs.dot(this.direction),l=-bs.dot(Qo),c=bs.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Pu).addScaledVector(Qo,u),f}intersectSphere(e,t){Ji.subVectors(e.center,this.origin);let i=Ji.dot(this.direction),s=Ji.dot(Ji)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,t,i,s,r){Lu.subVectors(t,e),el.subVectors(i,e),Nu.crossVectors(Lu,el);let a=this.direction.dot(Nu),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bs.subVectors(this.origin,e);let l=o*this.direction.dot(el.crossVectors(bs,el));if(l<0)return null;let c=o*this.direction.dot(Lu.cross(bs));if(c<0||l+c>a)return null;let h=-o*bs.dot(Nu);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xa=class extends Ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Es,this.combine=Ku,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jp=new Bt,Ks=new Wa,tl=new nr,Qp=new D,nl=new D,il=new D,sl=new D,Du=new D,rl=new D,em=new D,al=new D,hn=class extends Vn{constructor(e=new Tn,t=new Xa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){rl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Du.fromBufferAttribute(d,e),a?rl.addScaledVector(Du,h):rl.addScaledVector(Du.sub(t),h))}t.add(rl)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(r),Ks.copy(e.ray).recast(e.near),!(tl.containsPoint(Ks.origin)===!1&&(Ks.intersectSphere(tl,Qp)===null||Ks.origin.distanceToSquared(Qp)>(e.far-e.near)**2))&&(Jp.copy(r).invert(),Ks.copy(e.ray).applyMatrix4(Jp),!(i.boundingBox!==null&&Ks.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ks)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let p=u[g],m=a[p.materialIndex],A=Math.max(p.start,f.start),R=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let M=A,b=R;M<b;M+=3){let S=o.getX(M),w=o.getX(M+1),v=o.getX(M+2);s=ol(this,m,e,i,c,h,d,S,w,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let A=o.getX(p),R=o.getX(p+1),M=o.getX(p+2);s=ol(this,a,e,i,c,h,d,A,R,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let p=u[g],m=a[p.materialIndex],A=Math.max(p.start,f.start),R=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=A,b=R;M<b;M+=3){let S=M,w=M+1,v=M+2;s=ol(this,m,e,i,c,h,d,S,w,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let A=p,R=p+1,M=p+2;s=ol(this,a,e,i,c,h,d,A,R,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function ey(n,e,t,i,s,r,a,o){let l;if(e.side===Mn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===es,o),l===null)return null;al.copy(o),al.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(al);return c<t.near||c>t.far?null:{distance:c,point:al.clone(),object:n}}function ol(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,nl),n.getVertexPosition(l,il),n.getVertexPosition(c,sl);let h=ey(n,e,t,i,nl,il,sl,em);if(h){let d=new D;Ss.getBarycoord(em,nl,il,sl,d),s&&(h.uv=Ss.getInterpolatedAttribute(s,o,l,c,d,new Qe)),r&&(h.uv1=Ss.getInterpolatedAttribute(r,o,l,c,d,new Qe)),a&&(h.normal=Ss.getInterpolatedAttribute(a,o,l,c,d,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new D,materialIndex:0};Ss.getNormal(nl,il,sl,u.normal),h.face=u,h.barycoord=d}return h}var Ll=class extends bn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=cn,h=cn,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ir=class extends ln{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};var Fu=new D,ty=new D,ny=new Ve,wi=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Fu.subVectors(i,t).cross(ty.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Fu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ny.getNormalMatrix(e),s=this.coplanarPoint(Fu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zs=new nr,iy=new Qe(.5,.5),ll=new D,$a=class{constructor(e=new wi,t=new wi,i=new wi,s=new wi,r=new wi,a=new wi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=hi,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],x=r[9],p=r[10],m=r[11],A=r[12],R=r[13],M=r[14],b=r[15];if(s[0].setComponents(c-a,f-h,m-g,b-A).normalize(),s[1].setComponents(c+a,f+h,m+g,b+A).normalize(),s[2].setComponents(c+o,f+d,m+x,b+R).normalize(),s[3].setComponents(c-o,f-d,m-x,b-R).normalize(),i)s[4].setComponents(l,u,p,M).normalize(),s[5].setComponents(c-l,f-u,m-p,b-M).normalize();else if(s[4].setComponents(c-l,f-u,m-p,b-M).normalize(),t===hi)s[5].setComponents(c+l,f+u,m+p,b+M).normalize();else if(t===ka)s[5].setComponents(l,u,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zs)}intersectsSprite(e){Zs.center.set(0,0,0);let t=iy.distanceTo(e.center);return Zs.radius=.7071067811865476+t,Zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ll.x=s.normal.x>0?e.max.x:e.min.x,ll.y=s.normal.y>0?e.max.y:e.min.y,ll.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ll)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Nl=class extends Ts{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Dl=new D,Fl=new D,tm=new Bt,Fa=new Wa,cl=new nr,Uu=new D,nm=new D,Ul=class extends Vn{constructor(e=new Tn,t=new Nl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Dl.fromBufferAttribute(t,s-1),Fl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Dl.distanceTo(Fl);e.setAttribute("lineDistance",new An(i,1))}else ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(s),cl.radius+=r,e.ray.intersectsSphere(cl)===!1)return;tm.copy(s).invert(),Fa.copy(e.ray).applyMatrix4(tm);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,p=g-1;x<p;x+=c){let m=h.getX(x),A=h.getX(x+1),R=hl(this,e,Fa,l,m,A,x);R&&t.push(R)}if(this.isLineLoop){let x=h.getX(g-1),p=h.getX(f),m=hl(this,e,Fa,l,x,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,p=g-1;x<p;x+=c){let m=hl(this,e,Fa,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=hl(this,e,Fa,l,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function hl(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(Dl.fromBufferAttribute(o,s),Fl.fromBufferAttribute(o,r),t.distanceSqToSegment(Dl,Fl,Uu,nm)>i)return;Uu.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Uu);if(!(c<e.near||c>e.far))return{distance:c,point:nm.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var im=new D,sm=new D,qa=class extends Ul{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)im.fromBufferAttribute(t,s),sm.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+im.distanceTo(sm);e.setAttribute("lineDistance",new An(i,1))}else ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ya=class extends bn{constructor(e=[],t=Ps,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var ts=class extends bn{constructor(e,t,i=di,s,r,a,o=cn,l=cn,c,h=Ai,d=1){if(h!==Ai&&h!==Ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ol=class extends ts{constructor(e,t=di,i=Ps,s,r,a=cn,o=cn,l,c=Ai){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ka=class extends bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Kr=class n extends Tn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new An(c,3)),this.setAttribute("normal",new An(h,3)),this.setAttribute("uv",new An(d,2));function g(x,p,m,A,R,M,b,S,w,v,E){let I=M/w,T=b/v,P=M/2,U=b/2,B=S/2,L=w+1,G=v+1,z=0,$=0,J=new D;for(let te=0;te<G;te++){let se=te*T-U;for(let ie=0;ie<L;ie++){let we=ie*I-P;J[x]=we*A,J[p]=se*R,J[m]=B,c.push(J.x,J.y,J.z),J[x]=0,J[p]=0,J[m]=S>0?1:-1,h.push(J.x,J.y,J.z),d.push(ie/w),d.push(1-te/v),z+=1}}for(let te=0;te<v;te++)for(let se=0;se<w;se++){let ie=u+se+L*te,we=u+se+L*(te+1),je=u+(se+1)+L*(te+1),$e=u+(se+1)+L*te;l.push(ie,we,$e),l.push(we,je,$e),$+=6}o.addGroup(f,$,E),f+=$,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ri=class n extends Tn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let A=m*u-a;for(let R=0;R<c;R++){let M=R*d-r;g.push(M,-A,0),x.push(0,0,1),p.push(R/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let A=0;A<o;A++){let R=A+c*m,M=A+c*(m+1),b=A+1+c*(m+1),S=A+1+c*m;f.push(R,M,S),f.push(M,b,S)}this.setIndex(f),this.setAttribute("position",new An(g,3)),this.setAttribute("normal",new An(x,3)),this.setAttribute("uv",new An(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};function ar(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(rm(s))s.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(rm(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function yn(n){let e={};for(let t=0;t<n.length;t++){let i=ar(n[t]);for(let s in i)e[s]=i[s]}return e}function rm(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function sy(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function pd(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var $m={clone:ar,merge:yn},ry=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ay=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends Ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ry,this.fragmentShader=ay,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=sy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new He().setHex(s.value);break;case"v2":this.uniforms[i].value=new Qe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new D().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Nt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ve().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Bt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},kl=class extends tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Bl=class extends Ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zl=class extends Ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ul(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var Cs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Vl=class extends Cs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ku,endingEnd:ku}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bu:r=e,o=2*t-i;break;case zu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Bu:a=e,l=2*i-t;break;case zu:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),x=g*g,p=x*g,m=-u*p+2*u*x-u*g,A=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*g+1,R=(-1-f)*p+(1.5+f)*x+.5*g,M=f*p-f*x;for(let b=0;b!==o;++b)r[b]=m*a[h+b]+A*a[c+b]+R*a[l+b]+M*a[d+b];return r}},Hl=class extends Cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Gl=class extends Cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Wl=class extends Cs{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-t)/(s-t),x=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*x+a[l+p]*g;return r}let u=o*2,f=e-1;for(let g=0;g!==o;++g){let x=a[c+g],p=a[l+g],m=f*u+g*2,A=d[m],R=d[m+1],M=e*u+g*2,b=h[M],S=h[M+1],w=(i-t)/(s-t),v,E,I,T,P;for(let U=0;U<8;U++){v=w*w,E=v*w,I=1-w,T=I*I,P=T*I;let L=P*t+3*T*w*A+3*I*v*b+E*s-i;if(Math.abs(L)<1e-10)break;let G=3*T*(A-t)+6*I*w*(b-A)+3*v*(s-b);if(Math.abs(G)<1e-10)break;w=w-L/G,w=Math.max(0,Math.min(1,w))}r[g]=P*x+3*T*w*R+3*I*v*S+E*p}return r}},Hn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ul(t,this.TimeBufferType),this.values=ul(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ul(e.times,Array),values:ul(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Wl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ua:t=this.InterpolantFactoryMethodDiscrete;break;case Tl:t=this.InterpolantFactoryMethodLinear;break;case pl:t=this.InterpolantFactoryMethodSmooth;break;case Ou:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ke("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ua;case this.InterpolantFactoryMethodLinear:return Tl;case this.InterpolantFactoryMethodSmooth:return pl;case this.InterpolantFactoryMethodBezier:return Ou}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ze("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&k1(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ze("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===pl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let x=t[d+g];if(x!==t[u+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=Tl;var Rs=class extends Hn{constructor(e,t,i){super(e,t,i)}};Rs.prototype.ValueTypeName="bool";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=Ua;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Xl=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}};Xl.prototype.ValueTypeName="color";var $l=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}};$l.prototype.ValueTypeName="number";var ql=class extends Cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ci.slerpFlat(r,0,a,c-o,a,c,l);return r}},Za=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new ql(this.times,this.values,this.getValueSize(),e)}};Za.prototype.ValueTypeName="quaternion";Za.prototype.InterpolantFactoryMethodSmooth=void 0;var Is=class extends Hn{constructor(e,t,i){super(e,t,i)}};Is.prototype.ValueTypeName="string";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=Ua;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var Yl=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}};Yl.prototype.ValueTypeName="vector";var ml={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(am(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!am(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function am(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Kl=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qm=new Kl,Zr=class{constructor(e){this.manager=e!==void 0?e:qm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Zr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vr=new WeakMap,Zl=class extends Zr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ml.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Vr.get(a);d===void 0&&(d=[],Vr.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=Xr("img");function l(){h(),t&&t(this);let d=Vr.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}Vr.delete(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),ml.remove(`image:${e}`);let u=Vr.get(this)||[];for(let f=0;f<u.length;f++){let g=u[f];g.onError&&g.onError(d)}Vr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ml.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var ja=class extends Zr{constructor(e){super(e)}load(e,t,i,s){let r=new bn,a=new Zl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}};var dl=new D,fl=new Ci,Si=new D,Ja=class extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dl,fl,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,fl,Si.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(dl,fl,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,fl,Si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ms=new D,om=new Qe,lm=new Qe,vn=class extends Ja{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cl*2*Math.atan(Math.tan(fu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z),Ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z)}getViewSize(e,t){return this.getViewBounds(e,om,lm),t.subVectors(lm,om)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fu*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Qa=class extends Ja{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var sr=class extends Tn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Hr=-90,Gr=1,jl=class extends Vn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new vn(Hr,Gr,e,t);s.layers=this.layers,this.add(s);let r=new vn(Hr,Gr,e,t);r.layers=this.layers,this.add(r);let a=new vn(Hr,Gr,e,t);a.layers=this.layers,this.add(a);let o=new vn(Hr,Gr,e,t);o.layers=this.layers,this.add(o);let l=new vn(Hr,Gr,e,t);l.layers=this.layers,this.add(l);let c=new vn(Hr,Gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ka)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Jl=class extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var md="\\[\\]\\.:\\/",oy=new RegExp("["+md+"]","g"),gd="[^"+md+"]",ly="[^"+md.replace("\\.","")+"]",cy=/((?:WC+[\/:])*)/.source.replace("WC",gd),hy=/(WCOD+)?/.source.replace("WCOD",ly),uy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gd),dy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gd),fy=new RegExp("^"+cy+hy+uy+dy+"$"),py=["material","materials","bones","map"],Gu=class{constructor(e,t,i){let s=i||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ct=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(oy,"")}static parseTrackName(e){let t=fy.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);py.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;ze("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=Gu;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var G3=new Float32Array(1);var Wu=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function xd(n,e,t,i){let s=my(i);switch(t){case ld:return n*e;case hd:return n*e/s.components*s.byteLength;case rc:return n*e/s.components*s.byteLength;case Ns:return n*e*2/s.components*s.byteLength;case ac:return n*e*2/s.components*s.byteLength;case cd:return n*e*3/s.components*s.byteLength;case Qn:return n*e*4/s.components*s.byteLength;case oc:return n*e*4/s.components*s.byteLength;case io:case so:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ro:case ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cc:case uc:return Math.max(n,16)*Math.max(e,8)/4;case lc:case hc:return Math.max(n,8)*Math.max(e,8)/2;case dc:case fc:case mc:case gc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case pc:case oo:case xc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case _c:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case bc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case wc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Rc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Pc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Lc:case Nc:case Dc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Fc:case Uc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case lo:case Oc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function my(n){switch(n){case Gn:case sd:return{byteLength:1,components:1};case Jr:case rd:case Ni:return{byteLength:2,components:1};case ic:case sc:return{byteLength:2,components:4};case di:case nc:case fi:return{byteLength:4,components:1};case ad:case od:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function gg(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function xy(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var vy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_y=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,by=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,My=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ey=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ay=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ty=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ry=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Py=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ly=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ny=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Oy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ky=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,By=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Vy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Wy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$y=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ky=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,jy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Jy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,t_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,a_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,h_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,u_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,g_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,x_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,v_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,y_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,__=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,b_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,C_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,F_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,O_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,k_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,V_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,H_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Y_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ib=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ab=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ob=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ub=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,db=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Eb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ab=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Nb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Db=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ub=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ob=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$b=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:vy,alphahash_pars_fragment:yy,alphamap_fragment:_y,alphamap_pars_fragment:by,alphatest_fragment:My,alphatest_pars_fragment:Sy,aomap_fragment:wy,aomap_pars_fragment:Ey,batching_pars_vertex:Ay,batching_vertex:Ty,begin_vertex:Cy,beginnormal_vertex:Ry,bsdfs:Iy,iridescence_fragment:Py,bumpmap_pars_fragment:Ly,clipping_planes_fragment:Ny,clipping_planes_pars_fragment:Dy,clipping_planes_pars_vertex:Fy,clipping_planes_vertex:Uy,color_fragment:Oy,color_pars_fragment:ky,color_pars_vertex:By,color_vertex:zy,common:Vy,cube_uv_reflection_fragment:Hy,defaultnormal_vertex:Gy,displacementmap_pars_vertex:Wy,displacementmap_vertex:Xy,emissivemap_fragment:$y,emissivemap_pars_fragment:qy,colorspace_fragment:Yy,colorspace_pars_fragment:Ky,envmap_fragment:Zy,envmap_common_pars_fragment:jy,envmap_pars_fragment:Jy,envmap_pars_vertex:Qy,envmap_physical_pars_fragment:h_,envmap_vertex:e_,fog_vertex:t_,fog_pars_vertex:n_,fog_fragment:i_,fog_pars_fragment:s_,gradientmap_pars_fragment:r_,lightmap_pars_fragment:a_,lights_lambert_fragment:o_,lights_lambert_pars_fragment:l_,lights_pars_begin:c_,lights_toon_fragment:u_,lights_toon_pars_fragment:d_,lights_phong_fragment:f_,lights_phong_pars_fragment:p_,lights_physical_fragment:m_,lights_physical_pars_fragment:g_,lights_fragment_begin:x_,lights_fragment_maps:v_,lights_fragment_end:y_,lightprobes_pars_fragment:__,logdepthbuf_fragment:b_,logdepthbuf_pars_fragment:M_,logdepthbuf_pars_vertex:S_,logdepthbuf_vertex:w_,map_fragment:E_,map_pars_fragment:A_,map_particle_fragment:T_,map_particle_pars_fragment:C_,metalnessmap_fragment:R_,metalnessmap_pars_fragment:I_,morphinstance_vertex:P_,morphcolor_vertex:L_,morphnormal_vertex:N_,morphtarget_pars_vertex:D_,morphtarget_vertex:F_,normal_fragment_begin:U_,normal_fragment_maps:O_,normal_pars_fragment:k_,normal_pars_vertex:B_,normal_vertex:z_,normalmap_pars_fragment:V_,clearcoat_normal_fragment_begin:H_,clearcoat_normal_fragment_maps:G_,clearcoat_pars_fragment:W_,iridescence_pars_fragment:X_,opaque_fragment:$_,packing:q_,premultiplied_alpha_fragment:Y_,project_vertex:K_,dithering_fragment:Z_,dithering_pars_fragment:j_,roughnessmap_fragment:J_,roughnessmap_pars_fragment:Q_,shadowmap_pars_fragment:eb,shadowmap_pars_vertex:tb,shadowmap_vertex:nb,shadowmask_pars_fragment:ib,skinbase_vertex:sb,skinning_pars_vertex:rb,skinning_vertex:ab,skinnormal_vertex:ob,specularmap_fragment:lb,specularmap_pars_fragment:cb,tonemapping_fragment:hb,tonemapping_pars_fragment:ub,transmission_fragment:db,transmission_pars_fragment:fb,uv_pars_fragment:pb,uv_pars_vertex:mb,uv_vertex:gb,worldpos_vertex:xb,background_vert:vb,background_frag:yb,backgroundCube_vert:_b,backgroundCube_frag:bb,cube_vert:Mb,cube_frag:Sb,depth_vert:wb,depth_frag:Eb,distance_vert:Ab,distance_frag:Tb,equirect_vert:Cb,equirect_frag:Rb,linedashed_vert:Ib,linedashed_frag:Pb,meshbasic_vert:Lb,meshbasic_frag:Nb,meshlambert_vert:Db,meshlambert_frag:Fb,meshmatcap_vert:Ub,meshmatcap_frag:Ob,meshnormal_vert:kb,meshnormal_frag:Bb,meshphong_vert:zb,meshphong_frag:Vb,meshphysical_vert:Hb,meshphysical_frag:Gb,meshtoon_vert:Wb,meshtoon_frag:Xb,points_vert:$b,points_frag:qb,shadow_vert:Yb,shadow_frag:Kb,sprite_vert:Zb,sprite_frag:jb},fe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Fi={basic:{uniforms:yn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:yn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:yn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:yn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:yn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new He(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:yn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:yn([fe.points,fe.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:yn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:yn([fe.common,fe.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:yn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:yn([fe.sprite,fe.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:yn([fe.common,fe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:yn([fe.lights,fe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Fi.physical={uniforms:yn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var zc={r:0,b:0,g:0},Jb=new Bt,xg=new Ve;xg.set(-1,0,0,0,1,0,0,0,1);function Qb(n,e,t,i,s,r){let a=new He(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(A){let R=A.isScene===!0?A.background:null;if(R&&R.isTexture){let M=A.backgroundBlurriness>0;R=e.get(R,M)}return R}function g(A){let R=!1,M=f(A);M===null?p(a,o):M&&M.isColor&&(p(M,1),R=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(A,R){let M=f(R);M&&(M.isCubeTexture||M.mapping===to)?(c===void 0&&(c=new hn(new Kr(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:ar(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Jb.makeRotationFromEuler(R.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(xg),c.material.toneMapped=Je.getTransfer(M.colorSpace)!==mt,(h!==M||d!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new hn(new Ri(2,2),new tn({name:"BackgroundMaterial",uniforms:ar(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=Je.getTransfer(M.colorSpace)!==mt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=n.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function p(A,R){A.getRGB(zc,pd(n)),t.buffers.color.setClear(zc.r,zc.g,zc.b,R,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,R=1){a.set(A),o=R,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,p(a,o)},render:g,addToRenderList:x,dispose:m}}function e2(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(T,P,U,B,L){let G=!1,z=d(T,B,U,P);r!==z&&(r=z,c(r.object)),G=f(T,B,U,L),G&&g(T,B,U,L),L!==null&&e.update(L,n.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(T,P,U,B),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function h(T){return n.deleteVertexArray(T)}function d(T,P,U,B){let L=B.wireframe===!0,G=i[P.id];G===void 0&&(G={},i[P.id]=G);let z=T.isInstancedMesh===!0?T.id:0,$=G[z];$===void 0&&($={},G[z]=$);let J=$[U.id];J===void 0&&(J={},$[U.id]=J);let te=J[L];return te===void 0&&(te=u(l()),J[L]=te),te}function u(T){let P=[],U=[],B=[];for(let L=0;L<t;L++)P[L]=0,U[L]=0,B[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:B,object:T,attributes:{},index:null}}function f(T,P,U,B){let L=r.attributes,G=P.attributes,z=0,$=U.getAttributes();for(let J in $)if($[J].location>=0){let se=L[J],ie=G[J];if(ie===void 0&&(J==="instanceMatrix"&&T.instanceMatrix&&(ie=T.instanceMatrix),J==="instanceColor"&&T.instanceColor&&(ie=T.instanceColor)),se===void 0||se.attribute!==ie||ie&&se.data!==ie.data)return!0;z++}return r.attributesNum!==z||r.index!==B}function g(T,P,U,B){let L={},G=P.attributes,z=0,$=U.getAttributes();for(let J in $)if($[J].location>=0){let se=G[J];se===void 0&&(J==="instanceMatrix"&&T.instanceMatrix&&(se=T.instanceMatrix),J==="instanceColor"&&T.instanceColor&&(se=T.instanceColor));let ie={};ie.attribute=se,se&&se.data&&(ie.data=se.data),L[J]=ie,z++}r.attributes=L,r.attributesNum=z,r.index=B}function x(){let T=r.newAttributes;for(let P=0,U=T.length;P<U;P++)T[P]=0}function p(T){m(T,0)}function m(T,P){let U=r.newAttributes,B=r.enabledAttributes,L=r.attributeDivisors;U[T]=1,B[T]===0&&(n.enableVertexAttribArray(T),B[T]=1),L[T]!==P&&(n.vertexAttribDivisor(T,P),L[T]=P)}function A(){let T=r.newAttributes,P=r.enabledAttributes;for(let U=0,B=P.length;U<B;U++)P[U]!==T[U]&&(n.disableVertexAttribArray(U),P[U]=0)}function R(T,P,U,B,L,G,z){z===!0?n.vertexAttribIPointer(T,P,U,L,G):n.vertexAttribPointer(T,P,U,B,L,G)}function M(T,P,U,B){x();let L=B.attributes,G=U.getAttributes(),z=P.defaultAttributeValues;for(let $ in G){let J=G[$];if(J.location>=0){let te=L[$];if(te===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(te=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(te=T.instanceColor)),te!==void 0){let se=te.normalized,ie=te.itemSize,we=e.get(te);if(we===void 0)continue;let je=we.buffer,$e=we.type,Y=we.bytesPerElement,ne=$e===n.INT||$e===n.UNSIGNED_INT||te.gpuType===nc;if(te.isInterleavedBufferAttribute){let ee=te.data,Ne=ee.stride,Me=te.offset;if(ee.isInstancedInterleavedBuffer){for(let be=0;be<J.locationSize;be++)m(J.location+be,ee.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let be=0;be<J.locationSize;be++)p(J.location+be);n.bindBuffer(n.ARRAY_BUFFER,je);for(let be=0;be<J.locationSize;be++)R(J.location+be,ie/J.locationSize,$e,se,Ne*Y,(Me+ie/J.locationSize*be)*Y,ne)}else{if(te.isInstancedBufferAttribute){for(let ee=0;ee<J.locationSize;ee++)m(J.location+ee,te.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ee=0;ee<J.locationSize;ee++)p(J.location+ee);n.bindBuffer(n.ARRAY_BUFFER,je);for(let ee=0;ee<J.locationSize;ee++)R(J.location+ee,ie/J.locationSize,$e,se,ie*Y,ie/J.locationSize*ee*Y,ne)}}else if(z!==void 0){let se=z[$];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(J.location,se);break;case 3:n.vertexAttrib3fv(J.location,se);break;case 4:n.vertexAttrib4fv(J.location,se);break;default:n.vertexAttrib1fv(J.location,se)}}}}A()}function b(){E();for(let T in i){let P=i[T];for(let U in P){let B=P[U];for(let L in B){let G=B[L];for(let z in G)h(G[z].object),delete G[z];delete B[L]}}delete i[T]}}function S(T){if(i[T.id]===void 0)return;let P=i[T.id];for(let U in P){let B=P[U];for(let L in B){let G=B[L];for(let z in G)h(G[z].object),delete G[z];delete B[L]}}delete i[T.id]}function w(T){for(let P in i){let U=i[P];for(let B in U){let L=U[B];if(L[T.id]===void 0)continue;let G=L[T.id];for(let z in G)h(G[z].object),delete G[z];delete L[T.id]}}}function v(T){for(let P in i){let U=i[P],B=T.isInstancedMesh===!0?T.id:0,L=U[B];if(L!==void 0){for(let G in L){let z=L[G];for(let $ in z)h(z[$].object),delete z[$];delete L[G]}delete U[B],Object.keys(U).length===0&&delete i[P]}}}function E(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:I,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:p,disableUnusedAttributes:A}}function t2(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function n2(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Qn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let v=w===Ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Gn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==fi&&!v)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ke("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:A,maxVaryings:R,maxFragmentUniforms:M,maxSamples:b,samples:S}}function i2(n){let e=this,t=null,i=0,s=!1,r=!1,a=new wi,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let A=r?0:i,R=A*4,M=m.clippingState||null;l.value=M,M=h(g,u,R,f);for(let b=0;b!==R;++b)M[b]=t[b];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=f+x*4,A=u.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<m)&&(p=new Float32Array(m));for(let R=0,M=f;R!==x;++R,M+=4)a.copy(d[R]).applyMatrix4(A,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var Ds=4,Ym=[.125,.215,.35,.446,.526,.582],or=20,s2=256,ho=new Qa,Km=new He,vd=null,yd=0,_d=0,bd=!1,r2=new D,Hc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=r2}=r;vd=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vd,yd,_d),this._renderer.xr.enabled=bd,e.scissorTest=!1,ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ps||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vd=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:Ni,format:Qn,colorSpace:tr,depthBuffer:!1},s=Zm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zm(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=a2(r)),this._blurMaterial=l2(r,e,t),this._ggxMaterial=o2(r,e,t)}return s}_compileMaterial(e){let t=new hn(new Tn,e);this._renderer.compile(t,ho)}_sceneToCubeUV(e,t,i,s,r){let l=new vn(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Km),d.toneMapping=ui,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new hn(new Kr,new Xa({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,p=x.material,m=!1,A=e.background;A?A.isColor&&(p.color.copy(A),e.background=null,m=!0):(p.color.copy(Km),m=!0);for(let R=0;R<6;R++){let M=R%3;M===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):M===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));let b=this._cubeSize;ea(s,M*b,R>2?b:0,b,b),d.setRenderTarget(s),m&&d.render(x,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=A}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ps||e.mapping===rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jm());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ea(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ho)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:g}=this,x=this._sizeLods[i],p=3*x*(i>g-Ds?i-g+Ds:0),m=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,ea(r,p,m,3*x,2*x),s.setRenderTarget(r),s.render(o,ho),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,ea(e,p,m,3*x,2*x),s.setRenderTarget(e),s.render(o,ho)}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ze("blur direction must be either latitudinal or longitudinal!");let h=3,d=this._lodMeshes[s];d.material=c;let u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*or-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):or;p>or&&ke(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${or}`);let m=[],A=0;for(let w=0;w<or;++w){let v=w/x,E=Math.exp(-v*v/2);m.push(E),w===0?A+=E:w<p&&(A+=2*E)}for(let w=0;w<m.length;w++)m[w]=m[w]/A;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:R}=this;u.dTheta.value=g,u.mipInt.value=R-i;let M=this._sizeLods[s],b=3*M*(s>R-Ds?s-R+Ds:0),S=4*(this._cubeSize-M);ea(t,b,S,3*M,2*M),l.setRenderTarget(t),l.render(d,ho)}};function a2(n){let e=[],t=[],i=[],s=n,r=n-Ds+1+Ym.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>n-Ds?l=Ym[a-n+Ds-1]:a===0&&(l=0),t.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,x=3,p=2,m=1,A=new Float32Array(x*g*f),R=new Float32Array(p*g*f),M=new Float32Array(m*g*f);for(let S=0;S<f;S++){let w=S%3*2/3-1,v=S>2?0:-1,E=[w,v,0,w+2/3,v,0,w+2/3,v+1,0,w,v,0,w+2/3,v+1,0,w,v+1,0];A.set(E,x*g*S),R.set(u,p*g*S);let I=[S,S,S,S,S,S];M.set(I,m*g*S)}let b=new Tn;b.setAttribute("position",new ln(A,x)),b.setAttribute("uv",new ln(R,p)),b.setAttribute("faceIndex",new ln(M,m)),i.push(new hn(b,null)),s>Ds&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Zm(n,e,t){let i=new zn(n,e,t);return i.texture.mapping=to,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ea(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function o2(n,e,t){return new tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:s2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function l2(n,e,t){let i=new Float32Array(or),s=new D(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function jm(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Jm(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Xc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Gc=class extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ya(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Kr(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:Pi});r.uniforms.tEquirect.value=t;let a=new hn(s,r),o=t.minFilter;return t.minFilter===Li&&(t.minFilter=en),new jl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function c2(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ql||f===ec)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new Gc(g.height);return x.fromEquirectangularTexture(n,u),e.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===Ql||f===ec,x=f===Ps||f===rr;if(g||x){let p=t.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new Hc(n)),p=g?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let A=u.image;return g&&A&&A.height>0||x&&A&&l(A)?(i===null&&(i=new Hc(n)),p=g?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===Ql?u.mapping=Ps:f===ec&&(u.mapping=rr),u}function l(u){let f=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function h2(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Qs("WebGLRenderer: "+i+" extension not supported."),s}}}function u2(n,e,t,i){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],n.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,x=0;if(g===void 0)return;if(f!==null){let A=f.array;x=f.version;for(let R=0,M=A.length;R<M;R+=3){let b=A[R+0],S=A[R+1],w=A[R+2];u.push(b,S,S,w,w,b)}}else{let A=g.array;x=g.version;for(let R=0,M=A.length/3-1;R<M;R+=3){let b=R+0,S=R+1,w=R+2;u.push(b,S,S,w,w,b)}}let p=new(g.count>=65535?Ga:Ha)(u,1);p.version=x;let m=r.get(d);m&&e.remove(m),r.set(d,p)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function d2(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*a),t.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*a,f),t.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let x=0;for(let p=0;p<f;p++)x+=u[p];t.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function f2(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function p2(n,e,t){let i=new WeakMap,s=new Nt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let E=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],R=0;f===!0&&(R=1),g===!0&&(R=2),x===!0&&(R=3);let M=o.attributes.position.count*R,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let S=new Float32Array(M*b*4*d),w=new Ba(S,M,b,d);w.type=fi,w.needsUpdate=!0;let v=R*4;for(let I=0;I<d;I++){let T=p[I],P=m[I],U=A[I],B=M*b*4*I;for(let L=0;L<T.count;L++){let G=L*v;f===!0&&(s.fromBufferAttribute(T,L),S[B+G+0]=s.x,S[B+G+1]=s.y,S[B+G+2]=s.z,S[B+G+3]=0),g===!0&&(s.fromBufferAttribute(P,L),S[B+G+4]=s.x,S[B+G+5]=s.y,S[B+G+6]=s.z,S[B+G+7]=0),x===!0&&(s.fromBufferAttribute(U,L),S[B+G+8]=s.x,S[B+G+9]=s.y,S[B+G+10]=s.z,S[B+G+11]=U.itemSize===4?s.w:1)}}u={count:d,texture:w,size:new Qe(M,b)},i.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function m2(n,e,t,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var g2={[Zu]:"LINEAR_TONE_MAPPING",[ju]:"REINHARD_TONE_MAPPING",[Ju]:"CINEON_TONE_MAPPING",[Qu]:"ACES_FILMIC_TONE_MAPPING",[td]:"AGX_TONE_MAPPING",[nd]:"NEUTRAL_TONE_MAPPING",[ed]:"CUSTOM_TONE_MAPPING"};function x2(n,e,t,i,s,r){let a=new zn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new ts(e,t):void 0}),o=new zn(e,t,{type:Ni,depthBuffer:!1,stencilBuffer:!1}),l=new Tn;l.setAttribute("position",new An([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new An([0,2,0,0,2,0],2));let c=new kl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new hn(l,c),d=new Qa(-1,1,1,-1,0,1),u=null,f=null,g=!1,x,p=null,m=[],A=!1;this.setSize=function(R,M){a.setSize(R,M),o.setSize(R,M);for(let b=0;b<m.length;b++){let S=m[b];S.setSize&&S.setSize(R,M)}},this.setEffects=function(R){m=R,A=m.length>0&&m[0].isRenderPass===!0;let M=a.width,b=a.height;for(let S=0;S<m.length;S++){let w=m[S];w.setSize&&w.setSize(M,b)}},this.begin=function(R,M){if(g||R.toneMapping===ui&&m.length===0)return!1;if(p=M,M!==null){let b=M.width,S=M.height;(a.width!==b||a.height!==S)&&this.setSize(b,S)}return A===!1&&R.setRenderTarget(a),x=R.toneMapping,R.toneMapping=ui,!0},this.hasRenderPass=function(){return A},this.end=function(R,M){R.toneMapping=x,g=!0;let b=a,S=o;for(let w=0;w<m.length;w++){let v=m[w];if(v.enabled!==!1&&(v.render(R,S,b,M),v.needsSwap!==!1)){let E=b;b=S,S=E}}if(u!==R.outputColorSpace||f!==R.toneMapping){u=R.outputColorSpace,f=R.toneMapping,c.defines={},Je.getTransfer(u)===mt&&(c.defines.SRGB_TRANSFER="");let w=g2[f];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,R.setRenderTarget(p),R.render(h,d),p=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var vg=new bn,wd=new ts(1,1),yg=new Ba,_g=new Pl,bg=new Ya,Qm=[],eg=[],tg=new Float32Array(16),ng=new Float32Array(9),ig=new Float32Array(4);function na(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Qm[s];if(r===void 0&&(r=new Float32Array(s),Qm[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function nn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function sn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $c(n,e){let t=eg[e];t===void 0&&(t=new Int32Array(e),eg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function v2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function y2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2fv(this.addr,e),sn(t,e)}}function _2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;n.uniform3fv(this.addr,e),sn(t,e)}}function b2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4fv(this.addr,e),sn(t,e)}}function M2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,i))return;ig.set(i),n.uniformMatrix2fv(this.addr,!1,ig),sn(t,i)}}function S2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,i))return;ng.set(i),n.uniformMatrix3fv(this.addr,!1,ng),sn(t,i)}}function w2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,i))return;tg.set(i),n.uniformMatrix4fv(this.addr,!1,tg),sn(t,i)}}function E2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function A2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2iv(this.addr,e),sn(t,e)}}function T2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3iv(this.addr,e),sn(t,e)}}function C2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4iv(this.addr,e),sn(t,e)}}function R2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function I2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2uiv(this.addr,e),sn(t,e)}}function P2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3uiv(this.addr,e),sn(t,e)}}function L2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4uiv(this.addr,e),sn(t,e)}}function N2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(wd.compareFunction=t.isReversedDepthBuffer()?Bc:kc,r=wd):r=vg,t.setTexture2D(e||r,s)}function D2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||_g,s)}function F2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||bg,s)}function U2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||yg,s)}function O2(n){switch(n){case 5126:return v2;case 35664:return y2;case 35665:return _2;case 35666:return b2;case 35674:return M2;case 35675:return S2;case 35676:return w2;case 5124:case 35670:return E2;case 35667:case 35671:return A2;case 35668:case 35672:return T2;case 35669:case 35673:return C2;case 5125:return R2;case 36294:return I2;case 36295:return P2;case 36296:return L2;case 35678:case 36198:case 36298:case 36306:case 35682:return N2;case 35679:case 36299:case 36307:return D2;case 35680:case 36300:case 36308:case 36293:return F2;case 36289:case 36303:case 36311:case 36292:return U2}}function k2(n,e){n.uniform1fv(this.addr,e)}function B2(n,e){let t=na(e,this.size,2);n.uniform2fv(this.addr,t)}function z2(n,e){let t=na(e,this.size,3);n.uniform3fv(this.addr,t)}function V2(n,e){let t=na(e,this.size,4);n.uniform4fv(this.addr,t)}function H2(n,e){let t=na(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function G2(n,e){let t=na(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function W2(n,e){let t=na(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function X2(n,e){n.uniform1iv(this.addr,e)}function $2(n,e){n.uniform2iv(this.addr,e)}function q2(n,e){n.uniform3iv(this.addr,e)}function Y2(n,e){n.uniform4iv(this.addr,e)}function K2(n,e){n.uniform1uiv(this.addr,e)}function Z2(n,e){n.uniform2uiv(this.addr,e)}function j2(n,e){n.uniform3uiv(this.addr,e)}function J2(n,e){n.uniform4uiv(this.addr,e)}function Q2(n,e,t){let i=this.cache,s=e.length,r=$c(t,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=wd:a=vg;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function eM(n,e,t){let i=this.cache,s=e.length,r=$c(t,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||_g,r[a])}function tM(n,e,t){let i=this.cache,s=e.length,r=$c(t,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||bg,r[a])}function nM(n,e,t){let i=this.cache,s=e.length,r=$c(t,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||yg,r[a])}function iM(n){switch(n){case 5126:return k2;case 35664:return B2;case 35665:return z2;case 35666:return V2;case 35674:return H2;case 35675:return G2;case 35676:return W2;case 5124:case 35670:return X2;case 35667:case 35671:return $2;case 35668:case 35672:return q2;case 35669:case 35673:return Y2;case 5125:return K2;case 36294:return Z2;case 36295:return j2;case 36296:return J2;case 35678:case 36198:case 36298:case 36306:case 35682:return Q2;case 35679:case 36299:case 36307:return eM;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return nM}}var Ed=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=O2(t.type)}},Ad=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=iM(t.type)}},Td=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Md=/(\w+)(\])?(\[|\.)?/g;function sg(n,e){n.seq.push(e),n.map[e.id]=e}function sM(n,e,t){let i=n.name,s=i.length;for(Md.lastIndex=0;;){let r=Md.exec(i),a=Md.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){sg(t,c===void 0?new Ed(o,n,e):new Ad(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Td(o),sg(t,d)),t=d}}}var ta=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);sM(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function rg(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var rM=37297,aM=0;function oM(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var ag=new Ve;function lM(n){Je._getMatrix(ag,Je.workingColorSpace,n);let e=`mat3( ${ag.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case Oa:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function og(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+oM(n.getShaderSource(e),o)}else return r}function cM(n,e){let t=lM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var hM={[Zu]:"Linear",[ju]:"Reinhard",[Ju]:"Cineon",[Qu]:"ACESFilmic",[td]:"AgX",[nd]:"Neutral",[ed]:"Custom"};function uM(n,e){let t=hM[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Vc=new D;function dM(){Je.getLuminanceCoefficients(Vc);let n=Vc.x.toFixed(4),e=Vc.y.toFixed(4),t=Vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function pM(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function mM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function fo(n){return n!==""}function lg(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var gM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cd(n){return n.replace(gM,vM)}var xM=new Map;function vM(n,e){let t=Ke[e];if(t===void 0){let i=xM.get(e);if(i!==void 0)t=Ke[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Cd(t)}var yM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hg(n){return n.replace(yM,_M)}function _M(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ug(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var bM={[eo]:"SHADOWMAP_TYPE_PCF",[jr]:"SHADOWMAP_TYPE_VSM"};function MM(n){return bM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var SM={[Ps]:"ENVMAP_TYPE_CUBE",[rr]:"ENVMAP_TYPE_CUBE",[to]:"ENVMAP_TYPE_CUBE_UV"};function wM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":SM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var EM={[rr]:"ENVMAP_MODE_REFRACTION"};function AM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":EM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var TM={[Ku]:"ENVMAP_BLENDING_MULTIPLY",[Im]:"ENVMAP_BLENDING_MIX",[Pm]:"ENVMAP_BLENDING_ADD"};function CM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":TM[n.combine]||"ENVMAP_BLENDING_NONE"}function RM(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function IM(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=MM(t),c=wM(t),h=AM(t),d=CM(t),u=RM(t),f=fM(t),g=pM(r),x=s.createProgram(),p,m,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fo).join(`
`),m.length>0&&(m+=`
`)):(p=[ug(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),m=[ug(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?Ke.tonemapping_pars_fragment:"",t.toneMapping!==ui?uM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,cM("linearToOutputTexel",t.outputColorSpace),dM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fo).join(`
`)),a=Cd(a),a=lg(a,t),a=cg(a,t),o=Cd(o),o=lg(o,t),o=cg(o,t),a=hg(a),o=hg(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===dd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let R=A+p+a,M=A+m+o,b=rg(s,s.VERTEX_SHADER,R),S=rg(s,s.FRAGMENT_SHADER,M);s.attachShader(x,b),s.attachShader(x,S),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(T){if(n.debug.checkShaderErrors){let P=s.getProgramInfoLog(x)||"",U=s.getShaderInfoLog(b)||"",B=s.getShaderInfoLog(S)||"",L=P.trim(),G=U.trim(),z=B.trim(),$=!0,J=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,b,S);else{let te=og(s,b,"vertex"),se=og(s,S,"fragment");ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+L+`
`+te+`
`+se)}else L!==""?ke("WebGLProgram: Program Info Log:",L):(G===""||z==="")&&(J=!1);J&&(T.diagnostics={runnable:$,programLog:L,vertexShader:{log:G,prefix:p},fragmentShader:{log:z,prefix:m}})}s.deleteShader(b),s.deleteShader(S),v=new ta(s,x),E=mM(s,x)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(x,rM)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=S,this}var PM=0,Rd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Id(e),t.set(e,i)),i}},Id=class{constructor(e){this.id=PM++,this.code=e,this.usedTimes=0}};function LM(n){return n===Ns||n===oo||n===lo}function NM(n,e,t,i,s,r){let a=new za,o=new Rd,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,E,I,T,P,U){let B=T.fog,L=P.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?T.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,$=e.get(v.envMap||G,z),J=$&&$.mapping===to?$.image.height:null,te=f[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&ke("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let se=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ie=se!==void 0?se.length:0,we=0;L.morphAttributes.position!==void 0&&(we=1),L.morphAttributes.normal!==void 0&&(we=2),L.morphAttributes.color!==void 0&&(we=3);let je,$e,Y,ne;if(te){let Ae=Fi[te];je=Ae.vertexShader,$e=Ae.fragmentShader}else{je=v.vertexShader,$e=v.fragmentShader;let Ae=o.getVertexShaderStage(v),Ot=o.getFragmentShaderStage(v);o.update(v,Ae,Ot),Y=Ae.id,ne=Ot.id}let ee=n.getRenderTarget(),Ne=n.state.buffers.depth.getReversed(),Me=P.isInstancedMesh===!0,be=P.isBatchedMesh===!0,yt=!!v.map,qe=!!v.matcap,gt=!!$,st=!!v.aoMap,et=!!v.lightMap,Lt=!!v.bumpMap&&v.wireframe===!1,Ht=!!v.normalMap,Ut=!!v.displacementMap,Kt=!!v.emissiveMap,bt=!!v.metalnessMap,Tt=!!v.roughnessMap,F=v.anisotropy>0,pn=v.clearcoat>0,ft=v.dispersion>0,C=v.iridescence>0,y=v.sheen>0,k=v.transmission>0,W=F&&!!v.anisotropyMap,q=pn&&!!v.clearcoatMap,re=pn&&!!v.clearcoatNormalMap,le=pn&&!!v.clearcoatRoughnessMap,K=C&&!!v.iridescenceMap,j=C&&!!v.iridescenceThicknessMap,ce=y&&!!v.sheenColorMap,Ie=y&&!!v.sheenRoughnessMap,de=!!v.specularMap,he=!!v.specularColorMap,Oe=!!v.specularIntensityMap,Be=k&&!!v.transmissionMap,We=k&&!!v.thicknessMap,N=!!v.gradientMap,oe=!!v.alphaMap,Z=v.alphaTest>0,ue=!!v.alphaHash,ge=!!v.extensions,Q=ui;v.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Q=n.toneMapping);let Re={shaderID:te,shaderType:v.type,shaderName:v.name,vertexShader:je,fragmentShader:$e,defines:v.defines,customVertexShaderID:Y,customFragmentShaderID:ne,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:be,batchingColor:be&&P._colorsTexture!==null,instancing:Me,instancingColor:Me&&P.instanceColor!==null,instancingMorph:Me&&P.morphTexture!==null,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:yt,matcap:qe,envMap:gt,envMapMode:gt&&$.mapping,envMapCubeUVHeight:J,aoMap:st,lightMap:et,bumpMap:Lt,normalMap:Ht,displacementMap:Ut,emissiveMap:Kt,normalMapObjectSpace:Ht&&v.normalMapType===Dm,normalMapTangentSpace:Ht&&v.normalMapType===ud,packedNormalMap:Ht&&v.normalMapType===ud&&LM(v.normalMap.format),metalnessMap:bt,roughnessMap:Tt,anisotropy:F,anisotropyMap:W,clearcoat:pn,clearcoatMap:q,clearcoatNormalMap:re,clearcoatRoughnessMap:le,dispersion:ft,iridescence:C,iridescenceMap:K,iridescenceThicknessMap:j,sheen:y,sheenColorMap:ce,sheenRoughnessMap:Ie,specularMap:de,specularColorMap:he,specularIntensityMap:Oe,transmission:k,transmissionMap:Be,thicknessMap:We,gradientMap:N,opaque:v.transparent===!1&&v.blending===Jn&&v.alphaToCoverage===!1,alphaMap:oe,alphaTest:Z,alphaHash:ue,combine:v.combine,mapUv:yt&&g(v.map.channel),aoMapUv:st&&g(v.aoMap.channel),lightMapUv:et&&g(v.lightMap.channel),bumpMapUv:Lt&&g(v.bumpMap.channel),normalMapUv:Ht&&g(v.normalMap.channel),displacementMapUv:Ut&&g(v.displacementMap.channel),emissiveMapUv:Kt&&g(v.emissiveMap.channel),metalnessMapUv:bt&&g(v.metalnessMap.channel),roughnessMapUv:Tt&&g(v.roughnessMap.channel),anisotropyMapUv:W&&g(v.anisotropyMap.channel),clearcoatMapUv:q&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:j&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&g(v.sheenRoughnessMap.channel),specularMapUv:de&&g(v.specularMap.channel),specularColorMapUv:he&&g(v.specularColorMap.channel),specularIntensityMapUv:Oe&&g(v.specularIntensityMap.channel),transmissionMapUv:Be&&g(v.transmissionMap.channel),thicknessMapUv:We&&g(v.thicknessMap.channel),alphaMapUv:oe&&g(v.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Ht||F),vertexNormals:!!L.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(yt||oe),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||L.attributes.normal===void 0&&Ht===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ne,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:we,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Q,decodeVideoTexture:yt&&v.map.isVideoTexture===!0&&Je.getTransfer(v.map.colorSpace)===mt,decodeVideoTextureEmissive:Kt&&v.emissiveMap.isVideoTexture===!0&&Je.getTransfer(v.emissiveMap.colorSpace)===mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ii,flipSided:v.side===Mn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ge&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&v.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function p(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)E.push(I),E.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(m(E,v),A(E,v),E.push(n.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function m(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function A(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function R(v){let E=f[v.type],I;if(E){let T=Fi[E];I=$m.clone(T.uniforms)}else I=v.uniforms;return I}function M(v,E){let I=h.get(E);return I!==void 0?++I.usedTimes:(I=new IM(n,E,v,s),c.push(I),h.set(E,I)),I}function b(v){if(--v.usedTimes===0){let E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function S(v){o.remove(v)}function w(){o.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:R,acquireProgram:M,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:w}}function DM(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function FM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function dg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function fg(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,x,p,m){let A=n[e];return A===void 0?(A={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:p,group:m},n[e]=A):(A.id=u.id,A.object=u,A.geometry=f,A.material=g,A.materialVariant=a(u),A.groupOrder=x,A.renderOrder=u.renderOrder,A.z=p,A.group=m),e++,A}function l(u,f,g,x,p,m){let A=o(u,f,g,x,p,m);g.transmission>0?i.push(A):g.transparent===!0?s.push(A):t.push(A)}function c(u,f,g,x,p,m){let A=o(u,f,g,x,p,m);g.transmission>0?i.unshift(A):g.transparent===!0?s.unshift(A):t.unshift(A)}function h(u,f,g){t.length>1&&t.sort(u||FM),i.length>1&&i.sort(f||dg),s.length>1&&s.sort(f||dg),g&&(t.reverse(),i.reverse(),s.reverse())}function d(){for(let u=e,f=n.length;u<f;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function UM(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new fg,n.set(i,[a])):s>=r.length?(a=new fg,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function OM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new He};break;case"SpotLight":t={position:new D,direction:new D,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function kM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var BM=0;function zM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function VM(n){let e=new OM,t=kM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let s=new D,r=new Bt,a=new Bt;function o(c){let h=0,d=0,u=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,A=0,R=0,M=0,b=0,S=0,w=0;c.sort(zM);for(let E=0,I=c.length;E<I;E++){let T=c[E],P=T.color,U=T.intensity,B=T.distance,L=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===Ns?L=T.shadow.map.texture:L=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)h+=P.r*U,d+=P.g*U,u+=P.b*U;else if(T.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(T.sh.coefficients[G],U);w++}else if(T.isDirectionalLight){let G=e.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let z=T.shadow,$=t.get(T);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,i.directionalShadow[f]=$,i.directionalShadowMap[f]=L,i.directionalShadowMatrix[f]=T.shadow.matrix,A++}i.directional[f]=G,f++}else if(T.isSpotLight){let G=e.get(T);G.position.setFromMatrixPosition(T.matrixWorld),G.color.copy(P).multiplyScalar(U),G.distance=B,G.coneCos=Math.cos(T.angle),G.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),G.decay=T.decay,i.spot[x]=G;let z=T.shadow;if(T.map&&(i.spotLightMap[b]=T.map,b++,z.updateMatrices(T),T.castShadow&&S++),i.spotLightMatrix[x]=z.matrix,T.castShadow){let $=t.get(T);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,i.spotShadow[x]=$,i.spotShadowMap[x]=L,M++}x++}else if(T.isRectAreaLight){let G=e.get(T);G.color.copy(P).multiplyScalar(U),G.halfWidth.set(T.width*.5,0,0),G.halfHeight.set(0,T.height*.5,0),i.rectArea[p]=G,p++}else if(T.isPointLight){let G=e.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),G.distance=T.distance,G.decay=T.decay,T.castShadow){let z=T.shadow,$=t.get(T);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,$.shadowCameraNear=z.camera.near,$.shadowCameraFar=z.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=L,i.pointShadowMatrix[g]=T.shadow.matrix,R++}i.point[g]=G,g++}else if(T.isHemisphereLight){let G=e.get(T);G.skyColor.copy(T.color).multiplyScalar(U),G.groundColor.copy(T.groundColor).multiplyScalar(U),i.hemi[m]=G,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let v=i.hash;(v.directionalLength!==f||v.pointLength!==g||v.spotLength!==x||v.rectAreaLength!==p||v.hemiLength!==m||v.numDirectionalShadows!==A||v.numPointShadows!==R||v.numSpotShadows!==M||v.numSpotMaps!==b||v.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=M+b-S,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=w,v.directionalLength=f,v.pointLength=g,v.spotLength=x,v.rectAreaLength=p,v.hemiLength=m,v.numDirectionalShadows=A,v.numPointShadows=R,v.numSpotShadows=M,v.numSpotMaps=b,v.numLightProbes=w,i.version=BM++)}function l(c,h){let d=0,u=0,f=0,g=0,x=0,p=h.matrixWorldInverse;for(let m=0,A=c.length;m<A;m++){let R=c[m];if(R.isDirectionalLight){let M=i.directional[d];M.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(R.isSpotLight){let M=i.spot[f];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(R.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(R.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(R.width*.5,0,0),M.halfHeight.set(0,R.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(R.isPointLight){let M=i.point[u];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(p),u++}else if(R.isHemisphereLight){let M=i.hemi[x];M.direction.setFromMatrixPosition(R.matrixWorld),M.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:i}}function pg(n){let e=new VM(n),t=[],i=[],s=[];function r(u){d.camera=u,t.length=0,i.length=0,s.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function HM(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new pg(n),e.set(s,[o])):r>=a.length?(o=new pg(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var GM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,XM=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],$M=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],mg=new Bt,uo=new D,Sd=new D;function qM(n,e,t){let i=new $a,s=new Qe,r=new Qe,a=new Nt,o=new Bl,l=new zl,c={},h=t.maxTextureSize,d={[es]:Mn,[Mn]:es,[Ii]:Ii},u=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:GM,fragmentShader:WM}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Tn;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new hn(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eo;let m=this.type;this.render=function(S,w,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===um&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=eo);let E=n.getRenderTarget(),I=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),P=n.state;P.setBlending(Pi),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let U=m!==this.type;U&&w.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(L=>L.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,L=S.length;B<L;B++){let G=S[B],z=G.shadow;if(z===void 0){ke("WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let $=z.getFrameExtents();s.multiply($),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,z.mapSize.y=r.y));let J=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=J,z.map===null||U===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===jr){if(G.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new zn(s.x,s.y,{format:Ns,type:Ni,minFilter:en,magFilter:en,generateMipmaps:!1}),z.map.texture.name=G.name+".shadowMap",z.map.depthTexture=new ts(s.x,s.y,fi),z.map.depthTexture.name=G.name+".shadowMapDepth",z.map.depthTexture.format=Ai,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=cn,z.map.depthTexture.magFilter=cn}else G.isPointLight?(z.map=new Gc(s.x),z.map.depthTexture=new Ol(s.x,di)):(z.map=new zn(s.x,s.y),z.map.depthTexture=new ts(s.x,s.y,di)),z.map.depthTexture.name=G.name+".shadowMap",z.map.depthTexture.format=Ai,this.type===eo?(z.map.depthTexture.compareFunction=J?Bc:kc,z.map.depthTexture.minFilter=en,z.map.depthTexture.magFilter=en):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=cn,z.map.depthTexture.magFilter=cn);z.camera.updateProjectionMatrix()}let te=z.map.isWebGLCubeRenderTarget?6:1;for(let se=0;se<te;se++){if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,se),n.clear();else{se===0&&(n.setRenderTarget(z.map),n.clear());let ie=z.getViewport(se);a.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),P.viewport(a)}if(G.isPointLight){let ie=z.camera,we=z.matrix,je=G.distance||ie.far;je!==ie.far&&(ie.far=je,ie.updateProjectionMatrix()),uo.setFromMatrixPosition(G.matrixWorld),ie.position.copy(uo),Sd.copy(ie.position),Sd.add(XM[se]),ie.up.copy($M[se]),ie.lookAt(Sd),ie.updateMatrixWorld(),we.makeTranslation(-uo.x,-uo.y,-uo.z),mg.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),z._frustum.setFromProjectionMatrix(mg,ie.coordinateSystem,ie.reversedDepth)}else z.updateMatrices(G);i=z.getFrustum(),M(w,v,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===jr&&A(z,v),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(E,I,T)};function A(S,w){let v=e.update(x);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new zn(s.x,s.y,{format:Ns,type:Ni})),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(w,null,v,u,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(w,null,v,f,x,null)}function R(S,w,v,E){let I=null,T=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)I=T;else if(I=v.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let P=I.uuid,U=w.uuid,B=c[P];B===void 0&&(B={},c[P]=B);let L=B[U];L===void 0&&(L=I.clone(),B[U]=L,w.addEventListener("dispose",b)),I=L}if(I.visible=w.visible,I.wireframe=w.wireframe,E===jr?I.side=w.shadowSide!==null?w.shadowSide:w.side:I.side=w.shadowSide!==null?w.shadowSide:d[w.side],I.alphaMap=w.alphaMap,I.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,I.map=w.map,I.clipShadows=w.clipShadows,I.clippingPlanes=w.clippingPlanes,I.clipIntersection=w.clipIntersection,I.displacementMap=w.displacementMap,I.displacementScale=w.displacementScale,I.displacementBias=w.displacementBias,I.wireframeLinewidth=w.wireframeLinewidth,I.linewidth=w.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let P=n.properties.get(I);P.light=v}return I}function M(S,w,v,E,I){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&I===jr)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);let U=e.update(S),B=S.material;if(Array.isArray(B)){let L=U.groups;for(let G=0,z=L.length;G<z;G++){let $=L[G],J=B[$.materialIndex];if(J&&J.visible){let te=R(S,J,E,I);S.onBeforeShadow(n,S,w,v,U,te,$),n.renderBufferDirect(v,null,U,te,S,$),S.onAfterShadow(n,S,w,v,U,te,$)}}}else if(B.visible){let L=R(S,B,E,I);S.onBeforeShadow(n,S,w,v,U,L,null),n.renderBufferDirect(v,null,U,L,S,null),S.onAfterShadow(n,S,w,v,U,L,null)}}let P=S.children;for(let U=0,B=P.length;U<B;U++)M(P[U],w,v,E,I)}function b(S){S.target.removeEventListener("dispose",b);for(let v in c){let E=c[v],I=S.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function YM(n,e){function t(){let N=!1,oe=new Nt,Z=null,ue=new Nt(0,0,0,0);return{setMask:function(ge){Z!==ge&&!N&&(n.colorMask(ge,ge,ge,ge),Z=ge)},setLocked:function(ge){N=ge},setClear:function(ge,Q,Re,Ae,Ot){Ot===!0&&(ge*=Ae,Q*=Ae,Re*=Ae),oe.set(ge,Q,Re,Ae),ue.equals(oe)===!1&&(n.clearColor(ge,Q,Re,Ae),ue.copy(oe))},reset:function(){N=!1,Z=null,ue.set(-1,0,0,0)}}}function i(){let N=!1,oe=!1,Z=null,ue=null,ge=null;return{setReversed:function(Q){if(oe!==Q){let Re=e.get("EXT_clip_control");Q?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),oe=Q;let Ae=ge;ge=null,this.setClear(Ae)}},getReversed:function(){return oe},setTest:function(Q){Q?ee(n.DEPTH_TEST):Ne(n.DEPTH_TEST)},setMask:function(Q){Z!==Q&&!N&&(n.depthMask(Q),Z=Q)},setFunc:function(Q){if(oe&&(Q=Wm[Q]),ue!==Q){switch(Q){case vl:n.depthFunc(n.NEVER);break;case yl:n.depthFunc(n.ALWAYS);break;case _l:n.depthFunc(n.LESS);break;case er:n.depthFunc(n.LEQUAL);break;case bl:n.depthFunc(n.EQUAL);break;case Ml:n.depthFunc(n.GEQUAL);break;case Sl:n.depthFunc(n.GREATER);break;case wl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=Q}},setLocked:function(Q){N=Q},setClear:function(Q){ge!==Q&&(ge=Q,oe&&(Q=1-Q),n.clearDepth(Q))},reset:function(){N=!1,Z=null,ue=null,ge=null,oe=!1}}}function s(){let N=!1,oe=null,Z=null,ue=null,ge=null,Q=null,Re=null,Ae=null,Ot=null;return{setTest:function(wt){N||(wt?ee(n.STENCIL_TEST):Ne(n.STENCIL_TEST))},setMask:function(wt){oe!==wt&&!N&&(n.stencilMask(wt),oe=wt)},setFunc:function(wt,_i,bi){(Z!==wt||ue!==_i||ge!==bi)&&(n.stencilFunc(wt,_i,bi),Z=wt,ue=_i,ge=bi)},setOp:function(wt,_i,bi){(Q!==wt||Re!==_i||Ae!==bi)&&(n.stencilOp(wt,_i,bi),Q=wt,Re=_i,Ae=bi)},setLocked:function(wt){N=wt},setClear:function(wt){Ot!==wt&&(n.clearStencil(wt),Ot=wt)},reset:function(){N=!1,oe=null,Z=null,ue=null,ge=null,Q=null,Re=null,Ae=null,Ot=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],x=null,p=!1,m=null,A=null,R=null,M=null,b=null,S=null,w=null,v=new He(0,0,0),E=0,I=!1,T=null,P=null,U=null,B=null,L=null,G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,$=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(J)[1]),z=$>=1):J.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),z=$>=2);let te=null,se={},ie=n.getParameter(n.SCISSOR_BOX),we=n.getParameter(n.VIEWPORT),je=new Nt().fromArray(ie),$e=new Nt().fromArray(we);function Y(N,oe,Z,ue){let ge=new Uint8Array(4),Q=n.createTexture();n.bindTexture(N,Q),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Re=0;Re<Z;Re++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(oe+Re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return Q}let ne={};ne[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(n.DEPTH_TEST),a.setFunc(er),Lt(!1),Ht(Xu),ee(n.CULL_FACE),st(Pi);function ee(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function Ne(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function Me(N,oe){return u[N]!==oe?(n.bindFramebuffer(N,oe),u[N]=oe,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=oe),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function be(N,oe){let Z=g,ue=!1;if(N){Z=f.get(oe),Z===void 0&&(Z=[],f.set(oe,Z));let ge=N.textures;if(Z.length!==ge.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let Q=0,Re=ge.length;Q<Re;Q++)Z[Q]=n.COLOR_ATTACHMENT0+Q;Z.length=ge.length,ue=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,ue=!0);ue&&n.drawBuffers(Z)}function yt(N){return x!==N?(n.useProgram(N),x=N,!0):!1}let qe={[ws]:n.FUNC_ADD,[fm]:n.FUNC_SUBTRACT,[pm]:n.FUNC_REVERSE_SUBTRACT};qe[mm]=n.MIN,qe[gm]=n.MAX;let gt={[xm]:n.ZERO,[vm]:n.ONE,[ym]:n.SRC_COLOR,[gl]:n.SRC_ALPHA,[Em]:n.SRC_ALPHA_SATURATE,[Sm]:n.DST_COLOR,[bm]:n.DST_ALPHA,[_m]:n.ONE_MINUS_SRC_COLOR,[xl]:n.ONE_MINUS_SRC_ALPHA,[wm]:n.ONE_MINUS_DST_COLOR,[Mm]:n.ONE_MINUS_DST_ALPHA,[Am]:n.CONSTANT_COLOR,[Tm]:n.ONE_MINUS_CONSTANT_COLOR,[Cm]:n.CONSTANT_ALPHA,[Rm]:n.ONE_MINUS_CONSTANT_ALPHA};function st(N,oe,Z,ue,ge,Q,Re,Ae,Ot,wt){if(N===Pi){p===!0&&(Ne(n.BLEND),p=!1);return}if(p===!1&&(ee(n.BLEND),p=!0),N!==dm){if(N!==m||wt!==I){if((A!==ws||b!==ws)&&(n.blendEquation(n.FUNC_ADD),A=ws,b=ws),wt)switch(N){case Jn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $u:n.blendFunc(n.ONE,n.ONE);break;case qu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ze("WebGLState: Invalid blending: ",N);break}else switch(N){case Jn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $u:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case qu:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yu:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",N);break}R=null,M=null,S=null,w=null,v.set(0,0,0),E=0,m=N,I=wt}return}ge=ge||oe,Q=Q||Z,Re=Re||ue,(oe!==A||ge!==b)&&(n.blendEquationSeparate(qe[oe],qe[ge]),A=oe,b=ge),(Z!==R||ue!==M||Q!==S||Re!==w)&&(n.blendFuncSeparate(gt[Z],gt[ue],gt[Q],gt[Re]),R=Z,M=ue,S=Q,w=Re),(Ae.equals(v)===!1||Ot!==E)&&(n.blendColor(Ae.r,Ae.g,Ae.b,Ot),v.copy(Ae),E=Ot),m=N,I=!1}function et(N,oe){N.side===Ii?Ne(n.CULL_FACE):ee(n.CULL_FACE);let Z=N.side===Mn;oe&&(Z=!Z),Lt(Z),N.blending===Jn&&N.transparent===!1?st(Pi):st(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let ue=N.stencilWrite;o.setTest(ue),ue&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Kt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):Ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(N){T!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),T=N)}function Ht(N){N!==cm?(ee(n.CULL_FACE),N!==P&&(N===Xu?n.cullFace(n.BACK):N===hm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ne(n.CULL_FACE),P=N}function Ut(N){N!==U&&(z&&n.lineWidth(N),U=N)}function Kt(N,oe,Z){N?(ee(n.POLYGON_OFFSET_FILL),(B!==oe||L!==Z)&&(B=oe,L=Z,a.getReversed()&&(oe=-oe),n.polygonOffset(oe,Z))):Ne(n.POLYGON_OFFSET_FILL)}function bt(N){N?ee(n.SCISSOR_TEST):Ne(n.SCISSOR_TEST)}function Tt(N){N===void 0&&(N=n.TEXTURE0+G-1),te!==N&&(n.activeTexture(N),te=N)}function F(N,oe,Z){Z===void 0&&(te===null?Z=n.TEXTURE0+G-1:Z=te);let ue=se[Z];ue===void 0&&(ue={type:void 0,texture:void 0},se[Z]=ue),(ue.type!==N||ue.texture!==oe)&&(te!==Z&&(n.activeTexture(Z),te=Z),n.bindTexture(N,oe||ne[N]),ue.type=N,ue.texture=oe)}function pn(){let N=se[te];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ft(){try{n.compressedTexImage2D(...arguments)}catch(N){ze("WebGLState:",N)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(N){ze("WebGLState:",N)}}function y(){try{n.texSubImage2D(...arguments)}catch(N){ze("WebGLState:",N)}}function k(){try{n.texSubImage3D(...arguments)}catch(N){ze("WebGLState:",N)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(N){ze("WebGLState:",N)}}function q(){try{n.compressedTexSubImage3D(...arguments)}catch(N){ze("WebGLState:",N)}}function re(){try{n.texStorage2D(...arguments)}catch(N){ze("WebGLState:",N)}}function le(){try{n.texStorage3D(...arguments)}catch(N){ze("WebGLState:",N)}}function K(){try{n.texImage2D(...arguments)}catch(N){ze("WebGLState:",N)}}function j(){try{n.texImage3D(...arguments)}catch(N){ze("WebGLState:",N)}}function ce(N){return d[N]!==void 0?d[N]:n.getParameter(N)}function Ie(N,oe){d[N]!==oe&&(n.pixelStorei(N,oe),d[N]=oe)}function de(N){je.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),je.copy(N))}function he(N){$e.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),$e.copy(N))}function Oe(N,oe){let Z=c.get(oe);Z===void 0&&(Z=new WeakMap,c.set(oe,Z));let ue=Z.get(N);ue===void 0&&(ue=n.getUniformBlockIndex(oe,N.name),Z.set(N,ue))}function Be(N,oe){let ue=c.get(oe).get(N);l.get(oe)!==ue&&(n.uniformBlockBinding(oe,ue,N.__bindingPointIndex),l.set(oe,ue))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},te=null,se={},u={},f=new WeakMap,g=[],x=null,p=!1,m=null,A=null,R=null,M=null,b=null,S=null,w=null,v=new He(0,0,0),E=0,I=!1,T=null,P=null,U=null,B=null,L=null,je.set(0,0,n.canvas.width,n.canvas.height),$e.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:Ne,bindFramebuffer:Me,drawBuffers:be,useProgram:yt,setBlending:st,setMaterial:et,setFlipSided:Lt,setCullFace:Ht,setLineWidth:Ut,setPolygonOffset:Kt,setScissorTest:bt,activeTexture:Tt,bindTexture:F,unbindTexture:pn,compressedTexImage2D:ft,compressedTexImage3D:C,texImage2D:K,texImage3D:j,pixelStorei:Ie,getParameter:ce,updateUBOMapping:Oe,uniformBlockBinding:Be,texStorage2D:re,texStorage3D:le,texSubImage2D:y,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:q,scissor:de,viewport:he,reset:We}}function KM(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,y){return g?new OffscreenCanvas(C,y):Xr("canvas")}function p(C,y,k){let W=1,q=ft(C);if((q.width>k||q.height>k)&&(W=k/Math.max(q.width,q.height)),W<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let re=Math.floor(W*q.width),le=Math.floor(W*q.height);u===void 0&&(u=x(re,le));let K=y?x(re,le):u;return K.width=re,K.height=le,K.getContext("2d").drawImage(C,0,0,re,le),ke("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+re+"x"+le+")."),K}else return"data"in C&&ke("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),C;return C}function m(C){return C.generateMipmaps}function A(C){n.generateMipmap(C)}function R(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(C,y,k,W,q,re=!1){if(C!==null){if(n[C]!==void 0)return n[C];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let le;W&&(le=e.get("EXT_texture_norm16"),le||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=y;if(y===n.RED&&(k===n.FLOAT&&(K=n.R32F),k===n.HALF_FLOAT&&(K=n.R16F),k===n.UNSIGNED_BYTE&&(K=n.R8),k===n.UNSIGNED_SHORT&&le&&(K=le.R16_EXT),k===n.SHORT&&le&&(K=le.R16_SNORM_EXT)),y===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.R8UI),k===n.UNSIGNED_SHORT&&(K=n.R16UI),k===n.UNSIGNED_INT&&(K=n.R32UI),k===n.BYTE&&(K=n.R8I),k===n.SHORT&&(K=n.R16I),k===n.INT&&(K=n.R32I)),y===n.RG&&(k===n.FLOAT&&(K=n.RG32F),k===n.HALF_FLOAT&&(K=n.RG16F),k===n.UNSIGNED_BYTE&&(K=n.RG8),k===n.UNSIGNED_SHORT&&le&&(K=le.RG16_EXT),k===n.SHORT&&le&&(K=le.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RG8UI),k===n.UNSIGNED_SHORT&&(K=n.RG16UI),k===n.UNSIGNED_INT&&(K=n.RG32UI),k===n.BYTE&&(K=n.RG8I),k===n.SHORT&&(K=n.RG16I),k===n.INT&&(K=n.RG32I)),y===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RGB8UI),k===n.UNSIGNED_SHORT&&(K=n.RGB16UI),k===n.UNSIGNED_INT&&(K=n.RGB32UI),k===n.BYTE&&(K=n.RGB8I),k===n.SHORT&&(K=n.RGB16I),k===n.INT&&(K=n.RGB32I)),y===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),k===n.UNSIGNED_INT&&(K=n.RGBA32UI),k===n.BYTE&&(K=n.RGBA8I),k===n.SHORT&&(K=n.RGBA16I),k===n.INT&&(K=n.RGBA32I)),y===n.RGB&&(k===n.UNSIGNED_SHORT&&le&&(K=le.RGB16_EXT),k===n.SHORT&&le&&(K=le.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),y===n.RGBA){let j=re?Oa:Je.getTransfer(q);k===n.FLOAT&&(K=n.RGBA32F),k===n.HALF_FLOAT&&(K=n.RGBA16F),k===n.UNSIGNED_BYTE&&(K=j===mt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&le&&(K=le.RGBA16_EXT),k===n.SHORT&&le&&(K=le.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function b(C,y){let k;return C?y===null||y===di||y===Qr?k=n.DEPTH24_STENCIL8:y===fi?k=n.DEPTH32F_STENCIL8:y===Jr&&(k=n.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===di||y===Qr?k=n.DEPTH_COMPONENT24:y===fi?k=n.DEPTH_COMPONENT32F:y===Jr&&(k=n.DEPTH_COMPONENT16),k}function S(C,y){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==cn&&C.minFilter!==en?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function w(C){let y=C.target;y.removeEventListener("dispose",w),E(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function v(C){let y=C.target;y.removeEventListener("dispose",v),T(y)}function E(C){let y=i.get(C);if(y.__webglInit===void 0)return;let k=C.source,W=f.get(k);if(W){let q=W[y.__cacheKey];q.usedTimes--,q.usedTimes===0&&I(C),Object.keys(W).length===0&&f.delete(k)}i.remove(C)}function I(C){let y=i.get(C);n.deleteTexture(y.__webglTexture);let k=C.source,W=f.get(k);delete W[y.__cacheKey],a.memory.textures--}function T(C){let y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(y.__webglFramebuffer[W]))for(let q=0;q<y.__webglFramebuffer[W].length;q++)n.deleteFramebuffer(y.__webglFramebuffer[W][q]);else n.deleteFramebuffer(y.__webglFramebuffer[W]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[W])}else{if(Array.isArray(y.__webglFramebuffer))for(let W=0;W<y.__webglFramebuffer.length;W++)n.deleteFramebuffer(y.__webglFramebuffer[W]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let W=0;W<y.__webglColorRenderbuffer.length;W++)y.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[W]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let k=C.textures;for(let W=0,q=k.length;W<q;W++){let re=i.get(k[W]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(k[W])}i.remove(C)}let P=0;function U(){P=0}function B(){return P}function L(C){P=C}function G(){let C=P;return C>=s.maxTextures&&ke("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function z(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function $(C,y){let k=i.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){let W=C.image;if(W===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(k,C,y);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+y)}function J(C,y){let k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Ne(k,C,y);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+y)}function te(C,y){let k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Ne(k,C,y);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+y)}function se(C,y){let k=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){Me(k,C,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+y)}let ie={[El]:n.REPEAT,[Ei]:n.CLAMP_TO_EDGE,[Al]:n.MIRRORED_REPEAT},we={[cn]:n.NEAREST,[Lm]:n.NEAREST_MIPMAP_NEAREST,[no]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[tc]:n.LINEAR_MIPMAP_NEAREST,[Li]:n.LINEAR_MIPMAP_LINEAR},je={[Fm]:n.NEVER,[zm]:n.ALWAYS,[Um]:n.LESS,[kc]:n.LEQUAL,[Om]:n.EQUAL,[Bc]:n.GEQUAL,[km]:n.GREATER,[Bm]:n.NOTEQUAL};function $e(C,y){if(y.type===fi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===en||y.magFilter===tc||y.magFilter===no||y.magFilter===Li||y.minFilter===en||y.minFilter===tc||y.minFilter===no||y.minFilter===Li)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,ie[y.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ie[y.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ie[y.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,we[y.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,we[y.minFilter]),y.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,je[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===cn||y.minFilter!==no&&y.minFilter!==Li||y.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Y(C,y){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",w));let W=y.source,q=f.get(W);q===void 0&&(q={},f.set(W,q));let re=z(y);if(re!==C.__cacheKey){q[re]===void 0&&(q[re]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),q[re].usedTimes++;let le=q[C.__cacheKey];le!==void 0&&(q[C.__cacheKey].usedTimes--,le.usedTimes===0&&I(y)),C.__cacheKey=re,C.__webglTexture=q[re].texture}return k}function ne(C,y,k){return Math.floor(Math.floor(C/k)/y)}function ee(C,y,k,W){let re=C.updateRanges;if(re.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,k,W,y.data);else{re.sort((Ie,de)=>Ie.start-de.start);let le=0;for(let Ie=1;Ie<re.length;Ie++){let de=re[le],he=re[Ie],Oe=de.start+de.count,Be=ne(he.start,y.width,4),We=ne(de.start,y.width,4);he.start<=Oe+1&&Be===We&&ne(he.start+he.count-1,y.width,4)===Be?de.count=Math.max(de.count,he.start+he.count-de.start):(++le,re[le]=he)}re.length=le+1;let K=t.getParameter(n.UNPACK_ROW_LENGTH),j=t.getParameter(n.UNPACK_SKIP_PIXELS),ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Ie=0,de=re.length;Ie<de;Ie++){let he=re[Ie],Oe=Math.floor(he.start/4),Be=Math.ceil(he.count/4),We=Oe%y.width,N=Math.floor(Oe/y.width),oe=Be,Z=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,We),t.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,We,N,oe,Z,k,W,y.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,K),t.pixelStorei(n.UNPACK_SKIP_PIXELS,j),t.pixelStorei(n.UNPACK_SKIP_ROWS,ce)}}function Ne(C,y,k){let W=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(W=n.TEXTURE_3D);let q=Y(C,y),re=y.source;t.bindTexture(W,C.__webglTexture,n.TEXTURE0+k);let le=i.get(re);if(re.version!==le.__version||q===!0){if(t.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let Z=Je.getPrimaries(Je.workingColorSpace),ue=y.colorSpace===pi?null:Je.getPrimaries(y.colorSpace),ge=y.colorSpace===pi||Z===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let j=p(y.image,!1,s.maxTextureSize);j=pn(y,j);let ce=r.convert(y.format,y.colorSpace),Ie=r.convert(y.type),de=M(y.internalFormat,ce,Ie,y.normalized,y.colorSpace,y.isVideoTexture);$e(W,y);let he,Oe=y.mipmaps,Be=y.isVideoTexture!==!0,We=le.__version===void 0||q===!0,N=re.dataReady,oe=S(y,j);if(y.isDepthTexture)de=b(y.format===Ls,y.type),We&&(Be?t.texStorage2D(n.TEXTURE_2D,1,de,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,de,j.width,j.height,0,ce,Ie,null));else if(y.isDataTexture)if(Oe.length>0){Be&&We&&t.texStorage2D(n.TEXTURE_2D,oe,de,Oe[0].width,Oe[0].height);for(let Z=0,ue=Oe.length;Z<ue;Z++)he=Oe[Z],Be?N&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,he.width,he.height,ce,Ie,he.data):t.texImage2D(n.TEXTURE_2D,Z,de,he.width,he.height,0,ce,Ie,he.data);y.generateMipmaps=!1}else Be?(We&&t.texStorage2D(n.TEXTURE_2D,oe,de,j.width,j.height),N&&ee(y,j,ce,Ie)):t.texImage2D(n.TEXTURE_2D,0,de,j.width,j.height,0,ce,Ie,j.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Be&&We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,de,Oe[0].width,Oe[0].height,j.depth);for(let Z=0,ue=Oe.length;Z<ue;Z++)if(he=Oe[Z],y.format!==Qn)if(ce!==null)if(Be){if(N)if(y.layerUpdates.size>0){let ge=xd(he.width,he.height,y.format,y.type);for(let Q of y.layerUpdates){let Re=he.data.subarray(Q*ge/he.data.BYTES_PER_ELEMENT,(Q+1)*ge/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,Q,he.width,he.height,1,ce,Re)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,he.width,he.height,j.depth,ce,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,de,he.width,he.height,j.depth,0,he.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,he.width,he.height,j.depth,ce,Ie,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,de,he.width,he.height,j.depth,0,ce,Ie,he.data)}else{Be&&We&&t.texStorage2D(n.TEXTURE_2D,oe,de,Oe[0].width,Oe[0].height);for(let Z=0,ue=Oe.length;Z<ue;Z++)he=Oe[Z],y.format!==Qn?ce!==null?Be?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,he.width,he.height,ce,he.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,de,he.width,he.height,0,he.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?N&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,he.width,he.height,ce,Ie,he.data):t.texImage2D(n.TEXTURE_2D,Z,de,he.width,he.height,0,ce,Ie,he.data)}else if(y.isDataArrayTexture)if(Be){if(We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,de,j.width,j.height,j.depth),N)if(y.layerUpdates.size>0){let Z=xd(j.width,j.height,y.format,y.type);for(let ue of y.layerUpdates){let ge=j.data.subarray(ue*Z/j.data.BYTES_PER_ELEMENT,(ue+1)*Z/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,j.width,j.height,1,ce,Ie,ge)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ce,Ie,j.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,de,j.width,j.height,j.depth,0,ce,Ie,j.data);else if(y.isData3DTexture)Be?(We&&t.texStorage3D(n.TEXTURE_3D,oe,de,j.width,j.height,j.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ce,Ie,j.data)):t.texImage3D(n.TEXTURE_3D,0,de,j.width,j.height,j.depth,0,ce,Ie,j.data);else if(y.isFramebufferTexture){if(We)if(Be)t.texStorage2D(n.TEXTURE_2D,oe,de,j.width,j.height);else{let Z=j.width,ue=j.height;for(let ge=0;ge<oe;ge++)t.texImage2D(n.TEXTURE_2D,ge,de,Z,ue,0,ce,Ie,null),Z>>=1,ue>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let Z=n.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),j.parentNode!==Z){Z.appendChild(j),d.add(y),Z.onpaint=ue=>{let ge=ue.changedElements;for(let Q of d)ge.includes(Q.image)&&(Q.needsUpdate=!0)},Z.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,j);else{let ge=n.RGBA,Q=n.RGBA,Re=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ge,Q,Re,j)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(Be&&We){let Z=ft(Oe[0]);t.texStorage2D(n.TEXTURE_2D,oe,de,Z.width,Z.height)}for(let Z=0,ue=Oe.length;Z<ue;Z++)he=Oe[Z],Be?N&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ce,Ie,he):t.texImage2D(n.TEXTURE_2D,Z,de,ce,Ie,he);y.generateMipmaps=!1}else if(Be){if(We){let Z=ft(j);t.texStorage2D(n.TEXTURE_2D,oe,de,Z.width,Z.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,Ie,j)}else t.texImage2D(n.TEXTURE_2D,0,de,ce,Ie,j);m(y)&&A(W),le.__version=re.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Me(C,y,k){if(y.image.length!==6)return;let W=Y(C,y),q=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+k);let re=i.get(q);if(q.version!==re.__version||W===!0){t.activeTexture(n.TEXTURE0+k);let le=Je.getPrimaries(Je.workingColorSpace),K=y.colorSpace===pi?null:Je.getPrimaries(y.colorSpace),j=y.colorSpace===pi||le===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ce=y.isCompressedTexture||y.image[0].isCompressedTexture,Ie=y.image[0]&&y.image[0].isDataTexture,de=[];for(let Q=0;Q<6;Q++)!ce&&!Ie?de[Q]=p(y.image[Q],!0,s.maxCubemapSize):de[Q]=Ie?y.image[Q].image:y.image[Q],de[Q]=pn(y,de[Q]);let he=de[0],Oe=r.convert(y.format,y.colorSpace),Be=r.convert(y.type),We=M(y.internalFormat,Oe,Be,y.normalized,y.colorSpace),N=y.isVideoTexture!==!0,oe=re.__version===void 0||W===!0,Z=q.dataReady,ue=S(y,he);$e(n.TEXTURE_CUBE_MAP,y);let ge;if(ce){N&&oe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,We,he.width,he.height);for(let Q=0;Q<6;Q++){ge=de[Q].mipmaps;for(let Re=0;Re<ge.length;Re++){let Ae=ge[Re];y.format!==Qn?Oe!==null?N?Z&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re,0,0,Ae.width,Ae.height,Oe,Ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re,We,Ae.width,Ae.height,0,Ae.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re,0,0,Ae.width,Ae.height,Oe,Be,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re,We,Ae.width,Ae.height,0,Oe,Be,Ae.data)}}}else{if(ge=y.mipmaps,N&&oe){ge.length>0&&ue++;let Q=ft(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,We,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(Ie){N?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,de[Q].width,de[Q].height,Oe,Be,de[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,We,de[Q].width,de[Q].height,0,Oe,Be,de[Q].data);for(let Re=0;Re<ge.length;Re++){let Ot=ge[Re].image[Q].image;N?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re+1,0,0,Ot.width,Ot.height,Oe,Be,Ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re+1,We,Ot.width,Ot.height,0,Oe,Be,Ot.data)}}else{N?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Oe,Be,de[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,We,Oe,Be,de[Q]);for(let Re=0;Re<ge.length;Re++){let Ae=ge[Re];N?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re+1,0,0,Oe,Be,Ae.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re+1,We,Oe,Be,Ae.image[Q])}}}m(y)&&A(n.TEXTURE_CUBE_MAP),re.__version=q.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function be(C,y,k,W,q,re){let le=r.convert(k.format,k.colorSpace),K=r.convert(k.type),j=M(k.internalFormat,le,K,k.normalized,k.colorSpace),ce=i.get(y),Ie=i.get(k);if(Ie.__renderTarget=y,!ce.__hasExternalTextures){let de=Math.max(1,y.width>>re),he=Math.max(1,y.height>>re);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?t.texImage3D(q,re,j,de,he,y.depth,0,le,K,null):t.texImage2D(q,re,j,de,he,0,le,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Tt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,q,Ie.__webglTexture,0,bt(y)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,q,Ie.__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function yt(C,y,k){if(n.bindRenderbuffer(n.RENDERBUFFER,C),y.depthBuffer){let W=y.depthTexture,q=W&&W.isDepthTexture?W.type:null,re=b(y.stencilBuffer,q),le=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Tt(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,bt(y),re,y.width,y.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,bt(y),re,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,re,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,C)}else{let W=y.textures;for(let q=0;q<W.length;q++){let re=W[q],le=r.convert(re.format,re.colorSpace),K=r.convert(re.type),j=M(re.internalFormat,le,K,re.normalized,re.colorSpace);Tt(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,bt(y),j,y.width,y.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,bt(y),j,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,j,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qe(C,y,k){let W=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=i.get(y.depthTexture);if(q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W){if(q.__webglInit===void 0&&(q.__webglInit=!0,y.depthTexture.addEventListener("dispose",w)),q.__webglTexture===void 0){q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),$e(n.TEXTURE_CUBE_MAP,y.depthTexture);let ce=r.convert(y.depthTexture.format),Ie=r.convert(y.depthTexture.type),de;y.depthTexture.format===Ai?de=n.DEPTH_COMPONENT24:y.depthTexture.format===Ls&&(de=n.DEPTH24_STENCIL8);for(let he=0;he<6;he++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,de,y.width,y.height,0,ce,Ie,null)}}else $(y.depthTexture,0);let re=q.__webglTexture,le=bt(y),K=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,j=y.depthTexture.format===Ls?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ai)Tt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,K,re,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,j,K,re,0);else if(y.depthTexture.format===Ls)Tt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,K,re,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,j,K,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function gt(C){let y=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let W=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),W){let q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,W.removeEventListener("dispose",q)};W.addEventListener("dispose",q),y.__depthDisposeCallback=q}y.__boundDepthTexture=W}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)qe(y.__webglFramebuffer[W],C,W);else{let W=C.texture.mipmaps;W&&W.length>0?qe(y.__webglFramebuffer[0],C,0):qe(y.__webglFramebuffer,C,0)}else if(k){y.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[W]),y.__webglDepthbuffer[W]===void 0)y.__webglDepthbuffer[W]=n.createRenderbuffer(),yt(y.__webglDepthbuffer[W],C,!1);else{let q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=y.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,re)}}else{let W=C.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),yt(y.__webglDepthbuffer,C,!1);else{let q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,re)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function st(C,y,k){let W=i.get(C);y!==void 0&&be(W.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&gt(C)}function et(C){let y=C.texture,k=i.get(C),W=i.get(y);C.addEventListener("dispose",v);let q=C.textures,re=C.isWebGLCubeRenderTarget===!0,le=q.length>1;if(le||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=y.version,a.memory.textures++),re){k.__webglFramebuffer=[];for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[K]=[];for(let j=0;j<y.mipmaps.length;j++)k.__webglFramebuffer[K][j]=n.createFramebuffer()}else k.__webglFramebuffer[K]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let K=0;K<y.mipmaps.length;K++)k.__webglFramebuffer[K]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(le)for(let K=0,j=q.length;K<j;K++){let ce=i.get(q[K]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Tt(C)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let K=0;K<q.length;K++){let j=q[K];k.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[K]);let ce=r.convert(j.format,j.colorSpace),Ie=r.convert(j.type),de=M(j.internalFormat,ce,Ie,j.normalized,j.colorSpace,C.isXRRenderTarget===!0),he=bt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,he,de,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,k.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),yt(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),$e(n.TEXTURE_CUBE_MAP,y);for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)be(k.__webglFramebuffer[K][j],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else be(k.__webglFramebuffer[K],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);m(y)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let K=0,j=q.length;K<j;K++){let ce=q[K],Ie=i.get(ce),de=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,Ie.__webglTexture),$e(de,ce),be(k.__webglFramebuffer,C,ce,n.COLOR_ATTACHMENT0+K,de,0),m(ce)&&A(de)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,W.__webglTexture),$e(K,y),y.mipmaps&&y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)be(k.__webglFramebuffer[j],C,y,n.COLOR_ATTACHMENT0,K,j);else be(k.__webglFramebuffer,C,y,n.COLOR_ATTACHMENT0,K,0);m(y)&&A(K),t.unbindTexture()}C.depthBuffer&&gt(C)}function Lt(C){let y=C.textures;for(let k=0,W=y.length;k<W;k++){let q=y[k];if(m(q)){let re=R(C),le=i.get(q).__webglTexture;t.bindTexture(re,le),A(re),t.unbindTexture()}}}let Ht=[],Ut=[];function Kt(C){if(C.samples>0){if(Tt(C)===!1){let y=C.textures,k=C.width,W=C.height,q=n.COLOR_BUFFER_BIT,re=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(C),K=y.length>1;if(K)for(let ce=0;ce<y.length;ce++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);let j=C.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ce=0;ce<y.length;ce++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);let Ie=i.get(y[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ie,0)}n.blitFramebuffer(0,0,k,W,0,0,k,W,q,n.NEAREST),l===!0&&(Ht.length=0,Ut.length=0,Ht.push(n.COLOR_ATTACHMENT0+ce),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ht.push(re),Ut.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ut)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ht))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let ce=0;ce<y.length;ce++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);let Ie=i.get(y[ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,Ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function bt(C){return Math.min(s.maxSamples,C.samples)}function Tt(C){let y=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function F(C){let y=a.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function pn(C,y){let k=C.colorSpace,W=C.format,q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==tr&&k!==pi&&(Je.getTransfer(k)===mt?(W!==Qn||q!==Gn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",k)),y}function ft(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=U,this.getTextureUnits=B,this.setTextureUnits=L,this.setTexture2D=$,this.setTexture2DArray=J,this.setTexture3D=te,this.setTextureCube=se,this.rebindTextures=st,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Tt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ZM(n,e){function t(i,s=pi){let r,a=Je.getTransfer(s);if(i===Gn)return n.UNSIGNED_BYTE;if(i===ic)return n.UNSIGNED_SHORT_4_4_4_4;if(i===sc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ad)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===od)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===sd)return n.BYTE;if(i===rd)return n.SHORT;if(i===Jr)return n.UNSIGNED_SHORT;if(i===nc)return n.INT;if(i===di)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===Ni)return n.HALF_FLOAT;if(i===ld)return n.ALPHA;if(i===cd)return n.RGB;if(i===Qn)return n.RGBA;if(i===Ai)return n.DEPTH_COMPONENT;if(i===Ls)return n.DEPTH_STENCIL;if(i===hd)return n.RED;if(i===rc)return n.RED_INTEGER;if(i===Ns)return n.RG;if(i===ac)return n.RG_INTEGER;if(i===oc)return n.RGBA_INTEGER;if(i===io||i===so||i===ro||i===ao)if(a===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===so)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===lc||i===cc||i===hc||i===uc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===lc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===uc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dc||i===fc||i===pc||i===mc||i===gc||i===oo||i===xc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===dc||i===fc)return a===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===pc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===mc)return r.COMPRESSED_R11_EAC;if(i===gc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===oo)return r.COMPRESSED_RG11_EAC;if(i===xc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===vc||i===yc||i===_c||i===bc||i===Mc||i===Sc||i===wc||i===Ec||i===Ac||i===Tc||i===Cc||i===Rc||i===Ic||i===Pc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===vc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_c)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ec)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ac)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ic)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lc||i===Nc||i===Dc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Lc)return a===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fc||i===Uc||i===lo||i===Oc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Fc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var jM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Pd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ka(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new tn({vertexShader:jM,fragmentShader:JM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hn(new Ri(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ld=class extends Ti{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,x=typeof XRWebGLBinding<"u",p=new Pd,m={},A=t.getContextAttributes(),R=null,M=null,b=[],S=[],w=new Qe,v=null,E=new vn;E.viewport=new Nt;let I=new vn;I.viewport=new Nt;let T=[E,I],P=new Jl,U=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ne=b[Y];return ne===void 0&&(ne=new Yr,b[Y]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Y){let ne=b[Y];return ne===void 0&&(ne=new Yr,b[Y]=ne),ne.getGripSpace()},this.getHand=function(Y){let ne=b[Y];return ne===void 0&&(ne=new Yr,b[Y]=ne),ne.getHandSpace()};function L(Y){let ne=S.indexOf(Y.inputSource);if(ne===-1)return;let ee=b[ne];ee!==void 0&&(ee.update(Y.inputSource,Y.frame,c||a),ee.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",z);for(let Y=0;Y<b.length;Y++){let ne=S[Y];ne!==null&&(S[Y]=null,b[Y].disconnect(ne))}U=null,B=null,p.reset();for(let Y in m)delete m[Y];e.setRenderTarget(R),f=null,u=null,d=null,s=null,M=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",G),s.addEventListener("inputsourceschange",z),A.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,Ne=null,Me=null;A.depth&&(Me=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=A.stencil?Ls:Ai,Ne=A.stencil?Qr:di);let be={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(be),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new zn(u.textureWidth,u.textureHeight,{format:Qn,type:Gn,depthTexture:new ts(u.textureWidth,u.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let ee={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new zn(f.framebufferWidth,f.framebufferHeight,{format:Qn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$e.setContext(s),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function z(Y){for(let ne=0;ne<Y.removed.length;ne++){let ee=Y.removed[ne],Ne=S.indexOf(ee);Ne>=0&&(S[Ne]=null,b[Ne].disconnect(ee))}for(let ne=0;ne<Y.added.length;ne++){let ee=Y.added[ne],Ne=S.indexOf(ee);if(Ne===-1){for(let be=0;be<b.length;be++)if(be>=S.length){S.push(ee),Ne=be;break}else if(S[be]===null){S[be]=ee,Ne=be;break}if(Ne===-1)break}let Me=b[Ne];Me&&Me.connect(ee)}}let $=new D,J=new D;function te(Y,ne,ee){$.setFromMatrixPosition(ne.matrixWorld),J.setFromMatrixPosition(ee.matrixWorld);let Ne=$.distanceTo(J),Me=ne.projectionMatrix.elements,be=ee.projectionMatrix.elements,yt=Me[14]/(Me[10]-1),qe=Me[14]/(Me[10]+1),gt=(Me[9]+1)/Me[5],st=(Me[9]-1)/Me[5],et=(Me[8]-1)/Me[0],Lt=(be[8]+1)/be[0],Ht=yt*et,Ut=yt*Lt,Kt=Ne/(-et+Lt),bt=Kt*-et;if(ne.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(bt),Y.translateZ(Kt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Me[10]===-1)Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let Tt=yt+Kt,F=qe+Kt,pn=Ht-bt,ft=Ut+(Ne-bt),C=gt*qe/F*Tt,y=st*qe/F*Tt;Y.projectionMatrix.makePerspective(pn,ft,C,y,Tt,F),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function se(Y,ne){ne===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ne.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ne=Y.near,ee=Y.far;p.texture!==null&&(p.depthNear>0&&(ne=p.depthNear),p.depthFar>0&&(ee=p.depthFar)),P.near=I.near=E.near=ne,P.far=I.far=E.far=ee,(U!==P.near||B!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),U=P.near,B=P.far),P.layers.mask=Y.layers.mask|6,E.layers.mask=P.layers.mask&-5,I.layers.mask=P.layers.mask&-3;let Ne=Y.parent,Me=P.cameras;se(P,Ne);for(let be=0;be<Me.length;be++)se(Me[be],Ne);Me.length===2?te(P,E,I):P.projectionMatrix.copy(E.projectionMatrix),ie(Y,P,Ne)};function ie(Y,ne,ee){ee===null?Y.matrix.copy(ne.matrixWorld):(Y.matrix.copy(ee.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ne.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Cl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(P)},this.getCameraTexture=function(Y){return m[Y]};let we=null;function je(Y,ne){if(h=ne.getViewerPose(c||a),g=ne,h!==null){let ee=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Ne=!1;ee.length!==P.cameras.length&&(P.cameras.length=0,Ne=!0);for(let qe=0;qe<ee.length;qe++){let gt=ee[qe],st=null;if(f!==null)st=f.getViewport(gt);else{let Lt=d.getViewSubImage(u,gt);st=Lt.viewport,qe===0&&(e.setRenderTargetTextures(M,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(M))}let et=T[qe];et===void 0&&(et=new vn,et.layers.enable(qe),et.viewport=new Nt,T[qe]=et),et.matrix.fromArray(gt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(gt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(st.x,st.y,st.width,st.height),qe===0&&(P.matrix.copy(et.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ne===!0&&P.cameras.push(et)}let Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let qe=d.getDepthInformation(ee[0]);qe&&qe.isValid&&qe.texture&&p.init(qe,s.renderState)}if(Me&&Me.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let qe=0;qe<ee.length;qe++){let gt=ee[qe].camera;if(gt){let st=m[gt];st||(st=new Ka,m[gt]=st);let et=d.getCameraImage(gt);st.sourceTexture=et}}}}for(let ee=0;ee<b.length;ee++){let Ne=S[ee],Me=b[ee];Ne!==null&&Me!==void 0&&Me.update(Ne,ne,c||a)}we&&we(Y,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}let $e=new gg;$e.setAnimationLoop(je),this.setAnimationLoop=function(Y){we=Y},this.dispose=function(){}}},QM=new Bt,Mg=new Ve;Mg.set(-1,0,0,0,1,0,0,0,1);function eS(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,pd(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,A,R,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,A,R):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Mn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Mn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let A=e.get(m),R=A.envMap,M=A.envMapRotation;R&&(p.envMap.value=R,p.envMapRotation.value.setFromMatrix4(QM.makeRotationFromEuler(M)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Mg),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,A,R){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*A,p.scale.value=R*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,A){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Mn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let A=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function tS(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){let S=b.program;i.uniformBlockBinding(M,S)}function c(M,b){let S=s[M.id];S===void 0&&(p(M),S=h(M),s[M.id]=S,M.addEventListener("dispose",A));let w=b.program;i.updateUBOMapping(M,w);let v=e.render.frame;r[M.id]!==v&&(u(M),r[M.id]=v)}function h(M){let b=d();M.__bindingPointIndex=b;let S=n.createBuffer(),w=M.__size,v=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let b=s[M.id],S=M.uniforms,w=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let v=0,E=S.length;v<E;v++){let I=S[v];if(Array.isArray(I))for(let T=0,P=I.length;T<P;T++)f(I[T],v,T,w);else f(I,v,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,b,S,w){if(x(M,b,S,w)===!0){let v=M.__offset,E=M.value;if(Array.isArray(E)){let I=0;for(let T=0;T<E.length;T++){let P=E[T],U=m(P);g(P,M.__data,I),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(I+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,M.__data)}}function g(M,b,S){typeof M=="number"||typeof M=="boolean"?b[0]=M:M.isMatrix3?(b[0]=M.elements[0],b[1]=M.elements[1],b[2]=M.elements[2],b[3]=0,b[4]=M.elements[3],b[5]=M.elements[4],b[6]=M.elements[5],b[7]=0,b[8]=M.elements[6],b[9]=M.elements[7],b[10]=M.elements[8],b[11]=0):ArrayBuffer.isView(M)?b.set(new M.constructor(M.buffer,M.byteOffset,b.length)):M.toArray(b,S)}function x(M,b,S,w){let v=M.value,E=b+"_"+S;if(w[E]===void 0)return typeof v=="number"||typeof v=="boolean"?w[E]=v:ArrayBuffer.isView(v)?w[E]=v.slice():w[E]=v.clone(),!0;{let I=w[E];if(typeof v=="number"||typeof v=="boolean"){if(I!==v)return w[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(I.equals(v)===!1)return I.copy(v),!0}}return!1}function p(M){let b=M.uniforms,S=0,w=16;for(let E=0,I=b.length;E<I;E++){let T=Array.isArray(b[E])?b[E]:[b[E]];for(let P=0,U=T.length;P<U;P++){let B=T[P],L=Array.isArray(B.value)?B.value:[B.value];for(let G=0,z=L.length;G<z;G++){let $=L[G],J=m($),te=S%w,se=te%J.boundary,ie=te+se;S+=se,ie!==0&&w-ie<J.storage&&(S+=w-ie),B.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=J.storage}}}let v=S%w;return v>0&&(S+=w-v),M.__size=S,M.__cache={},this}function m(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",M),b}function A(M){let b=M.target;b.removeEventListener("dispose",A);let S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function R(){for(let M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:R}}var nS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Di=null;function iS(){return Di===null&&(Di=new Ll(nS,16,16,Ns,Ni),Di.name="DFG_LUT",Di.minFilter=en,Di.magFilter=en,Di.wrapS=Ei,Di.wrapT=Ei,Di.generateMipmaps=!1,Di.needsUpdate=!0),Di}var Wc=class{constructor(e={}){let{canvas:t=Vm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Gn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let x=f,p=new Set([oc,ac,rc]),m=new Set([Gn,di,Jr,Qr,ic,sc]),A=new Uint32Array(4),R=new Int32Array(4),M=new D,b=null,S=null,w=[],v=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,T=!1,P=null,U=null,B=null,L=null;this._outputColorSpace=Bn;let G=0,z=0,$=null,J=-1,te=null,se=new Nt,ie=new Nt,we=null,je=new He(0),$e=0,Y=t.width,ne=t.height,ee=1,Ne=null,Me=null,be=new Nt(0,0,Y,ne),yt=new Nt(0,0,Y,ne),qe=!1,gt=new $a,st=!1,et=!1,Lt=new Bt,Ht=new D,Ut=new Nt,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},bt=!1;function Tt(){return $===null?ee:1}let F=i;function pn(_,O){return t.getContext(_,O)}try{let _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",Ot,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",_i,!1),F===null){let O="webgl2";if(F=pn(O,_),F===null)throw pn(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(_){throw ze("WebGLRenderer: "+_.message),_}let ft,C,y,k,W,q,re,le,K,j,ce,Ie,de,he,Oe,Be,We,N,oe,Z,ue,ge,Q;function Re(){ft=new h2(F),ft.init(),ue=new ZM(F,ft),C=new n2(F,ft,e,ue),y=new YM(F,ft),C.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),U=F.createFramebuffer(),B=F.createFramebuffer(),L=F.createFramebuffer(),k=new f2(F),W=new DM,q=new KM(F,ft,y,W,C,ue,k),re=new c2(I),le=new xy(F),ge=new e2(F,le),K=new u2(F,le,k,ge),j=new m2(F,K,le,ge,k),N=new p2(F,C,q),Oe=new i2(W),ce=new NM(I,re,ft,C,ge,Oe),Ie=new eS(I,W),de=new UM,he=new HM(ft),We=new Qb(I,re,y,j,g,l),Be=new qM(I,j,C),Q=new tS(F,k,C,y),oe=new t2(F,ft,k),Z=new d2(F,ft,k),k.programs=ce.programs,I.capabilities=C,I.extensions=ft,I.properties=W,I.renderLists=de,I.shadowMap=Be,I.state=y,I.info=k}Re(),x!==Gn&&(E=new x2(x,t.width,t.height,o,s,r));let Ae=new Ld(I,F);this.xr=Ae,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let _=ft.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=ft.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(_){_!==void 0&&(ee=_,this.setSize(Y,ne,!1))},this.getSize=function(_){return _.set(Y,ne)},this.setSize=function(_,O,X=!0){if(Ae.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=_,ne=O,t.width=Math.floor(_*ee),t.height=Math.floor(O*ee),X===!0&&(t.style.width=_+"px",t.style.height=O+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,_,O)},this.getDrawingBufferSize=function(_){return _.set(Y*ee,ne*ee).floor()},this.setDrawingBufferSize=function(_,O,X){Y=_,ne=O,ee=X,t.width=Math.floor(_*X),t.height=Math.floor(O*X),this.setViewport(0,0,_,O)},this.setEffects=function(_){if(x===Gn){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let O=0;O<_.length;O++)if(_[O].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(se)},this.getViewport=function(_){return _.copy(be)},this.setViewport=function(_,O,X,V){_.isVector4?be.set(_.x,_.y,_.z,_.w):be.set(_,O,X,V),y.viewport(se.copy(be).multiplyScalar(ee).round())},this.getScissor=function(_){return _.copy(yt)},this.setScissor=function(_,O,X,V){_.isVector4?yt.set(_.x,_.y,_.z,_.w):yt.set(_,O,X,V),y.scissor(ie.copy(yt).multiplyScalar(ee).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(_){y.setScissorTest(qe=_)},this.setOpaqueSort=function(_){Ne=_},this.setTransparentSort=function(_){Me=_},this.getClearColor=function(_){return _.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(_=!0,O=!0,X=!0){let V=0;if(_){let H=!1;if($!==null){let me=$.texture.format;H=p.has(me)}if(H){let me=$.texture.type,_e=m.has(me),pe=We.getClearColor(),Ce=We.getClearAlpha(),Pe=pe.r,Xe=pe.g,Ze=pe.b;_e?(A[0]=Pe,A[1]=Xe,A[2]=Ze,A[3]=Ce,F.clearBufferuiv(F.COLOR,0,A)):(R[0]=Pe,R[1]=Xe,R[2]=Ze,R[3]=Ce,F.clearBufferiv(F.COLOR,0,R))}else V|=F.COLOR_BUFFER_BIT}O&&(V|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),P=_},this.dispose=function(){t.removeEventListener("webglcontextlost",Ot,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",_i,!1),We.dispose(),de.dispose(),he.dispose(),W.dispose(),re.dispose(),j.dispose(),ge.dispose(),Q.dispose(),ce.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Lp),Ae.removeEventListener("sessionend",Np),$s.stop()};function Ot(_){_.preventDefault(),fd("WebGLRenderer: Context Lost."),T=!0}function wt(){fd("WebGLRenderer: Context Restored."),T=!1;let _=k.autoReset,O=Be.enabled,X=Be.autoUpdate,V=Be.needsUpdate,H=Be.type;Re(),k.autoReset=_,Be.enabled=O,Be.autoUpdate=X,Be.needsUpdate=V,Be.type=H}function _i(_){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function bi(_){let O=_.target;O.removeEventListener("dispose",bi),I1(O)}function I1(_){P1(_),W.remove(_)}function P1(_){let O=W.get(_).programs;O!==void 0&&(O.forEach(function(X){ce.releaseProgram(X)}),_.isShaderMaterial&&ce.releaseShaderCache(_))}this.renderBufferDirect=function(_,O,X,V,H,me){O===null&&(O=Kt);let _e=H.isMesh&&H.matrixWorld.determinantAffine()<0,pe=D1(_,O,X,V,H);y.setMaterial(V,_e);let Ce=X.index,Pe=1;if(V.wireframe===!0){if(Ce=K.getWireframeAttribute(X),Ce===void 0)return;Pe=2}let Xe=X.drawRange,Ze=X.attributes.position,De=Xe.start*Pe,_t=(Xe.start+Xe.count)*Pe;me!==null&&(De=Math.max(De,me.start*Pe),_t=Math.min(_t,(me.start+me.count)*Pe)),Ce!==null?(De=Math.max(De,0),_t=Math.min(_t,Ce.count)):Ze!=null&&(De=Math.max(De,0),_t=Math.min(_t,Ze.count));let Gt=_t-De;if(Gt<0||Gt===1/0)return;ge.setup(H,V,pe,X,Ce);let kt,Mt=oe;if(Ce!==null&&(kt=le.get(Ce),Mt=Z,Mt.setIndex(kt)),H.isMesh)V.wireframe===!0?(y.setLineWidth(V.wireframeLinewidth*Tt()),Mt.setMode(F.LINES)):Mt.setMode(F.TRIANGLES);else if(H.isLine){let mn=V.linewidth;mn===void 0&&(mn=1),y.setLineWidth(mn*Tt()),H.isLineSegments?Mt.setMode(F.LINES):H.isLineLoop?Mt.setMode(F.LINE_LOOP):Mt.setMode(F.LINE_STRIP)}else H.isPoints?Mt.setMode(F.POINTS):H.isSprite&&Mt.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))Mt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let mn=H._multiDrawStarts,ye=H._multiDrawCounts,Un=H._multiDrawCount,ot=Ce?le.get(Ce).bytesPerElement:1,Zn=W.get(V).currentProgram.getUniforms();for(let Mi=0;Mi<Un;Mi++)Zn.setValue(F,"_gl_DrawID",Mi),Mt.render(mn[Mi]/ot,ye[Mi])}else if(H.isInstancedMesh)Mt.renderInstances(De,Gt,H.count);else if(X.isInstancedBufferGeometry){let mn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ye=Math.min(X.instanceCount,mn);Mt.renderInstances(De,Gt,ye)}else Mt.render(De,Gt)};function Pp(_,O,X){_.transparent===!0&&_.side===Ii&&_.forceSinglePass===!1?(_.side=Mn,_.needsUpdate=!0,Xo(_,O,X),_.side=es,_.needsUpdate=!0,Xo(_,O,X),_.side=Ii):Xo(_,O,X)}this.compile=function(_,O,X=null){X===null&&(X=_),S=he.get(X),S.init(O),v.push(S),X.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(S.pushLight(H),H.castShadow&&S.pushShadow(H))}),_!==X&&_.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(S.pushLight(H),H.castShadow&&S.pushShadow(H))}),S.setupLights();let V=new Set;return _.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let me=H.material;if(me)if(Array.isArray(me))for(let _e=0;_e<me.length;_e++){let pe=me[_e];Pp(pe,X,H),V.add(pe)}else Pp(me,X,H),V.add(me)}),S=v.pop(),V},this.compileAsync=function(_,O,X=null){let V=this.compile(_,O,X);return new Promise(H=>{function me(){if(V.forEach(function(_e){W.get(_e).currentProgram.isReady()&&V.delete(_e)}),V.size===0){H(_);return}setTimeout(me,10)}ft.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let uu=null;function L1(_){uu&&uu(_)}function Lp(){$s.stop()}function Np(){$s.start()}let $s=new gg;$s.setAnimationLoop(L1),typeof self<"u"&&$s.setContext(self),this.setAnimationLoop=function(_){uu=_,Ae.setAnimationLoop(_),_===null?$s.stop():$s.start()},Ae.addEventListener("sessionstart",Lp),Ae.addEventListener("sessionend",Np),this.render=function(_,O){if(O!==void 0&&O.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;P!==null&&P.renderStart(_,O);let X=Ae.enabled===!0&&Ae.isPresenting===!0,V=E!==null&&($===null||X)&&E.begin(I,$);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(O),O=Ae.getCamera()),_.isScene===!0&&_.onBeforeRender(I,_,O,$),S=he.get(_,v.length),S.init(O),S.state.textureUnits=q.getTextureUnits(),v.push(S),Lt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),gt.setFromProjectionMatrix(Lt,hi,O.reversedDepth),et=this.localClippingEnabled,st=Oe.init(this.clippingPlanes,et),b=de.get(_,w.length),b.init(),w.push(b),Ae.enabled===!0&&Ae.isPresenting===!0){let _e=I.xr.getDepthSensingMesh();_e!==null&&du(_e,O,-1/0,I.sortObjects)}du(_,O,0,I.sortObjects),b.finish(),I.sortObjects===!0&&b.sort(Ne,Me,O.reversedDepth),bt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,bt&&We.addToRenderList(b,_),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&Oe.beginShadows();let H=S.state.shadowsArray;if(Be.render(H,_,O),st===!0&&Oe.endShadows(),(V&&E.hasRenderPass())===!1){let _e=b.opaque,pe=b.transmissive;if(S.setupLights(),O.isArrayCamera){let Ce=O.cameras;if(pe.length>0)for(let Pe=0,Xe=Ce.length;Pe<Xe;Pe++){let Ze=Ce[Pe];Fp(_e,pe,_,Ze)}bt&&We.render(_);for(let Pe=0,Xe=Ce.length;Pe<Xe;Pe++){let Ze=Ce[Pe];Dp(b,_,Ze,Ze.viewport)}}else pe.length>0&&Fp(_e,pe,_,O),bt&&We.render(_),Dp(b,_,O)}$!==null&&z===0&&(q.updateMultisampleRenderTarget($),q.updateRenderTargetMipmap($)),V&&E.end(I),_.isScene===!0&&_.onAfterRender(I,_,O),ge.resetDefaultState(),J=-1,te=null,v.pop(),v.length>0?(S=v[v.length-1],q.setTextureUnits(S.state.textureUnits),st===!0&&Oe.setGlobalState(I.clippingPlanes,S.state.camera)):S=null,w.pop(),w.length>0?b=w[w.length-1]:b=null,P!==null&&P.renderEnd()};function du(_,O,X,V){if(_.visible===!1)return;if(_.layers.test(O.layers)){if(_.isGroup)X=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(O);else if(_.isLightProbeGrid)S.pushLightProbeGrid(_);else if(_.isLight)S.pushLight(_),_.castShadow&&S.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||gt.intersectsSprite(_)){V&&Ut.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Lt);let _e=j.update(_),pe=_.material;pe.visible&&b.push(_,_e,pe,X,Ut.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||gt.intersectsObject(_))){let _e=j.update(_),pe=_.material;if(V&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Ut.copy(_.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ut.copy(_e.boundingSphere.center)),Ut.applyMatrix4(_.matrixWorld).applyMatrix4(Lt)),Array.isArray(pe)){let Ce=_e.groups;for(let Pe=0,Xe=Ce.length;Pe<Xe;Pe++){let Ze=Ce[Pe],De=pe[Ze.materialIndex];De&&De.visible&&b.push(_,_e,De,X,Ut.z,Ze)}}else pe.visible&&b.push(_,_e,pe,X,Ut.z,null)}}let me=_.children;for(let _e=0,pe=me.length;_e<pe;_e++)du(me[_e],O,X,V)}function Dp(_,O,X,V){let{opaque:H,transmissive:me,transparent:_e}=_;S.setupLightsView(X),st===!0&&Oe.setGlobalState(I.clippingPlanes,X),V&&y.viewport(se.copy(V)),H.length>0&&Wo(H,O,X),me.length>0&&Wo(me,O,X),_e.length>0&&Wo(_e,O,X),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Fp(_,O,X,V){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[V.id]===void 0){let De=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[V.id]=new zn(1,1,{generateMipmaps:!0,type:De?Ni:Gn,minFilter:Li,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace})}let me=S.state.transmissionRenderTarget[V.id],_e=V.viewport||se;me.setSize(_e.z*I.transmissionResolutionScale,_e.w*I.transmissionResolutionScale);let pe=I.getRenderTarget(),Ce=I.getActiveCubeFace(),Pe=I.getActiveMipmapLevel();I.setRenderTarget(me),I.getClearColor(je),$e=I.getClearAlpha(),$e<1&&I.setClearColor(16777215,.5),I.clear(),bt&&We.render(X);let Xe=I.toneMapping;I.toneMapping=ui;let Ze=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),S.setupLightsView(V),st===!0&&Oe.setGlobalState(I.clippingPlanes,V),Wo(_,X,V),q.updateMultisampleRenderTarget(me),q.updateRenderTargetMipmap(me),ft.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let _t=0,Gt=O.length;_t<Gt;_t++){let kt=O[_t],{object:Mt,geometry:mn,material:ye,group:Un}=kt;if(ye.side===Ii&&Mt.layers.test(V.layers)){let ot=ye.side;ye.side=Mn,ye.needsUpdate=!0,Up(Mt,X,V,mn,ye,Un),ye.side=ot,ye.needsUpdate=!0,De=!0}}De===!0&&(q.updateMultisampleRenderTarget(me),q.updateRenderTargetMipmap(me))}I.setRenderTarget(pe,Ce,Pe),I.setClearColor(je,$e),Ze!==void 0&&(V.viewport=Ze),I.toneMapping=Xe}function Wo(_,O,X){let V=O.isScene===!0?O.overrideMaterial:null;for(let H=0,me=_.length;H<me;H++){let _e=_[H],{object:pe,geometry:Ce,group:Pe}=_e,Xe=_e.material;Xe.allowOverride===!0&&V!==null&&(Xe=V),pe.layers.test(X.layers)&&Up(pe,O,X,Ce,Xe,Pe)}}function Up(_,O,X,V,H,me){_.onBeforeRender(I,O,X,V,H,me),_.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),H.onBeforeRender(I,O,X,V,_,me),H.transparent===!0&&H.side===Ii&&H.forceSinglePass===!1?(H.side=Mn,H.needsUpdate=!0,I.renderBufferDirect(X,O,V,H,_,me),H.side=es,H.needsUpdate=!0,I.renderBufferDirect(X,O,V,H,_,me),H.side=Ii):I.renderBufferDirect(X,O,V,H,_,me),_.onAfterRender(I,O,X,V,H,me)}function Xo(_,O,X){O.isScene!==!0&&(O=Kt);let V=W.get(_),H=S.state.lights,me=S.state.shadowsArray,_e=H.state.version,pe=ce.getParameters(_,H.state,me,O,X,S.state.lightProbeGridArray),Ce=ce.getProgramCacheKey(pe),Pe=V.programs;V.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;let Xe=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;V.envMap=re.get(_.envMap||V.environment,Xe),V.envMapRotation=V.environment!==null&&_.envMap===null?O.environmentRotation:_.envMapRotation,Pe===void 0&&(_.addEventListener("dispose",bi),Pe=new Map,V.programs=Pe);let Ze=Pe.get(Ce);if(Ze!==void 0){if(V.currentProgram===Ze&&V.lightsStateVersion===_e)return kp(_,pe),Ze}else pe.uniforms=ce.getUniforms(_),P!==null&&_.isNodeMaterial&&P.build(_,X,pe),_.onBeforeCompile(pe,I),Ze=ce.acquireProgram(pe,Ce),Pe.set(Ce,Ze),V.uniforms=pe.uniforms;let De=V.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(De.clippingPlanes=Oe.uniform),kp(_,pe),V.needsLights=U1(_),V.lightsStateVersion=_e,V.needsLights&&(De.ambientLightColor.value=H.state.ambient,De.lightProbe.value=H.state.probe,De.directionalLights.value=H.state.directional,De.directionalLightShadows.value=H.state.directionalShadow,De.spotLights.value=H.state.spot,De.spotLightShadows.value=H.state.spotShadow,De.rectAreaLights.value=H.state.rectArea,De.ltc_1.value=H.state.rectAreaLTC1,De.ltc_2.value=H.state.rectAreaLTC2,De.pointLights.value=H.state.point,De.pointLightShadows.value=H.state.pointShadow,De.hemisphereLights.value=H.state.hemi,De.directionalShadowMatrix.value=H.state.directionalShadowMatrix,De.spotLightMatrix.value=H.state.spotLightMatrix,De.spotLightMap.value=H.state.spotLightMap,De.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=S.state.lightProbeGridArray.length>0,V.currentProgram=Ze,V.uniformsList=null,Ze}function Op(_){if(_.uniformsList===null){let O=_.currentProgram.getUniforms();_.uniformsList=ta.seqWithValue(O.seq,_.uniforms)}return _.uniformsList}function kp(_,O){let X=W.get(_);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function N1(_,O){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;M.setFromMatrixPosition(O.matrixWorld);for(let X=0,V=_.length;X<V;X++){let H=_[X];if(H.texture!==null&&H.boundingBox.containsPoint(M))return H}return null}function D1(_,O,X,V,H){O.isScene!==!0&&(O=Kt),q.resetTextureUnits();let me=O.fog,_e=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,pe=$===null?I.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Je.workingColorSpace,Ce=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Pe=re.get(V.envMap||_e,Ce),Xe=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ze=!!X.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),De=!!X.morphAttributes.position,_t=!!X.morphAttributes.normal,Gt=!!X.morphAttributes.color,kt=ui;V.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(kt=I.toneMapping);let Mt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,mn=Mt!==void 0?Mt.length:0,ye=W.get(V),Un=S.state.lights;if(st===!0&&(et===!0||_!==te)){let Et=_===te&&V.id===J;Oe.setState(V,_,Et)}let ot=!1;V.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Un.state.version||ye.outputColorSpace!==pe||H.isBatchedMesh&&ye.batching===!1||!H.isBatchedMesh&&ye.batching===!0||H.isBatchedMesh&&ye.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&ye.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&ye.instancing===!1||!H.isInstancedMesh&&ye.instancing===!0||H.isSkinnedMesh&&ye.skinning===!1||!H.isSkinnedMesh&&ye.skinning===!0||H.isInstancedMesh&&ye.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ye.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ye.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ye.instancingMorph===!1&&H.morphTexture!==null||ye.envMap!==Pe||V.fog===!0&&ye.fog!==me||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Oe.numPlanes||ye.numIntersection!==Oe.numIntersection)||ye.vertexAlphas!==Xe||ye.vertexTangents!==Ze||ye.morphTargets!==De||ye.morphNormals!==_t||ye.morphColors!==Gt||ye.toneMapping!==kt||ye.morphTargetsCount!==mn||!!ye.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,ye.__version=V.version);let Zn=ye.currentProgram;ot===!0&&(Zn=Xo(V,O,H),P&&V.isNodeMaterial&&P.onUpdateProgram(V,Zn,ye));let Mi=!1,ps=!1,Rr=!1,St=Zn.getUniforms(),Wt=ye.uniforms;if(y.useProgram(Zn.program)&&(Mi=!0,ps=!0,Rr=!0),V.id!==J&&(J=V.id,ps=!0),ye.needsLights){let Et=N1(S.state.lightProbeGridArray,H);ye.lightProbeGrid!==Et&&(ye.lightProbeGrid=Et,ps=!0)}if(Mi||te!==_){y.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),St.setValue(F,"projectionMatrix",_.projectionMatrix),St.setValue(F,"viewMatrix",_.matrixWorldInverse);let gs=St.map.cameraPosition;gs!==void 0&&gs.setValue(F,Ht.setFromMatrixPosition(_.matrixWorld)),C.logarithmicDepthBuffer&&St.setValue(F,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&St.setValue(F,"isOrthographic",_.isOrthographicCamera===!0),te!==_&&(te=_,ps=!0,Rr=!0)}if(ye.needsLights&&(Un.state.directionalShadowMap.length>0&&St.setValue(F,"directionalShadowMap",Un.state.directionalShadowMap,q),Un.state.spotShadowMap.length>0&&St.setValue(F,"spotShadowMap",Un.state.spotShadowMap,q),Un.state.pointShadowMap.length>0&&St.setValue(F,"pointShadowMap",Un.state.pointShadowMap,q)),H.isSkinnedMesh){St.setOptional(F,H,"bindMatrix"),St.setOptional(F,H,"bindMatrixInverse");let Et=H.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),St.setValue(F,"boneTexture",Et.boneTexture,q))}H.isBatchedMesh&&(St.setOptional(F,H,"batchingTexture"),St.setValue(F,"batchingTexture",H._matricesTexture,q),St.setOptional(F,H,"batchingIdTexture"),St.setValue(F,"batchingIdTexture",H._indirectTexture,q),St.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&St.setValue(F,"batchingColorTexture",H._colorsTexture,q));let ms=X.morphAttributes;if((ms.position!==void 0||ms.normal!==void 0||ms.color!==void 0)&&N.update(H,X,Zn),(ps||ye.receiveShadow!==H.receiveShadow)&&(ye.receiveShadow=H.receiveShadow,St.setValue(F,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null&&(Wt.envMapIntensity.value=O.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=iS()),ps){if(St.setValue(F,"toneMappingExposure",I.toneMappingExposure),ye.needsLights&&F1(Wt,Rr),me&&V.fog===!0&&Ie.refreshFogUniforms(Wt,me),Ie.refreshMaterialUniforms(Wt,V,ee,ne,S.state.transmissionRenderTarget[_.id]),ye.needsLights&&ye.lightProbeGrid){let Et=ye.lightProbeGrid;Wt.probesSH.value=Et.texture,Wt.probesMin.value.copy(Et.boundingBox.min),Wt.probesMax.value.copy(Et.boundingBox.max),Wt.probesResolution.value.copy(Et.resolution)}ta.upload(F,Op(ye),Wt,q)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ta.upload(F,Op(ye),Wt,q),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&St.setValue(F,"center",H.center),St.setValue(F,"modelViewMatrix",H.modelViewMatrix),St.setValue(F,"normalMatrix",H.normalMatrix),St.setValue(F,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){let Et=V.uniformsGroups;for(let gs=0,Ir=Et.length;gs<Ir;gs++){let Bp=Et[gs];Q.update(Bp,Zn),Q.bind(Bp,Zn)}}return Zn}function F1(_,O){_.ambientLightColor.needsUpdate=O,_.lightProbe.needsUpdate=O,_.directionalLights.needsUpdate=O,_.directionalLightShadows.needsUpdate=O,_.pointLights.needsUpdate=O,_.pointLightShadows.needsUpdate=O,_.spotLights.needsUpdate=O,_.spotLightShadows.needsUpdate=O,_.rectAreaLights.needsUpdate=O,_.hemisphereLights.needsUpdate=O}function U1(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(_,O,X){let V=W.get(_);V.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),W.get(_.texture).__webglTexture=O,W.get(_.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:X,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,O){let X=W.get(_);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(_,O=0,X=0){$=_,G=O,z=X;let V=null,H=!1,me=!1;if(_){let pe=W.get(_);if(pe.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(F.FRAMEBUFFER,pe.__webglFramebuffer),se.copy(_.viewport),ie.copy(_.scissor),we=_.scissorTest,y.viewport(se),y.scissor(ie),y.setScissorTest(we),J=-1;return}else if(pe.__webglFramebuffer===void 0)q.setupRenderTarget(_);else if(pe.__hasExternalTextures)q.rebindTextures(_,W.get(_.texture).__webglTexture,W.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Xe=_.depthTexture;if(pe.__boundDepthTexture!==Xe){if(Xe!==null&&W.has(Xe)&&(_.width!==Xe.image.width||_.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(_)}}let Ce=_.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(me=!0);let Pe=W.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Pe[O])?V=Pe[O][X]:V=Pe[O],H=!0):_.samples>0&&q.useMultisampledRTT(_)===!1?V=W.get(_).__webglMultisampledFramebuffer:Array.isArray(Pe)?V=Pe[X]:V=Pe,se.copy(_.viewport),ie.copy(_.scissor),we=_.scissorTest}else se.copy(be).multiplyScalar(ee).floor(),ie.copy(yt).multiplyScalar(ee).floor(),we=qe;if(X!==0&&(V=U),y.bindFramebuffer(F.FRAMEBUFFER,V)&&y.drawBuffers(_,V),y.viewport(se),y.scissor(ie),y.setScissorTest(we),H){let pe=W.get(_.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,pe.__webglTexture,X)}else if(me){let pe=O;for(let Ce=0;Ce<_.textures.length;Ce++){let Pe=W.get(_.textures[Ce]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ce,Pe.__webglTexture,X,pe)}}else if(_!==null&&X!==0){let pe=W.get(_.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pe.__webglTexture,X)}J=-1},this.readRenderTargetPixels=function(_,O,X,V,H,me,_e,pe=0){if(!(_&&_.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=W.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&_e!==void 0&&(Ce=Ce[_e]),Ce){y.bindFramebuffer(F.FRAMEBUFFER,Ce);try{let Pe=_.textures[pe],Xe=Pe.format,Ze=Pe.type;if(_.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+pe),!C.textureFormatReadable(Xe)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(Ze)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=_.width-V&&X>=0&&X<=_.height-H&&F.readPixels(O,X,V,H,ue.convert(Xe),ue.convert(Ze),me)}finally{let Pe=$!==null?W.get($).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(_,O,X,V,H,me,_e,pe=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=W.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&_e!==void 0&&(Ce=Ce[_e]),Ce)if(O>=0&&O<=_.width-V&&X>=0&&X<=_.height-H){y.bindFramebuffer(F.FRAMEBUFFER,Ce);let Pe=_.textures[pe],Xe=Pe.format,Ze=Pe.type;if(_.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+pe),!C.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let De=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,De),F.bufferData(F.PIXEL_PACK_BUFFER,me.byteLength,F.STREAM_READ),F.readPixels(O,X,V,H,ue.convert(Xe),ue.convert(Ze),0);let _t=$!==null?W.get($).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,_t);let Gt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Gm(F,Gt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,De),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,me),F.deleteBuffer(De),F.deleteSync(Gt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,O=null,X=0){let V=Math.pow(2,-X),H=Math.floor(_.image.width*V),me=Math.floor(_.image.height*V),_e=O!==null?O.x:0,pe=O!==null?O.y:0;q.setTexture2D(_,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,_e,pe,H,me),y.unbindTexture()},this.copyTextureToTexture=function(_,O,X=null,V=null,H=0,me=0){let _e,pe,Ce,Pe,Xe,Ze,De,_t,Gt,kt=_.isCompressedTexture?_.mipmaps[me]:_.image;if(X!==null)_e=X.max.x-X.min.x,pe=X.max.y-X.min.y,Ce=X.isBox3?X.max.z-X.min.z:1,Pe=X.min.x,Xe=X.min.y,Ze=X.isBox3?X.min.z:0;else{let Wt=Math.pow(2,-H);_e=Math.floor(kt.width*Wt),pe=Math.floor(kt.height*Wt),_.isDataArrayTexture?Ce=kt.depth:_.isData3DTexture?Ce=Math.floor(kt.depth*Wt):Ce=1,Pe=0,Xe=0,Ze=0}V!==null?(De=V.x,_t=V.y,Gt=V.z):(De=0,_t=0,Gt=0);let Mt=ue.convert(O.format),mn=ue.convert(O.type),ye;O.isData3DTexture?(q.setTexture3D(O,0),ye=F.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(q.setTexture2DArray(O,0),ye=F.TEXTURE_2D_ARRAY):(q.setTexture2D(O,0),ye=F.TEXTURE_2D),y.activeTexture(F.TEXTURE0),y.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),y.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),y.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);let Un=y.getParameter(F.UNPACK_ROW_LENGTH),ot=y.getParameter(F.UNPACK_IMAGE_HEIGHT),Zn=y.getParameter(F.UNPACK_SKIP_PIXELS),Mi=y.getParameter(F.UNPACK_SKIP_ROWS),ps=y.getParameter(F.UNPACK_SKIP_IMAGES);y.pixelStorei(F.UNPACK_ROW_LENGTH,kt.width),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,kt.height),y.pixelStorei(F.UNPACK_SKIP_PIXELS,Pe),y.pixelStorei(F.UNPACK_SKIP_ROWS,Xe),y.pixelStorei(F.UNPACK_SKIP_IMAGES,Ze);let Rr=_.isDataArrayTexture||_.isData3DTexture,St=O.isDataArrayTexture||O.isData3DTexture;if(_.isDepthTexture){let Wt=W.get(_),ms=W.get(O),Et=W.get(Wt.__renderTarget),gs=W.get(ms.__renderTarget);y.bindFramebuffer(F.READ_FRAMEBUFFER,Et.__webglFramebuffer),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,gs.__webglFramebuffer);for(let Ir=0;Ir<Ce;Ir++)Rr&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(_).__webglTexture,H,Ze+Ir),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(O).__webglTexture,me,Gt+Ir)),F.blitFramebuffer(Pe,Xe,_e,pe,De,_t,_e,pe,F.DEPTH_BUFFER_BIT,F.NEAREST);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(H!==0||_.isRenderTargetTexture||W.has(_)){let Wt=W.get(_),ms=W.get(O);y.bindFramebuffer(F.READ_FRAMEBUFFER,B),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,L);for(let Et=0;Et<Ce;Et++)Rr?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Wt.__webglTexture,H,Ze+Et):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Wt.__webglTexture,H),St?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ms.__webglTexture,me,Gt+Et):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ms.__webglTexture,me),H!==0?F.blitFramebuffer(Pe,Xe,_e,pe,De,_t,_e,pe,F.COLOR_BUFFER_BIT,F.NEAREST):St?F.copyTexSubImage3D(ye,me,De,_t,Gt+Et,Pe,Xe,_e,pe):F.copyTexSubImage2D(ye,me,De,_t,Pe,Xe,_e,pe);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else St?_.isDataTexture||_.isData3DTexture?F.texSubImage3D(ye,me,De,_t,Gt,_e,pe,Ce,Mt,mn,kt.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(ye,me,De,_t,Gt,_e,pe,Ce,Mt,kt.data):F.texSubImage3D(ye,me,De,_t,Gt,_e,pe,Ce,Mt,mn,kt):_.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,me,De,_t,_e,pe,Mt,mn,kt.data):_.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,me,De,_t,kt.width,kt.height,Mt,kt.data):F.texSubImage2D(F.TEXTURE_2D,me,De,_t,_e,pe,Mt,mn,kt);y.pixelStorei(F.UNPACK_ROW_LENGTH,Un),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ot),y.pixelStorei(F.UNPACK_SKIP_PIXELS,Zn),y.pixelStorei(F.UNPACK_SKIP_ROWS,Mi),y.pixelStorei(F.UNPACK_SKIP_IMAGES,ps),me===0&&O.generateMipmaps&&F.generateMipmap(ye),y.unbindTexture()},this.initRenderTarget=function(_){W.get(_).__webglFramebuffer===void 0&&q.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?q.setTextureCube(_,0):_.isData3DTexture?q.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?q.setTexture2DArray(_,0):q.setTexture2D(_,0),y.unbindTexture()},this.resetState=function(){G=0,z=0,$=null,y.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};var ia={amber:"#FFB020",coral:"#FF6B4A",magenta:"#E85C9A",violet:"#9B7BFF",azure:"#4FA8FF",teal:"#2FD0C0",lime:"#9BD648",bone:"#E8DCC8"},Nd=Object.keys(ia),Sg=["text","label","color","pos","placed","createdAt","lastTouchedAt"];function Eg(n,e,t){return{id:n,name:e,createdAt:t,lastOpenedAt:t,nodes:{},links:{},holding:{origin:[0,-14,0],radius:5.2},clocks:{},removedLinks:{}}}function Dd(n,e){let t=!1,i=(s,r,a)=>{let o=n.clocks[s];if(o===void 0||r>o)return n.clocks[s]=r,n.clocks[s+"#a"]=wg(a),!0;if(r===o){let l=wg(a);if(l>(n.clocks[s+"#a"]??-1))return n.clocks[s+"#a"]=l,!0}return!1};switch(e.t){case"node.set":{let s=n.nodes[e.id],r=s??{id:e.id,text:"",label:"",color:"bone",pos:[0,0,0],placed:!1,createdAt:e.ts,lastTouchedAt:e.ts};for(let a of Sg)a in e.fields&&i(`n:${e.id}:${a}`,e.ts,e.actor)&&(r[a]=e.fields[a],t=!0);return s||(n.nodes[e.id]=r,t=!0),s===void 0&&n.clocks[`n:${e.id}:#del`]!==void 0&&delete n.clocks[`n:${e.id}:#del`],t}case"node.del":{if(Sg.some(r=>(n.clocks[`n:${e.id}:${r}`]??-1)>e.ts))return!1;if(n.nodes[e.id]){delete n.nodes[e.id];for(let r of Object.keys(n.links))(n.links[r].a===e.id||n.links[r].b===e.id)&&(n.removedLinks[r]=e.ts,delete n.links[r]);n.clocks[`n:${e.id}:#del`]=e.ts,t=!0}return t}case"link.add":return n.removedLinks[e.id]!==void 0&&n.removedLinks[e.id]>=e.ts?!1:(n.links[e.id]||(n.links[e.id]={id:e.id,a:e.a,b:e.b,createdAt:e.ts},delete n.removedLinks[e.id],n.clocks[`l:${e.id}`]=e.ts,t=!0),t);case"link.del":return(n.clocks[`l:${e.id}`]??-1)>e.ts?!1:(n.links[e.id]&&(delete n.links[e.id],n.removedLinks[e.id]=e.ts,t=!0),t);case"map.set":{for(let s of Object.keys(e.fields))i(`m:${s}`,e.ts,e.actor)&&(n[s]=e.fields[s],t=!0);return t}}}function wg(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function Cn(n){return Object.values(n.nodes).sort((e,t)=>e.id<t.id?-1:e.id>t.id?1:0)}function Ag(n){return Object.values(n.links).sort((e,t)=>e.id<t.id?-1:e.id>t.id?1:0)}function lr(n){return Cn(n).filter(e=>!e.placed)}function Fd(n,e){let t=new Set;for(let i of Object.values(n.links))i.a===e?t.add(i.b):i.b===e&&t.add(i.a);return t}function qc(n,e){let t=1/0,i=-1/0;for(let s of Object.values(n.nodes))s.createdAt<t&&(t=s.createdAt),s.createdAt>i&&(i=s.createdAt);return!isFinite(t)||i<=t?1:(e.createdAt-t)/(i-t)}function Tg(n,e,t){let i=new Map,s=e?Fd(n,e):new Set;for(let r of Object.values(n.nodes))i.set(r.id,r.id===e?"selected":t.has(r.id)?"searchHit":r.placed?s.has(r.id)?"connected":"plain":"unplaced");return i}function Cg(n,e){let t=e.trim().toLowerCase();return t?Cn(n).map(i=>{let s=i.text.toLowerCase(),r=i.label.toLowerCase(),a=-1;return s===t?a=0:s.startsWith(t)?a=1:r===t?a=2:s.includes(t)?a=3:r.includes(t)&&(a=4),{n:i,score:a}}).filter(i=>i.score>=0).sort((i,s)=>i.score-s.score||(i.n.id<s.n.id?-1:1)).map(i=>({n:i.n,field:i.score===2||i.score===4?"label":"text"})):[]}var Rg=0;function Ud(n){Rg++;let e=Math.floor(Math.random()*16777215).toString(36);return`${n}${Date.now().toString(36)}${Rg.toString(36)}${e}`}var Yc=class n{doc;actor;lastTs=0;listeners=[];transport=null;constructor(e,t){this.doc=e,this.actor=t}static blank(e,t,i){return new n(Eg(e,t,Date.now()),i)}lastChange=null;describe(e){if(e.t==="node.set"){let t=e.fields;return"pos"in t&&t.placed===!0?"placed a node":"pos"in t?"moved a node":"text"in t?"edited text":"color"in t?"changed a colour":"label"in t?"set a label":"edited a node"}return e.t==="link.add"?"connected two nodes":e.t==="link.del"?"removed a filament":e.t==="node.del"?"deleted a node":e.t}attach(e){this.transport=e,e.onRemote(t=>{this.lastTs=Math.max(this.lastTs,t.ts),Dd(this.doc,t)&&(this.lastChange={actor:t.actor,remote:t.actor!==this.actor,what:this.describe(t),at:t.ts},this.emit(t))})}detach(){this.transport=null}subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}emit(e){for(let t of this.listeners)t(this.doc,e)}ts(){let e=Date.now();return this.lastTs=e>this.lastTs?e:this.lastTs+1,this.lastTs}commit(e){let t=e(this.ts());return Dd(this.doc,t)&&(this.lastChange={actor:t.actor,remote:!1,what:this.describe(t),at:t.ts},this.emit(t)),this.transport?.send(t),t}replaceDoc(e){this.doc=e,this.emit(null)}quickAdd(e,t="bone"){let i=Ud("n"),s=lr(this.doc).length,r=this.doc.holding,a=s*2.39996%(Math.PI*2),o=r.radius*(.34+.42*(s%5/5)),l=[r.origin[0]+o*Math.cos(a),r.origin[1]+(s%3-1)*r.radius*.26,r.origin[2]+o*Math.sin(a)],c=Date.now();return this.commit(h=>({t:"node.set",id:i,actor:this.actor,ts:h,fields:{text:e,label:"holding",color:t,pos:l,placed:!1,createdAt:c,lastTouchedAt:c}})),i}moveStack=[];movesDropped=0;pending=null;beginMove(){this.pending&&this.pending.size&&this.endMove("moved thoughts"),this.pending=new Map}endMove(e){let t=this.pending;if(this.pending=null,!t||!t.size)return;let i=[];for(let[s,r]of t){let a=this.doc.nodes[s];a&&(a.pos[0]!==r[0]||a.pos[1]!==r[1]||a.pos[2]!==r[2])&&i.push([s,r])}if(i.length)for(this.moveStack.push({what:e,at:Date.now(),before:i});this.moveStack.length>200;)this.moveStack.shift(),this.movesDropped++}noteMove(e){if(!this.pending||this.pending.has(e))return;let t=this.doc.nodes[e];t&&this.pending.set(e,[t.pos[0],t.pos[1],t.pos[2]])}get undoableMove(){let e=this.moveStack[this.moveStack.length-1];return e?{what:e.what,nodes:e.before.length}:null}get undoDepth(){return this.moveStack.length}undoMove(){let e=this.moveStack.pop();if(!e)return null;for(let[t,i]of e.before)this.doc.nodes[t]&&this.commit(s=>({t:"node.set",id:t,actor:this.actor,ts:s,fields:{pos:[i[0],i[1],i[2]],lastTouchedAt:Date.now()}}));return{what:e.what,nodes:e.before.length}}place(e,t,i){let s=this.doc.nodes[e];if(!s)return;let r=i!==void 0?i:s.label==="holding"?"":s.label;this.noteMove(e),this.commit(a=>({t:"node.set",id:e,actor:this.actor,ts:a,fields:{pos:t,placed:!0,lastTouchedAt:Date.now(),label:r}}))}move(e,t){this.doc.nodes[e]&&(this.noteMove(e),this.commit(i=>({t:"node.set",id:e,actor:this.actor,ts:i,fields:{pos:t,lastTouchedAt:Date.now()}})))}moveCluster(e,t){for(let i of e){let s=this.doc.nodes[i];if(!s)continue;this.noteMove(i);let r=[s.pos[0]+t[0],s.pos[1]+t[1],s.pos[2]+t[2]];this.commit(a=>({t:"node.set",id:i,actor:this.actor,ts:a,fields:{pos:r,lastTouchedAt:Date.now()}}))}}setText(e,t){this.commit(i=>({t:"node.set",id:e,actor:this.actor,ts:i,fields:{text:t,lastTouchedAt:Date.now()}}))}setColor(e,t){this.commit(i=>({t:"node.set",id:e,actor:this.actor,ts:i,fields:{color:t,lastTouchedAt:Date.now()}}))}setLabel(e,t){this.commit(i=>({t:"node.set",id:e,actor:this.actor,ts:i,fields:{label:t,lastTouchedAt:Date.now()}}))}remove(e){this.commit(t=>({t:"node.del",id:e,actor:this.actor,ts:t}))}connect(e,t){if(e===t||!this.doc.nodes[e]||!this.doc.nodes[t])return null;let[i,s]=e<t?[e,t]:[t,e],r=`l${i}_${s}`;return this.doc.links[r]||this.commit(a=>({t:"link.add",id:r,a:i,b:s,actor:this.actor,ts:a})),r}disconnect(e,t){let[i,s]=e<t?[e,t]:[t,e],r=`l${i}_${s}`;this.doc.links[r]&&this.commit(a=>({t:"link.del",id:r,actor:this.actor,ts:a}))}rename(e){this.commit(t=>({t:"map.set",actor:this.actor,ts:t,fields:{name:e}}))}touchOpened(){this.commit(e=>({t:"map.set",actor:this.actor,ts:e,fields:{lastOpenedAt:Date.now()}}))}holdingCount(){return lr(this.doc).length}neighboursOf(e){return Fd(this.doc,e)}node(e){return this.doc.nodes[e]}};var Kc=class{constructor(e,t,i){this.url=e;this.actor=t;this.account=i}url;actor;ws=null;queue=[];remoteFns=[];snapFns=[];origin={from:"live"};connId=null;serverPid=null;mapsFns=[];statusFns=[];status="offline";detail="not connected";account;connect(e){this.setStatus("connecting",`connecting to ${this.url}`);let t=new WebSocket(`${this.url}?map=${encodeURIComponent(e)}&actor=${encodeURIComponent(this.actor)}&account=${encodeURIComponent(this.account)}`);this.ws=t,t.onopen=()=>{this.setStatus("live",`live \xB7 ${this.account}`);for(let i of this.queue.splice(0))t.send(JSON.stringify({t:"op",op:i}))},t.onclose=()=>{this.status!=="error"&&this.setStatus("offline","disconnected")},t.onerror=()=>this.setStatus("error","connection failed"),t.onmessage=i=>{let s=JSON.parse(i.data);if(s.t==="op")for(let r of this.remoteFns)r(s.op);else if(s.t==="snapshot"){this.origin=s.origin??{from:"live"},s.conn!==void 0&&(this.connId=s.conn),s.serverPid!==void 0&&(this.serverPid=s.serverPid);for(let r of this.snapFns)r(s.doc,this.origin)}else if(s.t==="maps")for(let r of this.mapsFns)r(s.maps);else s.t==="error"&&this.setStatus("error",s.message)}}close(){this.ws?.close(),this.ws=null}send(e){this.ws&&this.ws.readyState===WebSocket.OPEN?this.ws.send(JSON.stringify({t:"op",op:e})):this.queue.push(e)}request(e){this.ws&&this.ws.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(e))}onRemote(e){this.remoteFns.push(e)}onSnapshot(e){this.snapFns.push(e)}onMaps(e){this.mapsFns.push(e)}onStatus(e){this.statusFns.push(e),e(this.status,this.detail)}setStatus(e,t){this.status=e,this.detail=t;for(let i of this.statusFns)i(e,t)}};var Dg="#120E0B",sS="#8A7F76",rS="#D8CCC0",eh="#EFE6D8",aS={plain:0,connected:1,unplaced:2,searchHit:3,selected:4},mo={plain:.5,connected:.72,unplaced:.86,searchHit:.95,selected:1},Ig=new Map;function Vd(n){let e=ia[n]??n,t=Ig.get(e);return t||(t=new He(e),Ig.set(e,t)),t}var Pg=(n,e,t)=>.2126*n+.7152*e+.0722*t;var Od=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4),kd=n=>n<=.0031308?12.92*n:1.055*Math.pow(n,1/2.4)-.055;function oS(n,e,t){let i=Od(n),s=Od(e),r=Od(t),a=Math.cbrt(.4122214708*i+.5363325363*s+.0514459929*r),o=Math.cbrt(.2119034982*i+.6806995451*s+.1073969566*r),l=Math.cbrt(.0883024619*i+.2817188376*s+.6299787005*r);return[.2104542553*a+.793617785*o-.0040720468*l,1.9779984951*a-2.428592205*o+.4505937099*l,.0259040371*a+.7827717662*o-.808675766*l]}function Bd(n,e,t){let i=(n+.3963377774*e+.2158037573*t)**3,s=(n-.1055613458*e-.0638541728*t)**3,r=(n-.0894841775*e-1.291485548*t)**3;return[kd(4.0767416621*i-3.3077115913*s+.2309699292*r),kd(-1.2684380046*i+2.6097574011*s-.3413193965*r),kd(-.0041960863*i-.7034186147*s+1.707614701*r)]}var zd={plain:.26,connected:.37,unplaced:.48,searchHit:.59,selected:.7},Zc=.35,lS=.1,Lg=["plain","connected","unplaced","searchHit","selected"],cS=[.12,Zc,Zc,Zc,Zc],go=Lg.map((n,e)=>{let t=zd[n],i=e===0?lS:zd[Lg[e-1]];return(t-cS[e]*(t-i))/t}),Ng=new Map;function Fg(n,e){let t=`${n}|${e}`,i=Ng.get(t);if(!i){let s=Vd(n),r=zd[e],[,a,o]=oS(s.r,s.g,s.b),l=u=>{let f=0,g=1.4;for(let x=0;x<28;x++){let p=(f+g)/2,A=Bd(p,a*u,o*u).map(R=>Math.min(1,Math.max(0,R)));Pg(A[0],A[1],A[2])<r?f=p:g=p}return(f+g)/2},c=0,h=1,d=null;for(let u=0;u<22;u++){let f=(c+h)/2,g=Bd(l(f),a*f,o*f);g.every(p=>p>=-.002&&p<=1.002)&&Math.abs(Pg(Math.min(1,Math.max(0,g[0])),Math.min(1,Math.max(0,g[1])),Math.min(1,Math.max(0,g[2])))-r)<.004?(d=g.map(p=>Math.min(1,Math.max(0,p))),c=f):h=f}d||(d=Bd(l(0),0,0).map(f=>Math.min(1,Math.max(0,f)))),i=new He(d[0],d[1],d[2]),Ng.set(t,i)}return i}var hS=`
precision highp float;
attribute vec3  iPos;
attribute vec3  iColor;
attribute float iState;
attribute float iSize;     // quad half-extent in world units
attribute float iSat;      // recency -> chroma (D-007)
uniform vec2  uViewport;
uniform float uMinPx;
uniform float uMaxPx;
uniform float uFadeStart;
uniform float uFadeEnd;
uniform float uFadeFloor0; uniform float uFadeFloor1; uniform float uFadeFloor2;
uniform float uFadeFloor3; uniform float uFadeFloor4;
varying vec2  vQuad;
varying vec3  vColor;
varying float vState;
varying float vFade;
void main() {
  vec4 mv = modelViewMatrix * vec4(iPos, 1.0);
  float dist = max(-mv.z, 1e-4);
  float pxPerWorld = uViewport.y * projectionMatrix[1][1] * 0.5 / dist;
  float px = clamp(iSize * pxPerWorld, uMinPx, uMaxPx);
  float halfW = px / pxPerWorld;
  mv.xy += position.xy * 2.0 * halfW;
  gl_Position = projectionMatrix * mv;
  vQuad = position.xy * 2.0;
  // Rec.709 on encoded values, the same weighting the palette is solved
  // against (see luma709) \u2014 luma, deliberately, not relative luminance.
  // A desaturating mix has to hold luminance constant, and it can only do that
  // if it agrees with the function that set the luminance in the first place.
  float lum = dot(iColor, vec3(0.2126, 0.7152, 0.0722));
  vColor = mix(vec3(lum), iColor, iSat);
  vState = iState;
  // Distance fades toward the dark. Never to nothing: no zoom level where
  // quality quietly ends (\xA701 detail standard).
  // Softer than it was, because this now scales LUMINANCE directly rather than
  // alpha over a near-black ground: the same floor would have darkened the
  // world well past where it sat before. Distance still reads, and the state
  // ladder keeps its full range at every depth.
  // A LANDMARK FLOOR. Distant districts have to stay readable as landmarks \u2014
  // at the end of a fly-to, the surrounding map is the thing that tells you
  // where the thought lives, and it had fallen to near-ground. A step above the
  // ground, not at it.
  // The floor is the state's OWN band, so distance can never carry a node down
  // into the range of a lower state. See STATE_FADE_FLOOR.
  float fl = uFadeFloor0;
  int sti = int(iState + 0.5);
  if (sti == 1) fl = uFadeFloor1;
  else if (sti == 2) fl = uFadeFloor2;
  else if (sti == 3) fl = uFadeFloor3;
  else if (sti == 4) fl = uFadeFloor4;
  vFade = mix(1.0, fl, clamp((dist - uFadeStart) / (uFadeEnd - uFadeStart), 0.0, 1.0));
}`,uS=`
precision highp float;
#define TAU 6.28318530718
#define CORE 0.30
varying vec2  vQuad;
varying vec3  vColor;
varying float vState;
varying float vFade;
uniform float uTime;
uniform float uI0; uniform float uI1; uniform float uI2; uniform float uI3; uniform float uI4;

float band(float r, float radius, float halfw, float aa) {
  return 1.0 - smoothstep(halfw - aa, halfw + aa, abs(r - radius));
}
void main() {
  float r  = length(vQuad);
  float aa = max(fwidth(r) * 1.1, 0.004);
  int st = int(vState + 0.5);

  // The state's lightness is baked into the colour on the way in, so that the
  // ladder can be exact for every hue (see stateColour). What is left here is
  // the one motion in the world: unplaced nodes pulse in LIGHT, never in
  // position. \xA701/Atmosphere grants exactly this one exception.
  float intensity = 1.0;
  if (st == 2) intensity = mix(0.955, 1.093, 0.5 + 0.5 * sin(uTime * (TAU / 3.2)));

  // Core: a tight self-luminous disc with a hotter centre and no halo outside it.
  float core = 1.0 - smoothstep(CORE - aa, CORE + aa, r);
  // The hot centre. Raised when the palette was lightness-equalised: the ladder
  // is exact but sits at the least luminous hue's level, and without a stronger
  // core the nodes read as flat discs rather than as small light sources. The
  // boost is the same for every state, so the ladder's ordering is untouched.
  // The hot centre, raised and broadened when the palette was lightness
  // equalised: the ladder is exact but now sits at the least luminous hue's
  // level, and a linear falloff put the boost in the innermost pixel or two
  // only, so the discs read as flat rather than as small light sources. The
  // boost is identical for every state, so the ladder's ordering is untouched.
  // A small hot centre. It was raised while the ladder sat at the dimmest hue's
  // level and had to make up the difference; with the ladder now drawn at its
  // own reference lightness, the same boost blew every state out to white.
  float hot  = 1.0 + 0.16 * pow(1.0 - clamp(r / CORE, 0.0, 1.0), 0.40);

  // A state's RING is its signature and is drawn at a fixed signature lightness,
  // independent of which rung the core sits on. Drawing the ring at the core's
  // own rung made the connected ring \u2014 the lowest lit state \u2014 read as a dark
  // halo rather than as a ring, so the core's rung alone now carries the ladder
  // and the geometry alone carries the signature.
  float coreLum = max(dot(vColor, vec3(0.299, 0.587, 0.114)), 1e-4);
  vec3  sig = clamp(vColor * (0.78 / coreLum), 0.0, 1.0);
  float ring = 0.0;
  vec3  ringCol = sig;
  float u = atan(vQuad.y, vQuad.x) / TAU + 0.5;

  if (st == 4) {                                   // selected: solid heavy ring
    ring = band(r, CORE * 1.35, 0.052, aa);
    ringCol = mix(sig, vec3(1.0), 0.30);
  } else if (st == 1) {                            // connected: one thin ring
    ring = band(r, CORE * 1.50, 0.019, aa);
  } else if (st == 2) {                            // unplaced: dashed ring
    float f = fract(u * 8.0);
    float dash = smoothstep(0.0, 0.05, f) * (1.0 - smoothstep(0.50, 0.55, f));
    ring = band(r, CORE * 1.70, 0.030, aa) * dash;
  } else if (st == 3) {                            // search hit: four ticks
    // Long and thin, so they read as marks pointing at the node rather than as
    // four little squares sitting beside it.
    // A full crosshair span rather than four short marks. At the end of a
    // fly-to the hit fills the frame and the ticks were the faintest thing in
    // it \u2014 the state was being told apart from 'selected' by being marginally
    // brighter, which is the dual coding failing exactly where it matters most.
    // PULLED IN. At 1.70-3.30 core radii the signature reached 3.4x the node's
    // own radius \u2014 the cycle-9 Art Director measured a 20 px core throwing a
    // 68 px outer ring \u2014 and since the label arbiter clears a node's whole
    // mark, every search hit's name was pushed about 65 px out in a frame that
    // is more than 80 % empty. The decoration, not competition, was doing the
    // displacing. 1.35-2.10 keeps the crosshair silhouette (still a span
    // pointing at the node, not four squares beside it) at 2.1x rather than
    // 3.4x, so the name can sit adjacent again.
    float radial = smoothstep(CORE * 1.35 - aa, CORE * 1.35 + aa, r)
                 * (1.0 - smoothstep(CORE * 2.10 - aa, CORE * 2.10 + aa, r));
    float f = fract(u * 4.0);
    float d = min(f, 1.0 - f);
    ring = radial * (1.0 - smoothstep(0.026, 0.048, d));
    // Tinted from the node's own hue, lifted toward bone. Pure white squares
    // read as a transform gizmo's drag handles rather than as a state.
    ringCol = mix(sig, vec3(0.955, 0.918, 0.862), 0.42);
  }

  float a = max(core, ring);
  if (a < 0.004) discard;
  // Colour is NOT pre-multiplied by coverage: alpha carries coverage, and the
  // distance fade rides on alpha so it blends toward the ground colour.
  vec3 col = (vColor * hot * core + ringCol * ring) / max(core + ring, 1e-4);
  // Distance attenuates LUMINANCE, not alpha. Blending a distant node toward
  // the ground pulled its colour toward the ground's hue, which compressed
  // saturation by about as much as the recency channel spans \u2014 so age and
  // distance landed in the same numeric range and could not be told apart by
  // eye. Scaling RGB uniformly leaves (max-min)/max exactly where it was, so
  // the whole chroma range stays reserved for recency (D-007).
  gl_FragColor = vec4(col * intensity * vFade, a);
}`,jc=class{mesh;geo;cap=0;iPos;iColor;iState;iSize;iSat;constructor(){this.geo=new sr;let e=new Ri(1,1);this.geo.index=e.index,this.geo.attributes.position=e.attributes.position;let t=new tn({vertexShader:hS,fragmentShader:uS,uniforms:{uViewport:{value:new Qe(1920,1080)},uMinPx:{value:7},uMaxPx:{value:190},uFadeStart:{value:55},uFadeEnd:{value:300},uFadeFloor0:{value:go[0]},uFadeFloor1:{value:go[1]},uFadeFloor2:{value:go[2]},uFadeFloor3:{value:go[3]},uFadeFloor4:{value:go[4]},uTime:{value:0},uI0:{value:mo.plain},uI1:{value:mo.connected},uI2:{value:mo.unplaced},uI3:{value:mo.searchHit},uI4:{value:mo.selected}},transparent:!0,depthWrite:!1,depthTest:!0,blending:Jn});this.mesh=new hn(this.geo,t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=20,this.grow(256)}get material(){return this.mesh.material}setViewport(e,t){this.material.uniforms.uViewport.value.set(e,t)}setPx(e,t){this.material.uniforms.uMinPx.value=e,this.material.uniforms.uMaxPx.value=t}setFade(e,t){this.material.uniforms.uFadeStart.value=e,this.material.uniforms.uFadeEnd.value=t}setTime(e){this.material.uniforms.uTime.value=e}grow(e){if(e<=this.cap)return;this.cap=Math.max(e,Math.ceil(this.cap*1.6));let t=i=>new ir(new Float32Array(this.cap*i),i);this.iPos=t(3),this.iColor=t(3),this.iState=t(1),this.iSize=t(1),this.iSat=t(1),this.geo.setAttribute("iPos",this.iPos),this.geo.setAttribute("iColor",this.iColor),this.geo.setAttribute("iState",this.iState),this.geo.setAttribute("iSize",this.iSize),this.geo.setAttribute("iSat",this.iSat)}build(e){this.grow(Math.max(e.length,1)),e.forEach((t,i)=>{this.iPos.setXYZ(i,t.pos.x,t.pos.y,t.pos.z),this.iColor.setXYZ(i,t.color.r,t.color.g,t.color.b),this.iState.setX(i,aS[t.state]),this.iSize.setX(i,t.size),this.iSat.setX(i,t.sat)});for(let t of[this.iPos,this.iColor,this.iState,this.iSize,this.iSat])t.needsUpdate=!0;this.geo.instanceCount=e.length}},dS=`
precision highp float;
attribute vec3 aColor;
attribute float aAlpha;
uniform float uFadeStart;
uniform float uFadeEnd;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  float dist = max(-mv.z, 1e-4);
  vColor = aColor;
  // A FLOOR, not a fade to nothing. At whole-brain framing every link is far,
  // so the distance fade took the whole graph under the perceptual threshold at
  // once: a rest filament measured (26,21,17) against an (18,14,11) ground \u2014
  // 1.06:1 \u2014 so the map's connections were present in the data and absent from
  // the render. The floor is set from the contrast the ground demands: at 0.40
  // of its rest alpha a filament blends to about (44,38,33), roughly 1.35:1.
  vAlpha = aAlpha * mix(1.0, 0.40, clamp((dist - uFadeStart) / (uFadeEnd - uFadeStart), 0.0, 1.0));
  gl_Position = projectionMatrix * mv;
}`,fS=`
precision highp float;
varying vec3 vColor;
varying float vAlpha;
void main() { gl_FragColor = vec4(vColor, vAlpha); }`,Jc=class{mesh;geo=new Tn;cap=0;pos;col;alp;rest=new He(sS);live=new He(rS);constructor(){let e=new tn({vertexShader:dS,fragmentShader:fS,uniforms:{uFadeStart:{value:55},uFadeEnd:{value:300}},transparent:!0,depthWrite:!1,depthTest:!0,blending:Jn});this.mesh=new qa(this.geo,e),this.mesh.frustumCulled=!1,this.mesh.renderOrder=10,this.grow(1024)}get material(){return this.mesh.material}setFade(e,t){this.material.uniforms.uFadeStart.value=e,this.material.uniforms.uFadeEnd.value=t}grow(e){e<=this.cap||(this.cap=Math.max(e,Math.ceil(this.cap*1.6)),this.pos=new ln(new Float32Array(this.cap*6),3),this.col=new ln(new Float32Array(this.cap*6),3),this.alp=new ln(new Float32Array(this.cap*2),1),this.geo.setAttribute("position",this.pos),this.geo.setAttribute("aColor",this.col),this.geo.setAttribute("aAlpha",this.alp))}build(e,t=.34,i=.78,s=.4){this.grow(Math.max(e.length,1)),e.forEach((r,a)=>{let o=r.live?this.live:this.rest,l=r.live?i:r.cross?s:t;this.pos.setXYZ(a*2,r.a.x,r.a.y,r.a.z),this.pos.setXYZ(a*2+1,r.b.x,r.b.y,r.b.z),this.col.setXYZ(a*2,o.r,o.g,o.b),this.col.setXYZ(a*2+1,o.r,o.g,o.b),this.alp.setX(a*2,l),this.alp.setX(a*2+1,l)}),this.pos.needsUpdate=this.col.needsUpdate=this.alp.needsUpdate=!0,this.geo.setDrawRange(0,e.length*2),this.geo.computeBoundingSphere()}},pS=`
precision highp float;
uniform vec3  uCentre;
uniform float uRadius;
uniform vec2  uViewport;
varying vec2 vQuad;
varying float vFade;
varying float vPxR;
void main() {
  vec4 mv = modelViewMatrix * vec4(uCentre, 1.0);
  float dist = max(-mv.z, 1e-4);
  mv.xy += position.xy * 2.0 * uRadius;
  gl_Position = projectionMatrix * mv;
  vQuad = position.xy * 2.0;
  // THE RING'S RADIUS IN PIXELS, so the dash period, the stroke and the
  // antialiasing can be held in screen space rather than in world space.
  // Everything below was defined in quad units, which means every one of them
  // grew without bound as the camera approached: the cycle-11 Art Director
  // measured a 5.5 s window of artifact 19 where this boundary rendered as
  // roughly forty pale rounded slabs with a 10 px-soft edge sweeping the frame,
  // in a build whose every other contour is crisp to 1-2 px.
  float rw = uRadius * 0.5;
  vPxR = rw * (uViewport.y * projectionMatrix[1][1] * 0.5 / dist);
  // AND IT GOES WHEN YOU ARE INSIDE IT. A boundary seen from within is not a
  // boundary, it is a wall across the view; the count and the dashed markers
  // still say what is in holding.
  float inside = smoothstep(rw * 0.85, rw * 1.9, dist);
  vFade = mix(1.0, 0.35, clamp((dist - 55.0) / 245.0, 0.0, 1.0)) * inside;
}`,mS=`
precision highp float;
#define TAU 6.28318530718
varying vec2 vQuad;
varying float vFade;
varying float vPxR;
uniform float uActive;
void main() {
  float r = length(vQuad);
  // One quad unit is 2 * vPxR pixels across the ring's diameter, so a screen
  // length of P pixels is P / (2 * vPxR) here. Each of the three constants
  // below is now a MINIMUM in quad units capped by its screen equivalent: at
  // normal framing the caps are slack and the ring looks exactly as it did; as
  // the camera closes they take over and hold it to a thin dashed circle.
  float perPx = 1.0 / max(2.0 * vPxR, 1.0);
  float aa = max(fwidth(r) * 1.1, min(0.004, perPx));
  float u = atan(vQuad.y, vQuad.x) / TAU + 0.5;
  // Never fewer dashes than the forty-four this always had, and more as the
  // circumference grows, so a dash-and-gap stays about twelve pixels long
  // instead of becoming a card.
  float dashes = clamp(vPxR * TAU / 12.0, 44.0, 600.0);
  float f = fract(u * dashes);
  float dash = smoothstep(0.0, 0.10, f) * (1.0 - smoothstep(0.42, 0.52, f));
  // THE BOUNDARY EARNS ITS LIGHT WHEN IT IS LOAD-BEARING.
  //
  // At rest it is the quietest contour in the world \u2014 the cycle-8 Art Director
  // called it the single element on any frame closest to chrome that encodes no
  // new state, and offered the fix taken here: make it the live drop boundary
  // during a placement drag. It is NOT hidden otherwise, because the boundary
  // is what says where captured-but-unplaced thoughts live and one whole
  // artifact is about exactly that. It changes weight instead: while a node is
  // being dragged, crossing this circle is the difference between a thought
  // that stays in holding and one that gets a permanent position, so the ring
  // thickens and brightens to say which side of that line the drag is on.
  float wid = min(mix(0.006, 0.011, uActive), mix(2.2, 3.4, uActive) * perPx);
  float ring = (1.0 - smoothstep(wid - aa, wid + aa, abs(r - 0.5))) * dash;
  if (ring < 0.004) discard;
  // Below the quietest node state. The boundary encodes real state and belongs
  // in the world, but it was measuring 0.115 against a plain node core at 0.098
  // \u2014 the largest and brightest contour in four artifacts, out-reading the
  // nodes it contains.
  vec3 col = mix(vec3(0.34, 0.32, 0.29), vec3(0.62, 0.55, 0.40), uActive);
  gl_FragColor = vec4(col, ring * mix(0.55, 0.95, uActive) * vFade);
}`,Qc=class{mesh;constructor(){let e=new tn({vertexShader:pS,fragmentShader:mS,uniforms:{uCentre:{value:new D},uRadius:{value:5},uViewport:{value:new Qe(1920,1080)},uActive:{value:0}},transparent:!0,depthWrite:!1,depthTest:!0});this.mesh=new hn(new Ri(1,1),e),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5}get material(){return this.mesh.material}set(e,t){this.material.uniforms.uCentre.value.copy(e),this.material.uniforms.uRadius.value=t*2}setViewport(e,t){this.material.uniforms.uViewport.value.set(e,t)}setActive(e){this.material.uniforms.uActive.value=e?1:0}get active(){return this.material.uniforms.uActive.value===1}};var gS=n=>n.cell/n.glyph,xS=n=>(n.pad+n.glyph*.78)/n.glyph;function vS(n,e=17,t=2){let i=n.split(/\s+/),s=[],r="";for(let a of i){if(!r){r=a;continue}if((r+" "+a).length<=e)r+=" "+a;else if(s.push(r),r=a,s.length===t)break}return s.length<t&&r&&s.push(r),s.length===t&&s.join(" ").replace(/\s+/g," ")!==n.replace(/\s+/g," ")&&(s[t-1]=s[t-1].slice(0,e-1)+"\u2026"),s}var Hd=12,yS=`
precision highp float;
attribute vec4 aRect;      // x, y (em, baseline-relative), w, h
attribute vec4 aUV;        // u0, v0, u1, v1
attribute vec3 aAnchor;    // world position of the node the text belongs to
attribute vec3 aColor;
attribute float aNodeSize; // world radius of that node, for vertical offset
attribute float aAlpha;
attribute vec2  aOff;      // x: em offset of the block, y: +1 below / -1 above
attribute vec2  aShift;    // per-frame re-anchor, in em, from label deconfliction
attribute float aEmScale;  // 1, or the smaller tier a crowded label was drawn at
uniform vec2  uViewport;
uniform float uEmWorld;    // em height in world units
uniform float uMinPx;
uniform float uTierMinPx;  // the atlas's own floor, for the reduced tier only
uniform float uMaxPx;
uniform float uNodeMinPx;
uniform float uNodeMaxPx;
uniform float uFadeStart;
uniform float uFadeEnd;
varying vec2  vUV;
varying vec3  vColor;
varying float vFade;
varying float vPx;
void main() {
  vec4 mv = modelViewMatrix * vec4(aAnchor, 1.0);
  float dist = max(-mv.z, 1e-4);
  float pxPerWorld = uViewport.y * projectionMatrix[1][1] * 0.5 / dist;
  // THE SMALL TIER. A label with nowhere clear to go at full size is drawn one
  // step down rather than not at all; the arbiter decides which, and this is
  // where that decision reaches the glyphs. The clamp is applied first, so the
  // tier is a fraction of the size the frame would have used, not a way around
  // the minimum: the arbiter keeps the product above the atlas's floor.
  // ...AND NEVER BELOW THE ATLAS'S OWN FLOOR. The first run of the tier set 15
  // labels at 10.9 px on a frame whose clamp is 12 \u2014 a tier that bought its
  // room by going under the size this renderer says is the smallest it can draw
  // legibly. The scale reduces the type toward that floor and stops there.
  // ...AND NEVER BELOW THE ATLAS'S OWN FLOOR. The first run of the tier set 15
  // labels at 10.9 px. The lens profile's minimum is the size the frame uses
  // when there is room; the atlas is built and hinted for 12 px and up, and
  // that \u2014 not the profile's comfort size \u2014 is the floor a crowded label may
  // reduce toward. It stops there.
  float emPx   = max(clamp(uEmWorld * pxPerWorld, uMinPx, uMaxPx) * aEmScale, uTierMinPx);
  float nodePx = clamp(aNodeSize * pxPerWorld, uNodeMinPx, uNodeMaxPx);
  vec2 corner = position.xy + 0.5;                 // PlaneGeometry(1,1) -> 0..1
  vec2 em = aRect.xy + corner * aRect.zw;
  vec2 px = em * emPx;
  px.y += aOff.x * emPx - aOff.y * nodePx * 0.62;  // sit clear of the node, above or below
  px += aShift * emPx;                             // and wherever declutter re-anchored it
  vec4 clip = projectionMatrix * mv;
  clip.xy += px / uViewport * 2.0 * clip.w;
  gl_Position = clip;
  vUV = mix(aUV.xy, aUV.zw, vec2(corner.x, 1.0 - corner.y));
  vColor = aColor;
  vFade = aAlpha * mix(1.0, 0.34, clamp((dist - uFadeStart) / (uFadeEnd - uFadeStart), 0.0, 1.0));
  vPx = emPx;
}`,_S=`
precision highp float;
uniform sampler2D uAtlas;
uniform vec3 uOutline;
varying vec2 vUV;
varying vec3 vColor;
varying float vFade;
varying float vPx;
void main() {
  float s = texture2D(uAtlas, vUV).r;
  // At the small-size clamp a single-channel SDF loses sub-pixel stems \u2014 the
  // 'l' of "Ruhlman", the 'i' of "Miso" \u2014 to the alpha threshold, at exactly
  // the whole-brain zoom the detail standard names. The threshold window widens
  // and drops slightly as the rendered size approaches the clamp, so thin stems
  // thicken instead of vanishing. Above ~17 px nothing changes.
  float small = clamp((17.0 - vPx) / 6.0, 0.0, 1.0);
  float w = max(fwidth(s) * (1.0 + 0.85 * small), 0.0015);
  float t = 0.5 - 0.055 * small;
  float glyph   = smoothstep(t - w, t + w, s);
  float outline = smoothstep(t - 0.13 - w, t - 0.13 + w, s);
  if (outline < 0.004) discard;
  // Dark rim under the glyph: a contrast device for overlapping text, not glow.
  vec3 col = mix(uOutline, vColor, glyph);
  gl_FragColor = vec4(col, outline * vFade);
}`,th=class{constructor(e,t,i){this.meta=e;t.flipY=!1,t.colorSpace=pi,t.minFilter=Li,t.magFilter=en,t.generateMipmaps=!0,t.needsUpdate=!0,this.geo=new sr;let s=new Ri(1,1);this.geo.index=s.index,this.geo.attributes.position=s.attributes.position;let r=new tn({vertexShader:yS,fragmentShader:_S,uniforms:{uAtlas:{value:t},uViewport:{value:new Qe(1920,1080)},uEmWorld:{value:i.emWorld},uMinPx:{value:i.minPx},uMaxPx:{value:i.maxPx},uTierMinPx:{value:Hd},uNodeMinPx:{value:4},uNodeMaxPx:{value:96},uFadeStart:{value:40},uFadeEnd:{value:260},uOutline:{value:new He("#120E0B")}},transparent:!0,depthWrite:!1,depthTest:!0,blending:Jn});this.mesh=new hn(this.geo,r),this.mesh.frustumCulled=!1,this.mesh.renderOrder=30,this.grow(4096)}meta;mesh;spans=[];geo;cap=0;aRect;aUV;aAnchor;aColor;aNodeSize;aAlpha;aOff;aShift;aEmScale;get material(){return this.mesh.material}drawnRect(e,t,i,s){let r=this.spans[e];if(!r)return null;let a=this.material.uniforms,o=Math.max(Math.min(Math.max(a.uEmWorld.value*s,a.uMinPx.value),a.uMaxPx.value)*this.scaleOf(e),a.uTierMinPx.value),l=this.aRect.array,c=this.aShift.array,h=this.aAlpha.array,d=this.aOff.array,u=this.aNodeSize.array,f=1/0,g=1/0,x=-1/0,p=-1/0;for(let m=0;m<r.count;m++){let A=r.start+m;if(h[A]<=.01)continue;let R=Math.min(Math.max(u[A]*s,a.uNodeMinPx.value),a.uNodeMaxPx.value),M=t+(l[A*4]+c[A*2])*o,b=M+l[A*4+2]*o,S=i-((l[A*4+1]+l[A*4+3])*o+d[A*2]*o-d[A*2+1]*R*.62+c[A*2+1]*o),w=S+l[A*4+3]*o;M<f&&(f=M),b>x&&(x=b),S<g&&(g=S),w>p&&(p=w)}return Number.isFinite(f)?{x0:f,y0:g,x1:x,y1:p}:null}emPxFor(e,t){let i=this.material.uniforms;return Math.max(Math.min(Math.max(i.uEmWorld.value*t,i.uMinPx.value),i.uMaxPx.value)*this.scaleOf(e),i.uTierMinPx.value)}setViewport(e,t){this.material.uniforms.uViewport.value.set(e,t)}setNodePx(e,t){this.material.uniforms.uNodeMinPx.value=e,this.material.uniforms.uNodeMaxPx.value=t}setSizePx(e,t){this.material.uniforms.uMinPx.value=e,this.material.uniforms.uMaxPx.value=t}setFade(e,t){this.material.uniforms.uFadeStart.value=e,this.material.uniforms.uFadeEnd.value=t}grow(e){if(e<=this.cap)return;this.cap=Math.max(e,Math.ceil(this.cap*1.6));let t=i=>new ir(new Float32Array(this.cap*i),i);this.aRect=t(4),this.aUV=t(4),this.aAnchor=t(3),this.aColor=t(3),this.aNodeSize=t(1),this.aAlpha=t(1),this.aOff=t(2),this.aShift=t(2),this.aEmScale=t(1),this.aEmScale.array.fill(1),this.geo.setAttribute("aEmScale",this.aEmScale),this.geo.setAttribute("aRect",this.aRect),this.geo.setAttribute("aUV",this.aUV),this.geo.setAttribute("aAnchor",this.aAnchor),this.geo.setAttribute("aColor",this.aColor),this.geo.setAttribute("aNodeSize",this.aNodeSize),this.geo.setAttribute("aAlpha",this.aAlpha),this.geo.setAttribute("aOff",this.aOff),this.geo.setAttribute("aShift",this.aShift)}isTruncated(e){let t=this.spans[e];return!t||t.ellipsis<0?!1:this.aAlpha.array[t.start+t.ellipsis]>.01}setRunScales(e){let t=this.aEmScale.array;for(let i=0;i<this.spans.length&&i<e.length;i++){let{start:s,count:r}=this.spans[i],a=e[i]>0?e[i]:1;for(let o=0;o<r;o++)t[s+o]=a}this.aEmScale.needsUpdate=!0}scaleOf(e){let t=this.spans[e];if(!t)return 1;let i=this.aEmScale.array[t.start];return i>0?i:1}setRunAlphas(e,t){let i=this.aAlpha.array;for(let s=0;s<this.spans.length&&s<e.length;s++){let{start:r,count:a}=this.spans[s],o=t&&t[s]>0?Math.min(t[s],a):a,l=this.spans[s],c=o<(l.ellipsis>=0?a-1:a);for(let h=0;h<a;h++){if(h===l.ellipsis){i[r+h]=c?e[s]:0;continue}i[r+h]=h>=o?0:e[s]}}this.aAlpha.needsUpdate=!0}setRunShifts(e,t){let i=this.aShift.array;for(let s=0;s<this.spans.length&&s*2+1<e.length;s++){let r=this.spans[s],{start:a,count:o}=r;for(let l=0;l<o;l++){let c=l===r.ellipsis&&t?t[s]:0;i[(a+l)*2]=e[s*2]+c,i[(a+l)*2+1]=e[s*2+1]}}this.aShift.needsUpdate=!0}build(e,t=17,i=2){let s=this.meta,r=gS(s),a=xS(s),o=0,l=[];for(let h of e){let d=vS(h.text,h.perLine??t,i);l.push({run:h,lines:d});for(let u of d)for(let f of u)s.chars[f]&&o++;d.length===1&&o++}this.grow(Math.max(o,1)),this.aShift.array.fill(0),this.aShift.needsUpdate=!0,this.spans.length=0;let c=0;for(let{run:h,lines:d}of l){let u=c,f=0;for(let I of d){let T=0;for(let P of I)T+=s.chars[P]?.adv??0;T>f&&(f=T)}let g=!!h.above,x=g?.55+(d.length-1)*s.lineHeight+.3:-.92,p=g?-1:1,m=1/0,A=-1/0,R=1/0,M=-1/0,b=[],S=[],w=-1,v=0,E=0;if(d.forEach((I,T)=>{let P=0;for(let G of I)P+=s.chars[G]?.adv??0;let U=h.side??0,B=U===0?-P/2:U<0?-P-.55:.55,L=-T*s.lineHeight;for(let G of I){let z=s.chars[G];if(!z)continue;let $=B-s.pad/s.glyph,J=L-(r-a);d.length===1&&(b.push(B+z.adv),G===" "&&S.push(b.length-1)),$<m&&(m=$),$+r>A&&(A=$+r),J<R&&(R=J),J+r>M&&(M=J+r),this.aRect.setXYZW(c,$,J,r,r),this.aUV.setXYZW(c,z.u0,z.v0,z.u1,z.v1),this.aAnchor.setXYZ(c,h.anchor.x,h.anchor.y,h.anchor.z),this.aColor.setXYZ(c,h.color.r,h.color.g,h.color.b),this.aNodeSize.setX(c,h.nodeSizeWorld),this.aAlpha.setX(c,h.alpha),this.aOff.setXY(c,x,p),B+=z.adv,c++}}),d.length===1){let I=s.chars["\u2026"]??s.chars["."];if(I){let T=b.length?b[b.length-1]:0,P=T-s.pad/s.glyph,U=-(r-a);w=c-u,v=T,E=r,this.aRect.setXYZW(c,P,U,r,r),this.aUV.setXYZW(c,I.u0,I.v0,I.u1,I.v1),this.aAnchor.setXYZ(c,h.anchor.x,h.anchor.y,h.anchor.z),this.aColor.setXYZ(c,h.color.r,h.color.g,h.color.b),this.aNodeSize.setX(c,h.nodeSizeWorld),this.aAlpha.setX(c,0),this.aOff.setXY(c,x,p),c++}}Number.isFinite(m)||(m=A=R=M=0),this.spans.push({start:u,count:c-u,widthEm:f,lines:d.length,above:g,side:h.side??0,x0Em:m,x1Em:A,y0Em:x+R,y1Em:x+M,vSide:p,glyphRight:b,wordEnds:S,ellipsis:w,ellipsisLeftEm:v,ellipsisWidthEm:E})}for(let h of[this.aRect,this.aUV,this.aAnchor,this.aColor,this.aNodeSize,this.aAlpha,this.aOff,this.aEmScale])h.needsUpdate=!0;this.geo.instanceCount=c}};var cr={canvas:{nodeMinPx:15,nodeMaxPx:84,textMinPx:14,textMaxPx:24,textPerLine:22,textLines:2,fadeStart:46,fadeEnd:250,fov:52},expansion:{nodeMinPx:15,nodeMaxPx:90,textMinPx:14,textMaxPx:22,textPerLine:15,textLines:1,fadeStart:90,fadeEnd:420,fov:46},ar:{nodeMinPx:16,nodeMaxPx:96,textMinPx:13,textMaxPx:21,textPerLine:16,textLines:1,fadeStart:34,fadeEnd:190,fov:62}};function Ug(n){return .46+.34*Math.min(n,8)/8}var bS=.3,Og=.22,Gd=3,Wd=8,MS=[1,.78],kg=new Map;function SS(n){let e=n.getHex(),t=kg.get(e);if(t===void 0){let i=.2126*n.r+.7152*n.g+.0722*n.b,s=Math.hypot(n.r-i,n.g-i,n.b-i);t=s<1e-4?Og:Math.min(Math.max(1-bS/s,Og),.92),kg.set(e,t)}return t}var nh=class{constructor(e,t,i){this.canvas=e;Je.enabled=!1,this.renderer=new Wc({canvas:e,antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1}),this.renderer.outputColorSpace=tr,this.renderer.setPixelRatio(1),this.renderer.setClearColor(new He(Dg),1),this.camera=new vn(52,16/9,.1,4e3),this.text=new th(t,i,{emWorld:.92,minPx:12.5,maxPx:40}),this.scene.add(this.filaments.mesh,this.holding.mesh,this.nodes.mesh,this.text.mesh),this.applyLens("canvas")}canvas;scene=new Va;camera;nodes=new jc;filaments=new Jc;holding=new Qc;text;renderer;pose={target:new D,yaw:.6,pitch:.22,dist:70};lens="canvas";clock=0;doc=null;selected=null;hits=new Set;screenCache=[];runMeta=[];runAlphas=new Float32Array(0);runShifts=new Float32Array(0);runVisible=new Int32Array(0);runScales=new Float32Array(0);runEllipsisDx=new Float32Array(0);dirty=!0;applyLens(e){this.lens=e;let t=cr[e];this.nodes.setPx(t.nodeMinPx,t.nodeMaxPx),this.nodes.setFade(t.fadeStart,t.fadeEnd),this.filaments.setFade(t.fadeStart,t.fadeEnd),this.text.setSizePx(t.textMinPx,t.textMaxPx),this.text.setNodePx(t.nodeMinPx,t.nodeMaxPx),this.text.setFade(t.fadeStart,t.fadeEnd),this.camera.fov=t.fov,this.camera.updateProjectionMatrix(),this.dirty=!0}setSize(e,t){this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.nodes.setViewport(e,t),this.text.setViewport(e,t),this.holding.setViewport(e,t)}setDoc(e){this.doc=e,this.dirty=!0}getDoc(){return this.doc}setSelection(e){e!==this.selected&&(this.selected=e,this.dirty=!0)}setPinned(e){e!==this.pinned&&(this.pinned=e,this.dirty=!0)}getPinned(){return this.pinned}pinned=null;setDrawnLeaders(e){this.drawnLeaders=new Set(e)}drawnLeaders=new Set;setNamedByChrome(e){let t=new Set(e);(t.size!==this.namedByChrome.size||[...t].some(i=>!this.namedByChrome.has(i)))&&(this.namedByChrome=t,this.dirty=!0)}namedByChrome=new Set;stubLen=new Map;getSelection(){return this.selected}setHits(e){this.hits=new Set(e),this.dirty=!0}getHits(){return this.hits}markDirty(){this.dirty=!0}rebuild(){let e=this.doc;if(!e){this.nodes.build([]),this.filaments.build([]),this.text.build([]);return}let t=Tg(e,this.selected,this.hits),i=new Map;for(let u of Object.values(e.links))i.set(u.a,(i.get(u.a)??0)+1),i.set(u.b,(i.get(u.b)??0)+1);let s=Cn(e),r=[],a=[],o={selected:0,searchHit:1,unplaced:2,connected:3,plain:4};this.runMeta=[];let l=new Map,c=new He(eh);for(let u of s){let f=t.get(u.id)??"plain",g=new D(u.pos[0],u.pos[1],u.pos[2]);l.set(u.id,g);let x=Ug(i.get(u.id)??0),p=Fg(u.color,f),m=SS(Vd(u.color)),A=m+(1-m)*qc(e,u);r.push({pos:g,color:p,state:f,size:x,sat:A});let R=f==="searchHit"?x*1.25:x;this.runMeta.push({id:u.id,pinned:u.id===this.pinned||this.namedByChrome.has(u.id),priority:(u.id===this.pinned?-1:u.placed?o[f]:-.5)-Math.min(i.get(u.id)??0,9)*.05,baseAlpha:1,nodeSizeWorld:R,held:!u.placed});let M=u.placed?0:u.pos[0]<e.holding.origin[0]?-1:1;a.push({anchor:g,text:u.text,color:c,nodeSizeWorld:R,side:M,alpha:f==="plain"?.86:1,above:(u.id.charCodeAt(1)&1)===1})}this.nodes.build(r);let h=cr[this.lens];this.text.build(a,28,h.textLines);{this.stubLen.clear();let u=a.map(f=>f.text.trim());for(let f=0;f<u.length;f++){let g=Gd;for(;g<Wd;g++){let x=u[f].slice(0,g).toLowerCase(),p=!1;for(let m=0;m<u.length&&!p;m++)m!==f&&u[m].slice(0,g).toLowerCase()===x&&(p=!0);if(!p)break}this.stubLen.set(this.runMeta[f].id,Math.min(g,u[f].length))}}this.runAlphas.length!==this.runMeta.length&&(this.runAlphas=new Float32Array(this.runMeta.length)),this.runShifts.length!==this.runMeta.length*2&&(this.runShifts=new Float32Array(this.runMeta.length*2)),this.runVisible.length!==this.runMeta.length&&(this.runVisible=new Int32Array(this.runMeta.length)),this.runScales.length!==this.runMeta.length&&(this.runScales=new Float32Array(this.runMeta.length)),this.runScales.fill(1),this.runEllipsisDx.length!==this.runMeta.length&&(this.runEllipsisDx=new Float32Array(this.runMeta.length));let d=[];for(let u of Ag(e)){let f=l.get(u.a),g=l.get(u.b);if(!f||!g)continue;let x=u.a===this.selected||u.b===this.selected||this.hits.has(u.a)||this.hits.has(u.b),p=e.nodes[u.a]&&e.nodes[u.b]&&e.nodes[u.a].color!==e.nodes[u.b].color;d.push({a:f,b:g,live:x,cross:p})}this.filaments.build(d),this.holdingMembers=s.filter(u=>!u.placed&&u.id!==this.dragging).map(u=>u.pos.slice()),this.fitHoldingShell(),this.screenCache=[],this.dirty=!1}applyPose(){let{target:e,yaw:t,pitch:i,dist:s}=this.pose,r=Math.cos(i);this.camera.position.set(e.x+s*r*Math.sin(t),e.y+s*Math.sin(i),e.z+s*r*Math.cos(t)),this.camera.up.set(0,1,0),this.camera.lookAt(e),this.camera.updateMatrixWorld(),this.screenCache=[]}holdingMembers=[];labelEmPxFor(e){let t=this.runMeta.findIndex(r=>r.id===e);if(t<0)return null;let i=this.lastScreen.get(e);if(!i)return null;let s=this.renderer.domElement.width/Math.max(window.innerWidth,1);return this.text.emPxFor(t,i.pxPerWorld)/Math.max(s,1e-4)}dragging=null;setDragging(e){e!==this.dragging&&(this.dragging=e,this.dirty=!0)}fitHoldingShell(){let e=this.doc;if(!e)return;let t=new D(...e.holding.origin),i=this.project([t.x,t.y,t.z]),s=e.holding.radius;if(i){let r=this.renderer.domElement.height*this.camera.projectionMatrix.elements[5]*.5/i.z,a=e.holding.radius*r;for(let o of this.holdingMembers){let l=this.project(o);if(!l)continue;let c=Math.hypot(l.x-i.x,l.y-i.y);c>a&&(a=c)}s=(a+cr[this.lens].nodeMinPx*1.6)/r}this.holding.set(t,s)}render(){this.dirty&&this.rebuild(),this.nodes.setTime(this.clock),this.applyPose(),this.fitDepthFade(),this.fitHoldingShell(),this.deconflictLabels(),this.renderer.render(this.scene,this.camera),this.screenCache=[]}fitDepthFade(){let e=this.screenPositions();if(!e.length)return;let t=1/0,i=-1/0;for(let l of e)l.z<t&&(t=l.z),l.z>i&&(i=l.z);if(!Number.isFinite(t)||!Number.isFinite(i))return;let s=cr[this.lens],r=Math.max(i-t,this.pose.dist*.3),a=t,o=t+r;this.nodes.setFade(a,o),this.filaments.setFade(a,o),this.text.setFade(a,o),this.depthFade=[+a.toFixed(1),+o.toFixed(1)]}depthFade=[0,0];shapeAtScale(e,t,i,s){if(!i||!e.w)return{w:0,h:0,emPx:e.emPx,bx0:0,by0:0,nodePx:e.nodePx};let r=Math.max(e.emPx*s,Hd);if(r>=e.emPx-.01)return{w:0,h:0,emPx:e.emPx,bx0:0,by0:0,nodePx:e.nodePx};let a=r/e.emPx,o=-t.vSide*e.nodePx*.62,l=i.x+t.x0Em*r,c=i.y-(t.y1Em*r+o);return{w:Math.max(e.w*a,6),h:Math.max(e.h*a,6),emPx:r,bx0:l,by0:c,nodePx:e.nodePx}}deconflictLabels(){if(!this.doc||!this.runMeta.length)return;let t=cr[this.lens],i=this.screenPositions();if(!i.length)return;let s=new Map(i.map(b=>[b.id,b])),r=.92,a=[[0,0],[0,-1.3],[0,1.3],[-.62,-.62],[.62,-.62],[-.62,.62],[.62,.62],[0,-2.55],[0,2.55],[-1.45,0],[1.45,0],[-1.3,-1.3],[1.3,-1.3],[-1.3,1.3],[1.3,1.3],[0,-3.8],[0,3.8],[-2.3,-2.3],[2.3,-2.3],[-2.3,2.3],[2.3,2.3],[0,-5.1],[0,5.1]],o=[],l=[];for(let b=0;b<this.runMeta.length;b++){let S=this.runMeta[b],w=s.get(S.id),v=this.text.spans[b];if(this.runShifts[b*2]=0,this.runShifts[b*2+1]=0,!w||!v){this.runAlphas[b]=0,l[b]={w:0,h:0,emPx:1,bx0:0,by0:0,nodePx:0};continue}let E=this.renderer.domElement,I=Math.min(Math.max(S.nodeSizeWorld*w.pxPerWorld,t.nodeMinPx),t.nodeMaxPx);if(w.x-I<0||w.y-I<0||w.x+I>E.width||w.y+I>E.height){this.runAlphas[b]=0,l[b]={w:0,h:0,emPx:1,bx0:0,by0:0,nodePx:0};continue}let T=Math.min(Math.max(r*w.pxPerWorld,t.textMinPx),t.textMaxPx),P=Math.min(Math.max(S.nodeSizeWorld*w.pxPerWorld,t.nodeMinPx),t.nodeMaxPx),U=-v.vSide*P*.62,B=w.x+v.x0Em*T,L=Math.max((v.x1Em-v.x0Em)*T,6),G=w.y-(v.y1Em*T+U),z=Math.max((v.y1Em-v.y0Em)*T,6);l[b]={w:L,h:z,emPx:T,bx0:B,by0:G,nodePx:P},o.push({i:b,x0:B,x1:B+L,y0:G,y1:G+z,pri:S.priority,z:w.z}),this.runAlphas[b]=S.baseAlpha}let c=b=>this.lastPlacement.has(this.runMeta[b].id)?0:1;o.sort((b,S)=>c(b.i)-c(S.i)||b.pri-S.pri||b.z-S.z);let h=[];for(let b of[5.6,8.2,11.5,15.5])for(let S=0;S<12;S++){let w=S/12*Math.PI*2;h.push([b*Math.cos(w)*1.9,b*Math.sin(w)])}let d=0,u=.16;this.labelRects.clear(),this.labelNeedsLeader.clear(),this.lastScreen.clear();for(let b of i)this.lastScreen.set(b.id,{x:b.x,y:b.y,pxPerWorld:b.pxPerWorld,r:b.r});this.lastPose={dist:this.pose.dist,yaw:this.pose.yaw,pitch:this.pose.pitch,target:this.pose.target.toArray()},this.lastCanvas=[this.renderer.domElement.width,this.renderer.domElement.height];let f=[],g=[],x=i.map(b=>({id:b.id,x0:b.x-b.r,x1:b.x+b.r,y0:b.y-b.r,y1:b.y+b.r})),p=this.renderer.domElement.width/Math.max(window.innerWidth,1);for(let b of["#editor","#finder","#states","#hands","#top","#unlabelled","#hitbreak","#pinmark","#reticle","#argyro","#gesture","#lenstag","#toast","#tools","#hidden","#origin","#grabmark","#grabcand"]){let S=document.querySelector(b);if(!S)continue;let w=S.getBoundingClientRect(),v=w.left,E=w.top,I=w.right,T=w.bottom,P=getComputedStyle(S);if(P.overflow==="visible"&&P.overflowX==="visible"&&P.overflowY==="visible")for(let B of Array.from(S.children)){let L=B.getBoundingClientRect();L.width<1||L.height<1||(v=Math.min(v,L.left),E=Math.min(E,L.top),I=Math.max(I,L.right),T=Math.max(T,L.bottom))}let U=new DOMRect(v,E,I-v,T-E);U.width<2||U.height<2||f.push({i:-1,x0:U.left*p,y0:U.top*p,x1:U.right*p,y1:U.bottom*p,pri:-1,z:-1})}let m=(b,S,w,v,E,I)=>{let T=0;for(let P of x){if(P.id===b)continue;let U=Math.min(v,P.x1)-Math.max(S,P.x0);if(U<=0)continue;let B=Math.min(E,P.y1)-Math.max(w,P.y0);if(!(B<=0)&&(T+=U*B,T>=I))break}return Math.min(T/I,1)},A=(b,S,w,v,E)=>{let I=0;for(let T of g){let P=Math.min(w,T.x1)-Math.max(b,T.x0);if(P<=0)continue;let U=Math.min(v,T.y1)-Math.max(S,T.y0);if(!(U<=0)&&(I+=P*U,I>=E))break}return Math.min(I/E,1)},R=this.renderer.domElement.width,M=this.renderer.domElement.height;g.push(...f);for(let b of o){let S=l[b.i],w=S,v=s.get(this.runMeta[b.i].id),E=this.text.spans[b.i],I=E.glyphRight,T={frac:1,score:99,dx:0,dy:0,w:w.w,vis:0,fits:!1,far:!1},P=1;for(let $ of MS){if(T.fits&&T.frac<=d)break;if(w=$===1?S:this.shapeAtScale(S,E,v,$),!w.w)continue;P=$,T={frac:1,score:99,dx:0,dy:0,w:w.w,vis:0,fits:!1,far:!1};let J=[{w:w.w,vis:0}];if(this.runMeta[b.i].pinned){this.runAlphas[b.i]=0,this.labelRects.set(this.runMeta[b.i].id,{x0:0,y0:0,x1:0,y1:0,alpha:0});continue}if(!(this.runMeta[b.i].priority<=0)){if(E.ellipsis>=0&&E.wordEnds.length){let se=E.ellipsisWidthEm*w.emPx;for(let we=E.wordEnds.length-1;we>=0;we--){let je=E.wordEnds[we];if(!(je<10||je>=I.length)&&(J.push({w:Math.max((I[je-1]-E.x0Em)*w.emPx+se,6),vis:je}),J.length>=4))break}let ie=this.stubLen.get(this.runMeta[b.i].id)??0;if(ie>=Gd){let we=E.wordEnds.find(je=>je>=ie&&je<=Wd+4);we&&(ie=we)}ie>=Gd&&ie<I.length&&!J.some(we=>we.vis===ie)&&J.push({w:Math.max((I[ie-1]-E.x0Em)*w.emPx+se,6),vis:ie})}}let te=this.lastPlacement.get(this.runMeta[b.i].id);if(te&&te.span!==w.w&&this.lastPlacement.delete(this.runMeta[b.i].id),te&&te.span===w.w){let se={w:te.vis>0?te.w:w.w,vis:te.vis},ie=w.bx0+te.dx*w.emPx,we=w.by0+te.dy*w.emPx,je=Math.max(se.w*w.h,1),$e=8,ne=ie>=$e&&we>=$e&&ie+se.w<=R-$e&&we+w.h<=M-$e;if(ne&&v){let ee=v.r+4,Ne=Math.min(Math.max(v.x,ie),ie+se.w),Me=Math.min(Math.max(v.y,we),we+w.h);Math.hypot(v.x-Ne,v.y-Me)<ee&&(ne=!1);let be=2.6*w.emPx;ne&&Math.hypot(v.x-Ne,v.y-Me)>be&&(ne=!1)}if(ne){let ee=.22*w.emPx,Ne=.11*w.emPx,Me=Math.min(1,A(ie-ee,we-Ne,ie+se.w+ee,we+w.h+Ne,je)+m(this.runMeta[b.i].id,ie,we,ie+se.w,we+w.h,je));Me<=d&&(T={frac:Me,score:-1,dx:te.dx,dy:te.dy,w:se.w,vis:se.vis,fits:!0,far:te.far})}}for(let se of[0,1]){if(T.fits&&T.frac<=d)break;let ie=se===0?a:h;for(let we of J){let je=Math.max(we.w*w.h,1),$e=we.vis?.55:0;for(let[Y,ne]of ie){let ee=Y*w.emPx,Ne=ne*w.emPx,Me=w.bx0+ee,be=w.by0+Ne,yt=8;if(Me<yt||be<yt||Me+we.w>R-yt||be+w.h>M-yt)continue;let qe=2.6*w.emPx;{let bt=Me,Tt=be,F=Me+we.w,pn=be+w.h,ft=Math.min(Math.max(v?v.x:bt,bt),F),C=Math.min(Math.max(v?v.y:Tt,Tt),pn);if(v&&Math.hypot(v.x-ft,v.y-C)>qe)continue}if(v){let bt=v.r+4,Tt=Math.min(Math.max(v.x,Me),Me+we.w),F=Math.min(Math.max(v.y,be),be+w.h);if(Math.hypot(v.x-Tt,v.y-F)<bt)continue}let gt=m(this.runMeta[b.i].id,Me,be,Me+we.w,be+w.h,je),st=.22*w.emPx,et=.11*w.emPx,Lt=Math.min(1,A(Me-st,be-et,Me+we.w+st,be+w.h+et,je)+gt),Ht=Math.hypot(Y,ne)/3.8*(this.runMeta[b.i].held?5:1),Ut=1e3*Lt+$e+.22*Ht,Kt=Y===0&&ne===0&&!we.vis;(Ut<T.score-(Kt?0:.06)||Kt&&Ut<=T.score)&&(T={frac:Lt,score:Ut,dx:Y,dy:ne,w:we.w,vis:we.vis,fits:!0,far:se===1})}if(T.frac<=0&&!T.vis)break}}}T.fits&&T.frac<=d||(P=1,w=S),this.runScales[b.i]=P,this.runVisible[b.i]=T.vis,this.runEllipsisDx[b.i]=T.vis?E.glyphRight[T.vis-1]-E.ellipsisLeftEm:0,this.runShifts[b.i*2]=T.dx,this.runShifts[b.i*2+1]=-T.dy;let U={x0:w.bx0+T.dx*w.emPx,y0:w.by0+T.dy*w.emPx},B=Math.max(0,1-(T.frac-d)/(u-d)),L=!T.fits||T.frac>d?0:1;L>.02&&T.far&&this.labelNeedsLeader.add(this.runMeta[b.i].id);let G=.26,z=this.runMeta[b.i].baseAlpha*L;this.runAlphas[b.i]=z>=G?z:0,this.runAlphas[b.i]>.02?(g.push({i:b.i,x0:U.x0,y0:U.y0,x1:U.x0+T.w,y1:U.y0+w.h,pri:b.pri,z:b.z}),this.lastPlacement.set(this.runMeta[b.i].id,{dx:T.dx,dy:T.dy,w:T.w,vis:T.vis,far:T.far,span:w.w})):this.lastPlacement.delete(this.runMeta[b.i].id),this.labelRects.set(this.runMeta[b.i].id,{x0:U.x0,y0:U.y0,x1:U.x0+T.w,y1:U.y0+w.h,alpha:this.runAlphas[b.i]})}this.text.setRunAlphas(this.runAlphas,this.runVisible),this.text.setRunScales(this.runScales),this.text.setRunShifts(this.runShifts,this.runEllipsisDx),this.ambiguousLabels.clear();for(let b=0;b<this.runMeta.length;b++){let S=this.runMeta[b].id,w=this.labelRects.get(S),v=this.lastScreen.get(S);if(!w||!v||w.alpha<=.02||this.namedByChrome.has(S)||S===this.pinned)continue;let E=this.text.drawnRect(b,v.x,v.y,v.pxPerWorld);if(!E)continue;let I=B=>{let L=Math.min(Math.max(B.x,E.x0),E.x1),G=Math.min(Math.max(B.y,E.y0),E.y1);return Math.hypot(B.x-L,B.y-G)},T=I(v),P=1/0;for(let[B,L]of this.lastScreen){if(B===S)continue;let G=I(L);G<P&&(P=G)}(P>0&&Number.isFinite(P)?T/P:0)>.6&&this.ambiguousLabels.add(S)}this.deconflictSeq++,this.suppressed=0,this.suppressedIds.length=0,this.shortened=0,this.shortenedIds.length=0,this.compressed=0,this.compressedIds.length=0,this.reduced=0,this.reducedIds.length=0,this.minLabelEmPx=1/0;for(let b=0;b<this.runMeta.length;b++){let S=this.runMeta[b],w=this.labelRects.get(S.id);if(w&&w.alpha>.02){let E=this.lastScreen.get(S.id);if(E){let I=this.text.emPxFor(b,E.pxPerWorld);I<this.minLabelEmPx&&(this.minLabelEmPx=I)}if((this.runScales[b]??1)<.999&&(this.reduced++,this.reducedIds.push(S.id)),this.text.isTruncated(b)){let I=this.runVisible[b];I>0&&I<=Wd?(this.compressed++,this.compressedIds.push(S.id)):(this.shortened++,this.shortenedIds.push(S.id))}continue}if(S.pinned)continue;let v=s.get(S.id);v&&v.x>=0&&v.y>=0&&v.x<=R&&v.y<=M&&(this.suppressed++,this.suppressedIds.push(S.id))}}reduced=0;reducedIds=[];minLabelEmPx=0;shortened=0;shortenedIds=[];compressed=0;compressedIds=[];ambiguousLabels=new Set;suppressed=0;suppressedIds=[];labelRects=new Map;lastScreen=new Map;deconflictSeq=0;lastPose=null;lastCanvas=null;lastPlacement=new Map;labelNeedsLeader=new Set;labelDrawAudit(){let e=this.renderer.domElement,t=0,i=null,s=0,r=0,a=null,o=0,l=null,c=[],h=0,d=0,u=0,f=null,g=[],x=[],p=[],m=[],A=this.lastScreen,R=A;for(let T=0;T<this.runMeta.length;T++){let P=this.runMeta[T],U=this.labelRects.get(P.id),B=this.lastScreen.get(P.id);if(!U||!B||U.alpha<=.02)continue;let L=this.text.drawnRect(T,B.x,B.y,B.pxPerWorld);if(!L)continue;s++;let G=Math.max(U.x0-L.x0,L.x1-U.x1,U.y0-L.y0,L.y1-U.y1);G>t&&(t=G,i=P.id);let z=Math.max(-L.x0,L.x1-e.width,-L.y0,L.y1-e.height);z>r&&(r=z,a=P.id),x.push({id:P.id,...L}),this.text.isTruncated(T)&&m.push(P.id);let $=A.get(P.id);if($){let te=Math.min(Math.max($.x,L.x0),L.x1),se=Math.min(Math.max($.y,L.y0),L.y1),ie=Math.hypot($.x-te,$.y-se);ie>o&&(o=ie,l=P.id);let we=Math.min(Math.max($.x,U.x0),U.x1),je=Math.min(Math.max($.y,U.y0),U.y1),$e=Math.hypot($.x-we,$.y-je);$e>h&&(h=$e),ie>40&&c.push(P.id);let Y=1/0;for(let[Ne,Me]of this.lastScreen){if(Ne===P.id)continue;let be=Math.min(Math.max(Me.x,L.x0),L.x1),yt=Math.min(Math.max(Me.y,L.y0),L.y1),qe=Math.hypot(Me.x-be,Me.y-yt);qe<Y&&(Y=qe)}let ne=Y>0&&Number.isFinite(Y)?ie/Y:0;ne>u&&(u=ne,f=P.id),this.ambiguousLabels.has(P.id)&&!this.drawnLeaders.has(P.id)&&g.push(P.id);let ee=this.text.emPxFor(T,B.pxPerWorld);ee>0&&ie/ee>d&&(d=ie/ee)}let J=R.get(P.id);J&&p.push({id:P.id,x:Number(J.x.toFixed(2)),y:Number(J.y.toFixed(2)),r:Number(J.r.toFixed(2)),x0:Number(L.x0.toFixed(2)),y0:Number(L.y0.toFixed(2)),x1:Number(L.x1.toFixed(2)),y1:Number(L.y1.toFixed(2))})}let M=0,b=0;for(let T of x)for(let P of this.lastScreen){let[U,B]=P;if(U===T.id)continue;let L=B.r,G=Math.min(Math.max(B.x,T.x0),T.x1),z=Math.min(Math.max(B.y,T.y0),T.y1);if(Math.hypot(B.x-G,B.y-z)>=L)continue;let $=Math.min(T.x1,B.x+L)-Math.max(T.x0,B.x-L),J=Math.min(T.y1,B.y+L)-Math.max(T.y0,B.y-L),te=Math.max(0,$)*Math.max(0,J)/Math.max(1,4*L*L);te>.3&&(M++,te>b&&(b=te))}let S=0,w=0,v=null,E=1/0,I=null;for(let T=0;T<x.length;T++)for(let P=T+1;P<x.length;P++){let U=x[T],B=x[P],L=Math.min(U.x1,B.x1)-Math.max(U.x0,B.x0),G=Math.min(U.y1,B.y1)-Math.max(U.y0,B.y0);if(L>0&&G>0){S++,L*G>w&&(w=L*G,v=[U.id,B.id]),0<E&&(E=0,I=[U.id,B.id]);continue}let z=Math.hypot(Math.max(0,-L),Math.max(0,-G));z<E&&(E=z,I=[U.id,B.id])}return{seq:this.deconflictSeq,checked:s,worstGapPx:Number(t.toFixed(2)),worst:i,worstOffFramePx:Number(r.toFixed(2)),worstOffFrame:a,overlappingPairs:S,worstPairOverlapPx:Number(w.toFixed(1)),worstPair:v,tightestPairGapPx:Number.isFinite(E)?Number(E.toFixed(2)):null,tightestPair:I,truncated:m.length,truncatedIds:m,anchors:p,markersBuriedByOtherLabels:M,worstBuriedFraction:Number(b.toFixed(3)),worstDisplacementPx:Number(o.toFixed(1)),worstDisplacement:l,farFromNode:c.length,farFromNodeIds:c.slice(0,40),worstReservedDisplacementPx:Number(h.toFixed(1)),worstDisplacementEm:Number(d.toFixed(2)),worstAmbiguityRatio:Number(u.toFixed(2)),worstAmbiguityOn:f,ambiguousUnleaded:g.length,ambiguousUnleadedIds:g.slice(0,30)}}project(e){let t=this.renderer.domElement,i=new D(e[0],e[1],e[2]).applyMatrix4(this.camera.matrixWorldInverse),s=-i.z;return s<=.05?null:(i.applyMatrix4(this.camera.projectionMatrix),{x:(i.x*.5+.5)*t.width,y:(1-(i.y*.5+.5))*t.height,z:s})}screenPositions(){if(this.screenCache.length)return this.screenCache;let e=this.doc;if(!e)return[];let t=this.renderer.domElement,i=t.width,s=t.height,r=cr[this.lens],a=new Map;for(let h of Object.values(e.links))a.set(h.a,(a.get(h.a)??0)+1),a.set(h.b,(a.get(h.b)??0)+1);let o=new D,l=[],c=this.camera.projectionMatrix.elements[5];for(let h of Cn(e)){o.set(h.pos[0],h.pos[1],h.pos[2]).applyMatrix4(this.camera.matrixWorldInverse);let d=-o.z;if(d<=.05)continue;let u=s*c*.5/d,f=Math.min(Math.max(Ug(a.get(h.id)??0)*u,r.nodeMinPx),r.nodeMaxPx);o.applyMatrix4(this.camera.projectionMatrix),l.push({id:h.id,x:(o.x*.5+.5)*i,y:(1-(o.y*.5+.5))*s,r:f*.6,z:d,pxPerWorld:u})}return this.screenCache=l,l}contentBoundsX(){let e=cr[this.lens],t=1/0,i=-1/0,s=new Map(this.screenPositions().map(r=>[r.id,r]));for(let r=0;r<this.runMeta.length;r++){let a=s.get(this.runMeta[r].id),o=this.text.spans[r];if(!a)continue;let l=Math.min(Math.max(.92*a.pxPerWorld,e.textMinPx),e.textMaxPx),c=Math.max(o?o.widthEm*l/2:0,a.r);t=Math.min(t,a.x-c),i=Math.max(i,a.x+c)}return{lo:t,hi:i}}pick(e,t,i=10){let s=null,r=1/0,a=1/0;for(let o of this.screenPositions()){let l=Math.hypot(o.x-e,o.y-t),c=Math.max(o.r,6)+i;l<=c&&(o.z<a-.001||Math.abs(o.z-a)<.001&&l<r)&&(s=o.id,r=l,a=o.z)}return s}screenToWorld(e,t,i){let s=this.renderer.domElement,r=new D(e/s.width*2-1,-(t/s.height)*2+1,.5);r.unproject(this.camera);let a=r.sub(this.camera.position).normalize(),o=new D;this.camera.getWorldDirection(o);let l=a.dot(o),c=l===0?0:i.clone().sub(this.camera.position).dot(o)/l;return this.camera.position.clone().add(a.multiplyScalar(c))}boundsOf(e=this.doc?Cn(this.doc):[]){if(!e.length)return{centre:new D,radius:10};let t=new D(1/0,1/0,1/0),i=new D(-1/0,-1/0,-1/0);for(let r of e)t.min(new D(...r.pos)),i.max(new D(...r.pos));return{centre:t.clone().add(i).multiplyScalar(.5),radius:Math.max(i.distanceTo(t)*.5,4)}}fitDistance(e,t=1.18){let i=this.camera.fov*Math.PI/180,s=2*Math.atan(Math.tan(i/2)*this.camera.aspect);return e*t/Math.tan(Math.min(i,s)/2)}fitAll(e=this.doc?Cn(this.doc):[],t=1.04,i={},s=!0){if(!e.length)return{target:new D,dist:60};let r=e.map(I=>[I.pos[0],I.pos[1],I.pos[2]]),a=s?this.doc?.holding:null;if(a){let[I,T,P]=a.origin,U=a.radius;for(let[B,L,G]of[[U,0,0],[-U,0,0],[0,U,0],[0,-U,0],[0,0,U],[0,0,-U]])r.push([I+B,T+L,P+G])}let o=new D(1/0,1/0,1/0),l=new D(-1/0,-1/0,-1/0);for(let I of r)o.min(new D(...I)),l.max(new D(...I));let c=o.clone().add(l).multiplyScalar(.5),h=this.camera.fov*Math.PI/180,d=Math.tan(h/2),u=d*this.camera.aspect,{yaw:f,pitch:g}=this.pose,x=Math.cos(g),p=new D(x*Math.sin(f),Math.sin(g),x*Math.cos(f)).normalize(),m=new D(0,1,0),A=new D().crossVectors(m,p).normalize(),R=new D().crossVectors(p,A).normalize(),M=Math.max(1-2*(i.top??0),.2),b=Math.max(1-2*(i.bottom??0),.2),S=Math.max(1-2*(i.left??0),.2),w=Math.max(1-2*(i.right??0),.2),v=0,E=new D;for(let I of r){E.set(I[0],I[1],I[2]).sub(c);let T=E.dot(A),P=E.dot(R),U=E.dot(p);v=Math.max(v,U+Math.abs(T)/(u*(T>=0?w:S)),U+Math.abs(P)/(d*(P>=0?M:b)))}return{target:c,dist:Math.max(v*t,6)}}};var hr=(n,e,t)=>Math.min(Math.max(n,e),t),wS=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,ih=class{constructor(e,t,i){this.scene=e;this.store=t;this.hooks=i}scene;store;hooks;dragging=null;dragPlane=new D;dragCluster=null;dragLast=new D;downAt={x:0,y:0,t:0};lpFired=!1;dragMoved=!1;lastTapId=null;lastTapT=0;linkFrom=null;orbiting=!1;pinchDist=0;lp=null;now=()=>performance.now();longPressMs=500;fly=null;minDist=4;maxDist=900;gyroDriven=!1;gyroBase=null;get linkArmed(){return this.linkFrom}tickTimers(e=this.now()){if(this.lp&&e-this.lp.at>=this.longPressMs){let{x:t,y:i}=this.lp;this.lp=null,this.orbiting=!1,this.lpFired=!0,this.hooks.onGestureFired("longpress","Quick-add into holding"),this.hooks.onQuickAdd({x:t,y:i})}}clearLink(){this.linkFrom=null}orbit(e,t){let i=-e*.0055,s=t*.0045;this.scene.pose.yaw+=i,this.scene.pose.pitch=hr(this.scene.pose.pitch+s,-1.45,1.45),this.gyroBase&&(this.gyroBase.yaw+=i,this.gyroBase.pitch=hr(this.gyroBase.pitch+s,-1.45,1.45))}zoom(e){this.scene.pose.dist=hr(this.scene.pose.dist*e,this.minDist,this.maxDist)}panTarget(e,t){let i=this.scene.pose,s=Math.cos(i.pitch),r=new D(s*Math.sin(i.yaw),Math.sin(i.pitch),s*Math.cos(i.yaw)),a=new D().crossVectors(new D(0,1,0),r).normalize(),o=new D().crossVectors(r,a).normalize(),l=this.scene.renderer.domElement,c=this.scene.camera.projectionMatrix.elements[5],h=l.height*c*.5/Math.max(i.dist,1e-4),d=1/Math.max(h,1e-6);i.target.addScaledVector(a,-e*d).addScaledVector(o,t*d)}flyTo(e,t=1300,i=13){let s=this.store.node(e);if(!s)return;let r=this.scene.pose;this.fly={from:{t:r.target.clone(),yaw:r.yaw,pitch:r.pitch,d:r.dist},to:{t:new D(s.pos[0],s.pos[1],s.pos[2]),yaw:r.yaw+.34,pitch:hr(r.pitch*.55+.08,-.6,.6),d:i},t0:this.now(),ms:t}}get flying(){return this.fly!==null}tickFly(e=this.now()){if(!this.fly)return!1;let t=this.fly,i=wS(hr((e-t.t0)/t.ms,0,1)),s=this.scene.pose;return s.target.lerpVectors(t.from.t,t.to.t,i),s.yaw=t.from.yaw+(t.to.yaw-t.from.yaw)*i,s.pitch=t.from.pitch+(t.to.pitch-t.from.pitch)*i,s.dist=t.from.d+(t.to.d-t.from.d)*i,i>=1?(this.fly=null,!1):!0}applyOrientation(e,t,i){let s=-(e*Math.PI)/180,r=hr((t-90)*Math.PI/180,-1.2,1.2);this.gyroBase||(this.gyroBase={yaw:this.scene.pose.yaw-s,pitch:this.scene.pose.pitch-r}),this.scene.pose.yaw=this.gyroBase.yaw+s,this.scene.pose.pitch=hr(this.gyroBase.pitch+r,-1.35,1.35)}resetGyroBase(){this.gyroBase=null}lastClusterMove=null;clusterStart=null;snapshotCluster(e){let t=e.map(s=>this.store.doc.nodes[s]).filter(Boolean);if(!t.length)return null;let i=[0,0,0];for(let s of t)i[0]+=s.pos[0],i[1]+=s.pos[1],i[2]+=s.pos[2];return i[0]/=t.length,i[1]/=t.length,i[2]/=t.length,{ids:t.map(s=>s.id),centroid:i,offsets:t.map(s=>[s.pos[0]-i[0],s.pos[1]-i[1],s.pos[2]-i[2]])}}beginDrag(e,t){let i=this.store.node(e);if(i){if(this.dragging=e,this.dragMoved=!1,this.store.beginMove(),this.dragPlane.set(i.pos[0],i.pos[1],i.pos[2]),this.dragLast.copy(this.dragPlane),t){let s=i.label;this.dragCluster=Object.values(this.store.doc.nodes).filter(r=>r.placed&&r.label===s).map(r=>r.id),this.clusterStart=this.snapshotCluster(this.dragCluster)}else this.dragCluster=null,this.clusterStart=null;this.scene.holding.setActive(!0),this.scene.setDragging(e),this.scene.markDirty()}}moveDrag(e,t){if(!this.dragging)return;let i=this.scene.screenToWorld(e,t,this.dragPlane);if(this.dragCluster){let s=[i.x-this.dragLast.x,i.y-this.dragLast.y,i.z-this.dragLast.z];this.store.moveCluster(this.dragCluster,s),this.dragLast.copy(i)}else{let s=[i.x,i.y,i.z];this.store.move(this.dragging,s)}this.scene.markDirty()}endDrag(){if(this.dragging&&this.dragMoved&&!this.dragCluster){let i=this.store.node(this.dragging);i&&!i.placed&&this.store.place(this.dragging,[i.pos[0],i.pos[1],i.pos[2]])}let e=!!this.dragging;if(this.dragCluster&&this.clusterStart&&this.dragMoved){let i=this.snapshotCluster(this.clusterStart.ids),s=this.store.node(this.clusterStart.ids[0]);if(i&&s){let r=0;for(let a=0;a<i.offsets.length;a++){let o=this.clusterStart.offsets[a],l=i.offsets[a];r=Math.max(r,Math.hypot(l[0]-o[0],l[1]-o[1],l[2]-o[2]))}this.lastClusterMove={label:s.label||"(unlabelled)",members:i.ids.length,travelled:Math.hypot(i.centroid[0]-this.clusterStart.centroid[0],i.centroid[1]-this.clusterStart.centroid[1],i.centroid[2]-this.clusterStart.centroid[2]),drift:r}}}let t=this.dragCluster?`moved ${this.dragCluster.length} thoughts`:"moved a thought";this.dragging=null,this.dragCluster=null,this.clusterStart=null,this.store.endMove(t),e&&this.hooks.onDragEnd?.(),this.scene.setDragging(null),this.scene.holding.setActive(!1),this.scene.markDirty()}clusterOf(e){let t=this.store.node(e);return t?Object.values(this.store.doc.nodes).filter(i=>i.placed&&i.label===t.label).map(i=>i.id):[]}attachMouse(e){e.addEventListener("mousedown",i=>{let[s,r]=this.toCanvas(e,i.clientX,i.clientY);this.downAt={x:s,y:r,t:this.now()};let a=this.scene.pick(s,r);a&&i.button===0?(this.beginDrag(a,i.altKey),this.hooks.onGestureFired(i.altKey?"mouse-alt-drag":"mouse-drag",i.altKey?"Grab cluster":"Move node")):i.button===0&&(this.orbiting=!0)}),e.addEventListener("mousemove",i=>{let[s,r]=this.toCanvas(e,i.clientX,i.clientY);if(this.dragging){if(!this.dragMoved&&Math.hypot(s-this.downAt.x,r-this.downAt.y)<=4)return;this.dragMoved=!0,this.moveDrag(s,r)}else this.orbiting&&this.orbit(i.movementX,i.movementY)});let t=i=>{let[s,r]=this.toCanvas(e,i.clientX,i.clientY);if(Math.hypot(s-this.downAt.x,r-this.downAt.y)<5&&!this.dragCluster){let o=this.scene.pick(s,r);this.linkFrom&&o&&o!==this.linkFrom&&(this.store.connect(this.linkFrom,o),this.hooks.onGestureFired("mouse-click","Connect"),this.linkFrom=null),this.hooks.onSelect(o)}this.endDrag(),this.orbiting=!1};e.addEventListener("mouseup",t),e.addEventListener("mouseleave",()=>{this.endDrag(),this.orbiting=!1}),e.addEventListener("wheel",i=>{i.preventDefault(),this.zoom(i.deltaY>0?1.12:1/1.12),this.hooks.onGestureFired(i.deltaY>0?"mouse-scroll-down":"mouse-scroll-up",i.deltaY>0?"Pull back":"Move closer")},{passive:!1}),e.addEventListener("contextmenu",i=>i.preventDefault())}armLink(e){this.linkFrom=e}attachTouch(e){let t=()=>{this.lp=null};e.addEventListener("touchstart",i=>{if(i.preventDefault(),i.touches.length===2){t(),this.endDrag(),this.orbiting=!1,this.pinchDist=this.touchSpan(i.touches);return}let s=i.touches[0],[r,a]=this.toCanvas(e,s.clientX,s.clientY);this.downAt={x:r,y:a,t:this.now()};let o=this.scene.pick(r,a);o?this.beginDrag(o,!1):(this.orbiting=!0,this.lp={x:r,y:a,at:this.now()})},{passive:!1}),e.addEventListener("touchmove",i=>{if(i.preventDefault(),i.touches.length===2){let l=this.touchSpan(i.touches);this.pinchDist>0&&(this.zoom(this.pinchDist/l),this.hooks.onGestureFired("pinch",l>this.pinchDist?"Zoom in":"Zoom out")),this.pinchDist=l;return}let s=i.touches[0],[r,a]=this.toCanvas(e,s.clientX,s.clientY),o=this.lp?Math.hypot(r-this.lp.x,a-this.lp.y)>8:Math.hypot(r-this.downAt.x,a-this.downAt.y)>8;if(o&&t(),this.dragging){if(!o&&!this.dragMoved)return;this.dragMoved=!0,this.moveDrag(r,a),this.hooks.onGestureFired("dragnode","Place / move")}else this.orbiting&&(this.orbit(r-this.downAt.x,a-this.downAt.y),this.downAt.x=r,this.downAt.y=a,this.hooks.onGestureFired("dragempty",this.gyroBase?"Re-aim the vantage":"Orbit the map"))},{passive:!1}),e.addEventListener("touchend",i=>{i.preventDefault(),t();let s=this.dragMoved||this.lpFired;this.lpFired=!1;let r=this.now(),a=i.changedTouches[0],[o,l]=this.toCanvas(e,a.clientX,a.clientY),c=Math.hypot(o-this.downAt.x,l-this.downAt.y)<12,h=this.scene.pick(o,l);c&&!s&&(h!==null&&this.lastTapId!==null&&r-this.lastTapT<420&&h?(this.lastTapId===h?(this.linkFrom=h,this.hooks.onGestureFired("doubletap","Link armed")):(this.store.connect(this.lastTapId,h),this.hooks.onGestureFired("doubletap","Connect"),this.linkFrom=null),this.lastTapId=null,this.lastTapT=0):(this.linkFrom&&h&&h!==this.linkFrom?(this.store.connect(this.linkFrom,h),this.hooks.onGestureFired("doubletap","Connect"),this.linkFrom=null):this.hooks.onGestureFired("tap",h?"Select and inspect":"Deselect"),this.hooks.onSelect(h),this.lastTapId=h,this.lastTapT=r)),this.endDrag(),this.orbiting=!1,this.pinchDist=0},{passive:!1})}touchSpan(e){return Math.hypot(e[0].clientX-e[1].clientX,e[0].clientY-e[1].clientY)}toCanvas(e,t,i){let s=e.getBoundingClientRect(),r=this.scene.renderer.domElement;return[(t-s.left)/s.width*r.width,(i-s.top)/s.height*r.height]}};var _r=typeof self<"u"?self:{};function ax(n,e){e:{for(var t=["CLOSURE_FLAGS"],i=_r,s=0;s<t.length;s++)if((i=i[t[s]])==null){t=null;break e}t=i}return(n=t&&t[n])!=null?n:e}function It(n,e){n=n.split(".");for(var t,i=_r;n.length&&(t=n.shift());)n.length||e===void 0?i=i[t]&&i[t]!==Object.prototype[t]?i[t]:i[t]={}:i[t]=e}function ur(){throw Error("Invalid UTF8")}function Bg(n,e){return e=String.fromCharCode.apply(null,e),n==null?e:n+e}var Xd,ES,sh=void 0,AS=typeof TextDecoder<"u",TS=typeof TextEncoder<"u";function ox(n){if(TS)n=(ES||=new TextEncoder).encode(n);else{let t=0,i=new Uint8Array(3*n.length);for(let s=0;s<n.length;s++){var e=n.charCodeAt(s);if(e<128)i[t++]=e;else{if(e<2048)i[t++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&s<n.length){let r=n.charCodeAt(++s);if(r>=56320&&r<=57343){e=1024*(e-55296)+r-56320+65536,i[t++]=e>>18|240,i[t++]=e>>12&63|128,i[t++]=e>>6&63|128,i[t++]=63&e|128;continue}s--}e=65533}i[t++]=e>>12|224,i[t++]=e>>6&63|128}i[t++]=63&e|128}}n=t===i.length?i:i.subarray(0,t)}return n}function lx(n){_r.setTimeout(()=>{throw n},0)}var CS=ax(610401301,!1),zg=ax(748402147,!0);function Vg(){var n=_r.navigator;return n&&(n=n.userAgent)?n:""}var tf,Hg=_r.navigator;function Uh(n){return Uh[" "](n),n}tf=Hg&&Hg.userAgentData||null,Uh[" "]=function(){};var cx={},bo=null;function RS(n){var e=n.length,t=3*e/4;t%3?t=Math.floor(t):"=.".indexOf(n[e-1])!=-1&&(t="=.".indexOf(n[e-2])!=-1?t-2:t-1);var i=new Uint8Array(t),s=0;return(function(r,a){function o(c){for(;l<r.length;){let h=r.charAt(l++),d=bo[h];if(d!=null)return d;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return c}hx();for(var l=0;;){let c=o(-1),h=o(0),d=o(64),u=o(64);if(u===64&&c===-1)break;a(c<<2|h>>4),d!=64&&(a(h<<4&240|d>>2),u!=64&&a(d<<6&192|u))}})(n,function(r){i[s++]=r}),s!==t?i.subarray(0,s):i}function hx(){if(!bo){bo={};var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let t=0;t<5;t++){let i=n.concat(e[t].split(""));cx[t]=i;for(let s=0;s<i.length;s++){let r=i[s];bo[r]===void 0&&(bo[r]=s)}}}}var IS=typeof Uint8Array<"u",ux=!(!(CS&&tf&&tf.brands.length>0)&&(Vg().indexOf("Trident")!=-1||Vg().indexOf("MSIE")!=-1))&&typeof btoa=="function",Gg=/[-_.]/g,PS={"-":"+",_:"/",".":"="};function LS(n){return PS[n]||""}function dx(n){if(!ux)return RS(n);n=Gg.test(n)?n.replace(Gg,LS):n,n=atob(n);var e=new Uint8Array(n.length);for(let t=0;t<n.length;t++)e[t]=n.charCodeAt(t);return e}function Cf(n){return IS&&n!=null&&n instanceof Uint8Array}var ca={};function br(){return NS||=new Bi(null,ca)}function Rf(n){fx(ca);var e=n.g;return(e=e==null||Cf(e)?e:typeof e=="string"?dx(e):null)==null?e:n.g=e}var NS,Bi=class{h(){return new Uint8Array(Rf(this)||0)}constructor(n,e){if(fx(e),this.g=n,n!=null&&n.length===0)throw Error("ByteString should be constructed with non-empty values")}};function fx(n){if(n!==ca)throw Error("illegal external caller")}function px(n,e){n.__closure__error__context__984382||(n.__closure__error__context__984382={}),n.__closure__error__context__984382.severity=e}var DS=void 0;function Ao(n){return px(n=Error(n),"warning"),n}function ha(n,e){if(n!=null){var t=DS??={},i=t[n]||0;i>=e||(t[n]=i+1,px(n=Error(),"incident"),lx(n))}}function Sr(){return typeof BigInt=="function"}var _a=typeof Symbol=="function"&&typeof Symbol()=="symbol";function Wi(n,e,t=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?t&&Symbol.for&&n?Symbol.for(n):n!=null?Symbol(n):Symbol():e}var Hs,FS=Wi("jas",void 0,!0),Wg=Wi(void 0,"0di"),xo=Wi(void 0,"1oa"),Xn=Wi(void 0,Symbol()),US=Wi(void 0,"0ub"),OS=Wi(void 0,"0ubs"),nf=Wi(void 0,"0ubsb"),kS=Wi(void 0,"0actk"),ua=Wi("m_m","kb",!0),Xg=Wi(),mx={Va:{value:0,configurable:!0,writable:!0,enumerable:!1}},gx=Object.defineProperties,Ee=_a?FS:"Va",$g=[];function Lo(n,e){_a||Ee in n||gx(n,mx),n[Ee]|=e}function Qt(n,e){_a||Ee in n||gx(n,mx),n[Ee]=e}function No(n){return Lo(n,34),n}function To(n){return Lo(n,8192),n}Qt($g,7),Hs=Object.freeze($g);var da={};function Dn(n,e){return e===void 0?n.h!==Mr&&!!(2&n.A[Ee]):!!(2&e)&&n.h!==Mr}var Mr={};function Oh(n,e){if(n!=null){if(typeof n=="string")n=n?new Bi(n,ca):br();else if(n.constructor!==Bi)if(Cf(n))n=n.length?new Bi(new Uint8Array(n),ca):br();else{if(!e)throw Error();n=void 0}}return n}var vh=class{constructor(e,t,i){this.g=e,this.h=t,this.j=i}next(){var e=this.g.next();return e.done||(e.value=this.h.call(this.j,e.value)),e}[Symbol.iterator](){return this}},BS=Object.freeze({});function xx(n,e,t){var i,s=128&e?0:-1,r=n.length;(i=!!r)&&(i=(i=n[r-1])!=null&&typeof i=="object"&&i.constructor===Object);var a=r+(i?-1:0);for(e=128&e?1:0;e<a;e++)t(e-s,n[e]);if(i){n=n[r-1];for(let o in n)!isNaN(o)&&t(+o,n[o])}}var vx={};function ba(n){return 128&n?vx:void 0}function kh(n){return n.ib=!0,n}var zS=kh(n=>typeof n=="number"),qg=kh(n=>typeof n=="string"),VS=kh(n=>typeof n=="boolean"),Bh=typeof _r.BigInt=="function"&&typeof _r.BigInt(0)=="bigint";function Jt(n){var e=n;if(qg(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(zS(e)&&!Number.isSafeInteger(e))throw Error(String(e));return Bh?BigInt(n):n=VS(n)?n?"1":"0":qg(n)?n.trim()||"0":String(n)}var sf=kh(n=>Bh?n>=GS&&n<=XS:n[0]==="-"?Yg(n,HS):Yg(n,WS)),HS=Number.MIN_SAFE_INTEGER.toString(),GS=Bh?BigInt(Number.MIN_SAFE_INTEGER):void 0,WS=Number.MAX_SAFE_INTEGER.toString(),XS=Bh?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Yg(n,e){if(n.length>e.length)return!1;if(n.length<e.length||n===e)return!0;for(let t=0;t<n.length;t++){let i=n[t],s=e[t];if(i>s)return!1;if(i<s)return!0}}var yx,$S=typeof Uint8Array.prototype.slice=="function",lt=0,xt=0;function rf(n){var e=n>>>0;lt=e,xt=(n-e)/4294967296>>>0}function wr(n){if(n<0){rf(-n);let[e,t]=Lf(lt,xt);lt=e>>>0,xt=t>>>0}else rf(n)}function If(n){var e=yx||=new DataView(new ArrayBuffer(8));e.setFloat32(0,+n,!0),xt=0,lt=e.getUint32(0,!0)}function _x(n,e){var t=4294967296*e+(n>>>0);return Number.isSafeInteger(t)?t:fa(n,e)}function qS(n,e){return Jt(Sr()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(n>>>0)):fa(n,e))}function bx(n,e){return Sr()?Jt(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(n)))):Jt(Pf(n,e))}function fa(n,e){if(n>>>=0,(e>>>=0)<=2097151)var t=""+(4294967296*e+n);else Sr()?t=""+(BigInt(e)<<BigInt(32)|BigInt(n)):(n=(16777215&n)+6777216*(t=16777215&(n>>>24|e<<8))+6710656*(e=e>>16&65535),t+=8147497*e,e*=2,n>=1e7&&(t+=n/1e7>>>0,n%=1e7),t>=1e7&&(e+=t/1e7>>>0,t%=1e7),t=e+Kg(t)+Kg(n));return t}function Kg(n){return n=String(n),"0000000".slice(n.length)+n}function Pf(n,e){if(2147483648&e)if(Sr())n=""+(BigInt(0|e)<<BigInt(32)|BigInt(n>>>0));else{let[t,i]=Lf(n,e);n="-"+fa(t,i)}else n=fa(n,e);return n}function Do(n){if(n.length<16)wr(Number(n));else if(Sr())n=BigInt(n),lt=Number(n&BigInt(4294967295))>>>0,xt=Number(n>>BigInt(32)&BigInt(4294967295));else{let e=+(n[0]==="-");xt=lt=0;let t=n.length;for(let i=e,s=(t-e)%6+e;s<=t;i=s,s+=6){let r=Number(n.slice(i,s));xt*=1e6,(lt=1e6*lt+r)>=4294967296&&(xt+=Math.trunc(lt/4294967296),xt>>>=0,lt>>>=0)}if(e){let[i,s]=Lf(lt,xt);lt=i,xt=s}}}function Lf(n,e){return e=~e,n?n=1+~n:e+=1,[n,e]}function si(n){return Array.prototype.slice.call(n)}var gr=typeof BigInt=="function"?BigInt.asIntN:void 0,af=typeof BigInt=="function"?BigInt.asUintN:void 0,zi=Number.isSafeInteger,Fo=Number.isFinite,zs=Math.trunc,YS=Jt(0);function Mx(n){if(typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);return n}function mi(n){return n==null||typeof n=="number"?n:n==="NaN"||n==="Infinity"||n==="-Infinity"?Number(n):void 0}function yh(n){if(typeof n!="boolean"){var e=typeof n;throw Error(`Expected boolean but got ${e!="object"?e:n?Array.isArray(n)?"array":e:"null"}: ${n}`)}return n}var KS=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Ma(n){switch(typeof n){case"bigint":return!0;case"number":return Fo(n);case"string":return KS.test(n);default:return!1}}function as(n){if(n!=null){if(!Fo(n))throw Ao("enum");n|=0}return n}function Er(n){if(n==null)return n;if(typeof n=="string"&&n)n=+n;else if(typeof n!="number")return;return Fo(n)?0|n:void 0}function Sx(n){if(n==null)return n;if(typeof n=="string"&&n)n=+n;else if(typeof n!="number")return;return Fo(n)?n>>>0:void 0}function wx(n,e){if(e??=1024,!Ma(n))throw Ao("int64");var t=typeof n;switch(e){case 512:switch(t){case"string":return _h(n);case"bigint":return String(gr(64,n));default:return Cx(n)}case 1024:switch(t){case"string":return Rx(n);case"bigint":return Jt(gr(64,n));default:return Ix(n)}case 0:switch(t){case"string":return _h(n);case"bigint":return Jt(gr(64,n));default:return zh(n)}default:return(function(i,s=`unexpected value ${i}!`){throw Error(s)})(e,"Unknown format requested type for int64")}}function Ex(n){var e=n.length;return(n[0]==="-"?e<20||e===20&&n<="-9223372036854775808":e<19||e===19&&n<="9223372036854775807")?n:(Do(n),Pf(lt,xt))}function Ax(n){if(n[0]==="-")var e=!1;else e=(e=n.length)<20||e===20&&n<="18446744073709551615";return e?n:(Do(n),fa(lt,xt))}function zh(n){if(n=zs(n),!zi(n)){wr(n);var e=lt,t=xt;(n=2147483648&t)&&(t=~t>>>0,(e=1+~e>>>0)==0&&(t=t+1>>>0)),n=typeof(e=_x(e,t))=="number"?n?-e:e:n?"-"+e:e}return n}function Tx(n){return(n=zs(n))>=0&&zi(n)||(wr(n),n=_x(lt,xt)),n}function Cx(n){return n=zs(n),zi(n)?n=String(n):(wr(n),n=Pf(lt,xt)),n}function _h(n){var e=zs(Number(n));return zi(e)?String(e):((e=n.indexOf("."))!==-1&&(n=n.substring(0,e)),Ex(n))}function Rx(n){var e=zs(Number(n));return zi(e)?Jt(e):((e=n.indexOf("."))!==-1&&(n=n.substring(0,e)),Sr()?Jt(gr(64,BigInt(n))):Jt(Ex(n)))}function Ix(n){return zi(n)?Jt(zh(n)):Jt(Cx(n))}function bh(n){var e=typeof n;return n==null?n:e==="bigint"?Jt(gr(64,n)):Ma(n)?e==="string"?Rx(n):Ix(n):void 0}function Nf(n){if(n==null)return n;var e=typeof n;if(e==="bigint")return String(gr(64,n));if(Ma(n)){if(e==="string")return _h(n);if(e==="number")return zh(n)}}function Px(n){if(n==null||typeof n=="string"||n instanceof Bi)return n}function Lx(n){if(typeof n!="string")throw Error();return n}function rs(n){if(n!=null&&typeof n!="string")throw Error();return n}function fn(n){return n==null||typeof n=="string"?n:void 0}function Df(n,e,t,i){return n!=null&&n[ua]===da?n:Array.isArray(n)?((i=(t=0|n[Ee])|32&i|2&i)!==t&&Qt(n,i),new e(n)):(t?2&i?((n=e[Wg])||(No((n=new e).A),n=e[Wg]=n),e=n):e=new e:e=void 0,e)}function ZS(n,e,t){return(n=e?wx(n,1024):bh(n))==null?t?YS:void 0:n}function jS(n){return n}var JS={},QS=(function(){try{return Uh(new class extends Map{constructor(){super()}}),!1}catch{return!0}})(),So=class{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,t){return this.g.set(e,t),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,t){return this.g.forEach(e,t)}[Symbol.iterator](){return this.entries()}},ew=QS?(Object.setPrototypeOf(So.prototype,Map.prototype),Object.defineProperties(So.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),So):class extends Map{constructor(){super()}};function Zg(n){return n}function $d(n){if(2&n.M)throw Error("Cannot mutate an immutable Map")}var tw,ls=class extends ew{constructor(n,e,t=Zg,i=Zg){super(),this.M=0|n[Ee],this.N=e,this.ba=t,this.na=this.N?nw:i;for(let s=0;s<n.length;s++){let r=n[s],a=t(r[0],!1,!0),o=r[1];e?o===void 0&&(o=null):o=i(r[1],!1,!0,void 0,void 0,this.M),super.set(a,o)}}ea(n){return To(Array.from(super.entries(),n))}clear(){$d(this),super.clear()}delete(n){return $d(this),super.delete(this.ba(n,!0,!1))}entries(){if(this.N){var n=super.keys();n=new vh(n,iw,this)}else n=super.entries();return n}values(){if(this.N){var n=super.keys();n=new vh(n,ls.prototype.get,this)}else n=super.values();return n}forEach(n,e){this.N?super.forEach((t,i,s)=>{n.call(e,s.get(i),i,s)}):super.forEach(n,e)}set(n,e){return $d(this),(n=this.ba(n,!0,!1))==null?this:e==null?(super.delete(n),this):super.set(n,this.na(e,!0,!0,this.N,!1,this.M))}gb(n){var e=this.ba(n[0],!1,!0);n=n[1],n=this.N?n===void 0?null:n:this.na(n,!1,!0,void 0,!1,this.M),super.set(e,n)}has(n){return super.has(this.ba(n,!1,!1))}get(n){n=this.ba(n,!1,!1);var e=super.get(n);if(e!==void 0){var t=this.N;return t?((t=this.na(e,!1,!0,t,this.Fa,this.M))!==e&&super.set(n,t),t):e}}[Symbol.iterator](){return this.entries()}};function nw(n,e,t,i,s,r){return n=Df(n,i,t,r),s&&(n=Uf(n)),n}function iw(n){return[n,this.get(n)]}function jg(){return tw||=new ls(No([]),void 0,void 0,void 0,JS)}function Vh(n){return Xn?n[Xn]:void 0}function Mh(n,e){for(let t in n)!isNaN(t)&&e(n,+t,n[t])}ls.prototype.toJSON=void 0;var sw,rw,aw,of=class{},ow={cb:!0};function lw(n,e){e<100||ha(OS,1)}function Hh(n,e,t,i){var s=i!==void 0;i=!!i;var r,a=Xn;!s&&_a&&a&&(r=n[a])&&Mh(r,lw),a=[];var o=n.length;r=4294967295;var l=!1,c=!!(64&e),h=c?128&e?0:-1:void 0;if(!(1&e)){var d=o&&n[o-1];d!=null&&typeof d=="object"&&d.constructor===Object?r=--o:d=void 0,!c||128&e||s||(l=!0,r=(sw??jS)(r-h,h,n,d,void 0)+h)}e=void 0;for(var u=0;u<o;u++){let f=n[u];if(f!=null&&(f=t(f,i))!=null)if(c&&u>=r){let g=u-h;(e??={})[g]=f}else a[u]=f}if(d)for(let f in d){if((o=d[f])==null||(o=t(o,i))==null)continue;let g;u=+f,c&&!Number.isNaN(u)&&(g=u+h)<r?a[g]=o:(e??={})[f]=o}return e&&(l?a.push(e):a[r]=e),s&&Xn&&(n=Vh(n))&&n instanceof of&&(a[Xn]=(function(f){var g=new of;return Mh(f,(x,p,m)=>{g[p]=si(m)}),g.ka=f.ka,g})(n)),a}function cw(n){return n[0]=Co(n[0]),n[1]=Co(n[1]),n}function Co(n){switch(typeof n){case"number":return Number.isFinite(n)?n:""+n;case"bigint":return sf(n)?Number(n):""+n;case"boolean":return n?1:0;case"object":if(Array.isArray(n)){var e=0|n[Ee];return n.length===0&&1&e?void 0:Hh(n,e,Co)}if(n!=null&&n[ua]===da)return Nx(n);if(n instanceof Bi){if((e=n.g)==null)n="";else if(typeof e=="string")n=e;else{if(ux){for(var t="",i=0,s=e.length-10240;i<s;)t+=String.fromCharCode.apply(null,e.subarray(i,i+=10240));t+=String.fromCharCode.apply(null,i?e.subarray(i):e),e=btoa(t)}else{t===void 0&&(t=0),hx(),t=cx[t],i=Array(Math.floor(e.length/3)),s=t[64]||"";let c=0,h=0;for(;c<e.length-2;c+=3){var r=e[c],a=e[c+1],o=e[c+2],l=t[r>>2];r=t[(3&r)<<4|a>>4],a=t[(15&a)<<2|o>>6],o=t[63&o],i[h++]=l+r+a+o}switch(l=0,o=s,e.length-c){case 2:o=t[(15&(l=e[c+1]))<<2]||s;case 1:e=e[c],i[h]=t[e>>2]+t[(3&e)<<4|l>>4]+o+s}e=i.join("")}n=n.g=e}return n}return n instanceof ls?n=n.size!==0?n.ea(cw):void 0:void 0}return n}function Nx(n){return Hh(n=n.A,0|n[Ee],Co)}function xr(n,e){return Dx(n,e[0],e[1])}function Dx(n,e,t,i=0){if(n==null){var s=32;t?(n=[t],s|=128):n=[],e&&(s=-16760833&s|(1023&e)<<14)}else{if(!Array.isArray(n))throw Error("narr");if(s=0|n[Ee],zg&&1&s)throw Error("rfarr");if(2048&s&&!(2&s)&&(function(){if(zg)throw Error("carr");ha(kS,5)})(),256&s)throw Error("farr");if(64&s)return(s|i)!==s&&Qt(n,s|i),n;if(t&&(s|=128,t!==n[0]))throw Error("mid");e:{s|=64;var r=(t=n).length;if(r){var a=r-1;let l=t[a];if(l!=null&&typeof l=="object"&&l.constructor===Object){if((a-=e=128&s?0:-1)>=1024)throw Error("pvtlmt");for(var o in l)(r=+o)<a&&(t[r+e]=l[o],delete l[o]);s=-16760833&s|(1023&a)<<14;break e}}if(e){if((o=Math.max(e,r-(128&s?0:-1)))>1024)throw Error("spvt");s=-16760833&s|(1023&o)<<14}}}return Qt(n,64|s|i),n}function hw(n,e){if(typeof n!="object")return n;if(Array.isArray(n)){var t=0|n[Ee];return n.length===0&&1&t?void 0:Jg(n,t,e)}if(n!=null&&n[ua]===da)return Qg(n);if(n instanceof ls){if(2&(e=n.M))return n;if(!n.size)return;if(t=No(n.ea()),n.N)for(n=0;n<t.length;n++){let i=t[n],s=i[1];s=s==null||typeof s!="object"?void 0:s!=null&&s[ua]===da?Qg(s):Array.isArray(s)?Jg(s,0|s[Ee],!!(32&e)):void 0,i[1]=s}return t}return n instanceof Bi?n:void 0}function Jg(n,e,t){return 2&e||(!t||4096&e||16&e?n=Sa(n,e,!1,t&&!(16&e)):(Lo(n,34),4&e&&Object.freeze(n))),n}function Ff(n,e,t){return n=new n.constructor(e),t&&(n.h=Mr),n.m=Mr,n}function Qg(n){var e=n.A,t=0|e[Ee];return Dn(n,t)?n:Of(n,e,t)?Ff(n,e):Sa(e,t)}function Sa(n,e,t,i){return i??=!!(34&e),n=Hh(n,e,hw,i),i=32,t&&(i|=2),Qt(n,e=16769217&e|i),n}function Uf(n){var e=n.A,t=0|e[Ee];return Dn(n,t)?Of(n,e,t)?Ff(n,e,!0):new n.constructor(Sa(e,t,!1)):n}function wa(n){if(n.h!==Mr)return!1;var e=n.A;return Lo(e=Sa(e,0|e[Ee]),2048),n.A=e,n.h=void 0,n.m=void 0,!0}function Ar(n){if(!wa(n)&&Dn(n,0|n.A[Ee]))throw Error()}function Gs(n,e){e===void 0&&(e=0|n[Ee]),32&e&&!(4096&e)&&Qt(n,4096|e)}function Of(n,e,t){return!!(2&t)||!(!(32&t)||4096&t)&&(Qt(e,2|t),n.h=Mr,!0)}var Fx=Jt(0),Fs={};function zt(n,e,t,i){if((e=cs(n.A,e,void 0,i))!==null||t&&n.m!==Mr)return e}function cs(n,e,t,i){if(e===-1)return null;var s=e+(t?0:-1),r=n.length-1;if(!(r<1+(t?0:-1))){if(s>=r){var a=n[r];if(a!=null&&typeof a=="object"&&a.constructor===Object){t=a[e];var o=!0}else{if(s!==r)return;t=a}}else t=n[s];if(i&&t!=null){if((i=i(t))==null)return i;if(!Object.is(i,t))return o?a[e]=i:n[s]=i,i}return t}}function Ge(n,e,t,i){Ar(n);var s=n.A;return $t(s,0|s[Ee],e,t,i),n}function $t(n,e,t,i,s){var r=t+(s?0:-1),a=n.length-1;if(a>=1+(s?0:-1)&&r>=a){let o=n[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[t]=i,e}return r<=a?(n[r]=i,e):(i!==void 0&&(t>=(a=(e??=0|n[Ee])>>14&1023||536870912)?i!=null&&(n[a+(s?0:-1)]={[t]:i}):n[r]=i),e)}function Ux(n,e,t,i){var s=n.A;return Hx(s,0|s[Ee],e,n=zx(n,i)===t?t:-1)!==void 0}function fr(){return BS===void 0?2:4}function pr(n,e,t,i,s){var r=n.A,a=0|r[Ee];i=Dn(n,a)?1:i,s=!!s||i===3,i===2&&wa(n)&&(a=0|(r=n.A)[Ee]);var o=(n=kf(r,e))===Hs?7:0|n[Ee],l=Bf(o,a),c=!(4&l);if(c){4&l&&(n=si(n),o=0,l=ks(l,a),a=$t(r,a,e,n));let h=0,d=0;for(;h<n.length;h++){let u=t(n[h]);u!=null&&(n[d++]=u)}d<h&&(n.length=d),t=-513&l|4,l=t&=-1025,l&=-4097}return l!==o&&(Qt(n,l),2&l&&Object.freeze(n)),Ox(n,l,r,a,e,i,c,s)}function Ox(n,e,t,i,s,r,a,o){var l=e;return r===1||r===4&&(2&e||!(16&e)&&32&i)?Os(e)||((e|=!n.length||a&&!(4096&e)||32&i&&!(4096&e||16&e)?2:256)!==l&&Qt(n,e),Object.freeze(n)):(r===2&&Os(e)&&(n=si(n),l=0,e=ks(e,i),i=$t(t,i,s,n)),Os(e)||(o||(e|=16),e!==l&&Qt(n,e))),2&e||!(4096&e||16&e)||Gs(t,i),n}function kf(n,e,t){return n=cs(n,e,t),Array.isArray(n)?n:Hs}function Bf(n,e){return 2&e&&(n|=2),1|n}function Os(n){return!!(2&n)&&!!(4&n)||!!(256&n)}function kx(n){return Oh(n,!0)}function Bx(n){n=si(n);for(let e=0;e<n.length;e++){let t=n[e]=si(n[e]);Array.isArray(t[1])&&(t[1]=No(t[1]))}return To(n)}function Uo(n,e,t,i){Ar(n),$t(n=n.A,0|n[Ee],e,(i==="0"?Number(t)===0:t===i)?void 0:t)}function Ws(n,e,t){if(2&e)throw Error();var i=ba(e),s=kf(n,t,i),r=s===Hs?7:0|s[Ee],a=Bf(r,e);return(2&a||Os(a)||16&a)&&(a===r||Os(a)||Qt(s,a),s=si(s),r=0,a=ks(a,e),$t(n,e,t,s,i)),(a&=-13)!==r&&Qt(s,a),s}function zx(n,e){return Vf(zf(n=n.A),n,void 0,e)}function zf(n){if(_a)return n[xo]??(n[xo]=new Map);if(xo in n)return n[xo];var e=new Map;return Object.defineProperty(n,xo,{value:e}),e}function Vx(n,e,t,i,s){var r=zf(n),a=Vf(r,n,e,t,s);return a!==i&&(a&&(e=$t(n,e,a,void 0,s)),r.set(t,i)),e}function Vf(n,e,t,i,s){var r=n.get(i);if(r!=null)return r;r=0;for(let a=0;a<i.length;a++){let o=i[a];cs(e,o,s)!=null&&(r!==0&&(t=$t(e,t,r,void 0,s)),r=o)}return n.set(i,r),r}function Hf(n,e,t){var i=0|n[Ee],s=ba(i),r=cs(n,t,s);if(r!=null&&r[ua]===da){if(!Dn(r))return wa(r),r.A;var a=r.A}else Array.isArray(r)&&(a=r);if(a){let o=0|a[Ee];2&o&&(a=Sa(a,o))}return(a=xr(a,e))!==r&&$t(n,i,t,a,s),a}function Hx(n,e,t,i,s){var r=!1;if((i=cs(n,i,s,a=>{var o=Df(a,t,!1,e);return r=o!==a&&o!=null,o}))!=null)return r&&!Dn(i)&&Gs(n,e),i}function ut(n,e,t,i){var s=n.A,r=0|s[Ee];if((e=Hx(s,r,e,t,i))==null)return e;if(!Dn(n,r=0|s[Ee])){let a=Uf(e);a!==e&&(wa(n)&&(r=0|(s=n.A)[Ee]),Gs(s,r=$t(s,r,t,e=a,i)))}return e}function Gx(n,e,t,i,s,r,a,o){var l=Dn(n,t);r=l?1:r,a=!!a||r===3,l=o&&!l,(r===2||l)&&wa(n)&&(t=0|(e=n.A)[Ee]);var c=(n=kf(e,s))===Hs?7:0|n[Ee],h=Bf(c,t);if(o=!(4&h)){var d=n,u=t;let f=!!(2&h);f&&(u|=2);let g=!f,x=!0,p=0,m=0;for(;p<d.length;p++){let A=Df(d[p],i,!1,u);if(A instanceof i){if(!f){let R=Dn(A);g&&=!R,x&&=R}d[m++]=A}}m<p&&(d.length=m),h|=4,h=x?-4097&h:4096|h,h=g?8|h:-9&h}if(h!==c&&(Qt(n,h),2&h&&Object.freeze(n)),l&&!(8&h||!n.length&&(r===1||r===4&&(2&h||!(16&h)&&32&t)))){for(Os(h)&&(n=si(n),h=ks(h,t),t=$t(e,t,s,n)),i=n,l=h,c=0;c<i.length;c++)(d=i[c])!==(h=Uf(d))&&(i[c]=h);l|=8,Qt(n,h=l=i.length?4096|l:-4097&l)}return Ox(n,h,e,t,s,r,o,a)}function hs(n,e,t){var i=n.A;return Gx(n,i,0|i[Ee],e,t,fr(),!1,!0)}function Wx(n){return n==null&&(n=void 0),n}function Ue(n,e,t,i,s){return Ge(n,t,i=Wx(i),s),i&&!Dn(i)&&Gs(n.A),n}function Vi(n,e,t,i){e:{var s=i=Wx(i);Ar(n);let r=n.A,a=0|r[Ee];if(s==null){let o=zf(r);if(Vf(o,r,a,t)!==e)break e;o.set(t,0)}else a=Vx(r,a,t,e);$t(r,a,e,s)}return i&&!Dn(i)&&Gs(n.A),n}function lf(n,e,t){Ar(n);var i=n.A,s=0|i[Ee];if(t==null)return $t(i,s,e),n;var r=t===Hs?7:0|t[Ee],a=r,o=Os(r),l=o||Object.isFrozen(t),c=!0,h=!0;for(let u=0;u<t.length;u++){var d=t[u];o||(d=Dn(d),c&&=!d,h&&=d)}return o||(r=c?13:5,r=h?-4097&r:4096|r),l&&r===a||(t=si(t),a=0,r=ks(r,s)),r!==a&&Qt(t,r),s=$t(i,s,e,t),2&r||!(4096&r||16&r)||Gs(i,s),n}function ks(n,e){return-273&(2&e?2|n:-3&n)}function Ro(n,e,t,i){var s=i;Ar(n),n=Gx(n,i=n.A,0|i[Ee],t,e,2,!0),s=s??new t,n.push(s),e=t=n===Hs?7:0|n[Ee],(s=Dn(s))?(t&=-9,n.length===1&&(t&=-4097)):t|=4096,t!==e&&Qt(n,t),s||Gs(i)}function ii(n,e,t){return Er(zt(n,e,t))}function Xt(n,e){return zt(n,e,void 0,mi)??0}function e0(n,e,t){return ut(n,e,t=zx(n,op)===t?t:-1,void 0)}function cf(n,e){Uo(n,3,e==null?e:yh(e),!1)}function Hi(n,e,t){if(t!=null){if(typeof t!="number"||!Fo(t))throw Ao("int32");t|=0}Ge(n,e,t)}function qd(n,e,t){return Ge(n,e,t==null?t:wx(t))}function uh(n,e,t){return Ge(n,e,t==null?t:(function(i){if(!Ma(i))throw Ao("uint64");switch(typeof i){case"string":var s=zs(Number(i));return zi(s)&&s>=0?i=Jt(s):((s=i.indexOf("."))!==-1&&(i=i.substring(0,s)),i=Sr()?Jt(af(64,BigInt(i))):Jt(Ax(i))),i;case"bigint":return Jt(af(64,i));default:return zi(i)?i=Jt(Tx(i)):((i=zs(i))>=0&&zi(i)?i=String(i):(wr(i),i=fa(lt,xt)),i=Jt(i)),i}})(t))}function Fe(n,e,t){Ge(n,e,t==null?t:Mx(t))}function aa(n,e,t){Uo(n,e,t==null?t:Mx(t),0)}function $n(n,e,t){Uo(n,e,rs(t),"")}function Sh(n,e,t){{Ar(n);let a=n.A,o=0|a[Ee];if(t==null)$t(a,o,e);else{var i=n=t===Hs?7:0|t[Ee],s=Os(n),r=s||Object.isFrozen(t);for(s||(n=0),r||(t=si(t),i=0,n=ks(n,o),r=!1),n|=5,n|=(4&n?512&n?512:1024&n?1024:0:void 0)??1024,s=0;s<t.length;s++){let l=t[s],c=Lx(l);Object.is(l,c)||(r&&(t=si(t),i=0,n=ks(n,o),r=!1),t[s]=c)}n!==i&&(r&&(t=si(t),n=ks(n,o)),Qt(t,n)),$t(a,o,e,t)}}}function Gh(n,e,t){Ar(n),pr(n,e,fn,2,!0).push(Lx(t))}var sa=class{constructor(n,e,t){if(this.buffer=n,t&&!e)throw Error();this.g=e}};function Wh(n,e){if(typeof n=="string")return new sa(dx(n),e);if(Array.isArray(n))return new sa(new Uint8Array(n),e);if(n.constructor===Uint8Array)return new sa(n,!1);if(n.constructor===ArrayBuffer)return n=new Uint8Array(n),new sa(n,!1);if(n.constructor===Bi)return e=Rf(n)||new Uint8Array(0),new sa(e,!0,n);if(n instanceof Uint8Array)return n=n.constructor===Uint8Array?n:new Uint8Array(n.buffer,n.byteOffset,n.byteLength),new sa(n,!1);throw Error()}function Gf(n,e){var t=0,i=0,s=0,r=n.h,a=n.g;do{var o=r[a++];t|=(127&o)<<s,s+=7}while(s<32&&128&o);if(s>32)for(i|=(127&o)>>4,s=3;s<32&&128&o;s+=7)i|=(127&(o=r[a++]))<<s;if(vr(n,a),!(128&o))return e(t>>>0,i>>>0);throw Error()}function Wf(n){for(var e=0,t=n.g,i=t+10,s=n.h;t<i;){let r=s[t++];if(e|=r,!(128&r))return vr(n,t),!!(127&e)}throw Error()}function us(n){var e=n.h,t=n.g,i=e[t++],s=127&i;if(128&i&&(s|=(127&(i=e[t++]))<<7,128&i&&(s|=(127&(i=e[t++]))<<14,128&i&&(s|=(127&(i=e[t++]))<<21,128&i&&(s|=(i=e[t++])<<28,128&i&&128&e[t++]&&128&e[t++]&&128&e[t++]&&128&e[t++]&&128&e[t++])))))throw Error();return vr(n,t),s}function Gi(n){return us(n)>>>0}function wh(n){return Gf(n,bx)}function hf(n){var e=n.h,t=n.g,i=e[t],s=e[t+1],r=e[t+2];return e=e[t+3],vr(n,n.g+4),(i|s<<8|r<<16|e<<24)>>>0}function Eh(n){var e=hf(n);n=2*(e>>31)+1;var t=e>>>23&255;return e&=8388607,t==255?e?NaN:n*(1/0):t==0?1401298464324817e-60*n*e:n*Math.pow(2,t-150)*(e+8388608)}function uw(n){return us(n)}function vr(n,e){if(n.g=e,e>n.j)throw Error()}function Xx(n,e){if(e<0)throw Error();var t=n.g;if((e=t+e)>n.j)throw Error();return n.g=e,t}function $x(n,e){if(e==0)return br();var t=Xx(n,e);return n.fa&&n.o?t=n.h.subarray(t,t+e):(n=n.h,t=t===(e=t+e)?new Uint8Array(0):$S?n.slice(t,e):new Uint8Array(n.subarray(t,e))),t.length==0?br():new Bi(t,ca)}var dw=class{constructor(n,e,t,i){this.h=null,this.o=!1,this.g=this.j=this.m=0,this.init(n,e,t,i)}init(n,e,t,{fa:i=!1,ma:s=!1}={}){this.fa=i,this.ma=s,n&&(n=Wh(n,this.ma),this.h=n.buffer,this.o=n.g,this.m=e||0,this.j=t!==void 0?this.m+t:this.h.length,this.g=this.m)}clear(){this.h=null,this.o=!1,this.g=this.j=this.m=0,this.fa=!1}},t0=[],pa=0;function qx(n,e,t,i){if(Ah.length){let s=Ah.pop();return s.v(i),s.g.init(n,e,t,i),s}return new fw(n,e,t,i)}function Yx(n){n.g.clear(),n.j=-1,n.h=-1,Ah.length<100&&Ah.push(n)}function Kx(n){var e=n.g;if(e.g==e.j)return!1;n.m=n.g.g;var t=Gi(n.g);if(e=t>>>3,!((t&=7)>=0&&t<=5)||e<1)throw Error();return n.j=e,n.h=t,!0}function dh(n){try{switch(n.h){case 0:n.h!=0?dh(n):Wf(n.g);break;case 1:var e=n.g;vr(e,e.g+8);break;case 2:if(n.h!=2)dh(n);else{var t=Gi(n.g),i=n.g;vr(i,i.g+t)}break;case 5:var s=n.g;vr(s,s.g+4);break;case 3:Zx();let r=n.j;try{for(;;){if(!Kx(n))throw Error();if(n.h==4){if(n.j!=r)throw Error();break}dh(n)}}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{pa>0&&pa--}break;default:throw Error()}}catch(r){throw r instanceof RangeError?new SyntaxError:r}}function Zx(){if(pa>=100)throw new SyntaxError;pa++}function Oo(n,e,t){var i=n.g.j,s=Gi(n.g),r=(s=n.g.g+s)-i;if(r<=0&&(n.g.j=s,t(e,n,void 0,void 0,void 0),r=s-n.g.g),r)throw Error();return n.g.g=s,n.g.j=i,e}function Xf(n){var e=Gi(n.g),t=Xx(n=n.g,e);if(n=n.h,AS){var i,s=n;(i=Xd)||(i=Xd=new TextDecoder("utf-8",{fatal:!0})),e=t+e,s=t===0&&e===s.length?s:s.subarray(t,e);try{var r=i.decode(s)}catch(o){if(sh===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),sh=!0}catch{sh=!1}}throw!sh&&(Xd=void 0),o}}else{e=(r=t)+e,t=[];let o,l=null;for(;r<e;){var a=n[r++];a<128?t.push(a):a<224?r>=e?ur():(o=n[r++],a<194||(192&o)!=128?(r--,ur()):t.push((31&a)<<6|63&o)):a<240?r>=e-1?ur():(o=n[r++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=n[r++]))!=128?(r--,ur()):t.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?r>=e-2?ur():(o=n[r++],(192&o)!=128||o-144+(a<<28)>>30||(192&(i=n[r++]))!=128||(192&(s=n[r++]))!=128?(r--,ur()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&s,a-=65536,t.push(55296+(a>>10&1023),56320+(1023&a)))):ur(),t.length>=8192&&(l=Bg(l,t),t.length=0)}r=Bg(l,t)}return r}function $f(n){var e=Gi(n.g);return $x(n.g,e)}function ko(n,e,t){var i=Gi(n.g);for(i=n.g.g+i;n.g.g<i;)t.push(e(n.g))}var fw=class{constructor(n,e,t,i){if(t0.length){let s=t0.pop();s.init(n,e,t,i),n=s}else n=new dw(n,e,t,i);this.g=n,this.m=this.g.g,this.h=this.j=-1,this.v(i)}v({ra:n=!1}={}){this.ra=n}},Ah=[];function pw(n){return new Th(4294967295&n,Math.floor(n/4294967296))}function n0(n){return n?/^\d+$/.test(n)?(Do(n),new Th(lt,xt)):null:mw||=new Th(0,0)}var mw,Th=class{constructor(n,e){this.h=n>>>0,this.g=e>>>0}};function gw(n){return new Ch(4294967295&n,Math.floor(n/4294967296))}function jx(n){return n?/^-?\d+$/.test(n)?(Do(n),new Ch(lt,xt)):null:xw||=new Ch(0,0)}var xw,i0,s0,r0,Yd,a0,vo,rh,Ch=class{constructor(n,e){this.h=n>>>0,this.g=e>>>0}};function Jx(n,e,t){return typeof BigInt64Array<"u"?(vo||(vo=new BigInt64Array(1),rh=new Uint32Array(vo.buffer),vo[0]=BigInt(1),a0=rh[0]===1),vo[0]=n,new e(rh[n=a0?0:1],rh[1-n])):(Yd||(i0=BigInt(Number.MIN_SAFE_INTEGER),s0=BigInt(Number.MAX_SAFE_INTEGER),r0=BigInt(4294967295),Yd=BigInt(32)),n>=i0&&n<=s0?t(Number(n)):(n=BigInt.asUintN(64,n),new e(Number(n&r0),Number(n>>Yd))))}function os(n,e,t){for(;t>0||e>127;)n.g.push(127&e|128),e=(e>>>7|t<<25)>>>0,t>>>=7;n.g.push(e)}function Ea(n,e){for(;e>127;)n.g.push(127&e|128),e>>>=7;n.g.push(e)}function Bo(n,e){if(e>=0)Ea(n,e);else{for(let t=0;t<9;t++)n.g.push(127&e|128),e>>=7;n.g.push(1)}}function vw(n,e){Do(e),(function(t){var i=xt>>31;t(lt<<1^i,(xt<<1|lt>>>31)^i)})((t,i)=>{os(n,t>>>0,i>>>0)})}function Io(n,e){n.g.push(e>>>0&255),n.g.push(e>>>8&255),n.g.push(e>>>16&255),n.g.push(e>>>24&255)}var yw=class{constructor(){this.g=[]}length(){return this.g.length}end(){var n=this.g;return this.g=[],n}};function ma(n,e){e.length!==0&&(n.j.push(e),n.h+=e.length)}function wn(n,e,t){Ea(n.g,8*e+t)}function qf(n,e){return wn(n,e,2),e=n.g.end(),ma(n,e),e.push(n.h),e}function Yf(n,e){var t=e.pop();for(t=n.h+n.g.length()-t;t>127;)e.push(127&t|128),t>>>=7,n.h++;e.push(t),n.h++}function Qx(n,e,t){if(t!=null)switch(wn(n,e,0),typeof t){case"number":n=n.g,wr(t),os(n,lt,xt);break;case"bigint":t=Jx(t,Ch,gw),os(n.g,t.h,t.g);break;default:t=jx(t),os(n.g,t.h,t.g)}}function zo(n,e,t){wn(n,e,2),Ea(n.g,t.length),ma(n,n.g.end()),ma(n,t)}function Rh(n,e,t,i){t!=null&&(e=qf(n,e),i(t,n),Yf(n,e))}var _w=class{constructor(){this.j=[],this.h=0,this.g=new yw}};function ev(n){typeof n=="string"&&jx(n)}function ri(){var n=class{constructor(){throw Error()}};return Object.setPrototypeOf(n,n.prototype),n}var Kf=ri(),tv=ri(),Zf=ri(),Xh=ri(),jf=ri(),$h=ri(),bw=ri(),Mw=ri(),qh=ri(),Sw=ri(),Yh=ri(),Jf=ri();function Xi(n,e,t){var i=n.A;Xn&&Xn in i&&(i=i[Xn])&&delete i[e.g],e.h?e.o(n,e.h,e.g,t,e.j):e.o(n,e.g,t,e.j)}var xe=class{constructor(n,e){this.A=Dx(n,e,void 0,2048)}toJSON(){return Nx(this)}o(){var n=l3,e=this.A,t=n.g,i=Xn;if(_a&&i&&e[i]?.[t]!=null&&ha(US,3),e=n.g,Xg&&Xn&&Xg===void 0&&(i=(t=this.A)[Xn])&&(i=i.ka))try{i(t,e,ow)}catch(s){lx(s)}return n.h?n.m(this,n.h,n.g,n.j):n.m(this,n.g,n.defaultValue,n.j)}clone(){var n=this.A,e=0|n[Ee];return Of(this,n,e)?Ff(this,n,!0):new this.constructor(Sa(n,e,!1))}};xe.prototype[ua]=da,xe.prototype.toString=function(){return this.A.toString()};var Aa=class{constructor(n,e,t){this.g=n,this.h=e,n=Kf,this.j=!!n&&t===n||!1}};function Kh(n,e){return new Aa(n,e,Kf)}function nv(n,e,t,i,s){Rh(n,t,av(e,i),s)}var iv,sv,ww=Kh(function(n,e,t,i,s){return n.h===2&&(Oo(n,Hf(e,i,t),s),!0)},nv),Ew=Kh(function(n,e,t,i,s){return n.h===2&&(Oo(n,Hf(e,i,t),s),!0)},nv),Zh=Symbol(),jh=Symbol(),uf=Symbol(),o0=Symbol(),l0=Symbol();function Tr(n,e,t,i){var s=i[n];if(s)return s;(s={}).Ea=i,s.ca=(function(d){switch(typeof d){case"boolean":return rw||=[0,void 0,!0];case"number":return d>0?void 0:d===0?aw||=[0,void 0]:[-d,void 0];case"string":return[0,d];case"object":return d}})(i[0]);var r=i[1],a=1;r&&r.constructor===Object&&(s.ia=r,typeof(r=i[++a])=="function"&&(s.wa=!0,iv??=r,sv??=i[a+1],r=i[a+=2]));for(var o={};r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var l=0;l<r.length;l++)o[r[l]]=r;r=i[++a]}for(l=1;r!==void 0;){let d;typeof r=="number"&&(l+=r,r=i[++a]);var c=void 0;if(r instanceof Aa?d=r:(d=ww,a--),d?.j){r=i[++a],c=i;var h=a;typeof r=="function"&&(r=r(),c[h]=r),c=r}for(h=l+1,typeof(r=i[++a])=="number"&&r<0&&(h-=r,r=i[++a]);l<h;l++){let u=o[l];c?t(s,l,d,c,u):e(s,l,d,u)}}return i[n]=s}function rv(n){return Array.isArray(n)?n[0]instanceof Aa?n:[Ew,n]:[n,void 0]}function av(n,e){return n instanceof xe?n.A:Array.isArray(n)?xr(n,e):void 0}function Qf(n,e,t,i){var s=t.g;n[e]=i?(r,a,o)=>s(r,a,o,i):s}function ep(n,e,t,i,s){var r,a,o=t.g;n[e]=(l,c,h)=>o(l,c,h,a||=Tr(jh,Qf,ep,i).ca,r||=tp(i),s)}function tp(n){var e=n[uf];if(e!=null)return e;var t=Tr(jh,Qf,ep,n);return e=t.wa?(i,s)=>iv(i,s,t):(i,s)=>{e:{Zx();try{for(;Kx(s)&&s.h!=4;){let u=s.j,f=t[u];if(f==null){let g=t.ia;if(g){let x=g[u];if(x){let p=Tw(x);p!=null&&(f=t[u]=p)}}}if(f==null||!f(s,i,u)){var r=s;let g=r.m;if(dh(r),r.ra)var a=void 0;else{let x=r.g.g-g;r.g.g=g,a=$x(r.g,x)}r=void 0;var o=i,l=u,c=a;c&&((r=o[Xn]??(o[Xn]=new of))[l]??(r[l]=[])).push(c)}}let d=Vh(i);d&&(d.ka=t.Ea[l0]);var h=!0;break e}catch(d){throw d instanceof RangeError?new SyntaxError:d}finally{pa>0&&pa--}h=void 0}return h},n[uf]=e,n[l0]=Aw.bind(n),e}function Aw(n,e,t,i){var s=this[jh],r=this[uf],a=xr(void 0,s.ca),o=Vh(n);if(o){var l=!1,c=s.ia;if(c){if(s=(h,d,u)=>{if(u.length!==0)if(c[d])for(let f of u){h=qx(f);try{l=!0,r(a,h)}finally{Yx(h)}}else i?.(n,d,u)},e==null)Mh(o,s);else if(o!=null){let h=o[e];h&&s(o,e,h)}if(l){let h=0|n[Ee];if(2&h&&2048&h&&!t?.cb)throw Error();let d=ba(h),u=(f,g)=>{if(cs(n,f,d)!=null){if(t?.lb===1)return;throw Error()}g!=null&&(h=$t(n,h,f,g,d)),delete o[f]};e==null?xx(a,0|a[Ee],(f,g)=>{u(f,g)}):u(e,cs(a,e,d))}}}}function Tw(n){var e=(n=rv(n))[0].g;if(n=n[1]){let t=tp(n),i=Tr(jh,Qf,ep,n).ca;return(s,r,a)=>e(s,r,a,i,t)}return e}function Jh(n,e,t){n[e]=t.h}function Qh(n,e,t,i){var s,r,a=t.h;n[e]=(o,l,c)=>a(o,l,c,r||=Tr(Zh,Jh,Qh,i).ca,s||=ov(i))}function ov(n){var e=n[o0];if(!e){let t=Tr(Zh,Jh,Qh,n);e=(i,s)=>lv(i,s,t),n[o0]=e}return e}function lv(n,e,t){xx(n,0|n[Ee],(i,s)=>{if(s!=null){var r=(function(a,o){var l=a[o];if(l)return l;if((l=a.ia)&&(l=l[o])){var c=(l=rv(l))[0].h;if(l=l[1]){let h=ov(l),d=Tr(Zh,Jh,Qh,l).ca;l=a.wa?sv(d,h):(u,f,g)=>c(u,f,g,d,h)}else l=c;return a[o]=l}})(t,i);r?r(e,s,i):i<500||ha(nf,3)}}),(n=Vh(n))&&Mh(n,(i,s,r)=>{for(ma(e,e.g.end()),i=0;i<r.length;i++)ma(e,Rf(r[i])||new Uint8Array(0))})}var Cw=Jt(0);function ds(n,e,t){if(Array.isArray(e)){var i=0|e[Ee];if(4&i)return e;for(var s=0,r=0;s<e.length;s++){let a=n(e[s]);a!=null&&(e[r++]=a)}return r<s&&(e.length=r),n=1|i,t&&(n=-1537&n|4),n!==i&&Qt(e,n),t&&2&n&&Object.freeze(e),e}}var cv=(n,e)=>{var t=new _w;lv(n.A,t,Tr(Zh,Jh,Qh,e)),ma(t,t.g.end()),n=new Uint8Array(t.h);var i=(e=t.j).length,s=0;for(let r=0;r<i;r++){let a=e[r];n.set(a,s),s+=a.length}return t.j=[n],n};function Yt(n,e,t){return new Aa(n,e,t)}function fs(n,e,t){return new Aa(n,e,t)}function an(n,e,t){$t(n,0|n[Ee],e,t,ba(0|n[Ee]))}var Rw=Kh(function(n,e,t,i,s){if(n.h!==2)return!1;if(n=si(n=Oo(n,xr([void 0,void 0],i),s)),s=ba(i=0|e[Ee]),2&i)throw Error();var r=cs(e,t,s);if(r instanceof ls)2&r.M?((r=r.ea()).push(n),$t(e,i,t,r,s)):r.gb(n);else if(Array.isArray(r)){var a=0|r[Ee];8192&a||Qt(r,a|=8192),2&a&&$t(e,i,t,r=Bx(r),s),r.push(n)}else $t(e,i,t,To([n]),s);return!0},function(n,e,t,i,s){if(e instanceof ls)e.forEach((r,a)=>{Rh(n,t,xr([a,r],i),s)});else if(Array.isArray(e)){for(let r=0;r<e.length;r++){let a=e[r];Array.isArray(a)&&Rh(n,t,xr(a,i),s)}To(e)}});function hv(n,e,t){(e=mi(e))!=null&&(wn(n,t,5),n=n.g,If(e),Io(n,lt))}function np(n,e,t){(e=Nf(e))!=null&&(ev(e),Qx(n,t,e))}function uv(n,e,t){(e=Er(e))!=null&&e!=null&&(wn(n,t,0),Bo(n.g,e))}function dv(n,e,t){(e=e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0)!=null&&(wn(n,t,0),n.g.g.push(e?1:0))}function fv(n,e,t){(e=fn(e))!=null&&zo(n,t,ox(e))}function pv(n,e,t,i,s){Rh(n,t,av(e,i),s)}function ip(n,e,t){(e=Px(e))!=null&&zo(n,t,Wh(e,!0).buffer)}function mv(n,e,t){(e=Sx(e))!=null&&e!=null&&(wn(n,t,0),Ea(n.g,e))}function gv(n,e,t){(e=Er(e))!=null&&(e=parseInt(e,10),wn(n,t,0),Bo(n.g,e))}function xv(n,e,t){return(n.h===5||n.h===2)&&(e=Ws(e,0|e[Ee],t),n.h==2?ko(n,Eh,e):e.push(Eh(n.g)),!0)}function vv(n,e,t){return n.h===0&&(an(e,t,wh(n.g)),!0)}function yv(n,e,t){return(n.h===0||n.h===2)&&(e=Ws(e,0|e[Ee],t),n.h==2?ko(n,us,e):e.push(us(n.g)),!0)}function _v(n,e,t){return n.h===2&&(an(e,t,(n=$f(n))===br()?void 0:n),!0)}var c0=Yt(function(n,e,t){if(n.h!==1)return!1;var i=n.g;n=hf(i);var s=hf(i);i=2*(s>>31)+1;var r=s>>>20&2047;return n=4294967296*(1048575&s)+n,an(e,t,r==2047?n?NaN:i*(1/0):r==0?5e-324*i*n:i*Math.pow(2,r-1075)*(n+4503599627370496)),!0},function(n,e,t){(e=mi(e))!=null&&(wn(n,t,1),n=n.g,(t=yx||=new DataView(new ArrayBuffer(8))).setFloat64(0,+e,!0),lt=t.getUint32(0,!0),xt=t.getUint32(4,!0),Io(n,lt),Io(n,xt))},Sw),Vt=Yt(function(n,e,t){return n.h===5&&(an(e,t,Eh(n.g)),!0)},hv,qh),Iw=fs(xv,function(n,e,t){if((e=ds(mi,e,!0))!=null)for(let a=0;a<e.length;a++){var i=n,s=t,r=e[a];r!=null&&(wn(i,s,5),i=i.g,If(r),Io(i,lt))}},qh),sp=fs(xv,function(n,e,t){if((e=ds(mi,e,!0))!=null&&e.length){wn(n,t,2),Ea(n.g,4*e.length);for(let i=0;i<e.length;i++)t=n.g,If(e[i]),Io(t,lt)}},qh),bv=Yt(function(n,e,t){return n.h===5&&(an(e,t,(n=Eh(n.g))===0?void 0:n),!0)},hv,qh),yo=Yt(function(n,e,t){return vv(n,e,t)},np,$h),Rt=Yt(function(n,e,t){return vv(n,e,t)},np,$h),Pw=fs(function(n,e,t){return n.h!==0&&n.h!==2?n=!1:(e=Ws(e,0|e[Ee],t),n.h==2?ko(n,wh,e):e.push(wh(n.g)),n=!0),n},function(n,e,t){if((e=ds(Nf,e,!1))!=null)for(let i=0;i<e.length;i++)Qx(n,t,e[i])},$h),fh=Yt(function(n,e,t){return n.h!==0?e=!1:(an(e,t,(n=wh(n.g))===Cw?void 0:n),e=!0),e},np,$h),Ih=Yt(function(n,e,t){return n.h!==0?n=!1:(an(e,t,Gf(n.g,qS)),n=!0),n},function(n,e,t){if(e=(function(i){if(i==null)return i;var s=typeof i;if(s==="bigint")return String(af(64,i));if(Ma(i)){if(s==="string")return s=zs(Number(i)),zi(s)&&s>=0?i=String(s):((s=i.indexOf("."))!==-1&&(i=i.substring(0,s)),i=Ax(i)),i;if(s==="number")return Tx(i)}})(e),e!=null&&(typeof e=="string"&&n0(e),e!=null))switch(wn(n,t,0),typeof e){case"number":n=n.g,wr(e),os(n,lt,xt);break;case"bigint":t=Jx(e,Th,pw),os(n.g,t.h,t.g);break;default:t=n0(e),os(n.g,t.h,t.g)}},bw),rt=Yt(function(n,e,t){return n.h===0&&(an(e,t,us(n.g)),!0)},uv,Xh),h0=fs(yv,function(n,e,t){if((e=ds(Er,e,!0))!=null)for(let a=0;a<e.length;a++){var i=n,s=t,r=e[a];r!=null&&(wn(i,s,0),Bo(i.g,r))}},Xh),Ta=fs(yv,function(n,e,t){if((e=ds(Er,e,!0))!=null&&e.length){t=qf(n,t);for(let i=0;i<e.length;i++)Bo(n.g,e[i]);Yf(n,t)}},Xh),mr=Yt(function(n,e,t){return n.h===0&&(an(e,t,(n=us(n.g))===0?void 0:n),!0)},uv,Xh),Ye=Yt(function(n,e,t){return n.h===0&&(an(e,t,Wf(n.g)),!0)},dv,tv),Bs=Yt(function(n,e,t){return n.h===0&&(an(e,t,(n=Wf(n.g))===!1?void 0:n),!0)},dv,tv),dn=fs(function(n,e,t){return n.h===2&&(n=Xf(n),Ws(e,0|e[Ee],t).push(n),!0)},function(n,e,t){if((e=ds(fn,e,!0))!=null)for(let a=0;a<e.length;a++){var i=n,s=t,r=e[a];r!=null&&zo(i,s,ox(r))}},Zf),is=Yt(function(n,e,t){return n.h===2&&(an(e,t,(n=Xf(n))===""?void 0:n),!0)},fv,Zf),ae=Yt(function(n,e,t){return n.h===2&&(an(e,t,Xf(n)),!0)},fv,Zf),At=(function(n,e,t=Kf){return new Aa(n,e,t)})(function(n,e,t,i,s){return n.h===2&&(i=xr(void 0,i),Ws(e,0|e[Ee],t).push(i),Oo(n,i,s),!0)},function(n,e,t,i,s){if(Array.isArray(e)){for(let r=0;r<e.length;r++)pv(n,e[r],t,i,s);1&(n=0|e[Ee])||Qt(e,1|n)}}),it=Kh(function(n,e,t,i,s,r){if(n.h!==2)return!1;var a=0|e[Ee];return Vx(e,a,r,t,ba(a)),Oo(n,e=Hf(e,i,t),s),!0},pv),oa=Yt(function(n,e,t){return n.h===2&&(an(e,t,$f(n)),!0)},ip,Yh),Mv=fs(function(n,e,t){return n.h===2&&(n=$f(n),Ws(e,0|e[Ee],t).push(n),!0)},function(n,e,t){if((e=ds(Px,e,!1))!=null)for(let a=0;a<e.length;a++){var i=n,s=t,r=e[a];r!=null&&zo(i,s,Wh(r,!0).buffer)}},Yh),Sv=Yt(function(n,e,t){return n.h===0&&(an(e,t,Gi(n.g)),!0)},mv,jf),Lw=fs(function(n,e,t){return(n.h===0||n.h===2)&&(e=Ws(e,0|e[Ee],t),n.h==2?ko(n,Gi,e):e.push(Gi(n.g)),!0)},function(n,e,t){if((e=ds(Sx,e,!0))!=null)for(let a=0;a<e.length;a++){var i=n,s=t,r=e[a];r!=null&&(wn(i,s,0),Ea(i.g,r))}},jf),Nw=Yt(function(n,e,t){return n.h===0&&(an(e,t,(n=Gi(n.g))===0?void 0:n),!0)},mv,jf),Te=Yt(function(n,e,t){return n.h===0&&(an(e,t,us(n.g)),!0)},gv,Jf),ph=Yt(function(n,e,t){return n.h===0&&(an(e,t,(n=us(n.g))===0?void 0:n),!0)},gv,Jf),Dw=Yt(function(n,e,t){return n.h!==0?n=!1:(an(e,t,(function(i){return Gf(i,(s,r)=>{var a=-(1&s);return bx(s=(s>>>1|r<<31)^a,r>>>1^a)})})(n.g)),n=!0),n},function(n,e,t){if((e=Nf(e))!=null&&(ev(e),e!=null))switch(wn(n,t,0),typeof e){case"number":n=n.g,e=(t=e)<0,rf(t=2*Math.abs(t)),t=lt;let i=xt;e&&(t==0?i==0?i=t=4294967295:(i--,t=4294967295):t--),os(n,lt=t,xt=i);break;case"bigint":n=n.g,e=e<<BigInt(1)^e>>BigInt(63),lt=Number(BigInt.asUintN(32,e)),xt=Number(BigInt.asUintN(32,e>>BigInt(32))),os(n,lt,xt);break;default:vw(n.g,e)}},Mw),df=class{constructor(e,t){var i=Yn;this.g=e,this.h=t,this.m=ut,this.o=Ue,this.defaultValue=void 0,this.j=i.jb!=null?vx:void 0}register(){Uh(this)}};function $i(n,e){return new df(n,e)}function Xs(n,e){return(t,i)=>{e:{let r={ma:!0};i&&Object.assign(r,i),t=qx(t,void 0,void 0,r);try{let a=new n,o=a.A;tp(e)(o,t);var s=a;break e}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{Yx(t)}s=void 0}return s}}function rp(n){return e=>cv(e,n)}function Vo(n){return function(){return cv(this,n)}}var Fw=[0,oa,Mv,Ye,ae],Uw=[0,is,[0,ph,[0,fh,mr],ph,-1,[0,Te],ph,-1],Yt(_v,ip,Yh)],Kd,u0=class extends xe{constructor(n){super(n)}},d0=[0,is,Yt(_v,function(n,e,t){if(e!=null){if(e instanceof xe){let i=e.mb;return void(i?(e=i(e),e!=null&&zo(n,t,Wh(e,!0).buffer)):ha(nf,3))}if(Array.isArray(e))return void ha(nf,3)}ip(n,e,t)},Yh)],Ow=[0,1,[0,12,rt,10,Ye],[0,7,[0,rt,-1]]],f0=globalThis.trustedTypes,kw=class{constructor(n){this.g=n}toString(){return this.g+""}};function p0(n){var e;return Kd===void 0&&(Kd=(function(){var t=null;if(!f0)return t;try{let i=s=>s;t=f0.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return t})()),n=(e=Kd)?e.createScriptURL(n):n,new kw(n)}function ah(n,...e){if(e.length===0)return p0(n[0]);var t=n[0];for(let i=0;i<e.length;i++)t+=encodeURIComponent(e[i])+n[i+1];return p0(t)}var wv=[0,rt,Te,Ye,-1,Ta,Te,-1,Ye,-1],Ev=[0,Te,-1,Ye],ap=class extends xe{constructor(n){super(n)}},Av=[0,Ye,ae,Ye,Te,-1,fs(function(n,e,t){return(n.h===0||n.h===2)&&(e=Ws(e,0|e[Ee],t),n.h==2?ko(n,uw,e):e.push(us(n.g)),!0)},function(n,e,t){if((e=ds(Er,e,!0))!=null&&e.length){t=qf(n,t);for(let i=0;i<e.length;i++)Bo(n.g,e[i]);Yf(n,t)}},Jf),ae,-1,[0,Ye,-1],Te,Ye,-1,Ev],Tv=[0,3,Ye,-1,2,[0,[2],rt,it,[0,Sv]],[0,Te,Ye,Te,Ye,Te,4,[0,Ye,ae,-1,Ye]],[0,[3,4],ae,-1,it,[0,rt],it,[0,Te,-1]],[0]],Cv=[0,ae,-2],m0=class extends xe{constructor(n){super(n)}},Rv=[0],Bw=class extends xe{constructor(n){super(n)}},Iv=[0,rt,Ye,1,Ye,-4],Yn=class extends xe{constructor(n){super(n,2)}},rn={};rn[336783863]=[0,ae,Ye,-1,rt,[0,[1,2,3,4,5,6,7,8,9],it,Rv,it,Av,it,Cv,it,Iv,it,wv,it,[0,ae,-2],it,[0,ae,Te],it,Tv,it,Ev],[0,ae],Ye,[0,[1,3],[2,4],it,[0,Ta],-1,it,[0,dn],-1,At,[0,ae,-1]],ae];var g0=[0,fh,-1,Bs,-3,fh,Ta,is,mr,fh,-1,Bs,mr,Bs,-2,is];function Pt(n,e){Gh(n,3,e)}function at(n,e){Gh(n,4,e)}var Fn=class extends xe{constructor(n){super(n,500)}v(n){return Ue(this,0,7,n)}},wo=[-1,{}],x0=[0,ae,1,wo],v0=[0,ae,dn,wo];function ai(n,e){Ro(n,1,Fn,e)}function Dt(n,e){Gh(n,10,e)}function pt(n,e){Gh(n,15,e)}var Kn=class extends xe{constructor(n){super(n,500)}v(n){return Ue(this,0,1001,n)}},Pv=[-500,At,[-500,is,-1,dn,-3,[-2,rn,Ye],At,d0,mr,-1,x0,v0,At,[0,is,Bs],is,g0,mr,dn,987,dn],4,At,[-500,ae,-1,[-1,{}],998,ae],At,[-500,ae,dn,-1,[-2,{},Ye],997,dn,-1],mr,At,[-500,ae,dn,wo,998,dn],dn,mr,x0,v0,At,[0,is,-1,wo],dn,-2,g0,is,-1,Bs,[0,Bs,Nw],978,wo,At,d0];Kn.prototype.g=Vo(Pv);var zw=Xs(Kn,Pv),Vw=class extends xe{constructor(n){super(n)}},Lv=class extends xe{constructor(n){super(n)}g(){return hs(this,Vw,1)}},Nv=[0,At,[0,rt,Vt,ae,-1]],eu=Xs(Lv,Nv),Hw=class extends xe{constructor(n){super(n)}},Gw=class extends xe{constructor(n){super(n)}},Zd=class extends xe{constructor(n){super(n)}j(){return ut(this,Hw,2)}g(){return hs(this,Gw,5)}},Dv=Xs(class extends xe{constructor(n){super(n)}},[0,dn,Ta,sp,[0,Te,[0,rt,-3],[0,Vt,-3],[0,rt,-1,[0,At,[0,rt,-2]]],At,[0,Vt,-1,ae,Vt]],ae,-1,Rt,At,[0,rt,Vt],dn,Rt]),Fv=class extends xe{constructor(n){super(n)}},la=Xs(class extends xe{constructor(n){super(n)}},[0,At,[0,Vt,-4]]),Uv=class extends xe{constructor(n){super(n)}},Ho=Xs(class extends xe{constructor(n){super(n)}},[0,At,[0,Vt,-4]]),Ww=class extends xe{constructor(n){super(n)}},Xw=[0,rt,-1,sp,Te],Ov=class extends xe{constructor(n){super(n)}};Ov.prototype.g=Vo([0,Vt,-4,Rt]);var $w=class extends xe{constructor(n){super(n)}},qw=Xs(class extends xe{constructor(n){super(n)}},[0,At,[0,1,rt,ae,Nv],Rt]),y0=class extends xe{constructor(n){super(n)}},Yw=class extends xe{constructor(n){super(n)}g(){var n=zt(this,1,void 0,kx);return n??br()}},Kw=class extends xe{constructor(n){super(n)}},op=[1,2],Zw=Xs(class extends xe{constructor(n){super(n)}},[0,At,[0,op,it,[0,sp],it,[0,oa],rt,ae],Rt]),lp=class extends xe{constructor(n){super(n)}},kv=[0,ae,rt,Vt,dn,-1],_0=class extends xe{constructor(n){super(n)}},jw=[0,Ye,-1],Ph=class extends xe{constructor(n){super(n)}g(){return Ux(this,ap,2,yr)}},yr=[1,2,3,4,5,6],Lh=class extends xe{constructor(n){super(n)}g(){return zt(this,1,void 0,kx)!=null}j(){return fn(zt(this,2))!=null}},Ft=class extends xe{constructor(n){super(n)}},Bv=[0,oa,ae,[0,rt,Rt,-1],[0,Ih,Rt]],qt=[0,Bv,Ye,[0,yr,it,Iv,it,Av,it,wv,it,Rv,it,Cv,it,Tv],Te],Jw=rp(qt),tu=class extends xe{constructor(n){super(n)}},cp=[0,qt,Vt,-1,rt],Qw=$i(502141897,tu);rn[502141897]=cp;var e3=Xs(class extends xe{constructor(n){super(n)}},[0,[0,Te,-1,Iw,Lw],Xw]),zv=class extends xe{constructor(n){super(n)}},Vv=class extends xe{constructor(n){super(n)}},ff=[0,qt,Vt,[0,qt],Ye],t3=$i(508968150,Vv);rn[508968150]=[0,qt,cp,ff,Vt,[0,[0,Bv]]],rn[508968149]=ff;var ra=class extends xe{constructor(n){super(n)}j(){return ut(this,lp,2)}g(){Ge(this,2)}},Hv=[0,qt,kv];rn[478825465]=Hv;var n3=class extends xe{constructor(n){super(n)}},Gv=class extends xe{constructor(n){super(n)}},hp=class extends xe{constructor(n){super(n)}},up=class extends xe{constructor(n){super(n)}},Wv=class extends xe{constructor(n){super(n)}},b0=[0,qt,[0,qt],Hv,-1],Xv=[0,qt,Vt,rt],dp=[0,qt,Vt],$v=[0,qt,Xv,dp,Vt],i3=$i(479097054,Wv);rn[479097054]=[0,qt,$v,b0],rn[463370452]=b0,rn[464864288]=Xv;var s3=$i(462713202,up);rn[462713202]=$v,rn[474472470]=dp;var r3=class extends xe{constructor(n){super(n)}},qv=class extends xe{constructor(n){super(n)}},Yv=class extends xe{constructor(n){super(n)}},Kv=class extends xe{constructor(n){super(n)}},fp=[0,qt,Vt,-1,rt],pf=[0,qt,Vt,Ye];Kv.prototype.g=Vo([0,qt,dp,[0,qt],cp,ff,fp,pf]);var Zv=class extends xe{constructor(n){super(n)}},a3=$i(456383383,Zv);rn[456383383]=[0,qt,kv];var jv=class extends xe{constructor(n){super(n)}},o3=$i(476348187,jv);rn[476348187]=[0,qt,jw];var Jv=class extends xe{constructor(n){super(n)}},M0=class extends xe{constructor(n){super(n)}},Qv=[0,Te,-1],l3=$i(458105876,class extends xe{constructor(n){super(n)}g(){var n=this.A,e=0|n[Ee],t=Dn(this,e);return n=(function(i,s,r,a){var o=M0;!a&&wa(i)&&(r=0|(s=i.A)[Ee]);var l=cs(s,2);if(i=!1,l==null){if(a)return jg();l=[]}else if(l.constructor===ls){if(!(2&l.M)||a)return l;l=l.ea()}else Array.isArray(l)?i=!!(2&l[Ee]):l=[];if(a){if(!l.length)return jg();i||(i=!0,No(l))}else i&&(i=!1,To(l),l=Bx(l));return!i&&32&r&&Lo(l,32),r=$t(s,r,2,a=new ls(l,o,ZS,void 0)),i||Gs(s,r),a})(this,n,e,t),!t&&M0&&(n.Fa=!0),n}});rn[458105876]=[0,Qv,Rw,[!0,Rt,[0,ae,-1,dn]],[0,Ta,Ye,Te],Ye];var pp=class extends xe{constructor(n){super(n)}},e1=$i(458105758,pp);rn[458105758]=[0,qt,ae,Qv];var c3=class extends xe{constructor(n){super(n)}},h3=class extends xe{constructor(n){super(n)}},u3=class extends xe{constructor(n){super(n)}},d3=rp([0,At,[0,ph,At,[0,bv,-1],Bs]]),jd=class extends xe{constructor(n){super(n)}},S0=[0,bv,-1,Bs],f3=class extends xe{constructor(n){super(n)}},t1=class extends xe{constructor(n){super(n)}},mf=[1,2];t1.prototype.g=Vo([0,mf,it,S0,it,[0,At,S0]]);var n1=class extends xe{constructor(n){super(n)}},p3=$i(443442058,n1);rn[443442058]=[0,qt,ae,rt,Vt,dn,-1,Ye,Vt],rn[514774813]=fp;var i1=class extends xe{constructor(n){super(n)}},m3=$i(516587230,i1);function gf(n,e){return e=e?e.clone():new lp,n.displayNamesLocale!==void 0?Ge(e,1,rs(n.displayNamesLocale)):n.displayNamesLocale===void 0&&Ge(e,1),n.maxResults!==void 0?Hi(e,2,n.maxResults):"maxResults"in n&&Ge(e,2),n.scoreThreshold!==void 0?Fe(e,3,n.scoreThreshold):"scoreThreshold"in n&&Ge(e,3),n.categoryAllowlist!==void 0?Sh(e,4,n.categoryAllowlist):"categoryAllowlist"in n&&Ge(e,4),n.categoryDenylist!==void 0?Sh(e,5,n.categoryDenylist):"categoryDenylist"in n&&Ge(e,5),e}function s1(n){var e=Number(n);return Number.isSafeInteger(e)?e:String(n)}function mp(n,e=-1,t=""){return{categories:n.map(i=>({index:ii(i,1)??0??-1,score:Xt(i,2)??0,categoryName:fn(zt(i,3))??""??"",displayName:fn(zt(i,4))??""??""})),headIndex:e,headName:t}}function g3(n){var e={classifications:hs(n,$w,1).map(t=>mp(ut(t,Lv,4)?.g()??[],ii(t,2)??0,fn(zt(t,3))??""))};return(function(t){return t==null?t:typeof t=="bigint"?(sf(t)?t=Number(t):(t=gr(64,t),t=sf(t)?Number(t):String(t)),t):Ma(t)?typeof t=="number"?zh(t):_h(t):void 0})(zt(n,2,void 0,bh))!=null&&(e.timestampMs=s1(zt(n,2,void 0,bh)??Fx)),e}function r1(n){var e=pr(n,3,mi,fr()),t=pr(n,2,Er,fr()),i=pr(n,1,fn,fr()),s=pr(n,9,fn,fr()),r={categories:[],keypoints:[]};for(let a=0;a<e.length;a++)r.categories.push({score:e[a],index:t[a]??-1,categoryName:i[a]??"",displayName:s[a]??""});if((e=ut(n,Zd,4)?.j())&&(r.boundingBox={originX:ii(e,1,Fs)??0,originY:ii(e,2,Fs)??0,width:ii(e,3,Fs)??0,height:ii(e,4,Fs)??0,angle:0}),ut(n,Zd,4)?.g().length)for(let a of ut(n,Zd,4).g())r.keypoints.push({x:zt(a,1,Fs,mi)??0,y:zt(a,2,Fs,mi)??0,score:zt(a,4,Fs,mi)??0,label:fn(zt(a,3,Fs))??""});return r}function nu(n){var e=[];for(let t of hs(n,Uv,1))e.push({x:Xt(t,1)??0,y:Xt(t,2)??0,z:Xt(t,3)??0,visibility:Xt(t,4)??0});return e}function Eo(n){var e=[];for(let t of hs(n,Fv,1))e.push({x:Xt(t,1)??0,y:Xt(t,2)??0,z:Xt(t,3)??0,visibility:Xt(t,4)??0});return e}function w0(n){return Array.from(n,e=>e>127?e-256:e)}function E0(n,e){if(n.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${n.length} vs. ${e.length}).`);var t=0,i=0,s=0;for(let r=0;r<n.length;r++)t+=n[r]*e[r],i+=n[r]*n[r],s+=e[r]*e[r];if(i<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return t/Math.sqrt(i*s)}rn[516587230]=[0,qt,fp,pf,Vt],rn[518928384]=pf;var oh,x3=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function a1(n){if(n)return!0;if(oh===void 0)try{await WebAssembly.instantiate(x3),oh=!0}catch{oh=!1}return oh}async function lh(n,e,t){return{wasmLoaderPath:`${e}/${n}_${t=`wasm${t?"_module":""}${await a1(t)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${e}/${n}_${t}.wasm`}}var dr=class{};function A0(n){return Ge(new xf,1,as(n))}dr.forVisionTasks=function(n,e=!1){return lh("vision",n??ah``,e)},dr.forTextTasks=function(n,e=!1){return lh("text",n??ah``,e)},dr.forGenAiTasks=function(n,e=!1){return lh("genai",n??ah``,e)},dr.forAudioTasks=function(n,e=!1){return lh("audio",n??ah``,e)},dr.isSimdSupported=function(n=!1){return a1(n)};var xf=class extends xe{constructor(n){super(n)}},v3=class extends xe{constructor(n){super(n)}},T0=[0,Te,2,Ih,-2,Rt,At,[0,Te,Rt]],y3=class extends xe{constructor(n){super(n)}},_3=class extends xe{constructor(n){super(n)}};function vf(n,e){return Ge(n,1,as(e))}function yf(n,e){return Ge(n,2,as(e))}var _f=class extends xe{constructor(n){super(n)}},Nh=[3,4,5,6,7],b3=class extends xe{constructor(n){super(n)}},o1=class extends xe{constructor(n){super(n)}};o1.prototype.g=Vo([0,[0,Te,ae,-3,Te],[0,Nh,Te,-1,it,[0,Te,ae,Ih],it,T0,it,[0,1,T0],it,[0,Te],it,[0,Te,ae,Ih]]]);var M3=class{constructor(){this.g=typeof AbortController<"u"}async send(n,e,t){var i=this.g?new AbortController:void 0,s=i&&n.la>0?setTimeout(()=>{i.abort()},n.la):void 0;try{let r=await fetch(n.url,{method:n.bb,headers:{...n.ab},...n.body&&{body:n.body},...n.withCredentials&&{credentials:"include"},signal:n.la&&i?i.signal:null});r.status===200?e?.(await r.text()):t?.(r.status)}catch(r){r?.name==="AbortError"?t?.(408):t?.(400)}finally{clearTimeout(s)}}},S3=class extends xe{constructor(n){super(n,37)}},C0=[-4,{},Ow,Te,Uw],R0=[0,ae,Te,1,ae,-1,Te,1,Te,1,Rt],I0=[0,Te,ae,-2],P0=[0,ae,Te],L0=[0,ae,Te],N0=[0,Ye,-3],D0=[0,Te,ae,-1,Rt,rt,-1,ae,-5,At,[0,ae,-4],-1,Ye,[0,Ye,-3],Te],w3=class extends xe{constructor(n){super(n,19)}},E3=rp([-19,{},[0,Te,1,[0,ae,-6,Rt,rt,ae,-1,Rt],1,[0,ae,1,ae,-5],ae,-1,[0,Te,ae,-8],[0,ae,-3],[0,ae,Te,ae,-2],[0,ae,-1,Te,ae,-1,Te,ae,-1,[0,At,[0,ae,-1],Ye,ae,-5],[0,Te,Ye,rt,-2]],Rt,[0,ae,-3,Rt,rt,ae,-1],[0,Te,ae,-1],[0,ae,-9],[0,ae,-6,Te,ae,1,ae,Ye,Te,-1,Ye,ae,-2,Te,ae,Te,ae,rt,-1],1,[0,Te],1,[0,ae,-4],1,R0,[0,[1,2,3,4,5,6],it,R0,it,P0,it,L0,it,[0,Te],it,D0,it,I0],P0,L0,D0,[0,[0,Te,ae,-1,Rt,rt,-1,ae,-4,At,[0,ae,-4],-1,1,N0],[0,Te,ae,-1,Rt,rt,-1,ae,-4,N0]],I0,[0,ae,[0,rt,-3,Te],Te,-2,[0,rt,-1],Ye],4,[0,ae,Te,ae,-1,Rt,Te,ae,-1,Te,rt,-1]],Te,At,[-37,{},yo,ae,At,[0,ae,-1],oa,1,oa,[0,dn,-1,h0,Pw,-1],ae,[0,rt,ae,-1],Ye,rt,Rt,ae,-1,Dw,Fw,yo,oa,Te,h0,Rt,-1,[0,Te,-1],ae,Ye,ae,Ta,ae,-1,c0,1,c0,C0,Ye,[0,Te,[0,Vt,rt,-2],[0,Vt]],[0,Te,Rt]],yo,Mv,ae,-1,yo,Te,-1,[0,Ye,-1,Te,Ye],[0,Rt,-1,ae],[0,yo,Ye,Rt],Rt,1,Sv,1,C0]),A3=class{constructor(n){this.h=[],this.m=new M3,this.j=n??"",this.g=setInterval(()=>{this.flush()},6e4)}close(){this.g!==void 0&&(clearInterval(this.g),this.g=void 0),this.flush()}flush(n,e){if(this.error)e?.("net-send-failed");else if(this.h.length===0)n?.();else{var t=this.h;this.h=[],t=(function(i){var s=new w3;return lf(s=Ge(s,2,as(1786)),3,i)})(t),t=E3(t),this.m.send({url:"https://odml.pa.googleapis.com/v1/log",bb:"POST",la:1e4,body:t,hb:2,ab:{"Content-Type":"application/x-protobuf","x-goog-api-key":this.j},withCredentials:!1},()=>{n?.()},i=>{this.error=Error(`Logging failed with HTTP error: ${i}`),this.h=[],this.g!==void 0&&(clearInterval(this.g),this.g=void 0),e?.("net-send-failed",i)})}}},Dh=class{constructor(){this.aa=this.U=this.X=this.R=this.V=this.T=this.P=0}};function bf(n,e){var t=new o1;t=Ue(t,0,1,n.B),t=Ue(t,0,2,e),e=Ge(e=new S3,6,Oh(t=t.g(),!1)),(n=n.l).error||n.h.push(e)}function F0(n,e){var t={P:e.P-n.j.P,T:e.T-n.j.T,V:e.V-n.j.V,R:e.R-n.j.R,X:e.X-n.j.X,U:e.U,aa:e.aa},i=yf(vf(new _f,n.C),1);t=l1(n,t),bf(n,i=Vi(i,4,Nh,t)),n.j=e}function l1(n,e){var t=new v3;return n=uh(n=qd(n=Ge(t,1,as(n.D)),7,e.R),5,e.U),n=uh(n,6,e.aa),e.V>0&&uh(n,4,e.X/e.V),e.P!==0&&(t=qd(t=A0(3),2,e.P),Ro(n,8,xf,t)),e.T!==0&&(e=qd(t=A0(4),2,e.T),Ro(n,8,xf,e)),n}var T3=class{constructor(n,e,t){this.u=performance.now(),this.m=performance.now(),this.h=new Map,this.o=0,this.g=new Dh,this.j=new Dh,this.l=new A3(t),this.C=(function(i){switch(i){case"AudioClassifier":return 4;case"AudioEmbedder":return 5;case"TextClassifier":return 6;case"TextEmbedder":return 7;case"GestureRecognizer":return 8;case"HandDetector":return 9;case"HandLandmarker":return 10;case"ImageClassifier":return 11;case"ImageEmbedder":return 12;case"ImageSegmenter":return 13;case"ObjectDetector":return 14;case"FaceDetector":return 15;case"FaceLandmarker":return 16;case"InteractiveSegmenter":case"InteractiveSegmenterLegacy":return 18;case"HolisticLandmarker":return 20;case"LlmInference":return 21;case"LanguageDetector":return 22;case"PoseLandmarker":return 23;default:return 0}})(n),this.D=(function(i){switch(i){case"IMAGE":return 11;case"VIDEO":return 12;case"LIVE_STREAM":return 13;case"AUDIO_CLIPS":return 14;case"AUDIO_STREAM":return 15;default:return 10}})(e),n=new b3,typeof window>"u"?e=0:(e=navigator.userAgent,e=/Android/i.test(e)?1:/iPhone|iPad|iPod/i.test(e)?2:/Windows/i.test(e)?5:/Macintosh/i.test(e)?4:/Linux/i.test(e)?3:0),n=Ge(n,1,as(e)),n=Ge(n,2,rs("")),n=Ge(n,3,rs("")),n=Ge(n,4,rs("1.0.1")),n=Ge(n,5,rs("")),this.B=Ge(n,6,as(4))}ya(){var n=new _3;n=uh(n=Ge(n,1,as(this.D)),3,performance.now()-this.u),bf(this,n=Vi(yf(vf(new _f,this.C),0),3,Nh,n)),this.m=performance.now()}za(n){var e=this.h.get(n);if(e!==void 0&&(this.h.delete(n),n=performance.now()-e,++this.g.V,this.g.X+=n,this.g.U=Math.max(this.g.U,n),this.o=Math.max(this.o,n),performance.now()>this.m+3e4)){for(let[t,i]of this.h.entries())n=t,i<e&&(this.g.R++,this.h.delete(n));e={...this.g,aa:performance.now()-this.m},this.g.U=0,this.m=performance.now(),F0(this,e)}}xa(){var n={...this.g,R:this.g.R+this.h.size,U:this.o,aa:performance.now()-this.u};F0(this,n);var e=new y3;e=Ue(e,0,2,n=l1(this,n)),bf(this,e=Vi(n=yf(vf(new _f,this.C),2),5,Nh,e))}close(){var n=this.l;typeof n.close=="function"?n.close():n.flush()}};function gp(){var n=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(n)||!!((n=n.userAgent.match(/Version\/([\d]+).*Safari/))&&n.length>=1&&Number(n[1])>=17))}async function U0(n){if(typeof importScripts!="function"){let e=document.createElement("script");return e.src=n.toString(),e.crossOrigin="anonymous",new Promise((t,i)=>{e.addEventListener("load",()=>{t()},!1),e.addEventListener("error",s=>{i(s)},!1),document.body.appendChild(e)})}try{importScripts(n.toString())}catch(e){if(!(e instanceof TypeError))throw e;{let t=self.import;t?await t(n.toString()):await import(n.toString())}}}function xp(n){return n.videoWidth!==void 0?[n.videoWidth,n.videoHeight]:n.naturalWidth!==void 0?[n.naturalWidth,n.naturalHeight]:n.displayWidth!==void 0?[n.displayWidth,n.displayHeight]:[n.width,n.height]}function Le(n,e,t){n.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),t(e=n.i.stringToNewUTF8(e)),n.i._free(e)}function c1(n,e,t){if(!n.i.canvas)throw Error("No OpenGL canvas configured.");if(t?n.i._bindTextureToStream(t):n.i._bindTextureToCanvas(),!(t=n.i.canvas.getContext("webgl2")||n.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");n.i.gpuOriginForWebTexturesIsBottomLeft&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),n.i.gpuOriginForWebTexturesIsBottomLeft&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1);var[i,s]=xp(e);return!n.j||i===n.i.canvas.width&&s===n.i.canvas.height||(n.i.canvas.width=i,n.i.canvas.height=s),[i,s]}function O0(n,e,t){n.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");var i=new Uint32Array(e.length);for(let s=0;s<e.length;s++)i[s]=n.i.stringToNewUTF8(e[s]);e=n.i._malloc(4*i.length),n.i.HEAPU32.set(i,e>>2),t(e);for(let s of i)n.i._free(s);n.i._free(e)}function Oi(n,e,t){n.i.simpleListeners=n.i.simpleListeners||{},n.i.simpleListeners[e]=t}function Us(n,e,t){var i=[];n.i.simpleListeners=n.i.simpleListeners||{},n.i.simpleListeners[e]=(s,r,a)=>{r?(t(i,a),i=[]):i.push(s)}}var h1=class{constructor(n,e){this.j=!0,this.i=n,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:gp()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(n){var e=await(await fetch(n)).arrayBuffer();n=!(n.endsWith(".pbtxt")||n.endsWith(".textproto")),this.setGraph(new Uint8Array(e),n)}setGraphFromString(n){this.setGraph(new TextEncoder().encode(n),!1)}setGraph(n,e){var t=n.length,i=this.i._malloc(t);this.i.HEAPU8.set(n,i),e?this.i._changeBinaryGraph(t,i):this.i._changeTextGraph(t,i),this.i._free(i)}configureAudio(n,e,t,i,s){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Le(this,i||"input_audio",r=>{Le(this,s=s||"audio_header",a=>{this.i._configureAudio(r,a,n,e??0,t)})})}setAutoResizeCanvas(n){this.j=n}setAutoRenderToScreen(n){this.i._setAutoRenderToScreen(n)}setGpuBufferVerticalFlip(n){this.i.gpuOriginForWebTexturesIsBottomLeft=n}ja(n){Oi(this,"__graph_config__",e=>{n(e)}),Le(this,"__graph_config__",e=>{this.i._getGraphConfig(e,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(n){this.i.errorListener=n}attachEmptyPacketListener(n,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[n]=e}addAudioToStream(n,e,t){this.addAudioToStreamWithShape(n,0,0,e,t)}addAudioToStreamWithShape(n,e,t,i,s){var r=4*n.length;this.h!==r&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(r),this.h=r),this.i.HEAPF32.set(n,this.g/4),Le(this,i,a=>{this.i._addAudioToInputStream(this.g,e,t,a,s)})}addGpuBufferToStream(n,e,t){Le(this,e,i=>{var[s,r]=c1(this,n,i);this.i._addBoundTextureToStream(i,s,r,t)})}addBoolToStream(n,e,t){Le(this,e,i=>{this.i._addBoolToInputStream(n,i,t)})}addDoubleToStream(n,e,t){Le(this,e,i=>{this.i._addDoubleToInputStream(n,i,t)})}addFloatToStream(n,e,t){Le(this,e,i=>{this.i._addFloatToInputStream(n,i,t)})}addIntToStream(n,e,t){Le(this,e,i=>{this.i._addIntToInputStream(n,i,t)})}addUintToStream(n,e,t){Le(this,e,i=>{this.i._addUintToInputStream(n,i,t)})}addStringToStream(n,e,t){Le(this,e,i=>{Le(this,n,s=>{this.i._addStringToInputStream(s,i,t)})})}addStringRecordToStream(n,e,t){Le(this,e,i=>{O0(this,Object.keys(n),s=>{O0(this,Object.values(n),r=>{this.i._addFlatHashMapToInputStream(s,r,Object.keys(n).length,i,t)})})})}addProtoToStream(n,e,t,i){Le(this,t,s=>{Le(this,e,r=>{var a=this.i._malloc(n.length);this.i.HEAPU8.set(n,a),this.i._addProtoToInputStream(a,n.length,r,s,i),this.i._free(a)})})}addEmptyPacketToStream(n,e){Le(this,n,t=>{this.i._addEmptyPacketToInputStream(t,e)})}addBoolVectorToStream(n,e,t){Le(this,e,i=>{var s=this.i._allocateBoolVector(n.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(let r of n)this.i._addBoolVectorEntry(s,r);this.i._addBoolVectorToInputStream(s,i,t)})}addDoubleVectorToStream(n,e,t){Le(this,e,i=>{var s=this.i._allocateDoubleVector(n.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(let r of n)this.i._addDoubleVectorEntry(s,r);this.i._addDoubleVectorToInputStream(s,i,t)})}addFloatVectorToStream(n,e,t){Le(this,e,i=>{var s=this.i._allocateFloatVector(n.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(let r of n)this.i._addFloatVectorEntry(s,r);this.i._addFloatVectorToInputStream(s,i,t)})}addIntVectorToStream(n,e,t){Le(this,e,i=>{var s=this.i._allocateIntVector(n.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(let r of n)this.i._addIntVectorEntry(s,r);this.i._addIntVectorToInputStream(s,i,t)})}addUintVectorToStream(n,e,t){Le(this,e,i=>{var s=this.i._allocateUintVector(n.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(let r of n)this.i._addUintVectorEntry(s,r);this.i._addUintVectorToInputStream(s,i,t)})}addStringVectorToStream(n,e,t){Le(this,e,i=>{var s=this.i._allocateStringVector(n.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(let r of n)Le(this,r,a=>{this.i._addStringVectorEntry(s,a)});this.i._addStringVectorToInputStream(s,i,t)})}addBoolToInputSidePacket(n,e){Le(this,e,t=>{this.i._addBoolToInputSidePacket(n,t)})}addDoubleToInputSidePacket(n,e){Le(this,e,t=>{this.i._addDoubleToInputSidePacket(n,t)})}addFloatToInputSidePacket(n,e){Le(this,e,t=>{this.i._addFloatToInputSidePacket(n,t)})}addIntToInputSidePacket(n,e){Le(this,e,t=>{this.i._addIntToInputSidePacket(n,t)})}addUintToInputSidePacket(n,e){Le(this,e,t=>{this.i._addUintToInputSidePacket(n,t)})}addStringToInputSidePacket(n,e){Le(this,e,t=>{Le(this,n,i=>{this.i._addStringToInputSidePacket(i,t)})})}addProtoToInputSidePacket(n,e,t){Le(this,t,i=>{Le(this,e,s=>{var r=this.i._malloc(n.length);this.i.HEAPU8.set(n,r),this.i._addProtoToInputSidePacket(r,n.length,s,i),this.i._free(r)})})}addBoolVectorToInputSidePacket(n,e){Le(this,e,t=>{var i=this.i._allocateBoolVector(n.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(let s of n)this.i._addBoolVectorEntry(i,s);this.i._addBoolVectorToInputSidePacket(i,t)})}addDoubleVectorToInputSidePacket(n,e){Le(this,e,t=>{var i=this.i._allocateDoubleVector(n.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(let s of n)this.i._addDoubleVectorEntry(i,s);this.i._addDoubleVectorToInputSidePacket(i,t)})}addFloatVectorToInputSidePacket(n,e){Le(this,e,t=>{var i=this.i._allocateFloatVector(n.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(let s of n)this.i._addFloatVectorEntry(i,s);this.i._addFloatVectorToInputSidePacket(i,t)})}addIntVectorToInputSidePacket(n,e){Le(this,e,t=>{var i=this.i._allocateIntVector(n.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(let s of n)this.i._addIntVectorEntry(i,s);this.i._addIntVectorToInputSidePacket(i,t)})}addUintVectorToInputSidePacket(n,e){Le(this,e,t=>{var i=this.i._allocateUintVector(n.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(let s of n)this.i._addUintVectorEntry(i,s);this.i._addUintVectorToInputSidePacket(i,t)})}addStringVectorToInputSidePacket(n,e){Le(this,e,t=>{var i=this.i._allocateStringVector(n.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(let s of n)Le(this,s,r=>{this.i._addStringVectorEntry(i,r)});this.i._addStringVectorToInputSidePacket(i,t)})}attachBoolListener(n,e){Oi(this,n,e),Le(this,n,t=>{this.i._attachBoolListener(t)})}attachBoolVectorListener(n,e){Us(this,n,e),Le(this,n,t=>{this.i._attachBoolVectorListener(t)})}attachIntListener(n,e){Oi(this,n,e),Le(this,n,t=>{this.i._attachIntListener(t)})}attachIntVectorListener(n,e){Us(this,n,e),Le(this,n,t=>{this.i._attachIntVectorListener(t)})}attachUintListener(n,e){Oi(this,n,e),Le(this,n,t=>{this.i._attachUintListener(t)})}attachUintVectorListener(n,e){Us(this,n,e),Le(this,n,t=>{this.i._attachUintVectorListener(t)})}attachDoubleListener(n,e){Oi(this,n,e),Le(this,n,t=>{this.i._attachDoubleListener(t)})}attachDoubleVectorListener(n,e){Us(this,n,e),Le(this,n,t=>{this.i._attachDoubleVectorListener(t)})}attachFloatListener(n,e){Oi(this,n,e),Le(this,n,t=>{this.i._attachFloatListener(t)})}attachFloatVectorListener(n,e){Us(this,n,e),Le(this,n,t=>{this.i._attachFloatVectorListener(t)})}attachStringListener(n,e){Oi(this,n,e),Le(this,n,t=>{this.i._attachStringListener(t)})}attachStringVectorListener(n,e){Us(this,n,e),Le(this,n,t=>{this.i._attachStringVectorListener(t)})}attachProtoListener(n,e,t){Oi(this,n,e),Le(this,n,i=>{this.i._attachProtoListener(i,t||!1)})}attachProtoVectorListener(n,e,t){Us(this,n,e),Le(this,n,i=>{this.i._attachProtoVectorListener(i,t||!1)})}attachAudioListener(n,e,t){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Oi(this,n,(i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,s)}),Le(this,n,i=>{this.i._attachAudioListener(i,t||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}};function u1(n){return class extends n{get pa(){return this.i}Sa(){if(typeof this.pa._mediapipeLoggerGetEncodedApiKey=="function"){let e=this.pa._mediapipeLoggerGetEncodedApiKey();return this.pa._decodeBase64(e)}}}}function d1(n){return class extends n{Za(){this.i._registerModelResourcesGraphService()}}}var C3=u1(d1(h1)),R3=class extends C3{};async function I3(n,e,t,i){return n=await(async(s,r,a,o,l)=>{if(r&&await U0(r),!self.ModuleFactory||a&&(await U0(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((r=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new s(l,o)})(n,t.wasmLoaderPath,t.assetLoaderPath,e,{locateFile:s=>s.endsWith(".wasm")?t.wasmBinaryPath.toString():t.assetBinaryPath&&s.endsWith(".data")?t.assetBinaryPath.toString():s}),(function(s,r){r=r.runningMode??"";var a=s.g.Sa();s.m=new T3(s.C(),r,a)})(n,i),await n.v(i),n}async function mh(n,e,t,i){return I3(n,e,t,i)}function Jd(n,e){var t=ut(n.baseOptions,Lh,1)||new Lh;typeof e=="string"?(Ge(t,2,rs(e)),Ge(t,1)):e instanceof Uint8Array&&(Ge(t,1,Oh(e,!1)),Ge(t,2)),Ue(n.baseOptions,0,1,t)}function k0(n){try{let e=n.K.length;if(e===1)throw Error(n.K[0].message);if(e>1)throw Error("Encountered multiple errors: "+n.K.map(t=>t.message).join(", "))}finally{n.K=[]}}function Se(n,e){n.I=Math.max(n.I,e)}function iu(n,e){n.D=new Fn,$n(n.D,2,"PassThroughCalculator"),Pt(n.D,"free_memory"),at(n.D,"free_memory_unused_out"),Dt(e,"free_memory"),ai(e,n.D)}function ga(n,e){Pt(n.D,e),at(n.D,e+"_unused_out")}function su(n){n.g.addBoolToStream(!0,"free_memory",n.I)}var Fh=class{constructor(n){this.g=n,this.K=[],this.I=0,this.g.setAutoRenderToScreen(!1)}j(n,e=!0){if(e){let t=n.baseOptions||{};if(n.baseOptions?.modelAssetBuffer&&n.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(ut(this.baseOptions,Lh,1)?.g()||ut(this.baseOptions,Lh,1)?.j()||n.baseOptions?.modelAssetBuffer||n.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(i,s){var r=ut(i.baseOptions,Ph,3);if(!r){var a=r=new Ph,o=new m0;Vi(a,4,yr,o)}"delegate"in s&&(s.delegate==="GPU"?(s=r,a=new ap,Vi(s,2,yr,a)):(s=r,a=new m0,Vi(s,4,yr,a))),Ue(i.baseOptions,0,3,r)})(this,t),t.modelAssetPath)return fetch(t.modelAssetPath.toString()).then(i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${t.modelAssetPath} (${i.status})`)}).then(i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),Jd(this,"/model.dat"),this.o(),this.L()});if(t.modelAssetBuffer instanceof Uint8Array)Jd(this,t.modelAssetBuffer);else if(t.modelAssetBuffer)return(async function(i){for(var s=[],r=0;;){let{done:a,value:o}=await i.read();if(a)break;s.push(o),r+=o.length}if(s.length===0)return new Uint8Array(0);if(s.length===1)return s[0];i=new Uint8Array(r),r=0;for(let a of s)i.set(a,r),r+=a.length;return i})(t.modelAssetBuffer).then(i=>{Jd(this,i),this.o(),this.L()})}return this.o(),this.L(),Promise.resolve()}L(){}ja(){var n;if(this.g.ja(e=>{n=zw(e)}),!n)throw Error("Failed to retrieve CalculatorGraphConfig");return n}setGraph(n,e){this.g.attachErrorListener((t,i)=>{this.K.push(Error(i))}),this.g.Za(),this.g.setGraph(n,e),this.m?.ya(),this.D=void 0,k0(this)}finishProcessing(n){this.g.finishProcessing(),k0(this),this.m&&n!==void 0&&this.m.za(n)}close(){this.D=void 0,this.m?.xa(),this.m?.close(),this.g.closeGraph()}};function Sn(n,e){if(!n)throw Error(`Unable to obtain required WebGL resource: ${e}`);return n}Fh.prototype.close=Fh.prototype.close;var Mf=class{constructor(e,t,i,s){this.g=e,this.h=t,this.m=i,this.j=s}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.j)}};function B0(n,e,t){var i=n.g;if(t=Sn(i.createShader(t),"Failed to create WebGL shader"),i.shaderSource(t,e),i.compileShader(t),!i.getShaderParameter(t,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(t)}`);return i.attachShader(n.h,t),t}function z0(n,e){var t=n.g,i=Sn(t.createVertexArray(),"Failed to create vertex array");t.bindVertexArray(i);var s=Sn(t.createBuffer(),"Failed to create buffer");t.bindBuffer(t.ARRAY_BUFFER,s),t.enableVertexAttribArray(n.F),t.vertexAttribPointer(n.F,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW);var r=Sn(t.createBuffer(),"Failed to create buffer");return t.bindBuffer(t.ARRAY_BUFFER,r),t.enableVertexAttribArray(n.K),t.vertexAttribPointer(n.K,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),t.bindVertexArray(null),new Mf(t,i,s,r)}function vp(n,e){if(n.g){if(e!==n.g)throw Error("Cannot change GL context once initialized")}else n.g=e}function Go(n,e,t,i){return vp(n,e),n.h||(n.m(),n.I()),t?(n.l||(n.l=z0(n,!0)),t=n.l):(n.D||(n.D=z0(n,!1)),t=n.D),e.useProgram(n.h),t.bind(),n.j(),n=i(),t.g.bindVertexArray(null),n}function Vs(n,e,t){return vp(n,e),n=Sn(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,t??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),n}function ru(n,e,t){vp(n,e),n.C||(n.C=Sn(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,n.C),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}function yp(n){n.g?.bindFramebuffer(n.g.FRAMEBUFFER,null)}var Cr=class{B(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){var n=this.g;if(this.h=Sn(n.createProgram(),"Failed to create WebGL program"),this.da=B0(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,n.VERTEX_SHADER),this.Z=B0(this,this.B(),n.FRAGMENT_SHADER),n.linkProgram(this.h),!n.getProgramParameter(this.h,n.LINK_STATUS))throw Error(`Error during program linking: ${n.getProgramInfoLog(this.h)}`);this.F=n.getAttribLocation(this.h,"aVertex"),this.K=n.getAttribLocation(this.h,"aTex")}I(){}j(){}close(){if(this.h){let n=this.g;n.deleteProgram(this.h),n.deleteShader(this.da),n.deleteShader(this.Z)}this.C&&this.g.deleteFramebuffer(this.C),this.D&&this.D.close(),this.l&&this.l.close()}},P3=class extends Cr{B(){return`
  precision mediump float;
  uniform sampler2D backgroundTexture;
  uniform sampler2D maskTexture;
  uniform sampler2D colorMappingTexture;
  varying vec2 vTex;
  void main() {
    vec4 backgroundColor = texture2D(backgroundTexture, vTex);
    float category = texture2D(maskTexture, vTex).r;
    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));
    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);
  }
 `}I(){var n=this.g;n.activeTexture(n.TEXTURE1),this.u=Vs(this,n,n.LINEAR),n.activeTexture(n.TEXTURE2),this.o=Vs(this,n,n.NEAREST)}m(){super.m();var n=this.g;this.O=Sn(n.getUniformLocation(this.h,"backgroundTexture"),"Uniform location"),this.Y=Sn(n.getUniformLocation(this.h,"colorMappingTexture"),"Uniform location"),this.L=Sn(n.getUniformLocation(this.h,"maskTexture"),"Uniform location")}j(){super.j();var n=this.g;n.uniform1i(this.L,0),n.uniform1i(this.O,1),n.uniform1i(this.Y,2)}close(){this.u&&this.g.deleteTexture(this.u),this.o&&this.g.deleteTexture(this.o),super.close()}},L3=class extends Cr{B(){return`
  precision mediump float;
  uniform sampler2D maskTexture;
  uniform sampler2D defaultTexture;
  uniform sampler2D overlayTexture;
  varying vec2 vTex;
  void main() {
    float confidence = texture2D(maskTexture, vTex).r;
    vec4 defaultColor = texture2D(defaultTexture, vTex);
    vec4 overlayColor = texture2D(overlayTexture, vTex);
    // Apply the alpha from the overlay and merge in the default color
    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);
    gl_FragColor = mix(defaultColor, overlayColor, confidence);
  }
 `}I(){var n=this.g;n.activeTexture(n.TEXTURE1),this.o=Vs(this,n),n.activeTexture(n.TEXTURE2),this.u=Vs(this,n)}m(){super.m();var n=this.g;this.L=Sn(n.getUniformLocation(this.h,"defaultTexture"),"Uniform location"),this.O=Sn(n.getUniformLocation(this.h,"overlayTexture"),"Uniform location"),this.J=Sn(n.getUniformLocation(this.h,"maskTexture"),"Uniform location")}j(){super.j();var n=this.g;n.uniform1i(this.J,0),n.uniform1i(this.L,1),n.uniform1i(this.O,2)}close(){this.o&&this.g.deleteTexture(this.o),this.u&&this.g.deleteTexture(this.u),super.close()}};function ss(n,e){switch(e){case 0:return n.g.find(t=>t instanceof Uint8Array);case 1:return n.g.find(t=>t instanceof Float32Array);case 2:return n.g.find(t=>typeof WebGLTexture<"u"&&t instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function Sf(n){var e=ss(n,1);if(!e){if(e=ss(n,0))e=new Float32Array(e).map(i=>i/255);else{e=new Float32Array(n.width*n.height);let i=xa(n);var t=_p(n);if(ru(t,i,f1(n)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){t=new Float32Array(n.width*n.height*4),i.readPixels(0,0,n.width,n.height,i.RGBA,i.FLOAT,t);for(let s=0,r=0;s<e.length;++s,r+=4)e[s]=t[r]}else i.readPixels(0,0,n.width,n.height,i.RED,i.FLOAT,e)}n.g.push(e)}return e}function f1(n){var e=ss(n,2);if(!e){let t=xa(n);e=m1(n);let i=Sf(n),s=p1(n);t.texImage2D(t.TEXTURE_2D,0,s,n.width,n.height,0,t.RED,t.FLOAT,i),wf(n)}return e}function xa(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return n.h||(n.h=Sn(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.h}function p1(n){if(n=xa(n),!ch)if(n.getExtension("EXT_color_buffer_float")&&n.getExtension("OES_texture_float_linear")&&n.getExtension("EXT_float_blend"))ch=n.R32F;else{if(!n.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");ch=n.R16F}return ch}function _p(n){return n.j||(n.j=new Cr),n.j}function m1(n){var e=xa(n);e.viewport(0,0,n.width,n.height),e.activeTexture(e.TEXTURE0);var t=ss(n,2);return t||(t=Vs(_p(n),e,n.m?e.LINEAR:e.NEAREST),n.g.push(t),n.o=!0),e.bindTexture(e.TEXTURE_2D,t),t}function wf(n){n.h.bindTexture(n.h.TEXTURE_2D,null)}var ch,jt=class{constructor(n,e,t,i,s,r,a){this.g=n,this.m=e,this.o=t,this.canvas=i,this.j=s,this.width=r,this.height=a,this.o&&--V0===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ua(){return!!ss(this,0)}ua(){return!!ss(this,1)}W(){return!!ss(this,2)}ta(){return(e=ss(n=this,0))||(e=Sf(n),e=new Uint8Array(e.map(t=>Math.round(255*t))),n.g.push(e)),e;var n,e}sa(){return Sf(this)}S(){return f1(this)}clone(){var n=[];for(let e of this.g){let t;if(e instanceof Uint8Array)t=new Uint8Array(e);else if(e instanceof Float32Array)t=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{let i=xa(this),s=_p(this);i.activeTexture(i.TEXTURE1),t=Vs(s,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,t);let r=p1(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),ru(s,i,t),Go(s,i,!1,()=>{m1(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),wf(this)}),yp(s),wf(this)}}n.push(t)}return new jt(n,this.m,this.W(),this.canvas,this.j,this.width,this.height)}close(){this.o&&xa(this).deleteTexture(ss(this,2)),V0=-1}};jt.prototype.close=jt.prototype.close,jt.prototype.clone=jt.prototype.clone,jt.prototype.getAsWebGLTexture=jt.prototype.S,jt.prototype.getAsFloat32Array=jt.prototype.sa,jt.prototype.getAsUint8Array=jt.prototype.ta,jt.prototype.hasWebGLTexture=jt.prototype.W,jt.prototype.hasFloat32Array=jt.prototype.ua,jt.prototype.hasUint8Array=jt.prototype.Ua;var V0=250,N3={color:"white",lineWidth:4,radius:6};function Qd(n){return{...N3,fillColor:(n=n||{}).color,...n}}function ns(n,e){return n instanceof Function?n(e):n}function H0(n,e,t){return Math.max(Math.min(e,t),Math.min(Math.max(e,t),n))}function _o(n){if(!n.j)throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");return n.j}function Po(n){if(!n.o)throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");return n.o}function G0(n,e,t){if(e.W())t(e.S());else{let i=e.ua()?e.sa():e.ta();n.m=n.m??new Cr;let s=Po(n);t((n=new jt([i],e.m,!1,s.canvas,n.m,e.width,e.height)).S()),n.close()}}function W0(n,e,t,i){var s=(function(o){return o.g||(o.g=new P3),o.g})(n),r=Po(n),a=Array.isArray(t)?new ImageData(new Uint8ClampedArray(t),1,1):t;Go(s,r,!0,()=>{(function(l,c,h,d){var u=l.g;if(u.activeTexture(u.TEXTURE0),u.bindTexture(u.TEXTURE_2D,c),u.activeTexture(u.TEXTURE1),u.bindTexture(u.TEXTURE_2D,l.u),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,u.RGBA,u.UNSIGNED_BYTE,h),l.J&&(function(f,g){if(f!==g)return!1;f=f.entries(),g=g.entries();for(let[x,p]of f){f=x;let m=p,A=g.next();if(A.done)return!1;let[R,M]=A.value;if(f!==R||m[0]!==M[0]||m[1]!==M[1]||m[2]!==M[2]||m[3]!==M[3])return!1}return!!g.next().done})(l.J,d))u.activeTexture(u.TEXTURE2),u.bindTexture(u.TEXTURE_2D,l.o);else{l.J=d;let f=Array(1024).fill(0);d.forEach((g,x)=>{if(g.length!==4)throw Error(`Color at index ${x} is not a four-channel value.`);f[4*x]=g[0],f[4*x+1]=g[1],f[4*x+2]=g[2],f[4*x+3]=g[3]}),u.activeTexture(u.TEXTURE2),u.bindTexture(u.TEXTURE_2D,l.o),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,256,1,0,u.RGBA,u.UNSIGNED_BYTE,new Uint8Array(f))}})(s,e,a,i),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4);var o=s.g;o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,null),o.activeTexture(o.TEXTURE1),o.bindTexture(o.TEXTURE_2D,null),o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,null)})}function X0(n,e,t,i){var s=Po(n),r=(function(l){return l.h||(l.h=new L3),l.h})(n),a=Array.isArray(t)?new ImageData(new Uint8ClampedArray(t),1,1):t,o=Array.isArray(i)?new ImageData(new Uint8ClampedArray(i),1,1):i;Go(r,s,!0,()=>{var l=r.g;l.activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,e),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,r.o),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,a),l.activeTexture(l.TEXTURE2),l.bindTexture(l.TEXTURE_2D,r.u),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,o),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLE_FAN,0,4),s.bindTexture(s.TEXTURE_2D,null),(l=r.g).activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,null),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,null),l.activeTexture(l.TEXTURE2),l.bindTexture(l.TEXTURE_2D,null)})}var Rn=class{constructor(n,e){typeof CanvasRenderingContext2D<"u"&&n instanceof CanvasRenderingContext2D||n instanceof OffscreenCanvasRenderingContext2D?(this.j=n,this.o=e):this.o=n}Ma(n,e){if(n){var t=_o(this);e=Qd(e),t.save();var i=t.canvas,s=0;for(let r of n)t.fillStyle=ns(e.fillColor,{index:s,from:r}),t.strokeStyle=ns(e.color,{index:s,from:r}),t.lineWidth=ns(e.lineWidth,{index:s,from:r}),(n=new Path2D).arc(r.x*i.width,r.y*i.height,ns(e.radius,{index:s,from:r}),0,2*Math.PI),t.fill(n),t.stroke(n),++s;t.restore()}}La(n,e,t){if(n&&e){var i=_o(this);t=Qd(t),i.save();var s=i.canvas,r=0;for(let a of e){i.beginPath(),e=n[a.start];let o=n[a.end];e&&o&&(i.strokeStyle=ns(t.color,{index:r,from:e,to:o}),i.lineWidth=ns(t.lineWidth,{index:r,from:e,to:o}),i.moveTo(e.x*s.width,e.y*s.height),i.lineTo(o.x*s.width,o.y*s.height)),++r,i.stroke()}i.restore()}}Ia(n,e){var t=_o(this);e=Qd(e),t.save(),t.beginPath(),t.lineWidth=ns(e.lineWidth,{}),t.strokeStyle=ns(e.color,{}),t.fillStyle=ns(e.fillColor,{}),t.moveTo(n.originX,n.originY),t.lineTo(n.originX+n.width,n.originY),t.lineTo(n.originX+n.width,n.originY+n.height),t.lineTo(n.originX,n.originY+n.height),t.lineTo(n.originX,n.originY),t.stroke(),t.fill(),t.restore()}Ja(n,e,t=[0,0,0,255]){this.j?(function(i,s,r,a){var o=Po(i);G0(i,s,l=>{W0(i,l,r,a),(l=_o(i)).drawImage(o.canvas,0,0,l.canvas.width,l.canvas.height)})})(this,n,t,e):W0(this,n.S(),t,e)}Ka(n,e,t){this.j?(function(i,s,r,a){var o=Po(i);G0(i,s,l=>{X0(i,l,r,a),(l=_o(i)).drawImage(o.canvas,0,0,l.canvas.width,l.canvas.height)})})(this,n,e,t):X0(this,n.S(),e,t)}close(){this.g?.close(),this.g=void 0,this.h?.close(),this.h=void 0,this.m?.close(),this.m=void 0}};function ki(n,e){switch(e){case 0:return n.g.find(t=>t instanceof ImageData);case 1:return n.g.find(t=>typeof ImageBitmap<"u"&&t instanceof ImageBitmap);case 2:return n.g.find(t=>typeof WebGLTexture<"u"&&t instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function g1(n){var e=ki(n,0);if(!e){e=va(n);let t=au(n),i=new Uint8Array(n.width*n.height*4);ru(t,e,gh(n)),e.readPixels(0,0,n.width,n.height,e.RGBA,e.UNSIGNED_BYTE,i),yp(t),e=new ImageData(new Uint8ClampedArray(i.buffer),n.width,n.height),n.g.push(e)}return e}function gh(n){var e=ki(n,2);if(!e){let t=va(n);e=xh(n);let i=ki(n,1)||g1(n);t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i),Mo(n)}return e}function va(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return n.h||(n.h=Sn(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.h}function au(n){return n.j||(n.j=new Cr),n.j}function xh(n){var e=va(n);e.viewport(0,0,n.width,n.height),e.activeTexture(e.TEXTURE0);var t=ki(n,2);return t||(t=Vs(au(n),e),n.g.push(t),n.m=!0),e.bindTexture(e.TEXTURE_2D,t),t}function Mo(n){n.h.bindTexture(n.h.TEXTURE_2D,null)}function $0(n){var e=va(n);return Go(au(n),e,!0,()=>(function(t,i){var s=t.canvas;if(s.width===t.width&&s.height===t.height)return i();var r=s.width,a=s.height;return s.width=t.width,s.height=t.height,t=i(),s.width=r,s.height=a,t})(n,()=>{if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),!(n.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return n.canvas.transferToImageBitmap()}))}Rn.prototype.close=Rn.prototype.close,Rn.prototype.drawConfidenceMask=Rn.prototype.Ka,Rn.prototype.drawCategoryMask=Rn.prototype.Ja,Rn.prototype.drawBoundingBox=Rn.prototype.Ia,Rn.prototype.drawConnectors=Rn.prototype.La,Rn.prototype.drawLandmarks=Rn.prototype.Ma,Rn.lerp=function(n,e,t,i,s){return H0(i*(1-(n-e)/(t-e))+s*(1-(t-n)/(t-e)),i,s)},Rn.clamp=H0;var un=class{constructor(n,e,t,i,s,r,a){this.g=n,this.o=e,this.m=t,this.canvas=i,this.j=s,this.width=r,this.height=a,(this.o||this.m)&&--q0===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ta(){return!!ki(this,0)}va(){return!!ki(this,1)}W(){return!!ki(this,2)}Qa(){return g1(this)}Pa(){var n=ki(this,1);return n||(gh(this),xh(this),n=$0(this),Mo(this),this.g.push(n),this.o=!0),n}S(){return gh(this)}clone(){var n=[];for(let e of this.g){let t;if(e instanceof ImageData)t=new ImageData(e.data,this.width,this.height);else if(e instanceof WebGLTexture){let i=va(this),s=au(this);i.activeTexture(i.TEXTURE1),t=Vs(s,i),i.bindTexture(i.TEXTURE_2D,t),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),ru(s,i,t),Go(s,i,!1,()=>{xh(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Mo(this)}),yp(s),Mo(this)}else{if(!(e instanceof ImageBitmap))throw Error(`Type is not supported: ${e}`);gh(this),xh(this),t=$0(this),Mo(this)}n.push(t)}return new un(n,this.va(),this.W(),this.canvas,this.j,this.width,this.height)}close(){this.o&&ki(this,1).close(),this.m&&va(this).deleteTexture(ki(this,2)),q0=-1}};un.prototype.close=un.prototype.close,un.prototype.clone=un.prototype.clone,un.prototype.getAsWebGLTexture=un.prototype.S,un.prototype.getAsImageBitmap=un.prototype.Pa,un.prototype.getAsImageData=un.prototype.Qa,un.prototype.hasWebGLTexture=un.prototype.W,un.prototype.hasImageBitmap=un.prototype.va,un.prototype.hasImageData=un.prototype.Ta;var q0=250;function gi(...n){return n.map(([e,t])=>({start:e,end:t}))}var Y0,D3=d1((Y0=u1(h1),class extends Y0{get oa(){return this.i}Da(n,e,t){Le(this,e,i=>{var[s,r]=c1(this,n,i);this.oa._addBoundTextureAsImageToStream(i,s,r,t)})}ga(n,e){Oi(this,n,e),Le(this,n,t=>{this.oa._attachImageListener(t)})}ha(n,e){Us(this,n,e),Le(this,n,t=>{this.oa._attachImageVectorListener(t)})}})),xi=class extends D3{};async function ct(n,e,t){return mh(n,t.canvas??(gp()?void 0:document.createElement("canvas")),e,t)}function x1(n,e,t,i){if(n.m&&i!==void 0)if(ut(n.baseOptions,Ph,3)?.g()){var s=n.m;++s.g.T,s.h.set(i,performance.now())}else++(s=n.m).g.P,s.h.set(i,performance.now());if(n.qa){if(s=new Ov,t?.regionOfInterest){if(!n.Ca)throw Error("This task doesn't support region-of-interest.");var r=t.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Fe(s,1,(r.left+r.right)/2),Fe(s,2,(r.top+r.bottom)/2),Fe(s,4,r.right-r.left),Fe(s,3,r.bottom-r.top)}else Fe(s,1,.5),Fe(s,2,.5),Fe(s,4,1),Fe(s,3,1);if(t?.rotationDegrees){if(t?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90\xB0.");if(Fe(s,5,-Math.PI*t.rotationDegrees/180),t?.rotationDegrees%180!=0){let[a,o]=xp(e);t=Xt(s,3)*o/a,r=Xt(s,4)*a/o,Fe(s,4,t),Fe(s,3,r)}}n.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",n.qa,i)}n.g.Da(e,n.Ba,i??performance.now()),n.finishProcessing(i)}function vi(n,e,t){if(n.J)throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");x1(n,e,t,n.I+1)}function qi(n,e,t,i){if(!n.J)throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");x1(n,e,t,i)}function ya(n,e,t,i){var s=e.data,r=e.width,a=r*(e=e.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==a)throw Error("Unsupported channel count: "+s.length/a);return n=new jt([s],t,!1,n.g.i.canvas,n.da,r,e),i?n.clone():n}var qn=class extends Fh{constructor(n,e,t,i){super(n),this.g=n,this.Ba=e,this.qa=t,this.Ca=i,this.da=new Cr,this.J=!1}j(n,e=!0){if("runningMode"in n){var t=this.J=!!n.runningMode&&n.runningMode!=="IMAGE";Ge(this.baseOptions,2,t==null?t:yh(t))}if(n.canvas!==void 0&&this.g.i.canvas!==n.canvas)throw Error("You must create a new task to reset the canvas.");return super.j(n,e)}close(){this.da.close(),super.close()}};qn.prototype.close=qn.prototype.close;var ei=class extends qn{constructor(n,e){super(new xi(n,e),"image_in","norm_rect_in",!1),this.l={detections:[]},Ue(n=this.h=new tu,0,1,e=new Ft),Fe(this.h,2,.5),Fe(this.h,3,.3)}C(){return"FaceDetector"}get baseOptions(){return ut(this.h,Ft,1)}set baseOptions(n){Ue(this.h,0,1,n)}v(n){return"minDetectionConfidence"in n&&Fe(this.h,2,n.minDetectionConfidence??.5),"minSuppressionThreshold"in n&&Fe(this.h,3,n.minSuppressionThreshold??.3),this.j(n)}G(n,e){return this.l={detections:[]},vi(this,n,e),this.l}H(n,e,t){return this.l={detections:[]},qi(this,n,t,e),this.l}o(){var n=new Kn;Dt(n,"image_in"),Dt(n,"norm_rect_in"),pt(n,"detections");var e=new Yn;Xi(e,Qw,this.h);var t=new Fn;$n(t,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Pt(t,"IMAGE:image_in"),Pt(t,"NORM_RECT:norm_rect_in"),at(t,"DETECTIONS:detections"),t.v(e),ai(n,t),this.g.attachProtoVectorListener("detections",(i,s)=>{for(let r of i)i=Dv(r),this.l.detections.push(r1(i));Se(this,s)}),this.g.attachEmptyPacketListener("detections",i=>{Se(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};ei.prototype.detectForVideo=ei.prototype.H,ei.prototype.detect=ei.prototype.G,ei.prototype.setOptions=ei.prototype.v,ei.createFromModelPath=async function(n,e){return ct(ei,n,{baseOptions:{modelAssetPath:e}})},ei.createFromModelBuffer=function(n,e){return ct(ei,n,{baseOptions:{modelAssetBuffer:e}})},ei.createFromOptions=function(n,e){return ct(ei,n,e)};var bp=gi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Mp=gi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Sp=gi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),v1=gi([474,475],[475,476],[476,477],[477,474]),wp=gi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Ep=gi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),y1=gi([469,470],[470,471],[471,472],[472,469]),Ap=gi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),_1=[...bp,...Mp,...Sp,...wp,...Ep,...Ap],b1=gi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function K0(n){n.l={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var ht=class extends qn{constructor(n,e){super(new xi(n,e),"image_in","norm_rect",!1),this.l={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Ue(n=this.h=new Vv,0,1,e=new Ft),this.B=new zv,Ue(this.h,0,3,this.B),this.u=new tu,Ue(this.h,0,2,this.u),Hi(this.u,4,1),Fe(this.u,2,.5),Fe(this.B,2,.5),Fe(this.h,4,.5)}C(){return"FaceLandmarker"}get baseOptions(){return ut(this.h,Ft,1)}set baseOptions(n){Ue(this.h,0,1,n)}v(n){return"numFaces"in n&&Hi(this.u,4,n.numFaces??1),"minFaceDetectionConfidence"in n&&Fe(this.u,2,n.minFaceDetectionConfidence??.5),"minTrackingConfidence"in n&&Fe(this.h,4,n.minTrackingConfidence??.5),"minFacePresenceConfidence"in n&&Fe(this.B,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in n&&(this.outputFacialTransformationMatrixes=!!n.outputFacialTransformationMatrixes),this.j(n)}G(n,e){return K0(this),vi(this,n,e),this.l}H(n,e,t){return K0(this),qi(this,n,t,e),this.l}o(){var n=new Kn;Dt(n,"image_in"),Dt(n,"norm_rect"),pt(n,"face_landmarks");var e=new Yn;Xi(e,t3,this.h);var t=new Fn;$n(t,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Pt(t,"IMAGE:image_in"),Pt(t,"NORM_RECT:norm_rect"),at(t,"NORM_LANDMARKS:face_landmarks"),t.v(e),ai(n,t),this.g.attachProtoVectorListener("face_landmarks",(i,s)=>{for(let r of i)i=Ho(r),this.l.faceLandmarks.push(nu(i));Se(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{Se(this,i)}),this.outputFaceBlendshapes&&(pt(n,"blendshapes"),at(t,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,s)=>{if(this.outputFaceBlendshapes)for(let r of i)i=eu(r),this.l.faceBlendshapes.push(mp(i.g()??[]));Se(this,s)}),this.g.attachEmptyPacketListener("blendshapes",i=>{Se(this,i)})),this.outputFacialTransformationMatrixes&&(pt(n,"face_geometry"),at(t,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,s)=>{if(this.outputFacialTransformationMatrixes)for(let r of i)(i=ut(i=e3(r),Ww,2))&&this.l.facialTransformationMatrixes.push({rows:ii(i,1)??0??0,columns:ii(i,2)??0??0,data:pr(i,3,mi,fr()).slice()??[]});Se(this,s)}),this.g.attachEmptyPacketListener("face_geometry",i=>{Se(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};ht.prototype.detectForVideo=ht.prototype.H,ht.prototype.detect=ht.prototype.G,ht.prototype.setOptions=ht.prototype.v,ht.createFromModelPath=function(n,e){return ct(ht,n,{baseOptions:{modelAssetPath:e}})},ht.createFromModelBuffer=function(n,e){return ct(ht,n,{baseOptions:{modelAssetBuffer:e}})},ht.createFromOptions=function(n,e){return ct(ht,n,e)},ht.FACE_LANDMARKS_LIPS=bp,It("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LIPS",ht.FACE_LANDMARKS_LIPS),ht.FACE_LANDMARKS_LEFT_EYE=Mp,It("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYE",ht.FACE_LANDMARKS_LEFT_EYE),ht.FACE_LANDMARKS_LEFT_EYEBROW=Sp,It("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",ht.FACE_LANDMARKS_LEFT_EYEBROW),ht.FACE_LANDMARKS_LEFT_IRIS=v1,It("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS",ht.FACE_LANDMARKS_LEFT_IRIS),ht.FACE_LANDMARKS_RIGHT_EYE=wp,It("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE",ht.FACE_LANDMARKS_RIGHT_EYE),ht.FACE_LANDMARKS_RIGHT_EYEBROW=Ep,It("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",ht.FACE_LANDMARKS_RIGHT_EYEBROW),ht.FACE_LANDMARKS_RIGHT_IRIS=y1,It("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS",ht.FACE_LANDMARKS_RIGHT_IRIS),ht.FACE_LANDMARKS_FACE_OVAL=Ap,It("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_FACE_OVAL",ht.FACE_LANDMARKS_FACE_OVAL),ht.FACE_LANDMARKS_CONTOURS=_1,It("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_CONTOURS",ht.FACE_LANDMARKS_CONTOURS),ht.FACE_LANDMARKS_TESSELATION=b1,It("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_TESSELATION",ht.FACE_LANDMARKS_TESSELATION);var Tp=gi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Z0(n){n.gestures=[],n.landmarks=[],n.worldLandmarks=[],n.handedness=[]}function j0(n){return n.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:n.gestures,landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handedness:n.handedness,handednesses:n.handedness}}function J0(n,e=!0){var t=[];for(let s of n){var i=eu(s);n=[];for(let r of i.g())i=e&&ii(r,1)!=null?ii(r,1)??0:-1,n.push({score:Xt(r,2)??0,index:i,categoryName:fn(zt(r,3))??""??"",displayName:fn(zt(r,4))??""??""});t.push(n)}return t}var In=class extends qn{constructor(n,e){super(new xi(n,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ue(n=this.l=new Wv,0,1,e=new Ft),this.u=new up,Ue(this.l,0,2,this.u),this.F=new hp,Ue(this.u,0,3,this.F),this.B=new Gv,Ue(this.u,0,2,this.B),this.h=new n3,Ue(this.l,0,3,this.h),Fe(this.B,2,.5),Fe(this.u,4,.5),Fe(this.F,2,.5)}C(){return"GestureRecognizer"}get baseOptions(){return ut(this.l,Ft,1)}set baseOptions(n){Ue(this.l,0,1,n)}v(n){if(Hi(this.B,3,n.numHands??1),"minHandDetectionConfidence"in n&&Fe(this.B,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&Fe(this.u,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&Fe(this.F,2,n.minHandPresenceConfidence??.5),n.cannedGesturesClassifierOptions){var e=new ra,t=e,i=gf(n.cannedGesturesClassifierOptions,ut(this.h,ra,3)?.j());Ue(t,0,2,i),Ue(this.h,0,3,e)}else n.cannedGesturesClassifierOptions===void 0&&ut(this.h,ra,3)?.g();return n.customGesturesClassifierOptions?(Ue(t=e=new ra,0,2,i=gf(n.customGesturesClassifierOptions,ut(this.h,ra,4)?.j())),Ue(this.h,0,4,e)):n.customGesturesClassifierOptions===void 0&&ut(this.h,ra,4)?.g(),this.j(n)}Xa(n,e){return Z0(this),vi(this,n,e),j0(this)}Ya(n,e,t){return Z0(this),qi(this,n,t,e),j0(this)}o(){var n=new Kn;Dt(n,"image_in"),Dt(n,"norm_rect"),pt(n,"hand_gestures"),pt(n,"hand_landmarks"),pt(n,"world_hand_landmarks"),pt(n,"handedness");var e=new Yn;Xi(e,i3,this.l);var t=new Fn;$n(t,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Pt(t,"IMAGE:image_in"),Pt(t,"NORM_RECT:norm_rect"),at(t,"HAND_GESTURES:hand_gestures"),at(t,"LANDMARKS:hand_landmarks"),at(t,"WORLD_LANDMARKS:world_hand_landmarks"),at(t,"HANDEDNESS:handedness"),t.v(e),ai(n,t),this.g.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(let r of i){i=Ho(r);let a=[];for(let o of hs(i,Uv,1))a.push({x:Xt(o,1)??0,y:Xt(o,2)??0,z:Xt(o,3)??0,visibility:Xt(o,4)??0});this.landmarks.push(a)}Se(this,s)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{Se(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(let r of i){i=la(r);let a=[];for(let o of hs(i,Fv,1))a.push({x:Xt(o,1)??0,y:Xt(o,2)??0,z:Xt(o,3)??0,visibility:Xt(o,4)??0});this.worldLandmarks.push(a)}Se(this,s)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{Se(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,s)=>{this.gestures.push(...J0(i,!1)),Se(this,s)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{Se(this,i)}),this.g.attachProtoVectorListener("handedness",(i,s)=>{this.handedness.push(...J0(i)),Se(this,s)}),this.g.attachEmptyPacketListener("handedness",i=>{Se(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};function Q0(n){return{landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handednesses:n.handedness,handedness:n.handedness}}In.prototype.recognizeForVideo=In.prototype.Ya,In.prototype.recognize=In.prototype.Xa,In.prototype.setOptions=In.prototype.v,In.createFromModelPath=function(n,e){return ct(In,n,{baseOptions:{modelAssetPath:e}})},In.createFromModelBuffer=function(n,e){return ct(In,n,{baseOptions:{modelAssetBuffer:e}})},In.createFromOptions=function(n,e){return ct(In,n,e)},In.HAND_CONNECTIONS=Tp,It("module$exports$google3$third_party$mediapipe$tasks$web$vision$gesture_recognizer$gesture_recognizer.GestureRecognizer.HAND_CONNECTIONS",In.HAND_CONNECTIONS);var _n=class extends qn{constructor(n,e){super(new xi(n,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ue(n=this.h=new up,0,1,e=new Ft),this.u=new hp,Ue(this.h,0,3,this.u),this.l=new Gv,Ue(this.h,0,2,this.l),Hi(this.l,3,1),Fe(this.l,2,.5),Fe(this.u,2,.5),Fe(this.h,4,.5)}C(){return"HandLandmarker"}get baseOptions(){return ut(this.h,Ft,1)}set baseOptions(n){Ue(this.h,0,1,n)}v(n){return"numHands"in n&&Hi(this.l,3,n.numHands??1),"minHandDetectionConfidence"in n&&Fe(this.l,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&Fe(this.h,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&Fe(this.u,2,n.minHandPresenceConfidence??.5),this.j(n)}G(n,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],vi(this,n,e),Q0(this)}H(n,e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],qi(this,n,t,e),Q0(this)}o(){var n=new Kn;Dt(n,"image_in"),Dt(n,"norm_rect"),pt(n,"hand_landmarks"),pt(n,"world_hand_landmarks"),pt(n,"handedness");var e=new Yn;Xi(e,s3,this.h);var t=new Fn;$n(t,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Pt(t,"IMAGE:image_in"),Pt(t,"NORM_RECT:norm_rect"),at(t,"LANDMARKS:hand_landmarks"),at(t,"WORLD_LANDMARKS:world_hand_landmarks"),at(t,"HANDEDNESS:handedness"),t.v(e),ai(n,t),this.g.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(let r of i)i=Ho(r),this.landmarks.push(nu(i));Se(this,s)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{Se(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(let r of i)i=la(r),this.worldLandmarks.push(Eo(i));Se(this,s)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{Se(this,i)}),this.g.attachProtoVectorListener("handedness",(i,s)=>{var r=this.handedness,a=r.push,o=[];for(let l of i){i=eu(l);let c=[];for(let h of i.g())c.push({score:Xt(h,2)??0,index:ii(h,1)??0??-1,categoryName:fn(zt(h,3))??""??"",displayName:fn(zt(h,4))??""??""});o.push(c)}a.call(r,...o),Se(this,s)}),this.g.attachEmptyPacketListener("handedness",i=>{Se(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};_n.prototype.detectForVideo=_n.prototype.H,_n.prototype.detect=_n.prototype.G,_n.prototype.setOptions=_n.prototype.v,_n.createFromModelPath=function(n,e){return ct(_n,n,{baseOptions:{modelAssetPath:e}})},_n.createFromModelBuffer=function(n,e){return ct(_n,n,{baseOptions:{modelAssetBuffer:e}})},_n.createFromOptions=function(n,e){return ct(_n,n,e)},_n.HAND_CONNECTIONS=Tp,It("module$exports$google3$third_party$mediapipe$tasks$web$vision$hand_landmarker$hand_landmarker.HandLandmarker.HAND_CONNECTIONS",_n.HAND_CONNECTIONS);var M1=gi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function ex(n){n.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function tx(n){try{if(!n.F)return n.h;n.F(n.h)}finally{su(n)}}function hh(n,e){n=Ho(n),e.push(nu(n))}var tt=class extends qn{constructor(n,e){super(new xi(n,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Ue(n=this.l=new Kv,0,1,e=new Ft),this.Y=new hp,Ue(this.l,0,2,this.Y),this.Aa=new r3,Ue(this.l,0,3,this.Aa),this.u=new tu,Ue(this.l,0,4,this.u),this.O=new zv,Ue(this.l,0,5,this.O),this.B=new qv,Ue(this.l,0,6,this.B),this.Z=new Yv,Ue(this.l,0,7,this.Z),Fe(this.u,2,.5),Fe(this.u,3,.3),Fe(this.O,2,.5),Fe(this.B,2,.5),Fe(this.B,3,.3),Fe(this.Z,2,.5),Fe(this.Y,2,.5)}C(){return"HolisticLandmarker"}get baseOptions(){return ut(this.l,Ft,1)}set baseOptions(n){Ue(this.l,0,1,n)}v(n){return"minFaceDetectionConfidence"in n&&Fe(this.u,2,n.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in n&&Fe(this.u,3,n.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in n&&Fe(this.O,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"minPoseDetectionConfidence"in n&&Fe(this.B,2,n.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in n&&Fe(this.B,3,n.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in n&&Fe(this.Z,2,n.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in n&&(this.outputPoseSegmentationMasks=!!n.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in n&&Fe(this.Y,2,n.minHandLandmarksConfidence??.5),this.j(n)}G(n,e,t){var i=typeof e!="function"?e:{};return this.F=typeof e=="function"?e:t,ex(this),vi(this,n,i),tx(this)}H(n,e,t,i){var s=typeof t!="function"?t:{};return this.F=typeof t=="function"?t:i,ex(this),qi(this,n,s,e),tx(this)}o(){var n=new Kn;Dt(n,"input_frames_image"),pt(n,"pose_landmarks"),pt(n,"pose_world_landmarks"),pt(n,"face_landmarks"),pt(n,"left_hand_landmarks"),pt(n,"left_hand_world_landmarks"),pt(n,"right_hand_landmarks"),pt(n,"right_hand_world_landmarks");var e=new Yn,t=new u0;$n(t,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(s,r){if(r!=null)if(Array.isArray(r))Ge(s,2,Hh(r,0,Co));else{if(!(typeof r=="string"||r instanceof Bi||Cf(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Uo(s,2,Oh(r,!1),br())}})(t,this.l.g());var i=new Fn;$n(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Ro(i,8,u0,t),Pt(i,"IMAGE:input_frames_image"),at(i,"POSE_LANDMARKS:pose_landmarks"),at(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),at(i,"FACE_LANDMARKS:face_landmarks"),at(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),at(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),at(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),at(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.v(e),ai(n,i),iu(this,n),this.g.attachProtoListener("pose_landmarks",(s,r)=>{hh(s,this.h.poseLandmarks),Se(this,r)}),this.g.attachEmptyPacketListener("pose_landmarks",s=>{Se(this,s)}),this.g.attachProtoListener("pose_world_landmarks",(s,r)=>{var a=this.h.poseWorldLandmarks;s=la(s),a.push(Eo(s)),Se(this,r)}),this.g.attachEmptyPacketListener("pose_world_landmarks",s=>{Se(this,s)}),this.outputPoseSegmentationMasks&&(at(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),ga(this,"pose_segmentation_mask"),this.g.ga("pose_segmentation_mask",(s,r)=>{this.h.poseSegmentationMasks=[ya(this,s,!0,!this.F)],Se(this,r)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",s=>{this.h.poseSegmentationMasks=[],Se(this,s)})),this.g.attachProtoListener("face_landmarks",(s,r)=>{hh(s,this.h.faceLandmarks),Se(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",s=>{Se(this,s)}),this.outputFaceBlendshapes&&(pt(n,"extra_blendshapes"),at(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(s,r)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(s=eu(s),a.push(mp(s.g()??[]))),Se(this,r)}),this.g.attachEmptyPacketListener("extra_blendshapes",s=>{Se(this,s)})),this.g.attachProtoListener("left_hand_landmarks",(s,r)=>{hh(s,this.h.leftHandLandmarks),Se(this,r)}),this.g.attachEmptyPacketListener("left_hand_landmarks",s=>{Se(this,s)}),this.g.attachProtoListener("left_hand_world_landmarks",(s,r)=>{var a=this.h.leftHandWorldLandmarks;s=la(s),a.push(Eo(s)),Se(this,r)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",s=>{Se(this,s)}),this.g.attachProtoListener("right_hand_landmarks",(s,r)=>{hh(s,this.h.rightHandLandmarks),Se(this,r)}),this.g.attachEmptyPacketListener("right_hand_landmarks",s=>{Se(this,s)}),this.g.attachProtoListener("right_hand_world_landmarks",(s,r)=>{var a=this.h.rightHandWorldLandmarks;s=la(s),a.push(Eo(s)),Se(this,r)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",s=>{Se(this,s)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};tt.prototype.detectForVideo=tt.prototype.H,tt.prototype.detect=tt.prototype.G,tt.prototype.setOptions=tt.prototype.v,tt.createFromModelPath=function(n,e){return ct(tt,n,{baseOptions:{modelAssetPath:e}})},tt.createFromModelBuffer=function(n,e){return ct(tt,n,{baseOptions:{modelAssetBuffer:e}})},tt.createFromOptions=function(n,e){return ct(tt,n,e)},tt.HAND_CONNECTIONS=Tp,It("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.HAND_CONNECTIONS",tt.HAND_CONNECTIONS),tt.POSE_CONNECTIONS=M1,It("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.POSE_CONNECTIONS",tt.POSE_CONNECTIONS),tt.FACE_LANDMARKS_LIPS=bp,It("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LIPS",tt.FACE_LANDMARKS_LIPS),tt.FACE_LANDMARKS_LEFT_EYE=Mp,It("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYE",tt.FACE_LANDMARKS_LEFT_EYE),tt.FACE_LANDMARKS_LEFT_EYEBROW=Sp,It("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",tt.FACE_LANDMARKS_LEFT_EYEBROW),tt.FACE_LANDMARKS_LEFT_IRIS=v1,It("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_IRIS",tt.FACE_LANDMARKS_LEFT_IRIS),tt.FACE_LANDMARKS_RIGHT_EYE=wp,It("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYE",tt.FACE_LANDMARKS_RIGHT_EYE),tt.FACE_LANDMARKS_RIGHT_EYEBROW=Ep,It("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",tt.FACE_LANDMARKS_RIGHT_EYEBROW),tt.FACE_LANDMARKS_RIGHT_IRIS=y1,It("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_IRIS",tt.FACE_LANDMARKS_RIGHT_IRIS),tt.FACE_LANDMARKS_FACE_OVAL=Ap,It("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_FACE_OVAL",tt.FACE_LANDMARKS_FACE_OVAL),tt.FACE_LANDMARKS_CONTOURS=_1,It("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_CONTOURS",tt.FACE_LANDMARKS_CONTOURS),tt.FACE_LANDMARKS_TESSELATION=b1,It("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_TESSELATION",tt.FACE_LANDMARKS_TESSELATION);var ti=class extends qn{constructor(n,e){super(new xi(n,e),"input_image","norm_rect",!0),this.l={classifications:[]},Ue(n=this.h=new Zv,0,1,e=new Ft)}C(){return"ImageClassifier"}get baseOptions(){return ut(this.h,Ft,1)}set baseOptions(n){Ue(this.h,0,1,n)}v(n){return Ue(this.h,0,2,gf(n,ut(this.h,lp,2))),this.j(n)}Ga(n,e){return this.l={classifications:[]},vi(this,n,e),this.l}Ha(n,e,t){return this.l={classifications:[]},qi(this,n,t,e),this.l}o(){var n=new Kn;Dt(n,"input_image"),Dt(n,"norm_rect"),pt(n,"classifications");var e=new Yn;Xi(e,a3,this.h);var t=new Fn;$n(t,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Pt(t,"IMAGE:input_image"),Pt(t,"NORM_RECT:norm_rect"),at(t,"CLASSIFICATIONS:classifications"),t.v(e),ai(n,t),this.g.attachProtoListener("classifications",(i,s)=>{this.l=g3(qw(i)),Se(this,s)}),this.g.attachEmptyPacketListener("classifications",i=>{Se(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};ti.prototype.classifyForVideo=ti.prototype.Ha,ti.prototype.classify=ti.prototype.Ga,ti.prototype.setOptions=ti.prototype.v,ti.createFromModelPath=function(n,e){return ct(ti,n,{baseOptions:{modelAssetPath:e}})},ti.createFromModelBuffer=function(n,e){return ct(ti,n,{baseOptions:{modelAssetBuffer:e}})},ti.createFromOptions=function(n,e){return ct(ti,n,e)};var Wn=class extends qn{constructor(n,e){super(new xi(n,e),"image_in","norm_rect",!0),this.h=new jv,this.embeddings={embeddings:[]},Ue(n=this.h,0,1,e=new Ft)}C(){return"ImageEmbedder"}get baseOptions(){return ut(this.h,Ft,1)}set baseOptions(n){Ue(this.h,0,1,n)}v(n){var e=this.h,t=ut(this.h,_0,2);if(t=t?t.clone():new _0,n.l2Normalize!==void 0){var i=n.l2Normalize;Ge(t,1,i==null?i:yh(i))}else"l2Normalize"in n&&Ge(t,1);return n.quantize!==void 0?Ge(t,2,(i=n.quantize)==null?i:yh(i)):"quantize"in n&&Ge(t,2),Ue(e,0,2,t),this.j(n)}Na(n,e){return vi(this,n,e),this.embeddings}Oa(n,e,t){return qi(this,n,t,e),this.embeddings}o(){var n=new Kn;Dt(n,"image_in"),Dt(n,"norm_rect"),pt(n,"embeddings_out");var e=new Yn;Xi(e,o3,this.h);var t=new Fn;$n(t,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Pt(t,"IMAGE:image_in"),Pt(t,"NORM_RECT:norm_rect"),at(t,"EMBEDDINGS:embeddings_out"),t.v(e),ai(n,t),this.g.attachProtoListener("embeddings_out",(i,s)=>{i=Zw(i),this.embeddings=(function(r){return{embeddings:hs(r,Kw,1).map(a=>{var o={headIndex:ii(a,3)??0??-1,headName:fn(zt(a,4))??""??""};if(Ux(a,y0,1,op))a=pr(a=e0(a,y0,1),1,mi,fr()),o.floatEmbedding=a.slice();else{let l=new Uint8Array(0);o.quantizedEmbedding=e0(a,Yw,2)?.g()?.h()??l}return o}),timestampMs:s1(zt(r,2,void 0,bh)??Fx)}})(i),Se(this,s)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{Se(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Wn.cosineSimilarity=function(n,e){if(n.floatEmbedding&&e.floatEmbedding)n=E0(n.floatEmbedding,e.floatEmbedding);else{if(!n.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");n=E0(w0(n.quantizedEmbedding),w0(e.quantizedEmbedding))}return n},Wn.prototype.embedForVideo=Wn.prototype.Oa,Wn.prototype.embed=Wn.prototype.Na,Wn.prototype.setOptions=Wn.prototype.v,Wn.createFromModelPath=function(n,e){return ct(Wn,n,{baseOptions:{modelAssetPath:e}})},Wn.createFromModelBuffer=function(n,e){return ct(Wn,n,{baseOptions:{modelAssetBuffer:e}})},Wn.createFromOptions=function(n,e){return ct(Wn,n,e)};var Ef=class{constructor(n,e,t){this.confidenceMasks=n,this.categoryMask=e,this.qualityScores=t}close(){this.confidenceMasks?.forEach(n=>{n.close()}),this.categoryMask?.close()}};function F3(n){var e=(function(t){return hs(t,Fn,1)})(n.ja()).filter(t=>(fn(zt(t,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(n.u=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(ut(e[0],Yn,7)?.o()?.g()??new Map).forEach((t,i)=>{n.u[Number(i)]=fn(zt(t,1))??""})}function nx(n){n.categoryMask=void 0,n.confidenceMasks=void 0,n.qualityScores=void 0}function ix(n){try{let e=new Ef(n.confidenceMasks,n.categoryMask,n.qualityScores);if(!n.l)return e;n.l(e)}finally{su(n)}}Ef.prototype.close=Ef.prototype.close;var Pn=class extends qn{constructor(n,e){super(new xi(n,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new pp,this.B=new Jv,Ue(this.h,0,3,this.B),Ue(n=this.h,0,1,e=new Ft)}C(){return"ImageSegmenter"}get baseOptions(){return ut(this.h,Ft,1)}set baseOptions(n){Ue(this.h,0,1,n)}v(n){return n.displayNamesLocale!==void 0?Ge(this.h,2,rs(n.displayNamesLocale)):"displayNamesLocale"in n&&Ge(this.h,2),"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.j(n)}L(){F3(this)}segment(n,e,t){var i=typeof e!="function"?e:{};return this.l=typeof e=="function"?e:t,nx(this),vi(this,n,i),ix(this)}eb(n,e,t,i){var s=typeof t!="function"?t:{};return this.l=typeof t=="function"?t:i,nx(this),qi(this,n,s,e),ix(this)}Ra(){return this.u}o(){var n=new Kn;Dt(n,"image_in"),Dt(n,"norm_rect");var e=new Yn;Xi(e,e1,this.h);var t=new Fn;$n(t,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Pt(t,"IMAGE:image_in"),Pt(t,"NORM_RECT:norm_rect"),t.v(e),ai(n,t),iu(this,n),this.outputConfidenceMasks&&(pt(n,"confidence_masks"),at(t,"CONFIDENCE_MASKS:confidence_masks"),ga(this,"confidence_masks"),this.g.ha("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>ya(this,r,!0,!this.l)),Se(this,s)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],Se(this,i)})),this.outputCategoryMask&&(pt(n,"category_mask"),at(t,"CATEGORY_MASK:category_mask"),ga(this,"category_mask"),this.g.ga("category_mask",(i,s)=>{this.categoryMask=ya(this,i,!1,!this.l),Se(this,s)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,Se(this,i)})),pt(n,"quality_scores"),at(t,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,Se(this,s)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,Se(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Pn.prototype.getLabels=Pn.prototype.Ra,Pn.prototype.segmentForVideo=Pn.prototype.eb,Pn.prototype.segment=Pn.prototype.segment,Pn.prototype.setOptions=Pn.prototype.v,Pn.createFromModelPath=function(n,e){return ct(Pn,n,{baseOptions:{modelAssetPath:e}})},Pn.createFromModelBuffer=function(n,e){return ct(Pn,n,{baseOptions:{modelAssetBuffer:e}})},Pn.createFromOptions=function(n,e){return ct(Pn,n,e)};var U3={0:0,1:1,2:2,3:3};function ef(){return gp()?void 0:document.createElement("canvas")}var Ln=class extends Fh{constructor(n,e){super(new R3(n,e)),this.u=new Cr,this.delegate="CPU",this.h=0,this.baseOptions=new Ft,this.B=this.l=0}C(){return"InteractiveSegmenter"}get i(){return this.g.i}v(n){return this.delegate=n.baseOptions?.delegate??"CPU",super.j(n)}fb(n){if(this.h===0)throw Error("Segmenter is not initialized.");var e;if(this.l!==0&&(this.i._free(this.l),this.l=0),!(e=typeof ImageData<"u"&&n instanceof ImageData))if(typeof n!="object"||n===null)e=!1;else{e=n.data;var t=n.width,i=n.height;e=Number.isInteger(t)&&t>0&&Number.isInteger(i)&&i>0&&(e instanceof Uint8ClampedArray||e instanceof Uint8Array)}if(e)e=n.width,t=n.height,n=n.data;else{if([e,t]=xp(n),typeof OffscreenCanvas<"u")i=new OffscreenCanvas(e,t);else{if(typeof document>"u")throw Error("Canvas is not supported in this environment.");i=document.createElement("canvas")}if(i.width=e,i.height=t,!(i=i.getContext("2d")))throw Error("Canvas 2D context is not supported in this environment.");i.drawImage(n,0,0),n=i.getImageData(0,0,e,t).data}if(!n)throw Error("Unsupported image source or failed to extract image pixels.");i=(function({Wa:r,width:a,height:o}){if(a<=0||o<=0)throw Error(`Invalid image dimensions: ${a}x${o}. Dimensions must be positive.`);if(r%(a*o)!==0)throw Error(`Invalid image dimensions or pixel data length. Pixel data length ${r} is not a multiple of the number of pixels (${a*o}).`);if((r/=a*o)!==4&&r!==3&&r!==1)throw Error(`Invalid image dimensions or pixel data length. Calculated channels: ${r}. Expected 1, 3, or 4.`);return r})({Wa:n.length,width:e,height:t});var s=this.i._malloc(n.length);if(this.i.HEAPU8.set(n,s),this.l=s,!this.i._interactive_segmenter_set_image(this.h,s,e,t,i))throw Error("Failed to set image on native engine.")}segment(n){if(this.h===0)throw Error("Segmenter is not initialized.");var e=(function(h){h=h.map(({isCompleted:u,brushMode:f,point:g})=>{f=U3[f]??0,g=g.map(({x:p,y:m})=>{var A=new c3;return aa(A,1,p),aa(A,2,m),A});var x=new h3;return cf(x,u),Uo(x,1,as(f),0),lf(x,2,g),x});var d=new u3;return lf(d,1,h),d3(d)})(n);n=this.i._malloc(e.length),this.i.HEAPU8.set(e,n);var t=this.i._malloc(12),i=t+4,s=t+8,r=0,a=this.B++;try{if(this.m)if(this.delegate==="GPU"){var o=this.m;++o.g.T,o.h.set(a,performance.now())}else{var l=this.m;++l.g.P,l.h.set(a,performance.now())}if((r=this.i._interactive_segmenter_segment(this.h,n,e.length,t,i,s))===0)throw Error("Segmentation failed.");this.m?.za(a);let h=this.i.HEAPU32[t/4],d=this.i.HEAPU32[i/4],u=new Float32Array(this.i.HEAPU8.buffer,r,this.i.HEAPU32[s/4]/4);var c=new Float32Array(u);if(o=h*d,(c instanceof Uint8Array||c instanceof Float32Array)&&c.length!==o)throw Error("Unsupported channel count: "+c.length/o);return new jt([c],!0,!1,this.g.i.canvas??void 0,this.u,h,d)}finally{n!==0&&this.i._free(n),t!==0&&this.i._free(t),r!==0&&this.i._free(r)}}o(){this.h!==0&&(this.m?.xa(),this.i._interactive_segmenter_close(this.h),this.h=0),this.l!==0&&(this.i._free(this.l),this.l=0);var n=new Ph;if(this.delegate==="GPU"){var e=new ap;Vi(n,2,yr,e)}else Hi(e=new Bw,1,4),Vi(n,1,yr,e);if(Ue(this.baseOptions,0,3,n),n=Jw(this.baseOptions),e=this.i._malloc(n.length),this.i.HEAPU8.set(n,e),this.h=this.i._interactive_segmenter_create(e,n.length),this.i._free(e),this.h===0)throw Error("Failed to create native InteractiveSegmenter engine.");this.m?.ya()}close(){this.h!==0&&(this.i._interactive_segmenter_close(this.h),this.h=0),this.l!==0&&(this.i._free(this.l),this.l=0),this.u.close(),super.close()}};Ln.prototype.close=Ln.prototype.close,Ln.prototype.segment=Ln.prototype.segment,Ln.prototype.setImage=Ln.prototype.fb,Ln.prototype.setOptions=Ln.prototype.v,Ln.createFromModelPath=function(n,e){return mh(Ln,ef(),n,{baseOptions:{modelAssetPath:e}})},Ln.createFromModelBuffer=function(n,e){return mh(Ln,ef(),n,{baseOptions:{modelAssetBuffer:e}})},Ln.createFromOptions=function(n,e){var t=e.canvas??ef();return mh(Ln,t,n,e)};var Af=class{constructor(n,e,t){this.confidenceMasks=n,this.categoryMask=e,this.qualityScores=t}close(){this.confidenceMasks?.forEach(n=>{n.close()}),this.categoryMask?.close()}};Af.prototype.close=Af.prototype.close;var Ui=class extends qn{constructor(n,e){super(new xi(n,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new pp,this.u=new Jv,Ue(this.h,0,3,this.u),Ue(n=this.h,0,1,e=new Ft)}C(){return"InteractiveSegmenterLegacy"}get baseOptions(){return ut(this.h,Ft,1)}set baseOptions(n){Ue(this.h,0,1,n)}v(n){return"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.j(n)}segment(n,e,t,i){var s=typeof t!="function"?t:{};if(this.l=typeof t=="function"?t:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,t=this.I+1,i=new t1,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var r=new jd;cf(r,!0),aa(r,1,e.keypoint.x),aa(r,2,e.keypoint.y),Vi(i,1,mf,r)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{let o=new f3;for(r of e.scribble)cf(e=new jd,!0),aa(e,1,r.x),aa(e,2,r.y),Ro(o,1,jd,e);Vi(i,2,mf,o)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter_legacy.proto.RegionOfInterest","roi_in",t),vi(this,n,s);e:{try{let o=new Af(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.l){var a=o;break e}this.l(o)}finally{su(this)}a=void 0}return a}o(){var n=new Kn;Dt(n,"image_in"),Dt(n,"roi_in"),Dt(n,"norm_rect_in");var e=new Yn;Xi(e,e1,this.h);var t=new Fn;$n(t,2,"mediapipe.tasks.vision.interactive_segmenter_legacy.InteractiveSegmenterGraphV2"),Pt(t,"IMAGE:image_in"),Pt(t,"ROI:roi_in"),Pt(t,"NORM_RECT:norm_rect_in"),t.v(e),ai(n,t),iu(this,n),this.outputConfidenceMasks&&(pt(n,"confidence_masks"),at(t,"CONFIDENCE_MASKS:confidence_masks"),ga(this,"confidence_masks"),this.g.ha("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>ya(this,r,!0,!this.l)),Se(this,s)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],Se(this,i)})),this.outputCategoryMask&&(pt(n,"category_mask"),at(t,"CATEGORY_MASK:category_mask"),ga(this,"category_mask"),this.g.ga("category_mask",(i,s)=>{this.categoryMask=ya(this,i,!1,!this.l),Se(this,s)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,Se(this,i)})),pt(n,"quality_scores"),at(t,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,Se(this,s)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,Se(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Ui.prototype.segment=Ui.prototype.segment,Ui.prototype.setOptions=Ui.prototype.v,Ui.createFromModelPath=function(n,e){return ct(Ui,n,{baseOptions:{modelAssetPath:e}})},Ui.createFromModelBuffer=function(n,e){return ct(Ui,n,{baseOptions:{modelAssetBuffer:e}})},Ui.createFromOptions=function(n,e){return ct(Ui,n,e)};var ni=class extends qn{constructor(n,e){super(new xi(n,e),"input_frame_gpu","norm_rect",!1),this.l={detections:[]},Ue(n=this.h=new n1,0,1,e=new Ft)}C(){return"ObjectDetector"}get baseOptions(){return ut(this.h,Ft,1)}set baseOptions(n){Ue(this.h,0,1,n)}v(n){return n.displayNamesLocale!==void 0?Ge(this.h,2,rs(n.displayNamesLocale)):"displayNamesLocale"in n&&Ge(this.h,2),n.maxResults!==void 0?Hi(this.h,3,n.maxResults):"maxResults"in n&&Ge(this.h,3),n.scoreThreshold!==void 0?Fe(this.h,4,n.scoreThreshold):"scoreThreshold"in n&&Ge(this.h,4),n.categoryAllowlist!==void 0?Sh(this.h,5,n.categoryAllowlist):"categoryAllowlist"in n&&Ge(this.h,5),n.categoryDenylist!==void 0?Sh(this.h,6,n.categoryDenylist):"categoryDenylist"in n&&Ge(this.h,6),this.j(n)}G(n,e){return this.l={detections:[]},vi(this,n,e),this.l}H(n,e,t){return this.l={detections:[]},qi(this,n,t,e),this.l}o(){var n=new Kn;Dt(n,"input_frame_gpu"),Dt(n,"norm_rect"),pt(n,"detections");var e=new Yn;Xi(e,p3,this.h);var t=new Fn;$n(t,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Pt(t,"IMAGE:input_frame_gpu"),Pt(t,"NORM_RECT:norm_rect"),at(t,"DETECTIONS:detections"),t.v(e),ai(n,t),this.g.attachProtoVectorListener("detections",(i,s)=>{for(let r of i)i=Dv(r),this.l.detections.push(r1(i));Se(this,s)}),this.g.attachEmptyPacketListener("detections",i=>{Se(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};ni.prototype.detectForVideo=ni.prototype.H,ni.prototype.detect=ni.prototype.G,ni.prototype.setOptions=ni.prototype.v,ni.createFromModelPath=async function(n,e){return ct(ni,n,{baseOptions:{modelAssetPath:e}})},ni.createFromModelBuffer=function(n,e){return ct(ni,n,{baseOptions:{modelAssetBuffer:e}})},ni.createFromOptions=function(n,e){return ct(ni,n,e)};var Tf=class{constructor(n,e,t){this.landmarks=n,this.worldLandmarks=e,this.segmentationMasks=t}close(){this.segmentationMasks?.forEach(n=>{n.close()})}};function sx(n){n.landmarks=[],n.worldLandmarks=[],n.segmentationMasks=void 0}function rx(n){try{let e=new Tf(n.landmarks,n.worldLandmarks,n.segmentationMasks);if(!n.u)return e;n.u(e)}finally{su(n)}}Tf.prototype.close=Tf.prototype.close;var Nn=class extends qn{constructor(n,e){super(new xi(n,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Ue(n=this.h=new i1,0,1,e=new Ft),this.B=new Yv,Ue(this.h,0,3,this.B),this.l=new qv,Ue(this.h,0,2,this.l),Hi(this.l,4,1),Fe(this.l,2,.5),Fe(this.B,2,.5),Fe(this.h,4,.5)}C(){return"PoseLandmarker"}get baseOptions(){return ut(this.h,Ft,1)}set baseOptions(n){Ue(this.h,0,1,n)}v(n){return"numPoses"in n&&Hi(this.l,4,n.numPoses??1),"minPoseDetectionConfidence"in n&&Fe(this.l,2,n.minPoseDetectionConfidence??.5),"minTrackingConfidence"in n&&Fe(this.h,4,n.minTrackingConfidence??.5),"minPosePresenceConfidence"in n&&Fe(this.B,2,n.minPosePresenceConfidence??.5),"outputSegmentationMasks"in n&&(this.outputSegmentationMasks=n.outputSegmentationMasks??!1),this.j(n)}G(n,e,t){var i=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:t,sx(this),vi(this,n,i),rx(this)}H(n,e,t,i){var s=typeof t!="function"?t:{};return this.u=typeof t=="function"?t:i,sx(this),qi(this,n,s,e),rx(this)}o(){var n=new Kn;Dt(n,"image_in"),Dt(n,"norm_rect"),pt(n,"normalized_landmarks"),pt(n,"world_landmarks"),pt(n,"segmentation_masks");var e=new Yn;Xi(e,m3,this.h);var t=new Fn;$n(t,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Pt(t,"IMAGE:image_in"),Pt(t,"NORM_RECT:norm_rect"),at(t,"NORM_LANDMARKS:normalized_landmarks"),at(t,"WORLD_LANDMARKS:world_landmarks"),t.v(e),ai(n,t),iu(this,n),this.g.attachProtoVectorListener("normalized_landmarks",(i,s)=>{this.landmarks=[];for(let r of i)i=Ho(r),this.landmarks.push(nu(i));Se(this,s)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],Se(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,s)=>{this.worldLandmarks=[];for(let r of i)i=la(r),this.worldLandmarks.push(Eo(i));Se(this,s)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],Se(this,i)}),this.outputSegmentationMasks&&(at(t,"SEGMENTATION_MASK:segmentation_masks"),ga(this,"segmentation_masks"),this.g.ha("segmentation_masks",(i,s)=>{this.segmentationMasks=i.map(r=>ya(this,r,!0,!this.u)),Se(this,s)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],Se(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Nn.prototype.detectForVideo=Nn.prototype.H,Nn.prototype.detect=Nn.prototype.G,Nn.prototype.setOptions=Nn.prototype.v,Nn.createFromModelPath=function(n,e){return ct(Nn,n,{baseOptions:{modelAssetPath:e}})},Nn.createFromModelBuffer=function(n,e){return ct(Nn,n,{baseOptions:{modelAssetBuffer:e}})},Nn.createFromOptions=function(n,e){return ct(Nn,n,e)},Nn.POSE_CONNECTIONS=M1,It("module$exports$google3$third_party$mediapipe$tasks$web$vision$pose_landmarker$pose_landmarker.PoseLandmarker.POSE_CONNECTIONS",Nn.POSE_CONNECTIONS);var Cp={present:!1,pose:"none",x:.5,y:.5,landmarks:[],confidence:0,extended:0,spreadRatio:0,pinchRatio:0,reach:0},ou=[4,8,12,16,20],O3=[3,6,10,14,18],Ca=(n,e)=>Math.hypot(n.x-e.x,n.y-e.y);function k3(n){if(n.length<21)return{pose:"none",extended:0,spreadRatio:0,pinchRatio:0,reach:0};let e=n[0],t=Math.max(Ca(e,n[9]),1e-4),i=0,s=[];for(let d=0;d<5;d++){let u=Ca(e,n[ou[d]]),f=Ca(e,n[O3[d]]),g=u>f*(d===0?1.06:1.14);s.push(g),g&&i++}let r=0,a=0;for(let d=1;d<5;d++)for(let u=d+1;u<5;u++)r+=Ca(n[ou[d]],n[ou[u]]),a++;let o=r/a/t,l=Ca(n[4],n[8])/t,c=0;for(let d=0;d<5;d++)Ca(e,n[ou[d]])/t>1.5&&c++;let h;return c>=4?h=o>=.62?"spread":"gather":c>=2?h="two":c<=1&&i<=2?h="fist":h="none",{pose:h,extended:i,spreadRatio:o,pinchRatio:l,reach:c}}var lu=class{constructor(e,t,i=3){this.wasmDir=e;this.modelUrl=t;this.holdFrames=i}wasmDir;modelUrl;holdFrames;landmarker=null;video=null;stream=null;raf=0;lastVideoTime=-1;streak=0;held="none";enabled=!1;status="off";sourceLabel="";synthetic=!1;frame=Cp;onFrame=null;get videoEl(){return this.video}async start(e){this.video=e,this.status="starting camera\u2026";try{this.stream=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480},audio:!1})}catch(s){throw this.status=`no camera: ${s.message}`,this.enabled=!1,s}let t=this.stream.getVideoTracks()[0];this.sourceLabel=t?t.label:"",this.synthetic=/^\/|^[A-Za-z]:\\|\.(y4m|mp4|mjpeg|webm)$|fake|synthetic/i.test(this.sourceLabel),e.srcObject=this.stream,await e.play(),this.status="loading model\u2026";let i=await dr.forVisionTasks(this.wasmDir);this.landmarker=await _n.createFromOptions(i,{baseOptions:{modelAssetPath:this.modelUrl,delegate:"CPU"},runningMode:"VIDEO",numHands:1,minHandDetectionConfidence:.35,minHandPresenceConfidence:.35,minTrackingConfidence:.35}),this.enabled=!0,this.status="tracking",this.loop()}stop(){this.enabled=!1,cancelAnimationFrame(this.raf),this.stream?.getTracks().forEach(e=>e.stop()),this.stream=null,this.frame=Cp,this.status="off",this.onFrame?.(this.frame)}step(){let e=this.video;if(!this.landmarker||!e||e.readyState<2)return this.frame;let t=e.currentTime;if(t===this.lastVideoTime)return this.frame;this.lastVideoTime=t;let i=this.landmarker.detectForVideo(e,performance.now()),s=i.landmarks?.[0];if(!s||s.length<21)this.streak=0,this.held="none",this.frame={...Cp};else{let r=k3(s);r.pose===this.held?this.streak++:(this.held=r.pose,this.streak=1);let a=this.streak>=this.holdFrames?this.held:"none",o=s[9];this.frame={present:!0,pose:a,x:o.x,y:o.y,landmarks:s.map(l=>({x:l.x,y:l.y,z:l.z})),confidence:i.handedness?.[0]?.[0]?.score??0,extended:r.extended,spreadRatio:r.spreadRatio,pinchRatio:r.pinchRatio,reach:r.reach}}return this.onFrame?.(this.frame),this.frame}loop=()=>{this.enabled&&(this.step(),this.raf=requestAnimationFrame(this.loop))}};var cu=[{id:"tap",name:"Tap",how:"One finger, tap a node",operation:"Select and inspect the node",span:"selection"},{id:"doubletap",name:"Double-tap",how:"Two quick taps on a node, then on a second node",operation:"Connect the two nodes with a filament",span:"connection"},{id:"longpress",name:"Long-press",how:"Hold half a second on empty space",operation:"Quick-add a node into the holding cluster",span:"capture"},{id:"dragnode",name:"Drag a node",how:"Press a node and drag",operation:"Place it, or move an already-placed node",span:"placement"},{id:"dragempty",name:"Drag empty space",how:"One finger, drag on the background",operation:"Re-aim the vantage \u2014 offset where the device heading points",span:"navigation"},{id:"pinch",name:"Pinch / spread",how:"Two fingers, pinch or spread",operation:"Zoom the view in or out",span:"navigation"}],S1={"mouse-drag":{name:"Drag"},"mouse-alt-drag":{name:"Alt-drag",standsIn:"fist"},"mouse-click":{name:"Click",standsIn:"two"},"mouse-scroll-up":{name:"Scroll up",standsIn:"spread"},"mouse-scroll-down":{name:"Scroll down",standsIn:"gather"}},yi=[{id:"fist",name:"Closed fist",how:"All fingers curled in",operation:"Grab the nearest cluster and move it \u2014 members keep their internal arrangement",mouse:"Hold Alt and drag a node, or press Grab then drag"},{id:"spread",name:"Open palm",how:"All five fingers extended and spread wide",operation:"Move closer \u2014 the map fills more of the frame; no thought moves",mouse:"Scroll up, or press Closer"},{id:"gather",name:"Gathered hand",how:"Fingers extended but held together, tips touching",operation:"Pull back \u2014 the map recedes in the frame; no thought moves",mouse:"Scroll down, or press Back"},{id:"two",name:"Two fingers",how:"Index and middle extended in a V, ring and little finger curled in",operation:"Select or confirm the node the hand is over",mouse:"Left click, or press Select"}];function w1(n){let e=Cn(n).map(r=>({id:r.id,text:r.text,label:r.label,color:r.color,pos:r.pos.map(a=>Math.round(a*100)/100),placed:r.placed})),t=Object.values(n.links).map(r=>[r.a,r.b]),i=lr(n).map(r=>r.id),s={map:n.name,holding:n.holding,nodes:e,links:t,unplaced:i};return`You are helping organise a 3-D idea map called "${n.name}".

Below is the map as JSON. Every node has an "id", its "text", a "label", and a
"pos" of [x, y, z] \u2014 its actual position in the map's space. Nodes with
"placed": false are waiting in the holding cluster and have no chosen home yet.

Suggest improvements in THREE kinds. Return ONLY JSON, in this shape:

{
  "connections": [ { "a": "<node id>", "b": "<node id>", "why": "<one line>" } ],
  "groupings":   [ { "name": "<group name>", "nodes": ["<id>", "<id>"], "why": "<one line>" } ],
  "placements":  [ { "node": "<unplaced node id>", "pos": [x, y, z], "why": "<one line>" } ]
}

Rules:
- Only use ids that appear in the map.
- "connections" must join two nodes that are not already linked.
- "placements" may only name a node from "unplaced", and the position you give
  should sit near the district it belongs with \u2014 do not re-arrange anything else.
- Do not move nodes that are already placed. Their positions are deliberate.

MAP JSON:
${JSON.stringify(s)}`}function B3(n){let t=[...[...n.matchAll(/```(?:json|JSON|js|javascript)?\s*([\s\S]*?)```/g)].map(i=>i[1].trim()).filter(Boolean)];for(let i of["{","["]){let s=i==="{"?"}":"]",r=0,a=-1,o=!1,l=!1,c="";for(let h=0;h<n.length;h++){let d=n[h];if(l){l=!1;continue}if(d==="\\"){l=!0;continue}if(d==='"'||d==="'"){o?o===d&&(o=!1):o=d;continue}if(!o){if(d===i)r===0&&(a=h),r++;else if(d===s&&(r--,r===0&&a>=0)){let u=n.slice(a,h+1);u.length>c.length&&(c=u)}}}c&&t.push(c)}return t.sort((i,s)=>s.length-i.length),t[0]??null}function z3(n){let e=n;e=e.replace(/[\u201C\u201D\u201E\u2033]/g,'"').replace(/[\u2018\u2019\u2032]/g,"'"),e=e.replace(/\/\*[\s\S]*?\*\//g,""),e=e.replace(/(^|[^:"'\\])\/\/[^\n\r]*/g,"$1"),e=e.replace(/\bTrue\b/g,"true").replace(/\bFalse\b/g,"false").replace(/\bNone\b/g,"null").replace(/\bNaN\b/g,"null"),e=e.replace(/([{,]\s*)([A-Za-z_$][\w$]*)\s*:/g,'$1"$2":'),e=e.replace(/'((?:[^'\\]|\\.)*)'/g,(a,o)=>JSON.stringify(o.replace(/\\'/g,"'"))),e=e.replace(/,(\s*[}\]])/g,"$1");let t=0,i=0,s=!1,r=!1;for(let a=0;a<e.length;a++){let o=e[a];if(r){r=!1;continue}if(o==="\\"){r=!0;continue}if(o==='"'){s=!s;continue}s||(o==="{"?t++:o==="}"?t--:o==="["?i++:o==="]"&&i--)}for(s&&(e+='"'),e=e.replace(/,\s*$/,"");i-- >0;)e+="]";for(;t-- >0;)e+="}";return e}var V3=0,Rp=()=>`s${++V3}`;function E1(n,e){let t=[];if(!n||!n.trim())return{ok:!1,suggestions:[],dropped:t,error:"The reply was empty. Nothing was changed."};let i=B3(n);if(!i)return{ok:!1,suggestions:[],dropped:t,error:"No JSON found in that reply. Nothing was changed."};let s=null;for(let x of[i,z3(i)])try{s=JSON.parse(x);break}catch{}if(s===null||typeof s!="object")return{ok:!1,suggestions:[],dropped:t,error:"That reply is not valid JSON, even after repair. Nothing was changed."};let r=[],a=[],o=[],l=Array.isArray(s)?{list:s}:s;if(Array.isArray(l.list)||Array.isArray(l.suggestions))for(let x of l.list??l.suggestions){let p=String(x?.kind??x?.type??"").toLowerCase();p.startsWith("conn")?r.push(x):p.startsWith("group")?a.push(x):p.startsWith("plac")?o.push(x):x?.a&&x?.b?r.push(x):x?.nodes?a.push(x):x?.pos?o.push(x):t.push({what:JSON.stringify(x).slice(0,60),why:"unrecognised suggestion kind"})}let c=(...x)=>{for(let p of x)if(Array.isArray(l[p]))return l[p];return[]};r=r.concat(c("connections","connect","links")),a=a.concat(c("groupings","groups","clusters")),o=o.concat(c("placements","placement","positions"));let h=new Map,d=new Map;for(let x of Cn(e))h.set(x.id,x),d.set(x.text.trim().toLowerCase(),x);let u=x=>typeof x!="string"?null:h.get(x)??d.get(x.trim().toLowerCase())??null,f=new Set(Object.values(e.links).map(x=>x.a<x.b?`${x.a}|${x.b}`:`${x.b}|${x.a}`)),g=[];for(let x of r){let p=u(x?.a??x?.from??x?.source),m=u(x?.b??x?.to??x?.target);if(!p||!m){t.push({what:`connection ${x?.a} \u2194 ${x?.b}`,why:"unknown node"});continue}if(p.id===m.id){t.push({what:`connection on ${p.text}`,why:"a node cannot link to itself"});continue}let A=p.id<m.id?`${p.id}|${m.id}`:`${m.id}|${p.id}`;if(f.has(A)){t.push({what:`${p.text} \u2194 ${m.text}`,why:"already linked"});continue}g.push({kind:"connection",id:Rp(),a:p.id,b:m.id,why:String(x?.why??x?.reason??"").slice(0,160)})}for(let x of a){let m=(Array.isArray(x?.nodes)?x.nodes:Array.isArray(x?.members)?x.members:[]).map(u).filter(Boolean).map(R=>R.id),A=String(x?.name??x?.label??x?.title??"").trim();if(m.length<2||!A){t.push({what:`grouping "${A||"?"}"`,why:m.length<2?"fewer than two known nodes":"no group name"});continue}g.push({kind:"grouping",id:Rp(),nodes:m,name:A.slice(0,40),why:String(x?.why??x?.reason??"").slice(0,160)})}for(let x of o){let p=u(x?.node??x?.id??x?.target),m=Array.isArray(x?.pos)?x.pos:Array.isArray(x?.position)?x.position:null;if(!p){t.push({what:`placement of ${x?.node}`,why:"unknown node"});continue}if(p.placed){t.push({what:`placement of "${p.text}"`,why:"that node is already placed \u2014 placed positions are not the finder's to change"});continue}let A=(m??[]).map(R=>Number(R));if(A.length!==3||A.some(R=>!isFinite(R))){t.push({what:`placement of "${p.text}"`,why:"position is not three finite numbers"});continue}g.push({kind:"placement",id:Rp(),node:p.id,pos:[A[0],A[1],A[2]],why:String(x?.why??x?.reason??"").slice(0,160)})}return g.length?{ok:!0,suggestions:g,dropped:t}:{ok:!1,suggestions:[],dropped:t,error:t.length?`Nothing usable in that reply \u2014 ${t.length} entr${t.length===1?"y":"ies"} rejected. Nothing was changed.`:"That reply held no suggestions. Nothing was changed."}}function A1(n,e){if(e.kind==="connection")n.connect(e.a,e.b);else if(e.kind==="grouping")for(let t of e.nodes)n.setLabel(t,e.name);else e.kind==="placement"&&n.place(e.node,e.pos,n.node(e.node)?.label||"")}function hu(n,e){let t=i=>e.nodes[i]?.text??i;return n.kind==="connection"?`Connect \u201C${t(n.a)}\u201D to \u201C${t(n.b)}\u201D`:n.kind==="grouping"?`Group ${n.nodes.length} nodes as \u201C${n.name}\u201D`:`Place \u201C${t(n.node)}\u201D at ${n.pos.map(i=>i.toFixed(1)).join(", ")}`}var T1=`
:root{
  --ground:#120E0B; --panel:#191410; --panel2:#221B16; --line:#2E2620;
  /* --ink-faint was #6E645B: 3.17:1 on the panel and 3.33:1 on the ground, and
     the cycle-11 Art Director measured it as the lowest-contrast text in the
     frame \u2014 on the badge that explains why other text is missing. #918779
     clears 4.5:1 on all three surfaces this build has (5.44 on the ground,
     5.18 on a panel, 4.81 on a raised panel) and stays a muted warm grey
     rather than becoming a second ink. */
  --ink:#EFE6D8; --ink-dim:#A2968A; --ink-faint:#918779;
  --hot:#FFB020; --bad:#FF6B4A; --ok:#2FD0C0;
}
*{box-sizing:border-box}
/* Overflow scrollbars are chrome the app does not own and does not want in a
   frame: artifact 01 carried a 50x3px scrollbar thumb in each of its three
   composited panels. Hidden everywhere; the panels that scroll still scroll. */
*::-webkit-scrollbar{width:0;height:0}
*{scrollbar-width:none}
html,body{margin:0;height:100%;background:var(--ground);overflow:hidden;
  font:13px/1.45 "DejaVu Sans",system-ui,sans-serif;color:var(--ink);
  -webkit-font-smoothing:antialiased}
canvas#world{position:fixed;inset:0;display:block}
button,input,textarea,select{font:inherit;color:var(--ink);background:var(--panel2);
  border:1px solid var(--line);padding:6px 10px;outline:none}
button{cursor:pointer}
button:hover{background:#2B231C}
button.ghost{background:transparent}
/* after .ghost, so a ghost button that is ON still paints its background and
   does not end up with near-black text on the dark ground */
button.on,button.ghost.on{background:var(--hot);color:#1A1206;border-color:var(--hot)}
span.chip.on{border-color:var(--hot);color:var(--ink)}
input:focus,textarea:focus{border-color:#4A3E34}
textarea{resize:none;width:100%;font:11px/1.4 "DejaVu Sans Mono",monospace}

/* 52px, not 44. The lens tabs and the taller buttons measure 52 px and the bar
   centred them, so four pixels of every one of them sat ABOVE the top of the
   frame \u2014 clipped, on every artifact in the set. The bar is the height of its
   tallest control now. */
#top{position:fixed;top:0;left:0;right:0;height:52px;display:flex;align-items:center;
  gap:8px;padding:0 12px;background:var(--panel);border-bottom:1px solid var(--line);z-index:20}
#top .name{font-weight:bold;letter-spacing:.2px;margin-right:4px;white-space:nowrap}
#top .sp{flex:1}
body.ar #capture,body.ar [data-t=open-finder],body.ar [data-t=open-maps],
body.ar [data-t=open-states]{display:none}
body.ar #top{height:40px}
body.ar #search{width:300px}
/* Between a desk and a phone: keep every control, give up spacing first, so a
   half-width composite panel never cuts a button mid-word. */
@media (max-width:1460px){
  #top{gap:5px;padding:0 8px}
  #top button{padding:6px 8px}
  #search{width:190px}
  #capture{width:150px}
}
@media (max-width:1200px){
  #capture,[data-t=open-finder],[data-t=open-maps],[data-t=open-states]{display:none}
  #search{width:150px}
  #top{gap:6px;padding:0 8px}
}
.tabs{display:flex;border:1px solid var(--line)}
.tabs button{border:0;border-right:1px solid var(--line);padding:6px 12px;background:transparent}
.tabs button:last-child{border-right:0}
.tabs button.on{background:var(--hot);color:#1A1206}
.chip{padding:5px 9px;border:1px solid var(--line);color:var(--ink-dim);white-space:nowrap}
.chip b{color:var(--ink)}
#search{width:230px}

.panel{position:fixed;background:var(--panel);border:1px solid var(--line);z-index:30}
#editor{top:56px;right:12px;width:274px;padding:12px}
#editor h3{margin:0 0 8px;font-size:12px;letter-spacing:.6px;text-transform:uppercase;color:var(--ink-dim)}
#editor label{display:block;margin:10px 0 4px;font-size:11px;color:var(--ink-dim)}
#editor input{width:100%}
.swatches{display:flex;gap:5px;flex-wrap:wrap}
.sw{width:24px;height:24px;border:2px solid transparent;padding:0;cursor:pointer}
.sw.on{border-color:var(--ink)}
.row{display:flex;gap:6px;margin-top:12px}
.row button{flex:1}
/* THE COMMITTING ACTION LOOKS LIKE ONE. Accept and Reject were the same
   neutral outline token \u2014 fills a single level of red apart, labels at the
   same contrast \u2014 in a feature whose whole claim is that nothing is applied
   until you accept. Accept takes the amber the kind tag already uses; Reject
   keeps the outline. Same size, same place: the pair still reads as a matched
   choice, not a warning. */
/* The rejection log: the strongest safety evidence in the build, set to be
   read. One entry per line, the subject at reading contrast, the reason a step
   below it, and the overflow as a count. */
.rejected{margin-top:10px;border-left:2px solid #4A3A2A;padding:6px 0 6px 10px}
.rejected h5{margin:0 0 5px;font-size:12px;font-weight:600;letter-spacing:.2px;color:var(--ink)}
.rejected .r{font-size:12px;line-height:1.5;color:var(--ink);margin-bottom:2px}
.rejected .r b{font-weight:600}
.rejected .r span{color:var(--ink-dim)}
.rejected .r.more{color:var(--ink-dim)}
button.affirm{background:var(--hot);border-color:var(--hot);color:#1A1206;font-weight:600}
button.affirm:hover{background:#FFC44D;border-color:#FFC44D}

/* The panel never grows past the band between the top bar and the bottom bar,
   and it does NOT scroll as a whole: the prompt and reply bodies scroll inside
   it, so Generate / Copy / Parse are on screen whatever the prompt's length. */
#finder{top:56px;left:12px;width:430px;max-height:calc(100vh - 124px);overflow:hidden;padding:12px;
  display:flex;flex-direction:column}
#finder>*{flex:0 0 auto}
#finder textarea{flex:1 1 auto;min-height:64px}
#finder .tail{flex:1 1 auto;min-height:0;overflow:auto}
#finder h3{margin:0 0 8px;font-size:12px;letter-spacing:.6px;text-transform:uppercase;color:var(--ink-dim)}
.sug{border:1px solid var(--line);padding:10px;margin-top:8px;background:var(--panel2)}
.sug .k{font-size:10px;letter-spacing:.8px;text-transform:uppercase;color:var(--hot)}
.sug .d{margin:4px 0 2px;font-weight:bold}
.sug .w{color:var(--ink-dim);font-size:12px}
.err{border:1px solid var(--bad);color:var(--bad);padding:9px 10px;margin-top:8px;background:#20120E}
.note{color:var(--ink-faint);font-size:11px;margin-top:6px}

.overlay{position:fixed;inset:0;background:var(--ground);z-index:40;overflow:auto;padding:56px 40px 40px}
.overlay h1{font-size:19px;letter-spacing:.4px;margin:0 0 4px}
.overlay h2{font-size:12px;letter-spacing:.8px;text-transform:uppercase;color:var(--ink-dim);
  margin:26px 0 8px;border-bottom:1px solid var(--line);padding-bottom:6px}
.overlay .sub{color:var(--ink-dim);margin:0 0 18px}
table{border-collapse:collapse;width:100%}
th,td{text-align:left;padding:7px 10px;border-bottom:1px solid var(--line);vertical-align:top}
th{font-size:11px;letter-spacing:.6px;text-transform:uppercase;color:var(--ink-dim);font-weight:normal}
td.num{color:var(--ink-dim);white-space:nowrap}
tr.map:hover{background:var(--panel)}
.maprow td:first-child{font-weight:bold}
.close{position:fixed;top:10px;right:12px;z-index:41}

#hands{position:fixed;right:12px;bottom:12px;width:288px;background:var(--panel);
  border:1px solid var(--line);z-index:25}
#hands .hd{display:flex;align-items:center;gap:8px;padding:7px 10px;border-bottom:1px solid var(--line);
  font-size:11px;letter-spacing:.6px;text-transform:uppercase;color:var(--ink-dim)}
#hands .dot{width:8px;height:8px;background:var(--ink-faint)}
#hands .dot.live{background:var(--ok)}
#handwrap{position:relative;width:288px;height:216px;background:#000}
#handvid{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
#handlm{position:absolute;inset:0;width:100%;height:100%}
#handpose{padding:8px 10px;border-top:1px solid var(--line)}
#handpose .p{font-size:16px;font-weight:bold;color:var(--hot)}
#handpose .o{color:var(--ink-dim);font-size:12px}
#handpose .g{color:var(--ink-faint);font-size:10px;font-family:"DejaVu Sans Mono",monospace;margin-top:3px}

/* Clear of the mouse-equivalent bar, which sits at bottom:12 on the same
   centre line and was drawing over the operation caption's lower half \u2014 in the
   one still where that caption should be the most legible thing on screen. */
#gesture{position:fixed;left:50%;transform:translateX(-50%);bottom:64px;z-index:27;
  background:var(--panel);border:1px solid var(--line);padding:9px 16px;display:none}
#gesture.show{display:block}
#gesture .n{font-weight:bold;color:var(--hot)}
#gesture .o{color:var(--ink-dim)}
/* Held: the caption is still readable but is no longer asserting anything the
   detector is seeing right now, and it must not look like it is. */
#gesture.held{border-style:dashed;opacity:.72}
#gesture.held .n{color:var(--ink-dim)}
#gesture .h{color:var(--ink-dim);font-style:italic}

#toast{position:fixed;left:50%;transform:translateX(-50%);top:56px;z-index:50;
  background:var(--panel);border:1px solid var(--line);padding:9px 14px;display:none;max-width:640px}
#toast.show{display:block}
#toast.bad{border-color:var(--bad);color:var(--bad)}

#argyro{position:fixed;right:12px;bottom:12px;z-index:25;background:var(--panel);border:1px solid var(--line);
  padding:7px 11px;font-size:11px;letter-spacing:.4px;color:var(--ink-dim);display:none}
#argyro.show{display:block}
#argyro b{color:var(--ink);font-family:"DejaVu Sans Mono",monospace}
/* Turning: the readout comes forward while the device is actually moving. */
#argyro.turning{padding:12px 18px;font-size:17px;letter-spacing:.6px;color:var(--ink);
  border-color:var(--hot)}
#argyro.turning b{font-size:24px}
#origin{position:fixed;left:12px;top:56px;z-index:24;background:var(--panel);border:1px solid var(--line);
  padding:6px 10px;font-size:11px;letter-spacing:.3px;color:var(--ink-faint);display:none}
#origin.seed{display:block;color:var(--ink-dim);border-color:#3A2F26}
#origin b{color:var(--ink)}
#activity{position:fixed;left:12px;top:86px;z-index:24;background:var(--panel);border:1px solid var(--line);
  padding:6px 10px;font-size:11px;letter-spacing:.3px;color:var(--ink-faint);display:none}
#activity.show{display:block}
#activity.remote{border-color:#3A2F26;color:var(--ink-dim)}
#activity b{color:var(--ink)}
/* AR reticle: a handheld surface points at something. */
#reticle{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:23;pointer-events:none;
  display:flex;flex-direction:column;align-items:center;gap:8px}
#reticle .x{width:26px;height:26px;border:1px solid #6E6157;border-radius:50%;position:relative}
#reticle.on .x{border-color:#C9A227}
#reticle .x::before,#reticle .x::after{content:"";position:absolute;background:#6E6157}
#reticle .x::before{left:50%;top:-7px;width:1px;height:7px}
#reticle .x::after{left:50%;bottom:-7px;width:1px;height:7px}
#reticle.on .x::before,#reticle.on .x::after{background:#C9A227}
#reticle .n{font-size:11px;letter-spacing:.3px;color:var(--ink-faint);background:var(--panel);
  border:1px solid var(--line);padding:4px 9px;white-space:nowrap}
#reticle.on .n{color:var(--ink)}
/* The leader: what the readout is naming, shown rather than asserted. A
   fixed aiming ring names the nearest thought, which was as much as 149 px
   away with nothing connecting the two \u2014 so the one affordance that makes
   this read as AR pointed at nothing. Anchored at the ring's centre and
   rotated to the node; it carries state, so it is not chrome. */
#reticle .lead{position:absolute;left:50%;top:50%;height:1px;background:#C9A227;opacity:0;
  transform-origin:0 50%;pointer-events:none}
#reticle.on .lead{opacity:.62}
#reticle .lead::after{content:"";position:absolute;right:-2px;top:-2px;width:5px;height:5px;
  border-radius:50%;background:#C9A227}
#clusterproof{position:fixed;left:12px;top:56px;z-index:25;background:var(--panel);border:1px solid #3A2F26;
  padding:8px 11px;font-size:11px;letter-spacing:.3px;color:var(--ink-dim);display:none;line-height:1.55}
#clusterproof.show{display:block}
/* The unlabelled column. At whole-map framing the node cloud is near-square
   (826x829 px measured) and a 16:9 frame leaves about 470 px of margin either
   side that no camera angle can fill. The frame already admits how many names
   it is not showing; this spends the empty margin on saying WHICH, in each
   thought's own district colour. Fixed width whatever the count, so it is a
   stable occluder for the label arbiter rather than one that resizes in
   response to its own effect. */
/* AN OPAQUE GROUND, not a transparent overlay. The roster was drawn straight
   over the live map: on artifact 05 its rows sat on top of azure district nodes
   and their filaments, and its own colour bullets are the same size and shape
   as the map's dots, so the two channels were confusable \u2014 and "UI surfaces
   matte and minimal" was not being honoured by the one surface that lists what
   the map is not showing. It is matte and opaque now, and the arbiter already
   reserves its rectangle, so no label runs beneath it either. */
#unlabelled{position:fixed;right:0;top:96px;bottom:64px;width:300px;z-index:22;display:none;
  padding:10px 14px 10px 16px;border-left:1px solid var(--line);pointer-events:none;
  background:var(--panel);
  font-size:12px;line-height:1.55;letter-spacing:.2px;color:var(--ink-dim);overflow:hidden}
#unlabelled.show{display:block}
/* TWO COLUMNS WHEN ONE WILL NOT HOLD THEM ALL.
   The column is a fixed-height rail and it truncated with "\u2026and 43 more" \u2014 so
   on the whole-brain frame 43 of 118 thoughts had no name anywhere, on canvas
   or in the list, which is the one thing this panel exists to prevent. Setting
   it in two columns roughly doubles what fits before the trim has to start, and
   the trim still runs after it as the last resort it always was. */
/* THE SIDE WITH ROOM. The rail is the right one by default, but the editor
   lives there too, and on artifact 04 the column started below it with a third
   of the height and 30 of 149 thoughts went unnamed. The left margin was empty.
   A recovery affordance squeezed into the busy side by convention is not a
   convention worth keeping. */
#unlabelled.left{right:auto;left:0;border-left:0;border-right:1px solid var(--line);
  padding:10px 16px 10px 14px}
#unlabelled.two{column-count:2;column-gap:16px;width:440px;line-height:1.34}
#unlabelled.two h5{margin:6px 0 1px}
#unlabelled.two h4{column-span:all}
#unlabelled.two h5{break-after:avoid}
#unlabelled li,#unlabelled h5{break-inside:avoid}
#unlabelled h4{margin:0 0 7px;font-size:11px;font-weight:600;letter-spacing:.4px;
  color:var(--ink-dim);text-transform:none}
/* NOT THE DIMMEST TEXT IN THE BUILD. The rows measured 2.3:1 modal against the
   panel ground while the node labels they stand in for measure 9.2:1 in the
   same frame \u2014 the disposal surface was less legible than the thing it was
   disposing of. Rows take the reading ink; the district heads carry the colour
   and the count. */
#unlabelled li{list-style:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
  color:var(--ink);padding-left:11px}
#unlabelled li.more{color:var(--ink-dim);padding-left:0;margin-top:5px}
#unlabelled h5{margin:8px 0 2px;font-size:11px;font-weight:600;letter-spacing:.2px;
  color:var(--ink-dim);text-transform:none}
#unlabelled h5 b{color:var(--ink-faint);font-weight:400;margin-left:3px}
/* A short bar, not a dot: the bullets were the same size and shape as node
   markers, so a reader scanning the column could take a list row for a thing in
   the world. Same hue, different form. */
#unlabelled i{display:inline-block;width:9px;height:3px;border-radius:1px;margin-right:6px;
  vertical-align:middle}
/* Leaders for held thoughts. In the holding ring the dots are close together
   and the names radiate outward, so a label can end up nearer a neighbour's
   dot than its own \u2014 measured on artifact 06, only four of eight labels had
   their own dot as the nearest. The line joins each name to the thought it
   belongs to. It carries attribution, so it is not decoration. */
/* width/height explicitly: an <svg> is a REPLACED element, so inset:0 with
   auto sizing leaves it at its intrinsic 300x150 and every line outside that
   box is clipped away \u2014 which is why the first attempt drew eight lines and
   showed none of them. */
/* The fist's grip, shown while it is held. Amber like every other live
   affordance, and a rounded rectangle rather than a ring so it does not read as
   a sixth node signature. */
#grabmark{position:fixed;z-index:21;display:none;pointer-events:none}
#grabmark.on{display:block}
#grabmark .ring{position:absolute;inset:0;border:2px dashed var(--hot);border-radius:14px;
  box-shadow:0 0 0 1px rgba(0,0,0,0.5)}
#grabmark .tag{position:absolute;left:50%;top:-10px;transform:translate(-50%,-100%);
  white-space:nowrap;font-size:11px;color:#1A1206;background:var(--hot);
  border-radius:4px;padding:2px 8px;font-weight:600}
/* THE CANDIDATE, NOT THE STATE. Faint enough that it never competes with the
   amber grab mark that replaces it, and clearly the same family so a viewer
   reads the one turning into the other. Glow is reserved for meaning: this
   carries none, so it is a thin dashed edge and nothing else. */
#grabcand{position:fixed;z-index:19;display:none;pointer-events:none}
#grabcand.on{display:block}
#grabcand .ring{position:absolute;inset:0;border:1px dashed rgba(198,150,74,0.45);
  border-radius:14px}
#grabcand .tag{position:absolute;left:50%;top:-8px;transform:translate(-50%,-100%);
  white-space:nowrap;font-size:11px;color:var(--ink-dim);background:rgba(14,12,10,0.82);
  border:1px solid rgba(198,150,74,0.35);border-radius:4px;padding:1px 7px}
#pinmark{position:fixed;z-index:20;display:none;pointer-events:none}
#pinmark.on{display:block}
#pinmark .ring{position:absolute;inset:0;border:2px solid var(--hot);border-radius:50%;
  box-shadow:0 0 0 1px rgba(0,0,0,0.55)}
#pinmark .tag{position:absolute;left:50%;top:100%;transform:translate(-50%,6px);
  white-space:nowrap;font-size:12px;color:var(--ink);background:rgba(14,12,10,0.9);
  border:1px solid var(--hot);border-radius:5px;padding:2px 7px}
#hitbreak{position:fixed;top:52px;right:16px;z-index:23;display:none;
  padding:5px 10px;border-radius:6px;background:rgba(14,12,10,0.92);
  border:1px solid rgba(255,255,255,0.14);font-size:12px;letter-spacing:0.01em;
  color:var(--ink);white-space:nowrap;pointer-events:none}
#hitbreak.show{display:block}
#leaders{position:fixed;left:0;top:0;width:100vw;height:100vh;z-index:21;pointer-events:none}
#leaders line{stroke:#6E6157;stroke-width:1;opacity:.5}
#clusterproof b{color:var(--ink);font-family:"DejaVu Sans Mono",monospace}
#hidden{position:fixed;right:12px;top:56px;z-index:24;background:var(--panel);border:1px solid var(--line);
  padding:6px 10px;font-size:11px;letter-spacing:.3px;color:var(--ink-faint);display:none}
#hidden.show{display:block}
#lenstag{position:fixed;left:12px;bottom:12px;z-index:24;background:var(--panel);
  border:1px solid var(--line);padding:6px 10px;font-size:11px;letter-spacing:.5px;color:var(--ink-dim)}
#lenstag b{color:var(--ink);text-transform:uppercase;letter-spacing:.8px}
#lenstag .prov{display:block;margin-top:3px;color:var(--ink-faint);text-transform:none;letter-spacing:.2px;font-size:10px}
#lenstag .prov b{color:var(--ink-dim);text-transform:none;letter-spacing:.2px;font-size:10px}
#lenstag .absent{color:#C08A5A}

#tools{position:fixed;left:252px;bottom:12px;z-index:26;display:none;gap:6px}
#tools.show{display:flex}
#tools button{min-width:78px}
/* The undo control names what it would put back, and a district name can be
   long; it truncates rather than stretching the row off the ground it sits on. */
#tools button[data-t=tool-undo]{max-width:230px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
#tools button[data-t=tool-undo]:disabled{opacity:.5}
.mono{font-family:"DejaVu Sans Mono",monospace;font-size:11px}
`;var ve=(n,e=document)=>e.querySelector(n),vt=(n,e={},t="")=>{let i=document.createElement(n);for(let[s,r]of Object.entries(e))i.setAttribute(s,r);return t&&(i.innerHTML=t),i},dt=n=>n.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),H3=n=>{let e=Math.max(0,Math.round((Date.now()-n)/6e4));if(e<1)return"just now";if(e<60)return`${e} min ago`;let t=Math.round(e/60);if(t<24)return`${t} h ago`;let i=Math.round(t/24);return i<30?`${i} d ago`:`${Math.round(i/30)} mo ago`},Ip=class n{handVocab=yi;touchVocab=cu;surface;lens="canvas";scene;store;sync;controls;hands;maps=[];selected=null;hits=[];hitIndex=0;suggestions=[];sugIndex=0;lastParse=null;handsOn=!1;frozenClock=null;virtualNow=null;uiUntil={toast:0,gesture:0,turning:0};ready=!1;raf=0;lastGesture={id:"",detail:"",at:0};handGrab=null;lastHandOp=0;gyro=null;constructor(e){this.surface=e}lenses(){return this.surface==="windows"?["canvas","expansion"]:["canvas","ar"]}async boot(e){document.head.appendChild(vt("style",{},T1)),document.body.appendChild(vt("canvas",{id:"world"})),this.buildChrome();let t=await(await fetch("./assets/font-sdf.json")).json(),i=await new Promise((r,a)=>new ja().load("./assets/font-sdf.png",r,void 0,a));this.scene=new nh(ve("#world"),t,i);let s=await(await fetch(`./maps/${e.mapId}.json`)).json();this.store=new Yc(s,e.actor),this.sync=new Kc(e.wsUrl,e.actor,e.account),this.sync.onSnapshot((r,a)=>{this.store.replaceDoc(r),this.scene.setDoc(r),this.refresh(),this.frameAll(),this.showOrigin(a)}),this.sync.onMaps(r=>{this.maps=r,ve("#maps")&&this.renderMaps()}),this.sync.onStatus(()=>this.renderSyncStatus()),this.store.attach(this.sync),this.store.subscribe(()=>{this.scene.markDirty(),this.refresh()}),this.sync.connect(e.mapId),this.scene.setDoc(this.store.doc),this.controls=new ih(this.scene,this.store,{onSelect:r=>this.select(r),onQuickAdd:()=>this.quickAdd(""),onGestureFired:(r,a)=>this.showGesture(r,a),onDragEnd:()=>this.refresh()}),this.controls.now=()=>this.now(),this.hands=new lu("./assets/mp-wasm","./assets/hand_landmarker.task"),this.hands.onFrame=r=>this.onHand(r),this.setLens(this.lenses()[0]),this.resize(),window.addEventListener("resize",()=>this.resize()),this.attachInput(),this.frameAll(),this.refresh(),this.loop(),this.ready=!0}buildChrome(){let e=vt("div",{id:"top"});e.innerHTML=`
      <span class="name" data-t="map-name"></span>
      <span class="tabs" data-t="lens-tabs"></span>
      <input id="capture" data-t="capture-text" placeholder="type a thought\u2026" size="22">
      <button data-t="capture" title="One action: lands in holding, unplaced">+ Capture</button>
      <span class="sp"></span>
      <input id="search" data-t="search" placeholder="search this map\u2026">
      <span class="chip" data-t="holding-chip">holding <b data-t="holding-count">0</b></span>
      <button data-t="hands-chip" class="ghost" title="Hand tracking toggle and live status">Hands: off</button>
      <button data-t="open-states" class="ghost">States</button>
      <button data-t="open-finder" class="ghost">Finder</button>
      <button data-t="open-maps" class="ghost">Maps</button>
      <button data-t="open-settings" class="ghost">Settings</button>`,document.body.append(e,vt("div",{id:"lenstag","data-t":"lens-tag"}),vt("div",{id:"gesture","data-t":"gesture-hud"}),vt("div",{id:"argyro","data-t":"ar-gyro"}),vt("div",{id:"toast","data-t":"toast"}),vt("div",{id:"tools","data-t":"tools"})),ve("[data-t=capture]").addEventListener("click",()=>this.quickAdd(ve("#capture").value)),ve("#capture").addEventListener("keydown",a=>{a.key==="Enter"&&this.quickAdd(ve("#capture").value)}),ve("[data-t=open-states]").addEventListener("click",()=>this.toggleStates()),ve("[data-t=hands-chip]").addEventListener("click",()=>this.toggleHands(!this.handsOn)),ve("[data-t=open-maps]").addEventListener("click",()=>this.openMapsHome()),ve("[data-t=open-settings]").addEventListener("click",()=>this.openSettings()),ve("[data-t=open-finder]").addEventListener("click",()=>this.toggleFinder());let t=ve("#search");t.addEventListener("input",()=>this.search(t.value)),t.addEventListener("keydown",a=>{a.key==="Enter"&&this.flyToHit(a.shiftKey?-1:1)});let i=ve("[data-t=lens-tabs]");for(let a of this.lenses()){let o=vt("button",{"data-t":`lens-${a}`},a==="expansion"?"Mind expansion":a==="ar"?"AR":"Canvas");o.addEventListener("click",()=>this.setLens(a)),i.appendChild(o)}let s=ve("#tools");for(let a of yi){let o={fist:"Grab",spread:"Closer",gather:"Back",two:"Select"},l=vt("button",{"data-t":`tool-${a.id}`,title:`${a.name} \u2014 ${a.mouse}`},o[a.id]??a.name);l.addEventListener("click",()=>this.runHandOperation(a.id,!0)),s.appendChild(l)}let r=vt("button",{"data-t":"tool-undo",class:"ghost",title:"Put the last move back \u2014 Ctrl+Z"},"Undo move");r.addEventListener("click",()=>this.undoMove()),s.appendChild(r)}undoMove(){let e=this.store.undoMove();if(!e){this.toast("Nothing to put back \u2014 no move has been made on this map");return}this.toast(`Put back: ${e.what} \u2014 ${e.nodes} thought${e.nodes===1?"":"s"} returned to where they were`),this.scene.markDirty(),this.refresh()}attachInput(){let e=ve("#world");this.surface==="windows"?this.controls.attachMouse(e):this.controls.attachTouch(e),window.addEventListener("keydown",t=>{let i=t.target?.tagName;i==="INPUT"||i==="TEXTAREA"||((t.key==="n"||t.key==="N")&&(t.preventDefault(),this.quickAdd("")),t.key==="Escape"&&(this.select(null),this.closeOverlays()),(t.ctrlKey||t.metaKey)&&(t.key==="z"||t.key==="Z")&&(t.preventDefault(),this.undoMove()))}),window.addEventListener("deviceorientation",t=>{if(this.lens!=="ar"||t.alpha===null)return;let i=this.gyro;this.gyro={alpha:t.alpha??0,beta:t.beta??90,gamma:t.gamma??0},i&&Math.abs(this.gyro.alpha-i.alpha)+Math.abs(this.gyro.beta-i.beta)>1.5&&(this.uiUntil.turning=this.now()+1400),this.controls.applyOrientation(this.gyro.alpha,this.gyro.beta,this.gyro.gamma),this.renderGyro()})}setLens(e){this.lens=e,this.scene.applyLens(e);for(let s of this.lenses())ve(`[data-t=lens-${s}]`).classList.toggle("on",s===e);ve("#tools").classList.toggle("show",e==="expansion"),document.body.classList.toggle("ar",e==="ar"),this.controls.gyroDriven=e==="ar",e==="ar"&&this.controls.resetGyroBase();let t=this.provenance(),i=t.isElectron?`${t.runtime} \xB7 ${t.platform}`:this.surface==="android"?`${t.runtime} \xB7 android device profile`:`${t.runtime} \xB7 ${t.platform}`;ve("#lenstag").innerHTML=`<b>${this.surface==="windows"?"Windows":"Android"}</b> \xB7 <b>${e==="expansion"?"mind expansion":e}</b> <span class="prov">${dt(i)}</span>`+(e==="ar"?' <span class="prov">real orientation + touch events \xB7 <b class="absent">no camera pass-through</b></span>':""),e==="expansion"&&this.frameAll(),this.renderGyro(),this.scene.markDirty()}tagNames(){let e=this.selected!==null&&(this.scene.labelRects.get(this.selected)?.alpha??0)<=.02;return this.pinned??(e?this.selected:null)}namedElsewhere(){let e=new Set;this.pinned&&e.add(this.pinned),this.aimedAt&&e.add(this.aimedAt);let t=this.tagNames();return t&&e.add(t),this.selected&&document.getElementById("editor")&&e.add(this.selected),e}unnamedOnScreen(){let e=this.namedElsewhere();return this.scene.suppressedIds.filter(t=>!e.has(t))}renderPin(){let e=this.tagNames(),t=document.getElementById("pinmark");if(!e||!this.store.doc.nodes[e]){t?.remove();return}t||(t=vt("div",{id:"pinmark","data-t":"pin-mark"}),t.innerHTML='<div class="ring"></div><div class="tag" data-t="pin-name"></div>',document.body.appendChild(t));let i=this.scene.screenPositions().find(l=>l.id===e);if(!i){t.className="";return}let s=this.scene.renderer.domElement.width/Math.max(window.innerWidth,1),r=Math.max(14,i.r/s+9);t.className="on",t.style.left=`${Math.round(i.x/s-r)}px`,t.style.top=`${Math.round(i.y/s-r)}px`,t.style.width=t.style.height=`${Math.round(r*2)}px`;let a=ve("[data-t=pin-name]",t);a.textContent=this.store.doc.nodes[e].text;let o=this.scene.labelEmPxFor(e);a.style.fontSize=o?`${Math.round(Math.max(o,12))}px`:"",this.placeTag(a,i,r,s,e)}placeTag(e,t,i,s,r){e.style.left="",e.style.top="",e.style.transform="";let a=e.offsetWidth,o=e.offsetHeight;if(!a||!o)return;let l=t.x/s,c=t.y/s,h=6,d=[[l-a/2,c+i+h],[l-a/2,c-i-h-o],[l+i+h,c-o/2],[l-i-h-a,c-o/2],[l+i*.7,c+i*.7],[l-i*.7-a,c+i*.7],[l+i*.7,c-i*.7-o],[l-i*.7-a,c-i*.7-o]],u=this.scene.screenPositions().filter(R=>R.id!==r).map(R=>({x:R.x/s,y:R.y/s,r:Math.max(R.r/s,2)})),f=window.innerWidth,g=window.innerHeight,x=0,p=1/0;for(let R=0;R<d.length;R++){let[M,b]=d[R],S=M+a,w=b+o,v=M<4||b<4||S>f-4||w>g-4?12:0;for(let E of u)E.x+E.r>M&&E.x-E.r<S&&E.y+E.r>b&&E.y-E.r<w&&v++;if(v<p&&(p=v,x=R,!v))break}if(x===0)return;let[m,A]=d[x];e.style.left=`${Math.round(m-(l-i))}px`,e.style.top=`${Math.round(A-(c-i))}px`,e.style.transform="none"}togglePin(e){this.pinned=this.pinned===e?null:e,this.scene.setPinned(this.pinned),this.refresh()}pinned=null;updateNamedByChrome(){let e=[];this.aimedAt&&e.push(this.aimedAt),this.selected&&document.getElementById("editor")&&e.push(this.selected),this.scene.setNamedByChrome(e)}renderReticle(){let e=document.getElementById("reticle");if(this.lens!=="ar"){e?.remove(),this.aimedAt&&(this.aimedAt=null),this.updateNamedByChrome();return}e||(e=vt("div",{id:"reticle","data-t":"ar-reticle"}),e.innerHTML='<div class="lead" data-t="reticle-lead"></div><div class="x"></div><div class="n" data-t="reticle-node"></div>',document.body.appendChild(e));let t=this.scene.renderer.domElement,i=t.width/2,s=t.height/2,r=null;for(let f of this.scene.screenPositions()){let g=Math.hypot(f.x-i,f.y-s);(!r||g<r.d)&&(r={id:f.id,d:g,x:f.x,y:f.y})}let a=t.width*.22,o=!!r&&r.d<a,l=o?this.store.doc.nodes[r.id]:null,c=o?r.id:null;c!==this.aimedAt&&(this.aimedAt=c,this.scene.setSelection(c??this.selected)),this.updateNamedByChrome();let h=ve("[data-t=reticle-node]",e);e.classList.toggle("on",o),h.textContent=l?`${l.text}${l.placed?"":" \xB7 in holding"}`:"pointing at open space";let d=ve("[data-t=reticle-lead]",e),u=t.width/Math.max(window.innerWidth,1);if(o&&r){let f=(r.x-i)/u,g=(r.y-s)/u,x=Math.hypot(f,g),p=13;d.style.width=`${Math.max(x-p,0).toFixed(1)}px`,d.style.transform=`rotate(${(Math.atan2(g,f)*180/Math.PI).toFixed(2)}deg) translateX(${p}px)`,d.style.opacity=x>p+4?"":"0"}else d.style.width="0px"}renderGyro(){let e=document.getElementById("argyro");if(!e||(e.classList.toggle("show",this.lens==="ar"),this.lens!=="ar"))return;let t=this.gyro;e.classList.toggle("turning",this.now()<this.uiUntil.turning),e.innerHTML=t?`gyro live \xB7 heading <b>${t.alpha.toFixed(0)}\xB0</b> \xB7 tilt <b>${t.beta.toFixed(0)}\xB0</b> \xB7 roll <b>${t.gamma.toFixed(0)}\xB0</b>`:"gyro \xB7 waiting for orientation"}safeInsets(){let e=Math.max(window.innerHeight,1),t=Math.max(window.innerWidth,1),i=c=>{let h=document.querySelector(c);if(!h||!h.offsetParent&&getComputedStyle(h).position!=="fixed")return 0;let d=h.getBoundingClientRect();return d.width>0&&d.height>0?d.height:0},s=22,r=Math.max(i("#tools"),i("#lenstag"),i("#argyro"),i("#gesture"))+12,a=i("#top"),o=12,l=12;for(let c of["#finder","#states"]){let h=document.querySelector(c);h&&(o=Math.max(o,h.getBoundingClientRect().right+14))}for(let c of["#editor","#unlabelled","#hands"]){let h=document.querySelector(c);if(!h||getComputedStyle(h).display==="none")continue;let d=h.getBoundingClientRect();d.width<2||d.height<2||(d.left<t/2?o=Math.max(o,d.right+14):l=Math.max(l,t-d.left+14))}return{top:Math.min((a+s)/e,.22),bottom:Math.min((r+s)/e,.22),left:Math.min(o/t,.38),right:Math.min(l/t,.38)}}frameNodes(e,t=1.3){let i=this.store.doc,s=e.map(a=>i.nodes[a]).filter(Boolean);if(!s.length)return;let r=this.scene.fitAll(s,t,this.safeInsets(),!1);this.scene.pose.target.copy(r.target),this.scene.pose.dist=r.dist}frameAll(e=1.04){let t=this.scene.fitAll(Cn(this.store.doc),e,this.safeInsets());this.scene.pose.target.copy(t.target),this.scene.pose.dist=t.dist,this.controls.minDist=Math.max(t.dist*.22,4),this.controls.maxDist=t.dist*2.1}resize(){let e=Math.floor(window.innerWidth),t=Math.floor(window.innerHeight);this.scene.setSize(e,t);let i=ve("#world");i.style.width=e+"px",i.style.height=t+"px"}quickAdd(e){let t=(e||"").trim(),i=this.store.quickAdd(t||"New thought");return ve("#capture").value="",this.select(i),this.toast(`Captured into holding \u2014 ${this.store.holdingCount()} waiting. Drag it out to place it.`),i}select(e){let t=e!==null&&this.selected===null;this.selected=e,this.scene.setSelection(e),this.renderEditor(),t&&this.clearOfPanels(e)}clearOfPanels(e){let t=this.scene.renderer.domElement,i=t.width/Math.max(window.innerWidth,1),s=0,r=0;for(let u of["#finder","#states"]){let f=document.querySelector(u);f&&(s=Math.max(s,(f.getBoundingClientRect().right+16)*i))}let a=document.getElementById("editor");if(a&&(r=Math.max(r,(t.width/i-a.getBoundingClientRect().left+16)*i)),!s&&!r)return;let{lo:o,hi:l}=this.scene.contentBoundsX();if(!isFinite(o)||!isFinite(l))return;let c=s,h=t.width-r,d=0;if(l-o<=h-c)o<c?d=c-o:l>h&&(d=h-l);else{let u=e?this.scene.screenPositions().find(p=>p.id===e):void 0,f=e?this.scene.labelRects.get(e):void 0,g=Math.min(u?u.x-u.r:1/0,f?f.x0:1/0),x=Math.max(u?u.x+u.r:-1/0,f?f.x1:-1/0);!isFinite(g)||!isFinite(x)?d=(c+h)/2-(o+l)/2:g<c?d=c-g:x>h&&(d=h-x)}Math.abs(d)<4||this.controls.panTarget(d,0)}search(e){let t=Cg(this.store.doc,e);this.hits=t.map(i=>i.n.id),this.hitLabelMatches=t.filter(i=>i.field==="label").map(i=>i.n.id),this.hitQuery=e.trim(),this.hitIndex=0,this.scene.setHits(this.hits),this.refresh()}hitLabelMatches=[];hitQuery="";renderHitBreakdown(){let e=document.getElementById("hitbreak");e||(e=vt("div",{id:"hitbreak","data-t":"search-breakdown"}),document.body.appendChild(e));let t=this.hits.length;if(!t||!this.hitQuery){e.className="",e.textContent="";return}let i=this.hitLabelMatches.length,s=t-i,r=[...new Set(this.hitLabelMatches.map(l=>this.store.doc.nodes[l]?.label).filter(Boolean))],a=[`${t} hit${t===1?"":"s"}`];s&&a.push(`${s} in the text`),i&&a.push(`${i} in the label ${r.map(l=>`\u201C${l}\u201D`).join(", ")}`),e.textContent=a.join(" \xB7 "),e.className="show";let o=document.getElementById("search")?.getBoundingClientRect();if(o){e.style.right="",e.style.left="",e.style.top=`${Math.round(o.bottom+8)}px`;let l=this.badgeBlockers(),c=document.getElementById("origin");if(c&&getComputedStyle(c).display!=="none"&&c.textContent){let h=c.getBoundingClientRect();h.width>2&&h.height>2&&l.push(h)}this.placeBadge(e,l)}}placeTools(){{let e=document.getElementById("tools");if(e&&e.classList.contains("show")){e.style.left="",e.style.top="",e.style.bottom="";let t=e.getBoundingClientRect();e.style.top=`${Math.round(t.top)}px`,e.style.bottom="auto";let i=[];for(let s of["#hands","#gesture","#lenstag","#argyro"]){let r=document.querySelector(s);if(!r||getComputedStyle(r).display==="none"||!r.textContent)continue;let a=this.outerRect(r);a.width>2&&a.height>2&&i.push(a)}this.placeBadge(e,i)}}}flyToHit(e=0){if(!this.hits.length)return;e&&(this.hitIndex=(this.hitIndex+e+this.hits.length)%this.hits.length);let t=this.hits[this.hitIndex];this.select(t),this.controls.flyTo(t,1300,this.lens==="expansion"?15:12)}async toggleHands(e){if(this.handsOn=e,this.renderHandPanel(),e){let t=document.getElementById("handvid");if(!t){this.handsOn=!1,this.toast("Hand tracking unavailable: no video surface",!0);return}try{await this.hands.start(t)}catch(i){this.handsOn=!1,this.toast(`Hand tracking unavailable: ${i.message}`,!0)}}else this.releaseHandGrab(),this.hands.stop();this.renderHandPanel()}releaseHandGrab(){if(!this.handGrab)return;let e=this.handGrab.ids.length;this.handGrab=null,this.store.endMove(`grabbed ${e} thought${e===1?"":"s"}`),this.refresh()}onHand(e){if(this.drawLandmarks(e),this.renderHandPanel(),!e.present||e.pose==="none"){this.releaseHandGrab();return}this.runHandOperation(e.pose,!1,e)}runHandOperation(e,t,i){let s=yi.find(o=>o.id===e);this.showGesture(t?`mouse:${e}`:e,s.operation.split(" \u2014 ")[0]);let r=this.now(),a=!t&&r-this.lastHandOp<250;if(e==="spread"||e==="gather"){if(a)return;this.lastHandOp=r,this.controls.zoom(e==="spread"?t?1/1.12:.965:t?1.12:1/.965)}else if(e==="two"){let o=this.scene.renderer.domElement,l=i?(1-i.x)*o.width:o.width/2,c=i?i.y*o.height:o.height/2;this.select(this.scene.pick(l,c,26))}else if(e==="fist"){let o=this.scene.renderer.domElement,l=i?(1-i.x)*o.width:o.width/2,c=i?i.y*o.height:o.height/2;if(!this.handGrab){let x=this.scene.pick(l,c,70);if(!x)return;this.handGrab={ids:this.controls.clusterOf(x),x:l,y:c},this.store.beginMove();return}let h=this.store.node(this.handGrab.ids[0]);if(!h){this.releaseHandGrab();return}let d=new D(...h.pos),u=this.scene.screenToWorld(this.handGrab.x,this.handGrab.y,d),g=this.scene.screenToWorld(l,c,d).sub(u);g.length()>.02&&(this.store.moveCluster(this.handGrab.ids,[g.x,g.y,g.z]),this.handGrab.x=l,this.handGrab.y=c)}this.scene.markDirty()}drawLandmarks(e){let t=document.getElementById("handlm");if(!t)return;t.width!==288&&(t.width=288,t.height=216);let i=t.getContext("2d");if(i.clearRect(0,0,t.width,t.height),!e.present)return;let s=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[17,18],[18,19],[19,20],[0,17]],r=o=>(1-o.x)*t.width,a=o=>o.y*t.height;i.strokeStyle="#FFB020",i.lineWidth=2;for(let[o,l]of s){let c=e.landmarks[o],h=e.landmarks[l];!c||!h||(i.beginPath(),i.moveTo(r(c),a(c)),i.lineTo(r(h),a(h)),i.stroke())}i.fillStyle="#EFE6D8";for(let o of e.landmarks)i.beginPath(),i.arc(r(o),a(o),2.6,0,7),i.fill()}now(){return this.virtualNow??performance.now()}renderFrame(){let e=this.now();this.controls.tickTimers(e),this.controls.tickFly(e),this.tickUi(e),this.scene.clock=this.frozenClock??e/1e3,this.scene.render(),this.renderPin(),this.renderGrab(),this.renderReticle(),this.renderHidden(),this.placeTools(),this.renderClusterProof(),this.renderGestureLiveness()}captionState=null;renderGestureLiveness(){let e=document.getElementById("gesture");if(!e||!e.classList.contains("show")){this.captionState=null;return}let t=this.lastGesture,i=!!t&&!t.id.startsWith("mouse:")&&yi.some(o=>o.id===t.id),s=i&&this.hands.enabled&&this.hands.frame.present&&this.hands.frame.pose===t.id,r=i&&!s;this.captionState={id:t?t.id:null,fromHand:i,held:r,present:this.hands.frame.present,pose:this.hands.frame.pose,conf:+this.hands.frame.confidence.toFixed(2)},e.classList.toggle("held",r);let a=e.querySelector(".h");if(!r){a?.remove();return}a||(a=vt("span",{class:"h","data-t":"gesture-held"}),e.appendChild(a)),a.textContent=" \xB7 last pose, held"}renderAt(e){this.virtualNow=e,this.renderFrame()}tickUi(e){this.uiUntil.toast&&e>=this.uiUntil.toast&&(ve("#toast").className="",this.uiUntil.toast=0),this.uiUntil.gesture&&e>=this.uiUntil.gesture&&(ve("#gesture").classList.remove("show"),this.uiUntil.gesture=0)}loop=()=>{this.renderFrame(),this.raf=requestAnimationFrame(this.loop)};stop(){cancelAnimationFrame(this.raf)}start(){cancelAnimationFrame(this.raf),this.raf=requestAnimationFrame(this.loop)}refresh(){ve("[data-t=map-name]").textContent=this.store.doc.name;{let t=document.querySelector("[data-t=tool-undo]"),i=this.store.undoableMove;this.renderUndoRow(),t&&(t.disabled=!i,t.textContent=i?`Undo: ${i.what}`:"Nothing to undo",t.title=i?`Put back: ${i.what} \u2014 Ctrl+Z`:"No move has been made on this map")}ve("[data-t=holding-count]").textContent=String(this.store.holdingCount()),ve("[data-t=holding-chip]").classList.toggle("on",this.store.holdingCount()>0),this.renderEditor(),ve("#finder")&&this.renderFinder(),ve("#settings")&&this.renderSyncStatus()}panelOpen(){return!!document.querySelector("#finder, #states, .overlay")}reflowSessionChips(){let e=this.panelOpen();for(let t of["origin","activity"]){let i=document.getElementById(t);i&&(i.style.visibility=e?"hidden":"")}}showOrigin(e){let t=document.getElementById("origin");t||(t=vt("div",{id:"origin","data-t":"map-origin"}),document.body.appendChild(t)),t.className=e.from==="seed"?"seed":"",t.innerHTML=e.from==="seed"?`first launch \xB7 restored from the committed seed <b>${dt((e.file??"").replace("seeds/",""))}</b>`+(e.sha256?` <span class="mono">${dt(e.sha256.slice(0,12))}</span>`:""):"live state"}placeBadge(e,t){let i=window.innerWidth,s=window.innerHeight,r=8,a=e.getBoundingClientRect(),o=a.width,l=a.height,c=this.scene.renderer.domElement.width/Math.max(window.innerWidth,1),h=this.scene.screenPositions().map(x=>({x:x.x/c,y:x.y/c,r:Math.max(x.r/c,3)})),d=[[a.left,a.top]];for(let x of t)d.push([x.left-r-o,a.top],[x.right+r,a.top],[a.left,x.bottom+r],[a.left,x.top-r-l],[x.left-r-o,x.bottom+r],[x.right+r,x.bottom+r],[x.left-r-o,x.top-r-l],[x.right+r,x.top-r-l]);d.push([r,r],[i-o-r,r],[r,s-l-r],[i-o-r,s-l-r]);let u=a.left,f=a.top,g=1/0;for(let[x,p]of d){let m=Math.min(Math.max(x,r),Math.max(r,i-o-r)),A=Math.min(Math.max(p,r),Math.max(r,s-l-r)),R=0;for(let S of t){let w=Math.min(m+o,S.right)-Math.max(m,S.left),v=Math.min(A+l,S.bottom)-Math.max(A,S.top);w>0&&v>0&&(R+=w*v)}let M=0;for(let S of h)S.x+S.r>m&&S.x-S.r<m+o&&S.y+S.r>A&&S.y-S.r<A+l&&M++;let b=R*4096+M*1e5+Math.hypot(m-a.left,A-a.top);b<g&&(g=b,u=m,f=A)}e.style.left=`${Math.round(u)}px`,e.style.right="auto",e.style.top=`${Math.round(f)}px`,t.push(new DOMRect(u,f,o,l))}static CHROME_SELECTORS=["#top","#states","#editor","#finder","#hands","#tools","#unlabelled","#hidden","#hitbreak","#origin","#lenstag","#toast","#gesture","#argyro","#reticle","#pinmark","#grabmark","#grabcand","#clusterproof","#activity","#maps-home","#settings"];nodesUnderChrome(){return this.nodesUnderChromeDetail().map(e=>e.id)}coveredByChrome(e){let t=this.nodesUnderChromeDetail(!1).find(i=>i.id===e);return t?t.by:null}nodesUnderChromeDetail(e=!0){let t=[];for(let a of n.CHROME_SELECTORS){let o=document.querySelector(a);if(!o)continue;let l=getComputedStyle(o);if(l.display==="none"||l.visibility==="hidden"||Number(l.opacity)<.05||!(o.textContent||"").trim())continue;if(a==="#pinmark"||a==="#grabmark"||a==="#grabcand"){let d=o.querySelector(".tag");if(!d)continue;let u=d.getBoundingClientRect();u.width>2&&u.height>2&&t.push({sel:a,r:u});continue}let h=this.outerRect(o);h.width>2&&h.height>2&&t.push({sel:a,r:h})}let i=this.namedElsewhere(),s=this.scene.renderer.domElement.width/Math.max(window.innerWidth,1),r=[];for(let a of this.scene.screenPositions()){let o=a.x/s,l=a.y/s,c=Math.max(a.r/s,2);if(e&&i.has(a.id))continue;let h=t.find(d=>o+c>d.r.left&&o-c<d.r.right&&l+c>d.r.top&&l-c<d.r.bottom);h&&r.push({id:a.id,by:h.sel})}return r}chromeAudit(){let e=n.CHROME_SELECTORS,t=[];for(let c of e){let h=document.querySelector(c);if(!h)continue;let d=getComputedStyle(h);if(d.display==="none"||d.visibility==="hidden"||Number(d.opacity)<.05||!(h.textContent||"").trim())continue;let u=this.outerRect(h);u.width<2||u.height<2||t.push({id:c,x0:u.left,y0:u.top,x1:u.right,y1:u.bottom})}let i=window.innerWidth,s=window.innerHeight,r=t.filter(c=>c.x0<-.5||c.y0<-.5||c.x1>i+.5||c.y1>s+.5).map(c=>({id:c.id,x:Math.round(c.x0),y:Math.round(c.y0),past:Math.round(Math.max(-c.x0,-c.y0,c.x1-i,c.y1-s))})),a=[];for(let c=0;c<t.length;c++)for(let h=c+1;h<t.length;h++){let d=t[c],u=t[h],f=Math.min(d.x1,u.x1)-Math.max(d.x0,u.x0),g=Math.min(d.y1,u.y1)-Math.max(d.y0,u.y0);f>.5&&g>.5&&a.push({a:d.id,b:u.id,areaPx:Math.round(f*g)})}a.sort((c,h)=>h.areaPx-c.areaPx);let o=this.nodesUnderChromeDetail(),l=o.map(c=>c.id);return{checked:t.length,overlapping:a.length,worstOverlapPx:a[0]?.areaPx??0,boxes:t,pairs:a.slice(0,8),offFrame:r,nodesUnderChrome:l.length,nodesUnderChromeIds:l.slice(0,12),nodesUnderChromeBy:[...new Set(o.map(c=>c.by))],heldNodesUnderChrome:o.filter(c=>{let h=this.store.doc.nodes[c.id];return h&&!h.placed}).length,noTwoChromePanelsOverlap:a.length===0,everyChromeBadgeInsideTheFrame:r.length===0,noNodeBuriedByChrome:l.length===0,noHeldNodeBuriedByChrome:o.every(c=>{let h=this.store.doc.nodes[c.id];return!h||h.placed})}}outerRect(e){let t=e.getBoundingClientRect(),i=getComputedStyle(e);if(i.overflow!=="visible"||i.overflowY!=="visible"||i.overflowX!=="visible")return t;let s=t.left,r=t.top,a=t.right,o=t.bottom;for(let l of Array.from(e.children)){let c=l.getBoundingClientRect();c.width<1||c.height<1||(s=Math.min(s,c.left),r=Math.min(r,c.top),a=Math.max(a,c.right),o=Math.max(o,c.bottom))}return new DOMRect(s,r,a-s,o-r)}badgeBlockers(){let e=[];for(let t of["#top","#states","#editor","#finder","#hands","#tools","#unlabelled","#pinmark","#grabmark","#lenstag","#gesture","#argyro","#clusterproof"]){let i=document.querySelector(t);if(!i||getComputedStyle(i).display==="none")continue;let s=this.outerRect(i);s.width>2&&s.height>2&&e.push(s)}return e}renderHidden(){let e=document.getElementById("hidden");e||(e=vt("div",{id:"hidden","data-t":"labels-hidden"}),document.body.appendChild(e));let t=this.unnamedOnScreen().length,i=this.scene.shortened;e.className=t>0||i>0||this.scene.compressed>0||this.scene.reduced>0?"show":"";let s=[];t>0&&s.push(`${t} label${t===1?"":"s"} hidden`),i>0&&s.push(`${i} shortened`);let r=this.scene.compressed;r>0&&s.push(`${r} named by their opening word`);let a=this.scene.reduced;a>0&&s.push(`${a} set smaller to fit`);let o=document.getElementById("unlabelled"),l=!!o&&o.classList.contains("show")&&!!(o.textContent||"").trim();if(e.textContent=s.length?`${s.join(" \xB7 ")} at this framing${l?" \xB7 listed at right":""}`:"",e.className==="show"){e.style.top="",e.style.right="",e.style.left="";let c=this.badgeBlockers();for(let h of["#origin","#hitbreak"]){let d=document.getElementById(h.slice(1));if(!d||getComputedStyle(d).display==="none"||!d.textContent)continue;let u=d.getBoundingClientRect();u.width>2&&u.height>2&&c.push(u)}this.placeBadge(e,c)}this.renderUnlabelled(),this.renderLeaders(),this.renderHitBreakdown()}renderGrab(){let e=document.getElementById("grabmark"),t=this.handGrab;if(!t||!t.ids.length){e?.remove(),this.renderGrabCandidate();return}this.renderGrabCandidate(),e||(e=vt("div",{id:"grabmark","data-t":"grab-mark"}),e.innerHTML='<div class="ring"></div><div class="tag" data-t="grab-name"></div>',document.body.appendChild(e));let i=this.scene.renderer.domElement.width/Math.max(window.innerWidth,1),s=new Set(t.ids),r=this.scene.screenPositions().filter(u=>s.has(u.id));if(!r.length){e.className="";return}let a=1/0,o=1/0,l=-1/0,c=-1/0;for(let u of r)a=Math.min(a,u.x-u.r),l=Math.max(l,u.x+u.r),o=Math.min(o,u.y-u.r),c=Math.max(c,u.y+u.r);let h=16;e.className="on",e.style.left=`${Math.round(a/i-h)}px`,e.style.top=`${Math.round(o/i-h)}px`,e.style.width=`${Math.round((l-a)/i+h*2)}px`,e.style.height=`${Math.round((c-o)/i+h*2)}px`;let d=this.store.doc.nodes[t.ids[0]]?.label??"";ve("[data-t=grab-name]",e).textContent=`holding ${t.ids.length} thought${t.ids.length===1?"":"s"}${d?` \xB7 ${d}`:""}`}renderGrabCandidate(){let e=document.getElementById("grabcand"),t=this.hands.frame;if(!(this.hands.enabled&&t.present&&!this.handGrab)){e?.remove();return}let s=this.scene.renderer.domElement,r=(1-t.x)*s.width,a=t.y*s.height,o=this.scene.pick(r,a,70),l=o?this.controls.clusterOf(o):[];if(!l.length){e?.remove();return}e||(e=vt("div",{id:"grabcand","data-t":"grab-candidate"}),e.innerHTML='<div class="ring"></div><div class="tag" data-t="grab-candidate-name"></div>',document.body.appendChild(e));let c=s.width/Math.max(window.innerWidth,1),h=new Set(l),d=this.scene.screenPositions().filter(A=>h.has(A.id));if(!d.length){e.className="";return}let u=1/0,f=1/0,g=-1/0,x=-1/0;for(let A of d)u=Math.min(u,A.x-A.r),g=Math.max(g,A.x+A.r),f=Math.min(f,A.y-A.r),x=Math.max(x,A.y+A.r);let p=14;e.className="on",e.style.left=`${Math.round(u/c-p)}px`,e.style.top=`${Math.round(f/c-p)}px`,e.style.width=`${Math.round((g-u)/c+p*2)}px`,e.style.height=`${Math.round((x-f)/c+p*2)}px`;let m=this.store.doc.nodes[l[0]]?.label??"";ve("[data-t=grab-candidate-name]",e).textContent=`a fist takes ${l.length} thought${l.length===1?"":"s"}${m?` \xB7 ${m}`:""}`}renderLeaders(){let e=document.getElementById("leaders");e||(e=document.createElementNS("http://www.w3.org/2000/svg","svg"),e.setAttribute("id","leaders"),e.setAttribute("data-t","label-leaders"),document.body.appendChild(e));let i=this.scene.renderer.domElement.width/Math.max(window.innerWidth,1),s=this.scene.screenPositions(),r=[];this.leaderFor.clear();for(let a of s){if(!this.store.doc.nodes[a.id])continue;let l=this.scene.labelRects.get(a.id);if(!l||l.alpha<=.02||this.namedElsewhere().has(a.id)||!this.scene.labelNeedsLeader.has(a.id)&&!this.scene.ambiguousLabels.has(a.id))continue;this.leaderFor.add(a.id);let h=a.x/i,d=a.y/i,u=Math.min(Math.max(h,l.x0/i),l.x1/i),f=Math.min(Math.max(d,l.y0/i),l.y1/i),g=Math.hypot(u-h,f-d)||1,x=Math.max(a.r/i,3)+2,p=Math.min(x/g,.9);r.push(`<line x1="${(h+(u-h)*p).toFixed(1)}" y1="${(d+(f-d)*p).toFixed(1)}" x2="${u.toFixed(1)}" y2="${f.toFixed(1)}"></line>`)}e.innerHTML=r.join(""),this.scene.setDrawnLeaders(this.leaderFor)}unlistedCount=0;railChoice=null;railFloor(e){let t=window.innerHeight-12;for(let i of["#hands","#tools","#gesture","#lenstag","#argyro"]){let s=document.querySelector(i);if(!s||getComputedStyle(s).display==="none"||!s.textContent)continue;let r=this.outerRect(s);r.width>2&&r.height>2&&r.right+6>e.left&&r.left<e.right&&(t=Math.min(t,r.top-10))}return t}railTop(e){let t=0;for(let i of["#editor","#hidden","#hitbreak","#origin","#states","#finder","#clusterproof"]){let s=document.querySelector(i);if(!s||getComputedStyle(s).display==="none"||!s.textContent)continue;let r=this.outerRect(s);r.width<2||r.height<2||r.right+6>e.left&&r.left<e.right&&(t=Math.max(t,r.bottom+10))}return t}leaderFor=new Set;aimedAt=null;renderUnlabelled(){let e=document.getElementById("unlabelled");e||(e=vt("div",{id:"unlabelled","data-t":"unlabelled-list"}),document.body.appendChild(e));let t=this.unnamedOnScreen(),i=(this.lens==="expansion"||this.lens==="canvas")&&t.length>0&&!this.panelOpen();if(e.className=i?"show":"",!i){e.innerHTML="",e.style.top="";return}{let f=this.scene.renderer.domElement.width/Math.max(window.innerWidth,1),g=this.scene.screenPositions().map(w=>[w.x/f,w.y/f]),x=18,m=t.length+8,A=()=>{let w=e.getBoundingClientRect();if(w.width<2)return{buried:0,fits:!0,rows:m};let v=Math.max(w.top,this.railTop(w)),E=Math.min(w.bottom,this.railFloor(w)),I=window.innerWidth>=1400?2:1,T=Math.max(0,Math.floor((E-v)/x))*I;return{buried:g.filter(([U,B])=>U>w.left-4&&U<w.right+4&&B>v-4&&B<E+4).length,rows:T,fits:T>=m}};e.classList.remove("left");let R=A();e.classList.add("left");let M=A(),b=w=>(w.fits?0:1e6+(m-w.rows))+w.buried,S=b(M)<b(R);e.classList.toggle("left",S),this.railChoice={left:M.buried,right:R.buried,side:S?"left":"right",leftRows:M.rows,rightRows:R.rows,rowsNeeded:m}}{e.style.top="";let f=e.getBoundingClientRect(),g=this.railTop(f);e.style.top=g?`${Math.round(g)}px`:"",e.style.bottom="";let x=e.getBoundingClientRect(),p=window.innerHeight-12;for(let m of["#hands","#tools","#gesture","#lenstag","#argyro"]){let A=document.querySelector(m);if(!A||getComputedStyle(A).display==="none"||!A.textContent)continue;let R=this.outerRect(A);R.width>2&&R.height>2&&R.right+6>x.left&&R.left<x.right&&(p=Math.min(p,R.top-10))}p<x.bottom&&(e.style.bottom=`${Math.round(window.innerHeight-p)}px`)}let s=t.map(f=>this.store.doc.nodes[f]).filter(Boolean).sort((f,g)=>f.createdAt-g.createdAt),r=f=>`<li>${dt(f.text)}</li>`,a=f=>`<h4>${f} thought${f===1?"":"s"} on screen without room for a label</h4>`,o=f=>{let g=new Map;for(let x of f){let p=x.label||"\u2014";(g.get(p)??g.set(p,[]).get(p)).push(x)}return[...g.entries()].sort((x,p)=>p[1].length-x[1].length||(x[0]<p[0]?-1:1))},l=(f,g,x)=>`<h5><i style="background:${g}"></i>${dt(f)} <b>${x}</b></h5>`,c=(f,g="")=>{let x=[a(s.length)];for(let[p,m]of o(f)){let A=ia[m[0].color]??"#8A7C70";x.push(l(p,A,m.length)),x.push(m.map(r).join(""))}return x.join("")+g};e.classList.remove("two"),e.innerHTML=c(s);let h=s.length,d=()=>{let f=Math.min(e.getBoundingClientRect().bottom,window.innerHeight-12),g=e.getBoundingClientRect();for(let x of["#hands","#tools","#gesture","#lenstag","#argyro"]){let p=document.querySelector(x);if(!p||getComputedStyle(p).display==="none")continue;let m=this.outerRect(p);m.width>2&&m.height>2&&m.right+6>g.left&&m.left<g.right&&(f=Math.min(f,m.top-10))}return f},u=()=>{let f=e.lastElementChild;return!f||f.getBoundingClientRect().bottom<=d()-2};if(!u()&&window.innerWidth>=1400&&(e.classList.add("two"),e.innerHTML=c(s)),!u())for(;h>1&&!u();)h--,e.innerHTML=c(s.slice(0,h),`<li class="more">\u2026and ${s.length-h} more</li>`);this.unlistedCount=s.length-h}renderClusterProof(){let e=document.getElementById("clusterproof"),t=this.controls?.lastClusterMove??null;if(!t){e?.remove();return}e||(e=vt("div",{id:"clusterproof","data-t":"cluster-proof"}),document.body.appendChild(e)),e.className=this.panelOpen()?"":"show",e.innerHTML=`cluster <b>${dt(t.label)}</b> \xB7 ${t.members} nodes moved together<br>travelled <b>${t.travelled.toFixed(2)}</b> \xB7 internal arrangement drift <b>${t.drift.toFixed(6)}</b>`;let i=document.getElementById("origin"),r=i&&getComputedStyle(i).display!=="none"?i.getBoundingClientRect():null;e.style.top=r&&r.height>1?`${Math.round(r.bottom+8)}px`:""}renderActivity(){let e=document.getElementById("activity");e||(e=vt("div",{id:"activity","data-t":"last-change"}),document.body.appendChild(e));let t=this.store.lastChange;if(!t){e.className="",e.textContent="";return}e.className="show"+(t.remote?" remote":""),e.innerHTML=t.remote?`last change arrived from <b>${dt(t.actor)}</b> \u2014 ${dt(t.what)}`:`last change made here \u2014 ${dt(t.what)}`}dismissToast(){let e=document.getElementById("toast");e&&(e.className="",e.textContent=""),this.uiUntil.toast=0}toast(e,t=!1){let i=ve("#toast");i.textContent=e,i.className="show"+(t?" bad":""),this.uiUntil.toast=this.now()+(t?9e3:4200)}showGesture(e,t){this.lastGesture={id:e,detail:t,at:performance.now()};let i=ve("#gesture"),s=cu.find(h=>h.id===e),r=yi.find(h=>h.id===e||`mouse:${h.id}`===e),a=S1[e],o=s?.name??r?.name??a?.name??(e==="gyro"?"Gyroscope":e),l=e.startsWith("mouse:")?r:a?.standsIn?yi.find(h=>h.id===a.standsIn):void 0,c=l?e.startsWith("mouse:")?`${l.mouse.split(", or ")[0]} \u2014 the ${l.name} equivalent`:`${o} \u2014 the ${l.name} equivalent`:o;i.innerHTML=`<span class="n">${dt(c)}</span> <span class="o">\u2014 ${dt(t)}</span>`,i.classList.add("show"),this.uiUntil.gesture=this.now()+2600}get lastGestureFired(){return this.lastGesture}renderEditor(){let e=document.getElementById("editor"),t=this.selected?this.store.node(this.selected):void 0;if(!t){e?.remove();return}let i=e??(()=>{let a=vt("div",{class:"panel",id:"editor","data-t":"editor"});return document.body.appendChild(a),a})(),s=this.controls.linkArmed===t.id;i.innerHTML=`
      <h3>Node${t.placed?"":" \xB7 unplaced, in holding"}</h3>
      <label>Text</label><input data-t="ed-text" value="${dt(t.text)}">
      <label>Label</label><input data-t="ed-label" value="${dt(t.label)}">
      <label>Colour</label><div class="swatches" data-t="ed-colours">
        ${Nd.map(a=>`<button class="sw${a===t.color?" on":""}" data-t="ed-colour-${a}" style="background:${ia[a]}" title="${a}"></button>`).join("")}
      </div>
      <div class="row">
        <button data-t="ed-link" class="${s?"on":""}">${s?"Pick a node\u2026":"Connect"}</button>
        <button data-t="ed-flyto">Fly to</button>
        <button data-t="ed-pin" class="${this.pinned===t.id?"on":""}">${this.pinned===t.id?"Kept in view":"Keep in view"}</button>
      </div>
      <div class="row"><button data-t="ed-delete">Delete</button><button data-t="ed-close">Close</button></div>
      <div class="note" data-t="ed-recency">${dt(this.recencyLine(t))}</div>
      <div class="note mono">${t.id} \xB7 ${t.pos.map(a=>a.toFixed(1)).join(", ")}</div>`;let r=t.id;ve("[data-t=ed-text]",i).addEventListener("input",a=>this.store.setText(r,a.target.value)),ve("[data-t=ed-label]",i).addEventListener("input",a=>this.store.setLabel(r,a.target.value));for(let a of Nd)ve(`[data-t=ed-colour-${a}]`,i).addEventListener("click",()=>this.store.setColor(r,a));ve("[data-t=ed-link]",i).addEventListener("click",()=>{this.controls.armLink(r),this.toast("Now click the node to connect to."),this.renderEditor()}),ve("[data-t=ed-flyto]",i).addEventListener("click",()=>this.controls.flyTo(r)),ve("[data-t=ed-pin]",i).addEventListener("click",()=>this.togglePin(r)),ve("[data-t=ed-delete]",i).addEventListener("click",()=>{this.store.remove(r),this.select(null)}),ve("[data-t=ed-close]",i).addEventListener("click",()=>this.select(null))}recencyLine(e){let t=Cn(this.store.doc),i=qc(this.store.doc,e),s=t.filter(l=>l.createdAt<e.createdAt).length,r=t.length>1?Math.round(100*s/(t.length-1)):100,a=new Date(e.createdAt).toISOString().slice(0,10),o=i>=.8?"full chroma \u2014 recently touched":i>=.45?"mid chroma":"muted \u2014 settled";return`Captured ${a} \xB7 newer than ${r}% of this map \xB7 ${o}`}closeOverlays(){for(let e of["maps","settings"])document.getElementById(e)?.remove()}mapSpan(e){if(!e.firstThoughtAt||!e.newestThoughtAt)return"\u2014";let t=Math.max(0,Math.round((e.newestThoughtAt-e.firstThoughtAt)/864e5));return`${t>=60?`${Math.round(t/30)} months`:t>=14?`${Math.round(t/7)} weeks`:t>=1?`${t} days`:"one sitting"}${e.thisWeek?` \xB7 ${e.thisWeek} this week`:""}`}openMapsHome(){this.closeOverlays();let e=vt("div",{class:"overlay",id:"maps","data-t":"maps-home"});document.body.appendChild(e),this.sync.request({t:"maps.list"}),this.renderMaps()}renderMaps(){let e=document.getElementById("maps");if(!e)return;let t=e.querySelector("[data-t=maps-new-name]")?.value??"";e.innerHTML=`
      <button class="close" data-t="maps-close">Close</button>
      <h1>Maps</h1><p class="sub">Unlimited maps. Open one to reach every lens on this surface.</p>
      <div class="row" style="max-width:520px;margin:0 0 16px">
        <input data-t="maps-new-name" placeholder="name a new map\u2026" style="flex:2" value="${dt(t)}">
        <button data-t="maps-create" style="flex:0 0 auto">Create map</button>
      </div>
      <table><thead><tr><th>Map</th><th>Nodes</th><th>Grown over</th><th>Last opened</th><th style="width:210px"></th></tr></thead>
      <tbody>${this.maps.map(i=>`
        <tr class="map maprow" data-t="map-row-${i.id}">
          <td>${dt(i.name)}</td>
          <td class="num" data-t="map-nodes-${i.id}">${i.nodes}</td>
          <td class="num" data-t="map-age-${i.id}">${this.mapSpan(i)}</td>
          <td class="num">${H3(i.lastOpenedAt)}</td>
          <td><div style="display:flex;gap:5px">
            <button data-t="map-open-${i.id}">Open</button>
            <button data-t="map-rename-${i.id}" class="ghost">Rename</button>
            <button data-t="map-delete-${i.id}" class="ghost">Delete</button>
          </div></td></tr>`).join("")}</tbody></table>`,ve("[data-t=maps-close]",e).addEventListener("click",()=>this.closeOverlays()),ve("[data-t=maps-create]",e).addEventListener("click",()=>{let i=ve("[data-t=maps-new-name]",e).value.trim()||"Untitled map";this.sync.request({t:"maps.create",id:Ud("map-"),name:i}),this.toast(`Created \u201C${i}\u201D.`)});for(let i of this.maps)ve(`[data-t=map-open-${i.id}]`,e).addEventListener("click",()=>this.openMap(i.id)),ve(`[data-t=map-rename-${i.id}]`,e).addEventListener("click",()=>{let s=window.prompt("Rename map",i.name);s&&this.sync.request({t:"maps.rename",id:i.id,name:s})}),ve(`[data-t=map-delete-${i.id}]`,e).addEventListener("click",()=>{this.sync.request({t:"maps.delete",id:i.id}),this.toast(`Deleted \u201C${i.name}\u201D.`)})}openMap(e){this.closeOverlays(),this.select(null),this.sync.close(),this.sync.connect(e),this.store.touchOpened()}openSettings(){this.closeOverlays();let e=vt("div",{class:"overlay",id:"settings","data-t":"settings"});e.innerHTML=`
      <button class="close" data-t="settings-close">Close</button>
      <h1>Settings</h1><p class="sub">The controls that keep the tool honest and demoable.</p>
      <h2>Hand tracking</h2>
      <div style="display:flex;align-items:center;gap:12px">
        <button data-t="hand-toggle">Hand tracking: off</button>
        <span class="chip" data-t="hand-status">status: off</span>
        <span class="note">Webcam only \u2014 no special hardware. Every hand operation also has a mouse equivalent.</span>
      </div>
      <h2>Account and sync</h2>
      <div style="display:flex;align-items:center;gap:12px">
        <span class="chip">signed in as <b data-t="account">\u2014</b></span>
        <span class="chip" data-t="sync-status">sync: \u2014</span>
        <span class="note">All maps sync: positions, text, colours, labels, connections and holding state.</span>
      </div>
      <h2>Touch gestures \u2014 Android</h2>
      <table data-t="touch-reference"><thead><tr><th>Gesture</th><th>How</th><th>Operation</th><th>Spans</th></tr></thead><tbody>
      ${cu.map(t=>`<tr><td><b>${dt(t.name)}</b></td><td>${dt(t.how)}</td><td>${dt(t.operation)}</td><td class="num">${t.span}</td></tr>`).join("")}
      </tbody></table>
      <h2>Hand poses \u2014 Windows, mind expansion</h2>
      <table data-t="hand-reference"><thead><tr><th>Pose</th><th>How</th><th>Operation</th><th>Mouse equivalent</th></tr></thead><tbody>
      ${yi.map(t=>`<tr><td><b>${dt(t.name)}</b></td><td>${dt(t.how)}</td><td>${dt(t.operation)}</td><td>${dt(t.mouse)}</td></tr>`).join("")}
      </tbody></table>
      <h2>Putting a move back</h2>
      <div style="display:flex;align-items:center;gap:12px">
        <span class="chip">Undo move \xB7 <b>Ctrl+Z</b></span>
        <span class="chip" data-t="undo-depth">\u2014</span>
        <span class="note">Moves only, and only your own explicit ones: a drag, a closed-fist grab, a
        placement out of holding. Each act goes back as one, to the exact coordinates it started from.
        Text, colours, labels and connections are not undoable \u2014 and nothing here ever tidies a layout.</span>
      </div>`,document.body.appendChild(e),ve("[data-t=settings-close]",e).addEventListener("click",()=>this.closeOverlays()),ve("[data-t=hand-toggle]",e).addEventListener("click",()=>this.toggleHands(!this.handsOn)),this.renderSyncStatus(),this.renderActivity(),this.reflowSessionChips(),this.renderHandPanel(),this.renderUndoRow()}renderUndoRow(){let e=document.getElementById("settings");if(!e)return;let t=e.querySelector("[data-t=undo-depth]");if(!t)return;let i=this.store.undoableMove;t.textContent=i?`${this.store.undoDepth} move${this.store.undoDepth===1?"":"s"} can be put back \u2014 next: ${i.what}`:"no move has been made on this map"}renderSyncStatus(){let e=document.getElementById("settings");if(!e)return;ve("[data-t=account]",e).textContent=this.sync.account;let t=ve("[data-t=sync-status]",e);t.innerHTML=`sync: <b>${this.sync.status}</b> \u2014 ${dt(this.sync.detail)}`}renderHandPanel(){let e=document.getElementById("hands");if(!this.handsOn&&!this.hands.enabled)e?.remove();else{e||(e=vt("div",{id:"hands","data-t":"hand-panel"}),e.innerHTML=`<div class="hd"><span class="dot"></span><span data-t="hand-source">capture \xB7 hand tracking</span></div>
          <div id="handwrap"><video id="handvid" data-t="hand-video" muted playsinline></video><canvas id="handlm"></canvas></div>
          <div id="handpose"><div class="p" data-t="hand-pose">\u2014</div><div class="o" data-t="hand-op"></div><div class="g" data-t="hand-geom"></div></div>`,document.body.appendChild(e));let r=this.hands.frame,a=yi.find(l=>l.id===r.pose),o=ve("[data-t=hand-source]",e);if(o){let l=(this.hands.sourceLabel||"").split("/").pop()||"";o.textContent=this.hands.synthetic?`synthesised capture${l?` \xB7 ${l}`:""} \xB7 real handlandmarker`:"webcam \xB7 hand tracking",o.setAttribute("title",this.hands.sourceLabel||"")}ve(".dot",e).classList.toggle("live",this.hands.enabled&&r.present),ve("[data-t=hand-pose]",e).textContent=r.present?a?.name??"unrecognised":"no hand",ve("[data-t=hand-op]",e).textContent=a?a.operation.split(" \u2014 ")[0]:r.present?"hold a pose":"show a hand to the camera",ve("[data-t=hand-geom]",e).textContent=`tips out ${r.reach}  fan ${r.spreadRatio.toFixed(2)}  extended ${r.extended}  conf ${r.confidence.toFixed(2)}  view ${this.scene.pose.dist.toFixed(1)}`}let t=document.querySelector("[data-t=hands-chip]");if(t){let r=this.hands.frame,a=yi.find(o=>o.id===r.pose);t.textContent=`Hands: ${this.handsOn?"on":"off"}`+(this.handsOn?` \xB7 ${this.hands.status}${r.present&&a?` \xB7 ${a.name}`:""}`:""),t.classList.toggle("on",this.handsOn&&this.hands.enabled)}let i=document.querySelector("[data-t=hand-toggle]");i&&(i.textContent=`Hand tracking: ${this.handsOn?"on":"off"}`,i.classList.toggle("on",this.handsOn));let s=document.querySelector("[data-t=hand-status]");if(s){let r=this.hands.frame,a=yi.find(o=>o.id===r.pose)?.name;s.textContent=`status: ${this.hands.status}`+(r.present?` \xB7 ${a??"unrecognised"}`:"")}}toggleStates(){let e=document.getElementById("states");if(e){e.remove(),this.reflowSessionChips();return}let t=[["Plain","bare core, quiet","placed, nothing selected near it"],["Connected to selection","one thin outer ring","linked to the node you have selected"],["Unplaced, in holding","dashed ring, slow pulse of light","captured but not yet given a home"],["Search hit","four ticks at north, east, south, west","matches the current search"],["Selected","solid heavy ring","the node you are working on"]],i=vt("div",{class:"panel",id:"states","data-t":"states-legend",style:"top:56px;left:12px;width:590px;padding:12px"});i.innerHTML=`<h3 style="margin:0 0 8px;font-size:12px;letter-spacing:.6px;text-transform:uppercase;color:var(--ink-dim)">Node states</h3>
      <table>${t.map(([s,r,a])=>`<tr><td><b>${dt(s)}</b></td><td>${dt(r)}</td><td class="num">${dt(a)}</td></tr>`).join("")}</table>
      <div class="note">Brightness rises down this list; every state also carries its own ring, so the two read together.</div>
      <div class="note"><b>Colour</b> names the district. <b>Chroma</b> names age: muted = settled, full chroma = recently touched \u2014 so <b>within a district</b>, its frontier reads as its most saturated region. Saturation is not comparable between districts: a hue's own gamut sets its ceiling.</div>
      <div class="row"><button data-t="states-close">Close</button></div>`,document.body.appendChild(i),this.clearOfPanels(this.selected??void 0),this.reflowSessionChips(),ve("[data-t=states-close]",i).addEventListener("click",()=>{i.remove(),this.reflowSessionChips()})}toggleFinder(){let e=document.getElementById("finder");if(e){e.remove(),this.reflowSessionChips();return}let t=vt("div",{class:"panel",id:"finder","data-t":"finder"});document.body.appendChild(t),this.renderFinder(),this.reflowSessionChips()}renderFinder(){let e=document.getElementById("finder");if(!e)return;let t=this.suggestions[this.sugIndex],i=ve("[data-t=finder-prompt]",e)?.value??"",s=ve("[data-t=finder-reply]",e)?.value??"";e.innerHTML=`
      <h3>Connection finder \xB7 JSON prompt harness</h3>
      <div class="row" style="margin-top:0">
        <button data-t="finder-generate">Generate prompt</button>
        <button data-t="finder-copy" class="ghost">Copy</button>
        <button data-t="finder-close" class="ghost" style="flex:0 0 70px">Close</button>
      </div>
      <label class="note">Paste-ready prompt \u2014 carries the map JSON including every position</label>
      <textarea data-t="finder-prompt" rows="7" spellcheck="false"></textarea>
      <label class="note">Paste the AI's reply back here</label>
      <textarea data-t="finder-reply" rows="6" spellcheck="false" placeholder="paste the reply\u2026"></textarea>
      <div class="row"><button data-t="finder-parse">Parse reply</button></div>
      <div class="tail">
      ${this.lastParse&&!this.lastParse.ok?`<div class="err" data-t="finder-error">${dt(this.lastParse.error??"parse failed")}</div>`:""}
      ${this.lastParse?.dropped.length?(()=>{let o=[...this.lastParse.dropped].sort((l,c)=>(/placed/.test(c.why)?1:0)-(/placed/.test(l.why)?1:0));return`<div class="rejected" data-t="finder-dropped"><h5>${o.length} entr${o.length===1?"y":"ies"} rejected</h5>`+o.map(l=>`<div class="r"><b>${dt(l.what)}</b> <span>${dt(l.why)}</span></div>`).join("")+"</div>"})():""}
      ${this.suggestions.length?`
        <div class="note" data-t="finder-progress">Suggestion ${this.sugIndex+1} of ${this.suggestions.length} \xB7 nothing is applied until you accept</div>
        ${t?`<div class="sug" data-t="finder-current">
          <div class="k" data-t="finder-kind">${t.kind}</div>
          <div class="d">${dt(hu(t,this.store.doc))}</div>
          <div class="w">${dt(t.why||"\u2014")}</div>
          <div class="row"><button data-t="finder-accept" class="affirm">Accept</button><button data-t="finder-reject" class="ghost">Reject</button></div>
        </div>`:""}
        <div class="note">Staged, one at a time: ${this.suggestions.map(o=>o.kind).join(" \xB7 ")}</div>
      `:""}
      </div>`,ve("[data-t=finder-prompt]",e).value=i,ve("[data-t=finder-reply]",e).value=s,ve("[data-t=finder-close]",e).addEventListener("click",()=>e.remove()),ve("[data-t=finder-generate]",e).addEventListener("click",()=>{ve("[data-t=finder-prompt]",e).value=w1(this.store.doc),this.toast("Prompt built from the current map \u2014 paste it into any AI chat.")}),ve("[data-t=finder-copy]",e).addEventListener("click",async()=>{let o=ve("[data-t=finder-prompt]",e);o.select();try{await navigator.clipboard.writeText(o.value),this.toast("Prompt copied.")}catch{document.execCommand("copy"),this.toast("Prompt copied.")}}),ve("[data-t=finder-parse]",e).addEventListener("click",()=>{let o=ve("[data-t=finder-reply]",e).value;this.parseFinderReply(o)}),ve("[data-t=finder-reply]",e).addEventListener("input",()=>{if(!this.lastParse&&!this.suggestions.length)return;let o=ve("[data-t=finder-reply]",e).value;this.lastParse=null,this.suggestions=[],this.sugIndex=0,this.dismissToast(),this.renderFinder();let l=document.querySelector("[data-t=finder-reply]");l&&(l.value=o,l.focus())});let r=document.querySelector("[data-t=finder-accept]");r&&r.addEventListener("click",()=>this.acceptSuggestion());let a=document.querySelector("[data-t=finder-reject]");a&&a.addEventListener("click",()=>this.rejectSuggestion())}parseFinderReply(e){let t=E1(e,this.store.doc);return this.lastParse=t,t.ok?(this.suggestions=t.suggestions,this.sugIndex=0,this.toast(`${t.suggestions.length} suggestions staged. Nothing is applied until you accept.`)):(this.suggestions=[],this.sugIndex=0,this.toast(t.error??"Could not read that reply. Nothing was changed.",!0)),this.renderFinder(),t}acceptSuggestion(){let e=this.suggestions[this.sugIndex];if(!e)return;let t=e.kind==="grouping"?e.nodes.map(i=>this.store.doc.nodes[i]?.label).filter(Boolean):null;A1(this.store,e),this.toast(t&&t.length?`Applied: ${hu(e,this.store.doc)} \u2014 labels were ${t.map(i=>`\u201C${i}\u201D`).join(", ")}`:`Applied: ${hu(e,this.store.doc)}`),this.suggestions.splice(this.sugIndex,1),this.sugIndex>=this.suggestions.length&&(this.sugIndex=Math.max(0,this.suggestions.length-1)),this.scene.markDirty(),this.renderFinder()}rejectSuggestion(){this.suggestions[this.sugIndex]&&(this.suggestions.splice(this.sugIndex,1),this.sugIndex>=this.suggestions.length&&(this.sugIndex=Math.max(0,this.suggestions.length-1)),this.toast("Rejected \u2014 no trace left on the map."),this.renderFinder())}stats(){let e=this.store.doc;return{map:e.id,name:e.name,lens:this.lens,surface:this.surface,nodes:Object.keys(e.nodes).length,links:Object.keys(e.links).length,holding:lr(e).length,selected:this.selected,hits:this.hits.length,sync:this.sync.status,hands:this.hands.status,pose:this.hands.frame.pose,suggestions:this.suggestions.length,positions:Object.fromEntries(Cn(e).map(t=>[t.id,t.pos]))}}glRenderer(){try{let e=this.scene.renderer.getContext(),t=e.getExtension("WEBGL_debug_renderer_info"),i=t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER);return String(i??"unknown")}catch{return"unavailable"}}provenance(){let e=navigator.userAgent,t=/Electron\/([0-9.]+)/.exec(e),i=/Chrome\/([0-9.]+)/.exec(e);return{runtime:t?`electron ${t[1]}`:i?`chromium ${i[1]}`:"unknown runtime",gl:this.glRenderer(),isElectron:!!t,platform:navigator.platform??"unknown",surface:this.surface,transport:this.sync.url,socket:this.sync.connId,serverPid:this.sync.serverPid,actor:this.sync.actor,status:this.sync.status}}},Ra=new URLSearchParams(location.search),C1=Ra.get("surface")==="android"?"android":"windows",R1=new Ip(C1);window.mm=R1;window.TEXT_COLOR=eh;R1.boot({mapId:Ra.get("map")||"map-fermentation",wsUrl:Ra.get("ws")||`ws://127.0.0.1:${Ra.get("port")||8788}`,account:Ra.get("account")||"kai@master-mind.local",actor:Ra.get("actor")||`${C1}-${Math.random().toString(36).slice(2,8)}`}).catch(n=>{document.body.appendChild(vt("pre",{style:"color:#FF6B4A;padding:24px"},String(n&&n.stack||n)))});export{Ip as App};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
