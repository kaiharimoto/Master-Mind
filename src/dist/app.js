var rm=0,Wu=1,am=2;var eo=1,om=2,Zr=3,Qi=0,bn=1,Ri=2,Ii=0,Jn=1,Xu=2,$u=3,qu=4,lm=5;var ws=100,cm=101,hm=102,um=103,dm=104,fm=200,pm=201,mm=202,gm=203,gl=204,xl=205,xm=206,vm=207,_m=208,ym=209,bm=210,Mm=211,Sm=212,wm=213,Em=214,vl=0,_l=1,yl=2,er=3,bl=4,Ml=5,Sl=6,wl=7,Yu=0,Am=1,Tm=2,ui=0,Ku=1,Zu=2,ju=3,Ju=4,Qu=5,ed=6,td=7;var nd=300,Ps=301,rr=302,Ql=303,ec=304,to=306,El=1e3,wi=1001,Al=1002,cn=1003,Cm=1004;var no=1005;var en=1006,tc=1007;var Pi=1008;var Gn=1009,id=1010,sd=1011,jr=1012,nc=1013,di=1014,fi=1015,Li=1016,ic=1017,sc=1018,Jr=1020,rd=35902,ad=35899,od=1021,ld=1022,Qn=1023,Ei=1026,Ls=1027,cd=1028,rc=1029,Ns=1030,ac=1031;var oc=1033,io=33776,so=33777,ro=33778,ao=33779,lc=35840,cc=35841,hc=35842,uc=35843,dc=36196,fc=37492,pc=37496,mc=37488,gc=37489,oo=37490,xc=37491,vc=37808,_c=37809,yc=37810,bc=37811,Mc=37812,Sc=37813,wc=37814,Ec=37815,Ac=37816,Tc=37817,Cc=37818,Rc=37819,Ic=37820,Pc=37821,Lc=36492,Nc=36494,Fc=36495,Dc=36283,Uc=36284,lo=36285,Oc=36286;var Ua=2300,Tl=2301,pl=2302,Uu=2303,Ou=2400,ku=2401,Bu=2402;var Rm=3200;var hd=0,Im=1,pi="",Bn="srgb",tr="srgb-linear",Oa="linear",pt="srgb";var js=7680;var zu=519,Pm=512,Lm=513,Nm=514,kc=515,Fm=516,Dm=517,Bc=518,Um=519,Vu=35044;var ud="300 es",hi=2e3,ka=2001;function Nv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Fv(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Wr(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Om(){let t=Wr("canvas");return t.style.display="block",t}var Up={},Xr=null;function dd(...t){let e="THREE."+t.shift();Xr?Xr("log",e,...t):console.log(e,...t)}function km(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function De(...t){t=km(t);let e="THREE."+t.shift();if(Xr)Xr("warn",e,...t);else{let n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Oe(...t){t=km(t);let e="THREE."+t.shift();if(Xr)Xr("error",e,...t);else{let n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Qs(...t){let e=t.join(" ");e in Up||(Up[e]=!0,De(...t))}function Bm(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var zm={[vl]:_l,[yl]:Sl,[bl]:wl,[er]:Ml,[_l]:vl,[Sl]:yl,[wl]:bl,[Ml]:er},Ai=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var du=Math.PI/180,Cl=180/Math.PI;function co(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mn[t&255]+mn[t>>8&255]+mn[t>>16&255]+mn[t>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[n&63|128]+mn[n>>8&255]+"-"+mn[n>>16&255]+mn[n>>24&255]+mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]).toLowerCase()}function et(t,e,n){return Math.max(e,Math.min(n,t))}function Dv(t,e){return(t%e+e)%e}function fu(t,e,n){return(1-n)*t+n*e}function Ia(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function En(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Je=class t{static{t.prototype.isVector2=!0}constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ti=class{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(d!==v||l!==h||c!==f||u!==g){let m=l*h+c*f+u*g+d*v;m<0&&(h=-h,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let E=Math.acos(m),R=Math.sin(E);p=Math.sin(p*E)/R,o=Math.sin(o*E)/R,l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+v*o}else{l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+v*o;let E=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=E,c*=E,u*=E,d*=E}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return e[n]=o*g+u*d+l*f-c*h,e[n+1]=l*g+u*h+c*d-o*f,e[n+2]=c*g+u*f+o*h-l*d,e[n+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),h=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],s=n[4],r=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,s=e._y,r=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class t{static{t.prototype.isVector3=!0}constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Op.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Op.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let n=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*n-r*s),d=2*(r*i-a*n);return this.x=n+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,s=e.y,r=e.z,a=n.x,o=n.y,l=n.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pu.copy(this).projectOnVector(e),this.sub(pu)}reflect(e){return this.sub(pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pu=new L,Op=new Ti,ze=class t{static{t.prototype.isMatrix3=!0}constructor(e,n,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,l,c)}set(e,n,i,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],E=s[1],R=s[4],y=s[7],S=s[2],M=s[5],C=s[8];return r[0]=a*v+o*E+l*S,r[3]=a*m+o*R+l*M,r[6]=a*p+o*y+l*C,r[1]=c*v+u*E+d*S,r[4]=c*m+u*R+d*M,r[7]=c*p+u*y+d*C,r[2]=h*v+f*E+g*S,r[5]=h*m+f*R+g*M,r[8]=h*p+f*y+g*C,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,g=n*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(s*c-u*i)*v,e[2]=(o*i-s*a)*v,e[3]=h*v,e[4]=(u*n-s*l)*v,e[5]=(s*r-o*n)*v,e[6]=f*v,e[7]=(i*l-c*n)*v,e[8]=(a*n-i*r)*v,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return Qs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mu.makeScale(e,n)),this}rotate(e){return Qs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mu.makeRotation(-e)),this}translate(e,n){return Qs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},mu=new ze,kp=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bp=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uv(){let t={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pt&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(s.r=Gr(s.r),s.g=Gr(s.g),s.b=Gr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pi?Oa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Qs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Qs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[tr]:{primaries:e,whitePoint:i,transfer:Oa,toXYZ:kp,fromXYZ:Bp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Bn},outputColorSpaceConfig:{drawingBufferColorSpace:Bn}},[Bn]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:kp,fromXYZ:Bp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Bn}}}),t}var je=Uv();function Ji(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Gr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var Ir,Rl=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ir===void 0&&(Ir=Wr("canvas")),Ir.width=e.width,Ir.height=e.height;let s=Ir.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ir}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=Wr("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ji(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ji(n[i]/255)*255):n[i]=Ji(n[i]);return{data:n,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ov=0,$r=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=co(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(gu(s[a].image)):r.push(gu(s[a]))}else r=gu(s);i.url=r}return n||(e.images[this.uuid]=i),i}};function gu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Rl.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}var kv=0,xu=new L,yn=class t extends Ai{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=wi,s=wi,r=en,a=Pi,o=Qn,l=Gn,c=t.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=co(),this.name="",this.source=new $r(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xu).x}get height(){return this.source.getSize(xu).y}get depth(){return this.source.getSize(xu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){De(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){De(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case El:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case Al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case El:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case Al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=nd;yn.DEFAULT_ANISOTROPY=1;var Nt=class t{static{t.prototype.isVector4=!0}constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let R=(c+1)/2,y=(f+1)/2,S=(p+1)/2,M=(u+h)/4,C=(d+v)/4,_=(g+m)/4;return R>y&&R>S?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=M/i,r=C/i):y>S?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=M/s,r=_/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=C/r,s=_/r),this.set(i,s,r,n),this}let E=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-v)/E,this.z=(h-u)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this.w=et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this.w=et(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Il=class extends Ai{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n),this.textures=[];let s={width:e,height:n,depth:i.depth},r=new yn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let n={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},e.textures[n].image);this.textures[n].source=new $r(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},zn=class extends Il{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},Ba=class extends yn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pl=class extends yn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kt=class t{static{t.prototype.isMatrix4=!0}constructor(e,n,i,s,r,a,o,l,c,u,d,h,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,l,c,u,d,h,f,g,v,m)}set(e,n,i,s,r,a,o,l,c,u,d,h,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let n=this.elements,i=e.elements,s=1/Pr.setFromMatrixColumn(e,0).length(),r=1/Pr.setFromMatrixColumn(e,1).length(),a=1/Pr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=a*u,f=a*d,g=o*u,v=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=f+g*c,n[5]=h-v*c,n[9]=-o*l,n[2]=v-h*c,n[6]=g+f*c,n[10]=a*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,g=c*u,v=c*d;n[0]=h+v*o,n[4]=g*o-f,n[8]=a*c,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=f*o-g,n[6]=v+h*o,n[10]=a*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,g=c*u,v=c*d;n[0]=h-v*o,n[4]=-a*d,n[8]=g+f*o,n[1]=f+g*o,n[5]=a*u,n[9]=v-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){let h=a*u,f=a*d,g=o*u,v=o*d;n[0]=l*u,n[4]=g*c-f,n[8]=h*c+v,n[1]=l*d,n[5]=v*c+h,n[9]=f*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){let h=a*l,f=a*c,g=o*l,v=o*c;n[0]=l*u,n[4]=v-h*d,n[8]=g*d+f,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=f*d+g,n[10]=h-v*d}else if(e.order==="XZY"){let h=a*l,f=a*c,g=o*l,v=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+v,n[5]=a*u,n[9]=f*d-g,n[2]=g*d-f,n[6]=o*u,n[10]=v*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bv,e,zv)}lookAt(e,n,i){let s=this.elements;return On.subVectors(e,n),On.lengthSq()===0&&(On.z=1),On.normalize(),xs.crossVectors(i,On),xs.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),xs.crossVectors(i,On)),xs.normalize(),$o.crossVectors(On,xs),s[0]=xs.x,s[4]=$o.x,s[8]=On.x,s[1]=xs.y,s[5]=$o.y,s[9]=On.y,s[2]=xs.z,s[6]=$o.z,s[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],E=i[3],R=i[7],y=i[11],S=i[15],M=s[0],C=s[4],_=s[8],w=s[12],T=s[1],I=s[5],N=s[9],k=s[13],X=s[2],O=s[6],W=s[10],V=s[14],$=s[3],Q=s[7],re=s[11],se=s[15];return r[0]=a*M+o*T+l*X+c*$,r[4]=a*C+o*I+l*O+c*Q,r[8]=a*_+o*N+l*W+c*re,r[12]=a*w+o*k+l*V+c*se,r[1]=u*M+d*T+h*X+f*$,r[5]=u*C+d*I+h*O+f*Q,r[9]=u*_+d*N+h*W+f*re,r[13]=u*w+d*k+h*V+f*se,r[2]=g*M+v*T+m*X+p*$,r[6]=g*C+v*I+m*O+p*Q,r[10]=g*_+v*N+m*W+p*re,r[14]=g*w+v*k+m*V+p*se,r[3]=E*M+R*T+y*X+S*$,r[7]=E*C+R*I+y*O+S*Q,r[11]=E*_+R*N+y*W+S*re,r[15]=E*w+R*k+y*V+S*se,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],E=l*f-c*h,R=o*f-c*d,y=o*h-l*d,S=a*f-c*u,M=a*h-l*u,C=a*d-o*u;return n*(v*E-m*R+p*y)-i*(g*E-m*S+p*M)+s*(g*R-v*S+p*C)-r*(g*y-v*M+m*C)}determinantAffine(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return n*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],E=n*o-i*a,R=n*l-s*a,y=n*c-r*a,S=i*l-s*o,M=i*c-r*o,C=s*c-r*l,_=u*v-d*g,w=u*m-h*g,T=u*p-f*g,I=d*m-h*v,N=d*p-f*v,k=h*p-f*m,X=E*k-R*N+y*I+S*T-M*w+C*_;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/X;return e[0]=(o*k-l*N+c*I)*O,e[1]=(s*N-i*k-r*I)*O,e[2]=(v*C-m*M+p*S)*O,e[3]=(h*M-d*C-f*S)*O,e[4]=(l*T-a*k-c*w)*O,e[5]=(n*k-s*T+r*w)*O,e[6]=(m*y-g*C-p*R)*O,e[7]=(u*C-h*y+f*R)*O,e[8]=(a*N-o*T+c*_)*O,e[9]=(i*T-n*N-r*_)*O,e[10]=(g*M-v*y+p*E)*O,e[11]=(d*y-u*M-f*E)*O,e[12]=(o*w-a*I-l*_)*O,e[13]=(n*I-i*w+s*_)*O,e[14]=(v*R-g*S-m*E)*O,e[15]=(u*S-d*R+h*E)*O,this}scale(e){let n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){let s=this.elements,r=n._x,a=n._y,o=n._z,l=n._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,g=r*d,v=a*u,m=a*d,p=o*d,E=l*c,R=l*u,y=l*d,S=i.x,M=i.y,C=i.z;return s[0]=(1-(v+p))*S,s[1]=(f+y)*S,s[2]=(g-R)*S,s[3]=0,s[4]=(f-y)*M,s[5]=(1-(h+p))*M,s[6]=(m+E)*M,s[7]=0,s[8]=(g+R)*C,s[9]=(m-E)*C,s[10]=(1-(h+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let a=Pr.set(s[0],s[1],s[2]).length(),o=Pr.set(s[4],s[5],s[6]).length(),l=Pr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),oi.copy(this);let c=1/a,u=1/o,d=1/l;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=d,oi.elements[9]*=d,oi.elements[10]*=d,n.setFromRotationMatrix(oi),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,s,r,a,o=hi,l=!1){let c=this.elements,u=2*r/(n-e),d=2*r/(i-s),h=(n+e)/(n-e),f=(i+s)/(i-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===hi)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ka)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,a,o=hi,l=!1){let c=this.elements,u=2/(n-e),d=2/(i-s),h=-(n+e)/(n-e),f=-(i+s)/(i-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===hi)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===ka)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},Pr=new L,oi=new kt,Bv=new L(0,0,0),zv=new L(1,1,1),xs=new L,$o=new L,On=new L,zp=new kt,Vp=new Ti,Es=class t{constructor(e=0,n=0,i=0,s=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return zp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Vp.setFromEuler(this),this.setFromQuaternion(Vp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Es.DEFAULT_ORDER="XYZ";var za=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Vv=0,Hp=new L,Lr=new Ti,qi=new kt,qo=new L,Pa=new L,Hv=new L,Gv=new Ti,Gp=new L(1,0,0),Wp=new L(0,1,0),Xp=new L(0,0,1),$p={type:"added"},Wv={type:"removed"},Nr={type:"childadded",child:null},vu={type:"childremoved",child:null},Vn=class t extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new L,n=new Es,i=new Ti,s=new L(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new kt},normalMatrix:{value:new ze}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(Gp,e)}rotateY(e){return this.rotateOnAxis(Wp,e)}rotateZ(e){return this.rotateOnAxis(Xp,e)}translateOnAxis(e,n){return Hp.copy(e).applyQuaternion(this.quaternion),this.position.add(Hp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Gp,e)}translateY(e){return this.translateOnAxis(Wp,e)}translateZ(e){return this.translateOnAxis(Xp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?qo.copy(e):qo.set(e,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Pa,qo,this.up):qi.lookAt(qo,Pa,this.up),this.quaternion.setFromRotationMatrix(qi),s&&(qi.extractRotation(s.matrixWorld),Lr.setFromRotationMatrix(qi),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Oe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($p),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Wv),vu.child=e,this.dispatchEvent(vu),vu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($p),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,e,Hv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,Gv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(n){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Vn.DEFAULT_UP=new L(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Js=class extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xv={type:"move"},qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=n.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new Js;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},Vm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vs={h:0,s:0,l:0},Yo={h:0,s:0,l:0};function _u(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var Ve=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=je.workingColorSpace){return this.r=e,this.g=n,this.b=i,je.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=je.workingColorSpace){if(e=Dv(e,1),n=et(n,0,1),i=et(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=_u(a,r,e+1/3),this.g=_u(a,r,e),this.b=_u(a,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,n=Bn){function i(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:De("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bn){let i=Vm[e.toLowerCase()];return i!==void 0?this.setHex(i,n):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return je.workingToColorSpace(gn.copy(this),e),Math.round(et(gn.r*255,0,255))*65536+Math.round(et(gn.g*255,0,255))*256+Math.round(et(gn.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=je.workingColorSpace){je.workingToColorSpace(gn.copy(this),n);let i=gn.r,s=gn.g,r=gn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=je.workingColorSpace){return je.workingToColorSpace(gn.copy(this),n),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Bn){je.workingToColorSpace(gn.copy(this),e);let n=gn.r,i=gn.g,s=gn.b;return e!==Bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(vs),this.setHSL(vs.h+e,vs.s+n,vs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(vs),e.getHSL(Yo);let i=fu(vs.h,Yo.h,n),s=fu(vs.s,Yo.s,n),r=fu(vs.l,Yo.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new Ve;Ve.NAMES=Vm;var Va=class extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Es,this.environmentIntensity=1,this.environmentRotation=new Es,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},li=new L,Yi=new L,yu=new L,Ki=new L,Fr=new L,Dr=new L,qp=new L,bu=new L,Mu=new L,Su=new L,wu=new Nt,Eu=new Nt,Au=new Nt,Ss=class t{constructor(e=new L,n=new L,i=new L){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),li.subVectors(e,n),s.cross(li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){li.subVectors(s,n),Yi.subVectors(i,n),yu.subVectors(e,n);let a=li.dot(li),o=li.dot(Yi),l=li.dot(yu),c=Yi.dot(Yi),u=Yi.dot(yu),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(e,n,i,s,r,a,o,l){return this.getBarycoord(e,n,i,s,Ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ki.x),l.addScaledVector(a,Ki.y),l.addScaledVector(o,Ki.z),l)}static getInterpolatedAttribute(e,n,i,s,r,a){return wu.setScalar(0),Eu.setScalar(0),Au.setScalar(0),wu.fromBufferAttribute(e,n),Eu.fromBufferAttribute(e,i),Au.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(wu,r.x),a.addScaledVector(Eu,r.y),a.addScaledVector(Au,r.z),a}static isFrontFacing(e,n,i,s){return li.subVectors(i,n),Yi.subVectors(e,n),li.cross(Yi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),li.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return t.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,s=this.b,r=this.c,a,o;Fr.subVectors(s,i),Dr.subVectors(r,i),bu.subVectors(e,i);let l=Fr.dot(bu),c=Dr.dot(bu);if(l<=0&&c<=0)return n.copy(i);Mu.subVectors(e,s);let u=Fr.dot(Mu),d=Dr.dot(Mu);if(u>=0&&d<=u)return n.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Fr,a);Su.subVectors(e,r);let f=Fr.dot(Su),g=Dr.dot(Su);if(g>=0&&f<=g)return n.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(Dr,o);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return qp.subVectors(r,s),o=(d-u)/(d-u+(f-g)),n.copy(s).addScaledVector(qp,o);let p=1/(m+v+h);return a=v*p,o=h*p,n.copy(i).addScaledVector(Fr,a).addScaledVector(Dr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},As=class{constructor(e=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ci.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ci.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=ci.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ci):ci.fromBufferAttribute(r,a),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ko.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ko.copy(i.boundingBox)),Ko.applyMatrix4(e.matrixWorld),this.union(Ko)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(La),Zo.subVectors(this.max,La),Ur.subVectors(e.a,La),Or.subVectors(e.b,La),kr.subVectors(e.c,La),_s.subVectors(Or,Ur),ys.subVectors(kr,Or),qs.subVectors(Ur,kr);let n=[0,-_s.z,_s.y,0,-ys.z,ys.y,0,-qs.z,qs.y,_s.z,0,-_s.x,ys.z,0,-ys.x,qs.z,0,-qs.x,-_s.y,_s.x,0,-ys.y,ys.x,0,-qs.y,qs.x,0];return!Tu(n,Ur,Or,kr,Zo)||(n=[1,0,0,0,1,0,0,0,1],!Tu(n,Ur,Or,kr,Zo))?!1:(jo.crossVectors(_s,ys),n=[jo.x,jo.y,jo.z],Tu(n,Ur,Or,kr,Zo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zi=[new L,new L,new L,new L,new L,new L,new L,new L],ci=new L,Ko=new As,Ur=new L,Or=new L,kr=new L,_s=new L,ys=new L,qs=new L,La=new L,Zo=new L,jo=new L,Ys=new L;function Tu(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){Ys.fromArray(t,r);let o=s.x*Math.abs(Ys.x)+s.y*Math.abs(Ys.y)+s.z*Math.abs(Ys.z),l=e.dot(Ys),c=n.dot(Ys),u=i.dot(Ys);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Kt=new L,Jo=new Je,$v=0,ln=class extends Ai{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$v++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Vu,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Jo.fromBufferAttribute(this,n),Jo.applyMatrix3(e),this.setXY(n,Jo.x,Jo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix3(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix4(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.applyNormalMatrix(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.transformDirection(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ia(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=En(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ia(n,this.array)),n}setX(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ia(n,this.array)),n}setY(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ia(n,this.array)),n}setZ(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ia(n,this.array)),n}setW(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array),s=En(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array),s=En(s,this.array),r=En(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vu&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ha=class extends ln{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var Ga=class extends ln{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var An=class extends ln{constructor(e,n,i){super(new Float32Array(e),n,i)}},qv=new As,Na=new L,Cu=new L,nr=class{constructor(e=new L,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):qv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Na.subVectors(e,this.center);let n=Na.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Na,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Na.copy(e.center).add(Cu)),this.expandByPoint(Na.copy(e.center).sub(Cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Yv=0,jn=new kt,Ru=new Vn,Br=new L,kn=new As,Fa=new As,on=new L,Tn=class t extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=co(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nv(e)?Ga:Ha)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,n,i){return jn.makeTranslation(e,n,i),this.applyMatrix4(jn),this}scale(e,n,i){return jn.makeScale(e,n,i),this.applyMatrix4(jn),this}lookAt(e){return Ru.lookAt(e),Ru.updateMatrix(),this.applyMatrix4(Ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new An(i,3))}else{let i=Math.min(e.length,n.count);for(let s=0;s<i;s++){let r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nr);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){let o=n[r];Fa.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(kn.min,Fa.min),kn.expandByPoint(on),on.addVectors(kn.max,Fa.max),kn.expandByPoint(on)):(kn.expandByPoint(Fa.min),kn.expandByPoint(Fa.max))}kn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)on.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(on));if(n)for(let r=0,a=n.length;r<a;r++){let o=n[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)on.fromBufferAttribute(o,c),l&&(Br.fromBufferAttribute(e,c),on.add(Br)),s=Math.max(s,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ln(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new L,l[_]=new L;let c=new L,u=new L,d=new L,h=new Je,f=new Je,g=new Je,v=new L,m=new L;function p(_,w,T){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,T),h.fromBufferAttribute(r,_),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,T),u.sub(c),d.sub(c),f.sub(h),g.sub(h);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(I),o[_].add(v),o[w].add(v),o[T].add(v),l[_].add(m),l[w].add(m),l[T].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let _=0,w=E.length;_<w;++_){let T=E[_],I=T.start,N=T.count;for(let k=I,X=I+N;k<X;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let R=new L,y=new L,S=new L,M=new L;function C(_){S.fromBufferAttribute(s,_),M.copy(S);let w=o[_];R.copy(w),R.sub(S.multiplyScalar(S.dot(w))).normalize(),y.crossVectors(M,w);let I=y.dot(l[_])<0?-1:1;a.setXYZW(_,R.x,R.y,R.z,I)}for(let _=0,w=E.length;_<w;++_){let T=E[_],I=T.start,N=T.count;for(let k=I,X=I+N;k<X;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new ln(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,d=new L;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,v),a.fromBufferAttribute(n,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=n.count;h<f;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)on.fromBufferAttribute(e,n),on.normalize(),e.setXYZ(n,on.x,on.y,on.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new ln(h,u,d)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);n.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,i);l.push(f)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(n))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Kv=0,Ts=class extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=co(),this.name="",this.type="Material",this.blending=Jn,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gl,this.blendDst=xl,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){De(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){De(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Jn&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gl&&(i.blendSrc=this.blendSrc),this.blendDst!==xl&&(i.blendDst=this.blendDst),this.blendEquation!==ws&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(i.stencilFail=this.stencilFail),this.stencilZFail!==js&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(n){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Je().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ji=new L,Iu=new L,Qo=new L,bs=new L,Pu=new L,el=new L,Lu=new L,Wa=class{constructor(e=new L,n=new L(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=ji.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,n),ji.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Iu.copy(e).add(n).multiplyScalar(.5),Qo.copy(n).sub(e).normalize(),bs.copy(this.origin).sub(Iu);let r=e.distanceTo(n)*.5,a=-this.direction.dot(Qo),o=bs.dot(this.direction),l=-bs.dot(Qo),c=bs.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let v=1/u;d*=v,h*=v,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Iu).addScaledVector(Qo,h),f}intersectSphere(e,n){ji.subVectors(e.center,this.origin);let i=ji.dot(this.direction),s=ji.dot(ji)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,n,i,s,r){Pu.subVectors(n,e),el.subVectors(i,e),Lu.crossVectors(Pu,el);let a=this.direction.dot(Lu),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bs.subVectors(this.origin,e);let l=o*this.direction.dot(el.crossVectors(bs,el));if(l<0)return null;let c=o*this.direction.dot(Pu.cross(bs));if(c<0||l+c>a)return null;let u=-o*bs.dot(Lu);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xa=class extends Ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Es,this.combine=Yu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Yp=new kt,Ks=new Wa,tl=new nr,Kp=new L,nl=new L,il=new L,sl=new L,Nu=new L,rl=new L,Zp=new L,al=new L,hn=class extends Vn{constructor(e=new Tn,n=new Xa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){rl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(Nu.fromBufferAttribute(d,e),a?rl.addScaledVector(Nu,u):rl.addScaledVector(Nu.sub(n),u))}n.add(rl)}return n}raycast(e,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(r),Ks.copy(e.ray).recast(e.near),!(tl.containsPoint(Ks.origin)===!1&&(Ks.intersectSphere(tl,Kp)===null||Ks.origin.distanceToSquared(Kp)>(e.far-e.near)**2))&&(Yp.copy(r).invert(),Ks.copy(e.ray).applyMatrix4(Yp),!(i.boundingBox!==null&&Ks.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ks)))}_computeIntersections(e,n,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),R=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=E,S=R;y<S;y+=3){let M=o.getX(y),C=o.getX(y+1),_=o.getX(y+2);s=ol(this,p,e,i,c,u,d,M,C,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let E=o.getX(m),R=o.getX(m+1),y=o.getX(m+2);s=ol(this,a,e,i,c,u,d,E,R,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),R=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=E,S=R;y<S;y+=3){let M=y,C=y+1,_=y+2;s=ol(this,p,e,i,c,u,d,M,C,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let E=m,R=m+1,y=m+2;s=ol(this,a,e,i,c,u,d,E,R,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function Zv(t,e,n,i,s,r,a,o){let l;if(e.side===bn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Qi,o),l===null)return null;al.copy(o),al.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(al);return c<n.near||c>n.far?null:{distance:c,point:al.clone(),object:t}}function ol(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,nl),t.getVertexPosition(l,il),t.getVertexPosition(c,sl);let u=Zv(t,e,n,i,nl,il,sl,Zp);if(u){let d=new L;Ss.getBarycoord(Zp,nl,il,sl,d),s&&(u.uv=Ss.getInterpolatedAttribute(s,o,l,c,d,new Je)),r&&(u.uv1=Ss.getInterpolatedAttribute(r,o,l,c,d,new Je)),a&&(u.normal=Ss.getInterpolatedAttribute(a,o,l,c,d,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new L,materialIndex:0};Ss.getNormal(nl,il,sl,h.normal),u.face=h,u.barycoord=d}return u}var Ll=class extends yn{constructor(e=null,n=1,i=1,s,r,a,o,l,c=cn,u=cn,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ir=class extends ln{constructor(e,n,i,s=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};var Fu=new L,jv=new L,Jv=new ze,Si=class{constructor(e=new L(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let s=Fu.subVectors(i,n).cross(jv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){let s=e.delta(Fu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||Jv.getNormalMatrix(e),s=this.coplanarPoint(Fu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zs=new nr,Qv=new Je(.5,.5),ll=new L,$a=class{constructor(e=new Si,n=new Si,i=new Si,s=new Si,r=new Si,a=new Si){this.planes=[e,n,i,s,r,a]}set(e,n,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=hi,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],E=r[12],R=r[13],y=r[14],S=r[15];if(s[0].setComponents(c-a,f-u,p-g,S-E).normalize(),s[1].setComponents(c+a,f+u,p+g,S+E).normalize(),s[2].setComponents(c+o,f+d,p+v,S+R).normalize(),s[3].setComponents(c-o,f-d,p-v,S-R).normalize(),i)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,f-h,p-m,S-y).normalize();else if(s[4].setComponents(c-l,f-h,p-m,S-y).normalize(),n===hi)s[5].setComponents(c+l,f+h,p+m,S+y).normalize();else if(n===ka)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zs)}intersectsSprite(e){Zs.center.set(0,0,0);let n=Qv.distanceTo(e.center);return Zs.radius=.7071067811865476+n,Zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zs)}intersectsSphere(e){let n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(ll.x=s.normal.x>0?e.max.x:e.min.x,ll.y=s.normal.y>0?e.max.y:e.min.y,ll.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ll)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Nl=class extends Ts{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Fl=new L,Dl=new L,jp=new kt,Da=new Wa,cl=new nr,Du=new L,Jp=new L,Ul=class extends Vn{constructor(e=new Tn,n=new Nl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)Fl.fromBufferAttribute(n,s-1),Dl.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Fl.distanceTo(Dl);e.setAttribute("lineDistance",new An(i,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(s),cl.radius+=r,e.ray.intersectsSphere(cl)===!1)return;jp.copy(s).invert(),Da.copy(e.ray).applyMatrix4(jp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){let p=u.getX(v),E=u.getX(v+1),R=hl(this,e,Da,l,p,E,v);R&&n.push(R)}if(this.isLineLoop){let v=u.getX(g-1),m=u.getX(f),p=hl(this,e,Da,l,v,m,g-1);p&&n.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){let p=hl(this,e,Da,l,v,v+1,v);p&&n.push(p)}if(this.isLineLoop){let v=hl(this,e,Da,l,g-1,f,g-1);v&&n.push(v)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function hl(t,e,n,i,s,r,a){let o=t.geometry.attributes.position;if(Fl.fromBufferAttribute(o,s),Dl.fromBufferAttribute(o,r),n.distanceSqToSegment(Fl,Dl,Du,Jp)>i)return;Du.applyMatrix4(t.matrixWorld);let c=e.ray.origin.distanceTo(Du);if(!(c<e.near||c>e.far))return{distance:c,point:Jp.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}var Qp=new L,em=new L,qa=class extends Ul{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)Qp.fromBufferAttribute(n,s),em.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Qp.distanceTo(em);e.setAttribute("lineDistance",new An(i,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ya=class extends yn{constructor(e=[],n=Ps,i,s,r,a,o,l,c,u){super(e,n,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var es=class extends yn{constructor(e,n,i=di,s,r,a,o=cn,l=cn,c,u=Ei,d=1){if(u!==Ei&&u!==Ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:n,depth:d};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $r(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Ol=class extends es{constructor(e,n=di,i=Ps,s,r,a=cn,o=cn,l,c=Ei){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,n,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ka=class extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Yr=class t extends Tn{constructor(e=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,i,n,e,a,r,0),g("z","y","x",1,-1,i,n,-e,a,r,1),g("x","z","y",1,1,e,i,n,s,a,2),g("x","z","y",1,-1,e,i,-n,s,a,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new An(c,3)),this.setAttribute("normal",new An(u,3)),this.setAttribute("uv",new An(d,2));function g(v,m,p,E,R,y,S,M,C,_,w){let T=y/C,I=S/_,N=y/2,k=S/2,X=M/2,O=C+1,W=_+1,V=0,$=0,Q=new L;for(let re=0;re<W;re++){let se=re*I-k;for(let ve=0;ve<O;ve++){let rt=ve*T-N;Q[v]=rt*E,Q[m]=se*R,Q[p]=X,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[m]=0,Q[p]=M>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(ve/C),d.push(1-re/_),V+=1}}for(let re=0;re<_;re++)for(let se=0;se<C;se++){let ve=h+se+O*re,rt=h+se+O*(re+1),Ct=h+(se+1)+O*(re+1),Ge=h+(se+1)+O*re;l.push(ve,rt,Ge),l.push(rt,Ct,Ge),$+=6}o.addGroup(f,$,w),f+=$,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ci=class t extends Tn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};let r=e/2,a=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=n/l,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){let E=p*h-a;for(let R=0;R<c;R++){let y=R*d-r;g.push(y,-E,0),v.push(0,0,1),m.push(R/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){let R=E+c*p,y=E+c*(p+1),S=E+1+c*(p+1),M=E+1+c*p;f.push(R,y,M),f.push(y,S,M)}this.setIndex(f),this.setAttribute("position",new An(g,3)),this.setAttribute("normal",new An(v,3)),this.setAttribute("uv",new An(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}};function ar(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(tm(s))s.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(tm(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function vn(t){let e={};for(let n=0;n<t.length;n++){let i=ar(t[n]);for(let s in i)e[s]=i[s]}return e}function tm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function e_(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function fd(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var Hm={clone:ar,merge:vn},t_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends Ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t_,this.fragmentShader=n_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=e_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new Ve().setHex(s.value);break;case"v2":this.uniforms[i].value=new Je().fromArray(s.value);break;case"v3":this.uniforms[i].value=new L().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Nt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ze().fromArray(s.value);break;case"m4":this.uniforms[i].value=new kt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},kl=class extends tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Bl=class extends Ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zl=class extends Ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ul(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}var Cs=class{constructor(e,n,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=n[++i],e<s)break t}a=n.length;break n}if(!(e>=r)){let o=n[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=n[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){let o=i+a>>>1;e<n[o]?a=o:i=o+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)n[a]=i[r+a];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Vl=class extends Cs{constructor(e,n,i,s){super(e,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ou,endingEnd:Ou}}intervalChanged_(e,n,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ku:r=e,o=2*n-i;break;case Bu:r=s.length-2,o=n+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ku:a=e,l=2*i-n;break;case Bu:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-n)/(s-n),v=g*g,m=v*g,p=-h*m+2*h*v-h*g,E=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,R=(-1-f)*m+(1.5+f)*v+.5*g,y=f*m-f*v;for(let S=0;S!==o;++S)r[S]=p*a[u+S]+E*a[c+S]+R*a[l+S]+y*a[d+S];return r}},Hl=class extends Cs{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-n)/(s-n),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},Gl=class extends Cs{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Wl=class extends Cs{interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(i-n)/(s-n),v=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*g;return r}let h=o*2,f=e-1;for(let g=0;g!==o;++g){let v=a[c+g],m=a[l+g],p=f*h+g*2,E=d[p],R=d[p+1],y=e*h+g*2,S=u[y],M=u[y+1],C=(i-n)/(s-n),_,w,T,I,N;for(let k=0;k<8;k++){_=C*C,w=_*C,T=1-C,I=T*T,N=I*T;let O=N*n+3*I*C*E+3*T*_*S+w*s-i;if(Math.abs(O)<1e-10)break;let W=3*I*(E-n)+6*T*C*(S-E)+3*_*(s-S);if(Math.abs(W)<1e-10)break;C=C-O/W,C=Math.max(0,Math.min(1,C))}r[g]=N*v+3*I*C*R+3*T*_*M+w*m}return r}},Hn=class{constructor(e,n,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ul(n,this.TimeBufferType),this.values=ul(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:ul(e.times,Array),values:ul(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let n=new Wl(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(e){let n;switch(e){case Ua:n=this.InterpolantFactoryMethodDiscrete;break;case Tl:n=this.InterpolantFactoryMethodLinear;break;case pl:n=this.InterpolantFactoryMethodSmooth;break;case Uu:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return De("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ua;case this.InterpolantFactoryMethodLinear:return Tl;case this.InterpolantFactoryMethodSmooth:return pl;case this.InterpolantFactoryMethodBezier:return Uu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=e}return this}trim(e,n){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>n;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Oe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Oe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Oe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Oe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Fv(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Oe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===pl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){let v=n[d+g];if(v!==n[h+g]||v!==n[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,h=a*i;for(let f=0;f!==i;++f)n[h+f]=n[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)n[l+c]=n[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=n.slice(0,a*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,e,n);return s.createInterpolant=this.createInterpolant,s}};Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=Tl;var Rs=class extends Hn{constructor(e,n,i){super(e,n,i)}};Rs.prototype.ValueTypeName="bool";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=Ua;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Xl=class extends Hn{constructor(e,n,i,s){super(e,n,i,s)}};Xl.prototype.ValueTypeName="color";var $l=class extends Hn{constructor(e,n,i,s){super(e,n,i,s)}};$l.prototype.ValueTypeName="number";var ql=class extends Cs{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=e*o;for(let u=c+o;c!==u;c+=4)Ti.slerpFlat(r,0,a,c-o,a,c,l);return r}},Za=class extends Hn{constructor(e,n,i,s){super(e,n,i,s)}InterpolantFactoryMethodLinear(e){return new ql(this.times,this.values,this.getValueSize(),e)}};Za.prototype.ValueTypeName="quaternion";Za.prototype.InterpolantFactoryMethodSmooth=void 0;var Is=class extends Hn{constructor(e,n,i){super(e,n,i)}};Is.prototype.ValueTypeName="string";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=Ua;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var Yl=class extends Hn{constructor(e,n,i,s){super(e,n,i,s)}};Yl.prototype.ValueTypeName="vector";var ml={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(nm(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!nm(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function nm(t){try{let e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Kl=class{constructor(e,n,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Gm=new Kl,Kr=class{constructor(e){this.manager=e!==void 0?e:Gm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Kr.DEFAULT_MATERIAL_NAME="__DEFAULT";var zr=new WeakMap,Zl=class extends Kr{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ml.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){n&&n(a),r.manager.itemEnd(e)},0);else{let d=zr.get(a);d===void 0&&(d=[],zr.set(a,d)),d.push({onLoad:n,onError:s})}return a}let o=Wr("img");function l(){u(),n&&n(this);let d=zr.get(this)||[];for(let h=0;h<d.length;h++){let f=d[h];f.onLoad&&f.onLoad(this)}zr.delete(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),ml.remove(`image:${e}`);let h=zr.get(this)||[];for(let f=0;f<h.length;f++){let g=h[f];g.onError&&g.onError(d)}zr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ml.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var ja=class extends Kr{constructor(e){super(e)}load(e,n,i,s){let r=new yn,a=new Zl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}};var dl=new L,fl=new Ti,Mi=new L,Ja=class extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dl,fl,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,fl,Mi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(dl,fl,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,fl,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ms=new L,im=new Je,sm=new Je,xn=class extends Ja{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=Cl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(du*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cl*2*Math.atan(Math.tan(du*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z),Ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z)}getViewSize(e,n){return this.getViewBounds(e,im,sm),n.subVectors(sm,im)}setViewOffset(e,n,i,s,r,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(du*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,n-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var Qa=class extends Ja{constructor(e=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var sr=class extends Tn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Vr=-90,Hr=1,jl=class extends Vn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xn(Vr,Hr,e,n);s.layers=this.layers,this.add(s);let r=new xn(Vr,Hr,e,n);r.layers=this.layers,this.add(r);let a=new xn(Vr,Hr,e,n);a.layers=this.layers,this.add(a);let o=new xn(Vr,Hr,e,n);o.layers=this.layers,this.add(o);let l=new xn(Vr,Hr,e,n);l.layers=this.layers,this.add(l);let c=new xn(Vr,Hr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,o,l]=n;for(let c of n)this.remove(c);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ka)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Jl=class extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var pd="\\[\\]\\.:\\/",i_=new RegExp("["+pd+"]","g"),md="[^"+pd+"]",s_="[^"+pd.replace("\\.","")+"]",r_=/((?:WC+[\/:])*)/.source.replace("WC",md),a_=/(WCOD+)?/.source.replace("WCOD",s_),o_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",md),l_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",md),c_=new RegExp("^"+r_+a_+o_+l_+"$"),h_=["material","materials","bones","map"],Hu=class{constructor(e,n,i){let s=i||wt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,s)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},wt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(i_,"")}static parseTrackName(e){let n=c_.exec(e);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);h_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[n++]=i[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){De("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=n.nodeName;Oe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=Hu;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kw=new Float32Array(1);var Gu=class t{static{t.prototype.isMatrix2=!0}constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){let r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=s,this}};function gd(t,e,n,i){let s=u_(i);switch(n){case od:return t*e;case cd:return t*e/s.components*s.byteLength;case rc:return t*e/s.components*s.byteLength;case Ns:return t*e*2/s.components*s.byteLength;case ac:return t*e*2/s.components*s.byteLength;case ld:return t*e*3/s.components*s.byteLength;case Qn:return t*e*4/s.components*s.byteLength;case oc:return t*e*4/s.components*s.byteLength;case io:case so:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ro:case ao:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cc:case uc:return Math.max(t,16)*Math.max(e,8)/4;case lc:case hc:return Math.max(t,8)*Math.max(e,8)/2;case dc:case fc:case mc:case gc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case pc:case oo:case xc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _c:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case yc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case bc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case wc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Rc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Pc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Lc:case Nc:case Fc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Dc:case Uc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case lo:case Oc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function u_(t){switch(t){case Gn:case id:return{byteLength:1,components:1};case jr:case sd:case Li:return{byteLength:2,components:1};case ic:case sc:return{byteLength:2,components:4};case di:case nc:case fi:return{byteLength:4,components:1};case rd:case ad:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function dg(){let t=null,e=!1,n=null,i=null;function s(r,a){n(r,a),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function f_(t){let e=new WeakMap;function n(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let v=d[f];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var p_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,m_=`#ifdef USE_ALPHAHASH
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
#endif`,g_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,__=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y_=`#ifdef USE_AOMAP
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
#endif`,b_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M_=`#ifdef USE_BATCHING
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
#endif`,S_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,w_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T_=`#ifdef USE_IRIDESCENCE
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
#endif`,C_=`#ifdef USE_BUMPMAP
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
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,F_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,D_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,U_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,O_=`#define PI 3.141592653589793
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
} // validated`,k_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,B_=`vec3 transformedNormal = objectNormal;
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
#endif`,z_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W_="gl_FragColor = linearToOutputTexel( gl_FragColor );",X_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$_=`#ifdef USE_ENVMAP
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
#endif`,q_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Y_=`#ifdef USE_ENVMAP
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
#endif`,K_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z_=`#ifdef USE_ENVMAP
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
#endif`,j_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,J_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ey=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ty=`#ifdef USE_GRADIENTMAP
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
}`,ny=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ry=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ay=`#ifdef USE_ENVMAP
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
#endif`,oy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uy=`PhysicalMaterial material;
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
#endif`,dy=`uniform sampler2D dfgLUT;
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
}`,fy=`
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
#endif`,py=`#if defined( RE_IndirectDiffuse )
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
#endif`,my=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,xy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_y=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,by=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,My=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wy=`#if defined( USE_POINTS_UV )
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
#endif`,Ey=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ay=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ty=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ry=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iy=`#ifdef USE_MORPHTARGETS
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
#endif`,Py=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ly=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ny=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Oy=`#ifdef USE_NORMALMAP
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
#endif`,ky=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,By=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$y=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ky=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qy=`float getShadowMask() {
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
}`,eb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tb=`#ifdef USE_SKINNING
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
#endif`,nb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ib=`#ifdef USE_SKINNING
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
#endif`,sb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ab=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ob=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lb=`#ifdef USE_TRANSMISSION
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
#endif`,cb=`#ifdef USE_TRANSMISSION
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
#endif`,hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mb=`uniform sampler2D t2D;
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
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_b=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yb=`#include <common>
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
}`,bb=`#if DEPTH_PACKING == 3200
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
}`,Mb=`#define DISTANCE
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
}`,Sb=`#define DISTANCE
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
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ab=`uniform float scale;
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
}`,Tb=`uniform vec3 diffuse;
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
}`,Cb=`#include <common>
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
}`,Rb=`uniform vec3 diffuse;
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
}`,Ib=`#define LAMBERT
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
}`,Pb=`#define LAMBERT
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
}`,Lb=`#define MATCAP
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
}`,Nb=`#define MATCAP
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
}`,Fb=`#define NORMAL
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
}`,Db=`#define NORMAL
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
}`,Ub=`#define PHONG
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
}`,Ob=`#define PHONG
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
}`,kb=`#define STANDARD
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
}`,Bb=`#define STANDARD
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
}`,zb=`#define TOON
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
}`,Vb=`#define TOON
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
}`,Hb=`uniform float size;
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
}`,Gb=`uniform vec3 diffuse;
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
}`,Wb=`#include <common>
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
}`,Xb=`uniform vec3 color;
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
}`,$b=`uniform float rotation;
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
}`,qb=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:p_,alphahash_pars_fragment:m_,alphamap_fragment:g_,alphamap_pars_fragment:x_,alphatest_fragment:v_,alphatest_pars_fragment:__,aomap_fragment:y_,aomap_pars_fragment:b_,batching_pars_vertex:M_,batching_vertex:S_,begin_vertex:w_,beginnormal_vertex:E_,bsdfs:A_,iridescence_fragment:T_,bumpmap_pars_fragment:C_,clipping_planes_fragment:R_,clipping_planes_pars_fragment:I_,clipping_planes_pars_vertex:P_,clipping_planes_vertex:L_,color_fragment:N_,color_pars_fragment:F_,color_pars_vertex:D_,color_vertex:U_,common:O_,cube_uv_reflection_fragment:k_,defaultnormal_vertex:B_,displacementmap_pars_vertex:z_,displacementmap_vertex:V_,emissivemap_fragment:H_,emissivemap_pars_fragment:G_,colorspace_fragment:W_,colorspace_pars_fragment:X_,envmap_fragment:$_,envmap_common_pars_fragment:q_,envmap_pars_fragment:Y_,envmap_pars_vertex:K_,envmap_physical_pars_fragment:ay,envmap_vertex:Z_,fog_vertex:j_,fog_pars_vertex:J_,fog_fragment:Q_,fog_pars_fragment:ey,gradientmap_pars_fragment:ty,lightmap_pars_fragment:ny,lights_lambert_fragment:iy,lights_lambert_pars_fragment:sy,lights_pars_begin:ry,lights_toon_fragment:oy,lights_toon_pars_fragment:ly,lights_phong_fragment:cy,lights_phong_pars_fragment:hy,lights_physical_fragment:uy,lights_physical_pars_fragment:dy,lights_fragment_begin:fy,lights_fragment_maps:py,lights_fragment_end:my,lightprobes_pars_fragment:gy,logdepthbuf_fragment:xy,logdepthbuf_pars_fragment:vy,logdepthbuf_pars_vertex:_y,logdepthbuf_vertex:yy,map_fragment:by,map_pars_fragment:My,map_particle_fragment:Sy,map_particle_pars_fragment:wy,metalnessmap_fragment:Ey,metalnessmap_pars_fragment:Ay,morphinstance_vertex:Ty,morphcolor_vertex:Cy,morphnormal_vertex:Ry,morphtarget_pars_vertex:Iy,morphtarget_vertex:Py,normal_fragment_begin:Ly,normal_fragment_maps:Ny,normal_pars_fragment:Fy,normal_pars_vertex:Dy,normal_vertex:Uy,normalmap_pars_fragment:Oy,clearcoat_normal_fragment_begin:ky,clearcoat_normal_fragment_maps:By,clearcoat_pars_fragment:zy,iridescence_pars_fragment:Vy,opaque_fragment:Hy,packing:Gy,premultiplied_alpha_fragment:Wy,project_vertex:Xy,dithering_fragment:$y,dithering_pars_fragment:qy,roughnessmap_fragment:Yy,roughnessmap_pars_fragment:Ky,shadowmap_pars_fragment:Zy,shadowmap_pars_vertex:jy,shadowmap_vertex:Jy,shadowmask_pars_fragment:Qy,skinbase_vertex:eb,skinning_pars_vertex:tb,skinning_vertex:nb,skinnormal_vertex:ib,specularmap_fragment:sb,specularmap_pars_fragment:rb,tonemapping_fragment:ab,tonemapping_pars_fragment:ob,transmission_fragment:lb,transmission_pars_fragment:cb,uv_pars_fragment:hb,uv_pars_vertex:ub,uv_vertex:db,worldpos_vertex:fb,background_vert:pb,background_frag:mb,backgroundCube_vert:gb,backgroundCube_frag:xb,cube_vert:vb,cube_frag:_b,depth_vert:yb,depth_frag:bb,distance_vert:Mb,distance_frag:Sb,equirect_vert:wb,equirect_frag:Eb,linedashed_vert:Ab,linedashed_frag:Tb,meshbasic_vert:Cb,meshbasic_frag:Rb,meshlambert_vert:Ib,meshlambert_frag:Pb,meshmatcap_vert:Lb,meshmatcap_frag:Nb,meshnormal_vert:Fb,meshnormal_frag:Db,meshphong_vert:Ub,meshphong_frag:Ob,meshphysical_vert:kb,meshphysical_frag:Bb,meshtoon_vert:zb,meshtoon_frag:Vb,points_vert:Hb,points_frag:Gb,shadow_vert:Wb,shadow_frag:Xb,sprite_vert:$b,sprite_frag:qb},de={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Fi={basic:{uniforms:vn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:vn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:vn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:vn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:vn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ve(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:vn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:vn([de.points,de.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:vn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:vn([de.common,de.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:vn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:vn([de.sprite,de.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:vn([de.common,de.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:vn([de.lights,de.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Fi.physical={uniforms:vn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var zc={r:0,b:0,g:0},Yb=new kt,fg=new ze;fg.set(-1,0,0,0,1,0,0,0,1);function Kb(t,e,n,i,s,r){let a=new Ve(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(E){let R=E.isScene===!0?E.background:null;if(R&&R.isTexture){let y=E.backgroundBlurriness>0;R=e.get(R,y)}return R}function g(E){let R=!1,y=f(E);y===null?m(a,o):y&&y.isColor&&(m(y,1),R=!0);let S=t.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||R)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(E,R){let y=f(R);y&&(y.isCubeTexture||y.mapping===to)?(c===void 0&&(c=new hn(new Yr(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:ar(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,M,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Yb.makeRotationFromEuler(R.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(fg),c.material.toneMapped=je.getTransfer(y.colorSpace)!==pt,(u!==y||d!==y.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=t.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new hn(new Ci(2,2),new tn({name:"BackgroundMaterial",uniforms:ar(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=je.getTransfer(y.colorSpace)!==pt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==t.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=t.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,R){E.getRGB(zc,fd(t)),n.buffers.color.setClear(zc.r,zc.g,zc.b,R,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,R=1){a.set(E),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:g,addToRenderList:v,dispose:p}}function Zb(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(I,N,k,X,O){let W=!1,V=d(I,X,k,N);r!==V&&(r=V,c(r.object)),W=f(I,X,k,O),W&&g(I,X,k,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,y(I,N,k,X),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function u(I){return t.deleteVertexArray(I)}function d(I,N,k,X){let O=X.wireframe===!0,W=i[N.id];W===void 0&&(W={},i[N.id]=W);let V=I.isInstancedMesh===!0?I.id:0,$=W[V];$===void 0&&($={},W[V]=$);let Q=$[k.id];Q===void 0&&(Q={},$[k.id]=Q);let re=Q[O];return re===void 0&&(re=h(l()),Q[O]=re),re}function h(I){let N=[],k=[],X=[];for(let O=0;O<n;O++)N[O]=0,k[O]=0,X[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:X,object:I,attributes:{},index:null}}function f(I,N,k,X){let O=r.attributes,W=N.attributes,V=0,$=k.getAttributes();for(let Q in $)if($[Q].location>=0){let se=O[Q],ve=W[Q];if(ve===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(ve=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(ve=I.instanceColor)),se===void 0||se.attribute!==ve||ve&&se.data!==ve.data)return!0;V++}return r.attributesNum!==V||r.index!==X}function g(I,N,k,X){let O={},W=N.attributes,V=0,$=k.getAttributes();for(let Q in $)if($[Q].location>=0){let se=W[Q];se===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(se=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(se=I.instanceColor));let ve={};ve.attribute=se,se&&se.data&&(ve.data=se.data),O[Q]=ve,V++}r.attributes=O,r.attributesNum=V,r.index=X}function v(){let I=r.newAttributes;for(let N=0,k=I.length;N<k;N++)I[N]=0}function m(I){p(I,0)}function p(I,N){let k=r.newAttributes,X=r.enabledAttributes,O=r.attributeDivisors;k[I]=1,X[I]===0&&(t.enableVertexAttribArray(I),X[I]=1),O[I]!==N&&(t.vertexAttribDivisor(I,N),O[I]=N)}function E(){let I=r.newAttributes,N=r.enabledAttributes;for(let k=0,X=N.length;k<X;k++)N[k]!==I[k]&&(t.disableVertexAttribArray(k),N[k]=0)}function R(I,N,k,X,O,W,V){V===!0?t.vertexAttribIPointer(I,N,k,O,W):t.vertexAttribPointer(I,N,k,X,O,W)}function y(I,N,k,X){v();let O=X.attributes,W=k.getAttributes(),V=N.defaultAttributeValues;for(let $ in W){let Q=W[$];if(Q.location>=0){let re=O[$];if(re===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(re=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(re=I.instanceColor)),re!==void 0){let se=re.normalized,ve=re.itemSize,rt=e.get(re);if(rt===void 0)continue;let Ct=rt.buffer,Ge=rt.type,K=rt.bytesPerElement,ne=Ge===t.INT||Ge===t.UNSIGNED_INT||re.gpuType===nc;if(re.isInterleavedBufferAttribute){let ee=re.data,ke=ee.stride,Be=re.offset;if(ee.isInstancedInterleavedBuffer){for(let Fe=0;Fe<Q.locationSize;Fe++)p(Q.location+Fe,ee.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Fe=0;Fe<Q.locationSize;Fe++)m(Q.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,Ct);for(let Fe=0;Fe<Q.locationSize;Fe++)R(Q.location+Fe,ve/Q.locationSize,Ge,se,ke*K,(Be+ve/Q.locationSize*Fe)*K,ne)}else{if(re.isInstancedBufferAttribute){for(let ee=0;ee<Q.locationSize;ee++)p(Q.location+ee,re.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ee=0;ee<Q.locationSize;ee++)m(Q.location+ee);t.bindBuffer(t.ARRAY_BUFFER,Ct);for(let ee=0;ee<Q.locationSize;ee++)R(Q.location+ee,ve/Q.locationSize,Ge,se,ve*K,ve/Q.locationSize*ee*K,ne)}}else if(V!==void 0){let se=V[$];if(se!==void 0)switch(se.length){case 2:t.vertexAttrib2fv(Q.location,se);break;case 3:t.vertexAttrib3fv(Q.location,se);break;case 4:t.vertexAttrib4fv(Q.location,se);break;default:t.vertexAttrib1fv(Q.location,se)}}}}E()}function S(){w();for(let I in i){let N=i[I];for(let k in N){let X=N[k];for(let O in X){let W=X[O];for(let V in W)u(W[V].object),delete W[V];delete X[O]}}delete i[I]}}function M(I){if(i[I.id]===void 0)return;let N=i[I.id];for(let k in N){let X=N[k];for(let O in X){let W=X[O];for(let V in W)u(W[V].object),delete W[V];delete X[O]}}delete i[I.id]}function C(I){for(let N in i){let k=i[N];for(let X in k){let O=k[X];if(O[I.id]===void 0)continue;let W=O[I.id];for(let V in W)u(W[V].object),delete W[V];delete O[I.id]}}}function _(I){for(let N in i){let k=i[N],X=I.isInstancedMesh===!0?I.id:0,O=k[X];if(O!==void 0){for(let W in O){let V=O[W];for(let $ in V)u(V[$].object),delete V[$];delete O[W]}delete k[X],Object.keys(k).length===0&&delete i[N]}}}function w(){T(),a=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:T,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function jb(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];n.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Jb(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Qn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let _=C===Li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Gn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==fi&&!_)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);u!==c&&(De("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&h===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),E=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),R=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=t.getParameter(t.MAX_SAMPLES),M=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:R,maxFragmentUniforms:y,maxSamples:S,samples:M}}function Qb(t){let e=this,n=null,i=0,s=!1,r=!1,a=new Si,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=t.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let E=r?0:i,R=E*4,y=p.clippingState||null;l.value=y,y=u(g,h,R,f);for(let S=0;S!==R;++S)y[S]=n[S];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,y=f;R!==v;++R,y+=4)a.copy(d[R]).applyMatrix4(E,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var Fs=4,Wm=[.125,.215,.35,.446,.526,.582],or=20,e2=256,ho=new Qa,Xm=new Ve,xd=null,vd=0,_d=0,yd=!1,t2=new L,Hc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){let{size:a=256,position:o=t2}=r;xd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xd,vd,_d),this._renderer.xr.enabled=yd,e.scissorTest=!1,Qr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ps||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:Li,format:Qn,colorSpace:tr,depthBuffer:!1},s=$m(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$m(e,n,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=n2(r)),this._blurMaterial=s2(r,e,n),this._ggxMaterial=i2(r,e,n)}return s}_compileMaterial(e){let n=new hn(new Tn,e);this._renderer.compile(n,ho)}_sceneToCubeUV(e,n,i,s,r){let l=new xn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Xm),d.toneMapping=ui,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new hn(new Yr,new Xa({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,p=!0):(m.color.copy(Xm),p=!0);for(let R=0;R<6;R++){let y=R%3;y===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[R],r.y,r.z)):y===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[R]));let S=this._cubeSize;Qr(s,y*S,R>2?S:0,S,S),d.setRenderTarget(s),p&&d.render(v,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=E}_textureToCubeUV(e,n){let i=this._renderer,s=e.mapping===Ps||e.mapping===rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ym()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qm());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Qr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ho)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Fs?i-g+Fs:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-n,Qr(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,ho),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Qr(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(o,ho)}_blur(e,n,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Oe("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[s];d.material=c;let h=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*or-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):or;m>or&&De(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${or}`);let p=[],E=0;for(let C=0;C<or;++C){let _=C/v,w=Math.exp(-_*_/2);p.push(w),C===0?E+=w:C<m&&(E+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/E;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:R}=this;h.dTheta.value=g,h.mipInt.value=R-i;let y=this._sizeLods[s],S=3*y*(s>R-Fs?s-R+Fs:0),M=4*(this._cubeSize-y);Qr(n,S,M,3*y,2*y),l.setRenderTarget(n),l.render(d,ho)}};function n2(t){let e=[],n=[],i=[],s=t,r=t-Fs+1+Wm.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>t-Fs?l=Wm[a-t+Fs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,v=3,m=2,p=1,E=new Float32Array(v*g*f),R=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let M=0;M<f;M++){let C=M%3*2/3-1,_=M>2?0:-1,w=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];E.set(w,v*g*M),R.set(h,m*g*M);let T=[M,M,M,M,M,M];y.set(T,p*g*M)}let S=new Tn;S.setAttribute("position",new ln(E,v)),S.setAttribute("uv",new ln(R,m)),S.setAttribute("faceIndex",new ln(y,p)),i.push(new hn(S,null)),s>Fs&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function $m(t,e,n){let i=new zn(t,e,n);return i.texture.mapping=to,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qr(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function i2(t,e,n){return new tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:e2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function s2(t,e,n){let i=new Float32Array(or),s=new L(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function qm(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Ym(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Xc(){return`

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
	`}var Gc=class extends zn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ya(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yr(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:Ii});r.uniforms.tEquirect.value=n;let a=new hn(s,r),o=n.minFilter;return n.minFilter===Pi&&(n.minFilter=en),new jl(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,s);e.setRenderTarget(r)}};function r2(t){let e=new WeakMap,n=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Ql||f===ec)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let v=new Gc(g.height);return v.fromEquirectangularTexture(t,h),e.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,g=f===Ql||f===ec,v=f===Ps||f===rr;if(g||v){let m=n.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Hc(t)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),m.texture;if(m!==void 0)return m.texture;{let E=h.image;return g&&E&&E.height>0||v&&E&&l(E)?(i===null&&(i=new Hc(t)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===Ql?h.mapping=Ps:f===ec&&(h.mapping=rr),h}function l(h){let f=0,g=6;for(let v=0;v<g;v++)h[v]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=n.get(f);g!==void 0&&(n.delete(f),g.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function a2(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Qs("WebGLRenderer: "+i+" extension not supported."),s}}}function o2(t,e,n,i){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,n.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)e.update(h[f],t.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,g=d.attributes.position,v=0;if(g===void 0)return;if(f!==null){let E=f.array;v=f.version;for(let R=0,y=E.length;R<y;R+=3){let S=E[R+0],M=E[R+1],C=E[R+2];h.push(S,M,M,C,C,S)}}else{let E=g.array;v=g.version;for(let R=0,y=E.length/3-1;R<y;R+=3){let S=R+0,M=R+1,C=R+2;h.push(S,M,M,C,C,S)}}let m=new(g.count>=65535?Ga:Ha)(h,1);m.version=v;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function l2(t,e,n){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){t.drawElements(i,h,r,d*a),n.update(h,i,1)}function c(d,h,f){f!==0&&(t.drawElementsInstanced(i,h,r,d*a,f),n.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=h[m];n.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function c2(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Oe("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function h2(t,e,n){let i=new WeakMap,s=new Nt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let w=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],R=0;f===!0&&(R=1),g===!0&&(R=2),v===!0&&(R=3);let y=o.attributes.position.count*R,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let M=new Float32Array(y*S*4*d),C=new Ba(M,y,S,d);C.type=fi,C.needsUpdate=!0;let _=R*4;for(let T=0;T<d;T++){let I=m[T],N=p[T],k=E[T],X=y*S*4*T;for(let O=0;O<I.count;O++){let W=O*_;f===!0&&(s.fromBufferAttribute(I,O),M[X+W+0]=s.x,M[X+W+1]=s.y,M[X+W+2]=s.z,M[X+W+3]=0),g===!0&&(s.fromBufferAttribute(N,O),M[X+W+4]=s.x,M[X+W+5]=s.y,M[X+W+6]=s.z,M[X+W+7]=0),v===!0&&(s.fromBufferAttribute(k,O),M[X+W+8]=s.x,M[X+W+9]=s.y,M[X+W+10]=s.z,M[X+W+11]=k.itemSize===4?s.w:1)}}h={count:d,texture:C,size:new Je(y,S)},i.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function u2(t,e,n,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}var d2={[Ku]:"LINEAR_TONE_MAPPING",[Zu]:"REINHARD_TONE_MAPPING",[ju]:"CINEON_TONE_MAPPING",[Ju]:"ACES_FILMIC_TONE_MAPPING",[ed]:"AGX_TONE_MAPPING",[td]:"NEUTRAL_TONE_MAPPING",[Qu]:"CUSTOM_TONE_MAPPING"};function f2(t,e,n,i,s,r){let a=new zn(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new es(e,n):void 0}),o=new zn(e,n,{type:Li,depthBuffer:!1,stencilBuffer:!1}),l=new Tn;l.setAttribute("position",new An([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new An([0,2,0,0,2,0],2));let c=new kl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new hn(l,c),d=new Qa(-1,1,1,-1,0,1),h=null,f=null,g=!1,v,m=null,p=[],E=!1;this.setSize=function(R,y){a.setSize(R,y),o.setSize(R,y);for(let S=0;S<p.length;S++){let M=p[S];M.setSize&&M.setSize(R,y)}},this.setEffects=function(R){p=R,E=p.length>0&&p[0].isRenderPass===!0;let y=a.width,S=a.height;for(let M=0;M<p.length;M++){let C=p[M];C.setSize&&C.setSize(y,S)}},this.begin=function(R,y){if(g||R.toneMapping===ui&&p.length===0)return!1;if(m=y,y!==null){let S=y.width,M=y.height;(a.width!==S||a.height!==M)&&this.setSize(S,M)}return E===!1&&R.setRenderTarget(a),v=R.toneMapping,R.toneMapping=ui,!0},this.hasRenderPass=function(){return E},this.end=function(R,y){R.toneMapping=v,g=!0;let S=a,M=o;for(let C=0;C<p.length;C++){let _=p[C];if(_.enabled!==!1&&(_.render(R,M,S,y),_.needsSwap!==!1)){let w=S;S=M,M=w}}if(h!==R.outputColorSpace||f!==R.toneMapping){h=R.outputColorSpace,f=R.toneMapping,c.defines={},je.getTransfer(h)===pt&&(c.defines.SRGB_TRANSFER="");let C=d2[f];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,R.setRenderTarget(m),R.render(u,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var pg=new yn,Sd=new es(1,1),mg=new Ba,gg=new Pl,xg=new Ya,Km=[],Zm=[],jm=new Float32Array(16),Jm=new Float32Array(9),Qm=new Float32Array(4);function ta(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=Km[s];if(r===void 0&&(r=new Float32Array(s),Km[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function nn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function sn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function $c(t,e){let n=Zm[e];n===void 0&&(n=new Int32Array(e),Zm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function p2(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function m2(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2fv(this.addr,e),sn(n,e)}}function g2(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(nn(n,e))return;t.uniform3fv(this.addr,e),sn(n,e)}}function x2(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4fv(this.addr,e),sn(n,e)}}function v2(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),sn(n,e)}else{if(nn(n,i))return;Qm.set(i),t.uniformMatrix2fv(this.addr,!1,Qm),sn(n,i)}}function _2(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),sn(n,e)}else{if(nn(n,i))return;Jm.set(i),t.uniformMatrix3fv(this.addr,!1,Jm),sn(n,i)}}function y2(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),sn(n,e)}else{if(nn(n,i))return;jm.set(i),t.uniformMatrix4fv(this.addr,!1,jm),sn(n,i)}}function b2(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function M2(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2iv(this.addr,e),sn(n,e)}}function S2(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;t.uniform3iv(this.addr,e),sn(n,e)}}function w2(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4iv(this.addr,e),sn(n,e)}}function E2(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function A2(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2uiv(this.addr,e),sn(n,e)}}function T2(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;t.uniform3uiv(this.addr,e),sn(n,e)}}function C2(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4uiv(this.addr,e),sn(n,e)}}function R2(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Sd.compareFunction=n.isReversedDepthBuffer()?Bc:kc,r=Sd):r=pg,n.setTexture2D(e||r,s)}function I2(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||gg,s)}function P2(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||xg,s)}function L2(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||mg,s)}function N2(t){switch(t){case 5126:return p2;case 35664:return m2;case 35665:return g2;case 35666:return x2;case 35674:return v2;case 35675:return _2;case 35676:return y2;case 5124:case 35670:return b2;case 35667:case 35671:return M2;case 35668:case 35672:return S2;case 35669:case 35673:return w2;case 5125:return E2;case 36294:return A2;case 36295:return T2;case 36296:return C2;case 35678:case 36198:case 36298:case 36306:case 35682:return R2;case 35679:case 36299:case 36307:return I2;case 35680:case 36300:case 36308:case 36293:return P2;case 36289:case 36303:case 36311:case 36292:return L2}}function F2(t,e){t.uniform1fv(this.addr,e)}function D2(t,e){let n=ta(e,this.size,2);t.uniform2fv(this.addr,n)}function U2(t,e){let n=ta(e,this.size,3);t.uniform3fv(this.addr,n)}function O2(t,e){let n=ta(e,this.size,4);t.uniform4fv(this.addr,n)}function k2(t,e){let n=ta(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function B2(t,e){let n=ta(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function z2(t,e){let n=ta(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function V2(t,e){t.uniform1iv(this.addr,e)}function H2(t,e){t.uniform2iv(this.addr,e)}function G2(t,e){t.uniform3iv(this.addr,e)}function W2(t,e){t.uniform4iv(this.addr,e)}function X2(t,e){t.uniform1uiv(this.addr,e)}function $2(t,e){t.uniform2uiv(this.addr,e)}function q2(t,e){t.uniform3uiv(this.addr,e)}function Y2(t,e){t.uniform4uiv(this.addr,e)}function K2(t,e,n){let i=this.cache,s=e.length,r=$c(n,s);nn(i,r)||(t.uniform1iv(this.addr,r),sn(i,r));let a;this.type===t.SAMPLER_2D_SHADOW?a=Sd:a=pg;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function Z2(t,e,n){let i=this.cache,s=e.length,r=$c(n,s);nn(i,r)||(t.uniform1iv(this.addr,r),sn(i,r));for(let a=0;a!==s;++a)n.setTexture3D(e[a]||gg,r[a])}function j2(t,e,n){let i=this.cache,s=e.length,r=$c(n,s);nn(i,r)||(t.uniform1iv(this.addr,r),sn(i,r));for(let a=0;a!==s;++a)n.setTextureCube(e[a]||xg,r[a])}function J2(t,e,n){let i=this.cache,s=e.length,r=$c(n,s);nn(i,r)||(t.uniform1iv(this.addr,r),sn(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||mg,r[a])}function Q2(t){switch(t){case 5126:return F2;case 35664:return D2;case 35665:return U2;case 35666:return O2;case 35674:return k2;case 35675:return B2;case 35676:return z2;case 5124:case 35670:return V2;case 35667:case 35671:return H2;case 35668:case 35672:return G2;case 35669:case 35673:return W2;case 5125:return X2;case 36294:return $2;case 36295:return q2;case 36296:return Y2;case 35678:case 36198:case 36298:case 36306:case 35682:return K2;case 35679:case 36299:case 36307:return Z2;case 35680:case 36300:case 36308:case 36293:return j2;case 36289:case 36303:case 36311:case 36292:return J2}}var wd=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=N2(n.type)}},Ed=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Q2(n.type)}},Ad=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,n[o.id],i)}}},bd=/(\w+)(\])?(\[|\.)?/g;function eg(t,e){t.seq.push(e),t.map[e.id]=e}function eM(t,e,n){let i=t.name,s=i.length;for(bd.lastIndex=0;;){let r=bd.exec(i),a=bd.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){eg(n,c===void 0?new wd(o,t,e):new Ed(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new Ad(o),eg(n,d)),n=d}}}var ea=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);eM(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){let s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,a=n.length;r!==a;++r){let o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,n){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in n&&i.push(a)}return i}};function tg(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var tM=37297,nM=0;function iM(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var ng=new ze;function sM(t){je._getMatrix(ng,je.workingColorSpace,t);let e=`mat3( ${ng.elements.map(n=>n.toFixed(4))} )`;switch(je.getTransfer(t)){case Oa:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function ig(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+iM(t.getShaderSource(e),o)}else return r}function rM(t,e){let n=sM(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var aM={[Ku]:"Linear",[Zu]:"Reinhard",[ju]:"Cineon",[Ju]:"ACESFilmic",[ed]:"AgX",[td]:"Neutral",[Qu]:"Custom"};function oM(t,e){let n=aM[e];return n===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Vc=new L;function lM(){je.getLuminanceCoefficients(Vc);let t=Vc.x.toFixed(4),e=Vc.y.toFixed(4),n=Vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cM(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function hM(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function uM(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function fo(t){return t!==""}function sg(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var dM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Td(t){return t.replace(dM,pM)}var fM=new Map;function pM(t,e){let n=qe[e];if(n===void 0){let i=fM.get(e);if(i!==void 0)n=qe[i],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Td(n)}var mM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ag(t){return t.replace(mM,gM)}function gM(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function og(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var xM={[eo]:"SHADOWMAP_TYPE_PCF",[Zr]:"SHADOWMAP_TYPE_VSM"};function vM(t){return xM[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var _M={[Ps]:"ENVMAP_TYPE_CUBE",[rr]:"ENVMAP_TYPE_CUBE",[to]:"ENVMAP_TYPE_CUBE_UV"};function yM(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":_M[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var bM={[rr]:"ENVMAP_MODE_REFRACTION"};function MM(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":bM[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var SM={[Yu]:"ENVMAP_BLENDING_MULTIPLY",[Am]:"ENVMAP_BLENDING_MIX",[Tm]:"ENVMAP_BLENDING_ADD"};function wM(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":SM[t.combine]||"ENVMAP_BLENDING_NONE"}function EM(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function AM(t,e,n,i){let s=t.getContext(),r=n.defines,a=n.vertexShader,o=n.fragmentShader,l=vM(n),c=yM(n),u=MM(n),d=wM(n),h=EM(n),f=cM(n),g=hM(r),v=s.createProgram(),m,p,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(fo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(fo).join(`
`),p.length>0&&(p+=`
`)):(m=[og(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),p=[og(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ui?"#define TONE_MAPPING":"",n.toneMapping!==ui?qe.tonemapping_pars_fragment:"",n.toneMapping!==ui?oM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,rM("linearToOutputTexel",n.outputColorSpace),lM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(fo).join(`
`)),a=Td(a),a=sg(a,n),a=rg(a,n),o=Td(o),o=sg(o,n),o=rg(o,n),a=ag(a),o=ag(o),n.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===ud?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ud?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=E+m+a,y=E+p+o,S=tg(s,s.VERTEX_SHADER,R),M=tg(s,s.FRAGMENT_SHADER,y);s.attachShader(v,S),s.attachShader(v,M),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(I){if(t.debug.checkShaderErrors){let N=s.getProgramInfoLog(v)||"",k=s.getShaderInfoLog(S)||"",X=s.getShaderInfoLog(M)||"",O=N.trim(),W=k.trim(),V=X.trim(),$=!0,Q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,v,S,M);else{let re=ig(s,S,"vertex"),se=ig(s,M,"fragment");Oe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+re+`
`+se)}else O!==""?De("WebGLProgram: Program Info Log:",O):(W===""||V==="")&&(Q=!1);Q&&(I.diagnostics={runnable:$,programLog:O,vertexShader:{log:W,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(S),s.deleteShader(M),_=new ea(s,v),w=uM(s,v)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(v,tM)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=nM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=M,this}var TM=0,Cd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){let s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new Rd(e),n.set(e,i)),i}},Rd=class{constructor(e){this.id=TM++,this.code=e,this.usedTimes=0}};function CM(t){return t===Ns||t===oo||t===lo}function RM(t,e,n,i,s,r){let a=new za,o=new Cd,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,w,T,I,N,k){let X=I.fog,O=N.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,$=e.get(_.envMap||W,V),Q=$&&$.mapping===to?$.image.height:null,re=f[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&De("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let se=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ve=se!==void 0?se.length:0,rt=0;O.morphAttributes.position!==void 0&&(rt=1),O.morphAttributes.normal!==void 0&&(rt=2),O.morphAttributes.color!==void 0&&(rt=3);let Ct,Ge,K,ne;if(re){let Se=Fi[re];Ct=Se.vertexShader,Ge=Se.fragmentShader}else{Ct=_.vertexShader,Ge=_.fragmentShader;let Se=o.getVertexShaderStage(_),Ut=o.getFragmentShaderStage(_);o.update(_,Se,Ut),K=Se.id,ne=Ut.id}let ee=t.getRenderTarget(),ke=t.state.buffers.depth.getReversed(),Be=N.isInstancedMesh===!0,Fe=N.isBatchedMesh===!0,Rt=!!_.map,Ke=!!_.matcap,ut=!!$,nt=!!_.aoMap,Ze=!!_.lightMap,St=!!_.bumpMap&&_.wireframe===!1,Lt=!!_.normalMap,qt=!!_.displacementMap,Qt=!!_.emissiveMap,It=!!_.metalnessMap,Yt=!!_.roughnessMap,F=_.anisotropy>0,wn=_.clearcoat>0,mt=_.dispersion>0,A=_.iridescence>0,x=_.sheen>0,U=_.transmission>0,H=F&&!!_.anisotropyMap,q=wn&&!!_.clearcoatMap,te=wn&&!!_.clearcoatNormalMap,oe=wn&&!!_.clearcoatRoughnessMap,Y=A&&!!_.iridescenceMap,j=A&&!!_.iridescenceThicknessMap,le=x&&!!_.sheenColorMap,Te=x&&!!_.sheenRoughnessMap,ue=!!_.specularMap,ce=!!_.specularColorMap,Ne=!!_.specularIntensityMap,Ue=U&&!!_.transmissionMap,We=U&&!!_.thicknessMap,P=!!_.gradientMap,ae=!!_.alphaMap,Z=_.alphaTest>0,he=!!_.alphaHash,me=!!_.extensions,J=ui;_.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(J=t.toneMapping);let Ae={shaderID:re,shaderType:_.type,shaderName:_.name,vertexShader:Ct,fragmentShader:Ge,defines:_.defines,customVertexShaderID:K,customFragmentShaderID:ne,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:Fe,batchingColor:Fe&&N._colorsTexture!==null,instancing:Be,instancingColor:Be&&N.instanceColor!==null,instancingMorph:Be&&N.morphTexture!==null,outputColorSpace:ee===null?t.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Rt,matcap:Ke,envMap:ut,envMapMode:ut&&$.mapping,envMapCubeUVHeight:Q,aoMap:nt,lightMap:Ze,bumpMap:St,normalMap:Lt,displacementMap:qt,emissiveMap:Qt,normalMapObjectSpace:Lt&&_.normalMapType===Im,normalMapTangentSpace:Lt&&_.normalMapType===hd,packedNormalMap:Lt&&_.normalMapType===hd&&CM(_.normalMap.format),metalnessMap:It,roughnessMap:Yt,anisotropy:F,anisotropyMap:H,clearcoat:wn,clearcoatMap:q,clearcoatNormalMap:te,clearcoatRoughnessMap:oe,dispersion:mt,iridescence:A,iridescenceMap:Y,iridescenceThicknessMap:j,sheen:x,sheenColorMap:le,sheenRoughnessMap:Te,specularMap:ue,specularColorMap:ce,specularIntensityMap:Ne,transmission:U,transmissionMap:Ue,thicknessMap:We,gradientMap:P,opaque:_.transparent===!1&&_.blending===Jn&&_.alphaToCoverage===!1,alphaMap:ae,alphaTest:Z,alphaHash:he,combine:_.combine,mapUv:Rt&&g(_.map.channel),aoMapUv:nt&&g(_.aoMap.channel),lightMapUv:Ze&&g(_.lightMap.channel),bumpMapUv:St&&g(_.bumpMap.channel),normalMapUv:Lt&&g(_.normalMap.channel),displacementMapUv:qt&&g(_.displacementMap.channel),emissiveMapUv:Qt&&g(_.emissiveMap.channel),metalnessMapUv:It&&g(_.metalnessMap.channel),roughnessMapUv:Yt&&g(_.roughnessMap.channel),anisotropyMapUv:H&&g(_.anisotropyMap.channel),clearcoatMapUv:q&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:te&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:j&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:le&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(_.sheenRoughnessMap.channel),specularMapUv:ue&&g(_.specularMap.channel),specularColorMapUv:ce&&g(_.specularColorMap.channel),specularIntensityMapUv:Ne&&g(_.specularIntensityMap.channel),transmissionMapUv:Ue&&g(_.transmissionMap.channel),thicknessMapUv:We&&g(_.thicknessMap.channel),alphaMapUv:ae&&g(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Lt||F),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!O.attributes.uv&&(Rt||ae),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&Lt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ke,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:rt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&T.length>0,shadowMapType:t.shadowMap.type,toneMapping:J,decodeVideoTexture:Rt&&_.map.isVideoTexture===!0&&je.getTransfer(_.map.colorSpace)===pt,decodeVideoTextureEmissive:Qt&&_.emissiveMap.isVideoTexture===!0&&je.getTransfer(_.emissiveMap.colorSpace)===pt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ri,flipSided:_.side===bn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:me&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&_.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function m(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let T in _.defines)w.push(T),w.push(_.defines[T]);return _.isRawShaderMaterial===!1&&(p(w,_),E(w,_),w.push(t.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function p(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function E(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function R(_){let w=f[_.type],T;if(w){let I=Fi[w];T=Hm.clone(I.uniforms)}else T=_.uniforms;return T}function y(_,w){let T=u.get(w);return T!==void 0?++T.usedTimes:(T=new AM(t,w,_,s),c.push(T),u.set(w,T)),T}function S(_){if(--_.usedTimes===0){let w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function M(_){o.remove(_)}function C(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:R,acquireProgram:y,releaseProgram:S,releaseShaderCache:M,programs:c,dispose:C}}function IM(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function PM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function lg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function cg(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,v,m,p){let E=t[e];return E===void 0?(E={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:p},t[e]=E):(E.id=h.id,E.object=h,E.geometry=f,E.material=g,E.materialVariant=a(h),E.groupOrder=v,E.renderOrder=h.renderOrder,E.z=m,E.group=p),e++,E}function l(h,f,g,v,m,p){let E=o(h,f,g,v,m,p);g.transmission>0?i.push(E):g.transparent===!0?s.push(E):n.push(E)}function c(h,f,g,v,m,p){let E=o(h,f,g,v,m,p);g.transmission>0?i.unshift(E):g.transparent===!0?s.unshift(E):n.unshift(E)}function u(h,f,g){n.length>1&&n.sort(h||PM),i.length>1&&i.sort(f||lg),s.length>1&&s.sort(f||lg),g&&(n.reverse(),i.reverse(),s.reverse())}function d(){for(let h=e,f=t.length;h<f;h++){let g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function LM(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;return r===void 0?(a=new cg,t.set(i,[a])):s>=r.length?(a=new cg,r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function NM(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new L,color:new Ve};break;case"SpotLight":n={position:new L,direction:new L,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new L,halfWidth:new L,halfHeight:new L};break}return t[e.id]=n,n}}}function FM(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var DM=0;function UM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function OM(t){let e=new NM,n=FM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let s=new L,r=new kt,a=new kt;function o(c){let u=0,d=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,E=0,R=0,y=0,S=0,M=0,C=0;c.sort(UM);for(let w=0,T=c.length;w<T;w++){let I=c[w],N=I.color,k=I.intensity,X=I.distance,O=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ns?O=I.shadow.map.texture:O=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=N.r*k,d+=N.g*k,h+=N.b*k;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],k);C++}else if(I.isDirectionalLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let V=I.shadow,$=n.get(I);$.shadowIntensity=V.intensity,$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,i.directionalShadow[f]=$,i.directionalShadowMap[f]=O,i.directionalShadowMatrix[f]=I.shadow.matrix,E++}i.directional[f]=W,f++}else if(I.isSpotLight){let W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(N).multiplyScalar(k),W.distance=X,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[v]=W;let V=I.shadow;if(I.map&&(i.spotLightMap[S]=I.map,S++,V.updateMatrices(I),I.castShadow&&M++),i.spotLightMatrix[v]=V.matrix,I.castShadow){let $=n.get(I);$.shadowIntensity=V.intensity,$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,i.spotShadow[v]=$,i.spotShadowMap[v]=O,y++}v++}else if(I.isRectAreaLight){let W=e.get(I);W.color.copy(N).multiplyScalar(k),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=W,m++}else if(I.isPointLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let V=I.shadow,$=n.get(I);$.shadowIntensity=V.intensity,$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,$.shadowCameraNear=V.camera.near,$.shadowCameraFar=V.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=O,i.pointShadowMatrix[g]=I.shadow.matrix,R++}i.point[g]=W,g++}else if(I.isHemisphereLight){let W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(k),W.groundColor.copy(I.groundColor).multiplyScalar(k),i.hemi[p]=W,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let _=i.hash;(_.directionalLength!==f||_.pointLength!==g||_.spotLength!==v||_.rectAreaLength!==m||_.hemiLength!==p||_.numDirectionalShadows!==E||_.numPointShadows!==R||_.numSpotShadows!==y||_.numSpotMaps!==S||_.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=y+S-M,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=C,_.directionalLength=f,_.pointLength=g,_.spotLength=v,_.rectAreaLength=m,_.hemiLength=p,_.numDirectionalShadows=E,_.numPointShadows=R,_.numSpotShadows=y,_.numSpotMaps=S,_.numLightProbes=C,i.version=DM++)}function l(c,u){let d=0,h=0,f=0,g=0,v=0,m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){let R=c[p];if(R.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(R.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(R.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(R.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(R.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(R.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(R.width*.5,0,0),y.halfHeight.set(0,R.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(R.isPointLight){let y=i.point[h];y.position.setFromMatrixPosition(R.matrixWorld),y.position.applyMatrix4(m),h++}else if(R.isHemisphereLight){let y=i.hemi[v];y.direction.setFromMatrixPosition(R.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function hg(t){let e=new OM(t),n=[],i=[],s=[];function r(h){d.camera=h,n.length=0,i.length=0,s.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(n)}function u(h){e.setupView(n,h)}let d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function kM(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;return a===void 0?(o=new hg(t),e.set(s,[o])):r>=a.length?(o=new hg(t),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}var BM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zM=`uniform sampler2D shadow_pass;
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
}`,VM=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],HM=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],ug=new kt,uo=new L,Md=new L;function GM(t,e,n){let i=new $a,s=new Je,r=new Je,a=new Nt,o=new Bl,l=new zl,c={},u=n.maxTextureSize,d={[Qi]:bn,[bn]:Qi,[Ri]:Ri},h=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:BM,fragmentShader:zM}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Tn;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new hn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eo;let p=this.type;this.render=function(M,C,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===om&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=eo);let w=t.getRenderTarget(),T=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),N=t.state;N.setBlending(Ii),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let k=p!==this.type;k&&C.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(O=>O.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,O=M.length;X<O;X++){let W=M[X],V=W.shadow;if(V===void 0){De("WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let $=V.getFrameExtents();s.multiply($),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/$.x),s.x=r.x*$.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/$.y),s.y=r.y*$.y,V.mapSize.y=r.y));let Q=t.state.buffers.depth.getReversed();if(V.camera._reversedDepth=Q,V.map===null||k===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Zr){if(W.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new zn(s.x,s.y,{format:Ns,type:Li,minFilter:en,magFilter:en,generateMipmaps:!1}),V.map.texture.name=W.name+".shadowMap",V.map.depthTexture=new es(s.x,s.y,fi),V.map.depthTexture.name=W.name+".shadowMapDepth",V.map.depthTexture.format=Ei,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=cn,V.map.depthTexture.magFilter=cn}else W.isPointLight?(V.map=new Gc(s.x),V.map.depthTexture=new Ol(s.x,di)):(V.map=new zn(s.x,s.y),V.map.depthTexture=new es(s.x,s.y,di)),V.map.depthTexture.name=W.name+".shadowMap",V.map.depthTexture.format=Ei,this.type===eo?(V.map.depthTexture.compareFunction=Q?Bc:kc,V.map.depthTexture.minFilter=en,V.map.depthTexture.magFilter=en):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=cn,V.map.depthTexture.magFilter=cn);V.camera.updateProjectionMatrix()}let re=V.map.isWebGLCubeRenderTarget?6:1;for(let se=0;se<re;se++){if(V.map.isWebGLCubeRenderTarget)t.setRenderTarget(V.map,se),t.clear();else{se===0&&(t.setRenderTarget(V.map),t.clear());let ve=V.getViewport(se);a.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),N.viewport(a)}if(W.isPointLight){let ve=V.camera,rt=V.matrix,Ct=W.distance||ve.far;Ct!==ve.far&&(ve.far=Ct,ve.updateProjectionMatrix()),uo.setFromMatrixPosition(W.matrixWorld),ve.position.copy(uo),Md.copy(ve.position),Md.add(VM[se]),ve.up.copy(HM[se]),ve.lookAt(Md),ve.updateMatrixWorld(),rt.makeTranslation(-uo.x,-uo.y,-uo.z),ug.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),V._frustum.setFromProjectionMatrix(ug,ve.coordinateSystem,ve.reversedDepth)}else V.updateMatrices(W);i=V.getFrustum(),y(C,_,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===Zr&&E(V,_),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(w,T,I)};function E(M,C){let _=e.update(v);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new zn(s.x,s.y,{format:Ns,type:Li})),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(C,null,_,h,v,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(C,null,_,f,v,null)}function R(M,C,_,w){let T=null,I=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0)T=I;else if(T=_.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let N=T.uuid,k=C.uuid,X=c[N];X===void 0&&(X={},c[N]=X);let O=X[k];O===void 0&&(O=T.clone(),X[k]=O,C.addEventListener("dispose",S)),T=O}if(T.visible=C.visible,T.wireframe=C.wireframe,w===Zr?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:d[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,_.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let N=t.properties.get(T);N.light=_}return T}function y(M,C,_,w,T){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&T===Zr)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);let k=e.update(M),X=M.material;if(Array.isArray(X)){let O=k.groups;for(let W=0,V=O.length;W<V;W++){let $=O[W],Q=X[$.materialIndex];if(Q&&Q.visible){let re=R(M,Q,w,T);M.onBeforeShadow(t,M,C,_,k,re,$),t.renderBufferDirect(_,null,k,re,M,$),M.onAfterShadow(t,M,C,_,k,re,$)}}}else if(X.visible){let O=R(M,X,w,T);M.onBeforeShadow(t,M,C,_,k,O,null),t.renderBufferDirect(_,null,k,O,M,null),M.onAfterShadow(t,M,C,_,k,O,null)}}let N=M.children;for(let k=0,X=N.length;k<X;k++)y(N[k],C,_,w,T)}function S(M){M.target.removeEventListener("dispose",S);for(let _ in c){let w=c[_],T=M.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}function WM(t,e){function n(){let P=!1,ae=new Nt,Z=null,he=new Nt(0,0,0,0);return{setMask:function(me){Z!==me&&!P&&(t.colorMask(me,me,me,me),Z=me)},setLocked:function(me){P=me},setClear:function(me,J,Ae,Se,Ut){Ut===!0&&(me*=Se,J*=Se,Ae*=Se),ae.set(me,J,Ae,Se),he.equals(ae)===!1&&(t.clearColor(me,J,Ae,Se),he.copy(ae))},reset:function(){P=!1,Z=null,he.set(-1,0,0,0)}}}function i(){let P=!1,ae=!1,Z=null,he=null,me=null;return{setReversed:function(J){if(ae!==J){let Ae=e.get("EXT_clip_control");J?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),ae=J;let Se=me;me=null,this.setClear(Se)}},getReversed:function(){return ae},setTest:function(J){J?ee(t.DEPTH_TEST):ke(t.DEPTH_TEST)},setMask:function(J){Z!==J&&!P&&(t.depthMask(J),Z=J)},setFunc:function(J){if(ae&&(J=zm[J]),he!==J){switch(J){case vl:t.depthFunc(t.NEVER);break;case _l:t.depthFunc(t.ALWAYS);break;case yl:t.depthFunc(t.LESS);break;case er:t.depthFunc(t.LEQUAL);break;case bl:t.depthFunc(t.EQUAL);break;case Ml:t.depthFunc(t.GEQUAL);break;case Sl:t.depthFunc(t.GREATER);break;case wl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=J}},setLocked:function(J){P=J},setClear:function(J){me!==J&&(me=J,ae&&(J=1-J),t.clearDepth(J))},reset:function(){P=!1,Z=null,he=null,me=null,ae=!1}}}function s(){let P=!1,ae=null,Z=null,he=null,me=null,J=null,Ae=null,Se=null,Ut=null;return{setTest:function(yt){P||(yt?ee(t.STENCIL_TEST):ke(t.STENCIL_TEST))},setMask:function(yt){ae!==yt&&!P&&(t.stencilMask(yt),ae=yt)},setFunc:function(yt,_i,yi){(Z!==yt||he!==_i||me!==yi)&&(t.stencilFunc(yt,_i,yi),Z=yt,he=_i,me=yi)},setOp:function(yt,_i,yi){(J!==yt||Ae!==_i||Se!==yi)&&(t.stencilOp(yt,_i,yi),J=yt,Ae=_i,Se=yi)},setLocked:function(yt){P=yt},setClear:function(yt){Ut!==yt&&(t.clearStencil(yt),Ut=yt)},reset:function(){P=!1,ae=null,Z=null,he=null,me=null,J=null,Ae=null,Se=null,Ut=null}}}let r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],v=null,m=!1,p=null,E=null,R=null,y=null,S=null,M=null,C=null,_=new Ve(0,0,0),w=0,T=!1,I=null,N=null,k=null,X=null,O=null,W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,$=0,Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Q)[1]),V=$>=1):Q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),V=$>=2);let re=null,se={},ve=t.getParameter(t.SCISSOR_BOX),rt=t.getParameter(t.VIEWPORT),Ct=new Nt().fromArray(ve),Ge=new Nt().fromArray(rt);function K(P,ae,Z,he){let me=new Uint8Array(4),J=t.createTexture();t.bindTexture(P,J),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ae=0;Ae<Z;Ae++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(ae,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(ae+Ae,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return J}let ne={};ne[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(t.DEPTH_TEST),a.setFunc(er),St(!1),Lt(Wu),ee(t.CULL_FACE),nt(Ii);function ee(P){u[P]!==!0&&(t.enable(P),u[P]=!0)}function ke(P){u[P]!==!1&&(t.disable(P),u[P]=!1)}function Be(P,ae){return h[P]!==ae?(t.bindFramebuffer(P,ae),h[P]=ae,P===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ae),P===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ae),!0):!1}function Fe(P,ae){let Z=g,he=!1;if(P){Z=f.get(ae),Z===void 0&&(Z=[],f.set(ae,Z));let me=P.textures;if(Z.length!==me.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let J=0,Ae=me.length;J<Ae;J++)Z[J]=t.COLOR_ATTACHMENT0+J;Z.length=me.length,he=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,he=!0);he&&t.drawBuffers(Z)}function Rt(P){return v!==P?(t.useProgram(P),v=P,!0):!1}let Ke={[ws]:t.FUNC_ADD,[cm]:t.FUNC_SUBTRACT,[hm]:t.FUNC_REVERSE_SUBTRACT};Ke[um]=t.MIN,Ke[dm]=t.MAX;let ut={[fm]:t.ZERO,[pm]:t.ONE,[mm]:t.SRC_COLOR,[gl]:t.SRC_ALPHA,[bm]:t.SRC_ALPHA_SATURATE,[_m]:t.DST_COLOR,[xm]:t.DST_ALPHA,[gm]:t.ONE_MINUS_SRC_COLOR,[xl]:t.ONE_MINUS_SRC_ALPHA,[ym]:t.ONE_MINUS_DST_COLOR,[vm]:t.ONE_MINUS_DST_ALPHA,[Mm]:t.CONSTANT_COLOR,[Sm]:t.ONE_MINUS_CONSTANT_COLOR,[wm]:t.CONSTANT_ALPHA,[Em]:t.ONE_MINUS_CONSTANT_ALPHA};function nt(P,ae,Z,he,me,J,Ae,Se,Ut,yt){if(P===Ii){m===!0&&(ke(t.BLEND),m=!1);return}if(m===!1&&(ee(t.BLEND),m=!0),P!==lm){if(P!==p||yt!==T){if((E!==ws||S!==ws)&&(t.blendEquation(t.FUNC_ADD),E=ws,S=ws),yt)switch(P){case Jn:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xu:t.blendFunc(t.ONE,t.ONE);break;case $u:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case qu:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Oe("WebGLState: Invalid blending: ",P);break}else switch(P){case Jn:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xu:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case $u:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qu:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",P);break}R=null,y=null,M=null,C=null,_.set(0,0,0),w=0,p=P,T=yt}return}me=me||ae,J=J||Z,Ae=Ae||he,(ae!==E||me!==S)&&(t.blendEquationSeparate(Ke[ae],Ke[me]),E=ae,S=me),(Z!==R||he!==y||J!==M||Ae!==C)&&(t.blendFuncSeparate(ut[Z],ut[he],ut[J],ut[Ae]),R=Z,y=he,M=J,C=Ae),(Se.equals(_)===!1||Ut!==w)&&(t.blendColor(Se.r,Se.g,Se.b,Ut),_.copy(Se),w=Ut),p=P,T=!1}function Ze(P,ae){P.side===Ri?ke(t.CULL_FACE):ee(t.CULL_FACE);let Z=P.side===bn;ae&&(Z=!Z),St(Z),P.blending===Jn&&P.transparent===!1?nt(Ii):nt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let he=P.stencilWrite;o.setTest(he),he&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Qt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ee(t.SAMPLE_ALPHA_TO_COVERAGE):ke(t.SAMPLE_ALPHA_TO_COVERAGE)}function St(P){I!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),I=P)}function Lt(P){P!==rm?(ee(t.CULL_FACE),P!==N&&(P===Wu?t.cullFace(t.BACK):P===am?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ke(t.CULL_FACE),N=P}function qt(P){P!==k&&(V&&t.lineWidth(P),k=P)}function Qt(P,ae,Z){P?(ee(t.POLYGON_OFFSET_FILL),(X!==ae||O!==Z)&&(X=ae,O=Z,a.getReversed()&&(ae=-ae),t.polygonOffset(ae,Z))):ke(t.POLYGON_OFFSET_FILL)}function It(P){P?ee(t.SCISSOR_TEST):ke(t.SCISSOR_TEST)}function Yt(P){P===void 0&&(P=t.TEXTURE0+W-1),re!==P&&(t.activeTexture(P),re=P)}function F(P,ae,Z){Z===void 0&&(re===null?Z=t.TEXTURE0+W-1:Z=re);let he=se[Z];he===void 0&&(he={type:void 0,texture:void 0},se[Z]=he),(he.type!==P||he.texture!==ae)&&(re!==Z&&(t.activeTexture(Z),re=Z),t.bindTexture(P,ae||ne[P]),he.type=P,he.texture=ae)}function wn(){let P=se[re];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function mt(){try{t.compressedTexImage2D(...arguments)}catch(P){Oe("WebGLState:",P)}}function A(){try{t.compressedTexImage3D(...arguments)}catch(P){Oe("WebGLState:",P)}}function x(){try{t.texSubImage2D(...arguments)}catch(P){Oe("WebGLState:",P)}}function U(){try{t.texSubImage3D(...arguments)}catch(P){Oe("WebGLState:",P)}}function H(){try{t.compressedTexSubImage2D(...arguments)}catch(P){Oe("WebGLState:",P)}}function q(){try{t.compressedTexSubImage3D(...arguments)}catch(P){Oe("WebGLState:",P)}}function te(){try{t.texStorage2D(...arguments)}catch(P){Oe("WebGLState:",P)}}function oe(){try{t.texStorage3D(...arguments)}catch(P){Oe("WebGLState:",P)}}function Y(){try{t.texImage2D(...arguments)}catch(P){Oe("WebGLState:",P)}}function j(){try{t.texImage3D(...arguments)}catch(P){Oe("WebGLState:",P)}}function le(P){return d[P]!==void 0?d[P]:t.getParameter(P)}function Te(P,ae){d[P]!==ae&&(t.pixelStorei(P,ae),d[P]=ae)}function ue(P){Ct.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),Ct.copy(P))}function ce(P){Ge.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),Ge.copy(P))}function Ne(P,ae){let Z=c.get(ae);Z===void 0&&(Z=new WeakMap,c.set(ae,Z));let he=Z.get(P);he===void 0&&(he=t.getUniformBlockIndex(ae,P.name),Z.set(P,he))}function Ue(P,ae){let he=c.get(ae).get(P);l.get(ae)!==he&&(t.uniformBlockBinding(ae,he,P.__bindingPointIndex),l.set(ae,he))}function We(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},d={},re=null,se={},h={},f=new WeakMap,g=[],v=null,m=!1,p=null,E=null,R=null,y=null,S=null,M=null,C=null,_=new Ve(0,0,0),w=0,T=!1,I=null,N=null,k=null,X=null,O=null,Ct.set(0,0,t.canvas.width,t.canvas.height),Ge.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:ke,bindFramebuffer:Be,drawBuffers:Fe,useProgram:Rt,setBlending:nt,setMaterial:Ze,setFlipSided:St,setCullFace:Lt,setLineWidth:qt,setPolygonOffset:Qt,setScissorTest:It,activeTexture:Yt,bindTexture:F,unbindTexture:wn,compressedTexImage2D:mt,compressedTexImage3D:A,texImage2D:Y,texImage3D:j,pixelStorei:Te,getParameter:le,updateUBOMapping:Ne,uniformBlockBinding:Ue,texStorage2D:te,texStorage3D:oe,texSubImage2D:x,texSubImage3D:U,compressedTexSubImage2D:H,compressedTexSubImage3D:q,scissor:ue,viewport:ce,reset:We}}function XM(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,x){return g?new OffscreenCanvas(A,x):Wr("canvas")}function m(A,x,U){let H=1,q=mt(A);if((q.width>U||q.height>U)&&(H=U/Math.max(q.width,q.height)),H<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let te=Math.floor(H*q.width),oe=Math.floor(H*q.height);h===void 0&&(h=v(te,oe));let Y=x?v(te,oe):h;return Y.width=te,Y.height=oe,Y.getContext("2d").drawImage(A,0,0,te,oe),De("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+te+"x"+oe+")."),Y}else return"data"in A&&De("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),A;return A}function p(A){return A.generateMipmaps}function E(A){t.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(A,x,U,H,q,te=!1){if(A!==null){if(t[A]!==void 0)return t[A];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let oe;H&&(oe=e.get("EXT_texture_norm16"),oe||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===t.RED&&(U===t.FLOAT&&(Y=t.R32F),U===t.HALF_FLOAT&&(Y=t.R16F),U===t.UNSIGNED_BYTE&&(Y=t.R8),U===t.UNSIGNED_SHORT&&oe&&(Y=oe.R16_EXT),U===t.SHORT&&oe&&(Y=oe.R16_SNORM_EXT)),x===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(Y=t.R8UI),U===t.UNSIGNED_SHORT&&(Y=t.R16UI),U===t.UNSIGNED_INT&&(Y=t.R32UI),U===t.BYTE&&(Y=t.R8I),U===t.SHORT&&(Y=t.R16I),U===t.INT&&(Y=t.R32I)),x===t.RG&&(U===t.FLOAT&&(Y=t.RG32F),U===t.HALF_FLOAT&&(Y=t.RG16F),U===t.UNSIGNED_BYTE&&(Y=t.RG8),U===t.UNSIGNED_SHORT&&oe&&(Y=oe.RG16_EXT),U===t.SHORT&&oe&&(Y=oe.RG16_SNORM_EXT)),x===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(Y=t.RG8UI),U===t.UNSIGNED_SHORT&&(Y=t.RG16UI),U===t.UNSIGNED_INT&&(Y=t.RG32UI),U===t.BYTE&&(Y=t.RG8I),U===t.SHORT&&(Y=t.RG16I),U===t.INT&&(Y=t.RG32I)),x===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),U===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),U===t.UNSIGNED_INT&&(Y=t.RGB32UI),U===t.BYTE&&(Y=t.RGB8I),U===t.SHORT&&(Y=t.RGB16I),U===t.INT&&(Y=t.RGB32I)),x===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),U===t.UNSIGNED_INT&&(Y=t.RGBA32UI),U===t.BYTE&&(Y=t.RGBA8I),U===t.SHORT&&(Y=t.RGBA16I),U===t.INT&&(Y=t.RGBA32I)),x===t.RGB&&(U===t.UNSIGNED_SHORT&&oe&&(Y=oe.RGB16_EXT),U===t.SHORT&&oe&&(Y=oe.RGB16_SNORM_EXT),U===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),U===t.UNSIGNED_INT_10F_11F_11F_REV&&(Y=t.R11F_G11F_B10F)),x===t.RGBA){let j=te?Oa:je.getTransfer(q);U===t.FLOAT&&(Y=t.RGBA32F),U===t.HALF_FLOAT&&(Y=t.RGBA16F),U===t.UNSIGNED_BYTE&&(Y=j===pt?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT&&oe&&(Y=oe.RGBA16_EXT),U===t.SHORT&&oe&&(Y=oe.RGBA16_SNORM_EXT),U===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(A,x){let U;return A?x===null||x===di||x===Jr?U=t.DEPTH24_STENCIL8:x===fi?U=t.DEPTH32F_STENCIL8:x===jr&&(U=t.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===di||x===Jr?U=t.DEPTH_COMPONENT24:x===fi?U=t.DEPTH_COMPONENT32F:x===jr&&(U=t.DEPTH_COMPONENT16),U}function M(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==cn&&A.minFilter!==en?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){let x=A.target;x.removeEventListener("dispose",C),w(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&d.delete(x)}function _(A){let x=A.target;x.removeEventListener("dispose",_),I(x)}function w(A){let x=i.get(A);if(x.__webglInit===void 0)return;let U=A.source,H=f.get(U);if(H){let q=H[x.__cacheKey];q.usedTimes--,q.usedTimes===0&&T(A),Object.keys(H).length===0&&f.delete(U)}i.remove(A)}function T(A){let x=i.get(A);t.deleteTexture(x.__webglTexture);let U=A.source,H=f.get(U);delete H[x.__cacheKey],a.memory.textures--}function I(A){let x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let q=0;q<x.__webglFramebuffer[H].length;q++)t.deleteFramebuffer(x.__webglFramebuffer[H][q]);else t.deleteFramebuffer(x.__webglFramebuffer[H]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)t.deleteFramebuffer(x.__webglFramebuffer[H]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let H=0;H<x.__webglColorRenderbuffer.length;H++)x.__webglColorRenderbuffer[H]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let U=A.textures;for(let H=0,q=U.length;H<q;H++){let te=i.get(U[H]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),a.memory.textures--),i.remove(U[H])}i.remove(A)}let N=0;function k(){N=0}function X(){return N}function O(A){N=A}function W(){let A=N;return A>=s.maxTextures&&De("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),N+=1,A}function V(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function $(A,x){let U=i.get(A);if(A.isVideoTexture&&F(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&U.__version!==A.version){let H=A.image;if(H===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{ke(U,A,x);return}}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+x)}function Q(A,x){let U=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){ke(U,A,x);return}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+x)}function re(A,x){let U=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){ke(U,A,x);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+x)}function se(A,x){let U=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&U.__version!==A.version){Be(U,A,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+x)}let ve={[El]:t.REPEAT,[wi]:t.CLAMP_TO_EDGE,[Al]:t.MIRRORED_REPEAT},rt={[cn]:t.NEAREST,[Cm]:t.NEAREST_MIPMAP_NEAREST,[no]:t.NEAREST_MIPMAP_LINEAR,[en]:t.LINEAR,[tc]:t.LINEAR_MIPMAP_NEAREST,[Pi]:t.LINEAR_MIPMAP_LINEAR},Ct={[Pm]:t.NEVER,[Um]:t.ALWAYS,[Lm]:t.LESS,[kc]:t.LEQUAL,[Nm]:t.EQUAL,[Bc]:t.GEQUAL,[Fm]:t.GREATER,[Dm]:t.NOTEQUAL};function Ge(A,x){if(x.type===fi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===en||x.magFilter===tc||x.magFilter===no||x.magFilter===Pi||x.minFilter===en||x.minFilter===tc||x.minFilter===no||x.minFilter===Pi)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,ve[x.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,ve[x.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,ve[x.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,rt[x.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,rt[x.minFilter]),x.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Ct[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===cn||x.minFilter!==no&&x.minFilter!==Pi||x.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function K(A,x){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));let H=x.source,q=f.get(H);q===void 0&&(q={},f.set(H,q));let te=V(x);if(te!==A.__cacheKey){q[te]===void 0&&(q[te]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,U=!0),q[te].usedTimes++;let oe=q[A.__cacheKey];oe!==void 0&&(q[A.__cacheKey].usedTimes--,oe.usedTimes===0&&T(x)),A.__cacheKey=te,A.__webglTexture=q[te].texture}return U}function ne(A,x,U){return Math.floor(Math.floor(A/U)/x)}function ee(A,x,U,H){let te=A.updateRanges;if(te.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,U,H,x.data);else{te.sort((Te,ue)=>Te.start-ue.start);let oe=0;for(let Te=1;Te<te.length;Te++){let ue=te[oe],ce=te[Te],Ne=ue.start+ue.count,Ue=ne(ce.start,x.width,4),We=ne(ue.start,x.width,4);ce.start<=Ne+1&&Ue===We&&ne(ce.start+ce.count-1,x.width,4)===Ue?ue.count=Math.max(ue.count,ce.start+ce.count-ue.start):(++oe,te[oe]=ce)}te.length=oe+1;let Y=n.getParameter(t.UNPACK_ROW_LENGTH),j=n.getParameter(t.UNPACK_SKIP_PIXELS),le=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let Te=0,ue=te.length;Te<ue;Te++){let ce=te[Te],Ne=Math.floor(ce.start/4),Ue=Math.ceil(ce.count/4),We=Ne%x.width,P=Math.floor(Ne/x.width),ae=Ue,Z=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,We),n.pixelStorei(t.UNPACK_SKIP_ROWS,P),n.texSubImage2D(t.TEXTURE_2D,0,We,P,ae,Z,U,H,x.data)}A.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Y),n.pixelStorei(t.UNPACK_SKIP_PIXELS,j),n.pixelStorei(t.UNPACK_SKIP_ROWS,le)}}function ke(A,x,U){let H=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(H=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(H=t.TEXTURE_3D);let q=K(A,x),te=x.source;n.bindTexture(H,A.__webglTexture,t.TEXTURE0+U);let oe=i.get(te);if(te.version!==oe.__version||q===!0){if(n.activeTexture(t.TEXTURE0+U),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let Z=je.getPrimaries(je.workingColorSpace),he=x.colorSpace===pi?null:je.getPrimaries(x.colorSpace),me=x.colorSpace===pi||Z===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment);let j=m(x.image,!1,s.maxTextureSize);j=wn(x,j);let le=r.convert(x.format,x.colorSpace),Te=r.convert(x.type),ue=y(x.internalFormat,le,Te,x.normalized,x.colorSpace,x.isVideoTexture);Ge(H,x);let ce,Ne=x.mipmaps,Ue=x.isVideoTexture!==!0,We=oe.__version===void 0||q===!0,P=te.dataReady,ae=M(x,j);if(x.isDepthTexture)ue=S(x.format===Ls,x.type),We&&(Ue?n.texStorage2D(t.TEXTURE_2D,1,ue,j.width,j.height):n.texImage2D(t.TEXTURE_2D,0,ue,j.width,j.height,0,le,Te,null));else if(x.isDataTexture)if(Ne.length>0){Ue&&We&&n.texStorage2D(t.TEXTURE_2D,ae,ue,Ne[0].width,Ne[0].height);for(let Z=0,he=Ne.length;Z<he;Z++)ce=Ne[Z],Ue?P&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,ce.width,ce.height,le,Te,ce.data):n.texImage2D(t.TEXTURE_2D,Z,ue,ce.width,ce.height,0,le,Te,ce.data);x.generateMipmaps=!1}else Ue?(We&&n.texStorage2D(t.TEXTURE_2D,ae,ue,j.width,j.height),P&&ee(x,j,le,Te)):n.texImage2D(t.TEXTURE_2D,0,ue,j.width,j.height,0,le,Te,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ue&&We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,ue,Ne[0].width,Ne[0].height,j.depth);for(let Z=0,he=Ne.length;Z<he;Z++)if(ce=Ne[Z],x.format!==Qn)if(le!==null)if(Ue){if(P)if(x.layerUpdates.size>0){let me=gd(ce.width,ce.height,x.format,x.type);for(let J of x.layerUpdates){let Ae=ce.data.subarray(J*me/ce.data.BYTES_PER_ELEMENT,(J+1)*me/ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,J,ce.width,ce.height,1,le,Ae)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,ce.width,ce.height,j.depth,le,ce.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Z,ue,ce.width,ce.height,j.depth,0,ce.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?P&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,ce.width,ce.height,j.depth,le,Te,ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Z,ue,ce.width,ce.height,j.depth,0,le,Te,ce.data)}else{Ue&&We&&n.texStorage2D(t.TEXTURE_2D,ae,ue,Ne[0].width,Ne[0].height);for(let Z=0,he=Ne.length;Z<he;Z++)ce=Ne[Z],x.format!==Qn?le!==null?Ue?P&&n.compressedTexSubImage2D(t.TEXTURE_2D,Z,0,0,ce.width,ce.height,le,ce.data):n.compressedTexImage2D(t.TEXTURE_2D,Z,ue,ce.width,ce.height,0,ce.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?P&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,ce.width,ce.height,le,Te,ce.data):n.texImage2D(t.TEXTURE_2D,Z,ue,ce.width,ce.height,0,le,Te,ce.data)}else if(x.isDataArrayTexture)if(Ue){if(We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,ue,j.width,j.height,j.depth),P)if(x.layerUpdates.size>0){let Z=gd(j.width,j.height,x.format,x.type);for(let he of x.layerUpdates){let me=j.data.subarray(he*Z/j.data.BYTES_PER_ELEMENT,(he+1)*Z/j.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,j.width,j.height,1,le,Te,me)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,le,Te,j.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ue,j.width,j.height,j.depth,0,le,Te,j.data);else if(x.isData3DTexture)Ue?(We&&n.texStorage3D(t.TEXTURE_3D,ae,ue,j.width,j.height,j.depth),P&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,le,Te,j.data)):n.texImage3D(t.TEXTURE_3D,0,ue,j.width,j.height,j.depth,0,le,Te,j.data);else if(x.isFramebufferTexture){if(We)if(Ue)n.texStorage2D(t.TEXTURE_2D,ae,ue,j.width,j.height);else{let Z=j.width,he=j.height;for(let me=0;me<ae;me++)n.texImage2D(t.TEXTURE_2D,me,ue,Z,he,0,le,Te,null),Z>>=1,he>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in t){let Z=t.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),j.parentNode!==Z){Z.appendChild(j),d.add(x),Z.onpaint=he=>{let me=he.changedElements;for(let J of d)me.includes(J.image)&&(J.needsUpdate=!0)},Z.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,j);else{let me=t.RGBA,J=t.RGBA,Ae=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,me,J,Ae,j)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Ue&&We){let Z=mt(Ne[0]);n.texStorage2D(t.TEXTURE_2D,ae,ue,Z.width,Z.height)}for(let Z=0,he=Ne.length;Z<he;Z++)ce=Ne[Z],Ue?P&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,le,Te,ce):n.texImage2D(t.TEXTURE_2D,Z,ue,le,Te,ce);x.generateMipmaps=!1}else if(Ue){if(We){let Z=mt(j);n.texStorage2D(t.TEXTURE_2D,ae,ue,Z.width,Z.height)}P&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le,Te,j)}else n.texImage2D(t.TEXTURE_2D,0,ue,le,Te,j);p(x)&&E(H),oe.__version=te.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Be(A,x,U){if(x.image.length!==6)return;let H=K(A,x),q=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+U);let te=i.get(q);if(q.version!==te.__version||H===!0){n.activeTexture(t.TEXTURE0+U);let oe=je.getPrimaries(je.workingColorSpace),Y=x.colorSpace===pi?null:je.getPrimaries(x.colorSpace),j=x.colorSpace===pi||oe===Y?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let le=x.isCompressedTexture||x.image[0].isCompressedTexture,Te=x.image[0]&&x.image[0].isDataTexture,ue=[];for(let J=0;J<6;J++)!le&&!Te?ue[J]=m(x.image[J],!0,s.maxCubemapSize):ue[J]=Te?x.image[J].image:x.image[J],ue[J]=wn(x,ue[J]);let ce=ue[0],Ne=r.convert(x.format,x.colorSpace),Ue=r.convert(x.type),We=y(x.internalFormat,Ne,Ue,x.normalized,x.colorSpace),P=x.isVideoTexture!==!0,ae=te.__version===void 0||H===!0,Z=q.dataReady,he=M(x,ce);Ge(t.TEXTURE_CUBE_MAP,x);let me;if(le){P&&ae&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,We,ce.width,ce.height);for(let J=0;J<6;J++){me=ue[J].mipmaps;for(let Ae=0;Ae<me.length;Ae++){let Se=me[Ae];x.format!==Qn?Ne!==null?P?Z&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae,0,0,Se.width,Se.height,Ne,Se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae,We,Se.width,Se.height,0,Se.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?Z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae,0,0,Se.width,Se.height,Ne,Ue,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae,We,Se.width,Se.height,0,Ne,Ue,Se.data)}}}else{if(me=x.mipmaps,P&&ae){me.length>0&&he++;let J=mt(ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,We,J.width,J.height)}for(let J=0;J<6;J++)if(Te){P?Z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ue[J].width,ue[J].height,Ne,Ue,ue[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,ue[J].width,ue[J].height,0,Ne,Ue,ue[J].data);for(let Ae=0;Ae<me.length;Ae++){let Ut=me[Ae].image[J].image;P?Z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae+1,0,0,Ut.width,Ut.height,Ne,Ue,Ut.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae+1,We,Ut.width,Ut.height,0,Ne,Ue,Ut.data)}}else{P?Z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ne,Ue,ue[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,Ne,Ue,ue[J]);for(let Ae=0;Ae<me.length;Ae++){let Se=me[Ae];P?Z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae+1,0,0,Ne,Ue,Se.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae+1,We,Ne,Ue,Se.image[J])}}}p(x)&&E(t.TEXTURE_CUBE_MAP),te.__version=q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Fe(A,x,U,H,q,te){let oe=r.convert(U.format,U.colorSpace),Y=r.convert(U.type),j=y(U.internalFormat,oe,Y,U.normalized,U.colorSpace),le=i.get(x),Te=i.get(U);if(Te.__renderTarget=x,!le.__hasExternalTextures){let ue=Math.max(1,x.width>>te),ce=Math.max(1,x.height>>te);q===t.TEXTURE_3D||q===t.TEXTURE_2D_ARRAY?n.texImage3D(q,te,j,ue,ce,x.depth,0,oe,Y,null):n.texImage2D(q,te,j,ue,ce,0,oe,Y,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Yt(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,H,q,Te.__webglTexture,0,It(x)):(q===t.TEXTURE_2D||q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,H,q,Te.__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Rt(A,x,U){if(t.bindRenderbuffer(t.RENDERBUFFER,A),x.depthBuffer){let H=x.depthTexture,q=H&&H.isDepthTexture?H.type:null,te=S(x.stencilBuffer,q),oe=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Yt(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,It(x),te,x.width,x.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,It(x),te,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,te,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,oe,t.RENDERBUFFER,A)}else{let H=x.textures;for(let q=0;q<H.length;q++){let te=H[q],oe=r.convert(te.format,te.colorSpace),Y=r.convert(te.type),j=y(te.internalFormat,oe,Y,te.normalized,te.colorSpace);Yt(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,It(x),j,x.width,x.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,It(x),j,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,j,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ke(A,x,U){let H=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=i.get(x.depthTexture);if(q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H){if(q.__webglInit===void 0&&(q.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),q.__webglTexture===void 0){q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),Ge(t.TEXTURE_CUBE_MAP,x.depthTexture);let le=r.convert(x.depthTexture.format),Te=r.convert(x.depthTexture.type),ue;x.depthTexture.format===Ei?ue=t.DEPTH_COMPONENT24:x.depthTexture.format===Ls&&(ue=t.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ue,x.width,x.height,0,le,Te,null)}}else $(x.depthTexture,0);let te=q.__webglTexture,oe=It(x),Y=H?t.TEXTURE_CUBE_MAP_POSITIVE_X+U:t.TEXTURE_2D,j=x.depthTexture.format===Ls?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ei)Yt(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,Y,te,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,j,Y,te,0);else if(x.depthTexture.format===Ls)Yt(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,Y,te,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,j,Y,te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ut(A){let x=i.get(A),U=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let H=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),H){let q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,H.removeEventListener("dispose",q)};H.addEventListener("dispose",q),x.__depthDisposeCallback=q}x.__boundDepthTexture=H}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let H=0;H<6;H++)Ke(x.__webglFramebuffer[H],A,H);else{let H=A.texture.mipmaps;H&&H.length>0?Ke(x.__webglFramebuffer[0],A,0):Ke(x.__webglFramebuffer,A,0)}else if(U){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]===void 0)x.__webglDepthbuffer[H]=t.createRenderbuffer(),Rt(x.__webglDepthbuffer[H],A,!1);else{let q=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=x.__webglDepthbuffer[H];t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,te)}}else{let H=A.texture.mipmaps;if(H&&H.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),Rt(x.__webglDepthbuffer,A,!1);else{let q=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,te)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function nt(A,x,U){let H=i.get(A);x!==void 0&&Fe(H.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&ut(A)}function Ze(A){let x=A.texture,U=i.get(A),H=i.get(x);A.addEventListener("dispose",_);let q=A.textures,te=A.isWebGLCubeRenderTarget===!0,oe=q.length>1;if(oe||(H.__webglTexture===void 0&&(H.__webglTexture=t.createTexture()),H.__version=x.version,a.memory.textures++),te){U.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[Y]=[];for(let j=0;j<x.mipmaps.length;j++)U.__webglFramebuffer[Y][j]=t.createFramebuffer()}else U.__webglFramebuffer[Y]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)U.__webglFramebuffer[Y]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(oe)for(let Y=0,j=q.length;Y<j;Y++){let le=i.get(q[Y]);le.__webglTexture===void 0&&(le.__webglTexture=t.createTexture(),a.memory.textures++)}if(A.samples>0&&Yt(A)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let Y=0;Y<q.length;Y++){let j=q[Y];U.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[Y]);let le=r.convert(j.format,j.colorSpace),Te=r.convert(j.type),ue=y(j.internalFormat,le,Te,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),ce=It(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,ue,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,U.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),Rt(U.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture),Ge(t.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)Fe(U.__webglFramebuffer[Y][j],A,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,j);else Fe(U.__webglFramebuffer[Y],A,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(x)&&E(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(oe){for(let Y=0,j=q.length;Y<j;Y++){let le=q[Y],Te=i.get(le),ue=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,Te.__webglTexture),Ge(ue,le),Fe(U.__webglFramebuffer,A,le,t.COLOR_ATTACHMENT0+Y,ue,0),p(le)&&E(ue)}n.unbindTexture()}else{let Y=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Y,H.__webglTexture),Ge(Y,x),x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)Fe(U.__webglFramebuffer[j],A,x,t.COLOR_ATTACHMENT0,Y,j);else Fe(U.__webglFramebuffer,A,x,t.COLOR_ATTACHMENT0,Y,0);p(x)&&E(Y),n.unbindTexture()}A.depthBuffer&&ut(A)}function St(A){let x=A.textures;for(let U=0,H=x.length;U<H;U++){let q=x[U];if(p(q)){let te=R(A),oe=i.get(q).__webglTexture;n.bindTexture(te,oe),E(te),n.unbindTexture()}}}let Lt=[],qt=[];function Qt(A){if(A.samples>0){if(Yt(A)===!1){let x=A.textures,U=A.width,H=A.height,q=t.COLOR_BUFFER_BIT,te=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=i.get(A),Y=x.length>1;if(Y)for(let le=0;le<x.length;le++)n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);let j=A.texture.mipmaps;j&&j.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let le=0;le<x.length;le++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(q|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(q|=t.STENCIL_BUFFER_BIT)),Y){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);let Te=i.get(x[le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Te,0)}t.blitFramebuffer(0,0,U,H,0,0,U,H,q,t.NEAREST),l===!0&&(Lt.length=0,qt.length=0,Lt.push(t.COLOR_ATTACHMENT0+le),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Lt.push(te),qt.push(te),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,qt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Lt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let le=0;le<x.length;le++){n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);let Te=i.get(x[le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,Te,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let x=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function It(A){return Math.min(s.maxSamples,A.samples)}function Yt(A){let x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function F(A){let x=a.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function wn(A,x){let U=A.colorSpace,H=A.format,q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==tr&&U!==pi&&(je.getTransfer(U)===pt?(H!==Qn||q!==Gn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",U)),x}function mt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=k,this.getTextureUnits=X,this.setTextureUnits=O,this.setTexture2D=$,this.setTexture2DArray=Q,this.setTexture3D=re,this.setTextureCube=se,this.rebindTextures=nt,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function $M(t,e){function n(i,s=pi){let r,a=je.getTransfer(s);if(i===Gn)return t.UNSIGNED_BYTE;if(i===ic)return t.UNSIGNED_SHORT_4_4_4_4;if(i===sc)return t.UNSIGNED_SHORT_5_5_5_1;if(i===rd)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ad)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===id)return t.BYTE;if(i===sd)return t.SHORT;if(i===jr)return t.UNSIGNED_SHORT;if(i===nc)return t.INT;if(i===di)return t.UNSIGNED_INT;if(i===fi)return t.FLOAT;if(i===Li)return t.HALF_FLOAT;if(i===od)return t.ALPHA;if(i===ld)return t.RGB;if(i===Qn)return t.RGBA;if(i===Ei)return t.DEPTH_COMPONENT;if(i===Ls)return t.DEPTH_STENCIL;if(i===cd)return t.RED;if(i===rc)return t.RED_INTEGER;if(i===Ns)return t.RG;if(i===ac)return t.RG_INTEGER;if(i===oc)return t.RGBA_INTEGER;if(i===io||i===so||i===ro||i===ao)if(a===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===so)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===lc||i===cc||i===hc||i===uc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===lc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===uc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dc||i===fc||i===pc||i===mc||i===gc||i===oo||i===xc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===dc||i===fc)return a===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===pc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===mc)return r.COMPRESSED_R11_EAC;if(i===gc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===oo)return r.COMPRESSED_RG11_EAC;if(i===xc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===vc||i===_c||i===yc||i===bc||i===Mc||i===Sc||i===wc||i===Ec||i===Ac||i===Tc||i===Cc||i===Rc||i===Ic||i===Pc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===vc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_c)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ec)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ac)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ic)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lc||i===Nc||i===Fc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Lc)return a===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dc||i===Uc||i===lo||i===Oc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Dc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Jr?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var qM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YM=`
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

}`,Id=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new Ka(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new tn({vertexShader:qM,fragmentShader:YM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new hn(new Ci(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pd=class extends Ai{constructor(e,n){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,v=typeof XRWebGLBinding<"u",m=new Id,p={},E=n.getContextAttributes(),R=null,y=null,S=[],M=[],C=new Je,_=null,w=new xn;w.viewport=new Nt;let T=new xn;T.viewport=new Nt;let I=[w,T],N=new Jl,k=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=S[K];return ne===void 0&&(ne=new qr,S[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=S[K];return ne===void 0&&(ne=new qr,S[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=S[K];return ne===void 0&&(ne=new qr,S[K]=ne),ne.getHandSpace()};function O(K){let ne=M.indexOf(K.inputSource);if(ne===-1)return;let ee=S[ne];ee!==void 0&&(ee.update(K.inputSource,K.frame,c||a),ee.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",V);for(let K=0;K<S.length;K++){let ne=M[K];ne!==null&&(M[K]=null,S[K].disconnect(ne))}k=null,X=null,m.reset();for(let K in p)delete p[K];e.setRenderTarget(R),f=null,h=null,d=null,s=null,y=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",W),s.addEventListener("inputsourceschange",V),E.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,ke=null,Be=null;E.depth&&(Be=E.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=E.stencil?Ls:Ei,ke=E.stencil?Jr:di);let Fe={colorFormat:n.RGBA8,depthFormat:Be,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Fe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new zn(h.textureWidth,h.textureHeight,{format:Qn,type:Gn,depthTexture:new es(h.textureWidth,h.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let ee={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,n,ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new zn(f.framebufferWidth,f.framebufferHeight,{format:Qn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ge.setContext(s),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(K){for(let ne=0;ne<K.removed.length;ne++){let ee=K.removed[ne],ke=M.indexOf(ee);ke>=0&&(M[ke]=null,S[ke].disconnect(ee))}for(let ne=0;ne<K.added.length;ne++){let ee=K.added[ne],ke=M.indexOf(ee);if(ke===-1){for(let Fe=0;Fe<S.length;Fe++)if(Fe>=M.length){M.push(ee),ke=Fe;break}else if(M[Fe]===null){M[Fe]=ee,ke=Fe;break}if(ke===-1)break}let Be=S[ke];Be&&Be.connect(ee)}}let $=new L,Q=new L;function re(K,ne,ee){$.setFromMatrixPosition(ne.matrixWorld),Q.setFromMatrixPosition(ee.matrixWorld);let ke=$.distanceTo(Q),Be=ne.projectionMatrix.elements,Fe=ee.projectionMatrix.elements,Rt=Be[14]/(Be[10]-1),Ke=Be[14]/(Be[10]+1),ut=(Be[9]+1)/Be[5],nt=(Be[9]-1)/Be[5],Ze=(Be[8]-1)/Be[0],St=(Fe[8]+1)/Fe[0],Lt=Rt*Ze,qt=Rt*St,Qt=ke/(-Ze+St),It=Qt*-Ze;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(It),K.translateZ(Qt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Be[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let Yt=Rt+Qt,F=Ke+Qt,wn=Lt-It,mt=qt+(ke-It),A=ut*Ke/F*Yt,x=nt*Ke/F*Yt;K.projectionMatrix.makePerspective(wn,mt,A,x,Yt,F),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function se(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ne=K.near,ee=K.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(ee=m.depthFar)),N.near=T.near=w.near=ne,N.far=T.far=w.far=ee,(k!==N.near||X!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),k=N.near,X=N.far),N.layers.mask=K.layers.mask|6,w.layers.mask=N.layers.mask&-5,T.layers.mask=N.layers.mask&-3;let ke=K.parent,Be=N.cameras;se(N,ke);for(let Fe=0;Fe<Be.length;Fe++)se(Be[Fe],ke);Be.length===2?re(N,w,T):N.projectionMatrix.copy(w.projectionMatrix),ve(K,N,ke)};function ve(K,ne,ee){ee===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(ee.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Cl*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(K){return p[K]};let rt=null;function Ct(K,ne){if(u=ne.getViewerPose(c||a),g=ne,u!==null){let ee=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ke=!1;ee.length!==N.cameras.length&&(N.cameras.length=0,ke=!0);for(let Ke=0;Ke<ee.length;Ke++){let ut=ee[Ke],nt=null;if(f!==null)nt=f.getViewport(ut);else{let St=d.getViewSubImage(h,ut);nt=St.viewport,Ke===0&&(e.setRenderTargetTextures(y,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(y))}let Ze=I[Ke];Ze===void 0&&(Ze=new xn,Ze.layers.enable(Ke),Ze.viewport=new Nt,I[Ke]=Ze),Ze.matrix.fromArray(ut.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(ut.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(nt.x,nt.y,nt.width,nt.height),Ke===0&&(N.matrix.copy(Ze.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ke===!0&&N.cameras.push(Ze)}let Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();let Ke=d.getDepthInformation(ee[0]);Ke&&Ke.isValid&&Ke.texture&&m.init(Ke,s.renderState)}if(Be&&Be.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let Ke=0;Ke<ee.length;Ke++){let ut=ee[Ke].camera;if(ut){let nt=p[ut];nt||(nt=new Ka,p[ut]=nt);let Ze=d.getCameraImage(ut);nt.sourceTexture=Ze}}}}for(let ee=0;ee<S.length;ee++){let ke=M[ee],Be=S[ee];ke!==null&&Be!==void 0&&Be.update(ke,ne,c||a)}rt&&rt(K,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}let Ge=new dg;Ge.setAnimationLoop(Ct),this.setAnimationLoop=function(K){rt=K},this.dispose=function(){}}},KM=new kt,vg=new ze;vg.set(-1,0,0,0,1,0,0,0,1);function ZM(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,fd(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,R,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,R):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===bn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===bn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=e.get(p),R=E.envMap,y=E.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(KM.makeRotationFromEuler(y)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(vg),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=R*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===bn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function jM(t,e,n,i){let s={},r={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let M=S.program;i.uniformBlockBinding(y,M)}function c(y,S){let M=s[y.id];M===void 0&&(m(y),M=u(y),s[y.id]=M,y.addEventListener("dispose",E));let C=S.program;i.updateUBOMapping(y,C);let _=e.render.frame;r[y.id]!==_&&(h(y),r[y.id]=_)}function u(y){let S=d();y.__bindingPointIndex=S;let M=t.createBuffer(),C=y.__size,_=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,C,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,M),M}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let S=s[y.id],M=y.uniforms,C=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let _=0,w=M.length;_<w;_++){let T=M[_];if(Array.isArray(T))for(let I=0,N=T.length;I<N;I++)f(T[I],_,I,C);else f(T,_,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(y,S,M,C){if(v(y,S,M,C)===!0){let _=y.__offset,w=y.value;if(Array.isArray(w)){let T=0;for(let I=0;I<w.length;I++){let N=w[I],k=p(N);g(N,y.__data,T),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(T+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,y.__data)}}function g(y,S,M){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,M)}function v(y,S,M,C){let _=y.value,w=S+"_"+M;if(C[w]===void 0)return typeof _=="number"||typeof _=="boolean"?C[w]=_:ArrayBuffer.isView(_)?C[w]=_.slice():C[w]=_.clone(),!0;{let T=C[w];if(typeof _=="number"||typeof _=="boolean"){if(T!==_)return C[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(T.equals(_)===!1)return T.copy(_),!0}}return!1}function m(y){let S=y.uniforms,M=0,C=16;for(let w=0,T=S.length;w<T;w++){let I=Array.isArray(S[w])?S[w]:[S[w]];for(let N=0,k=I.length;N<k;N++){let X=I[N],O=Array.isArray(X.value)?X.value:[X.value];for(let W=0,V=O.length;W<V;W++){let $=O[W],Q=p($),re=M%C,se=re%Q.boundary,ve=re+se;M+=se,ve!==0&&C-ve<Q.storage&&(M+=C-ve),X.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=M,M+=Q.storage}}}let _=M%C;return _>0&&(M+=C-_),y.__size=M,y.__cache={},this}function p(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):De("WebGLRenderer: Unsupported uniform value type.",y),S}function E(y){let S=y.target;S.removeEventListener("dispose",E);let M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function R(){for(let y in s)t.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:R}}var JM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ni=null;function QM(){return Ni===null&&(Ni=new Ll(JM,16,16,Ns,Li),Ni.name="DFG_LUT",Ni.minFilter=en,Ni.magFilter=en,Ni.wrapS=wi,Ni.wrapT=wi,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}var Wc=class{constructor(e={}){let{canvas:n=Om(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Gn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let v=f,m=new Set([oc,ac,rc]),p=new Set([Gn,di,jr,Jr,ic,sc]),E=new Uint32Array(4),R=new Int32Array(4),y=new L,S=null,M=null,C=[],_=[],w=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,I=!1,N=null,k=null,X=null,O=null;this._outputColorSpace=Bn;let W=0,V=0,$=null,Q=-1,re=null,se=new Nt,ve=new Nt,rt=null,Ct=new Ve(0),Ge=0,K=n.width,ne=n.height,ee=1,ke=null,Be=null,Fe=new Nt(0,0,K,ne),Rt=new Nt(0,0,K,ne),Ke=!1,ut=new $a,nt=!1,Ze=!1,St=new kt,Lt=new L,qt=new Nt,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},It=!1;function Yt(){return $===null?ee:1}let F=i;function wn(b,D){return n.getContext(b,D)}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"185"}`),n.addEventListener("webglcontextlost",Ut,!1),n.addEventListener("webglcontextrestored",yt,!1),n.addEventListener("webglcontextcreationerror",_i,!1),F===null){let D="webgl2";if(F=wn(D,b),F===null)throw wn(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw Oe("WebGLRenderer: "+b.message),b}let mt,A,x,U,H,q,te,oe,Y,j,le,Te,ue,ce,Ne,Ue,We,P,ae,Z,he,me,J;function Ae(){mt=new a2(F),mt.init(),he=new $M(F,mt),A=new Jb(F,mt,e,he),x=new WM(F,mt),A.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),k=F.createFramebuffer(),X=F.createFramebuffer(),O=F.createFramebuffer(),U=new c2(F),H=new IM,q=new XM(F,mt,x,H,A,he,U),te=new r2(T),oe=new f_(F),me=new Zb(F,oe),Y=new o2(F,oe,U,me),j=new u2(F,Y,oe,me,U),P=new h2(F,A,q),Ne=new Qb(H),le=new RM(T,te,mt,A,me,Ne),Te=new ZM(T,H),ue=new LM,ce=new kM(mt),We=new Kb(T,te,x,j,g,l),Ue=new GM(T,j,A),J=new jM(F,U,A,x),ae=new jb(F,mt,U),Z=new l2(F,mt,U),U.programs=le.programs,T.capabilities=A,T.extensions=mt,T.properties=H,T.renderLists=ue,T.shadowMap=Ue,T.state=x,T.info=U}Ae(),v!==Gn&&(w=new f2(v,n.width,n.height,o,s,r));let Se=new Pd(T,F);this.xr=Se,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let b=mt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=mt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(b){b!==void 0&&(ee=b,this.setSize(K,ne,!1))},this.getSize=function(b){return b.set(K,ne)},this.setSize=function(b,D,G=!0){if(Se.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}K=b,ne=D,n.width=Math.floor(b*ee),n.height=Math.floor(D*ee),G===!0&&(n.style.width=b+"px",n.style.height=D+"px"),w!==null&&w.setSize(n.width,n.height),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(K*ee,ne*ee).floor()},this.setDrawingBufferSize=function(b,D,G){K=b,ne=D,ee=G,n.width=Math.floor(b*G),n.height=Math.floor(D*G),this.setViewport(0,0,b,D)},this.setEffects=function(b){if(v===Gn){Oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let D=0;D<b.length;D++)if(b[D].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(se)},this.getViewport=function(b){return b.copy(Fe)},this.setViewport=function(b,D,G,B){b.isVector4?Fe.set(b.x,b.y,b.z,b.w):Fe.set(b,D,G,B),x.viewport(se.copy(Fe).multiplyScalar(ee).round())},this.getScissor=function(b){return b.copy(Rt)},this.setScissor=function(b,D,G,B){b.isVector4?Rt.set(b.x,b.y,b.z,b.w):Rt.set(b,D,G,B),x.scissor(ve.copy(Rt).multiplyScalar(ee).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(b){x.setScissorTest(Ke=b)},this.setOpaqueSort=function(b){ke=b},this.setTransparentSort=function(b){Be=b},this.getClearColor=function(b){return b.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(b=!0,D=!0,G=!0){let B=0;if(b){let z=!1;if($!==null){let pe=$.texture.format;z=m.has(pe)}if(z){let pe=$.texture.type,ye=p.has(pe),fe=We.getClearColor(),Ee=We.getClearAlpha(),Ce=fe.r,Xe=fe.g,Ye=fe.b;ye?(E[0]=Ce,E[1]=Xe,E[2]=Ye,E[3]=Ee,F.clearBufferuiv(F.COLOR,0,E)):(R[0]=Ce,R[1]=Xe,R[2]=Ye,R[3]=Ee,F.clearBufferiv(F.COLOR,0,R))}else B|=F.COLOR_BUFFER_BIT}D&&(B|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(B|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),N=b},this.dispose=function(){n.removeEventListener("webglcontextlost",Ut,!1),n.removeEventListener("webglcontextrestored",yt,!1),n.removeEventListener("webglcontextcreationerror",_i,!1),We.dispose(),ue.dispose(),ce.dispose(),H.dispose(),te.dispose(),j.dispose(),me.dispose(),J.dispose(),le.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Cp),Se.removeEventListener("sessionend",Rp),$s.stop()};function Ut(b){b.preventDefault(),dd("WebGLRenderer: Context Lost."),I=!0}function yt(){dd("WebGLRenderer: Context Restored."),I=!1;let b=U.autoReset,D=Ue.enabled,G=Ue.autoUpdate,B=Ue.needsUpdate,z=Ue.type;Ae(),U.autoReset=b,Ue.enabled=D,Ue.autoUpdate=G,Ue.needsUpdate=B,Ue.type=z}function _i(b){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function yi(b){let D=b.target;D.removeEventListener("dispose",yi),Av(D)}function Av(b){Tv(b),H.remove(b)}function Tv(b){let D=H.get(b).programs;D!==void 0&&(D.forEach(function(G){le.releaseProgram(G)}),b.isShaderMaterial&&le.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,G,B,z,pe){D===null&&(D=Qt);let ye=z.isMesh&&z.matrixWorld.determinantAffine()<0,fe=Iv(b,D,G,B,z);x.setMaterial(B,ye);let Ee=G.index,Ce=1;if(B.wireframe===!0){if(Ee=Y.getWireframeAttribute(G),Ee===void 0)return;Ce=2}let Xe=G.drawRange,Ye=G.attributes.position,Ie=Xe.start*Ce,xt=(Xe.start+Xe.count)*Ce;pe!==null&&(Ie=Math.max(Ie,pe.start*Ce),xt=Math.min(xt,(pe.start+pe.count)*Ce)),Ee!==null?(Ie=Math.max(Ie,0),xt=Math.min(xt,Ee.count)):Ye!=null&&(Ie=Math.max(Ie,0),xt=Math.min(xt,Ye.count));let Vt=xt-Ie;if(Vt<0||Vt===1/0)return;me.setup(z,B,fe,G,Ee);let Ot,vt=ae;if(Ee!==null&&(Ot=oe.get(Ee),vt=Z,vt.setIndex(Ot)),z.isMesh)B.wireframe===!0?(x.setLineWidth(B.wireframeLinewidth*Yt()),vt.setMode(F.LINES)):vt.setMode(F.TRIANGLES);else if(z.isLine){let pn=B.linewidth;pn===void 0&&(pn=1),x.setLineWidth(pn*Yt()),z.isLineSegments?vt.setMode(F.LINES):z.isLineLoop?vt.setMode(F.LINE_LOOP):vt.setMode(F.LINE_STRIP)}else z.isPoints?vt.setMode(F.POINTS):z.isSprite&&vt.setMode(F.TRIANGLES);if(z.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))vt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let pn=z._multiDrawStarts,_e=z._multiDrawCounts,Un=z._multiDrawCount,at=Ee?oe.get(Ee).bytesPerElement:1,Zn=H.get(B).currentProgram.getUniforms();for(let bi=0;bi<Un;bi++)Zn.setValue(F,"_gl_DrawID",bi),vt.render(pn[bi]/at,_e[bi])}else if(z.isInstancedMesh)vt.renderInstances(Ie,Vt,z.count);else if(G.isInstancedBufferGeometry){let pn=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,_e=Math.min(G.instanceCount,pn);vt.renderInstances(Ie,Vt,_e)}else vt.render(Ie,Vt)};function Tp(b,D,G){b.transparent===!0&&b.side===Ri&&b.forceSinglePass===!1?(b.side=bn,b.needsUpdate=!0,Xo(b,D,G),b.side=Qi,b.needsUpdate=!0,Xo(b,D,G),b.side=Ri):Xo(b,D,G)}this.compile=function(b,D,G=null){G===null&&(G=b),M=ce.get(G),M.init(D),_.push(M),G.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(M.pushLight(z),z.castShadow&&M.pushShadow(z))}),b!==G&&b.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(M.pushLight(z),z.castShadow&&M.pushShadow(z))}),M.setupLights();let B=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let pe=z.material;if(pe)if(Array.isArray(pe))for(let ye=0;ye<pe.length;ye++){let fe=pe[ye];Tp(fe,G,z),B.add(fe)}else Tp(pe,G,z),B.add(pe)}),M=_.pop(),B},this.compileAsync=function(b,D,G=null){let B=this.compile(b,D,G);return new Promise(z=>{function pe(){if(B.forEach(function(ye){H.get(ye).currentProgram.isReady()&&B.delete(ye)}),B.size===0){z(b);return}setTimeout(pe,10)}mt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let hu=null;function Cv(b){hu&&hu(b)}function Cp(){$s.stop()}function Rp(){$s.start()}let $s=new dg;$s.setAnimationLoop(Cv),typeof self<"u"&&$s.setContext(self),this.setAnimationLoop=function(b){hu=b,Se.setAnimationLoop(b),b===null?$s.stop():$s.start()},Se.addEventListener("sessionstart",Cp),Se.addEventListener("sessionend",Rp),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(b,D);let G=Se.enabled===!0&&Se.isPresenting===!0,B=w!==null&&($===null||G)&&w.begin(T,$);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(D),D=Se.getCamera()),b.isScene===!0&&b.onBeforeRender(T,b,D,$),M=ce.get(b,_.length),M.init(D),M.state.textureUnits=q.getTextureUnits(),_.push(M),St.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ut.setFromProjectionMatrix(St,hi,D.reversedDepth),Ze=this.localClippingEnabled,nt=Ne.init(this.clippingPlanes,Ze),S=ue.get(b,C.length),S.init(),C.push(S),Se.enabled===!0&&Se.isPresenting===!0){let ye=T.xr.getDepthSensingMesh();ye!==null&&uu(ye,D,-1/0,T.sortObjects)}uu(b,D,0,T.sortObjects),S.finish(),T.sortObjects===!0&&S.sort(ke,Be,D.reversedDepth),It=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,It&&We.addToRenderList(S,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),nt===!0&&Ne.beginShadows();let z=M.state.shadowsArray;if(Ue.render(z,b,D),nt===!0&&Ne.endShadows(),(B&&w.hasRenderPass())===!1){let ye=S.opaque,fe=S.transmissive;if(M.setupLights(),D.isArrayCamera){let Ee=D.cameras;if(fe.length>0)for(let Ce=0,Xe=Ee.length;Ce<Xe;Ce++){let Ye=Ee[Ce];Pp(ye,fe,b,Ye)}It&&We.render(b);for(let Ce=0,Xe=Ee.length;Ce<Xe;Ce++){let Ye=Ee[Ce];Ip(S,b,Ye,Ye.viewport)}}else fe.length>0&&Pp(ye,fe,b,D),It&&We.render(b),Ip(S,b,D)}$!==null&&V===0&&(q.updateMultisampleRenderTarget($),q.updateRenderTargetMipmap($)),B&&w.end(T),b.isScene===!0&&b.onAfterRender(T,b,D),me.resetDefaultState(),Q=-1,re=null,_.pop(),_.length>0?(M=_[_.length-1],q.setTextureUnits(M.state.textureUnits),nt===!0&&Ne.setGlobalState(T.clippingPlanes,M.state.camera)):M=null,C.pop(),C.length>0?S=C[C.length-1]:S=null,N!==null&&N.renderEnd()};function uu(b,D,G,B){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLightProbeGrid)M.pushLightProbeGrid(b);else if(b.isLight)M.pushLight(b),b.castShadow&&M.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ut.intersectsSprite(b)){B&&qt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(St);let ye=j.update(b),fe=b.material;fe.visible&&S.push(b,ye,fe,G,qt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ut.intersectsObject(b))){let ye=j.update(b),fe=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),qt.copy(b.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),qt.copy(ye.boundingSphere.center)),qt.applyMatrix4(b.matrixWorld).applyMatrix4(St)),Array.isArray(fe)){let Ee=ye.groups;for(let Ce=0,Xe=Ee.length;Ce<Xe;Ce++){let Ye=Ee[Ce],Ie=fe[Ye.materialIndex];Ie&&Ie.visible&&S.push(b,ye,Ie,G,qt.z,Ye)}}else fe.visible&&S.push(b,ye,fe,G,qt.z,null)}}let pe=b.children;for(let ye=0,fe=pe.length;ye<fe;ye++)uu(pe[ye],D,G,B)}function Ip(b,D,G,B){let{opaque:z,transmissive:pe,transparent:ye}=b;M.setupLightsView(G),nt===!0&&Ne.setGlobalState(T.clippingPlanes,G),B&&x.viewport(se.copy(B)),z.length>0&&Wo(z,D,G),pe.length>0&&Wo(pe,D,G),ye.length>0&&Wo(ye,D,G),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Pp(b,D,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[B.id]===void 0){let Ie=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[B.id]=new zn(1,1,{generateMipmaps:!0,type:Ie?Li:Gn,minFilter:Pi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}let pe=M.state.transmissionRenderTarget[B.id],ye=B.viewport||se;pe.setSize(ye.z*T.transmissionResolutionScale,ye.w*T.transmissionResolutionScale);let fe=T.getRenderTarget(),Ee=T.getActiveCubeFace(),Ce=T.getActiveMipmapLevel();T.setRenderTarget(pe),T.getClearColor(Ct),Ge=T.getClearAlpha(),Ge<1&&T.setClearColor(16777215,.5),T.clear(),It&&We.render(G);let Xe=T.toneMapping;T.toneMapping=ui;let Ye=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),M.setupLightsView(B),nt===!0&&Ne.setGlobalState(T.clippingPlanes,B),Wo(b,G,B),q.updateMultisampleRenderTarget(pe),q.updateRenderTargetMipmap(pe),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let xt=0,Vt=D.length;xt<Vt;xt++){let Ot=D[xt],{object:vt,geometry:pn,material:_e,group:Un}=Ot;if(_e.side===Ri&&vt.layers.test(B.layers)){let at=_e.side;_e.side=bn,_e.needsUpdate=!0,Lp(vt,G,B,pn,_e,Un),_e.side=at,_e.needsUpdate=!0,Ie=!0}}Ie===!0&&(q.updateMultisampleRenderTarget(pe),q.updateRenderTargetMipmap(pe))}T.setRenderTarget(fe,Ee,Ce),T.setClearColor(Ct,Ge),Ye!==void 0&&(B.viewport=Ye),T.toneMapping=Xe}function Wo(b,D,G){let B=D.isScene===!0?D.overrideMaterial:null;for(let z=0,pe=b.length;z<pe;z++){let ye=b[z],{object:fe,geometry:Ee,group:Ce}=ye,Xe=ye.material;Xe.allowOverride===!0&&B!==null&&(Xe=B),fe.layers.test(G.layers)&&Lp(fe,D,G,Ee,Xe,Ce)}}function Lp(b,D,G,B,z,pe){b.onBeforeRender(T,D,G,B,z,pe),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(T,D,G,B,b,pe),z.transparent===!0&&z.side===Ri&&z.forceSinglePass===!1?(z.side=bn,z.needsUpdate=!0,T.renderBufferDirect(G,D,B,z,b,pe),z.side=Qi,z.needsUpdate=!0,T.renderBufferDirect(G,D,B,z,b,pe),z.side=Ri):T.renderBufferDirect(G,D,B,z,b,pe),b.onAfterRender(T,D,G,B,z,pe)}function Xo(b,D,G){D.isScene!==!0&&(D=Qt);let B=H.get(b),z=M.state.lights,pe=M.state.shadowsArray,ye=z.state.version,fe=le.getParameters(b,z.state,pe,D,G,M.state.lightProbeGridArray),Ee=le.getProgramCacheKey(fe),Ce=B.programs;B.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?D.environment:null,B.fog=D.fog;let Xe=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;B.envMap=te.get(b.envMap||B.environment,Xe),B.envMapRotation=B.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Ce===void 0&&(b.addEventListener("dispose",yi),Ce=new Map,B.programs=Ce);let Ye=Ce.get(Ee);if(Ye!==void 0){if(B.currentProgram===Ye&&B.lightsStateVersion===ye)return Fp(b,fe),Ye}else fe.uniforms=le.getUniforms(b),N!==null&&b.isNodeMaterial&&N.build(b,G,fe),b.onBeforeCompile(fe,T),Ye=le.acquireProgram(fe,Ee),Ce.set(Ee,Ye),B.uniforms=fe.uniforms;let Ie=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ie.clippingPlanes=Ne.uniform),Fp(b,fe),B.needsLights=Lv(b),B.lightsStateVersion=ye,B.needsLights&&(Ie.ambientLightColor.value=z.state.ambient,Ie.lightProbe.value=z.state.probe,Ie.directionalLights.value=z.state.directional,Ie.directionalLightShadows.value=z.state.directionalShadow,Ie.spotLights.value=z.state.spot,Ie.spotLightShadows.value=z.state.spotShadow,Ie.rectAreaLights.value=z.state.rectArea,Ie.ltc_1.value=z.state.rectAreaLTC1,Ie.ltc_2.value=z.state.rectAreaLTC2,Ie.pointLights.value=z.state.point,Ie.pointLightShadows.value=z.state.pointShadow,Ie.hemisphereLights.value=z.state.hemi,Ie.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ie.spotLightMatrix.value=z.state.spotLightMatrix,Ie.spotLightMap.value=z.state.spotLightMap,Ie.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=M.state.lightProbeGridArray.length>0,B.currentProgram=Ye,B.uniformsList=null,Ye}function Np(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=ea.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function Fp(b,D){let G=H.get(b);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function Rv(b,D){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(D.matrixWorld);for(let G=0,B=b.length;G<B;G++){let z=b[G];if(z.texture!==null&&z.boundingBox.containsPoint(y))return z}return null}function Iv(b,D,G,B,z){D.isScene!==!0&&(D=Qt),q.resetTextureUnits();let pe=D.fog,ye=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?D.environment:null,fe=$===null?T.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:je.workingColorSpace,Ee=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ce=te.get(B.envMap||ye,Ee),Xe=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ye=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ie=!!G.morphAttributes.position,xt=!!G.morphAttributes.normal,Vt=!!G.morphAttributes.color,Ot=ui;B.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ot=T.toneMapping);let vt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pn=vt!==void 0?vt.length:0,_e=H.get(B),Un=M.state.lights;if(nt===!0&&(Ze===!0||b!==re)){let bt=b===re&&B.id===Q;Ne.setState(B,b,bt)}let at=!1;B.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Un.state.version||_e.outputColorSpace!==fe||z.isBatchedMesh&&_e.batching===!1||!z.isBatchedMesh&&_e.batching===!0||z.isBatchedMesh&&_e.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&_e.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&_e.instancing===!1||!z.isInstancedMesh&&_e.instancing===!0||z.isSkinnedMesh&&_e.skinning===!1||!z.isSkinnedMesh&&_e.skinning===!0||z.isInstancedMesh&&_e.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&_e.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&_e.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&_e.instancingMorph===!1&&z.morphTexture!==null||_e.envMap!==Ce||B.fog===!0&&_e.fog!==pe||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Ne.numPlanes||_e.numIntersection!==Ne.numIntersection)||_e.vertexAlphas!==Xe||_e.vertexTangents!==Ye||_e.morphTargets!==Ie||_e.morphNormals!==xt||_e.morphColors!==Vt||_e.toneMapping!==Ot||_e.morphTargetsCount!==pn||!!_e.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,_e.__version=B.version);let Zn=_e.currentProgram;at===!0&&(Zn=Xo(B,D,z),N&&B.isNodeMaterial&&N.onUpdateProgram(B,Zn,_e));let bi=!1,ps=!1,Cr=!1,_t=Zn.getUniforms(),Ht=_e.uniforms;if(x.useProgram(Zn.program)&&(bi=!0,ps=!0,Cr=!0),B.id!==Q&&(Q=B.id,ps=!0),_e.needsLights){let bt=Rv(M.state.lightProbeGridArray,z);_e.lightProbeGrid!==bt&&(_e.lightProbeGrid=bt,ps=!0)}if(bi||re!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),_t.setValue(F,"projectionMatrix",b.projectionMatrix),_t.setValue(F,"viewMatrix",b.matrixWorldInverse);let gs=_t.map.cameraPosition;gs!==void 0&&gs.setValue(F,Lt.setFromMatrixPosition(b.matrixWorld)),A.logarithmicDepthBuffer&&_t.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&_t.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),re!==b&&(re=b,ps=!0,Cr=!0)}if(_e.needsLights&&(Un.state.directionalShadowMap.length>0&&_t.setValue(F,"directionalShadowMap",Un.state.directionalShadowMap,q),Un.state.spotShadowMap.length>0&&_t.setValue(F,"spotShadowMap",Un.state.spotShadowMap,q),Un.state.pointShadowMap.length>0&&_t.setValue(F,"pointShadowMap",Un.state.pointShadowMap,q)),z.isSkinnedMesh){_t.setOptional(F,z,"bindMatrix"),_t.setOptional(F,z,"bindMatrixInverse");let bt=z.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),_t.setValue(F,"boneTexture",bt.boneTexture,q))}z.isBatchedMesh&&(_t.setOptional(F,z,"batchingTexture"),_t.setValue(F,"batchingTexture",z._matricesTexture,q),_t.setOptional(F,z,"batchingIdTexture"),_t.setValue(F,"batchingIdTexture",z._indirectTexture,q),_t.setOptional(F,z,"batchingColorTexture"),z._colorsTexture!==null&&_t.setValue(F,"batchingColorTexture",z._colorsTexture,q));let ms=G.morphAttributes;if((ms.position!==void 0||ms.normal!==void 0||ms.color!==void 0)&&P.update(z,G,Zn),(ps||_e.receiveShadow!==z.receiveShadow)&&(_e.receiveShadow=z.receiveShadow,_t.setValue(F,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&D.environment!==null&&(Ht.envMapIntensity.value=D.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=QM()),ps){if(_t.setValue(F,"toneMappingExposure",T.toneMappingExposure),_e.needsLights&&Pv(Ht,Cr),pe&&B.fog===!0&&Te.refreshFogUniforms(Ht,pe),Te.refreshMaterialUniforms(Ht,B,ee,ne,M.state.transmissionRenderTarget[b.id]),_e.needsLights&&_e.lightProbeGrid){let bt=_e.lightProbeGrid;Ht.probesSH.value=bt.texture,Ht.probesMin.value.copy(bt.boundingBox.min),Ht.probesMax.value.copy(bt.boundingBox.max),Ht.probesResolution.value.copy(bt.resolution)}ea.upload(F,Np(_e),Ht,q)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ea.upload(F,Np(_e),Ht,q),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&_t.setValue(F,"center",z.center),_t.setValue(F,"modelViewMatrix",z.modelViewMatrix),_t.setValue(F,"normalMatrix",z.normalMatrix),_t.setValue(F,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){let bt=B.uniformsGroups;for(let gs=0,Rr=bt.length;gs<Rr;gs++){let Dp=bt[gs];J.update(Dp,Zn),J.bind(Dp,Zn)}}return Zn}function Pv(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function Lv(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(b,D,G){let B=H.get(b);B.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),H.get(b.texture).__webglTexture=D,H.get(b.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:G,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,D){let G=H.get(b);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,G=0){$=b,W=D,V=G;let B=null,z=!1,pe=!1;if(b){let fe=H.get(b);if(fe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(F.FRAMEBUFFER,fe.__webglFramebuffer),se.copy(b.viewport),ve.copy(b.scissor),rt=b.scissorTest,x.viewport(se),x.scissor(ve),x.setScissorTest(rt),Q=-1;return}else if(fe.__webglFramebuffer===void 0)q.setupRenderTarget(b);else if(fe.__hasExternalTextures)q.rebindTextures(b,H.get(b.texture).__webglTexture,H.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Xe=b.depthTexture;if(fe.__boundDepthTexture!==Xe){if(Xe!==null&&H.has(Xe)&&(b.width!==Xe.image.width||b.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(b)}}let Ee=b.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(pe=!0);let Ce=H.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ce[D])?B=Ce[D][G]:B=Ce[D],z=!0):b.samples>0&&q.useMultisampledRTT(b)===!1?B=H.get(b).__webglMultisampledFramebuffer:Array.isArray(Ce)?B=Ce[G]:B=Ce,se.copy(b.viewport),ve.copy(b.scissor),rt=b.scissorTest}else se.copy(Fe).multiplyScalar(ee).floor(),ve.copy(Rt).multiplyScalar(ee).floor(),rt=Ke;if(G!==0&&(B=k),x.bindFramebuffer(F.FRAMEBUFFER,B)&&x.drawBuffers(b,B),x.viewport(se),x.scissor(ve),x.setScissorTest(rt),z){let fe=H.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,fe.__webglTexture,G)}else if(pe){let fe=D;for(let Ee=0;Ee<b.textures.length;Ee++){let Ce=H.get(b.textures[Ee]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ee,Ce.__webglTexture,G,fe)}}else if(b!==null&&G!==0){let fe=H.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,fe.__webglTexture,G)}Q=-1},this.readRenderTargetPixels=function(b,D,G,B,z,pe,ye,fe=0){if(!(b&&b.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=H.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){x.bindFramebuffer(F.FRAMEBUFFER,Ee);try{let Ce=b.textures[fe],Xe=Ce.format,Ye=Ce.type;if(b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+fe),!A.textureFormatReadable(Xe)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!A.textureTypeReadable(Ye)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-B&&G>=0&&G<=b.height-z&&F.readPixels(D,G,B,z,he.convert(Xe),he.convert(Ye),pe)}finally{let Ce=$!==null?H.get($).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(b,D,G,B,z,pe,ye,fe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=H.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee)if(D>=0&&D<=b.width-B&&G>=0&&G<=b.height-z){x.bindFramebuffer(F.FRAMEBUFFER,Ee);let Ce=b.textures[fe],Xe=Ce.format,Ye=Ce.type;if(b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+fe),!A.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!A.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ie=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ie),F.bufferData(F.PIXEL_PACK_BUFFER,pe.byteLength,F.STREAM_READ),F.readPixels(D,G,B,z,he.convert(Xe),he.convert(Ye),0);let xt=$!==null?H.get($).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,xt);let Vt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Bm(F,Vt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ie),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,pe),F.deleteBuffer(Ie),F.deleteSync(Vt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,D=null,G=0){let B=Math.pow(2,-G),z=Math.floor(b.image.width*B),pe=Math.floor(b.image.height*B),ye=D!==null?D.x:0,fe=D!==null?D.y:0;q.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,G,0,0,ye,fe,z,pe),x.unbindTexture()},this.copyTextureToTexture=function(b,D,G=null,B=null,z=0,pe=0){let ye,fe,Ee,Ce,Xe,Ye,Ie,xt,Vt,Ot=b.isCompressedTexture?b.mipmaps[pe]:b.image;if(G!==null)ye=G.max.x-G.min.x,fe=G.max.y-G.min.y,Ee=G.isBox3?G.max.z-G.min.z:1,Ce=G.min.x,Xe=G.min.y,Ye=G.isBox3?G.min.z:0;else{let Ht=Math.pow(2,-z);ye=Math.floor(Ot.width*Ht),fe=Math.floor(Ot.height*Ht),b.isDataArrayTexture?Ee=Ot.depth:b.isData3DTexture?Ee=Math.floor(Ot.depth*Ht):Ee=1,Ce=0,Xe=0,Ye=0}B!==null?(Ie=B.x,xt=B.y,Vt=B.z):(Ie=0,xt=0,Vt=0);let vt=he.convert(D.format),pn=he.convert(D.type),_e;D.isData3DTexture?(q.setTexture3D(D,0),_e=F.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(q.setTexture2DArray(D,0),_e=F.TEXTURE_2D_ARRAY):(q.setTexture2D(D,0),_e=F.TEXTURE_2D),x.activeTexture(F.TEXTURE0),x.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,D.flipY),x.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),x.pixelStorei(F.UNPACK_ALIGNMENT,D.unpackAlignment);let Un=x.getParameter(F.UNPACK_ROW_LENGTH),at=x.getParameter(F.UNPACK_IMAGE_HEIGHT),Zn=x.getParameter(F.UNPACK_SKIP_PIXELS),bi=x.getParameter(F.UNPACK_SKIP_ROWS),ps=x.getParameter(F.UNPACK_SKIP_IMAGES);x.pixelStorei(F.UNPACK_ROW_LENGTH,Ot.width),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ot.height),x.pixelStorei(F.UNPACK_SKIP_PIXELS,Ce),x.pixelStorei(F.UNPACK_SKIP_ROWS,Xe),x.pixelStorei(F.UNPACK_SKIP_IMAGES,Ye);let Cr=b.isDataArrayTexture||b.isData3DTexture,_t=D.isDataArrayTexture||D.isData3DTexture;if(b.isDepthTexture){let Ht=H.get(b),ms=H.get(D),bt=H.get(Ht.__renderTarget),gs=H.get(ms.__renderTarget);x.bindFramebuffer(F.READ_FRAMEBUFFER,bt.__webglFramebuffer),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,gs.__webglFramebuffer);for(let Rr=0;Rr<Ee;Rr++)Cr&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,H.get(b).__webglTexture,z,Ye+Rr),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,H.get(D).__webglTexture,pe,Vt+Rr)),F.blitFramebuffer(Ce,Xe,ye,fe,Ie,xt,ye,fe,F.DEPTH_BUFFER_BIT,F.NEAREST);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(z!==0||b.isRenderTargetTexture||H.has(b)){let Ht=H.get(b),ms=H.get(D);x.bindFramebuffer(F.READ_FRAMEBUFFER,X),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,O);for(let bt=0;bt<Ee;bt++)Cr?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.__webglTexture,z,Ye+bt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ht.__webglTexture,z),_t?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ms.__webglTexture,pe,Vt+bt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ms.__webglTexture,pe),z!==0?F.blitFramebuffer(Ce,Xe,ye,fe,Ie,xt,ye,fe,F.COLOR_BUFFER_BIT,F.NEAREST):_t?F.copyTexSubImage3D(_e,pe,Ie,xt,Vt+bt,Ce,Xe,ye,fe):F.copyTexSubImage2D(_e,pe,Ie,xt,Ce,Xe,ye,fe);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else _t?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(_e,pe,Ie,xt,Vt,ye,fe,Ee,vt,pn,Ot.data):D.isCompressedArrayTexture?F.compressedTexSubImage3D(_e,pe,Ie,xt,Vt,ye,fe,Ee,vt,Ot.data):F.texSubImage3D(_e,pe,Ie,xt,Vt,ye,fe,Ee,vt,pn,Ot):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,pe,Ie,xt,ye,fe,vt,pn,Ot.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,pe,Ie,xt,Ot.width,Ot.height,vt,Ot.data):F.texSubImage2D(F.TEXTURE_2D,pe,Ie,xt,ye,fe,vt,pn,Ot);x.pixelStorei(F.UNPACK_ROW_LENGTH,Un),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,at),x.pixelStorei(F.UNPACK_SKIP_PIXELS,Zn),x.pixelStorei(F.UNPACK_SKIP_ROWS,bi),x.pixelStorei(F.UNPACK_SKIP_IMAGES,ps),pe===0&&D.generateMipmaps&&F.generateMipmap(_e),x.unbindTexture()},this.initRenderTarget=function(b){H.get(b).__webglFramebuffer===void 0&&q.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?q.setTextureCube(b,0):b.isData3DTexture?q.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?q.setTexture2DArray(b,0):q.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){W=0,V=0,$=null,x.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),n.unpackColorSpace=je._getUnpackColorSpace()}};var na={amber:"#FFB020",coral:"#FF6B4A",magenta:"#E85C9A",violet:"#9B7BFF",azure:"#4FA8FF",teal:"#2FD0C0",lime:"#9BD648",bone:"#E8DCC8"},Ld=Object.keys(na),_g=["text","label","color","pos","placed","createdAt","lastTouchedAt"];function bg(t,e,n){return{id:t,name:e,createdAt:n,lastOpenedAt:n,nodes:{},links:{},holding:{origin:[0,-14,0],radius:5.2},clocks:{},removedLinks:{}}}function Nd(t,e){let n=!1,i=(s,r,a)=>{let o=t.clocks[s];if(o===void 0||r>o)return t.clocks[s]=r,t.clocks[s+"#a"]=yg(a),!0;if(r===o){let l=yg(a);if(l>(t.clocks[s+"#a"]??-1))return t.clocks[s+"#a"]=l,!0}return!1};switch(e.t){case"node.set":{let s=t.nodes[e.id],r=s??{id:e.id,text:"",label:"",color:"bone",pos:[0,0,0],placed:!1,createdAt:e.ts,lastTouchedAt:e.ts};for(let a of _g)a in e.fields&&i(`n:${e.id}:${a}`,e.ts,e.actor)&&(r[a]=e.fields[a],n=!0);return s||(t.nodes[e.id]=r,n=!0),s===void 0&&t.clocks[`n:${e.id}:#del`]!==void 0&&delete t.clocks[`n:${e.id}:#del`],n}case"node.del":{if(_g.some(r=>(t.clocks[`n:${e.id}:${r}`]??-1)>e.ts))return!1;if(t.nodes[e.id]){delete t.nodes[e.id];for(let r of Object.keys(t.links))(t.links[r].a===e.id||t.links[r].b===e.id)&&(t.removedLinks[r]=e.ts,delete t.links[r]);t.clocks[`n:${e.id}:#del`]=e.ts,n=!0}return n}case"link.add":return t.removedLinks[e.id]!==void 0&&t.removedLinks[e.id]>=e.ts?!1:(t.links[e.id]||(t.links[e.id]={id:e.id,a:e.a,b:e.b,createdAt:e.ts},delete t.removedLinks[e.id],t.clocks[`l:${e.id}`]=e.ts,n=!0),n);case"link.del":return(t.clocks[`l:${e.id}`]??-1)>e.ts?!1:(t.links[e.id]&&(delete t.links[e.id],t.removedLinks[e.id]=e.ts,n=!0),n);case"map.set":{for(let s of Object.keys(e.fields))i(`m:${s}`,e.ts,e.actor)&&(t[s]=e.fields[s],n=!0);return n}}}function yg(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}function Cn(t){return Object.values(t.nodes).sort((e,n)=>e.id<n.id?-1:e.id>n.id?1:0)}function Mg(t){return Object.values(t.links).sort((e,n)=>e.id<n.id?-1:e.id>n.id?1:0)}function lr(t){return Cn(t).filter(e=>!e.placed)}function Fd(t,e){let n=new Set;for(let i of Object.values(t.links))i.a===e?n.add(i.b):i.b===e&&n.add(i.a);return n}function qc(t,e){let n=1/0,i=-1/0;for(let s of Object.values(t.nodes))s.createdAt<n&&(n=s.createdAt),s.createdAt>i&&(i=s.createdAt);return!isFinite(n)||i<=n?1:(e.createdAt-n)/(i-n)}function Sg(t,e,n){let i=new Map,s=e?Fd(t,e):new Set;for(let r of Object.values(t.nodes))i.set(r.id,r.id===e?"selected":n.has(r.id)?"searchHit":r.placed?s.has(r.id)?"connected":"plain":"unplaced");return i}function wg(t,e){let n=e.trim().toLowerCase();return n?Cn(t).map(i=>{let s=i.text.toLowerCase(),r=i.label.toLowerCase(),a=-1;return s===n?a=0:s.startsWith(n)?a=1:r===n?a=2:s.includes(n)?a=3:r.includes(n)&&(a=4),{n:i,score:a}}).filter(i=>i.score>=0).sort((i,s)=>i.score-s.score||(i.n.id<s.n.id?-1:1)).map(i=>({n:i.n,field:i.score===2||i.score===4?"label":"text"})):[]}var Eg=0;function Dd(t){Eg++;let e=Math.floor(Math.random()*16777215).toString(36);return`${t}${Date.now().toString(36)}${Eg.toString(36)}${e}`}var Yc=class t{doc;actor;lastTs=0;listeners=[];transport=null;constructor(e,n){this.doc=e,this.actor=n}static blank(e,n,i){return new t(bg(e,n,Date.now()),i)}lastChange=null;describe(e){if(e.t==="node.set"){let n=e.fields;return"pos"in n&&n.placed===!0?"placed a node":"pos"in n?"moved a node":"text"in n?"edited text":"color"in n?"changed a colour":"label"in n?"set a label":"edited a node"}return e.t==="link.add"?"connected two nodes":e.t==="link.del"?"removed a filament":e.t==="node.del"?"deleted a node":e.t}attach(e){this.transport=e,e.onRemote(n=>{this.lastTs=Math.max(this.lastTs,n.ts),Nd(this.doc,n)&&(this.lastChange={actor:n.actor,remote:n.actor!==this.actor,what:this.describe(n),at:n.ts},this.emit(n))})}detach(){this.transport=null}subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(n=>n!==e)}}emit(e){for(let n of this.listeners)n(this.doc,e)}ts(){let e=Date.now();return this.lastTs=e>this.lastTs?e:this.lastTs+1,this.lastTs}commit(e){let n=e(this.ts());return Nd(this.doc,n)&&(this.lastChange={actor:n.actor,remote:!1,what:this.describe(n),at:n.ts},this.emit(n)),this.transport?.send(n),n}replaceDoc(e){this.doc=e,this.emit(null)}quickAdd(e,n="bone"){let i=Dd("n"),s=lr(this.doc).length,r=this.doc.holding,a=s*2.39996%(Math.PI*2),o=r.radius*(.34+.42*(s%5/5)),l=[r.origin[0]+o*Math.cos(a),r.origin[1]+(s%3-1)*r.radius*.26,r.origin[2]+o*Math.sin(a)],c=Date.now();return this.commit(u=>({t:"node.set",id:i,actor:this.actor,ts:u,fields:{text:e,label:"holding",color:n,pos:l,placed:!1,createdAt:c,lastTouchedAt:c}})),i}place(e,n,i){let s=this.doc.nodes[e];if(!s)return;let r=i!==void 0?i:s.label==="holding"?"":s.label;this.commit(a=>({t:"node.set",id:e,actor:this.actor,ts:a,fields:{pos:n,placed:!0,lastTouchedAt:Date.now(),label:r}}))}move(e,n){this.doc.nodes[e]&&this.commit(i=>({t:"node.set",id:e,actor:this.actor,ts:i,fields:{pos:n,lastTouchedAt:Date.now()}}))}moveCluster(e,n){for(let i of e){let s=this.doc.nodes[i];if(!s)continue;let r=[s.pos[0]+n[0],s.pos[1]+n[1],s.pos[2]+n[2]];this.commit(a=>({t:"node.set",id:i,actor:this.actor,ts:a,fields:{pos:r,lastTouchedAt:Date.now()}}))}}setText(e,n){this.commit(i=>({t:"node.set",id:e,actor:this.actor,ts:i,fields:{text:n,lastTouchedAt:Date.now()}}))}setColor(e,n){this.commit(i=>({t:"node.set",id:e,actor:this.actor,ts:i,fields:{color:n,lastTouchedAt:Date.now()}}))}setLabel(e,n){this.commit(i=>({t:"node.set",id:e,actor:this.actor,ts:i,fields:{label:n,lastTouchedAt:Date.now()}}))}remove(e){this.commit(n=>({t:"node.del",id:e,actor:this.actor,ts:n}))}connect(e,n){if(e===n||!this.doc.nodes[e]||!this.doc.nodes[n])return null;let[i,s]=e<n?[e,n]:[n,e],r=`l${i}_${s}`;return this.doc.links[r]||this.commit(a=>({t:"link.add",id:r,a:i,b:s,actor:this.actor,ts:a})),r}disconnect(e,n){let[i,s]=e<n?[e,n]:[n,e],r=`l${i}_${s}`;this.doc.links[r]&&this.commit(a=>({t:"link.del",id:r,actor:this.actor,ts:a}))}rename(e){this.commit(n=>({t:"map.set",actor:this.actor,ts:n,fields:{name:e}}))}touchOpened(){this.commit(e=>({t:"map.set",actor:this.actor,ts:e,fields:{lastOpenedAt:Date.now()}}))}holdingCount(){return lr(this.doc).length}neighboursOf(e){return Fd(this.doc,e)}node(e){return this.doc.nodes[e]}};var Kc=class{constructor(e,n,i){this.url=e;this.actor=n;this.account=i}url;actor;ws=null;queue=[];remoteFns=[];snapFns=[];origin={from:"live"};connId=null;serverPid=null;mapsFns=[];statusFns=[];status="offline";detail="not connected";account;connect(e){this.setStatus("connecting",`connecting to ${this.url}`);let n=new WebSocket(`${this.url}?map=${encodeURIComponent(e)}&actor=${encodeURIComponent(this.actor)}&account=${encodeURIComponent(this.account)}`);this.ws=n,n.onopen=()=>{this.setStatus("live",`live \xB7 ${this.account}`);for(let i of this.queue.splice(0))n.send(JSON.stringify({t:"op",op:i}))},n.onclose=()=>{this.status!=="error"&&this.setStatus("offline","disconnected")},n.onerror=()=>this.setStatus("error","connection failed"),n.onmessage=i=>{let s=JSON.parse(i.data);if(s.t==="op")for(let r of this.remoteFns)r(s.op);else if(s.t==="snapshot"){this.origin=s.origin??{from:"live"},s.conn!==void 0&&(this.connId=s.conn),s.serverPid!==void 0&&(this.serverPid=s.serverPid);for(let r of this.snapFns)r(s.doc,this.origin)}else if(s.t==="maps")for(let r of this.mapsFns)r(s.maps);else s.t==="error"&&this.setStatus("error",s.message)}}close(){this.ws?.close(),this.ws=null}send(e){this.ws&&this.ws.readyState===WebSocket.OPEN?this.ws.send(JSON.stringify({t:"op",op:e})):this.queue.push(e)}request(e){this.ws&&this.ws.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(e))}onRemote(e){this.remoteFns.push(e)}onSnapshot(e){this.snapFns.push(e)}onMaps(e){this.mapsFns.push(e)}onStatus(e){this.statusFns.push(e),e(this.status,this.detail)}setStatus(e,n){this.status=e,this.detail=n;for(let i of this.statusFns)i(e,n)}};var Ig="#120E0B",eS="#8A7F76",tS="#D8CCC0",Qc="#EFE6D8",nS={plain:0,connected:1,unplaced:2,searchHit:3,selected:4},mo={plain:.5,connected:.72,unplaced:.86,searchHit:.95,selected:1},Ag=new Map;function zd(t){let e=na[t]??t,n=Ag.get(e);return n||(n=new Ve(e),Ag.set(e,n)),n}var Tg=(t,e,n)=>.2126*t+.7152*e+.0722*n;var Ud=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4),Od=t=>t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055;function iS(t,e,n){let i=Ud(t),s=Ud(e),r=Ud(n),a=Math.cbrt(.4122214708*i+.5363325363*s+.0514459929*r),o=Math.cbrt(.2119034982*i+.6806995451*s+.1073969566*r),l=Math.cbrt(.0883024619*i+.2817188376*s+.6299787005*r);return[.2104542553*a+.793617785*o-.0040720468*l,1.9779984951*a-2.428592205*o+.4505937099*l,.0259040371*a+.7827717662*o-.808675766*l]}function kd(t,e,n){let i=(t+.3963377774*e+.2158037573*n)**3,s=(t-.1055613458*e-.0638541728*n)**3,r=(t-.0894841775*e-1.291485548*n)**3;return[Od(4.0767416621*i-3.3077115913*s+.2309699292*r),Od(-1.2684380046*i+2.6097574011*s-.3413193965*r),Od(-.0041960863*i-.7034186147*s+1.707614701*r)]}var Bd={plain:.26,connected:.37,unplaced:.48,searchHit:.59,selected:.7},sS=.55,rS=.1,Cg=["plain","connected","unplaced","searchHit","selected"],go=Cg.map((t,e)=>{let n=Bd[t],i=e===0?rS:Bd[Cg[e-1]];return(n-sS*(n-i))/n}),Rg=new Map;function Pg(t,e){let n=`${t}|${e}`,i=Rg.get(n);if(!i){let s=zd(t),r=Bd[e],[,a,o]=iS(s.r,s.g,s.b),l=h=>{let f=0,g=1.4;for(let v=0;v<28;v++){let m=(f+g)/2,E=kd(m,a*h,o*h).map(R=>Math.min(1,Math.max(0,R)));Tg(E[0],E[1],E[2])<r?f=m:g=m}return(f+g)/2},c=0,u=1,d=null;for(let h=0;h<22;h++){let f=(c+u)/2,g=kd(l(f),a*f,o*f);g.every(m=>m>=-.002&&m<=1.002)&&Math.abs(Tg(Math.min(1,Math.max(0,g[0])),Math.min(1,Math.max(0,g[1])),Math.min(1,Math.max(0,g[2])))-r)<.004?(d=g.map(m=>Math.min(1,Math.max(0,m))),c=f):u=f}d||(d=kd(l(0),0,0).map(f=>Math.min(1,Math.max(0,f)))),i=new Ve(d[0],d[1],d[2]),Rg.set(n,i)}return i}var aS=`
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
}`,oS=`
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
    float radial = smoothstep(CORE * 1.70 - aa, CORE * 1.70 + aa, r)
                 * (1.0 - smoothstep(CORE * 3.30 - aa, CORE * 3.30 + aa, r));
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
}`,Zc=class{mesh;geo;cap=0;iPos;iColor;iState;iSize;iSat;constructor(){this.geo=new sr;let e=new Ci(1,1);this.geo.index=e.index,this.geo.attributes.position=e.attributes.position;let n=new tn({vertexShader:aS,fragmentShader:oS,uniforms:{uViewport:{value:new Je(1920,1080)},uMinPx:{value:7},uMaxPx:{value:190},uFadeStart:{value:55},uFadeEnd:{value:300},uFadeFloor0:{value:go[0]},uFadeFloor1:{value:go[1]},uFadeFloor2:{value:go[2]},uFadeFloor3:{value:go[3]},uFadeFloor4:{value:go[4]},uTime:{value:0},uI0:{value:mo.plain},uI1:{value:mo.connected},uI2:{value:mo.unplaced},uI3:{value:mo.searchHit},uI4:{value:mo.selected}},transparent:!0,depthWrite:!1,depthTest:!0,blending:Jn});this.mesh=new hn(this.geo,n),this.mesh.frustumCulled=!1,this.mesh.renderOrder=20,this.grow(256)}get material(){return this.mesh.material}setViewport(e,n){this.material.uniforms.uViewport.value.set(e,n)}setPx(e,n){this.material.uniforms.uMinPx.value=e,this.material.uniforms.uMaxPx.value=n}setFade(e,n){this.material.uniforms.uFadeStart.value=e,this.material.uniforms.uFadeEnd.value=n}setTime(e){this.material.uniforms.uTime.value=e}grow(e){if(e<=this.cap)return;this.cap=Math.max(e,Math.ceil(this.cap*1.6));let n=i=>new ir(new Float32Array(this.cap*i),i);this.iPos=n(3),this.iColor=n(3),this.iState=n(1),this.iSize=n(1),this.iSat=n(1),this.geo.setAttribute("iPos",this.iPos),this.geo.setAttribute("iColor",this.iColor),this.geo.setAttribute("iState",this.iState),this.geo.setAttribute("iSize",this.iSize),this.geo.setAttribute("iSat",this.iSat)}build(e){this.grow(Math.max(e.length,1)),e.forEach((n,i)=>{this.iPos.setXYZ(i,n.pos.x,n.pos.y,n.pos.z),this.iColor.setXYZ(i,n.color.r,n.color.g,n.color.b),this.iState.setX(i,nS[n.state]),this.iSize.setX(i,n.size),this.iSat.setX(i,n.sat)});for(let n of[this.iPos,this.iColor,this.iState,this.iSize,this.iSat])n.needsUpdate=!0;this.geo.instanceCount=e.length}},lS=`
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
}`,cS=`
precision highp float;
varying vec3 vColor;
varying float vAlpha;
void main() { gl_FragColor = vec4(vColor, vAlpha); }`,jc=class{mesh;geo=new Tn;cap=0;pos;col;alp;rest=new Ve(eS);live=new Ve(tS);constructor(){let e=new tn({vertexShader:lS,fragmentShader:cS,uniforms:{uFadeStart:{value:55},uFadeEnd:{value:300}},transparent:!0,depthWrite:!1,depthTest:!0,blending:Jn});this.mesh=new qa(this.geo,e),this.mesh.frustumCulled=!1,this.mesh.renderOrder=10,this.grow(1024)}get material(){return this.mesh.material}setFade(e,n){this.material.uniforms.uFadeStart.value=e,this.material.uniforms.uFadeEnd.value=n}grow(e){e<=this.cap||(this.cap=Math.max(e,Math.ceil(this.cap*1.6)),this.pos=new ln(new Float32Array(this.cap*6),3),this.col=new ln(new Float32Array(this.cap*6),3),this.alp=new ln(new Float32Array(this.cap*2),1),this.geo.setAttribute("position",this.pos),this.geo.setAttribute("aColor",this.col),this.geo.setAttribute("aAlpha",this.alp))}build(e,n=.22,i=.78,s=.3){this.grow(Math.max(e.length,1)),e.forEach((r,a)=>{let o=r.live?this.live:this.rest,l=r.live?i:r.cross?s:n;this.pos.setXYZ(a*2,r.a.x,r.a.y,r.a.z),this.pos.setXYZ(a*2+1,r.b.x,r.b.y,r.b.z),this.col.setXYZ(a*2,o.r,o.g,o.b),this.col.setXYZ(a*2+1,o.r,o.g,o.b),this.alp.setX(a*2,l),this.alp.setX(a*2+1,l)}),this.pos.needsUpdate=this.col.needsUpdate=this.alp.needsUpdate=!0,this.geo.setDrawRange(0,e.length*2),this.geo.computeBoundingSphere()}},hS=`
precision highp float;
uniform vec3  uCentre;
uniform float uRadius;
uniform vec2  uViewport;
varying vec2 vQuad;
varying float vFade;
void main() {
  vec4 mv = modelViewMatrix * vec4(uCentre, 1.0);
  float dist = max(-mv.z, 1e-4);
  mv.xy += position.xy * 2.0 * uRadius;
  gl_Position = projectionMatrix * mv;
  vQuad = position.xy * 2.0;
  vFade = mix(1.0, 0.35, clamp((dist - 55.0) / 245.0, 0.0, 1.0));
}`,uS=`
precision highp float;
#define TAU 6.28318530718
varying vec2 vQuad;
varying float vFade;
void main() {
  float r = length(vQuad);
  float aa = max(fwidth(r) * 1.1, 0.004);
  float u = atan(vQuad.y, vQuad.x) / TAU + 0.5;
  float f = fract(u * 44.0);
  float dash = smoothstep(0.0, 0.10, f) * (1.0 - smoothstep(0.42, 0.52, f));
  float ring = (1.0 - smoothstep(0.006 - aa, 0.006 + aa, abs(r - 0.5))) * dash;
  if (ring < 0.004) discard;
  // Below the quietest node state. The boundary encodes real state and belongs
  // in the world, but it was measuring 0.115 against a plain node core at 0.098
  // \u2014 the largest and brightest contour in four artifacts, out-reading the
  // nodes it contains.
  gl_FragColor = vec4(vec3(0.34, 0.32, 0.29), ring * 0.55 * vFade);
}`,Jc=class{mesh;constructor(){let e=new tn({vertexShader:hS,fragmentShader:uS,uniforms:{uCentre:{value:new L},uRadius:{value:5},uViewport:{value:new Je(1920,1080)}},transparent:!0,depthWrite:!1,depthTest:!0});this.mesh=new hn(new Ci(1,1),e),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5}get material(){return this.mesh.material}set(e,n){this.material.uniforms.uCentre.value.copy(e),this.material.uniforms.uRadius.value=n*2}};var dS=t=>t.cell/t.glyph,fS=t=>(t.pad+t.glyph*.78)/t.glyph;function pS(t,e=17,n=2){let i=t.split(/\s+/),s=[],r="";for(let a of i){if(!r){r=a;continue}if((r+" "+a).length<=e)r+=" "+a;else if(s.push(r),r=a,s.length===n)break}return s.length<n&&r&&s.push(r),s.length===n&&s.join(" ").replace(/\s+/g," ")!==t.replace(/\s+/g," ")&&(s[n-1]=s[n-1].slice(0,e-1)+"\u2026"),s}var mS=`
precision highp float;
attribute vec4 aRect;      // x, y (em, baseline-relative), w, h
attribute vec4 aUV;        // u0, v0, u1, v1
attribute vec3 aAnchor;    // world position of the node the text belongs to
attribute vec3 aColor;
attribute float aNodeSize; // world radius of that node, for vertical offset
attribute float aAlpha;
attribute vec2  aOff;      // x: em offset of the block, y: +1 below / -1 above
attribute vec2  aShift;    // per-frame re-anchor, in em, from label deconfliction
uniform vec2  uViewport;
uniform float uEmWorld;    // em height in world units
uniform float uMinPx;
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
  float emPx   = clamp(uEmWorld  * pxPerWorld, uMinPx, uMaxPx);
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
}`,gS=`
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
}`,eh=class{constructor(e,n,i){this.meta=e;n.flipY=!1,n.colorSpace=pi,n.minFilter=Pi,n.magFilter=en,n.generateMipmaps=!0,n.needsUpdate=!0,this.geo=new sr;let s=new Ci(1,1);this.geo.index=s.index,this.geo.attributes.position=s.attributes.position;let r=new tn({vertexShader:mS,fragmentShader:gS,uniforms:{uAtlas:{value:n},uViewport:{value:new Je(1920,1080)},uEmWorld:{value:i.emWorld},uMinPx:{value:i.minPx},uMaxPx:{value:i.maxPx},uNodeMinPx:{value:4},uNodeMaxPx:{value:96},uFadeStart:{value:40},uFadeEnd:{value:260},uOutline:{value:new Ve("#120E0B")}},transparent:!0,depthWrite:!1,depthTest:!0,blending:Jn});this.mesh=new hn(this.geo,r),this.mesh.frustumCulled=!1,this.mesh.renderOrder=30,this.grow(4096)}meta;mesh;spans=[];geo;cap=0;aRect;aUV;aAnchor;aColor;aNodeSize;aAlpha;aOff;aShift;get material(){return this.mesh.material}drawnRect(e,n,i,s){let r=this.spans[e];if(!r)return null;let a=this.material.uniforms,o=Math.min(Math.max(a.uEmWorld.value*s,a.uMinPx.value),a.uMaxPx.value),l=this.aRect.array,c=this.aShift.array,u=this.aAlpha.array,d=this.aOff.array,h=this.aNodeSize.array,f=1/0,g=1/0,v=-1/0,m=-1/0;for(let p=0;p<r.count;p++){let E=r.start+p;if(u[E]<=.01)continue;let R=Math.min(Math.max(h[E]*s,a.uNodeMinPx.value),a.uNodeMaxPx.value),y=n+(l[E*4]+c[E*2])*o,S=y+l[E*4+2]*o,M=i-((l[E*4+1]+l[E*4+3])*o+d[E*2]*o-d[E*2+1]*R*.62+c[E*2+1]*o),C=M+l[E*4+3]*o;y<f&&(f=y),S>v&&(v=S),M<g&&(g=M),C>m&&(m=C)}return Number.isFinite(f)?{x0:f,y0:g,x1:v,y1:m}:null}emPxFor(e,n){let i=this.material.uniforms;return Math.min(Math.max(i.uEmWorld.value*n,i.uMinPx.value),i.uMaxPx.value)}setViewport(e,n){this.material.uniforms.uViewport.value.set(e,n)}setNodePx(e,n){this.material.uniforms.uNodeMinPx.value=e,this.material.uniforms.uNodeMaxPx.value=n}setSizePx(e,n){this.material.uniforms.uMinPx.value=e,this.material.uniforms.uMaxPx.value=n}setFade(e,n){this.material.uniforms.uFadeStart.value=e,this.material.uniforms.uFadeEnd.value=n}grow(e){if(e<=this.cap)return;this.cap=Math.max(e,Math.ceil(this.cap*1.6));let n=i=>new ir(new Float32Array(this.cap*i),i);this.aRect=n(4),this.aUV=n(4),this.aAnchor=n(3),this.aColor=n(3),this.aNodeSize=n(1),this.aAlpha=n(1),this.aOff=n(2),this.aShift=n(2),this.geo.setAttribute("aRect",this.aRect),this.geo.setAttribute("aUV",this.aUV),this.geo.setAttribute("aAnchor",this.aAnchor),this.geo.setAttribute("aColor",this.aColor),this.geo.setAttribute("aNodeSize",this.aNodeSize),this.geo.setAttribute("aAlpha",this.aAlpha),this.geo.setAttribute("aOff",this.aOff),this.geo.setAttribute("aShift",this.aShift)}isTruncated(e){let n=this.spans[e];return!n||n.ellipsis<0?!1:this.aAlpha.array[n.start+n.ellipsis]>.01}setRunAlphas(e,n){let i=this.aAlpha.array;for(let s=0;s<this.spans.length&&s<e.length;s++){let{start:r,count:a}=this.spans[s],o=n&&n[s]>0?Math.min(n[s],a):a,l=this.spans[s],c=o<(l.ellipsis>=0?a-1:a);for(let u=0;u<a;u++){if(u===l.ellipsis){i[r+u]=c?e[s]:0;continue}i[r+u]=u>=o?0:e[s]}}this.aAlpha.needsUpdate=!0}setRunShifts(e,n){let i=this.aShift.array;for(let s=0;s<this.spans.length&&s*2+1<e.length;s++){let r=this.spans[s],{start:a,count:o}=r;for(let l=0;l<o;l++){let c=l===r.ellipsis&&n?n[s]:0;i[(a+l)*2]=e[s*2]+c,i[(a+l)*2+1]=e[s*2+1]}}this.aShift.needsUpdate=!0}build(e,n=17,i=2){let s=this.meta,r=dS(s),a=fS(s),o=0,l=[];for(let u of e){let d=pS(u.text,u.perLine??n,i);l.push({run:u,lines:d});for(let h of d)for(let f of h)s.chars[f]&&o++;d.length===1&&o++}this.grow(Math.max(o,1)),this.aShift.array.fill(0),this.aShift.needsUpdate=!0,this.spans.length=0;let c=0;for(let{run:u,lines:d}of l){let h=c,f=0;for(let T of d){let I=0;for(let N of T)I+=s.chars[N]?.adv??0;I>f&&(f=I)}let g=!!u.above,v=g?.55+(d.length-1)*s.lineHeight+.3:-.92,m=g?-1:1,p=1/0,E=-1/0,R=1/0,y=-1/0,S=[],M=[],C=-1,_=0,w=0;if(d.forEach((T,I)=>{let N=0;for(let W of T)N+=s.chars[W]?.adv??0;let k=u.side??0,X=k===0?-N/2:k<0?-N-.55:.55,O=-I*s.lineHeight;for(let W of T){let V=s.chars[W];if(!V)continue;let $=X-s.pad/s.glyph,Q=O-(r-a);d.length===1&&(S.push(X+V.adv),W===" "&&M.push(S.length-1)),$<p&&(p=$),$+r>E&&(E=$+r),Q<R&&(R=Q),Q+r>y&&(y=Q+r),this.aRect.setXYZW(c,$,Q,r,r),this.aUV.setXYZW(c,V.u0,V.v0,V.u1,V.v1),this.aAnchor.setXYZ(c,u.anchor.x,u.anchor.y,u.anchor.z),this.aColor.setXYZ(c,u.color.r,u.color.g,u.color.b),this.aNodeSize.setX(c,u.nodeSizeWorld),this.aAlpha.setX(c,u.alpha),this.aOff.setXY(c,v,m),X+=V.adv,c++}}),d.length===1){let T=s.chars["\u2026"]??s.chars["."];if(T){let I=S.length?S[S.length-1]:0,N=I-s.pad/s.glyph,k=-(r-a);C=c-h,_=I,w=r,this.aRect.setXYZW(c,N,k,r,r),this.aUV.setXYZW(c,T.u0,T.v0,T.u1,T.v1),this.aAnchor.setXYZ(c,u.anchor.x,u.anchor.y,u.anchor.z),this.aColor.setXYZ(c,u.color.r,u.color.g,u.color.b),this.aNodeSize.setX(c,u.nodeSizeWorld),this.aAlpha.setX(c,0),this.aOff.setXY(c,v,m),c++}}Number.isFinite(p)||(p=E=R=y=0),this.spans.push({start:h,count:c-h,widthEm:f,lines:d.length,above:g,side:u.side??0,x0Em:p,x1Em:E,y0Em:v+R,y1Em:v+y,vSide:m,glyphRight:S,wordEnds:M,ellipsis:C,ellipsisLeftEm:_,ellipsisWidthEm:w})}for(let u of[this.aRect,this.aUV,this.aAnchor,this.aColor,this.aNodeSize,this.aAlpha,this.aOff])u.needsUpdate=!0;this.geo.instanceCount=c}};var ia={canvas:{nodeMinPx:15,nodeMaxPx:84,textMinPx:14,textMaxPx:24,textPerLine:22,textLines:2,fadeStart:46,fadeEnd:250,fov:52},expansion:{nodeMinPx:15,nodeMaxPx:90,textMinPx:14,textMaxPx:22,textPerLine:15,textLines:1,fadeStart:90,fadeEnd:420,fov:46},ar:{nodeMinPx:16,nodeMaxPx:96,textMinPx:13,textMaxPx:21,textPerLine:16,textLines:1,fadeStart:34,fadeEnd:190,fov:62}};function Lg(t){return .46+.34*Math.min(t,8)/8}var xS=.3,Ng=.22,Fg=new Map;function vS(t){let e=t.getHex(),n=Fg.get(e);if(n===void 0){let i=.2126*t.r+.7152*t.g+.0722*t.b,s=Math.hypot(t.r-i,t.g-i,t.b-i);n=s<1e-4?Ng:Math.min(Math.max(1-xS/s,Ng),.92),Fg.set(e,n)}return n}var th=class{constructor(e,n,i){this.canvas=e;je.enabled=!1,this.renderer=new Wc({canvas:e,antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1}),this.renderer.outputColorSpace=tr,this.renderer.setPixelRatio(1),this.renderer.setClearColor(new Ve(Ig),1),this.camera=new xn(52,16/9,.1,4e3),this.text=new eh(n,i,{emWorld:.92,minPx:12.5,maxPx:40}),this.scene.add(this.filaments.mesh,this.holding.mesh,this.nodes.mesh,this.text.mesh),this.applyLens("canvas")}canvas;scene=new Va;camera;nodes=new Zc;filaments=new jc;holding=new Jc;text;renderer;pose={target:new L,yaw:.6,pitch:.22,dist:70};lens="canvas";clock=0;doc=null;selected=null;hits=new Set;screenCache=[];runMeta=[];runAlphas=new Float32Array(0);runShifts=new Float32Array(0);runVisible=new Int32Array(0);runEllipsisDx=new Float32Array(0);dirty=!0;applyLens(e){this.lens=e;let n=ia[e];this.nodes.setPx(n.nodeMinPx,n.nodeMaxPx),this.nodes.setFade(n.fadeStart,n.fadeEnd),this.filaments.setFade(n.fadeStart,n.fadeEnd),this.text.setSizePx(n.textMinPx,n.textMaxPx),this.text.setNodePx(n.nodeMinPx,n.nodeMaxPx),this.text.setFade(n.fadeStart,n.fadeEnd),this.camera.fov=n.fov,this.camera.updateProjectionMatrix(),this.dirty=!0}setSize(e,n){this.renderer.setSize(e,n,!1),this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.nodes.setViewport(e,n),this.text.setViewport(e,n)}setDoc(e){this.doc=e,this.dirty=!0}getDoc(){return this.doc}setSelection(e){e!==this.selected&&(this.selected=e,this.dirty=!0)}setPinned(e){e!==this.pinned&&(this.pinned=e,this.dirty=!0)}getPinned(){return this.pinned}pinned=null;getSelection(){return this.selected}setHits(e){this.hits=new Set(e),this.dirty=!0}getHits(){return this.hits}markDirty(){this.dirty=!0}rebuild(){let e=this.doc;if(!e){this.nodes.build([]),this.filaments.build([]),this.text.build([]);return}let n=Sg(e,this.selected,this.hits),i=new Map;for(let h of Object.values(e.links))i.set(h.a,(i.get(h.a)??0)+1),i.set(h.b,(i.get(h.b)??0)+1);let s=Cn(e),r=[],a=[],o={selected:0,searchHit:1,unplaced:2,connected:3,plain:4};this.runMeta=[];let l=new Map,c=new Ve(Qc);for(let h of s){let f=n.get(h.id)??"plain",g=new L(h.pos[0],h.pos[1],h.pos[2]);l.set(h.id,g);let v=Lg(i.get(h.id)??0),m=Pg(h.color,f),p=vS(zd(h.color)),E=p+(1-p)*qc(e,h);r.push({pos:g,color:m,state:f,size:v,sat:E});let R=f==="searchHit"?v*1.9:v;this.runMeta.push({id:h.id,pinned:h.id===this.pinned,priority:h.id===this.pinned?-1:o[f],baseAlpha:f==="plain"?.86:1,nodeSizeWorld:R,held:!h.placed});let y=h.placed?0:h.pos[0]<e.holding.origin[0]?-1:1;a.push({anchor:g,text:h.text,color:c,nodeSizeWorld:R,side:y,alpha:f==="plain"?.86:1,above:(h.id.charCodeAt(1)&1)===1})}this.nodes.build(r);let u=ia[this.lens];this.text.build(a,28,u.textLines),this.runAlphas.length!==this.runMeta.length&&(this.runAlphas=new Float32Array(this.runMeta.length)),this.runShifts.length!==this.runMeta.length*2&&(this.runShifts=new Float32Array(this.runMeta.length*2)),this.runVisible.length!==this.runMeta.length&&(this.runVisible=new Int32Array(this.runMeta.length)),this.runEllipsisDx.length!==this.runMeta.length&&(this.runEllipsisDx=new Float32Array(this.runMeta.length));let d=[];for(let h of Mg(e)){let f=l.get(h.a),g=l.get(h.b);if(!f||!g)continue;let v=h.a===this.selected||h.b===this.selected||this.hits.has(h.a)||this.hits.has(h.b),m=e.nodes[h.a]&&e.nodes[h.b]&&e.nodes[h.a].color!==e.nodes[h.b].color;d.push({a:f,b:g,live:v,cross:m})}this.filaments.build(d),this.holdingMembers=s.filter(h=>!h.placed).map(h=>h.pos.slice()),this.fitHoldingShell(),this.screenCache=[],this.dirty=!1}applyPose(){let{target:e,yaw:n,pitch:i,dist:s}=this.pose,r=Math.cos(i);this.camera.position.set(e.x+s*r*Math.sin(n),e.y+s*Math.sin(i),e.z+s*r*Math.cos(n)),this.camera.up.set(0,1,0),this.camera.lookAt(e),this.camera.updateMatrixWorld()}holdingMembers=[];fitHoldingShell(){let e=this.doc;if(!e)return;let n=new L(...e.holding.origin),i=this.project([n.x,n.y,n.z]),s=e.holding.radius;if(i){let r=this.renderer.domElement.height*this.camera.projectionMatrix.elements[5]*.5/i.z,a=e.holding.radius*r;for(let o of this.holdingMembers){let l=this.project(o);if(!l)continue;let c=Math.hypot(l.x-i.x,l.y-i.y);c>a&&(a=c)}s=(a+ia[this.lens].nodeMinPx*1.6)/r}this.holding.set(n,s)}render(){this.dirty&&this.rebuild(),this.nodes.setTime(this.clock),this.applyPose(),this.fitHoldingShell(),this.deconflictLabels(),this.renderer.render(this.scene,this.camera),this.screenCache=[]}deconflictLabels(){if(!this.doc||!this.runMeta.length)return;let n=ia[this.lens],i=this.screenPositions();if(!i.length)return;let s=new Map(i.map(y=>[y.id,y])),r=.92,a=[[0,0],[0,-1.3],[0,1.3],[-.62,-.62],[.62,-.62],[-.62,.62],[.62,.62],[0,-2.55],[0,2.55],[-1.45,0],[1.45,0],[-1.3,-1.3],[1.3,-1.3],[-1.3,1.3],[1.3,1.3],[0,-3.8],[0,3.8],[-2.3,-2.3],[2.3,-2.3],[-2.3,2.3],[2.3,2.3],[0,-5.1],[0,5.1]],o=[],l=[];for(let y=0;y<this.runMeta.length;y++){let S=this.runMeta[y],M=s.get(S.id),C=this.text.spans[y];if(this.runShifts[y*2]=0,this.runShifts[y*2+1]=0,!M||!C){this.runAlphas[y]=0,l[y]={w:0,h:0,emPx:1,bx0:0,by0:0};continue}let _=this.renderer.domElement,w=Math.min(Math.max(S.nodeSizeWorld*M.pxPerWorld,n.nodeMinPx),n.nodeMaxPx);if(M.x-w<0||M.y-w<0||M.x+w>_.width||M.y+w>_.height){this.runAlphas[y]=0,l[y]={w:0,h:0,emPx:1,bx0:0,by0:0};continue}let T=Math.min(Math.max(r*M.pxPerWorld,n.textMinPx),n.textMaxPx),I=Math.min(Math.max(S.nodeSizeWorld*M.pxPerWorld,n.nodeMinPx),n.nodeMaxPx),N=-C.vSide*I*.62,k=M.x+C.x0Em*T,X=Math.max((C.x1Em-C.x0Em)*T,6),O=M.y-(C.y1Em*T+N),W=Math.max((C.y1Em-C.y0Em)*T,6);l[y]={w:X,h:W,emPx:T,bx0:k,by0:O},o.push({i:y,x0:k,x1:k+X,y0:O,y1:O+W,pri:S.priority,z:M.z}),this.runAlphas[y]=S.baseAlpha}o.sort((y,S)=>y.pri-S.pri||y.z-S.z);let c=[];for(let y of[5.6,8.2,11.5,15.5])for(let S=0;S<12;S++){let M=S/12*Math.PI*2;c.push([y*Math.cos(M)*1.9,y*Math.sin(M)])}let u=0,d=.16;this.labelRects.clear(),this.labelNeedsLeader.clear(),this.lastScreen.clear();for(let y of i)this.lastScreen.set(y.id,{x:y.x,y:y.y,pxPerWorld:y.pxPerWorld});let h=[],f=[],g=i.map(y=>({id:y.id,x0:y.x-y.r,x1:y.x+y.r,y0:y.y-y.r,y1:y.y+y.r})),v=this.renderer.domElement.width/Math.max(window.innerWidth,1);for(let y of["#editor","#finder","#states","#hands","#top","#unlabelled","#hitbreak","#pinmark"]){let S=document.querySelector(y);if(!S)continue;let M=S.getBoundingClientRect();M.width<2||M.height<2||h.push({i:-1,x0:M.left*v,y0:M.top*v,x1:M.right*v,y1:M.bottom*v,pri:-1,z:-1})}let m=(y,S,M,C,_,w)=>{let T=0;for(let I of g){if(I.id===y)continue;let N=Math.min(C,I.x1)-Math.max(S,I.x0);if(N<=0)continue;let k=Math.min(_,I.y1)-Math.max(M,I.y0);if(!(k<=0)&&(T+=N*k,T>=w))break}return Math.min(T/w,1)},p=(y,S,M,C,_)=>{let w=0;for(let T of f){let I=Math.min(M,T.x1)-Math.max(y,T.x0);if(I<=0)continue;let N=Math.min(C,T.y1)-Math.max(S,T.y0);if(!(N<=0)&&(w+=I*N,w>=_))break}return Math.min(w/_,1)},E=this.renderer.domElement.width,R=this.renderer.domElement.height;f.push(...h);for(let y of o){let S=l[y.i],M=s.get(this.runMeta[y.i].id),C=this.text.spans[y.i],_=C.glyphRight,w=[{w:S.w,vis:0}];if(this.runMeta[y.i].pinned){this.runAlphas[y.i]=0,this.labelRects.set(this.runMeta[y.i].id,{x0:0,y0:0,x1:0,y1:0,alpha:0});continue}if(!(this.runMeta[y.i].priority<=0)){if(C.ellipsis>=0&&C.wordEnds.length){let W=C.ellipsisWidthEm*S.emPx;for(let V=C.wordEnds.length-1;V>=0;V--){let $=C.wordEnds[V];if(!($<3||$>=_.length)&&(w.push({w:Math.max((_[$-1]-C.x0Em)*S.emPx+W,6),vis:$}),w.length>=4))break}}}let T={frac:1,score:99,dx:0,dy:0,w:S.w,vis:0,fits:!1,far:!1};for(let W of[0,1]){if(W===1&&T.fits&&T.frac<=u)break;let V=W===0?a:c;for(let $ of w){let Q=Math.max($.w*S.h,1),re=$.vis?.55:0;for(let[se,ve]of V){let rt=se*S.emPx,Ct=ve*S.emPx,Ge=S.bx0+rt,K=S.by0+Ct,ne=8;if(Ge<ne||K<ne||Ge+$.w>E-ne||K+S.h>R-ne)continue;let ee=2.6*S.emPx;{let Ze=Ge,St=K,Lt=Ge+$.w,qt=K+S.h,Qt=Math.min(Math.max(M?M.x:Ze,Ze),Lt),It=Math.min(Math.max(M?M.y:St,St),qt);if(M&&Math.hypot(M.x-Qt,M.y-It)>ee)continue}if(M){let Ze=M.r+4,St=Math.min(Math.max(M.x,Ge),Ge+$.w),Lt=Math.min(Math.max(M.y,K),K+S.h);if(Math.hypot(M.x-St,M.y-Lt)<Ze)continue}let ke=m(this.runMeta[y.i].id,Ge,K,Ge+$.w,K+S.h,Q),Be=.22*S.emPx,Fe=.11*S.emPx,Rt=Math.min(1,p(Ge-Be,K-Fe,Ge+$.w+Be,K+S.h+Fe,Q)+ke),Ke=Math.hypot(se,ve)/3.8*(this.runMeta[y.i].held?5:1),ut=1e3*Rt+re+.22*Ke,nt=se===0&&ve===0&&!$.vis;(ut<T.score-(nt?0:.06)||nt&&ut<=T.score)&&(T={frac:Rt,score:ut,dx:se,dy:ve,w:$.w,vis:$.vis,fits:!0,far:W===1})}if(T.frac<=0&&!T.vis)break}}this.runVisible[y.i]=T.vis,this.runEllipsisDx[y.i]=T.vis?C.glyphRight[T.vis-1]-C.ellipsisLeftEm:0,this.runShifts[y.i*2]=T.dx,this.runShifts[y.i*2+1]=-T.dy;let I={x0:S.bx0+T.dx*S.emPx,y0:S.by0+T.dy*S.emPx},N=Math.max(0,1-(T.frac-u)/(d-u)),k=!T.fits||T.frac>u?0:1;k>.02&&T.far&&this.labelNeedsLeader.add(this.runMeta[y.i].id);let X=.26,O=this.runMeta[y.i].baseAlpha*k;this.runAlphas[y.i]=O>=X?O:0,this.runAlphas[y.i]>.02&&f.push({i:y.i,x0:I.x0,y0:I.y0,x1:I.x0+T.w,y1:I.y0+S.h,pri:y.pri,z:y.z}),this.labelRects.set(this.runMeta[y.i].id,{x0:I.x0,y0:I.y0,x1:I.x0+T.w,y1:I.y0+S.h,alpha:this.runAlphas[y.i]})}this.text.setRunAlphas(this.runAlphas,this.runVisible),this.text.setRunShifts(this.runShifts,this.runEllipsisDx),this.suppressed=0,this.suppressedIds.length=0,this.shortened=0,this.shortenedIds.length=0;for(let y=0;y<this.runMeta.length;y++){let S=this.runMeta[y],M=this.labelRects.get(S.id);if(M&&M.alpha>.02){this.text.isTruncated(y)&&(this.shortened++,this.shortenedIds.push(S.id));continue}if(S.pinned)continue;let C=s.get(S.id);C&&C.x>=0&&C.y>=0&&C.x<=E&&C.y<=R&&(this.suppressed++,this.suppressedIds.push(S.id))}}shortened=0;shortenedIds=[];suppressed=0;suppressedIds=[];labelRects=new Map;lastScreen=new Map;labelNeedsLeader=new Set;labelDrawAudit(){let e=this.renderer.domElement,n=0,i=null,s=0,r=0,a=null,o=0,l=null,c=[],u=0,d=0,h=[],f=[],g=[],v=this.lastScreen,m=new Map(this.screenPositions().map(M=>[M.id,M]));for(let M=0;M<this.runMeta.length;M++){let C=this.runMeta[M],_=this.labelRects.get(C.id),w=this.lastScreen.get(C.id);if(!_||!w||_.alpha<=.02)continue;let T=this.text.drawnRect(M,w.x,w.y,w.pxPerWorld);if(!T)continue;s++;let I=Math.max(_.x0-T.x0,T.x1-_.x1,_.y0-T.y0,T.y1-_.y1);I>n&&(n=I,i=C.id);let N=Math.max(-T.x0,T.x1-e.width,-T.y0,T.y1-e.height);N>r&&(r=N,a=C.id),h.push({id:C.id,...T}),this.text.isTruncated(M)&&g.push(C.id);let k=v.get(C.id);if(k){let O=Math.min(Math.max(k.x,T.x0),T.x1),W=Math.min(Math.max(k.y,T.y0),T.y1),V=Math.hypot(k.x-O,k.y-W);V>o&&(o=V,l=C.id);let $=Math.min(Math.max(k.x,_.x0),_.x1),Q=Math.min(Math.max(k.y,_.y0),_.y1),re=Math.hypot(k.x-$,k.y-Q);re>u&&(u=re),V>40&&c.push(C.id);let se=this.text.emPxFor(M,w.pxPerWorld);se>0&&V/se>d&&(d=V/se)}let X=m.get(C.id);X&&f.push({id:C.id,x:Number(X.x.toFixed(2)),y:Number(X.y.toFixed(2)),r:Number(X.r.toFixed(2)),x0:Number(T.x0.toFixed(2)),y0:Number(T.y0.toFixed(2)),x1:Number(T.x1.toFixed(2)),y1:Number(T.y1.toFixed(2))})}let p=0,E=0,R=null,y=1/0,S=null;for(let M=0;M<h.length;M++)for(let C=M+1;C<h.length;C++){let _=h[M],w=h[C],T=Math.min(_.x1,w.x1)-Math.max(_.x0,w.x0),I=Math.min(_.y1,w.y1)-Math.max(_.y0,w.y0);if(T>0&&I>0){p++,T*I>E&&(E=T*I,R=[_.id,w.id]),0<y&&(y=0,S=[_.id,w.id]);continue}let N=Math.hypot(Math.max(0,-T),Math.max(0,-I));N<y&&(y=N,S=[_.id,w.id])}return{checked:s,worstGapPx:Number(n.toFixed(2)),worst:i,worstOffFramePx:Number(r.toFixed(2)),worstOffFrame:a,overlappingPairs:p,worstPairOverlapPx:Number(E.toFixed(1)),worstPair:R,tightestPairGapPx:Number.isFinite(y)?Number(y.toFixed(2)):null,tightestPair:S,truncated:g.length,truncatedIds:g,anchors:f,worstDisplacementPx:Number(o.toFixed(1)),worstDisplacement:l,farFromNode:c.length,farFromNodeIds:c.slice(0,40),worstReservedDisplacementPx:Number(u.toFixed(1)),worstDisplacementEm:Number(d.toFixed(2))}}project(e){let n=this.renderer.domElement,i=new L(e[0],e[1],e[2]).applyMatrix4(this.camera.matrixWorldInverse),s=-i.z;return s<=.05?null:(i.applyMatrix4(this.camera.projectionMatrix),{x:(i.x*.5+.5)*n.width,y:(1-(i.y*.5+.5))*n.height,z:s})}screenPositions(){if(this.screenCache.length)return this.screenCache;let e=this.doc;if(!e)return[];let n=this.renderer.domElement,i=n.width,s=n.height,r=ia[this.lens],a=new Map;for(let u of Object.values(e.links))a.set(u.a,(a.get(u.a)??0)+1),a.set(u.b,(a.get(u.b)??0)+1);let o=new L,l=[],c=this.camera.projectionMatrix.elements[5];for(let u of Cn(e)){o.set(u.pos[0],u.pos[1],u.pos[2]).applyMatrix4(this.camera.matrixWorldInverse);let d=-o.z;if(d<=.05)continue;let h=s*c*.5/d,f=Math.min(Math.max(Lg(a.get(u.id)??0)*h,r.nodeMinPx),r.nodeMaxPx);o.applyMatrix4(this.camera.projectionMatrix),l.push({id:u.id,x:(o.x*.5+.5)*i,y:(1-(o.y*.5+.5))*s,r:f*.6,z:d,pxPerWorld:h})}return this.screenCache=l,l}contentBoundsX(){let e=ia[this.lens],n=1/0,i=-1/0,s=new Map(this.screenPositions().map(r=>[r.id,r]));for(let r=0;r<this.runMeta.length;r++){let a=s.get(this.runMeta[r].id),o=this.text.spans[r];if(!a)continue;let l=Math.min(Math.max(.92*a.pxPerWorld,e.textMinPx),e.textMaxPx),c=Math.max(o?o.widthEm*l/2:0,a.r);n=Math.min(n,a.x-c),i=Math.max(i,a.x+c)}return{lo:n,hi:i}}pick(e,n,i=10){let s=null,r=1/0,a=1/0;for(let o of this.screenPositions()){let l=Math.hypot(o.x-e,o.y-n),c=Math.max(o.r,6)+i;l<=c&&(o.z<a-.001||Math.abs(o.z-a)<.001&&l<r)&&(s=o.id,r=l,a=o.z)}return s}screenToWorld(e,n,i){let s=this.renderer.domElement,r=new L(e/s.width*2-1,-(n/s.height)*2+1,.5);r.unproject(this.camera);let a=r.sub(this.camera.position).normalize(),o=new L;this.camera.getWorldDirection(o);let l=a.dot(o),c=l===0?0:i.clone().sub(this.camera.position).dot(o)/l;return this.camera.position.clone().add(a.multiplyScalar(c))}boundsOf(e=this.doc?Cn(this.doc):[]){if(!e.length)return{centre:new L,radius:10};let n=new L(1/0,1/0,1/0),i=new L(-1/0,-1/0,-1/0);for(let r of e)n.min(new L(...r.pos)),i.max(new L(...r.pos));return{centre:n.clone().add(i).multiplyScalar(.5),radius:Math.max(i.distanceTo(n)*.5,4)}}fitDistance(e,n=1.18){let i=this.camera.fov*Math.PI/180,s=2*Math.atan(Math.tan(i/2)*this.camera.aspect);return e*n/Math.tan(Math.min(i,s)/2)}fitAll(e=this.doc?Cn(this.doc):[],n=1.04,i={},s=!0){if(!e.length)return{target:new L,dist:60};let r=e.map(T=>[T.pos[0],T.pos[1],T.pos[2]]),a=s?this.doc?.holding:null;if(a){let[T,I,N]=a.origin,k=a.radius;for(let[X,O,W]of[[k,0,0],[-k,0,0],[0,k,0],[0,-k,0],[0,0,k],[0,0,-k]])r.push([T+X,I+O,N+W])}let o=new L(1/0,1/0,1/0),l=new L(-1/0,-1/0,-1/0);for(let T of r)o.min(new L(...T)),l.max(new L(...T));let c=o.clone().add(l).multiplyScalar(.5),u=this.camera.fov*Math.PI/180,d=Math.tan(u/2),h=d*this.camera.aspect,{yaw:f,pitch:g}=this.pose,v=Math.cos(g),m=new L(v*Math.sin(f),Math.sin(g),v*Math.cos(f)).normalize(),p=new L(0,1,0),E=new L().crossVectors(p,m).normalize(),R=new L().crossVectors(m,E).normalize(),y=Math.max(1-2*(i.top??0),.2),S=Math.max(1-2*(i.bottom??0),.2),M=Math.max(1-2*(i.left??0),.2),C=Math.max(1-2*(i.right??0),.2),_=0,w=new L;for(let T of r){w.set(T[0],T[1],T[2]).sub(c);let I=w.dot(E),N=w.dot(R),k=w.dot(m);_=Math.max(_,k+Math.abs(I)/(h*(I>=0?C:M)),k+Math.abs(N)/(d*(N>=0?y:S)))}return{target:c,dist:Math.max(_*n,6)}}};var cr=(t,e,n)=>Math.min(Math.max(t,e),n),_S=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,nh=class{constructor(e,n,i){this.scene=e;this.store=n;this.hooks=i}scene;store;hooks;dragging=null;dragPlane=new L;dragCluster=null;dragLast=new L;downAt={x:0,y:0,t:0};lpFired=!1;dragMoved=!1;lastTapId=null;lastTapT=0;linkFrom=null;orbiting=!1;pinchDist=0;lp=null;now=()=>performance.now();longPressMs=500;fly=null;minDist=4;maxDist=900;gyroDriven=!1;gyroBase=null;get linkArmed(){return this.linkFrom}tickTimers(e=this.now()){if(this.lp&&e-this.lp.at>=this.longPressMs){let{x:n,y:i}=this.lp;this.lp=null,this.orbiting=!1,this.lpFired=!0,this.hooks.onGestureFired("longpress","Quick-add into holding"),this.hooks.onQuickAdd({x:n,y:i})}}clearLink(){this.linkFrom=null}orbit(e,n){let i=-e*.0055,s=n*.0045;this.scene.pose.yaw+=i,this.scene.pose.pitch=cr(this.scene.pose.pitch+s,-1.45,1.45),this.gyroBase&&(this.gyroBase.yaw+=i,this.gyroBase.pitch=cr(this.gyroBase.pitch+s,-1.45,1.45))}zoom(e){this.scene.pose.dist=cr(this.scene.pose.dist*e,this.minDist,this.maxDist)}panTarget(e,n){let i=this.scene.pose,s=Math.cos(i.pitch),r=new L(s*Math.sin(i.yaw),Math.sin(i.pitch),s*Math.cos(i.yaw)),a=new L().crossVectors(new L(0,1,0),r).normalize(),o=new L().crossVectors(r,a).normalize(),l=this.scene.renderer.domElement,c=this.scene.camera.projectionMatrix.elements[5],u=l.height*c*.5/Math.max(i.dist,1e-4),d=1/Math.max(u,1e-6);i.target.addScaledVector(a,-e*d).addScaledVector(o,n*d)}flyTo(e,n=1300,i=13){let s=this.store.node(e);if(!s)return;let r=this.scene.pose;this.fly={from:{t:r.target.clone(),yaw:r.yaw,pitch:r.pitch,d:r.dist},to:{t:new L(s.pos[0],s.pos[1],s.pos[2]),yaw:r.yaw+.34,pitch:cr(r.pitch*.55+.08,-.6,.6),d:i},t0:this.now(),ms:n}}get flying(){return this.fly!==null}tickFly(e=this.now()){if(!this.fly)return!1;let n=this.fly,i=_S(cr((e-n.t0)/n.ms,0,1)),s=this.scene.pose;return s.target.lerpVectors(n.from.t,n.to.t,i),s.yaw=n.from.yaw+(n.to.yaw-n.from.yaw)*i,s.pitch=n.from.pitch+(n.to.pitch-n.from.pitch)*i,s.dist=n.from.d+(n.to.d-n.from.d)*i,i>=1?(this.fly=null,!1):!0}applyOrientation(e,n,i){let s=-(e*Math.PI)/180,r=cr((n-90)*Math.PI/180,-1.2,1.2);this.gyroBase||(this.gyroBase={yaw:this.scene.pose.yaw-s,pitch:this.scene.pose.pitch-r}),this.scene.pose.yaw=this.gyroBase.yaw+s,this.scene.pose.pitch=cr(this.gyroBase.pitch+r,-1.35,1.35)}resetGyroBase(){this.gyroBase=null}lastClusterMove=null;clusterStart=null;snapshotCluster(e){let n=e.map(s=>this.store.doc.nodes[s]).filter(Boolean);if(!n.length)return null;let i=[0,0,0];for(let s of n)i[0]+=s.pos[0],i[1]+=s.pos[1],i[2]+=s.pos[2];return i[0]/=n.length,i[1]/=n.length,i[2]/=n.length,{ids:n.map(s=>s.id),centroid:i,offsets:n.map(s=>[s.pos[0]-i[0],s.pos[1]-i[1],s.pos[2]-i[2]])}}beginDrag(e,n){let i=this.store.node(e);if(i)if(this.dragging=e,this.dragMoved=!1,this.dragPlane.set(i.pos[0],i.pos[1],i.pos[2]),this.dragLast.copy(this.dragPlane),n){let s=i.label;this.dragCluster=Object.values(this.store.doc.nodes).filter(r=>r.placed&&r.label===s).map(r=>r.id),this.clusterStart=this.snapshotCluster(this.dragCluster)}else this.dragCluster=null,this.clusterStart=null}moveDrag(e,n){if(!this.dragging)return;let i=this.scene.screenToWorld(e,n,this.dragPlane);if(this.dragCluster){let s=[i.x-this.dragLast.x,i.y-this.dragLast.y,i.z-this.dragLast.z];this.store.moveCluster(this.dragCluster,s),this.dragLast.copy(i)}else{let s=[i.x,i.y,i.z];this.store.move(this.dragging,s)}this.scene.markDirty()}endDrag(){if(this.dragging&&this.dragMoved&&!this.dragCluster){let e=this.store.node(this.dragging);e&&!e.placed&&this.store.place(this.dragging,[e.pos[0],e.pos[1],e.pos[2]])}if(this.dragging&&this.hooks.onDragEnd?.(),this.dragCluster&&this.clusterStart&&this.dragMoved){let e=this.snapshotCluster(this.clusterStart.ids),n=this.store.node(this.clusterStart.ids[0]);if(e&&n){let i=0;for(let s=0;s<e.offsets.length;s++){let r=this.clusterStart.offsets[s],a=e.offsets[s];i=Math.max(i,Math.hypot(a[0]-r[0],a[1]-r[1],a[2]-r[2]))}this.lastClusterMove={label:n.label||"(unlabelled)",members:e.ids.length,travelled:Math.hypot(e.centroid[0]-this.clusterStart.centroid[0],e.centroid[1]-this.clusterStart.centroid[1],e.centroid[2]-this.clusterStart.centroid[2]),drift:i}}}this.dragging=null,this.dragCluster=null,this.clusterStart=null}clusterOf(e){let n=this.store.node(e);return n?Object.values(this.store.doc.nodes).filter(i=>i.placed&&i.label===n.label).map(i=>i.id):[]}attachMouse(e){e.addEventListener("mousedown",i=>{let[s,r]=this.toCanvas(e,i.clientX,i.clientY);this.downAt={x:s,y:r,t:this.now()};let a=this.scene.pick(s,r);a&&i.button===0?(this.beginDrag(a,i.altKey),this.hooks.onGestureFired(i.altKey?"mouse-alt-drag":"mouse-drag",i.altKey?"Grab cluster":"Move node")):i.button===0&&(this.orbiting=!0)}),e.addEventListener("mousemove",i=>{let[s,r]=this.toCanvas(e,i.clientX,i.clientY);if(this.dragging){if(!this.dragMoved&&Math.hypot(s-this.downAt.x,r-this.downAt.y)<=4)return;this.dragMoved=!0,this.moveDrag(s,r)}else this.orbiting&&this.orbit(i.movementX,i.movementY)});let n=i=>{let[s,r]=this.toCanvas(e,i.clientX,i.clientY);if(Math.hypot(s-this.downAt.x,r-this.downAt.y)<5&&!this.dragCluster){let o=this.scene.pick(s,r);this.linkFrom&&o&&o!==this.linkFrom&&(this.store.connect(this.linkFrom,o),this.hooks.onGestureFired("mouse-click","Connect"),this.linkFrom=null),this.hooks.onSelect(o)}this.endDrag(),this.orbiting=!1};e.addEventListener("mouseup",n),e.addEventListener("mouseleave",()=>{this.endDrag(),this.orbiting=!1}),e.addEventListener("wheel",i=>{i.preventDefault(),this.zoom(i.deltaY>0?1.12:1/1.12),this.hooks.onGestureFired(i.deltaY>0?"mouse-scroll-down":"mouse-scroll-up",i.deltaY>0?"Pull back":"Move closer")},{passive:!1}),e.addEventListener("contextmenu",i=>i.preventDefault())}armLink(e){this.linkFrom=e}attachTouch(e){let n=()=>{this.lp=null};e.addEventListener("touchstart",i=>{if(i.preventDefault(),i.touches.length===2){n(),this.endDrag(),this.orbiting=!1,this.pinchDist=this.touchSpan(i.touches);return}let s=i.touches[0],[r,a]=this.toCanvas(e,s.clientX,s.clientY);this.downAt={x:r,y:a,t:this.now()};let o=this.scene.pick(r,a);o?this.beginDrag(o,!1):(this.orbiting=!0,this.lp={x:r,y:a,at:this.now()})},{passive:!1}),e.addEventListener("touchmove",i=>{if(i.preventDefault(),i.touches.length===2){let l=this.touchSpan(i.touches);this.pinchDist>0&&(this.zoom(this.pinchDist/l),this.hooks.onGestureFired("pinch",l>this.pinchDist?"Zoom in":"Zoom out")),this.pinchDist=l;return}let s=i.touches[0],[r,a]=this.toCanvas(e,s.clientX,s.clientY),o=this.lp?Math.hypot(r-this.lp.x,a-this.lp.y)>8:Math.hypot(r-this.downAt.x,a-this.downAt.y)>8;if(o&&n(),this.dragging){if(!o&&!this.dragMoved)return;this.dragMoved=!0,this.moveDrag(r,a),this.hooks.onGestureFired("dragnode","Place / move")}else this.orbiting&&(this.orbit(r-this.downAt.x,a-this.downAt.y),this.downAt.x=r,this.downAt.y=a,this.hooks.onGestureFired("dragempty",this.gyroBase?"Re-aim the vantage":"Orbit the map"))},{passive:!1}),e.addEventListener("touchend",i=>{i.preventDefault(),n();let s=this.dragMoved||this.lpFired;this.lpFired=!1;let r=this.now(),a=i.changedTouches[0],[o,l]=this.toCanvas(e,a.clientX,a.clientY),c=Math.hypot(o-this.downAt.x,l-this.downAt.y)<12,u=this.scene.pick(o,l);c&&!s&&(u!==null&&this.lastTapId!==null&&r-this.lastTapT<420&&u?(this.lastTapId===u?(this.linkFrom=u,this.hooks.onGestureFired("doubletap","Link armed")):(this.store.connect(this.lastTapId,u),this.hooks.onGestureFired("doubletap","Connect"),this.linkFrom=null),this.lastTapId=null,this.lastTapT=0):(this.linkFrom&&u&&u!==this.linkFrom?(this.store.connect(this.linkFrom,u),this.hooks.onGestureFired("doubletap","Connect"),this.linkFrom=null):this.hooks.onGestureFired("tap",u?"Select and inspect":"Deselect"),this.hooks.onSelect(u),this.lastTapId=u,this.lastTapT=r)),this.endDrag(),this.orbiting=!1,this.pinchDist=0},{passive:!1})}touchSpan(e){return Math.hypot(e[0].clientX-e[1].clientX,e[0].clientY-e[1].clientY)}toCanvas(e,n,i){let s=e.getBoundingClientRect(),r=this.scene.renderer.domElement;return[(n-s.left)/s.width*r.width,(i-s.top)/s.height*r.height]}};var _r=typeof self<"u"?self:{};function nx(t,e){e:{for(var n=["CLOSURE_FLAGS"],i=_r,s=0;s<n.length;s++)if((i=i[n[s]])==null){n=null;break e}n=i}return(t=n&&n[t])!=null?t:e}function At(t,e){t=t.split(".");for(var n,i=_r;t.length&&(n=t.shift());)t.length||e===void 0?i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}:i[n]=e}function hr(){throw Error("Invalid UTF8")}function Dg(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}var Vd,yS,ih=void 0,bS=typeof TextDecoder<"u",MS=typeof TextEncoder<"u";function ix(t){if(MS)t=(yS||=new TextEncoder).encode(t);else{let n=0,i=new Uint8Array(3*t.length);for(let s=0;s<t.length;s++){var e=t.charCodeAt(s);if(e<128)i[n++]=e;else{if(e<2048)i[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&s<t.length){let r=t.charCodeAt(++s);if(r>=56320&&r<=57343){e=1024*(e-55296)+r-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}s--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}function sx(t){_r.setTimeout(()=>{throw t},0)}var SS=nx(610401301,!1),Ug=nx(748402147,!0);function Og(){var t=_r.navigator;return t&&(t=t.userAgent)?t:""}var jd,kg=_r.navigator;function Dh(t){return Dh[" "](t),t}jd=kg&&kg.userAgentData||null,Dh[" "]=function(){};var rx={},bo=null;function wS(t){var e=t.length,n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);var i=new Uint8Array(n),s=0;return(function(r,a){function o(c){for(;l<r.length;){let u=r.charAt(l++),d=bo[u];if(d!=null)return d;if(!/^[\s\xa0]*$/.test(u))throw Error("Unknown base64 encoding at char: "+u)}return c}ax();for(var l=0;;){let c=o(-1),u=o(0),d=o(64),h=o(64);if(h===64&&c===-1)break;a(c<<2|u>>4),d!=64&&(a(u<<4&240|d>>2),h!=64&&a(d<<6&192|h))}})(t,function(r){i[s++]=r}),s!==n?i.subarray(0,s):i}function ax(){if(!bo){bo={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){let i=t.concat(e[n].split(""));rx[n]=i;for(let s=0;s<i.length;s++){let r=i[s];bo[r]===void 0&&(bo[r]=s)}}}}var ES=typeof Uint8Array<"u",ox=!(!(SS&&jd&&jd.brands.length>0)&&(Og().indexOf("Trident")!=-1||Og().indexOf("MSIE")!=-1))&&typeof btoa=="function",Bg=/[-_.]/g,AS={"-":"+",_:"/",".":"="};function TS(t){return AS[t]||""}function lx(t){if(!ox)return wS(t);t=Bg.test(t)?t.replace(Bg,TS):t,t=atob(t);var e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function wf(t){return ES&&t!=null&&t instanceof Uint8Array}var ca={};function yr(){return CS||=new ki(null,ca)}function Ef(t){cx(ca);var e=t.g;return(e=e==null||wf(e)?e:typeof e=="string"?lx(e):null)==null?e:t.g=e}var CS,ki=class{h(){return new Uint8Array(Ef(this)||0)}constructor(t,e){if(cx(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};function cx(t){if(t!==ca)throw Error("illegal external caller")}function hx(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}var RS=void 0;function Ao(t){return hx(t=Error(t),"warning"),t}function ha(t,e){if(t!=null){var n=RS??={},i=n[t]||0;i>=e||(n[t]=i+1,hx(t=Error(),"incident"),sx(t))}}function Mr(){return typeof BigInt=="function"}var ya=typeof Symbol=="function"&&typeof Symbol()=="symbol";function Gi(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var Hs,IS=Gi("jas",void 0,!0),zg=Gi(void 0,"0di"),xo=Gi(void 0,"1oa"),Xn=Gi(void 0,Symbol()),PS=Gi(void 0,"0ub"),LS=Gi(void 0,"0ubs"),Jd=Gi(void 0,"0ubsb"),NS=Gi(void 0,"0actk"),ua=Gi("m_m","kb",!0),Vg=Gi(),ux={Va:{value:0,configurable:!0,writable:!0,enumerable:!1}},dx=Object.defineProperties,Me=ya?IS:"Va",Hg=[];function Lo(t,e){ya||Me in t||dx(t,ux),t[Me]|=e}function Jt(t,e){ya||Me in t||dx(t,ux),t[Me]=e}function No(t){return Lo(t,34),t}function To(t){return Lo(t,8192),t}Jt(Hg,7),Hs=Object.freeze(Hg);var da={};function Fn(t,e){return e===void 0?t.h!==br&&!!(2&t.A[Me]):!!(2&e)&&t.h!==br}var br={};function Uh(t,e){if(t!=null){if(typeof t=="string")t=t?new ki(t,ca):yr();else if(t.constructor!==ki)if(wf(t))t=t.length?new ki(new Uint8Array(t),ca):yr();else{if(!e)throw Error();t=void 0}}return t}var xh=class{constructor(e,n,i){this.g=e,this.h=n,this.j=i}next(){var e=this.g.next();return e.done||(e.value=this.h.call(this.j,e.value)),e}[Symbol.iterator](){return this}},FS=Object.freeze({});function fx(t,e,n){var i,s=128&e?0:-1,r=t.length;(i=!!r)&&(i=(i=t[r-1])!=null&&typeof i=="object"&&i.constructor===Object);var a=r+(i?-1:0);for(e=128&e?1:0;e<a;e++)n(e-s,t[e]);if(i){t=t[r-1];for(let o in t)!isNaN(o)&&n(+o,t[o])}}var px={};function ba(t){return 128&t?px:void 0}function Oh(t){return t.ib=!0,t}var DS=Oh(t=>typeof t=="number"),Gg=Oh(t=>typeof t=="string"),US=Oh(t=>typeof t=="boolean"),kh=typeof _r.BigInt=="function"&&typeof _r.BigInt(0)=="bigint";function jt(t){var e=t;if(Gg(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(DS(e)&&!Number.isSafeInteger(e))throw Error(String(e));return kh?BigInt(t):t=US(t)?t?"1":"0":Gg(t)?t.trim()||"0":String(t)}var Qd=Oh(t=>kh?t>=kS&&t<=zS:t[0]==="-"?Wg(t,OS):Wg(t,BS)),OS=Number.MIN_SAFE_INTEGER.toString(),kS=kh?BigInt(Number.MIN_SAFE_INTEGER):void 0,BS=Number.MAX_SAFE_INTEGER.toString(),zS=kh?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Wg(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){let i=t[n],s=e[n];if(i>s)return!1;if(i<s)return!0}}var mx,VS=typeof Uint8Array.prototype.slice=="function",ot=0,gt=0;function ef(t){var e=t>>>0;ot=e,gt=(t-e)/4294967296>>>0}function Sr(t){if(t<0){ef(-t);let[e,n]=Cf(ot,gt);ot=e>>>0,gt=n>>>0}else ef(t)}function Af(t){var e=mx||=new DataView(new ArrayBuffer(8));e.setFloat32(0,+t,!0),gt=0,ot=e.getUint32(0,!0)}function gx(t,e){var n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:fa(t,e)}function HS(t,e){return jt(Mr()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(t>>>0)):fa(t,e))}function xx(t,e){return Mr()?jt(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(t)))):jt(Tf(t,e))}function fa(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else Mr()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+Xg(n)+Xg(t));return n}function Xg(t){return t=String(t),"0000000".slice(t.length)+t}function Tf(t,e){if(2147483648&e)if(Mr())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{let[n,i]=Cf(t,e);t="-"+fa(n,i)}else t=fa(t,e);return t}function Fo(t){if(t.length<16)Sr(Number(t));else if(Mr())t=BigInt(t),ot=Number(t&BigInt(4294967295))>>>0,gt=Number(t>>BigInt(32)&BigInt(4294967295));else{let e=+(t[0]==="-");gt=ot=0;let n=t.length;for(let i=e,s=(n-e)%6+e;s<=n;i=s,s+=6){let r=Number(t.slice(i,s));gt*=1e6,(ot=1e6*ot+r)>=4294967296&&(gt+=Math.trunc(ot/4294967296),gt>>>=0,ot>>>=0)}if(e){let[i,s]=Cf(ot,gt);ot=i,gt=s}}}function Cf(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function si(t){return Array.prototype.slice.call(t)}var mr=typeof BigInt=="function"?BigInt.asIntN:void 0,tf=typeof BigInt=="function"?BigInt.asUintN:void 0,Bi=Number.isSafeInteger,Do=Number.isFinite,zs=Math.trunc,GS=jt(0);function vx(t){if(typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);return t}function mi(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function vh(t){if(typeof t!="boolean"){var e=typeof t;throw Error(`Expected boolean but got ${e!="object"?e:t?Array.isArray(t)?"array":e:"null"}: ${t}`)}return t}var WS=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Ma(t){switch(typeof t){case"bigint":return!0;case"number":return Do(t);case"string":return WS.test(t);default:return!1}}function rs(t){if(t!=null){if(!Do(t))throw Ao("enum");t|=0}return t}function wr(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Do(t)?0|t:void 0}function _x(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Do(t)?t>>>0:void 0}function yx(t,e){if(e??=1024,!Ma(t))throw Ao("int64");var n=typeof t;switch(e){case 512:switch(n){case"string":return _h(t);case"bigint":return String(mr(64,t));default:return wx(t)}case 1024:switch(n){case"string":return Ex(t);case"bigint":return jt(mr(64,t));default:return Ax(t)}case 0:switch(n){case"string":return _h(t);case"bigint":return jt(mr(64,t));default:return Bh(t)}default:return(function(i,s=`unexpected value ${i}!`){throw Error(s)})(e,"Unknown format requested type for int64")}}function bx(t){var e=t.length;return(t[0]==="-"?e<20||e===20&&t<="-9223372036854775808":e<19||e===19&&t<="9223372036854775807")?t:(Fo(t),Tf(ot,gt))}function Mx(t){if(t[0]==="-")var e=!1;else e=(e=t.length)<20||e===20&&t<="18446744073709551615";return e?t:(Fo(t),fa(ot,gt))}function Bh(t){if(t=zs(t),!Bi(t)){Sr(t);var e=ot,n=gt;(t=2147483648&n)&&(n=~n>>>0,(e=1+~e>>>0)==0&&(n=n+1>>>0)),t=typeof(e=gx(e,n))=="number"?t?-e:e:t?"-"+e:e}return t}function Sx(t){return(t=zs(t))>=0&&Bi(t)||(Sr(t),t=gx(ot,gt)),t}function wx(t){return t=zs(t),Bi(t)?t=String(t):(Sr(t),t=Tf(ot,gt)),t}function _h(t){var e=zs(Number(t));return Bi(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),bx(t))}function Ex(t){var e=zs(Number(t));return Bi(e)?jt(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Mr()?jt(mr(64,BigInt(t))):jt(bx(t)))}function Ax(t){return Bi(t)?jt(Bh(t)):jt(wx(t))}function yh(t){var e=typeof t;return t==null?t:e==="bigint"?jt(mr(64,t)):Ma(t)?e==="string"?Ex(t):Ax(t):void 0}function Rf(t){if(t==null)return t;var e=typeof t;if(e==="bigint")return String(mr(64,t));if(Ma(t)){if(e==="string")return _h(t);if(e==="number")return Bh(t)}}function Tx(t){if(t==null||typeof t=="string"||t instanceof ki)return t}function Cx(t){if(typeof t!="string")throw Error();return t}function ss(t){if(t!=null&&typeof t!="string")throw Error();return t}function fn(t){return t==null||typeof t=="string"?t:void 0}function If(t,e,n,i){return t!=null&&t[ua]===da?t:Array.isArray(t)?((i=(n=0|t[Me])|32&i|2&i)!==n&&Jt(t,i),new e(t)):(n?2&i?((t=e[zg])||(No((t=new e).A),t=e[zg]=t),e=t):e=new e:e=void 0,e)}function XS(t,e,n){return(t=e?yx(t,1024):yh(t))==null?n?GS:void 0:t}function $S(t){return t}var qS={},YS=(function(){try{return Dh(new class extends Map{constructor(){super()}}),!1}catch{return!0}})(),So=class{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}},KS=YS?(Object.setPrototypeOf(So.prototype,Map.prototype),Object.defineProperties(So.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),So):class extends Map{constructor(){super()}};function $g(t){return t}function Hd(t){if(2&t.M)throw Error("Cannot mutate an immutable Map")}var ZS,os=class extends KS{constructor(t,e,n=$g,i=$g){super(),this.M=0|t[Me],this.N=e,this.ba=n,this.na=this.N?jS:i;for(let s=0;s<t.length;s++){let r=t[s],a=n(r[0],!1,!0),o=r[1];e?o===void 0&&(o=null):o=i(r[1],!1,!0,void 0,void 0,this.M),super.set(a,o)}}ea(t){return To(Array.from(super.entries(),t))}clear(){Hd(this),super.clear()}delete(t){return Hd(this),super.delete(this.ba(t,!0,!1))}entries(){if(this.N){var t=super.keys();t=new xh(t,JS,this)}else t=super.entries();return t}values(){if(this.N){var t=super.keys();t=new xh(t,os.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.N?super.forEach((n,i,s)=>{t.call(e,s.get(i),i,s)}):super.forEach(t,e)}set(t,e){return Hd(this),(t=this.ba(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.na(e,!0,!0,this.N,!1,this.M))}gb(t){var e=this.ba(t[0],!1,!0);t=t[1],t=this.N?t===void 0?null:t:this.na(t,!1,!0,void 0,!1,this.M),super.set(e,t)}has(t){return super.has(this.ba(t,!1,!1))}get(t){t=this.ba(t,!1,!1);var e=super.get(t);if(e!==void 0){var n=this.N;return n?((n=this.na(e,!1,!0,n,this.Fa,this.M))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function jS(t,e,n,i,s,r){return t=If(t,i,n,r),s&&(t=Lf(t)),t}function JS(t){return[t,this.get(t)]}function qg(){return ZS||=new os(No([]),void 0,void 0,void 0,qS)}function zh(t){return Xn?t[Xn]:void 0}function bh(t,e){for(let n in t)!isNaN(n)&&e(t,+n,t[n])}os.prototype.toJSON=void 0;var QS,e3,t3,nf=class{},n3={cb:!0};function i3(t,e){e<100||ha(LS,1)}function Vh(t,e,n,i){var s=i!==void 0;i=!!i;var r,a=Xn;!s&&ya&&a&&(r=t[a])&&bh(r,i3),a=[];var o=t.length;r=4294967295;var l=!1,c=!!(64&e),u=c?128&e?0:-1:void 0;if(!(1&e)){var d=o&&t[o-1];d!=null&&typeof d=="object"&&d.constructor===Object?r=--o:d=void 0,!c||128&e||s||(l=!0,r=(QS??$S)(r-u,u,t,d,void 0)+u)}e=void 0;for(var h=0;h<o;h++){let f=t[h];if(f!=null&&(f=n(f,i))!=null)if(c&&h>=r){let g=h-u;(e??={})[g]=f}else a[h]=f}if(d)for(let f in d){if((o=d[f])==null||(o=n(o,i))==null)continue;let g;h=+f,c&&!Number.isNaN(h)&&(g=h+u)<r?a[g]=o:(e??={})[f]=o}return e&&(l?a.push(e):a[r]=e),s&&Xn&&(t=zh(t))&&t instanceof nf&&(a[Xn]=(function(f){var g=new nf;return bh(f,(v,m,p)=>{g[m]=si(p)}),g.ka=f.ka,g})(t)),a}function s3(t){return t[0]=Co(t[0]),t[1]=Co(t[1]),t}function Co(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return Qd(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Array.isArray(t)){var e=0|t[Me];return t.length===0&&1&e?void 0:Vh(t,e,Co)}if(t!=null&&t[ua]===da)return Rx(t);if(t instanceof ki){if((e=t.g)==null)t="";else if(typeof e=="string")t=e;else{if(ox){for(var n="",i=0,s=e.length-10240;i<s;)n+=String.fromCharCode.apply(null,e.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?e.subarray(i):e),e=btoa(n)}else{n===void 0&&(n=0),ax(),n=rx[n],i=Array(Math.floor(e.length/3)),s=n[64]||"";let c=0,u=0;for(;c<e.length-2;c+=3){var r=e[c],a=e[c+1],o=e[c+2],l=n[r>>2];r=n[(3&r)<<4|a>>4],a=n[(15&a)<<2|o>>6],o=n[63&o],i[u++]=l+r+a+o}switch(l=0,o=s,e.length-c){case 2:o=n[(15&(l=e[c+1]))<<2]||s;case 1:e=e[c],i[u]=n[e>>2]+n[(3&e)<<4|l>>4]+o+s}e=i.join("")}t=t.g=e}return t}return t instanceof os?t=t.size!==0?t.ea(s3):void 0:void 0}return t}function Rx(t){return Vh(t=t.A,0|t[Me],Co)}function gr(t,e){return Ix(t,e[0],e[1])}function Ix(t,e,n,i=0){if(t==null){var s=32;n?(t=[n],s|=128):t=[],e&&(s=-16760833&s|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(s=0|t[Me],Ug&&1&s)throw Error("rfarr");if(2048&s&&!(2&s)&&(function(){if(Ug)throw Error("carr");ha(NS,5)})(),256&s)throw Error("farr");if(64&s)return(s|i)!==s&&Jt(t,s|i),t;if(n&&(s|=128,n!==t[0]))throw Error("mid");e:{s|=64;var r=(n=t).length;if(r){var a=r-1;let l=n[a];if(l!=null&&typeof l=="object"&&l.constructor===Object){if((a-=e=128&s?0:-1)>=1024)throw Error("pvtlmt");for(var o in l)(r=+o)<a&&(n[r+e]=l[o],delete l[o]);s=-16760833&s|(1023&a)<<14;break e}}if(e){if((o=Math.max(e,r-(128&s?0:-1)))>1024)throw Error("spvt");s=-16760833&s|(1023&o)<<14}}}return Jt(t,64|s|i),t}function r3(t,e){if(typeof t!="object")return t;if(Array.isArray(t)){var n=0|t[Me];return t.length===0&&1&n?void 0:Yg(t,n,e)}if(t!=null&&t[ua]===da)return Kg(t);if(t instanceof os){if(2&(e=t.M))return t;if(!t.size)return;if(n=No(t.ea()),t.N)for(t=0;t<n.length;t++){let i=n[t],s=i[1];s=s==null||typeof s!="object"?void 0:s!=null&&s[ua]===da?Kg(s):Array.isArray(s)?Yg(s,0|s[Me],!!(32&e)):void 0,i[1]=s}return n}return t instanceof ki?t:void 0}function Yg(t,e,n){return 2&e||(!n||4096&e||16&e?t=Sa(t,e,!1,n&&!(16&e)):(Lo(t,34),4&e&&Object.freeze(t))),t}function Pf(t,e,n){return t=new t.constructor(e),n&&(t.h=br),t.m=br,t}function Kg(t){var e=t.A,n=0|e[Me];return Fn(t,n)?t:Nf(t,e,n)?Pf(t,e):Sa(e,n)}function Sa(t,e,n,i){return i??=!!(34&e),t=Vh(t,e,r3,i),i=32,n&&(i|=2),Jt(t,e=16769217&e|i),t}function Lf(t){var e=t.A,n=0|e[Me];return Fn(t,n)?Nf(t,e,n)?Pf(t,e,!0):new t.constructor(Sa(e,n,!1)):t}function wa(t){if(t.h!==br)return!1;var e=t.A;return Lo(e=Sa(e,0|e[Me]),2048),t.A=e,t.h=void 0,t.m=void 0,!0}function Er(t){if(!wa(t)&&Fn(t,0|t.A[Me]))throw Error()}function Gs(t,e){e===void 0&&(e=0|t[Me]),32&e&&!(4096&e)&&Jt(t,4096|e)}function Nf(t,e,n){return!!(2&n)||!(!(32&n)||4096&n)&&(Jt(e,2|n),t.h=br,!0)}var Px=jt(0),Ds={};function Bt(t,e,n,i){if((e=ls(t.A,e,void 0,i))!==null||n&&t.m!==br)return e}function ls(t,e,n,i){if(e===-1)return null;var s=e+(n?0:-1),r=t.length-1;if(!(r<1+(n?0:-1))){if(s>=r){var a=t[r];if(a!=null&&typeof a=="object"&&a.constructor===Object){n=a[e];var o=!0}else{if(s!==r)return;n=a}}else n=t[s];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return o?a[e]=i:t[s]=i,i}return n}}function He(t,e,n,i){Er(t);var s=t.A;return Wt(s,0|s[Me],e,n,i),t}function Wt(t,e,n,i,s){var r=n+(s?0:-1),a=t.length-1;if(a>=1+(s?0:-1)&&r>=a){let o=t[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[n]=i,e}return r<=a?(t[r]=i,e):(i!==void 0&&(n>=(a=(e??=0|t[Me])>>14&1023||536870912)?i!=null&&(t[a+(s?0:-1)]={[n]:i}):t[r]=i),e)}function Lx(t,e,n,i){var s=t.A;return kx(s,0|s[Me],e,t=Ux(t,i)===n?n:-1)!==void 0}function dr(){return FS===void 0?2:4}function fr(t,e,n,i,s){var r=t.A,a=0|r[Me];i=Fn(t,a)?1:i,s=!!s||i===3,i===2&&wa(t)&&(a=0|(r=t.A)[Me]);var o=(t=Ff(r,e))===Hs?7:0|t[Me],l=Df(o,a),c=!(4&l);if(c){4&l&&(t=si(t),o=0,l=ks(l,a),a=Wt(r,a,e,t));let u=0,d=0;for(;u<t.length;u++){let h=n(t[u]);h!=null&&(t[d++]=h)}d<u&&(t.length=d),n=-513&l|4,l=n&=-1025,l&=-4097}return l!==o&&(Jt(t,l),2&l&&Object.freeze(t)),Nx(t,l,r,a,e,i,c,s)}function Nx(t,e,n,i,s,r,a,o){var l=e;return r===1||r===4&&(2&e||!(16&e)&&32&i)?Os(e)||((e|=!t.length||a&&!(4096&e)||32&i&&!(4096&e||16&e)?2:256)!==l&&Jt(t,e),Object.freeze(t)):(r===2&&Os(e)&&(t=si(t),l=0,e=ks(e,i),i=Wt(n,i,s,t)),Os(e)||(o||(e|=16),e!==l&&Jt(t,e))),2&e||!(4096&e||16&e)||Gs(n,i),t}function Ff(t,e,n){return t=ls(t,e,n),Array.isArray(t)?t:Hs}function Df(t,e){return 2&e&&(t|=2),1|t}function Os(t){return!!(2&t)&&!!(4&t)||!!(256&t)}function Fx(t){return Uh(t,!0)}function Dx(t){t=si(t);for(let e=0;e<t.length;e++){let n=t[e]=si(t[e]);Array.isArray(n[1])&&(n[1]=No(n[1]))}return To(t)}function Uo(t,e,n,i){Er(t),Wt(t=t.A,0|t[Me],e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function Ws(t,e,n){if(2&e)throw Error();var i=ba(e),s=Ff(t,n,i),r=s===Hs?7:0|s[Me],a=Df(r,e);return(2&a||Os(a)||16&a)&&(a===r||Os(a)||Jt(s,a),s=si(s),r=0,a=ks(a,e),Wt(t,e,n,s,i)),(a&=-13)!==r&&Jt(s,a),s}function Ux(t,e){return Of(Uf(t=t.A),t,void 0,e)}function Uf(t){if(ya)return t[xo]??(t[xo]=new Map);if(xo in t)return t[xo];var e=new Map;return Object.defineProperty(t,xo,{value:e}),e}function Ox(t,e,n,i,s){var r=Uf(t),a=Of(r,t,e,n,s);return a!==i&&(a&&(e=Wt(t,e,a,void 0,s)),r.set(n,i)),e}function Of(t,e,n,i,s){var r=t.get(i);if(r!=null)return r;r=0;for(let a=0;a<i.length;a++){let o=i[a];ls(e,o,s)!=null&&(r!==0&&(n=Wt(e,n,r,void 0,s)),r=o)}return t.set(i,r),r}function kf(t,e,n){var i=0|t[Me],s=ba(i),r=ls(t,n,s);if(r!=null&&r[ua]===da){if(!Fn(r))return wa(r),r.A;var a=r.A}else Array.isArray(r)&&(a=r);if(a){let o=0|a[Me];2&o&&(a=Sa(a,o))}return(a=gr(a,e))!==r&&Wt(t,i,n,a,s),a}function kx(t,e,n,i,s){var r=!1;if((i=ls(t,i,s,a=>{var o=If(a,n,!1,e);return r=o!==a&&o!=null,o}))!=null)return r&&!Fn(i)&&Gs(t,e),i}function ht(t,e,n,i){var s=t.A,r=0|s[Me];if((e=kx(s,r,e,n,i))==null)return e;if(!Fn(t,r=0|s[Me])){let a=Lf(e);a!==e&&(wa(t)&&(r=0|(s=t.A)[Me]),Gs(s,r=Wt(s,r,n,e=a,i)))}return e}function Bx(t,e,n,i,s,r,a,o){var l=Fn(t,n);r=l?1:r,a=!!a||r===3,l=o&&!l,(r===2||l)&&wa(t)&&(n=0|(e=t.A)[Me]);var c=(t=Ff(e,s))===Hs?7:0|t[Me],u=Df(c,n);if(o=!(4&u)){var d=t,h=n;let f=!!(2&u);f&&(h|=2);let g=!f,v=!0,m=0,p=0;for(;m<d.length;m++){let E=If(d[m],i,!1,h);if(E instanceof i){if(!f){let R=Fn(E);g&&=!R,v&&=R}d[p++]=E}}p<m&&(d.length=p),u|=4,u=v?-4097&u:4096|u,u=g?8|u:-9&u}if(u!==c&&(Jt(t,u),2&u&&Object.freeze(t)),l&&!(8&u||!t.length&&(r===1||r===4&&(2&u||!(16&u)&&32&n)))){for(Os(u)&&(t=si(t),u=ks(u,n),n=Wt(e,n,s,t)),i=t,l=u,c=0;c<i.length;c++)(d=i[c])!==(u=Lf(d))&&(i[c]=u);l|=8,Jt(t,u=l=i.length?4096|l:-4097&l)}return Nx(t,u,e,n,s,r,o,a)}function cs(t,e,n){var i=t.A;return Bx(t,i,0|i[Me],e,n,dr(),!1,!0)}function zx(t){return t==null&&(t=void 0),t}function Le(t,e,n,i,s){return He(t,n,i=zx(i),s),i&&!Fn(i)&&Gs(t.A),t}function zi(t,e,n,i){e:{var s=i=zx(i);Er(t);let r=t.A,a=0|r[Me];if(s==null){let o=Uf(r);if(Of(o,r,a,n)!==e)break e;o.set(n,0)}else a=Ox(r,a,n,e);Wt(r,a,e,s)}return i&&!Fn(i)&&Gs(t.A),t}function sf(t,e,n){Er(t);var i=t.A,s=0|i[Me];if(n==null)return Wt(i,s,e),t;var r=n===Hs?7:0|n[Me],a=r,o=Os(r),l=o||Object.isFrozen(n),c=!0,u=!0;for(let h=0;h<n.length;h++){var d=n[h];o||(d=Fn(d),c&&=!d,u&&=d)}return o||(r=c?13:5,r=u?-4097&r:4096|r),l&&r===a||(n=si(n),a=0,r=ks(r,s)),r!==a&&Jt(n,r),s=Wt(i,s,e,n),2&r||!(4096&r||16&r)||Gs(i,s),t}function ks(t,e){return-273&(2&e?2|t:-3&t)}function Ro(t,e,n,i){var s=i;Er(t),t=Bx(t,i=t.A,0|i[Me],n,e,2,!0),s=s??new n,t.push(s),e=n=t===Hs?7:0|t[Me],(s=Fn(s))?(n&=-9,t.length===1&&(n&=-4097)):n|=4096,n!==e&&Jt(t,n),s||Gs(i)}function ii(t,e,n){return wr(Bt(t,e,n))}function Gt(t,e){return Bt(t,e,void 0,mi)??0}function Zg(t,e,n){return ht(t,e,n=Ux(t,ip)===n?n:-1,void 0)}function rf(t,e){Uo(t,3,e==null?e:vh(e),!1)}function Vi(t,e,n){if(n!=null){if(typeof n!="number"||!Do(n))throw Ao("int32");n|=0}He(t,e,n)}function Gd(t,e,n){return He(t,e,n==null?n:yx(n))}function hh(t,e,n){return He(t,e,n==null?n:(function(i){if(!Ma(i))throw Ao("uint64");switch(typeof i){case"string":var s=zs(Number(i));return Bi(s)&&s>=0?i=jt(s):((s=i.indexOf("."))!==-1&&(i=i.substring(0,s)),i=Mr()?jt(tf(64,BigInt(i))):jt(Mx(i))),i;case"bigint":return jt(tf(64,i));default:return Bi(i)?i=jt(Sx(i)):((i=zs(i))>=0&&Bi(i)?i=String(i):(Sr(i),i=fa(ot,gt)),i=jt(i)),i}})(n))}function Pe(t,e,n){He(t,e,n==null?n:vx(n))}function aa(t,e,n){Uo(t,e,n==null?n:vx(n),0)}function $n(t,e,n){Uo(t,e,ss(n),"")}function Mh(t,e,n){{Er(t);let a=t.A,o=0|a[Me];if(n==null)Wt(a,o,e);else{var i=t=n===Hs?7:0|n[Me],s=Os(t),r=s||Object.isFrozen(n);for(s||(t=0),r||(n=si(n),i=0,t=ks(t,o),r=!1),t|=5,t|=(4&t?512&t?512:1024&t?1024:0:void 0)??1024,s=0;s<n.length;s++){let l=n[s],c=Cx(l);Object.is(l,c)||(r&&(n=si(n),i=0,t=ks(t,o),r=!1),n[s]=c)}t!==i&&(r&&(n=si(n),t=ks(t,o)),Jt(n,t)),Wt(a,o,e,n)}}}function Hh(t,e,n){Er(t),fr(t,e,fn,2,!0).push(Cx(n))}var sa=class{constructor(t,e,n){if(this.buffer=t,n&&!e)throw Error();this.g=e}};function Gh(t,e){if(typeof t=="string")return new sa(lx(t),e);if(Array.isArray(t))return new sa(new Uint8Array(t),e);if(t.constructor===Uint8Array)return new sa(t,!1);if(t.constructor===ArrayBuffer)return t=new Uint8Array(t),new sa(t,!1);if(t.constructor===ki)return e=Ef(t)||new Uint8Array(0),new sa(e,!0,t);if(t instanceof Uint8Array)return t=t.constructor===Uint8Array?t:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),new sa(t,!1);throw Error()}function Bf(t,e){var n=0,i=0,s=0,r=t.h,a=t.g;do{var o=r[a++];n|=(127&o)<<s,s+=7}while(s<32&&128&o);if(s>32)for(i|=(127&o)>>4,s=3;s<32&&128&o;s+=7)i|=(127&(o=r[a++]))<<s;if(xr(t,a),!(128&o))return e(n>>>0,i>>>0);throw Error()}function zf(t){for(var e=0,n=t.g,i=n+10,s=t.h;n<i;){let r=s[n++];if(e|=r,!(128&r))return xr(t,n),!!(127&e)}throw Error()}function hs(t){var e=t.h,n=t.g,i=e[n++],s=127&i;if(128&i&&(s|=(127&(i=e[n++]))<<7,128&i&&(s|=(127&(i=e[n++]))<<14,128&i&&(s|=(127&(i=e[n++]))<<21,128&i&&(s|=(i=e[n++])<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Error();return xr(t,n),s}function Hi(t){return hs(t)>>>0}function Sh(t){return Bf(t,xx)}function af(t){var e=t.h,n=t.g,i=e[n],s=e[n+1],r=e[n+2];return e=e[n+3],xr(t,t.g+4),(i|s<<8|r<<16|e<<24)>>>0}function wh(t){var e=af(t);t=2*(e>>31)+1;var n=e>>>23&255;return e&=8388607,n==255?e?NaN:t*(1/0):n==0?1401298464324817e-60*t*e:t*Math.pow(2,n-150)*(e+8388608)}function a3(t){return hs(t)}function xr(t,e){if(t.g=e,e>t.j)throw Error()}function Vx(t,e){if(e<0)throw Error();var n=t.g;if((e=n+e)>t.j)throw Error();return t.g=e,n}function Hx(t,e){if(e==0)return yr();var n=Vx(t,e);return t.fa&&t.o?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):VS?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?yr():new ki(n,ca)}var o3=class{constructor(t,e,n,i){this.h=null,this.o=!1,this.g=this.j=this.m=0,this.init(t,e,n,i)}init(t,e,n,{fa:i=!1,ma:s=!1}={}){this.fa=i,this.ma=s,t&&(t=Gh(t,this.ma),this.h=t.buffer,this.o=t.g,this.m=e||0,this.j=n!==void 0?this.m+n:this.h.length,this.g=this.m)}clear(){this.h=null,this.o=!1,this.g=this.j=this.m=0,this.fa=!1}},jg=[],pa=0;function Gx(t,e,n,i){if(Eh.length){let s=Eh.pop();return s.v(i),s.g.init(t,e,n,i),s}return new l3(t,e,n,i)}function Wx(t){t.g.clear(),t.j=-1,t.h=-1,Eh.length<100&&Eh.push(t)}function Xx(t){var e=t.g;if(e.g==e.j)return!1;t.m=t.g.g;var n=Hi(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5)||e<1)throw Error();return t.j=e,t.h=n,!0}function uh(t){try{switch(t.h){case 0:t.h!=0?uh(t):zf(t.g);break;case 1:var e=t.g;xr(e,e.g+8);break;case 2:if(t.h!=2)uh(t);else{var n=Hi(t.g),i=t.g;xr(i,i.g+n)}break;case 5:var s=t.g;xr(s,s.g+4);break;case 3:$x();let r=t.j;try{for(;;){if(!Xx(t))throw Error();if(t.h==4){if(t.j!=r)throw Error();break}uh(t)}}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{pa>0&&pa--}break;default:throw Error()}}catch(r){throw r instanceof RangeError?new SyntaxError:r}}function $x(){if(pa>=100)throw new SyntaxError;pa++}function Oo(t,e,n){var i=t.g.j,s=Hi(t.g),r=(s=t.g.g+s)-i;if(r<=0&&(t.g.j=s,n(e,t,void 0,void 0,void 0),r=s-t.g.g),r)throw Error();return t.g.g=s,t.g.j=i,e}function Vf(t){var e=Hi(t.g),n=Vx(t=t.g,e);if(t=t.h,bS){var i,s=t;(i=Vd)||(i=Vd=new TextDecoder("utf-8",{fatal:!0})),e=n+e,s=n===0&&e===s.length?s:s.subarray(n,e);try{var r=i.decode(s)}catch(o){if(ih===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),ih=!0}catch{ih=!1}}throw!ih&&(Vd=void 0),o}}else{e=(r=n)+e,n=[];let o,l=null;for(;r<e;){var a=t[r++];a<128?n.push(a):a<224?r>=e?hr():(o=t[r++],a<194||(192&o)!=128?(r--,hr()):n.push((31&a)<<6|63&o)):a<240?r>=e-1?hr():(o=t[r++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=t[r++]))!=128?(r--,hr()):n.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?r>=e-2?hr():(o=t[r++],(192&o)!=128||o-144+(a<<28)>>30||(192&(i=t[r++]))!=128||(192&(s=t[r++]))!=128?(r--,hr()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&s,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):hr(),n.length>=8192&&(l=Dg(l,n),n.length=0)}r=Dg(l,n)}return r}function Hf(t){var e=Hi(t.g);return Hx(t.g,e)}function ko(t,e,n){var i=Hi(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var l3=class{constructor(t,e,n,i){if(jg.length){let s=jg.pop();s.init(t,e,n,i),t=s}else t=new o3(t,e,n,i);this.g=t,this.m=this.g.g,this.h=this.j=-1,this.v(i)}v({ra:t=!1}={}){this.ra=t}},Eh=[];function c3(t){return new Ah(4294967295&t,Math.floor(t/4294967296))}function Jg(t){return t?/^\d+$/.test(t)?(Fo(t),new Ah(ot,gt)):null:h3||=new Ah(0,0)}var h3,Ah=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};function u3(t){return new Th(4294967295&t,Math.floor(t/4294967296))}function qx(t){return t?/^-?\d+$/.test(t)?(Fo(t),new Th(ot,gt)):null:d3||=new Th(0,0)}var d3,Qg,e0,t0,Wd,n0,vo,sh,Th=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};function Yx(t,e,n){return typeof BigInt64Array<"u"?(vo||(vo=new BigInt64Array(1),sh=new Uint32Array(vo.buffer),vo[0]=BigInt(1),n0=sh[0]===1),vo[0]=t,new e(sh[t=n0?0:1],sh[1-t])):(Wd||(Qg=BigInt(Number.MIN_SAFE_INTEGER),e0=BigInt(Number.MAX_SAFE_INTEGER),t0=BigInt(4294967295),Wd=BigInt(32)),t>=Qg&&t<=e0?n(Number(t)):(t=BigInt.asUintN(64,t),new e(Number(t&t0),Number(t>>Wd))))}function as(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function Ea(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function Bo(t,e){if(e>=0)Ea(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function f3(t,e){Fo(e),(function(n){var i=gt>>31;n(ot<<1^i,(gt<<1|ot>>>31)^i)})((n,i)=>{as(t,n>>>0,i>>>0)})}function Io(t,e){t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}var p3=class{constructor(){this.g=[]}length(){return this.g.length}end(){var t=this.g;return this.g=[],t}};function ma(t,e){e.length!==0&&(t.j.push(e),t.h+=e.length)}function Sn(t,e,n){Ea(t.g,8*e+n)}function Gf(t,e){return Sn(t,e,2),e=t.g.end(),ma(t,e),e.push(t.h),e}function Wf(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function Kx(t,e,n){if(n!=null)switch(Sn(t,e,0),typeof n){case"number":t=t.g,Sr(n),as(t,ot,gt);break;case"bigint":n=Yx(n,Th,u3),as(t.g,n.h,n.g);break;default:n=qx(n),as(t.g,n.h,n.g)}}function zo(t,e,n){Sn(t,e,2),Ea(t.g,n.length),ma(t,t.g.end()),ma(t,n)}function Ch(t,e,n,i){n!=null&&(e=Gf(t,e),i(n,t),Wf(t,e))}var m3=class{constructor(){this.j=[],this.h=0,this.g=new p3}};function Zx(t){typeof t=="string"&&qx(t)}function ri(){var t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var Xf=ri(),jx=ri(),$f=ri(),Wh=ri(),qf=ri(),Xh=ri(),g3=ri(),x3=ri(),$h=ri(),v3=ri(),qh=ri(),Yf=ri();function Wi(t,e,n){var i=t.A;Xn&&Xn in i&&(i=i[Xn])&&delete i[e.g],e.h?e.o(t,e.h,e.g,n,e.j):e.o(t,e.g,n,e.j)}var ge=class{constructor(t,e){this.A=Ix(t,e,void 0,2048)}toJSON(){return Rx(this)}o(){var t=iw,e=this.A,n=t.g,i=Xn;if(ya&&i&&e[i]?.[n]!=null&&ha(PS,3),e=t.g,Vg&&Xn&&Vg===void 0&&(i=(n=this.A)[Xn])&&(i=i.ka))try{i(n,e,n3)}catch(s){sx(s)}return t.h?t.m(this,t.h,t.g,t.j):t.m(this,t.g,t.defaultValue,t.j)}clone(){var t=this.A,e=0|t[Me];return Nf(this,t,e)?Pf(this,t,!0):new this.constructor(Sa(t,e,!1))}};ge.prototype[ua]=da,ge.prototype.toString=function(){return this.A.toString()};var Aa=class{constructor(t,e,n){this.g=t,this.h=e,t=Xf,this.j=!!t&&n===t||!1}};function Yh(t,e){return new Aa(t,e,Xf)}function Jx(t,e,n,i,s){Ch(t,n,n1(e,i),s)}var Qx,e1,_3=Yh(function(t,e,n,i,s){return t.h===2&&(Oo(t,kf(e,i,n),s),!0)},Jx),y3=Yh(function(t,e,n,i,s){return t.h===2&&(Oo(t,kf(e,i,n),s),!0)},Jx),Kh=Symbol(),Zh=Symbol(),of=Symbol(),i0=Symbol(),s0=Symbol();function Ar(t,e,n,i){var s=i[t];if(s)return s;(s={}).Ea=i,s.ca=(function(d){switch(typeof d){case"boolean":return e3||=[0,void 0,!0];case"number":return d>0?void 0:d===0?t3||=[0,void 0]:[-d,void 0];case"string":return[0,d];case"object":return d}})(i[0]);var r=i[1],a=1;r&&r.constructor===Object&&(s.ia=r,typeof(r=i[++a])=="function"&&(s.wa=!0,Qx??=r,e1??=i[a+1],r=i[a+=2]));for(var o={};r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var l=0;l<r.length;l++)o[r[l]]=r;r=i[++a]}for(l=1;r!==void 0;){let d;typeof r=="number"&&(l+=r,r=i[++a]);var c=void 0;if(r instanceof Aa?d=r:(d=_3,a--),d?.j){r=i[++a],c=i;var u=a;typeof r=="function"&&(r=r(),c[u]=r),c=r}for(u=l+1,typeof(r=i[++a])=="number"&&r<0&&(u-=r,r=i[++a]);l<u;l++){let h=o[l];c?n(s,l,d,c,h):e(s,l,d,h)}}return i[t]=s}function t1(t){return Array.isArray(t)?t[0]instanceof Aa?t:[y3,t]:[t,void 0]}function n1(t,e){return t instanceof ge?t.A:Array.isArray(t)?gr(t,e):void 0}function Kf(t,e,n,i){var s=n.g;t[e]=i?(r,a,o)=>s(r,a,o,i):s}function Zf(t,e,n,i,s){var r,a,o=n.g;t[e]=(l,c,u)=>o(l,c,u,a||=Ar(Zh,Kf,Zf,i).ca,r||=jf(i),s)}function jf(t){var e=t[of];if(e!=null)return e;var n=Ar(Zh,Kf,Zf,t);return e=n.wa?(i,s)=>Qx(i,s,n):(i,s)=>{e:{$x();try{for(;Xx(s)&&s.h!=4;){let h=s.j,f=n[h];if(f==null){let g=n.ia;if(g){let v=g[h];if(v){let m=M3(v);m!=null&&(f=n[h]=m)}}}if(f==null||!f(s,i,h)){var r=s;let g=r.m;if(uh(r),r.ra)var a=void 0;else{let v=r.g.g-g;r.g.g=g,a=Hx(r.g,v)}r=void 0;var o=i,l=h,c=a;c&&((r=o[Xn]??(o[Xn]=new nf))[l]??(r[l]=[])).push(c)}}let d=zh(i);d&&(d.ka=n.Ea[s0]);var u=!0;break e}catch(d){throw d instanceof RangeError?new SyntaxError:d}finally{pa>0&&pa--}u=void 0}return u},t[of]=e,t[s0]=b3.bind(t),e}function b3(t,e,n,i){var s=this[Zh],r=this[of],a=gr(void 0,s.ca),o=zh(t);if(o){var l=!1,c=s.ia;if(c){if(s=(u,d,h)=>{if(h.length!==0)if(c[d])for(let f of h){u=Gx(f);try{l=!0,r(a,u)}finally{Wx(u)}}else i?.(t,d,h)},e==null)bh(o,s);else if(o!=null){let u=o[e];u&&s(o,e,u)}if(l){let u=0|t[Me];if(2&u&&2048&u&&!n?.cb)throw Error();let d=ba(u),h=(f,g)=>{if(ls(t,f,d)!=null){if(n?.lb===1)return;throw Error()}g!=null&&(u=Wt(t,u,f,g,d)),delete o[f]};e==null?fx(a,0|a[Me],(f,g)=>{h(f,g)}):h(e,ls(a,e,d))}}}}function M3(t){var e=(t=t1(t))[0].g;if(t=t[1]){let n=jf(t),i=Ar(Zh,Kf,Zf,t).ca;return(s,r,a)=>e(s,r,a,i,n)}return e}function jh(t,e,n){t[e]=n.h}function Jh(t,e,n,i){var s,r,a=n.h;t[e]=(o,l,c)=>a(o,l,c,r||=Ar(Kh,jh,Jh,i).ca,s||=i1(i))}function i1(t){var e=t[i0];if(!e){let n=Ar(Kh,jh,Jh,t);e=(i,s)=>s1(i,s,n),t[i0]=e}return e}function s1(t,e,n){fx(t,0|t[Me],(i,s)=>{if(s!=null){var r=(function(a,o){var l=a[o];if(l)return l;if((l=a.ia)&&(l=l[o])){var c=(l=t1(l))[0].h;if(l=l[1]){let u=i1(l),d=Ar(Kh,jh,Jh,l).ca;l=a.wa?e1(d,u):(h,f,g)=>c(h,f,g,d,u)}else l=c;return a[o]=l}})(n,i);r?r(e,s,i):i<500||ha(Jd,3)}}),(t=zh(t))&&bh(t,(i,s,r)=>{for(ma(e,e.g.end()),i=0;i<r.length;i++)ma(e,Ef(r[i])||new Uint8Array(0))})}var S3=jt(0);function us(t,e,n){if(Array.isArray(e)){var i=0|e[Me];if(4&i)return e;for(var s=0,r=0;s<e.length;s++){let a=t(e[s]);a!=null&&(e[r++]=a)}return r<s&&(e.length=r),t=1|i,n&&(t=-1537&t|4),t!==i&&Jt(e,t),n&&2&t&&Object.freeze(e),e}}var r1=(t,e)=>{var n=new m3;s1(t.A,n,Ar(Kh,jh,Jh,e)),ma(n,n.g.end()),t=new Uint8Array(n.h);var i=(e=n.j).length,s=0;for(let r=0;r<i;r++){let a=e[r];t.set(a,s),s+=a.length}return n.j=[t],t};function $t(t,e,n){return new Aa(t,e,n)}function ds(t,e,n){return new Aa(t,e,n)}function an(t,e,n){Wt(t,0|t[Me],e,n,ba(0|t[Me]))}var w3=Yh(function(t,e,n,i,s){if(t.h!==2)return!1;if(t=si(t=Oo(t,gr([void 0,void 0],i),s)),s=ba(i=0|e[Me]),2&i)throw Error();var r=ls(e,n,s);if(r instanceof os)2&r.M?((r=r.ea()).push(t),Wt(e,i,n,r,s)):r.gb(t);else if(Array.isArray(r)){var a=0|r[Me];8192&a||Jt(r,a|=8192),2&a&&Wt(e,i,n,r=Dx(r),s),r.push(t)}else Wt(e,i,n,To([t]),s);return!0},function(t,e,n,i,s){if(e instanceof os)e.forEach((r,a)=>{Ch(t,n,gr([a,r],i),s)});else if(Array.isArray(e)){for(let r=0;r<e.length;r++){let a=e[r];Array.isArray(a)&&Ch(t,n,gr(a,i),s)}To(e)}});function a1(t,e,n){(e=mi(e))!=null&&(Sn(t,n,5),t=t.g,Af(e),Io(t,ot))}function Jf(t,e,n){(e=Rf(e))!=null&&(Zx(e),Kx(t,n,e))}function o1(t,e,n){(e=wr(e))!=null&&e!=null&&(Sn(t,n,0),Bo(t.g,e))}function l1(t,e,n){(e=e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0)!=null&&(Sn(t,n,0),t.g.g.push(e?1:0))}function c1(t,e,n){(e=fn(e))!=null&&zo(t,n,ix(e))}function h1(t,e,n,i,s){Ch(t,n,n1(e,i),s)}function Qf(t,e,n){(e=Tx(e))!=null&&zo(t,n,Gh(e,!0).buffer)}function u1(t,e,n){(e=_x(e))!=null&&e!=null&&(Sn(t,n,0),Ea(t.g,e))}function d1(t,e,n){(e=wr(e))!=null&&(e=parseInt(e,10),Sn(t,n,0),Bo(t.g,e))}function f1(t,e,n){return(t.h===5||t.h===2)&&(e=Ws(e,0|e[Me],n),t.h==2?ko(t,wh,e):e.push(wh(t.g)),!0)}function p1(t,e,n){return t.h===0&&(an(e,n,Sh(t.g)),!0)}function m1(t,e,n){return(t.h===0||t.h===2)&&(e=Ws(e,0|e[Me],n),t.h==2?ko(t,hs,e):e.push(hs(t.g)),!0)}function g1(t,e,n){return t.h===2&&(an(e,n,(t=Hf(t))===yr()?void 0:t),!0)}var r0=$t(function(t,e,n){if(t.h!==1)return!1;var i=t.g;t=af(i);var s=af(i);i=2*(s>>31)+1;var r=s>>>20&2047;return t=4294967296*(1048575&s)+t,an(e,n,r==2047?t?NaN:i*(1/0):r==0?5e-324*i*t:i*Math.pow(2,r-1075)*(t+4503599627370496)),!0},function(t,e,n){(e=mi(e))!=null&&(Sn(t,n,1),t=t.g,(n=mx||=new DataView(new ArrayBuffer(8))).setFloat64(0,+e,!0),ot=n.getUint32(0,!0),gt=n.getUint32(4,!0),Io(t,ot),Io(t,gt))},v3),zt=$t(function(t,e,n){return t.h===5&&(an(e,n,wh(t.g)),!0)},a1,$h),E3=ds(f1,function(t,e,n){if((e=us(mi,e,!0))!=null)for(let a=0;a<e.length;a++){var i=t,s=n,r=e[a];r!=null&&(Sn(i,s,5),i=i.g,Af(r),Io(i,ot))}},$h),ep=ds(f1,function(t,e,n){if((e=us(mi,e,!0))!=null&&e.length){Sn(t,n,2),Ea(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,Af(e[i]),Io(n,ot)}},$h),x1=$t(function(t,e,n){return t.h===5&&(an(e,n,(t=wh(t.g))===0?void 0:t),!0)},a1,$h),_o=$t(function(t,e,n){return p1(t,e,n)},Jf,Xh),Et=$t(function(t,e,n){return p1(t,e,n)},Jf,Xh),A3=ds(function(t,e,n){return t.h!==0&&t.h!==2?t=!1:(e=Ws(e,0|e[Me],n),t.h==2?ko(t,Sh,e):e.push(Sh(t.g)),t=!0),t},function(t,e,n){if((e=us(Rf,e,!1))!=null)for(let i=0;i<e.length;i++)Kx(t,n,e[i])},Xh),dh=$t(function(t,e,n){return t.h!==0?e=!1:(an(e,n,(t=Sh(t.g))===S3?void 0:t),e=!0),e},Jf,Xh),Rh=$t(function(t,e,n){return t.h!==0?t=!1:(an(e,n,Bf(t.g,HS)),t=!0),t},function(t,e,n){if(e=(function(i){if(i==null)return i;var s=typeof i;if(s==="bigint")return String(tf(64,i));if(Ma(i)){if(s==="string")return s=zs(Number(i)),Bi(s)&&s>=0?i=String(s):((s=i.indexOf("."))!==-1&&(i=i.substring(0,s)),i=Mx(i)),i;if(s==="number")return Sx(i)}})(e),e!=null&&(typeof e=="string"&&Jg(e),e!=null))switch(Sn(t,n,0),typeof e){case"number":t=t.g,Sr(e),as(t,ot,gt);break;case"bigint":n=Yx(e,Ah,c3),as(t.g,n.h,n.g);break;default:n=Jg(e),as(t.g,n.h,n.g)}},g3),it=$t(function(t,e,n){return t.h===0&&(an(e,n,hs(t.g)),!0)},o1,Wh),a0=ds(m1,function(t,e,n){if((e=us(wr,e,!0))!=null)for(let a=0;a<e.length;a++){var i=t,s=n,r=e[a];r!=null&&(Sn(i,s,0),Bo(i.g,r))}},Wh),Ta=ds(m1,function(t,e,n){if((e=us(wr,e,!0))!=null&&e.length){n=Gf(t,n);for(let i=0;i<e.length;i++)Bo(t.g,e[i]);Wf(t,n)}},Wh),pr=$t(function(t,e,n){return t.h===0&&(an(e,n,(t=hs(t.g))===0?void 0:t),!0)},o1,Wh),$e=$t(function(t,e,n){return t.h===0&&(an(e,n,zf(t.g)),!0)},l1,jx),Bs=$t(function(t,e,n){return t.h===0&&(an(e,n,(t=zf(t.g))===!1?void 0:t),!0)},l1,jx),dn=ds(function(t,e,n){return t.h===2&&(t=Vf(t),Ws(e,0|e[Me],n).push(t),!0)},function(t,e,n){if((e=us(fn,e,!0))!=null)for(let a=0;a<e.length;a++){var i=t,s=n,r=e[a];r!=null&&zo(i,s,ix(r))}},$f),ns=$t(function(t,e,n){return t.h===2&&(an(e,n,(t=Vf(t))===""?void 0:t),!0)},c1,$f),ie=$t(function(t,e,n){return t.h===2&&(an(e,n,Vf(t)),!0)},c1,$f),Mt=(function(t,e,n=Xf){return new Aa(t,e,n)})(function(t,e,n,i,s){return t.h===2&&(i=gr(void 0,i),Ws(e,0|e[Me],n).push(i),Oo(t,i,s),!0)},function(t,e,n,i,s){if(Array.isArray(e)){for(let r=0;r<e.length;r++)h1(t,e[r],n,i,s);1&(t=0|e[Me])||Jt(e,1|t)}}),tt=Yh(function(t,e,n,i,s,r){if(t.h!==2)return!1;var a=0|e[Me];return Ox(e,a,r,n,ba(a)),Oo(t,e=kf(e,i,n),s),!0},h1),oa=$t(function(t,e,n){return t.h===2&&(an(e,n,Hf(t)),!0)},Qf,qh),v1=ds(function(t,e,n){return t.h===2&&(t=Hf(t),Ws(e,0|e[Me],n).push(t),!0)},function(t,e,n){if((e=us(Tx,e,!1))!=null)for(let a=0;a<e.length;a++){var i=t,s=n,r=e[a];r!=null&&zo(i,s,Gh(r,!0).buffer)}},qh),_1=$t(function(t,e,n){return t.h===0&&(an(e,n,Hi(t.g)),!0)},u1,qf),T3=ds(function(t,e,n){return(t.h===0||t.h===2)&&(e=Ws(e,0|e[Me],n),t.h==2?ko(t,Hi,e):e.push(Hi(t.g)),!0)},function(t,e,n){if((e=us(_x,e,!0))!=null)for(let a=0;a<e.length;a++){var i=t,s=n,r=e[a];r!=null&&(Sn(i,s,0),Ea(i.g,r))}},qf),C3=$t(function(t,e,n){return t.h===0&&(an(e,n,(t=Hi(t.g))===0?void 0:t),!0)},u1,qf),we=$t(function(t,e,n){return t.h===0&&(an(e,n,hs(t.g)),!0)},d1,Yf),fh=$t(function(t,e,n){return t.h===0&&(an(e,n,(t=hs(t.g))===0?void 0:t),!0)},d1,Yf),R3=$t(function(t,e,n){return t.h!==0?t=!1:(an(e,n,(function(i){return Bf(i,(s,r)=>{var a=-(1&s);return xx(s=(s>>>1|r<<31)^a,r>>>1^a)})})(t.g)),t=!0),t},function(t,e,n){if((e=Rf(e))!=null&&(Zx(e),e!=null))switch(Sn(t,n,0),typeof e){case"number":t=t.g,e=(n=e)<0,ef(n=2*Math.abs(n)),n=ot;let i=gt;e&&(n==0?i==0?i=n=4294967295:(i--,n=4294967295):n--),as(t,ot=n,gt=i);break;case"bigint":t=t.g,e=e<<BigInt(1)^e>>BigInt(63),ot=Number(BigInt.asUintN(32,e)),gt=Number(BigInt.asUintN(32,e>>BigInt(32))),as(t,ot,gt);break;default:f3(t.g,e)}},x3),lf=class{constructor(e,n){var i=Yn;this.g=e,this.h=n,this.m=ht,this.o=Le,this.defaultValue=void 0,this.j=i.jb!=null?px:void 0}register(){Dh(this)}};function Xi(t,e){return new lf(t,e)}function Xs(t,e){return(n,i)=>{e:{let r={ma:!0};i&&Object.assign(r,i),n=Gx(n,void 0,void 0,r);try{let a=new t,o=a.A;jf(e)(o,n);var s=a;break e}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{Wx(n)}s=void 0}return s}}function tp(t){return e=>r1(e,t)}function Vo(t){return function(){return r1(this,t)}}var I3=[0,oa,v1,$e,ie],P3=[0,ns,[0,fh,[0,dh,pr],fh,-1,[0,we],fh,-1],$t(g1,Qf,qh)],Xd,o0=class extends ge{constructor(t){super(t)}},l0=[0,ns,$t(g1,function(t,e,n){if(e!=null){if(e instanceof ge){let i=e.mb;return void(i?(e=i(e),e!=null&&zo(t,n,Gh(e,!0).buffer)):ha(Jd,3))}if(Array.isArray(e))return void ha(Jd,3)}Qf(t,e,n)},qh)],L3=[0,1,[0,12,it,10,$e],[0,7,[0,it,-1]]],c0=globalThis.trustedTypes,N3=class{constructor(t){this.g=t}toString(){return this.g+""}};function h0(t){var e;return Xd===void 0&&(Xd=(function(){var n=null;if(!c0)return n;try{let i=s=>s;n=c0.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})()),t=(e=Xd)?e.createScriptURL(t):t,new N3(t)}function rh(t,...e){if(e.length===0)return h0(t[0]);var n=t[0];for(let i=0;i<e.length;i++)n+=encodeURIComponent(e[i])+t[i+1];return h0(n)}var y1=[0,it,we,$e,-1,Ta,we,-1,$e,-1],b1=[0,we,-1,$e],np=class extends ge{constructor(t){super(t)}},M1=[0,$e,ie,$e,we,-1,ds(function(t,e,n){return(t.h===0||t.h===2)&&(e=Ws(e,0|e[Me],n),t.h==2?ko(t,a3,e):e.push(hs(t.g)),!0)},function(t,e,n){if((e=us(wr,e,!0))!=null&&e.length){n=Gf(t,n);for(let i=0;i<e.length;i++)Bo(t.g,e[i]);Wf(t,n)}},Yf),ie,-1,[0,$e,-1],we,$e,-1,b1],S1=[0,3,$e,-1,2,[0,[2],it,tt,[0,_1]],[0,we,$e,we,$e,we,4,[0,$e,ie,-1,$e]],[0,[3,4],ie,-1,tt,[0,it],tt,[0,we,-1]],[0]],w1=[0,ie,-2],u0=class extends ge{constructor(t){super(t)}},E1=[0],F3=class extends ge{constructor(t){super(t)}},A1=[0,it,$e,1,$e,-4],Yn=class extends ge{constructor(t){super(t,2)}},rn={};rn[336783863]=[0,ie,$e,-1,it,[0,[1,2,3,4,5,6,7,8,9],tt,E1,tt,M1,tt,w1,tt,A1,tt,y1,tt,[0,ie,-2],tt,[0,ie,we],tt,S1,tt,b1],[0,ie],$e,[0,[1,3],[2,4],tt,[0,Ta],-1,tt,[0,dn],-1,Mt,[0,ie,-1]],ie];var d0=[0,dh,-1,Bs,-3,dh,Ta,ns,pr,dh,-1,Bs,pr,Bs,-2,ns];function Pt(t,e){Hh(t,3,e)}function st(t,e){Hh(t,4,e)}var Dn=class extends ge{constructor(t){super(t,500)}v(t){return Le(this,0,7,t)}},wo=[-1,{}],f0=[0,ie,1,wo],p0=[0,ie,dn,wo];function ai(t,e){Ro(t,1,Dn,e)}function Ft(t,e){Hh(t,10,e)}function dt(t,e){Hh(t,15,e)}var Kn=class extends ge{constructor(t){super(t,500)}v(t){return Le(this,0,1001,t)}},T1=[-500,Mt,[-500,ns,-1,dn,-3,[-2,rn,$e],Mt,l0,pr,-1,f0,p0,Mt,[0,ns,Bs],ns,d0,pr,dn,987,dn],4,Mt,[-500,ie,-1,[-1,{}],998,ie],Mt,[-500,ie,dn,-1,[-2,{},$e],997,dn,-1],pr,Mt,[-500,ie,dn,wo,998,dn],dn,pr,f0,p0,Mt,[0,ns,-1,wo],dn,-2,d0,ns,-1,Bs,[0,Bs,C3],978,wo,Mt,l0];Kn.prototype.g=Vo(T1);var D3=Xs(Kn,T1),U3=class extends ge{constructor(t){super(t)}},C1=class extends ge{constructor(t){super(t)}g(){return cs(this,U3,1)}},R1=[0,Mt,[0,it,zt,ie,-1]],Qh=Xs(C1,R1),O3=class extends ge{constructor(t){super(t)}},k3=class extends ge{constructor(t){super(t)}},$d=class extends ge{constructor(t){super(t)}j(){return ht(this,O3,2)}g(){return cs(this,k3,5)}},I1=Xs(class extends ge{constructor(t){super(t)}},[0,dn,Ta,ep,[0,we,[0,it,-3],[0,zt,-3],[0,it,-1,[0,Mt,[0,it,-2]]],Mt,[0,zt,-1,ie,zt]],ie,-1,Et,Mt,[0,it,zt],dn,Et]),P1=class extends ge{constructor(t){super(t)}},la=Xs(class extends ge{constructor(t){super(t)}},[0,Mt,[0,zt,-4]]),L1=class extends ge{constructor(t){super(t)}},Ho=Xs(class extends ge{constructor(t){super(t)}},[0,Mt,[0,zt,-4]]),B3=class extends ge{constructor(t){super(t)}},z3=[0,it,-1,ep,we],N1=class extends ge{constructor(t){super(t)}};N1.prototype.g=Vo([0,zt,-4,Et]);var V3=class extends ge{constructor(t){super(t)}},H3=Xs(class extends ge{constructor(t){super(t)}},[0,Mt,[0,1,it,ie,R1],Et]),m0=class extends ge{constructor(t){super(t)}},G3=class extends ge{constructor(t){super(t)}g(){var t=Bt(this,1,void 0,Fx);return t??yr()}},W3=class extends ge{constructor(t){super(t)}},ip=[1,2],X3=Xs(class extends ge{constructor(t){super(t)}},[0,Mt,[0,ip,tt,[0,ep],tt,[0,oa],it,ie],Et]),sp=class extends ge{constructor(t){super(t)}},F1=[0,ie,it,zt,dn,-1],g0=class extends ge{constructor(t){super(t)}},$3=[0,$e,-1],Ih=class extends ge{constructor(t){super(t)}g(){return Lx(this,np,2,vr)}},vr=[1,2,3,4,5,6],Ph=class extends ge{constructor(t){super(t)}g(){return Bt(this,1,void 0,Fx)!=null}j(){return fn(Bt(this,2))!=null}},Dt=class extends ge{constructor(t){super(t)}},D1=[0,oa,ie,[0,it,Et,-1],[0,Rh,Et]],Xt=[0,D1,$e,[0,vr,tt,A1,tt,M1,tt,y1,tt,E1,tt,w1,tt,S1],we],q3=tp(Xt),eu=class extends ge{constructor(t){super(t)}},rp=[0,Xt,zt,-1,it],Y3=Xi(502141897,eu);rn[502141897]=rp;var K3=Xs(class extends ge{constructor(t){super(t)}},[0,[0,we,-1,E3,T3],z3]),U1=class extends ge{constructor(t){super(t)}},O1=class extends ge{constructor(t){super(t)}},cf=[0,Xt,zt,[0,Xt],$e],Z3=Xi(508968150,O1);rn[508968150]=[0,Xt,rp,cf,zt,[0,[0,D1]]],rn[508968149]=cf;var ra=class extends ge{constructor(t){super(t)}j(){return ht(this,sp,2)}g(){He(this,2)}},k1=[0,Xt,F1];rn[478825465]=k1;var j3=class extends ge{constructor(t){super(t)}},B1=class extends ge{constructor(t){super(t)}},ap=class extends ge{constructor(t){super(t)}},op=class extends ge{constructor(t){super(t)}},z1=class extends ge{constructor(t){super(t)}},x0=[0,Xt,[0,Xt],k1,-1],V1=[0,Xt,zt,it],lp=[0,Xt,zt],H1=[0,Xt,V1,lp,zt],J3=Xi(479097054,z1);rn[479097054]=[0,Xt,H1,x0],rn[463370452]=x0,rn[464864288]=V1;var Q3=Xi(462713202,op);rn[462713202]=H1,rn[474472470]=lp;var ew=class extends ge{constructor(t){super(t)}},G1=class extends ge{constructor(t){super(t)}},W1=class extends ge{constructor(t){super(t)}},X1=class extends ge{constructor(t){super(t)}},cp=[0,Xt,zt,-1,it],hf=[0,Xt,zt,$e];X1.prototype.g=Vo([0,Xt,lp,[0,Xt],rp,cf,cp,hf]);var $1=class extends ge{constructor(t){super(t)}},tw=Xi(456383383,$1);rn[456383383]=[0,Xt,F1];var q1=class extends ge{constructor(t){super(t)}},nw=Xi(476348187,q1);rn[476348187]=[0,Xt,$3];var Y1=class extends ge{constructor(t){super(t)}},v0=class extends ge{constructor(t){super(t)}},K1=[0,we,-1],iw=Xi(458105876,class extends ge{constructor(t){super(t)}g(){var t=this.A,e=0|t[Me],n=Fn(this,e);return t=(function(i,s,r,a){var o=v0;!a&&wa(i)&&(r=0|(s=i.A)[Me]);var l=ls(s,2);if(i=!1,l==null){if(a)return qg();l=[]}else if(l.constructor===os){if(!(2&l.M)||a)return l;l=l.ea()}else Array.isArray(l)?i=!!(2&l[Me]):l=[];if(a){if(!l.length)return qg();i||(i=!0,No(l))}else i&&(i=!1,To(l),l=Dx(l));return!i&&32&r&&Lo(l,32),r=Wt(s,r,2,a=new os(l,o,XS,void 0)),i||Gs(s,r),a})(this,t,e,n),!n&&v0&&(t.Fa=!0),t}});rn[458105876]=[0,K1,w3,[!0,Et,[0,ie,-1,dn]],[0,Ta,$e,we],$e];var hp=class extends ge{constructor(t){super(t)}},Z1=Xi(458105758,hp);rn[458105758]=[0,Xt,ie,K1];var sw=class extends ge{constructor(t){super(t)}},rw=class extends ge{constructor(t){super(t)}},aw=class extends ge{constructor(t){super(t)}},ow=tp([0,Mt,[0,fh,Mt,[0,x1,-1],Bs]]),qd=class extends ge{constructor(t){super(t)}},_0=[0,x1,-1,Bs],lw=class extends ge{constructor(t){super(t)}},j1=class extends ge{constructor(t){super(t)}},uf=[1,2];j1.prototype.g=Vo([0,uf,tt,_0,tt,[0,Mt,_0]]);var J1=class extends ge{constructor(t){super(t)}},cw=Xi(443442058,J1);rn[443442058]=[0,Xt,ie,it,zt,dn,-1,$e,zt],rn[514774813]=cp;var Q1=class extends ge{constructor(t){super(t)}},hw=Xi(516587230,Q1);function df(t,e){return e=e?e.clone():new sp,t.displayNamesLocale!==void 0?He(e,1,ss(t.displayNamesLocale)):t.displayNamesLocale===void 0&&He(e,1),t.maxResults!==void 0?Vi(e,2,t.maxResults):"maxResults"in t&&He(e,2),t.scoreThreshold!==void 0?Pe(e,3,t.scoreThreshold):"scoreThreshold"in t&&He(e,3),t.categoryAllowlist!==void 0?Mh(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&He(e,4),t.categoryDenylist!==void 0?Mh(e,5,t.categoryDenylist):"categoryDenylist"in t&&He(e,5),e}function ev(t){var e=Number(t);return Number.isSafeInteger(e)?e:String(t)}function up(t,e=-1,n=""){return{categories:t.map(i=>({index:ii(i,1)??0??-1,score:Gt(i,2)??0,categoryName:fn(Bt(i,3))??""??"",displayName:fn(Bt(i,4))??""??""})),headIndex:e,headName:n}}function uw(t){var e={classifications:cs(t,V3,1).map(n=>up(ht(n,C1,4)?.g()??[],ii(n,2)??0,fn(Bt(n,3))??""))};return(function(n){return n==null?n:typeof n=="bigint"?(Qd(n)?n=Number(n):(n=mr(64,n),n=Qd(n)?Number(n):String(n)),n):Ma(n)?typeof n=="number"?Bh(n):_h(n):void 0})(Bt(t,2,void 0,yh))!=null&&(e.timestampMs=ev(Bt(t,2,void 0,yh)??Px)),e}function tv(t){var e=fr(t,3,mi,dr()),n=fr(t,2,wr,dr()),i=fr(t,1,fn,dr()),s=fr(t,9,fn,dr()),r={categories:[],keypoints:[]};for(let a=0;a<e.length;a++)r.categories.push({score:e[a],index:n[a]??-1,categoryName:i[a]??"",displayName:s[a]??""});if((e=ht(t,$d,4)?.j())&&(r.boundingBox={originX:ii(e,1,Ds)??0,originY:ii(e,2,Ds)??0,width:ii(e,3,Ds)??0,height:ii(e,4,Ds)??0,angle:0}),ht(t,$d,4)?.g().length)for(let a of ht(t,$d,4).g())r.keypoints.push({x:Bt(a,1,Ds,mi)??0,y:Bt(a,2,Ds,mi)??0,score:Bt(a,4,Ds,mi)??0,label:fn(Bt(a,3,Ds))??""});return r}function tu(t){var e=[];for(let n of cs(t,L1,1))e.push({x:Gt(n,1)??0,y:Gt(n,2)??0,z:Gt(n,3)??0,visibility:Gt(n,4)??0});return e}function Eo(t){var e=[];for(let n of cs(t,P1,1))e.push({x:Gt(n,1)??0,y:Gt(n,2)??0,z:Gt(n,3)??0,visibility:Gt(n,4)??0});return e}function y0(t){return Array.from(t,e=>e>127?e-256:e)}function b0(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);var n=0,i=0,s=0;for(let r=0;r<t.length;r++)n+=t[r]*e[r],i+=t[r]*t[r],s+=e[r]*e[r];if(i<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*s)}rn[516587230]=[0,Xt,cp,hf,zt],rn[518928384]=hf;var ah,dw=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function nv(t){if(t)return!0;if(ah===void 0)try{await WebAssembly.instantiate(dw),ah=!0}catch{ah=!1}return ah}async function oh(t,e,n){return{wasmLoaderPath:`${e}/${t}_${n=`wasm${n?"_module":""}${await nv(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var ur=class{};function M0(t){return He(new ff,1,rs(t))}ur.forVisionTasks=function(t,e=!1){return oh("vision",t??rh``,e)},ur.forTextTasks=function(t,e=!1){return oh("text",t??rh``,e)},ur.forGenAiTasks=function(t,e=!1){return oh("genai",t??rh``,e)},ur.forAudioTasks=function(t,e=!1){return oh("audio",t??rh``,e)},ur.isSimdSupported=function(t=!1){return nv(t)};var ff=class extends ge{constructor(t){super(t)}},fw=class extends ge{constructor(t){super(t)}},S0=[0,we,2,Rh,-2,Et,Mt,[0,we,Et]],pw=class extends ge{constructor(t){super(t)}},mw=class extends ge{constructor(t){super(t)}};function pf(t,e){return He(t,1,rs(e))}function mf(t,e){return He(t,2,rs(e))}var gf=class extends ge{constructor(t){super(t)}},Lh=[3,4,5,6,7],gw=class extends ge{constructor(t){super(t)}},iv=class extends ge{constructor(t){super(t)}};iv.prototype.g=Vo([0,[0,we,ie,-3,we],[0,Lh,we,-1,tt,[0,we,ie,Rh],tt,S0,tt,[0,1,S0],tt,[0,we],tt,[0,we,ie,Rh]]]);var xw=class{constructor(){this.g=typeof AbortController<"u"}async send(t,e,n){var i=this.g?new AbortController:void 0,s=i&&t.la>0?setTimeout(()=>{i.abort()},t.la):void 0;try{let r=await fetch(t.url,{method:t.bb,headers:{...t.ab},...t.body&&{body:t.body},...t.withCredentials&&{credentials:"include"},signal:t.la&&i?i.signal:null});r.status===200?e?.(await r.text()):n?.(r.status)}catch(r){r?.name==="AbortError"?n?.(408):n?.(400)}finally{clearTimeout(s)}}},vw=class extends ge{constructor(t){super(t,37)}},w0=[-4,{},L3,we,P3],E0=[0,ie,we,1,ie,-1,we,1,we,1,Et],A0=[0,we,ie,-2],T0=[0,ie,we],C0=[0,ie,we],R0=[0,$e,-3],I0=[0,we,ie,-1,Et,it,-1,ie,-5,Mt,[0,ie,-4],-1,$e,[0,$e,-3],we],_w=class extends ge{constructor(t){super(t,19)}},yw=tp([-19,{},[0,we,1,[0,ie,-6,Et,it,ie,-1,Et],1,[0,ie,1,ie,-5],ie,-1,[0,we,ie,-8],[0,ie,-3],[0,ie,we,ie,-2],[0,ie,-1,we,ie,-1,we,ie,-1,[0,Mt,[0,ie,-1],$e,ie,-5],[0,we,$e,it,-2]],Et,[0,ie,-3,Et,it,ie,-1],[0,we,ie,-1],[0,ie,-9],[0,ie,-6,we,ie,1,ie,$e,we,-1,$e,ie,-2,we,ie,we,ie,it,-1],1,[0,we],1,[0,ie,-4],1,E0,[0,[1,2,3,4,5,6],tt,E0,tt,T0,tt,C0,tt,[0,we],tt,I0,tt,A0],T0,C0,I0,[0,[0,we,ie,-1,Et,it,-1,ie,-4,Mt,[0,ie,-4],-1,1,R0],[0,we,ie,-1,Et,it,-1,ie,-4,R0]],A0,[0,ie,[0,it,-3,we],we,-2,[0,it,-1],$e],4,[0,ie,we,ie,-1,Et,we,ie,-1,we,it,-1]],we,Mt,[-37,{},_o,ie,Mt,[0,ie,-1],oa,1,oa,[0,dn,-1,a0,A3,-1],ie,[0,it,ie,-1],$e,it,Et,ie,-1,R3,I3,_o,oa,we,a0,Et,-1,[0,we,-1],ie,$e,ie,Ta,ie,-1,r0,1,r0,w0,$e,[0,we,[0,zt,it,-2],[0,zt]],[0,we,Et]],_o,v1,ie,-1,_o,we,-1,[0,$e,-1,we,$e],[0,Et,-1,ie],[0,_o,$e,Et],Et,1,_1,1,w0]),bw=class{constructor(t){this.h=[],this.m=new xw,this.j=t??"",this.g=setInterval(()=>{this.flush()},6e4)}close(){this.g!==void 0&&(clearInterval(this.g),this.g=void 0),this.flush()}flush(t,e){if(this.error)e?.("net-send-failed");else if(this.h.length===0)t?.();else{var n=this.h;this.h=[],n=(function(i){var s=new _w;return sf(s=He(s,2,rs(1786)),3,i)})(n),n=yw(n),this.m.send({url:"https://odml.pa.googleapis.com/v1/log",bb:"POST",la:1e4,body:n,hb:2,ab:{"Content-Type":"application/x-protobuf","x-goog-api-key":this.j},withCredentials:!1},()=>{t?.()},i=>{this.error=Error(`Logging failed with HTTP error: ${i}`),this.h=[],this.g!==void 0&&(clearInterval(this.g),this.g=void 0),e?.("net-send-failed",i)})}}},Nh=class{constructor(){this.aa=this.U=this.X=this.R=this.V=this.T=this.P=0}};function xf(t,e){var n=new iv;n=Le(n,0,1,t.B),n=Le(n,0,2,e),e=He(e=new vw,6,Uh(n=n.g(),!1)),(t=t.l).error||t.h.push(e)}function P0(t,e){var n={P:e.P-t.j.P,T:e.T-t.j.T,V:e.V-t.j.V,R:e.R-t.j.R,X:e.X-t.j.X,U:e.U,aa:e.aa},i=mf(pf(new gf,t.C),1);n=sv(t,n),xf(t,i=zi(i,4,Lh,n)),t.j=e}function sv(t,e){var n=new fw;return t=hh(t=Gd(t=He(n,1,rs(t.D)),7,e.R),5,e.U),t=hh(t,6,e.aa),e.V>0&&hh(t,4,e.X/e.V),e.P!==0&&(n=Gd(n=M0(3),2,e.P),Ro(t,8,ff,n)),e.T!==0&&(e=Gd(n=M0(4),2,e.T),Ro(t,8,ff,e)),t}var Mw=class{constructor(t,e,n){this.u=performance.now(),this.m=performance.now(),this.h=new Map,this.o=0,this.g=new Nh,this.j=new Nh,this.l=new bw(n),this.C=(function(i){switch(i){case"AudioClassifier":return 4;case"AudioEmbedder":return 5;case"TextClassifier":return 6;case"TextEmbedder":return 7;case"GestureRecognizer":return 8;case"HandDetector":return 9;case"HandLandmarker":return 10;case"ImageClassifier":return 11;case"ImageEmbedder":return 12;case"ImageSegmenter":return 13;case"ObjectDetector":return 14;case"FaceDetector":return 15;case"FaceLandmarker":return 16;case"InteractiveSegmenter":case"InteractiveSegmenterLegacy":return 18;case"HolisticLandmarker":return 20;case"LlmInference":return 21;case"LanguageDetector":return 22;case"PoseLandmarker":return 23;default:return 0}})(t),this.D=(function(i){switch(i){case"IMAGE":return 11;case"VIDEO":return 12;case"LIVE_STREAM":return 13;case"AUDIO_CLIPS":return 14;case"AUDIO_STREAM":return 15;default:return 10}})(e),t=new gw,typeof window>"u"?e=0:(e=navigator.userAgent,e=/Android/i.test(e)?1:/iPhone|iPad|iPod/i.test(e)?2:/Windows/i.test(e)?5:/Macintosh/i.test(e)?4:/Linux/i.test(e)?3:0),t=He(t,1,rs(e)),t=He(t,2,ss("")),t=He(t,3,ss("")),t=He(t,4,ss("1.0.1")),t=He(t,5,ss("")),this.B=He(t,6,rs(4))}ya(){var t=new mw;t=hh(t=He(t,1,rs(this.D)),3,performance.now()-this.u),xf(this,t=zi(mf(pf(new gf,this.C),0),3,Lh,t)),this.m=performance.now()}za(t){var e=this.h.get(t);if(e!==void 0&&(this.h.delete(t),t=performance.now()-e,++this.g.V,this.g.X+=t,this.g.U=Math.max(this.g.U,t),this.o=Math.max(this.o,t),performance.now()>this.m+3e4)){for(let[n,i]of this.h.entries())t=n,i<e&&(this.g.R++,this.h.delete(t));e={...this.g,aa:performance.now()-this.m},this.g.U=0,this.m=performance.now(),P0(this,e)}}xa(){var t={...this.g,R:this.g.R+this.h.size,U:this.o,aa:performance.now()-this.u};P0(this,t);var e=new pw;e=Le(e,0,2,t=sv(this,t)),xf(this,e=zi(t=mf(pf(new gf,this.C),2),5,Lh,e))}close(){var t=this.l;typeof t.close=="function"?t.close():t.flush()}};function dp(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function L0(t){if(typeof importScripts!="function"){let e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise((n,i)=>{e.addEventListener("load",()=>{n()},!1),e.addEventListener("error",s=>{i(s)},!1),document.body.appendChild(e)})}try{importScripts(t.toString())}catch(e){if(!(e instanceof TypeError))throw e;{let n=self.import;n?await n(t.toString()):await import(t.toString())}}}function fp(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function Re(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function rv(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);var[i,s]=fp(e);return!t.j||i===t.i.canvas.width&&s===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=s),[i,s]}function N0(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");var i=new Uint32Array(e.length);for(let s=0;s<e.length;s++)i[s]=t.i.stringToNewUTF8(e[s]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(let s of i)t.i._free(s);t.i._free(e)}function Ui(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function Us(t,e,n){var i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(s,r,a)=>{r?(n(i,a),i=[]):i.push(s)}}var av=class{constructor(t,e){this.j=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:dp()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){var e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){var n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,s){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Re(this,i||"input_audio",r=>{Re(this,s=s||"audio_header",a=>{this.i._configureAudio(r,a,t,e??0,n)})})}setAutoResizeCanvas(t){this.j=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ja(t){Ui(this,"__graph_config__",e=>{t(e)}),Re(this,"__graph_config__",e=>{this.i._getGraphConfig(e,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,s){var r=4*t.length;this.h!==r&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(r),this.h=r),this.i.HEAPF32.set(t,this.g/4),Re(this,i,a=>{this.i._addAudioToInputStream(this.g,e,n,a,s)})}addGpuBufferToStream(t,e,n){Re(this,e,i=>{var[s,r]=rv(this,t,i);this.i._addBoundTextureToStream(i,s,r,n)})}addBoolToStream(t,e,n){Re(this,e,i=>{this.i._addBoolToInputStream(t,i,n)})}addDoubleToStream(t,e,n){Re(this,e,i=>{this.i._addDoubleToInputStream(t,i,n)})}addFloatToStream(t,e,n){Re(this,e,i=>{this.i._addFloatToInputStream(t,i,n)})}addIntToStream(t,e,n){Re(this,e,i=>{this.i._addIntToInputStream(t,i,n)})}addUintToStream(t,e,n){Re(this,e,i=>{this.i._addUintToInputStream(t,i,n)})}addStringToStream(t,e,n){Re(this,e,i=>{Re(this,t,s=>{this.i._addStringToInputStream(s,i,n)})})}addStringRecordToStream(t,e,n){Re(this,e,i=>{N0(this,Object.keys(t),s=>{N0(this,Object.values(t),r=>{this.i._addFlatHashMapToInputStream(s,r,Object.keys(t).length,i,n)})})})}addProtoToStream(t,e,n,i){Re(this,n,s=>{Re(this,e,r=>{var a=this.i._malloc(t.length);this.i.HEAPU8.set(t,a),this.i._addProtoToInputStream(a,t.length,r,s,i),this.i._free(a)})})}addEmptyPacketToStream(t,e){Re(this,t,n=>{this.i._addEmptyPacketToInputStream(n,e)})}addBoolVectorToStream(t,e,n){Re(this,e,i=>{var s=this.i._allocateBoolVector(t.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(let r of t)this.i._addBoolVectorEntry(s,r);this.i._addBoolVectorToInputStream(s,i,n)})}addDoubleVectorToStream(t,e,n){Re(this,e,i=>{var s=this.i._allocateDoubleVector(t.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(let r of t)this.i._addDoubleVectorEntry(s,r);this.i._addDoubleVectorToInputStream(s,i,n)})}addFloatVectorToStream(t,e,n){Re(this,e,i=>{var s=this.i._allocateFloatVector(t.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(let r of t)this.i._addFloatVectorEntry(s,r);this.i._addFloatVectorToInputStream(s,i,n)})}addIntVectorToStream(t,e,n){Re(this,e,i=>{var s=this.i._allocateIntVector(t.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(let r of t)this.i._addIntVectorEntry(s,r);this.i._addIntVectorToInputStream(s,i,n)})}addUintVectorToStream(t,e,n){Re(this,e,i=>{var s=this.i._allocateUintVector(t.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(let r of t)this.i._addUintVectorEntry(s,r);this.i._addUintVectorToInputStream(s,i,n)})}addStringVectorToStream(t,e,n){Re(this,e,i=>{var s=this.i._allocateStringVector(t.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(let r of t)Re(this,r,a=>{this.i._addStringVectorEntry(s,a)});this.i._addStringVectorToInputStream(s,i,n)})}addBoolToInputSidePacket(t,e){Re(this,e,n=>{this.i._addBoolToInputSidePacket(t,n)})}addDoubleToInputSidePacket(t,e){Re(this,e,n=>{this.i._addDoubleToInputSidePacket(t,n)})}addFloatToInputSidePacket(t,e){Re(this,e,n=>{this.i._addFloatToInputSidePacket(t,n)})}addIntToInputSidePacket(t,e){Re(this,e,n=>{this.i._addIntToInputSidePacket(t,n)})}addUintToInputSidePacket(t,e){Re(this,e,n=>{this.i._addUintToInputSidePacket(t,n)})}addStringToInputSidePacket(t,e){Re(this,e,n=>{Re(this,t,i=>{this.i._addStringToInputSidePacket(i,n)})})}addProtoToInputSidePacket(t,e,n){Re(this,n,i=>{Re(this,e,s=>{var r=this.i._malloc(t.length);this.i.HEAPU8.set(t,r),this.i._addProtoToInputSidePacket(r,t.length,s,i),this.i._free(r)})})}addBoolVectorToInputSidePacket(t,e){Re(this,e,n=>{var i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(let s of t)this.i._addBoolVectorEntry(i,s);this.i._addBoolVectorToInputSidePacket(i,n)})}addDoubleVectorToInputSidePacket(t,e){Re(this,e,n=>{var i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(let s of t)this.i._addDoubleVectorEntry(i,s);this.i._addDoubleVectorToInputSidePacket(i,n)})}addFloatVectorToInputSidePacket(t,e){Re(this,e,n=>{var i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(let s of t)this.i._addFloatVectorEntry(i,s);this.i._addFloatVectorToInputSidePacket(i,n)})}addIntVectorToInputSidePacket(t,e){Re(this,e,n=>{var i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(let s of t)this.i._addIntVectorEntry(i,s);this.i._addIntVectorToInputSidePacket(i,n)})}addUintVectorToInputSidePacket(t,e){Re(this,e,n=>{var i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(let s of t)this.i._addUintVectorEntry(i,s);this.i._addUintVectorToInputSidePacket(i,n)})}addStringVectorToInputSidePacket(t,e){Re(this,e,n=>{var i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(let s of t)Re(this,s,r=>{this.i._addStringVectorEntry(i,r)});this.i._addStringVectorToInputSidePacket(i,n)})}attachBoolListener(t,e){Ui(this,t,e),Re(this,t,n=>{this.i._attachBoolListener(n)})}attachBoolVectorListener(t,e){Us(this,t,e),Re(this,t,n=>{this.i._attachBoolVectorListener(n)})}attachIntListener(t,e){Ui(this,t,e),Re(this,t,n=>{this.i._attachIntListener(n)})}attachIntVectorListener(t,e){Us(this,t,e),Re(this,t,n=>{this.i._attachIntVectorListener(n)})}attachUintListener(t,e){Ui(this,t,e),Re(this,t,n=>{this.i._attachUintListener(n)})}attachUintVectorListener(t,e){Us(this,t,e),Re(this,t,n=>{this.i._attachUintVectorListener(n)})}attachDoubleListener(t,e){Ui(this,t,e),Re(this,t,n=>{this.i._attachDoubleListener(n)})}attachDoubleVectorListener(t,e){Us(this,t,e),Re(this,t,n=>{this.i._attachDoubleVectorListener(n)})}attachFloatListener(t,e){Ui(this,t,e),Re(this,t,n=>{this.i._attachFloatListener(n)})}attachFloatVectorListener(t,e){Us(this,t,e),Re(this,t,n=>{this.i._attachFloatVectorListener(n)})}attachStringListener(t,e){Ui(this,t,e),Re(this,t,n=>{this.i._attachStringListener(n)})}attachStringVectorListener(t,e){Us(this,t,e),Re(this,t,n=>{this.i._attachStringVectorListener(n)})}attachProtoListener(t,e,n){Ui(this,t,e),Re(this,t,i=>{this.i._attachProtoListener(i,n||!1)})}attachProtoVectorListener(t,e,n){Us(this,t,e),Re(this,t,i=>{this.i._attachProtoVectorListener(i,n||!1)})}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Ui(this,t,(i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,s)}),Re(this,t,i=>{this.i._attachAudioListener(i,n||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}};function ov(t){return class extends t{get pa(){return this.i}Sa(){if(typeof this.pa._mediapipeLoggerGetEncodedApiKey=="function"){let e=this.pa._mediapipeLoggerGetEncodedApiKey();return this.pa._decodeBase64(e)}}}}function lv(t){return class extends t{Za(){this.i._registerModelResourcesGraphService()}}}var Sw=ov(lv(av)),ww=class extends Sw{};async function Ew(t,e,n,i){return t=await(async(s,r,a,o,l)=>{if(r&&await L0(r),!self.ModuleFactory||a&&(await L0(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((r=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new s(l,o)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:s=>s.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&s.endsWith(".data")?n.assetBinaryPath.toString():s}),(function(s,r){r=r.runningMode??"";var a=s.g.Sa();s.m=new Mw(s.C(),r,a)})(t,i),await t.v(i),t}async function ph(t,e,n,i){return Ew(t,e,n,i)}function Yd(t,e){var n=ht(t.baseOptions,Ph,1)||new Ph;typeof e=="string"?(He(n,2,ss(e)),He(n,1)):e instanceof Uint8Array&&(He(n,1,Uh(e,!1)),He(n,2)),Le(t.baseOptions,0,1,n)}function F0(t){try{let e=t.K.length;if(e===1)throw Error(t.K[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.K.map(n=>n.message).join(", "))}finally{t.K=[]}}function be(t,e){t.I=Math.max(t.I,e)}function nu(t,e){t.D=new Dn,$n(t.D,2,"PassThroughCalculator"),Pt(t.D,"free_memory"),st(t.D,"free_memory_unused_out"),Ft(e,"free_memory"),ai(e,t.D)}function ga(t,e){Pt(t.D,e),st(t.D,e+"_unused_out")}function iu(t){t.g.addBoolToStream(!0,"free_memory",t.I)}var Fh=class{constructor(t){this.g=t,this.K=[],this.I=0,this.g.setAutoRenderToScreen(!1)}j(t,e=!0){if(e){let n=t.baseOptions||{};if(t.baseOptions?.modelAssetBuffer&&t.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(ht(this.baseOptions,Ph,1)?.g()||ht(this.baseOptions,Ph,1)?.j()||t.baseOptions?.modelAssetBuffer||t.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(i,s){var r=ht(i.baseOptions,Ih,3);if(!r){var a=r=new Ih,o=new u0;zi(a,4,vr,o)}"delegate"in s&&(s.delegate==="GPU"?(s=r,a=new np,zi(s,2,vr,a)):(s=r,a=new u0,zi(s,4,vr,a))),Le(i.baseOptions,0,3,r)})(this,n),n.modelAssetPath)return fetch(n.modelAssetPath.toString()).then(i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${n.modelAssetPath} (${i.status})`)}).then(i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),Yd(this,"/model.dat"),this.o(),this.L()});if(n.modelAssetBuffer instanceof Uint8Array)Yd(this,n.modelAssetBuffer);else if(n.modelAssetBuffer)return(async function(i){for(var s=[],r=0;;){let{done:a,value:o}=await i.read();if(a)break;s.push(o),r+=o.length}if(s.length===0)return new Uint8Array(0);if(s.length===1)return s[0];i=new Uint8Array(r),r=0;for(let a of s)i.set(a,r),r+=a.length;return i})(n.modelAssetBuffer).then(i=>{Yd(this,i),this.o(),this.L()})}return this.o(),this.L(),Promise.resolve()}L(){}ja(){var t;if(this.g.ja(e=>{t=D3(e)}),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener((n,i)=>{this.K.push(Error(i))}),this.g.Za(),this.g.setGraph(t,e),this.m?.ya(),this.D=void 0,F0(this)}finishProcessing(t){this.g.finishProcessing(),F0(this),this.m&&t!==void 0&&this.m.za(t)}close(){this.D=void 0,this.m?.xa(),this.m?.close(),this.g.closeGraph()}};function Mn(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}Fh.prototype.close=Fh.prototype.close;var vf=class{constructor(e,n,i,s){this.g=e,this.h=n,this.m=i,this.j=s}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.j)}};function D0(t,e,n){var i=t.g;if(n=Mn(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function U0(t,e){var n=t.g,i=Mn(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);var s=Mn(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.F),n.vertexAttribPointer(t.F,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);var r=Mn(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.K),n.vertexAttribPointer(t.K,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new vf(n,i,s,r)}function pp(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function Go(t,e,n,i){return pp(t,e),t.h||(t.m(),t.I()),n?(t.l||(t.l=U0(t,!0)),n=t.l):(t.D||(t.D=U0(t,!1)),n=t.D),e.useProgram(t.h),n.bind(),t.j(),t=i(),n.g.bindVertexArray(null),t}function Vs(t,e,n){return pp(t,e),t=Mn(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function su(t,e,n){pp(t,e),t.C||(t.C=Mn(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.C),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function mp(t){t.g?.bindFramebuffer(t.g.FRAMEBUFFER,null)}var Tr=class{B(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){var t=this.g;if(this.h=Mn(t.createProgram(),"Failed to create WebGL program"),this.da=D0(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.Z=D0(this,this.B(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.F=t.getAttribLocation(this.h,"aVertex"),this.K=t.getAttribLocation(this.h,"aTex")}I(){}j(){}close(){if(this.h){let t=this.g;t.deleteProgram(this.h),t.deleteShader(this.da),t.deleteShader(this.Z)}this.C&&this.g.deleteFramebuffer(this.C),this.D&&this.D.close(),this.l&&this.l.close()}},Aw=class extends Tr{B(){return`
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
 `}I(){var t=this.g;t.activeTexture(t.TEXTURE1),this.u=Vs(this,t,t.LINEAR),t.activeTexture(t.TEXTURE2),this.o=Vs(this,t,t.NEAREST)}m(){super.m();var t=this.g;this.O=Mn(t.getUniformLocation(this.h,"backgroundTexture"),"Uniform location"),this.Y=Mn(t.getUniformLocation(this.h,"colorMappingTexture"),"Uniform location"),this.L=Mn(t.getUniformLocation(this.h,"maskTexture"),"Uniform location")}j(){super.j();var t=this.g;t.uniform1i(this.L,0),t.uniform1i(this.O,1),t.uniform1i(this.Y,2)}close(){this.u&&this.g.deleteTexture(this.u),this.o&&this.g.deleteTexture(this.o),super.close()}},Tw=class extends Tr{B(){return`
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
 `}I(){var t=this.g;t.activeTexture(t.TEXTURE1),this.o=Vs(this,t),t.activeTexture(t.TEXTURE2),this.u=Vs(this,t)}m(){super.m();var t=this.g;this.L=Mn(t.getUniformLocation(this.h,"defaultTexture"),"Uniform location"),this.O=Mn(t.getUniformLocation(this.h,"overlayTexture"),"Uniform location"),this.J=Mn(t.getUniformLocation(this.h,"maskTexture"),"Uniform location")}j(){super.j();var t=this.g;t.uniform1i(this.J,0),t.uniform1i(this.L,1),t.uniform1i(this.O,2)}close(){this.o&&this.g.deleteTexture(this.o),this.u&&this.g.deleteTexture(this.u),super.close()}};function is(t,e){switch(e){case 0:return t.g.find(n=>n instanceof Uint8Array);case 1:return t.g.find(n=>n instanceof Float32Array);case 2:return t.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function _f(t){var e=is(t,1);if(!e){if(e=is(t,0))e=new Float32Array(e).map(i=>i/255);else{e=new Float32Array(t.width*t.height);let i=xa(t);var n=gp(t);if(su(n,i,cv(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let s=0,r=0;s<e.length;++s,r+=4)e[s]=n[r]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function cv(t){var e=is(t,2);if(!e){let n=xa(t);e=uv(t);let i=_f(t),s=hv(t);n.texImage2D(n.TEXTURE_2D,0,s,t.width,t.height,0,n.RED,n.FLOAT,i),yf(t)}return e}function xa(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=Mn(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function hv(t){if(t=xa(t),!lh)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))lh=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");lh=t.R16F}return lh}function gp(t){return t.j||(t.j=new Tr),t.j}function uv(t){var e=xa(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);var n=is(t,2);return n||(n=Vs(gp(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.o=!0),e.bindTexture(e.TEXTURE_2D,n),n}function yf(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var lh,Zt=class{constructor(t,e,n,i,s,r,a){this.g=t,this.m=e,this.o=n,this.canvas=i,this.j=s,this.width=r,this.height=a,this.o&&--O0===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ua(){return!!is(this,0)}ua(){return!!is(this,1)}W(){return!!is(this,2)}ta(){return(e=is(t=this,0))||(e=_f(t),e=new Uint8Array(e.map(n=>Math.round(255*n))),t.g.push(e)),e;var t,e}sa(){return _f(this)}S(){return cv(this)}clone(){var t=[];for(let e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{let i=xa(this),s=gp(this);i.activeTexture(i.TEXTURE1),n=Vs(s,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);let r=hv(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),su(s,i,n),Go(s,i,!1,()=>{uv(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),yf(this)}),mp(s),yf(this)}}t.push(n)}return new Zt(t,this.m,this.W(),this.canvas,this.j,this.width,this.height)}close(){this.o&&xa(this).deleteTexture(is(this,2)),O0=-1}};Zt.prototype.close=Zt.prototype.close,Zt.prototype.clone=Zt.prototype.clone,Zt.prototype.getAsWebGLTexture=Zt.prototype.S,Zt.prototype.getAsFloat32Array=Zt.prototype.sa,Zt.prototype.getAsUint8Array=Zt.prototype.ta,Zt.prototype.hasWebGLTexture=Zt.prototype.W,Zt.prototype.hasFloat32Array=Zt.prototype.ua,Zt.prototype.hasUint8Array=Zt.prototype.Ua;var O0=250,Cw={color:"white",lineWidth:4,radius:6};function Kd(t){return{...Cw,fillColor:(t=t||{}).color,...t}}function ts(t,e){return t instanceof Function?t(e):t}function k0(t,e,n){return Math.max(Math.min(e,n),Math.min(Math.max(e,n),t))}function yo(t){if(!t.j)throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");return t.j}function Po(t){if(!t.o)throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");return t.o}function B0(t,e,n){if(e.W())n(e.S());else{let i=e.ua()?e.sa():e.ta();t.m=t.m??new Tr;let s=Po(t);n((t=new Zt([i],e.m,!1,s.canvas,t.m,e.width,e.height)).S()),t.close()}}function z0(t,e,n,i){var s=(function(o){return o.g||(o.g=new Aw),o.g})(t),r=Po(t),a=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n;Go(s,r,!0,()=>{(function(l,c,u,d){var h=l.g;if(h.activeTexture(h.TEXTURE0),h.bindTexture(h.TEXTURE_2D,c),h.activeTexture(h.TEXTURE1),h.bindTexture(h.TEXTURE_2D,l.u),h.texImage2D(h.TEXTURE_2D,0,h.RGBA,h.RGBA,h.UNSIGNED_BYTE,u),l.J&&(function(f,g){if(f!==g)return!1;f=f.entries(),g=g.entries();for(let[v,m]of f){f=v;let p=m,E=g.next();if(E.done)return!1;let[R,y]=E.value;if(f!==R||p[0]!==y[0]||p[1]!==y[1]||p[2]!==y[2]||p[3]!==y[3])return!1}return!!g.next().done})(l.J,d))h.activeTexture(h.TEXTURE2),h.bindTexture(h.TEXTURE_2D,l.o);else{l.J=d;let f=Array(1024).fill(0);d.forEach((g,v)=>{if(g.length!==4)throw Error(`Color at index ${v} is not a four-channel value.`);f[4*v]=g[0],f[4*v+1]=g[1],f[4*v+2]=g[2],f[4*v+3]=g[3]}),h.activeTexture(h.TEXTURE2),h.bindTexture(h.TEXTURE_2D,l.o),h.texImage2D(h.TEXTURE_2D,0,h.RGBA,256,1,0,h.RGBA,h.UNSIGNED_BYTE,new Uint8Array(f))}})(s,e,a,i),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4);var o=s.g;o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,null),o.activeTexture(o.TEXTURE1),o.bindTexture(o.TEXTURE_2D,null),o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,null)})}function V0(t,e,n,i){var s=Po(t),r=(function(l){return l.h||(l.h=new Tw),l.h})(t),a=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n,o=Array.isArray(i)?new ImageData(new Uint8ClampedArray(i),1,1):i;Go(r,s,!0,()=>{var l=r.g;l.activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,e),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,r.o),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,a),l.activeTexture(l.TEXTURE2),l.bindTexture(l.TEXTURE_2D,r.u),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,o),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLE_FAN,0,4),s.bindTexture(s.TEXTURE_2D,null),(l=r.g).activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,null),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,null),l.activeTexture(l.TEXTURE2),l.bindTexture(l.TEXTURE_2D,null)})}var Rn=class{constructor(t,e){typeof CanvasRenderingContext2D<"u"&&t instanceof CanvasRenderingContext2D||t instanceof OffscreenCanvasRenderingContext2D?(this.j=t,this.o=e):this.o=t}Ma(t,e){if(t){var n=yo(this);e=Kd(e),n.save();var i=n.canvas,s=0;for(let r of t)n.fillStyle=ts(e.fillColor,{index:s,from:r}),n.strokeStyle=ts(e.color,{index:s,from:r}),n.lineWidth=ts(e.lineWidth,{index:s,from:r}),(t=new Path2D).arc(r.x*i.width,r.y*i.height,ts(e.radius,{index:s,from:r}),0,2*Math.PI),n.fill(t),n.stroke(t),++s;n.restore()}}La(t,e,n){if(t&&e){var i=yo(this);n=Kd(n),i.save();var s=i.canvas,r=0;for(let a of e){i.beginPath(),e=t[a.start];let o=t[a.end];e&&o&&(i.strokeStyle=ts(n.color,{index:r,from:e,to:o}),i.lineWidth=ts(n.lineWidth,{index:r,from:e,to:o}),i.moveTo(e.x*s.width,e.y*s.height),i.lineTo(o.x*s.width,o.y*s.height)),++r,i.stroke()}i.restore()}}Ia(t,e){var n=yo(this);e=Kd(e),n.save(),n.beginPath(),n.lineWidth=ts(e.lineWidth,{}),n.strokeStyle=ts(e.color,{}),n.fillStyle=ts(e.fillColor,{}),n.moveTo(t.originX,t.originY),n.lineTo(t.originX+t.width,t.originY),n.lineTo(t.originX+t.width,t.originY+t.height),n.lineTo(t.originX,t.originY+t.height),n.lineTo(t.originX,t.originY),n.stroke(),n.fill(),n.restore()}Ja(t,e,n=[0,0,0,255]){this.j?(function(i,s,r,a){var o=Po(i);B0(i,s,l=>{z0(i,l,r,a),(l=yo(i)).drawImage(o.canvas,0,0,l.canvas.width,l.canvas.height)})})(this,t,n,e):z0(this,t.S(),n,e)}Ka(t,e,n){this.j?(function(i,s,r,a){var o=Po(i);B0(i,s,l=>{V0(i,l,r,a),(l=yo(i)).drawImage(o.canvas,0,0,l.canvas.width,l.canvas.height)})})(this,t,e,n):V0(this,t.S(),e,n)}close(){this.g?.close(),this.g=void 0,this.h?.close(),this.h=void 0,this.m?.close(),this.m=void 0}};function Oi(t,e){switch(e){case 0:return t.g.find(n=>n instanceof ImageData);case 1:return t.g.find(n=>typeof ImageBitmap<"u"&&n instanceof ImageBitmap);case 2:return t.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function dv(t){var e=Oi(t,0);if(!e){e=va(t);let n=ru(t),i=new Uint8Array(t.width*t.height*4);su(n,e,mh(t)),e.readPixels(0,0,t.width,t.height,e.RGBA,e.UNSIGNED_BYTE,i),mp(n),e=new ImageData(new Uint8ClampedArray(i.buffer),t.width,t.height),t.g.push(e)}return e}function mh(t){var e=Oi(t,2);if(!e){let n=va(t);e=gh(t);let i=Oi(t,1)||dv(t);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),Mo(t)}return e}function va(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=Mn(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function ru(t){return t.j||(t.j=new Tr),t.j}function gh(t){var e=va(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);var n=Oi(t,2);return n||(n=Vs(ru(t),e),t.g.push(n),t.m=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Mo(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}function H0(t){var e=va(t);return Go(ru(t),e,!0,()=>(function(n,i){var s=n.canvas;if(s.width===n.width&&s.height===n.height)return i();var r=s.width,a=s.height;return s.width=n.width,s.height=n.height,n=i(),s.width=r,s.height=a,n})(t,()=>{if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),!(t.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return t.canvas.transferToImageBitmap()}))}Rn.prototype.close=Rn.prototype.close,Rn.prototype.drawConfidenceMask=Rn.prototype.Ka,Rn.prototype.drawCategoryMask=Rn.prototype.Ja,Rn.prototype.drawBoundingBox=Rn.prototype.Ia,Rn.prototype.drawConnectors=Rn.prototype.La,Rn.prototype.drawLandmarks=Rn.prototype.Ma,Rn.lerp=function(t,e,n,i,s){return k0(i*(1-(t-e)/(n-e))+s*(1-(n-t)/(n-e)),i,s)},Rn.clamp=k0;var un=class{constructor(t,e,n,i,s,r,a){this.g=t,this.o=e,this.m=n,this.canvas=i,this.j=s,this.width=r,this.height=a,(this.o||this.m)&&--G0===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ta(){return!!Oi(this,0)}va(){return!!Oi(this,1)}W(){return!!Oi(this,2)}Qa(){return dv(this)}Pa(){var t=Oi(this,1);return t||(mh(this),gh(this),t=H0(this),Mo(this),this.g.push(t),this.o=!0),t}S(){return mh(this)}clone(){var t=[];for(let e of this.g){let n;if(e instanceof ImageData)n=new ImageData(e.data,this.width,this.height);else if(e instanceof WebGLTexture){let i=va(this),s=ru(this);i.activeTexture(i.TEXTURE1),n=Vs(s,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),su(s,i,n),Go(s,i,!1,()=>{gh(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Mo(this)}),mp(s),Mo(this)}else{if(!(e instanceof ImageBitmap))throw Error(`Type is not supported: ${e}`);mh(this),gh(this),n=H0(this),Mo(this)}t.push(n)}return new un(t,this.va(),this.W(),this.canvas,this.j,this.width,this.height)}close(){this.o&&Oi(this,1).close(),this.m&&va(this).deleteTexture(Oi(this,2)),G0=-1}};un.prototype.close=un.prototype.close,un.prototype.clone=un.prototype.clone,un.prototype.getAsWebGLTexture=un.prototype.S,un.prototype.getAsImageBitmap=un.prototype.Pa,un.prototype.getAsImageData=un.prototype.Qa,un.prototype.hasWebGLTexture=un.prototype.W,un.prototype.hasImageBitmap=un.prototype.va,un.prototype.hasImageData=un.prototype.Ta;var G0=250;function gi(...t){return t.map(([e,n])=>({start:e,end:n}))}var W0,Rw=lv((W0=ov(av),class extends W0{get oa(){return this.i}Da(t,e,n){Re(this,e,i=>{var[s,r]=rv(this,t,i);this.oa._addBoundTextureAsImageToStream(i,s,r,n)})}ga(t,e){Ui(this,t,e),Re(this,t,n=>{this.oa._attachImageListener(n)})}ha(t,e){Us(this,t,e),Re(this,t,n=>{this.oa._attachImageVectorListener(n)})}})),xi=class extends Rw{};async function lt(t,e,n){return ph(t,n.canvas??(dp()?void 0:document.createElement("canvas")),e,n)}function fv(t,e,n,i){if(t.m&&i!==void 0)if(ht(t.baseOptions,Ih,3)?.g()){var s=t.m;++s.g.T,s.h.set(i,performance.now())}else++(s=t.m).g.P,s.h.set(i,performance.now());if(t.qa){if(s=new N1,n?.regionOfInterest){if(!t.Ca)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Pe(s,1,(r.left+r.right)/2),Pe(s,2,(r.top+r.bottom)/2),Pe(s,4,r.right-r.left),Pe(s,3,r.bottom-r.top)}else Pe(s,1,.5),Pe(s,2,.5),Pe(s,4,1),Pe(s,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90\xB0.");if(Pe(s,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){let[a,o]=fp(e);n=Gt(s,3)*o/a,r=Gt(s,4)*a/o,Pe(s,4,n),Pe(s,3,r)}}t.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",t.qa,i)}t.g.Da(e,t.Ba,i??performance.now()),t.finishProcessing(i)}function vi(t,e,n){if(t.J)throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");fv(t,e,n,t.I+1)}function $i(t,e,n,i){if(!t.J)throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");fv(t,e,n,i)}function _a(t,e,n,i){var s=e.data,r=e.width,a=r*(e=e.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==a)throw Error("Unsupported channel count: "+s.length/a);return t=new Zt([s],n,!1,t.g.i.canvas,t.da,r,e),i?t.clone():t}var qn=class extends Fh{constructor(t,e,n,i){super(t),this.g=t,this.Ba=e,this.qa=n,this.Ca=i,this.da=new Tr,this.J=!1}j(t,e=!0){if("runningMode"in t){var n=this.J=!!t.runningMode&&t.runningMode!=="IMAGE";He(this.baseOptions,2,n==null?n:vh(n))}if(t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.j(t,e)}close(){this.da.close(),super.close()}};qn.prototype.close=qn.prototype.close;var ei=class extends qn{constructor(t,e){super(new xi(t,e),"image_in","norm_rect_in",!1),this.l={detections:[]},Le(t=this.h=new eu,0,1,e=new Dt),Pe(this.h,2,.5),Pe(this.h,3,.3)}C(){return"FaceDetector"}get baseOptions(){return ht(this.h,Dt,1)}set baseOptions(t){Le(this.h,0,1,t)}v(t){return"minDetectionConfidence"in t&&Pe(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&Pe(this.h,3,t.minSuppressionThreshold??.3),this.j(t)}G(t,e){return this.l={detections:[]},vi(this,t,e),this.l}H(t,e,n){return this.l={detections:[]},$i(this,t,n,e),this.l}o(){var t=new Kn;Ft(t,"image_in"),Ft(t,"norm_rect_in"),dt(t,"detections");var e=new Yn;Wi(e,Y3,this.h);var n=new Dn;$n(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Pt(n,"IMAGE:image_in"),Pt(n,"NORM_RECT:norm_rect_in"),st(n,"DETECTIONS:detections"),n.v(e),ai(t,n),this.g.attachProtoVectorListener("detections",(i,s)=>{for(let r of i)i=I1(r),this.l.detections.push(tv(i));be(this,s)}),this.g.attachEmptyPacketListener("detections",i=>{be(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ei.prototype.detectForVideo=ei.prototype.H,ei.prototype.detect=ei.prototype.G,ei.prototype.setOptions=ei.prototype.v,ei.createFromModelPath=async function(t,e){return lt(ei,t,{baseOptions:{modelAssetPath:e}})},ei.createFromModelBuffer=function(t,e){return lt(ei,t,{baseOptions:{modelAssetBuffer:e}})},ei.createFromOptions=function(t,e){return lt(ei,t,e)};var xp=gi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),vp=gi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),_p=gi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),pv=gi([474,475],[475,476],[476,477],[477,474]),yp=gi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),bp=gi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),mv=gi([469,470],[470,471],[471,472],[472,469]),Mp=gi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),gv=[...xp,...vp,..._p,...yp,...bp,...Mp],xv=gi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function X0(t){t.l={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var ct=class extends qn{constructor(t,e){super(new xi(t,e),"image_in","norm_rect",!1),this.l={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Le(t=this.h=new O1,0,1,e=new Dt),this.B=new U1,Le(this.h,0,3,this.B),this.u=new eu,Le(this.h,0,2,this.u),Vi(this.u,4,1),Pe(this.u,2,.5),Pe(this.B,2,.5),Pe(this.h,4,.5)}C(){return"FaceLandmarker"}get baseOptions(){return ht(this.h,Dt,1)}set baseOptions(t){Le(this.h,0,1,t)}v(t){return"numFaces"in t&&Vi(this.u,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&Pe(this.u,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&Pe(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&Pe(this.B,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.j(t)}G(t,e){return X0(this),vi(this,t,e),this.l}H(t,e,n){return X0(this),$i(this,t,n,e),this.l}o(){var t=new Kn;Ft(t,"image_in"),Ft(t,"norm_rect"),dt(t,"face_landmarks");var e=new Yn;Wi(e,Z3,this.h);var n=new Dn;$n(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Pt(n,"IMAGE:image_in"),Pt(n,"NORM_RECT:norm_rect"),st(n,"NORM_LANDMARKS:face_landmarks"),n.v(e),ai(t,n),this.g.attachProtoVectorListener("face_landmarks",(i,s)=>{for(let r of i)i=Ho(r),this.l.faceLandmarks.push(tu(i));be(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{be(this,i)}),this.outputFaceBlendshapes&&(dt(t,"blendshapes"),st(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,s)=>{if(this.outputFaceBlendshapes)for(let r of i)i=Qh(r),this.l.faceBlendshapes.push(up(i.g()??[]));be(this,s)}),this.g.attachEmptyPacketListener("blendshapes",i=>{be(this,i)})),this.outputFacialTransformationMatrixes&&(dt(t,"face_geometry"),st(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,s)=>{if(this.outputFacialTransformationMatrixes)for(let r of i)(i=ht(i=K3(r),B3,2))&&this.l.facialTransformationMatrixes.push({rows:ii(i,1)??0??0,columns:ii(i,2)??0??0,data:fr(i,3,mi,dr()).slice()??[]});be(this,s)}),this.g.attachEmptyPacketListener("face_geometry",i=>{be(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ct.prototype.detectForVideo=ct.prototype.H,ct.prototype.detect=ct.prototype.G,ct.prototype.setOptions=ct.prototype.v,ct.createFromModelPath=function(t,e){return lt(ct,t,{baseOptions:{modelAssetPath:e}})},ct.createFromModelBuffer=function(t,e){return lt(ct,t,{baseOptions:{modelAssetBuffer:e}})},ct.createFromOptions=function(t,e){return lt(ct,t,e)},ct.FACE_LANDMARKS_LIPS=xp,At("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LIPS",ct.FACE_LANDMARKS_LIPS),ct.FACE_LANDMARKS_LEFT_EYE=vp,At("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYE",ct.FACE_LANDMARKS_LEFT_EYE),ct.FACE_LANDMARKS_LEFT_EYEBROW=_p,At("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",ct.FACE_LANDMARKS_LEFT_EYEBROW),ct.FACE_LANDMARKS_LEFT_IRIS=pv,At("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS",ct.FACE_LANDMARKS_LEFT_IRIS),ct.FACE_LANDMARKS_RIGHT_EYE=yp,At("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE",ct.FACE_LANDMARKS_RIGHT_EYE),ct.FACE_LANDMARKS_RIGHT_EYEBROW=bp,At("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",ct.FACE_LANDMARKS_RIGHT_EYEBROW),ct.FACE_LANDMARKS_RIGHT_IRIS=mv,At("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS",ct.FACE_LANDMARKS_RIGHT_IRIS),ct.FACE_LANDMARKS_FACE_OVAL=Mp,At("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_FACE_OVAL",ct.FACE_LANDMARKS_FACE_OVAL),ct.FACE_LANDMARKS_CONTOURS=gv,At("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_CONTOURS",ct.FACE_LANDMARKS_CONTOURS),ct.FACE_LANDMARKS_TESSELATION=xv,At("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_TESSELATION",ct.FACE_LANDMARKS_TESSELATION);var Sp=gi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function $0(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function q0(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function Y0(t,e=!0){var n=[];for(let s of t){var i=Qh(s);t=[];for(let r of i.g())i=e&&ii(r,1)!=null?ii(r,1)??0:-1,t.push({score:Gt(r,2)??0,index:i,categoryName:fn(Bt(r,3))??""??"",displayName:fn(Bt(r,4))??""??""});n.push(t)}return n}var In=class extends qn{constructor(t,e){super(new xi(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Le(t=this.l=new z1,0,1,e=new Dt),this.u=new op,Le(this.l,0,2,this.u),this.F=new ap,Le(this.u,0,3,this.F),this.B=new B1,Le(this.u,0,2,this.B),this.h=new j3,Le(this.l,0,3,this.h),Pe(this.B,2,.5),Pe(this.u,4,.5),Pe(this.F,2,.5)}C(){return"GestureRecognizer"}get baseOptions(){return ht(this.l,Dt,1)}set baseOptions(t){Le(this.l,0,1,t)}v(t){if(Vi(this.B,3,t.numHands??1),"minHandDetectionConfidence"in t&&Pe(this.B,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Pe(this.u,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Pe(this.F,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new ra,n=e,i=df(t.cannedGesturesClassifierOptions,ht(this.h,ra,3)?.j());Le(n,0,2,i),Le(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&ht(this.h,ra,3)?.g();return t.customGesturesClassifierOptions?(Le(n=e=new ra,0,2,i=df(t.customGesturesClassifierOptions,ht(this.h,ra,4)?.j())),Le(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&ht(this.h,ra,4)?.g(),this.j(t)}Xa(t,e){return $0(this),vi(this,t,e),q0(this)}Ya(t,e,n){return $0(this),$i(this,t,n,e),q0(this)}o(){var t=new Kn;Ft(t,"image_in"),Ft(t,"norm_rect"),dt(t,"hand_gestures"),dt(t,"hand_landmarks"),dt(t,"world_hand_landmarks"),dt(t,"handedness");var e=new Yn;Wi(e,J3,this.l);var n=new Dn;$n(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Pt(n,"IMAGE:image_in"),Pt(n,"NORM_RECT:norm_rect"),st(n,"HAND_GESTURES:hand_gestures"),st(n,"LANDMARKS:hand_landmarks"),st(n,"WORLD_LANDMARKS:world_hand_landmarks"),st(n,"HANDEDNESS:handedness"),n.v(e),ai(t,n),this.g.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(let r of i){i=Ho(r);let a=[];for(let o of cs(i,L1,1))a.push({x:Gt(o,1)??0,y:Gt(o,2)??0,z:Gt(o,3)??0,visibility:Gt(o,4)??0});this.landmarks.push(a)}be(this,s)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{be(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(let r of i){i=la(r);let a=[];for(let o of cs(i,P1,1))a.push({x:Gt(o,1)??0,y:Gt(o,2)??0,z:Gt(o,3)??0,visibility:Gt(o,4)??0});this.worldLandmarks.push(a)}be(this,s)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{be(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,s)=>{this.gestures.push(...Y0(i,!1)),be(this,s)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{be(this,i)}),this.g.attachProtoVectorListener("handedness",(i,s)=>{this.handedness.push(...Y0(i)),be(this,s)}),this.g.attachEmptyPacketListener("handedness",i=>{be(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function K0(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}In.prototype.recognizeForVideo=In.prototype.Ya,In.prototype.recognize=In.prototype.Xa,In.prototype.setOptions=In.prototype.v,In.createFromModelPath=function(t,e){return lt(In,t,{baseOptions:{modelAssetPath:e}})},In.createFromModelBuffer=function(t,e){return lt(In,t,{baseOptions:{modelAssetBuffer:e}})},In.createFromOptions=function(t,e){return lt(In,t,e)},In.HAND_CONNECTIONS=Sp,At("module$exports$google3$third_party$mediapipe$tasks$web$vision$gesture_recognizer$gesture_recognizer.GestureRecognizer.HAND_CONNECTIONS",In.HAND_CONNECTIONS);var _n=class extends qn{constructor(t,e){super(new xi(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Le(t=this.h=new op,0,1,e=new Dt),this.u=new ap,Le(this.h,0,3,this.u),this.l=new B1,Le(this.h,0,2,this.l),Vi(this.l,3,1),Pe(this.l,2,.5),Pe(this.u,2,.5),Pe(this.h,4,.5)}C(){return"HandLandmarker"}get baseOptions(){return ht(this.h,Dt,1)}set baseOptions(t){Le(this.h,0,1,t)}v(t){return"numHands"in t&&Vi(this.l,3,t.numHands??1),"minHandDetectionConfidence"in t&&Pe(this.l,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Pe(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Pe(this.u,2,t.minHandPresenceConfidence??.5),this.j(t)}G(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],vi(this,t,e),K0(this)}H(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],$i(this,t,n,e),K0(this)}o(){var t=new Kn;Ft(t,"image_in"),Ft(t,"norm_rect"),dt(t,"hand_landmarks"),dt(t,"world_hand_landmarks"),dt(t,"handedness");var e=new Yn;Wi(e,Q3,this.h);var n=new Dn;$n(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Pt(n,"IMAGE:image_in"),Pt(n,"NORM_RECT:norm_rect"),st(n,"LANDMARKS:hand_landmarks"),st(n,"WORLD_LANDMARKS:world_hand_landmarks"),st(n,"HANDEDNESS:handedness"),n.v(e),ai(t,n),this.g.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(let r of i)i=Ho(r),this.landmarks.push(tu(i));be(this,s)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{be(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(let r of i)i=la(r),this.worldLandmarks.push(Eo(i));be(this,s)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{be(this,i)}),this.g.attachProtoVectorListener("handedness",(i,s)=>{var r=this.handedness,a=r.push,o=[];for(let l of i){i=Qh(l);let c=[];for(let u of i.g())c.push({score:Gt(u,2)??0,index:ii(u,1)??0??-1,categoryName:fn(Bt(u,3))??""??"",displayName:fn(Bt(u,4))??""??""});o.push(c)}a.call(r,...o),be(this,s)}),this.g.attachEmptyPacketListener("handedness",i=>{be(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};_n.prototype.detectForVideo=_n.prototype.H,_n.prototype.detect=_n.prototype.G,_n.prototype.setOptions=_n.prototype.v,_n.createFromModelPath=function(t,e){return lt(_n,t,{baseOptions:{modelAssetPath:e}})},_n.createFromModelBuffer=function(t,e){return lt(_n,t,{baseOptions:{modelAssetBuffer:e}})},_n.createFromOptions=function(t,e){return lt(_n,t,e)},_n.HAND_CONNECTIONS=Sp,At("module$exports$google3$third_party$mediapipe$tasks$web$vision$hand_landmarker$hand_landmarker.HandLandmarker.HAND_CONNECTIONS",_n.HAND_CONNECTIONS);var vv=gi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Z0(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function j0(t){try{if(!t.F)return t.h;t.F(t.h)}finally{iu(t)}}function ch(t,e){t=Ho(t),e.push(tu(t))}var Qe=class extends qn{constructor(t,e){super(new xi(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Le(t=this.l=new X1,0,1,e=new Dt),this.Y=new ap,Le(this.l,0,2,this.Y),this.Aa=new ew,Le(this.l,0,3,this.Aa),this.u=new eu,Le(this.l,0,4,this.u),this.O=new U1,Le(this.l,0,5,this.O),this.B=new G1,Le(this.l,0,6,this.B),this.Z=new W1,Le(this.l,0,7,this.Z),Pe(this.u,2,.5),Pe(this.u,3,.3),Pe(this.O,2,.5),Pe(this.B,2,.5),Pe(this.B,3,.3),Pe(this.Z,2,.5),Pe(this.Y,2,.5)}C(){return"HolisticLandmarker"}get baseOptions(){return ht(this.l,Dt,1)}set baseOptions(t){Le(this.l,0,1,t)}v(t){return"minFaceDetectionConfidence"in t&&Pe(this.u,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&Pe(this.u,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&Pe(this.O,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&Pe(this.B,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&Pe(this.B,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&Pe(this.Z,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&Pe(this.Y,2,t.minHandLandmarksConfidence??.5),this.j(t)}G(t,e,n){var i=typeof e!="function"?e:{};return this.F=typeof e=="function"?e:n,Z0(this),vi(this,t,i),j0(this)}H(t,e,n,i){var s=typeof n!="function"?n:{};return this.F=typeof n=="function"?n:i,Z0(this),$i(this,t,s,e),j0(this)}o(){var t=new Kn;Ft(t,"input_frames_image"),dt(t,"pose_landmarks"),dt(t,"pose_world_landmarks"),dt(t,"face_landmarks"),dt(t,"left_hand_landmarks"),dt(t,"left_hand_world_landmarks"),dt(t,"right_hand_landmarks"),dt(t,"right_hand_world_landmarks");var e=new Yn,n=new o0;$n(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(s,r){if(r!=null)if(Array.isArray(r))He(s,2,Vh(r,0,Co));else{if(!(typeof r=="string"||r instanceof ki||wf(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Uo(s,2,Uh(r,!1),yr())}})(n,this.l.g());var i=new Dn;$n(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Ro(i,8,o0,n),Pt(i,"IMAGE:input_frames_image"),st(i,"POSE_LANDMARKS:pose_landmarks"),st(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),st(i,"FACE_LANDMARKS:face_landmarks"),st(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),st(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),st(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),st(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.v(e),ai(t,i),nu(this,t),this.g.attachProtoListener("pose_landmarks",(s,r)=>{ch(s,this.h.poseLandmarks),be(this,r)}),this.g.attachEmptyPacketListener("pose_landmarks",s=>{be(this,s)}),this.g.attachProtoListener("pose_world_landmarks",(s,r)=>{var a=this.h.poseWorldLandmarks;s=la(s),a.push(Eo(s)),be(this,r)}),this.g.attachEmptyPacketListener("pose_world_landmarks",s=>{be(this,s)}),this.outputPoseSegmentationMasks&&(st(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),ga(this,"pose_segmentation_mask"),this.g.ga("pose_segmentation_mask",(s,r)=>{this.h.poseSegmentationMasks=[_a(this,s,!0,!this.F)],be(this,r)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",s=>{this.h.poseSegmentationMasks=[],be(this,s)})),this.g.attachProtoListener("face_landmarks",(s,r)=>{ch(s,this.h.faceLandmarks),be(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",s=>{be(this,s)}),this.outputFaceBlendshapes&&(dt(t,"extra_blendshapes"),st(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(s,r)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(s=Qh(s),a.push(up(s.g()??[]))),be(this,r)}),this.g.attachEmptyPacketListener("extra_blendshapes",s=>{be(this,s)})),this.g.attachProtoListener("left_hand_landmarks",(s,r)=>{ch(s,this.h.leftHandLandmarks),be(this,r)}),this.g.attachEmptyPacketListener("left_hand_landmarks",s=>{be(this,s)}),this.g.attachProtoListener("left_hand_world_landmarks",(s,r)=>{var a=this.h.leftHandWorldLandmarks;s=la(s),a.push(Eo(s)),be(this,r)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",s=>{be(this,s)}),this.g.attachProtoListener("right_hand_landmarks",(s,r)=>{ch(s,this.h.rightHandLandmarks),be(this,r)}),this.g.attachEmptyPacketListener("right_hand_landmarks",s=>{be(this,s)}),this.g.attachProtoListener("right_hand_world_landmarks",(s,r)=>{var a=this.h.rightHandWorldLandmarks;s=la(s),a.push(Eo(s)),be(this,r)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",s=>{be(this,s)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Qe.prototype.detectForVideo=Qe.prototype.H,Qe.prototype.detect=Qe.prototype.G,Qe.prototype.setOptions=Qe.prototype.v,Qe.createFromModelPath=function(t,e){return lt(Qe,t,{baseOptions:{modelAssetPath:e}})},Qe.createFromModelBuffer=function(t,e){return lt(Qe,t,{baseOptions:{modelAssetBuffer:e}})},Qe.createFromOptions=function(t,e){return lt(Qe,t,e)},Qe.HAND_CONNECTIONS=Sp,At("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.HAND_CONNECTIONS",Qe.HAND_CONNECTIONS),Qe.POSE_CONNECTIONS=vv,At("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.POSE_CONNECTIONS",Qe.POSE_CONNECTIONS),Qe.FACE_LANDMARKS_LIPS=xp,At("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LIPS",Qe.FACE_LANDMARKS_LIPS),Qe.FACE_LANDMARKS_LEFT_EYE=vp,At("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYE",Qe.FACE_LANDMARKS_LEFT_EYE),Qe.FACE_LANDMARKS_LEFT_EYEBROW=_p,At("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",Qe.FACE_LANDMARKS_LEFT_EYEBROW),Qe.FACE_LANDMARKS_LEFT_IRIS=pv,At("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_IRIS",Qe.FACE_LANDMARKS_LEFT_IRIS),Qe.FACE_LANDMARKS_RIGHT_EYE=yp,At("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYE",Qe.FACE_LANDMARKS_RIGHT_EYE),Qe.FACE_LANDMARKS_RIGHT_EYEBROW=bp,At("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",Qe.FACE_LANDMARKS_RIGHT_EYEBROW),Qe.FACE_LANDMARKS_RIGHT_IRIS=mv,At("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_IRIS",Qe.FACE_LANDMARKS_RIGHT_IRIS),Qe.FACE_LANDMARKS_FACE_OVAL=Mp,At("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_FACE_OVAL",Qe.FACE_LANDMARKS_FACE_OVAL),Qe.FACE_LANDMARKS_CONTOURS=gv,At("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_CONTOURS",Qe.FACE_LANDMARKS_CONTOURS),Qe.FACE_LANDMARKS_TESSELATION=xv,At("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_TESSELATION",Qe.FACE_LANDMARKS_TESSELATION);var ti=class extends qn{constructor(t,e){super(new xi(t,e),"input_image","norm_rect",!0),this.l={classifications:[]},Le(t=this.h=new $1,0,1,e=new Dt)}C(){return"ImageClassifier"}get baseOptions(){return ht(this.h,Dt,1)}set baseOptions(t){Le(this.h,0,1,t)}v(t){return Le(this.h,0,2,df(t,ht(this.h,sp,2))),this.j(t)}Ga(t,e){return this.l={classifications:[]},vi(this,t,e),this.l}Ha(t,e,n){return this.l={classifications:[]},$i(this,t,n,e),this.l}o(){var t=new Kn;Ft(t,"input_image"),Ft(t,"norm_rect"),dt(t,"classifications");var e=new Yn;Wi(e,tw,this.h);var n=new Dn;$n(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Pt(n,"IMAGE:input_image"),Pt(n,"NORM_RECT:norm_rect"),st(n,"CLASSIFICATIONS:classifications"),n.v(e),ai(t,n),this.g.attachProtoListener("classifications",(i,s)=>{this.l=uw(H3(i)),be(this,s)}),this.g.attachEmptyPacketListener("classifications",i=>{be(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ti.prototype.classifyForVideo=ti.prototype.Ha,ti.prototype.classify=ti.prototype.Ga,ti.prototype.setOptions=ti.prototype.v,ti.createFromModelPath=function(t,e){return lt(ti,t,{baseOptions:{modelAssetPath:e}})},ti.createFromModelBuffer=function(t,e){return lt(ti,t,{baseOptions:{modelAssetBuffer:e}})},ti.createFromOptions=function(t,e){return lt(ti,t,e)};var Wn=class extends qn{constructor(t,e){super(new xi(t,e),"image_in","norm_rect",!0),this.h=new q1,this.embeddings={embeddings:[]},Le(t=this.h,0,1,e=new Dt)}C(){return"ImageEmbedder"}get baseOptions(){return ht(this.h,Dt,1)}set baseOptions(t){Le(this.h,0,1,t)}v(t){var e=this.h,n=ht(this.h,g0,2);if(n=n?n.clone():new g0,t.l2Normalize!==void 0){var i=t.l2Normalize;He(n,1,i==null?i:vh(i))}else"l2Normalize"in t&&He(n,1);return t.quantize!==void 0?He(n,2,(i=t.quantize)==null?i:vh(i)):"quantize"in t&&He(n,2),Le(e,0,2,n),this.j(t)}Na(t,e){return vi(this,t,e),this.embeddings}Oa(t,e,n){return $i(this,t,n,e),this.embeddings}o(){var t=new Kn;Ft(t,"image_in"),Ft(t,"norm_rect"),dt(t,"embeddings_out");var e=new Yn;Wi(e,nw,this.h);var n=new Dn;$n(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Pt(n,"IMAGE:image_in"),Pt(n,"NORM_RECT:norm_rect"),st(n,"EMBEDDINGS:embeddings_out"),n.v(e),ai(t,n),this.g.attachProtoListener("embeddings_out",(i,s)=>{i=X3(i),this.embeddings=(function(r){return{embeddings:cs(r,W3,1).map(a=>{var o={headIndex:ii(a,3)??0??-1,headName:fn(Bt(a,4))??""??""};if(Lx(a,m0,1,ip))a=fr(a=Zg(a,m0,1),1,mi,dr()),o.floatEmbedding=a.slice();else{let l=new Uint8Array(0);o.quantizedEmbedding=Zg(a,G3,2)?.g()?.h()??l}return o}),timestampMs:ev(Bt(r,2,void 0,yh)??Px)}})(i),be(this,s)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{be(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Wn.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=b0(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=b0(y0(t.quantizedEmbedding),y0(e.quantizedEmbedding))}return t},Wn.prototype.embedForVideo=Wn.prototype.Oa,Wn.prototype.embed=Wn.prototype.Na,Wn.prototype.setOptions=Wn.prototype.v,Wn.createFromModelPath=function(t,e){return lt(Wn,t,{baseOptions:{modelAssetPath:e}})},Wn.createFromModelBuffer=function(t,e){return lt(Wn,t,{baseOptions:{modelAssetBuffer:e}})},Wn.createFromOptions=function(t,e){return lt(Wn,t,e)};var bf=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach(t=>{t.close()}),this.categoryMask?.close()}};function Iw(t){var e=(function(n){return cs(n,Dn,1)})(t.ja()).filter(n=>(fn(Bt(n,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(t.u=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(ht(e[0],Yn,7)?.o()?.g()??new Map).forEach((n,i)=>{t.u[Number(i)]=fn(Bt(n,1))??""})}function J0(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function Q0(t){try{let e=new bf(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.l)return e;t.l(e)}finally{iu(t)}}bf.prototype.close=bf.prototype.close;var Pn=class extends qn{constructor(t,e){super(new xi(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new hp,this.B=new Y1,Le(this.h,0,3,this.B),Le(t=this.h,0,1,e=new Dt)}C(){return"ImageSegmenter"}get baseOptions(){return ht(this.h,Dt,1)}set baseOptions(t){Le(this.h,0,1,t)}v(t){return t.displayNamesLocale!==void 0?He(this.h,2,ss(t.displayNamesLocale)):"displayNamesLocale"in t&&He(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.j(t)}L(){Iw(this)}segment(t,e,n){var i=typeof e!="function"?e:{};return this.l=typeof e=="function"?e:n,J0(this),vi(this,t,i),Q0(this)}eb(t,e,n,i){var s=typeof n!="function"?n:{};return this.l=typeof n=="function"?n:i,J0(this),$i(this,t,s,e),Q0(this)}Ra(){return this.u}o(){var t=new Kn;Ft(t,"image_in"),Ft(t,"norm_rect");var e=new Yn;Wi(e,Z1,this.h);var n=new Dn;$n(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Pt(n,"IMAGE:image_in"),Pt(n,"NORM_RECT:norm_rect"),n.v(e),ai(t,n),nu(this,t),this.outputConfidenceMasks&&(dt(t,"confidence_masks"),st(n,"CONFIDENCE_MASKS:confidence_masks"),ga(this,"confidence_masks"),this.g.ha("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>_a(this,r,!0,!this.l)),be(this,s)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],be(this,i)})),this.outputCategoryMask&&(dt(t,"category_mask"),st(n,"CATEGORY_MASK:category_mask"),ga(this,"category_mask"),this.g.ga("category_mask",(i,s)=>{this.categoryMask=_a(this,i,!1,!this.l),be(this,s)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,be(this,i)})),dt(t,"quality_scores"),st(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,be(this,s)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,be(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Pn.prototype.getLabels=Pn.prototype.Ra,Pn.prototype.segmentForVideo=Pn.prototype.eb,Pn.prototype.segment=Pn.prototype.segment,Pn.prototype.setOptions=Pn.prototype.v,Pn.createFromModelPath=function(t,e){return lt(Pn,t,{baseOptions:{modelAssetPath:e}})},Pn.createFromModelBuffer=function(t,e){return lt(Pn,t,{baseOptions:{modelAssetBuffer:e}})},Pn.createFromOptions=function(t,e){return lt(Pn,t,e)};var Pw={0:0,1:1,2:2,3:3};function Zd(){return dp()?void 0:document.createElement("canvas")}var Ln=class extends Fh{constructor(t,e){super(new ww(t,e)),this.u=new Tr,this.delegate="CPU",this.h=0,this.baseOptions=new Dt,this.B=this.l=0}C(){return"InteractiveSegmenter"}get i(){return this.g.i}v(t){return this.delegate=t.baseOptions?.delegate??"CPU",super.j(t)}fb(t){if(this.h===0)throw Error("Segmenter is not initialized.");var e;if(this.l!==0&&(this.i._free(this.l),this.l=0),!(e=typeof ImageData<"u"&&t instanceof ImageData))if(typeof t!="object"||t===null)e=!1;else{e=t.data;var n=t.width,i=t.height;e=Number.isInteger(n)&&n>0&&Number.isInteger(i)&&i>0&&(e instanceof Uint8ClampedArray||e instanceof Uint8Array)}if(e)e=t.width,n=t.height,t=t.data;else{if([e,n]=fp(t),typeof OffscreenCanvas<"u")i=new OffscreenCanvas(e,n);else{if(typeof document>"u")throw Error("Canvas is not supported in this environment.");i=document.createElement("canvas")}if(i.width=e,i.height=n,!(i=i.getContext("2d")))throw Error("Canvas 2D context is not supported in this environment.");i.drawImage(t,0,0),t=i.getImageData(0,0,e,n).data}if(!t)throw Error("Unsupported image source or failed to extract image pixels.");i=(function({Wa:r,width:a,height:o}){if(a<=0||o<=0)throw Error(`Invalid image dimensions: ${a}x${o}. Dimensions must be positive.`);if(r%(a*o)!==0)throw Error(`Invalid image dimensions or pixel data length. Pixel data length ${r} is not a multiple of the number of pixels (${a*o}).`);if((r/=a*o)!==4&&r!==3&&r!==1)throw Error(`Invalid image dimensions or pixel data length. Calculated channels: ${r}. Expected 1, 3, or 4.`);return r})({Wa:t.length,width:e,height:n});var s=this.i._malloc(t.length);if(this.i.HEAPU8.set(t,s),this.l=s,!this.i._interactive_segmenter_set_image(this.h,s,e,n,i))throw Error("Failed to set image on native engine.")}segment(t){if(this.h===0)throw Error("Segmenter is not initialized.");var e=(function(u){u=u.map(({isCompleted:h,brushMode:f,point:g})=>{f=Pw[f]??0,g=g.map(({x:m,y:p})=>{var E=new sw;return aa(E,1,m),aa(E,2,p),E});var v=new rw;return rf(v,h),Uo(v,1,rs(f),0),sf(v,2,g),v});var d=new aw;return sf(d,1,u),ow(d)})(t);t=this.i._malloc(e.length),this.i.HEAPU8.set(e,t);var n=this.i._malloc(12),i=n+4,s=n+8,r=0,a=this.B++;try{if(this.m)if(this.delegate==="GPU"){var o=this.m;++o.g.T,o.h.set(a,performance.now())}else{var l=this.m;++l.g.P,l.h.set(a,performance.now())}if((r=this.i._interactive_segmenter_segment(this.h,t,e.length,n,i,s))===0)throw Error("Segmentation failed.");this.m?.za(a);let u=this.i.HEAPU32[n/4],d=this.i.HEAPU32[i/4],h=new Float32Array(this.i.HEAPU8.buffer,r,this.i.HEAPU32[s/4]/4);var c=new Float32Array(h);if(o=u*d,(c instanceof Uint8Array||c instanceof Float32Array)&&c.length!==o)throw Error("Unsupported channel count: "+c.length/o);return new Zt([c],!0,!1,this.g.i.canvas??void 0,this.u,u,d)}finally{t!==0&&this.i._free(t),n!==0&&this.i._free(n),r!==0&&this.i._free(r)}}o(){this.h!==0&&(this.m?.xa(),this.i._interactive_segmenter_close(this.h),this.h=0),this.l!==0&&(this.i._free(this.l),this.l=0);var t=new Ih;if(this.delegate==="GPU"){var e=new np;zi(t,2,vr,e)}else Vi(e=new F3,1,4),zi(t,1,vr,e);if(Le(this.baseOptions,0,3,t),t=q3(this.baseOptions),e=this.i._malloc(t.length),this.i.HEAPU8.set(t,e),this.h=this.i._interactive_segmenter_create(e,t.length),this.i._free(e),this.h===0)throw Error("Failed to create native InteractiveSegmenter engine.");this.m?.ya()}close(){this.h!==0&&(this.i._interactive_segmenter_close(this.h),this.h=0),this.l!==0&&(this.i._free(this.l),this.l=0),this.u.close(),super.close()}};Ln.prototype.close=Ln.prototype.close,Ln.prototype.segment=Ln.prototype.segment,Ln.prototype.setImage=Ln.prototype.fb,Ln.prototype.setOptions=Ln.prototype.v,Ln.createFromModelPath=function(t,e){return ph(Ln,Zd(),t,{baseOptions:{modelAssetPath:e}})},Ln.createFromModelBuffer=function(t,e){return ph(Ln,Zd(),t,{baseOptions:{modelAssetBuffer:e}})},Ln.createFromOptions=function(t,e){var n=e.canvas??Zd();return ph(Ln,n,t,e)};var Mf=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach(t=>{t.close()}),this.categoryMask?.close()}};Mf.prototype.close=Mf.prototype.close;var Di=class extends qn{constructor(t,e){super(new xi(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new hp,this.u=new Y1,Le(this.h,0,3,this.u),Le(t=this.h,0,1,e=new Dt)}C(){return"InteractiveSegmenterLegacy"}get baseOptions(){return ht(this.h,Dt,1)}set baseOptions(t){Le(this.h,0,1,t)}v(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.j(t)}segment(t,e,n,i){var s=typeof n!="function"?n:{};if(this.l=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.I+1,i=new j1,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var r=new qd;rf(r,!0),aa(r,1,e.keypoint.x),aa(r,2,e.keypoint.y),zi(i,1,uf,r)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{let o=new lw;for(r of e.scribble)rf(e=new qd,!0),aa(e,1,r.x),aa(e,2,r.y),Ro(o,1,qd,e);zi(i,2,uf,o)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter_legacy.proto.RegionOfInterest","roi_in",n),vi(this,t,s);e:{try{let o=new Mf(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.l){var a=o;break e}this.l(o)}finally{iu(this)}a=void 0}return a}o(){var t=new Kn;Ft(t,"image_in"),Ft(t,"roi_in"),Ft(t,"norm_rect_in");var e=new Yn;Wi(e,Z1,this.h);var n=new Dn;$n(n,2,"mediapipe.tasks.vision.interactive_segmenter_legacy.InteractiveSegmenterGraphV2"),Pt(n,"IMAGE:image_in"),Pt(n,"ROI:roi_in"),Pt(n,"NORM_RECT:norm_rect_in"),n.v(e),ai(t,n),nu(this,t),this.outputConfidenceMasks&&(dt(t,"confidence_masks"),st(n,"CONFIDENCE_MASKS:confidence_masks"),ga(this,"confidence_masks"),this.g.ha("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>_a(this,r,!0,!this.l)),be(this,s)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],be(this,i)})),this.outputCategoryMask&&(dt(t,"category_mask"),st(n,"CATEGORY_MASK:category_mask"),ga(this,"category_mask"),this.g.ga("category_mask",(i,s)=>{this.categoryMask=_a(this,i,!1,!this.l),be(this,s)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,be(this,i)})),dt(t,"quality_scores"),st(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,be(this,s)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,be(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Di.prototype.segment=Di.prototype.segment,Di.prototype.setOptions=Di.prototype.v,Di.createFromModelPath=function(t,e){return lt(Di,t,{baseOptions:{modelAssetPath:e}})},Di.createFromModelBuffer=function(t,e){return lt(Di,t,{baseOptions:{modelAssetBuffer:e}})},Di.createFromOptions=function(t,e){return lt(Di,t,e)};var ni=class extends qn{constructor(t,e){super(new xi(t,e),"input_frame_gpu","norm_rect",!1),this.l={detections:[]},Le(t=this.h=new J1,0,1,e=new Dt)}C(){return"ObjectDetector"}get baseOptions(){return ht(this.h,Dt,1)}set baseOptions(t){Le(this.h,0,1,t)}v(t){return t.displayNamesLocale!==void 0?He(this.h,2,ss(t.displayNamesLocale)):"displayNamesLocale"in t&&He(this.h,2),t.maxResults!==void 0?Vi(this.h,3,t.maxResults):"maxResults"in t&&He(this.h,3),t.scoreThreshold!==void 0?Pe(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&He(this.h,4),t.categoryAllowlist!==void 0?Mh(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&He(this.h,5),t.categoryDenylist!==void 0?Mh(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&He(this.h,6),this.j(t)}G(t,e){return this.l={detections:[]},vi(this,t,e),this.l}H(t,e,n){return this.l={detections:[]},$i(this,t,n,e),this.l}o(){var t=new Kn;Ft(t,"input_frame_gpu"),Ft(t,"norm_rect"),dt(t,"detections");var e=new Yn;Wi(e,cw,this.h);var n=new Dn;$n(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Pt(n,"IMAGE:input_frame_gpu"),Pt(n,"NORM_RECT:norm_rect"),st(n,"DETECTIONS:detections"),n.v(e),ai(t,n),this.g.attachProtoVectorListener("detections",(i,s)=>{for(let r of i)i=I1(r),this.l.detections.push(tv(i));be(this,s)}),this.g.attachEmptyPacketListener("detections",i=>{be(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ni.prototype.detectForVideo=ni.prototype.H,ni.prototype.detect=ni.prototype.G,ni.prototype.setOptions=ni.prototype.v,ni.createFromModelPath=async function(t,e){return lt(ni,t,{baseOptions:{modelAssetPath:e}})},ni.createFromModelBuffer=function(t,e){return lt(ni,t,{baseOptions:{modelAssetBuffer:e}})},ni.createFromOptions=function(t,e){return lt(ni,t,e)};var Sf=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach(t=>{t.close()})}};function ex(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function tx(t){try{let e=new Sf(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.u)return e;t.u(e)}finally{iu(t)}}Sf.prototype.close=Sf.prototype.close;var Nn=class extends qn{constructor(t,e){super(new xi(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Le(t=this.h=new Q1,0,1,e=new Dt),this.B=new W1,Le(this.h,0,3,this.B),this.l=new G1,Le(this.h,0,2,this.l),Vi(this.l,4,1),Pe(this.l,2,.5),Pe(this.B,2,.5),Pe(this.h,4,.5)}C(){return"PoseLandmarker"}get baseOptions(){return ht(this.h,Dt,1)}set baseOptions(t){Le(this.h,0,1,t)}v(t){return"numPoses"in t&&Vi(this.l,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&Pe(this.l,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&Pe(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&Pe(this.B,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.j(t)}G(t,e,n){var i=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:n,ex(this),vi(this,t,i),tx(this)}H(t,e,n,i){var s=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,ex(this),$i(this,t,s,e),tx(this)}o(){var t=new Kn;Ft(t,"image_in"),Ft(t,"norm_rect"),dt(t,"normalized_landmarks"),dt(t,"world_landmarks"),dt(t,"segmentation_masks");var e=new Yn;Wi(e,hw,this.h);var n=new Dn;$n(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Pt(n,"IMAGE:image_in"),Pt(n,"NORM_RECT:norm_rect"),st(n,"NORM_LANDMARKS:normalized_landmarks"),st(n,"WORLD_LANDMARKS:world_landmarks"),n.v(e),ai(t,n),nu(this,t),this.g.attachProtoVectorListener("normalized_landmarks",(i,s)=>{this.landmarks=[];for(let r of i)i=Ho(r),this.landmarks.push(tu(i));be(this,s)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],be(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,s)=>{this.worldLandmarks=[];for(let r of i)i=la(r),this.worldLandmarks.push(Eo(i));be(this,s)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],be(this,i)}),this.outputSegmentationMasks&&(st(n,"SEGMENTATION_MASK:segmentation_masks"),ga(this,"segmentation_masks"),this.g.ha("segmentation_masks",(i,s)=>{this.segmentationMasks=i.map(r=>_a(this,r,!0,!this.u)),be(this,s)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],be(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Nn.prototype.detectForVideo=Nn.prototype.H,Nn.prototype.detect=Nn.prototype.G,Nn.prototype.setOptions=Nn.prototype.v,Nn.createFromModelPath=function(t,e){return lt(Nn,t,{baseOptions:{modelAssetPath:e}})},Nn.createFromModelBuffer=function(t,e){return lt(Nn,t,{baseOptions:{modelAssetBuffer:e}})},Nn.createFromOptions=function(t,e){return lt(Nn,t,e)},Nn.POSE_CONNECTIONS=vv,At("module$exports$google3$third_party$mediapipe$tasks$web$vision$pose_landmarker$pose_landmarker.PoseLandmarker.POSE_CONNECTIONS",Nn.POSE_CONNECTIONS);var wp={present:!1,pose:"none",x:.5,y:.5,landmarks:[],confidence:0,extended:0,spreadRatio:0,pinchRatio:0,reach:0},au=[4,8,12,16,20],Lw=[3,6,10,14,18],Ca=(t,e)=>Math.hypot(t.x-e.x,t.y-e.y);function Nw(t){if(t.length<21)return{pose:"none",extended:0,spreadRatio:0,pinchRatio:0,reach:0};let e=t[0],n=Math.max(Ca(e,t[9]),1e-4),i=0,s=[];for(let d=0;d<5;d++){let h=Ca(e,t[au[d]]),f=Ca(e,t[Lw[d]]),g=h>f*(d===0?1.06:1.14);s.push(g),g&&i++}let r=0,a=0;for(let d=1;d<5;d++)for(let h=d+1;h<5;h++)r+=Ca(t[au[d]],t[au[h]]),a++;let o=r/a/n,l=Ca(t[4],t[8])/n,c=0;for(let d=0;d<5;d++)Ca(e,t[au[d]])/n>1.5&&c++;let u;return c>=4?u=o>=.62?"spread":"gather":c>=2?u="two":c<=1&&i<=2?u="fist":u="none",{pose:u,extended:i,spreadRatio:o,pinchRatio:l,reach:c}}var ou=class{constructor(e,n,i=3){this.wasmDir=e;this.modelUrl=n;this.holdFrames=i}wasmDir;modelUrl;holdFrames;landmarker=null;video=null;stream=null;raf=0;lastVideoTime=-1;streak=0;held="none";enabled=!1;status="off";sourceLabel="";synthetic=!1;frame=wp;onFrame=null;get videoEl(){return this.video}async start(e){this.video=e,this.status="starting camera\u2026";try{this.stream=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480},audio:!1})}catch(s){throw this.status=`no camera: ${s.message}`,this.enabled=!1,s}let n=this.stream.getVideoTracks()[0];this.sourceLabel=n?n.label:"",this.synthetic=/^\/|^[A-Za-z]:\\|\.(y4m|mp4|mjpeg|webm)$|fake|synthetic/i.test(this.sourceLabel),e.srcObject=this.stream,await e.play(),this.status="loading model\u2026";let i=await ur.forVisionTasks(this.wasmDir);this.landmarker=await _n.createFromOptions(i,{baseOptions:{modelAssetPath:this.modelUrl,delegate:"CPU"},runningMode:"VIDEO",numHands:1,minHandDetectionConfidence:.35,minHandPresenceConfidence:.35,minTrackingConfidence:.35}),this.enabled=!0,this.status="tracking",this.loop()}stop(){this.enabled=!1,cancelAnimationFrame(this.raf),this.stream?.getTracks().forEach(e=>e.stop()),this.stream=null,this.frame=wp,this.status="off",this.onFrame?.(this.frame)}step(){let e=this.video;if(!this.landmarker||!e||e.readyState<2)return this.frame;let n=e.currentTime;if(n===this.lastVideoTime)return this.frame;this.lastVideoTime=n;let i=this.landmarker.detectForVideo(e,performance.now()),s=i.landmarks?.[0];if(!s||s.length<21)this.streak=0,this.held="none",this.frame={...wp};else{let r=Nw(s);r.pose===this.held?this.streak++:(this.held=r.pose,this.streak=1);let a=this.streak>=this.holdFrames?this.held:"none",o=s[9];this.frame={present:!0,pose:a,x:o.x,y:o.y,landmarks:s.map(l=>({x:l.x,y:l.y,z:l.z})),confidence:i.handedness?.[0]?.[0]?.score??0,extended:r.extended,spreadRatio:r.spreadRatio,pinchRatio:r.pinchRatio,reach:r.reach}}return this.onFrame?.(this.frame),this.frame}loop=()=>{this.enabled&&(this.step(),this.raf=requestAnimationFrame(this.loop))}};var lu=[{id:"tap",name:"Tap",how:"One finger, tap a node",operation:"Select and inspect the node",span:"selection"},{id:"doubletap",name:"Double-tap",how:"Two quick taps on a node, then on a second node",operation:"Connect the two nodes with a filament",span:"connection"},{id:"longpress",name:"Long-press",how:"Hold half a second on empty space",operation:"Quick-add a node into the holding cluster",span:"capture"},{id:"dragnode",name:"Drag a node",how:"Press a node and drag",operation:"Place it, or move an already-placed node",span:"placement"},{id:"dragempty",name:"Drag empty space",how:"One finger, drag on the background",operation:"Re-aim the vantage \u2014 offset where the device heading points",span:"navigation"},{id:"pinch",name:"Pinch / spread",how:"Two fingers, pinch or spread",operation:"Zoom the view in or out",span:"navigation"}],_v={"mouse-drag":{name:"Drag"},"mouse-alt-drag":{name:"Alt-drag",standsIn:"fist"},"mouse-click":{name:"Click",standsIn:"two"},"mouse-scroll-up":{name:"Scroll up",standsIn:"spread"},"mouse-scroll-down":{name:"Scroll down",standsIn:"gather"}},fs=[{id:"fist",name:"Closed fist",how:"All fingers curled in",operation:"Grab the nearest cluster and move it \u2014 members keep their internal arrangement",mouse:"Hold Alt and drag a node, or press Grab then drag"},{id:"spread",name:"Open palm",how:"All five fingers extended and spread wide",operation:"Move closer \u2014 the map fills more of the frame; no thought moves",mouse:"Scroll up, or press Closer"},{id:"gather",name:"Gathered hand",how:"Fingers extended but held together, tips touching",operation:"Pull back \u2014 the map recedes in the frame; no thought moves",mouse:"Scroll down, or press Back"},{id:"two",name:"Two fingers",how:"Index and middle extended in a V, ring and little finger curled in",operation:"Select or confirm the node the hand is over",mouse:"Left click, or press Select"}];function yv(t){let e=Cn(t).map(r=>({id:r.id,text:r.text,label:r.label,color:r.color,pos:r.pos.map(a=>Math.round(a*100)/100),placed:r.placed})),n=Object.values(t.links).map(r=>[r.a,r.b]),i=lr(t).map(r=>r.id),s={map:t.name,holding:t.holding,nodes:e,links:n,unplaced:i};return`You are helping organise a 3-D idea map called "${t.name}".

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
${JSON.stringify(s)}`}function Fw(t){let n=[...[...t.matchAll(/```(?:json|JSON|js|javascript)?\s*([\s\S]*?)```/g)].map(i=>i[1].trim()).filter(Boolean)];for(let i of["{","["]){let s=i==="{"?"}":"]",r=0,a=-1,o=!1,l=!1,c="";for(let u=0;u<t.length;u++){let d=t[u];if(l){l=!1;continue}if(d==="\\"){l=!0;continue}if(d==='"'||d==="'"){o?o===d&&(o=!1):o=d;continue}if(!o){if(d===i)r===0&&(a=u),r++;else if(d===s&&(r--,r===0&&a>=0)){let h=t.slice(a,u+1);h.length>c.length&&(c=h)}}}c&&n.push(c)}return n.sort((i,s)=>s.length-i.length),n[0]??null}function Dw(t){let e=t;e=e.replace(/[\u201C\u201D\u201E\u2033]/g,'"').replace(/[\u2018\u2019\u2032]/g,"'"),e=e.replace(/\/\*[\s\S]*?\*\//g,""),e=e.replace(/(^|[^:"'\\])\/\/[^\n\r]*/g,"$1"),e=e.replace(/\bTrue\b/g,"true").replace(/\bFalse\b/g,"false").replace(/\bNone\b/g,"null").replace(/\bNaN\b/g,"null"),e=e.replace(/([{,]\s*)([A-Za-z_$][\w$]*)\s*:/g,'$1"$2":'),e=e.replace(/'((?:[^'\\]|\\.)*)'/g,(a,o)=>JSON.stringify(o.replace(/\\'/g,"'"))),e=e.replace(/,(\s*[}\]])/g,"$1");let n=0,i=0,s=!1,r=!1;for(let a=0;a<e.length;a++){let o=e[a];if(r){r=!1;continue}if(o==="\\"){r=!0;continue}if(o==='"'){s=!s;continue}s||(o==="{"?n++:o==="}"?n--:o==="["?i++:o==="]"&&i--)}for(s&&(e+='"'),e=e.replace(/,\s*$/,"");i-- >0;)e+="]";for(;n-- >0;)e+="}";return e}var Uw=0,Ep=()=>`s${++Uw}`;function bv(t,e){let n=[];if(!t||!t.trim())return{ok:!1,suggestions:[],dropped:n,error:"The reply was empty. Nothing was changed."};let i=Fw(t);if(!i)return{ok:!1,suggestions:[],dropped:n,error:"No JSON found in that reply. Nothing was changed."};let s=null;for(let v of[i,Dw(i)])try{s=JSON.parse(v);break}catch{}if(s===null||typeof s!="object")return{ok:!1,suggestions:[],dropped:n,error:"That reply is not valid JSON, even after repair. Nothing was changed."};let r=[],a=[],o=[],l=Array.isArray(s)?{list:s}:s;if(Array.isArray(l.list)||Array.isArray(l.suggestions))for(let v of l.list??l.suggestions){let m=String(v?.kind??v?.type??"").toLowerCase();m.startsWith("conn")?r.push(v):m.startsWith("group")?a.push(v):m.startsWith("plac")?o.push(v):v?.a&&v?.b?r.push(v):v?.nodes?a.push(v):v?.pos?o.push(v):n.push({what:JSON.stringify(v).slice(0,60),why:"unrecognised suggestion kind"})}let c=(...v)=>{for(let m of v)if(Array.isArray(l[m]))return l[m];return[]};r=r.concat(c("connections","connect","links")),a=a.concat(c("groupings","groups","clusters")),o=o.concat(c("placements","placement","positions"));let u=new Map,d=new Map;for(let v of Cn(e))u.set(v.id,v),d.set(v.text.trim().toLowerCase(),v);let h=v=>typeof v!="string"?null:u.get(v)??d.get(v.trim().toLowerCase())??null,f=new Set(Object.values(e.links).map(v=>v.a<v.b?`${v.a}|${v.b}`:`${v.b}|${v.a}`)),g=[];for(let v of r){let m=h(v?.a??v?.from??v?.source),p=h(v?.b??v?.to??v?.target);if(!m||!p){n.push({what:`connection ${v?.a} \u2194 ${v?.b}`,why:"unknown node"});continue}if(m.id===p.id){n.push({what:`connection on ${m.text}`,why:"a node cannot link to itself"});continue}let E=m.id<p.id?`${m.id}|${p.id}`:`${p.id}|${m.id}`;if(f.has(E)){n.push({what:`${m.text} \u2194 ${p.text}`,why:"already linked"});continue}g.push({kind:"connection",id:Ep(),a:m.id,b:p.id,why:String(v?.why??v?.reason??"").slice(0,160)})}for(let v of a){let p=(Array.isArray(v?.nodes)?v.nodes:Array.isArray(v?.members)?v.members:[]).map(h).filter(Boolean).map(R=>R.id),E=String(v?.name??v?.label??v?.title??"").trim();if(p.length<2||!E){n.push({what:`grouping "${E||"?"}"`,why:p.length<2?"fewer than two known nodes":"no group name"});continue}g.push({kind:"grouping",id:Ep(),nodes:p,name:E.slice(0,40),why:String(v?.why??v?.reason??"").slice(0,160)})}for(let v of o){let m=h(v?.node??v?.id??v?.target),p=Array.isArray(v?.pos)?v.pos:Array.isArray(v?.position)?v.position:null;if(!m){n.push({what:`placement of ${v?.node}`,why:"unknown node"});continue}if(m.placed){n.push({what:`placement of "${m.text}"`,why:"that node is already placed \u2014 placed positions are not the finder's to change"});continue}let E=(p??[]).map(R=>Number(R));if(E.length!==3||E.some(R=>!isFinite(R))){n.push({what:`placement of "${m.text}"`,why:"position is not three finite numbers"});continue}g.push({kind:"placement",id:Ep(),node:m.id,pos:[E[0],E[1],E[2]],why:String(v?.why??v?.reason??"").slice(0,160)})}return g.length?{ok:!0,suggestions:g,dropped:n}:{ok:!1,suggestions:[],dropped:n,error:n.length?`Nothing usable in that reply \u2014 ${n.length} entr${n.length===1?"y":"ies"} rejected. Nothing was changed.`:"That reply held no suggestions. Nothing was changed."}}function Mv(t,e){if(e.kind==="connection")t.connect(e.a,e.b);else if(e.kind==="grouping")for(let n of e.nodes)t.setLabel(n,e.name);else e.kind==="placement"&&t.place(e.node,e.pos,t.node(e.node)?.label||"")}function cu(t,e){let n=i=>e.nodes[i]?.text??i;return t.kind==="connection"?`Connect \u201C${n(t.a)}\u201D to \u201C${n(t.b)}\u201D`:t.kind==="grouping"?`Group ${t.nodes.length} nodes as \u201C${t.name}\u201D`:`Place \u201C${n(t.node)}\u201D at ${t.pos.map(i=>i.toFixed(1)).join(", ")}`}var Sv=`
:root{
  --ground:#120E0B; --panel:#191410; --panel2:#221B16; --line:#2E2620;
  --ink:#EFE6D8; --ink-dim:#A2968A; --ink-faint:#6E645B;
  --hot:#FFB020; --bad:#FF6B4A; --ok:#2FD0C0;
}
*{box-sizing:border-box}
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

#top{position:fixed;top:0;left:0;right:0;height:44px;display:flex;align-items:center;
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
#unlabelled{position:fixed;right:0;top:96px;bottom:64px;width:300px;z-index:22;display:none;
  padding:10px 14px 10px 16px;border-left:1px solid var(--line);pointer-events:none;
  font-size:11px;line-height:1.62;letter-spacing:.2px;color:var(--ink-faint);overflow:hidden}
#unlabelled.show{display:block}
#unlabelled h4{margin:0 0 7px;font-size:11px;font-weight:600;letter-spacing:.4px;
  color:var(--ink-dim);text-transform:none}
#unlabelled li{list-style:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#unlabelled i{display:inline-block;width:5px;height:5px;border-radius:50%;margin-right:7px;
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
.mono{font-family:"DejaVu Sans Mono",monospace;font-size:11px}
`;var xe=(t,e=document)=>e.querySelector(t),Tt=(t,e={},n="")=>{let i=document.createElement(t);for(let[s,r]of Object.entries(e))i.setAttribute(s,r);return n&&(i.innerHTML=n),i},ft=t=>t.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Ow=t=>{let e=Math.max(0,Math.round((Date.now()-t)/6e4));if(e<1)return"just now";if(e<60)return`${e} min ago`;let n=Math.round(e/60);if(n<24)return`${n} h ago`;let i=Math.round(n/24);return i<30?`${i} d ago`:`${Math.round(i/30)} mo ago`},Ap=class{handVocab=fs;touchVocab=lu;surface;lens="canvas";scene;store;sync;controls;hands;maps=[];selected=null;hits=[];hitIndex=0;suggestions=[];sugIndex=0;lastParse=null;handsOn=!1;frozenClock=null;virtualNow=null;uiUntil={toast:0,gesture:0,turning:0};ready=!1;raf=0;lastGesture={id:"",detail:"",at:0};handGrab=null;lastHandOp=0;gyro=null;constructor(e){this.surface=e}lenses(){return this.surface==="windows"?["canvas","expansion"]:["canvas","ar"]}async boot(e){document.head.appendChild(Tt("style",{},Sv)),document.body.appendChild(Tt("canvas",{id:"world"})),this.buildChrome();let n=await(await fetch("./assets/font-sdf.json")).json(),i=await new Promise((r,a)=>new ja().load("./assets/font-sdf.png",r,void 0,a));this.scene=new th(xe("#world"),n,i);let s=await(await fetch(`./maps/${e.mapId}.json`)).json();this.store=new Yc(s,e.actor),this.sync=new Kc(e.wsUrl,e.actor,e.account),this.sync.onSnapshot((r,a)=>{this.store.replaceDoc(r),this.scene.setDoc(r),this.refresh(),this.frameAll(),this.showOrigin(a)}),this.sync.onMaps(r=>{this.maps=r,xe("#maps")&&this.renderMaps()}),this.sync.onStatus(()=>this.renderSyncStatus()),this.store.attach(this.sync),this.store.subscribe(()=>{this.scene.markDirty(),this.refresh()}),this.sync.connect(e.mapId),this.scene.setDoc(this.store.doc),this.controls=new nh(this.scene,this.store,{onSelect:r=>this.select(r),onQuickAdd:()=>this.quickAdd(""),onGestureFired:(r,a)=>this.showGesture(r,a),onDragEnd:()=>this.refresh()}),this.controls.now=()=>this.now(),this.hands=new ou("./assets/mp-wasm","./assets/hand_landmarker.task"),this.hands.onFrame=r=>this.onHand(r),this.setLens(this.lenses()[0]),this.resize(),window.addEventListener("resize",()=>this.resize()),this.attachInput(),this.frameAll(),this.refresh(),this.loop(),this.ready=!0}buildChrome(){let e=Tt("div",{id:"top"});e.innerHTML=`
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
      <button data-t="open-settings" class="ghost">Settings</button>`,document.body.append(e,Tt("div",{id:"lenstag","data-t":"lens-tag"}),Tt("div",{id:"gesture","data-t":"gesture-hud"}),Tt("div",{id:"argyro","data-t":"ar-gyro"}),Tt("div",{id:"toast","data-t":"toast"}),Tt("div",{id:"tools","data-t":"tools"})),xe("[data-t=capture]").addEventListener("click",()=>this.quickAdd(xe("#capture").value)),xe("#capture").addEventListener("keydown",r=>{r.key==="Enter"&&this.quickAdd(xe("#capture").value)}),xe("[data-t=open-states]").addEventListener("click",()=>this.toggleStates()),xe("[data-t=hands-chip]").addEventListener("click",()=>this.toggleHands(!this.handsOn)),xe("[data-t=open-maps]").addEventListener("click",()=>this.openMapsHome()),xe("[data-t=open-settings]").addEventListener("click",()=>this.openSettings()),xe("[data-t=open-finder]").addEventListener("click",()=>this.toggleFinder());let n=xe("#search");n.addEventListener("input",()=>this.search(n.value)),n.addEventListener("keydown",r=>{r.key==="Enter"&&this.flyToHit(r.shiftKey?-1:1)});let i=xe("[data-t=lens-tabs]");for(let r of this.lenses()){let a=Tt("button",{"data-t":`lens-${r}`},r==="expansion"?"Mind expansion":r==="ar"?"AR":"Canvas");a.addEventListener("click",()=>this.setLens(r)),i.appendChild(a)}let s=xe("#tools");for(let r of fs){let a={fist:"Grab",spread:"Closer",gather:"Back",two:"Select"},o=Tt("button",{"data-t":`tool-${r.id}`,title:`${r.name} \u2014 ${r.mouse}`},a[r.id]??r.name);o.addEventListener("click",()=>this.runHandOperation(r.id,!0)),s.appendChild(o)}}attachInput(){let e=xe("#world");this.surface==="windows"?this.controls.attachMouse(e):this.controls.attachTouch(e),window.addEventListener("keydown",n=>{let i=n.target?.tagName;i==="INPUT"||i==="TEXTAREA"||((n.key==="n"||n.key==="N")&&(n.preventDefault(),this.quickAdd("")),n.key==="Escape"&&(this.select(null),this.closeOverlays()))}),window.addEventListener("deviceorientation",n=>{if(this.lens!=="ar"||n.alpha===null)return;let i=this.gyro;this.gyro={alpha:n.alpha??0,beta:n.beta??90,gamma:n.gamma??0},i&&Math.abs(this.gyro.alpha-i.alpha)+Math.abs(this.gyro.beta-i.beta)>1.5&&(this.uiUntil.turning=this.now()+1400),this.controls.applyOrientation(this.gyro.alpha,this.gyro.beta,this.gyro.gamma),this.renderGyro()})}setLens(e){this.lens=e,this.scene.applyLens(e);for(let s of this.lenses())xe(`[data-t=lens-${s}]`).classList.toggle("on",s===e);xe("#tools").classList.toggle("show",e==="expansion"),document.body.classList.toggle("ar",e==="ar"),this.controls.gyroDriven=e==="ar",e==="ar"&&this.controls.resetGyroBase();let n=this.provenance(),i=n.isElectron?`${n.runtime} \xB7 ${n.platform}`:this.surface==="android"?`${n.runtime} \xB7 android device profile`:`${n.runtime} \xB7 ${n.platform}`;xe("#lenstag").innerHTML=`<b>${this.surface==="windows"?"Windows":"Android"}</b> \xB7 <b>${e==="expansion"?"mind expansion":e}</b> <span class="prov">${ft(i)}</span>`+(e==="ar"?' <span class="prov">real orientation + touch events \xB7 <b class="absent">no camera pass-through</b></span>':""),e==="expansion"&&this.frameAll(),this.renderGyro(),this.scene.markDirty()}renderPin(){let e=this.pinned,n=document.getElementById("pinmark");if(!e||!this.store.doc.nodes[e]){n?.remove();return}n||(n=Tt("div",{id:"pinmark","data-t":"pin-mark"}),n.innerHTML='<div class="ring"></div><div class="tag" data-t="pin-name"></div>',document.body.appendChild(n));let i=this.scene.screenPositions().find(a=>a.id===e);if(!i){n.className="";return}let s=this.scene.renderer.domElement.width/Math.max(window.innerWidth,1),r=Math.max(14,i.r/s+9);n.className="on",n.style.left=`${Math.round(i.x/s-r)}px`,n.style.top=`${Math.round(i.y/s-r)}px`,n.style.width=n.style.height=`${Math.round(r*2)}px`,xe("[data-t=pin-name]",n).textContent=this.store.doc.nodes[e].text}togglePin(e){this.pinned=this.pinned===e?null:e,this.scene.setPinned(this.pinned),this.refresh()}pinned=null;renderReticle(){let e=document.getElementById("reticle");if(this.lens!=="ar"){e?.remove();return}e||(e=Tt("div",{id:"reticle","data-t":"ar-reticle"}),e.innerHTML='<div class="lead" data-t="reticle-lead"></div><div class="x"></div><div class="n" data-t="reticle-node"></div>',document.body.appendChild(e));let n=this.scene.renderer.domElement,i=n.width/2,s=n.height/2,r=null;for(let f of this.scene.screenPositions()){let g=Math.hypot(f.x-i,f.y-s);(!r||g<r.d)&&(r={id:f.id,d:g,x:f.x,y:f.y})}let a=n.width*.22,o=!!r&&r.d<a,l=o?this.store.doc.nodes[r.id]:null,c=o?r.id:null;c!==this.aimedAt&&(this.aimedAt=c,this.scene.setSelection(c??this.selected));let u=xe("[data-t=reticle-node]",e);e.classList.toggle("on",o),u.textContent=l?`${l.text}${l.placed?"":" \xB7 in holding"}`:"pointing at open space";let d=xe("[data-t=reticle-lead]",e),h=n.width/Math.max(window.innerWidth,1);if(o&&r){let f=(r.x-i)/h,g=(r.y-s)/h,v=Math.hypot(f,g),m=13;d.style.width=`${Math.max(v-m,0).toFixed(1)}px`,d.style.transform=`rotate(${(Math.atan2(g,f)*180/Math.PI).toFixed(2)}deg) translateX(${m}px)`,d.style.opacity=v>m+4?"":"0"}else d.style.width="0px"}renderGyro(){let e=document.getElementById("argyro");if(!e||(e.classList.toggle("show",this.lens==="ar"),this.lens!=="ar"))return;let n=this.gyro;e.classList.toggle("turning",this.now()<this.uiUntil.turning),e.innerHTML=n?`gyro live \xB7 heading <b>${n.alpha.toFixed(0)}\xB0</b> \xB7 tilt <b>${n.beta.toFixed(0)}\xB0</b> \xB7 roll <b>${n.gamma.toFixed(0)}\xB0</b>`:"gyro \xB7 waiting for orientation"}safeInsets(){let e=Math.max(window.innerHeight,1),n=Math.max(window.innerWidth,1),i=u=>{let d=document.querySelector(u);if(!d||!d.offsetParent&&getComputedStyle(d).position!=="fixed")return 0;let h=d.getBoundingClientRect();return h.width>0&&h.height>0?h.height:0},s=22,r=Math.max(i("#tools"),i("#lenstag"),i("#argyro"),i("#gesture"))+12,a=i("#top"),o=12,l=12;for(let u of["#finder","#states"]){let d=document.querySelector(u);d&&(o=Math.max(o,d.getBoundingClientRect().right+14))}let c=document.getElementById("editor");return c&&(l=Math.max(l,n-c.getBoundingClientRect().left+14)),{top:Math.min((a+s)/e,.22),bottom:Math.min((r+s)/e,.22),left:Math.min(o/n,.38),right:Math.min(l/n,.38)}}frameNodes(e,n=1.3){let i=this.store.doc,s=e.map(a=>i.nodes[a]).filter(Boolean);if(!s.length)return;let r=this.scene.fitAll(s,n,this.safeInsets(),!1);this.scene.pose.target.copy(r.target),this.scene.pose.dist=r.dist}frameAll(e=1.04){let n=this.scene.fitAll(Cn(this.store.doc),e,this.safeInsets());this.scene.pose.target.copy(n.target),this.scene.pose.dist=n.dist,this.controls.minDist=Math.max(n.dist*.22,4),this.controls.maxDist=n.dist*2.1}resize(){let e=Math.floor(window.innerWidth),n=Math.floor(window.innerHeight);this.scene.setSize(e,n);let i=xe("#world");i.style.width=e+"px",i.style.height=n+"px"}quickAdd(e){let n=(e||"").trim(),i=this.store.quickAdd(n||"New thought");return xe("#capture").value="",this.select(i),this.toast(`Captured into holding \u2014 ${this.store.holdingCount()} waiting. Drag it out to place it.`),i}select(e){let n=e!==null&&this.selected===null;this.selected=e,this.scene.setSelection(e),this.renderEditor(),n&&this.clearOfPanels(e)}clearOfPanels(e){let n=this.scene.renderer.domElement,i=n.width/Math.max(window.innerWidth,1),s=0,r=0;for(let h of["#finder","#states"]){let f=document.querySelector(h);f&&(s=Math.max(s,(f.getBoundingClientRect().right+16)*i))}let a=document.getElementById("editor");if(a&&(r=Math.max(r,(n.width/i-a.getBoundingClientRect().left+16)*i)),!s&&!r)return;let{lo:o,hi:l}=this.scene.contentBoundsX();if(!isFinite(o)||!isFinite(l))return;let c=s,u=n.width-r,d=0;if(l-o<=u-c)o<c?d=c-o:l>u&&(d=u-l);else{let h=e?this.scene.screenPositions().find(m=>m.id===e):void 0,f=e?this.scene.labelRects.get(e):void 0,g=Math.min(h?h.x-h.r:1/0,f?f.x0:1/0),v=Math.max(h?h.x+h.r:-1/0,f?f.x1:-1/0);!isFinite(g)||!isFinite(v)?d=(c+u)/2-(o+l)/2:g<c?d=c-g:v>u&&(d=u-v)}Math.abs(d)<4||this.controls.panTarget(d,0)}search(e){let n=wg(this.store.doc,e);this.hits=n.map(i=>i.n.id),this.hitLabelMatches=n.filter(i=>i.field==="label").map(i=>i.n.id),this.hitQuery=e.trim(),this.hitIndex=0,this.scene.setHits(this.hits),this.refresh()}hitLabelMatches=[];hitQuery="";renderHitBreakdown(){let e=document.getElementById("hitbreak");e||(e=Tt("div",{id:"hitbreak","data-t":"search-breakdown"}),document.body.appendChild(e));let n=this.hits.length;if(!n||!this.hitQuery){e.className="",e.textContent="";return}let i=this.hitLabelMatches.length,s=n-i,r=[...new Set(this.hitLabelMatches.map(l=>this.store.doc.nodes[l]?.label).filter(Boolean))],a=[`${n} hit${n===1?"":"s"}`];s&&a.push(`${s} in the text`),i&&a.push(`${i} in the label ${r.map(l=>`\u201C${l}\u201D`).join(", ")}`),e.textContent=a.join(" \xB7 "),e.className="show";let o=document.getElementById("search")?.getBoundingClientRect();if(o){e.style.top=`${Math.round(o.bottom+8)}px`;let l=e.getBoundingClientRect().width,c=window.innerWidth-o.right;for(let u of["#editor","#finder","#states"]){let d=document.querySelector(u);if(!d)continue;let h=d.getBoundingClientRect();h.width>2&&h.height>2&&(c=Math.max(c,window.innerWidth-h.left+10))}e.style.right=`${Math.round(Math.min(c,Math.max(8,window.innerWidth-l-8)))}px`}}flyToHit(e=0){if(!this.hits.length)return;e&&(this.hitIndex=(this.hitIndex+e+this.hits.length)%this.hits.length);let n=this.hits[this.hitIndex];this.select(n),this.controls.flyTo(n,1300,this.lens==="expansion"?15:12)}async toggleHands(e){if(this.handsOn=e,this.renderHandPanel(),e){let n=document.getElementById("handvid");if(!n){this.handsOn=!1,this.toast("Hand tracking unavailable: no video surface",!0);return}try{await this.hands.start(n)}catch(i){this.handsOn=!1,this.toast(`Hand tracking unavailable: ${i.message}`,!0)}}else this.hands.stop();this.renderHandPanel()}onHand(e){if(this.drawLandmarks(e),this.renderHandPanel(),!e.present||e.pose==="none"){this.handGrab=null;return}this.runHandOperation(e.pose,!1,e)}runHandOperation(e,n,i){let s=fs.find(o=>o.id===e);this.showGesture(n?`mouse:${e}`:e,s.operation.split(" \u2014 ")[0]);let r=this.now(),a=!n&&r-this.lastHandOp<250;if(e==="spread"||e==="gather"){if(a)return;this.lastHandOp=r,this.controls.zoom(e==="spread"?n?1/1.12:.985:n?1.12:1.015)}else if(e==="two"){let o=this.scene.renderer.domElement,l=i?(1-i.x)*o.width:o.width/2,c=i?i.y*o.height:o.height/2;this.select(this.scene.pick(l,c,26))}else if(e==="fist"){let o=this.scene.renderer.domElement,l=i?(1-i.x)*o.width:o.width/2,c=i?i.y*o.height:o.height/2;if(!this.handGrab){let v=this.scene.pick(l,c,70);if(!v)return;this.handGrab={ids:this.controls.clusterOf(v),x:l,y:c};return}let u=this.store.node(this.handGrab.ids[0]);if(!u){this.handGrab=null;return}let d=new L(...u.pos),h=this.scene.screenToWorld(this.handGrab.x,this.handGrab.y,d),g=this.scene.screenToWorld(l,c,d).sub(h);g.length()>.02&&(this.store.moveCluster(this.handGrab.ids,[g.x,g.y,g.z]),this.handGrab.x=l,this.handGrab.y=c)}this.scene.markDirty()}drawLandmarks(e){let n=document.getElementById("handlm");if(!n)return;n.width!==288&&(n.width=288,n.height=216);let i=n.getContext("2d");if(i.clearRect(0,0,n.width,n.height),!e.present)return;let s=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[17,18],[18,19],[19,20],[0,17]],r=o=>(1-o.x)*n.width,a=o=>o.y*n.height;i.strokeStyle="#FFB020",i.lineWidth=2;for(let[o,l]of s){let c=e.landmarks[o],u=e.landmarks[l];!c||!u||(i.beginPath(),i.moveTo(r(c),a(c)),i.lineTo(r(u),a(u)),i.stroke())}i.fillStyle="#EFE6D8";for(let o of e.landmarks)i.beginPath(),i.arc(r(o),a(o),2.6,0,7),i.fill()}now(){return this.virtualNow??performance.now()}renderFrame(){let e=this.now();this.controls.tickTimers(e),this.controls.tickFly(e),this.tickUi(e),this.scene.clock=this.frozenClock??e/1e3,this.scene.render(),this.renderReticle(),this.renderHidden(),this.renderClusterProof()}renderAt(e){this.virtualNow=e,this.renderFrame()}tickUi(e){this.uiUntil.toast&&e>=this.uiUntil.toast&&(xe("#toast").className="",this.uiUntil.toast=0),this.uiUntil.gesture&&e>=this.uiUntil.gesture&&(xe("#gesture").classList.remove("show"),this.uiUntil.gesture=0)}loop=()=>{this.renderFrame(),this.raf=requestAnimationFrame(this.loop)};stop(){cancelAnimationFrame(this.raf)}start(){cancelAnimationFrame(this.raf),this.raf=requestAnimationFrame(this.loop)}refresh(){xe("[data-t=map-name]").textContent=this.store.doc.name,xe("[data-t=holding-count]").textContent=String(this.store.holdingCount()),xe("[data-t=holding-chip]").classList.toggle("on",this.store.holdingCount()>0),this.renderEditor(),xe("#finder")&&this.renderFinder(),xe("#settings")&&this.renderSyncStatus()}panelOpen(){return!!document.querySelector("#finder, #states, .overlay")}rightPanelOpen(){return!!document.querySelector("#editor, .overlay")}reflowSessionChips(){let e=this.panelOpen();for(let n of["origin","activity"]){let i=document.getElementById(n);i&&(i.style.visibility=e?"hidden":"")}}showOrigin(e){let n=document.getElementById("origin");n||(n=Tt("div",{id:"origin","data-t":"map-origin"}),document.body.appendChild(n)),n.className=e.from==="seed"?"seed":"",n.innerHTML=e.from==="seed"?`first launch \xB7 restored from the committed seed <b>${ft((e.file??"").replace("seeds/",""))}</b>`+(e.sha256?` <span class="mono">${ft(e.sha256.slice(0,12))}</span>`:""):"live state"}renderHidden(){let e=document.getElementById("hidden");e||(e=Tt("div",{id:"hidden","data-t":"labels-hidden"}),document.body.appendChild(e));let n=this.scene.suppressed,i=this.scene.shortened;e.className=(n>0||i>0)&&!this.panelOpen()&&!this.rightPanelOpen()?"show":"";let s=[];n>0&&s.push(`${n} label${n===1?"":"s"} hidden`),i>0&&s.push(`${i} shortened`),e.textContent=s.length?`${s.join(" \xB7 ")} at this zoom \u2014 move closer to read them`:"",this.renderUnlabelled(),this.renderLeaders(),this.renderHitBreakdown(),this.renderPin()}renderLeaders(){let e=document.getElementById("leaders");e||(e=document.createElementNS("http://www.w3.org/2000/svg","svg"),e.setAttribute("id","leaders"),e.setAttribute("data-t","label-leaders"),document.body.appendChild(e));let i=this.scene.renderer.domElement.width/Math.max(window.innerWidth,1),s=this.scene.screenPositions(),r=[];this.leaderFor.clear();for(let a of s){let o=this.store.doc.nodes[a.id];if(!o)continue;let l=this.scene.labelRects.get(a.id);if(!l||l.alpha<=.02)continue;let c=this.scene.labelNeedsLeader.has(a.id);if(!(!c&&!o.placed)){if(!c)continue}let u=y=>{let S=Math.min(Math.max(y.x,l.x0),l.x1),M=Math.min(Math.max(y.y,l.y0),l.y1);return Math.hypot(y.x-S,y.y-M)},d=a,h=u(a);for(let y of s){let S=u(y);S<h&&(h=S,d=y)}if(!c&&d.id===a.id)continue;this.leaderFor.add(a.id);let f=a.x/i,g=a.y/i,v=Math.min(Math.max(f,l.x0/i),l.x1/i),m=Math.min(Math.max(g,l.y0/i),l.y1/i),p=Math.hypot(v-f,m-g)||1,E=Math.max(a.r/i,3)+2,R=Math.min(E/p,.9);r.push(`<line x1="${(f+(v-f)*R).toFixed(1)}" y1="${(g+(m-g)*R).toFixed(1)}" x2="${v.toFixed(1)}" y2="${m.toFixed(1)}"></line>`)}e.innerHTML=r.join("")}leaderFor=new Set;aimedAt=null;renderUnlabelled(){let e=document.getElementById("unlabelled");e||(e=Tt("div",{id:"unlabelled","data-t":"unlabelled-list"}),document.body.appendChild(e));let n=this.scene.suppressedIds,i=this.lens==="expansion"&&n.length>0&&!this.panelOpen()&&!this.rightPanelOpen();if(e.className=i?"show":"",!i){e.innerHTML="";return}let s=Math.max(1,Math.floor((e.clientHeight-26)/18)),r=n.map(l=>this.store.doc.nodes[l]).filter(Boolean).sort((l,c)=>l.createdAt-c.createdAt),a=r.slice(0,s),o=r.length-a.length;e.innerHTML=`<h4>${r.length} thought${r.length===1?"":"s"} on screen without room for a label</h4>`+a.map(l=>`<li><i style="background:${na[l.color]??"#8A7C70"}"></i>${ft(l.text)}</li>`).join("")+(o>0?`<li style="opacity:.6">\u2026and ${o} more</li>`:"")}renderClusterProof(){let e=document.getElementById("clusterproof"),n=this.controls?.lastClusterMove??null;if(!n){e?.remove();return}e||(e=Tt("div",{id:"clusterproof","data-t":"cluster-proof"}),document.body.appendChild(e)),e.className=this.panelOpen()?"":"show",e.innerHTML=`cluster <b>${ft(n.label)}</b> \xB7 ${n.members} nodes moved together<br>travelled <b>${n.travelled.toFixed(2)}</b> \xB7 internal arrangement drift <b>${n.drift.toFixed(6)}</b>`;let i=document.getElementById("origin"),r=i&&getComputedStyle(i).display!=="none"?i.getBoundingClientRect():null;e.style.top=r&&r.height>1?`${Math.round(r.bottom+8)}px`:""}renderActivity(){let e=document.getElementById("activity");e||(e=Tt("div",{id:"activity","data-t":"last-change"}),document.body.appendChild(e));let n=this.store.lastChange;if(!n){e.className="",e.textContent="";return}e.className="show"+(n.remote?" remote":""),e.innerHTML=n.remote?`last change arrived from <b>${ft(n.actor)}</b> \u2014 ${ft(n.what)}`:`last change made here \u2014 ${ft(n.what)}`}dismissToast(){let e=document.getElementById("toast");e&&(e.className="",e.textContent=""),this.uiUntil.toast=0}toast(e,n=!1){let i=xe("#toast");i.textContent=e,i.className="show"+(n?" bad":""),this.uiUntil.toast=this.now()+(n?9e3:4200)}showGesture(e,n){this.lastGesture={id:e,detail:n,at:performance.now()};let i=xe("#gesture"),s=lu.find(u=>u.id===e),r=fs.find(u=>u.id===e||`mouse:${u.id}`===e),a=_v[e],o=s?.name??r?.name??a?.name??(e==="gyro"?"Gyroscope":e),l=e.startsWith("mouse:")?r:a?.standsIn?fs.find(u=>u.id===a.standsIn):void 0,c=l?e.startsWith("mouse:")?`${l.mouse.split(", or ")[0]} \u2014 the ${l.name} equivalent`:`${o} \u2014 the ${l.name} equivalent`:o;i.innerHTML=`<span class="n">${ft(c)}</span> <span class="o">\u2014 ${ft(n)}</span>`,i.classList.add("show"),this.uiUntil.gesture=this.now()+2600}get lastGestureFired(){return this.lastGesture}renderEditor(){let e=document.getElementById("editor"),n=this.selected?this.store.node(this.selected):void 0;if(!n){e?.remove();return}let i=e??(()=>{let a=Tt("div",{class:"panel",id:"editor","data-t":"editor"});return document.body.appendChild(a),a})(),s=this.controls.linkArmed===n.id;i.innerHTML=`
      <h3>Node${n.placed?"":" \xB7 unplaced, in holding"}</h3>
      <label>Text</label><input data-t="ed-text" value="${ft(n.text)}">
      <label>Label</label><input data-t="ed-label" value="${ft(n.label)}">
      <label>Colour</label><div class="swatches" data-t="ed-colours">
        ${Ld.map(a=>`<button class="sw${a===n.color?" on":""}" data-t="ed-colour-${a}" style="background:${na[a]}" title="${a}"></button>`).join("")}
      </div>
      <div class="row">
        <button data-t="ed-link" class="${s?"on":""}">${s?"Pick a node\u2026":"Connect"}</button>
        <button data-t="ed-flyto">Fly to</button>
        <button data-t="ed-pin" class="${this.pinned===n.id?"on":""}">${this.pinned===n.id?"Kept in view":"Keep in view"}</button>
      </div>
      <div class="row"><button data-t="ed-delete">Delete</button><button data-t="ed-close">Close</button></div>
      <div class="note" data-t="ed-recency">${ft(this.recencyLine(n))}</div>
      <div class="note mono">${n.id} \xB7 ${n.pos.map(a=>a.toFixed(1)).join(", ")}</div>`;let r=n.id;xe("[data-t=ed-text]",i).addEventListener("input",a=>this.store.setText(r,a.target.value)),xe("[data-t=ed-label]",i).addEventListener("input",a=>this.store.setLabel(r,a.target.value));for(let a of Ld)xe(`[data-t=ed-colour-${a}]`,i).addEventListener("click",()=>this.store.setColor(r,a));xe("[data-t=ed-link]",i).addEventListener("click",()=>{this.controls.armLink(r),this.toast("Now click the node to connect to."),this.renderEditor()}),xe("[data-t=ed-flyto]",i).addEventListener("click",()=>this.controls.flyTo(r)),xe("[data-t=ed-pin]",i).addEventListener("click",()=>this.togglePin(r)),xe("[data-t=ed-delete]",i).addEventListener("click",()=>{this.store.remove(r),this.select(null)}),xe("[data-t=ed-close]",i).addEventListener("click",()=>this.select(null))}recencyLine(e){let n=Cn(this.store.doc),i=qc(this.store.doc,e),s=n.filter(l=>l.createdAt<e.createdAt).length,r=n.length>1?Math.round(100*s/(n.length-1)):100,a=new Date(e.createdAt).toISOString().slice(0,10),o=i>=.8?"full chroma \u2014 recently touched":i>=.45?"mid chroma":"muted \u2014 settled";return`Captured ${a} \xB7 newer than ${r}% of this map \xB7 ${o}`}closeOverlays(){for(let e of["maps","settings"])document.getElementById(e)?.remove()}openMapsHome(){this.closeOverlays();let e=Tt("div",{class:"overlay",id:"maps","data-t":"maps-home"});document.body.appendChild(e),this.sync.request({t:"maps.list"}),this.renderMaps()}renderMaps(){let e=document.getElementById("maps");if(!e)return;let n=e.querySelector("[data-t=maps-new-name]")?.value??"";e.innerHTML=`
      <button class="close" data-t="maps-close">Close</button>
      <h1>Maps</h1><p class="sub">Unlimited maps. Open one to reach every lens on this surface.</p>
      <div class="row" style="max-width:520px;margin:0 0 16px">
        <input data-t="maps-new-name" placeholder="name a new map\u2026" style="flex:2" value="${ft(n)}">
        <button data-t="maps-create" style="flex:0 0 auto">Create map</button>
      </div>
      <table><thead><tr><th>Map</th><th>Nodes</th><th>Last opened</th><th style="width:210px"></th></tr></thead>
      <tbody>${this.maps.map(i=>`
        <tr class="map maprow" data-t="map-row-${i.id}">
          <td>${ft(i.name)}</td>
          <td class="num" data-t="map-nodes-${i.id}">${i.nodes}</td>
          <td class="num">${Ow(i.lastOpenedAt)}</td>
          <td><div style="display:flex;gap:5px">
            <button data-t="map-open-${i.id}">Open</button>
            <button data-t="map-rename-${i.id}" class="ghost">Rename</button>
            <button data-t="map-delete-${i.id}" class="ghost">Delete</button>
          </div></td></tr>`).join("")}</tbody></table>`,xe("[data-t=maps-close]",e).addEventListener("click",()=>this.closeOverlays()),xe("[data-t=maps-create]",e).addEventListener("click",()=>{let i=xe("[data-t=maps-new-name]",e).value.trim()||"Untitled map";this.sync.request({t:"maps.create",id:Dd("map-"),name:i}),this.toast(`Created \u201C${i}\u201D.`)});for(let i of this.maps)xe(`[data-t=map-open-${i.id}]`,e).addEventListener("click",()=>this.openMap(i.id)),xe(`[data-t=map-rename-${i.id}]`,e).addEventListener("click",()=>{let s=window.prompt("Rename map",i.name);s&&this.sync.request({t:"maps.rename",id:i.id,name:s})}),xe(`[data-t=map-delete-${i.id}]`,e).addEventListener("click",()=>{this.sync.request({t:"maps.delete",id:i.id}),this.toast(`Deleted \u201C${i.name}\u201D.`)})}openMap(e){this.closeOverlays(),this.select(null),this.sync.close(),this.sync.connect(e),this.store.touchOpened()}openSettings(){this.closeOverlays();let e=Tt("div",{class:"overlay",id:"settings","data-t":"settings"});e.innerHTML=`
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
      ${lu.map(n=>`<tr><td><b>${ft(n.name)}</b></td><td>${ft(n.how)}</td><td>${ft(n.operation)}</td><td class="num">${n.span}</td></tr>`).join("")}
      </tbody></table>
      <h2>Hand poses \u2014 Windows, mind expansion</h2>
      <table data-t="hand-reference"><thead><tr><th>Pose</th><th>How</th><th>Operation</th><th>Mouse equivalent</th></tr></thead><tbody>
      ${fs.map(n=>`<tr><td><b>${ft(n.name)}</b></td><td>${ft(n.how)}</td><td>${ft(n.operation)}</td><td>${ft(n.mouse)}</td></tr>`).join("")}
      </tbody></table>`,document.body.appendChild(e),xe("[data-t=settings-close]",e).addEventListener("click",()=>this.closeOverlays()),xe("[data-t=hand-toggle]",e).addEventListener("click",()=>this.toggleHands(!this.handsOn)),this.renderSyncStatus(),this.renderActivity(),this.reflowSessionChips(),this.renderHandPanel()}renderSyncStatus(){let e=document.getElementById("settings");if(!e)return;xe("[data-t=account]",e).textContent=this.sync.account;let n=xe("[data-t=sync-status]",e);n.innerHTML=`sync: <b>${this.sync.status}</b> \u2014 ${ft(this.sync.detail)}`}renderHandPanel(){let e=document.getElementById("hands");if(!this.handsOn&&!this.hands.enabled)e?.remove();else{e||(e=Tt("div",{id:"hands","data-t":"hand-panel"}),e.innerHTML=`<div class="hd"><span class="dot"></span><span data-t="hand-source">capture \xB7 hand tracking</span></div>
          <div id="handwrap"><video id="handvid" data-t="hand-video" muted playsinline></video><canvas id="handlm"></canvas></div>
          <div id="handpose"><div class="p" data-t="hand-pose">\u2014</div><div class="o" data-t="hand-op"></div><div class="g" data-t="hand-geom"></div></div>`,document.body.appendChild(e));let r=this.hands.frame,a=fs.find(l=>l.id===r.pose),o=xe("[data-t=hand-source]",e);if(o){let l=(this.hands.sourceLabel||"").split("/").pop()||"";o.textContent=this.hands.synthetic?`synthesised capture${l?` \xB7 ${l}`:""} \xB7 real handlandmarker`:"webcam \xB7 hand tracking",o.setAttribute("title",this.hands.sourceLabel||"")}xe(".dot",e).classList.toggle("live",this.hands.enabled&&r.present),xe("[data-t=hand-pose]",e).textContent=r.present?a?.name??"unrecognised":"no hand",xe("[data-t=hand-op]",e).textContent=a?a.operation.split(" \u2014 ")[0]:r.present?"hold a pose":"show a hand to the camera",xe("[data-t=hand-geom]",e).textContent=`tips out ${r.reach}  fan ${r.spreadRatio.toFixed(2)}  extended ${r.extended}  conf ${r.confidence.toFixed(2)}  view ${this.scene.pose.dist.toFixed(1)}`}let n=document.querySelector("[data-t=hands-chip]");if(n){let r=this.hands.frame,a=fs.find(o=>o.id===r.pose);n.textContent=`Hands: ${this.handsOn?"on":"off"}`+(this.handsOn?` \xB7 ${this.hands.status}${r.present&&a?` \xB7 ${a.name}`:""}`:""),n.classList.toggle("on",this.handsOn&&this.hands.enabled)}let i=document.querySelector("[data-t=hand-toggle]");i&&(i.textContent=`Hand tracking: ${this.handsOn?"on":"off"}`,i.classList.toggle("on",this.handsOn));let s=document.querySelector("[data-t=hand-status]");s&&(s.textContent=`status: ${this.hands.status}`+(this.hands.frame.present?` \xB7 ${this.hands.frame.pose}`:""))}toggleStates(){let e=document.getElementById("states");if(e){e.remove(),this.reflowSessionChips();return}let n=[["Plain","bare core, quiet","placed, nothing selected near it"],["Connected to selection","one thin outer ring","linked to the node you have selected"],["Unplaced, in holding","dashed ring, slow pulse of light","captured but not yet given a home"],["Search hit","four ticks at north, east, south, west","matches the current search"],["Selected","solid heavy ring","the node you are working on"]],i=Tt("div",{class:"panel",id:"states","data-t":"states-legend",style:"top:56px;left:12px;width:590px;padding:12px"});i.innerHTML=`<h3 style="margin:0 0 8px;font-size:12px;letter-spacing:.6px;text-transform:uppercase;color:var(--ink-dim)">Node states</h3>
      <table>${n.map(([s,r,a])=>`<tr><td><b>${ft(s)}</b></td><td>${ft(r)}</td><td class="num">${ft(a)}</td></tr>`).join("")}</table>
      <div class="note">Brightness rises down this list; every state also carries its own ring, so the two read together.</div>
      <div class="note"><b>Colour</b> names the district. <b>Chroma</b> names age: muted = settled, full chroma = recently touched \u2014 so the frontier of a map reads as its most saturated region.</div>
      <div class="row"><button data-t="states-close">Close</button></div>`,document.body.appendChild(i),this.clearOfPanels(this.selected??void 0),this.reflowSessionChips(),xe("[data-t=states-close]",i).addEventListener("click",()=>{i.remove(),this.reflowSessionChips()})}toggleFinder(){let e=document.getElementById("finder");if(e){e.remove(),this.reflowSessionChips();return}let n=Tt("div",{class:"panel",id:"finder","data-t":"finder"});document.body.appendChild(n),this.renderFinder(),this.reflowSessionChips()}renderFinder(){let e=document.getElementById("finder");if(!e)return;let n=this.suggestions[this.sugIndex],i=xe("[data-t=finder-prompt]",e)?.value??"",s=xe("[data-t=finder-reply]",e)?.value??"";e.innerHTML=`
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
      ${this.lastParse&&!this.lastParse.ok?`<div class="err" data-t="finder-error">${ft(this.lastParse.error??"parse failed")}</div>`:""}
      ${this.lastParse?.dropped.length?(()=>{let o=[...this.lastParse.dropped].sort((c,u)=>(/placed/.test(u.why)?1:0)-(/placed/.test(c.why)?1:0)),l=o.slice(0,4);return`<div class="rejected" data-t="finder-dropped"><h5>${o.length} entr${o.length===1?"y":"ies"} rejected</h5>`+l.map(c=>`<div class="r"><b>${ft(c.what)}</b> <span>${ft(c.why)}</span></div>`).join("")+(o.length>4?`<div class="r more">+${o.length-4} more</div>`:"")+"</div>"})():""}
      ${this.suggestions.length?`
        <div class="note" data-t="finder-progress">Suggestion ${this.sugIndex+1} of ${this.suggestions.length} \xB7 nothing is applied until you accept</div>
        ${n?`<div class="sug" data-t="finder-current">
          <div class="k" data-t="finder-kind">${n.kind}</div>
          <div class="d">${ft(cu(n,this.store.doc))}</div>
          <div class="w">${ft(n.why||"\u2014")}</div>
          <div class="row"><button data-t="finder-accept" class="affirm">Accept</button><button data-t="finder-reject" class="ghost">Reject</button></div>
        </div>`:""}
        <div class="note">Staged, one at a time: ${this.suggestions.map(o=>o.kind).join(" \xB7 ")}</div>
      `:""}
      </div>`,xe("[data-t=finder-prompt]",e).value=i,xe("[data-t=finder-reply]",e).value=s,xe("[data-t=finder-close]",e).addEventListener("click",()=>e.remove()),xe("[data-t=finder-generate]",e).addEventListener("click",()=>{xe("[data-t=finder-prompt]",e).value=yv(this.store.doc),this.toast("Prompt built from the current map \u2014 paste it into any AI chat.")}),xe("[data-t=finder-copy]",e).addEventListener("click",async()=>{let o=xe("[data-t=finder-prompt]",e);o.select();try{await navigator.clipboard.writeText(o.value),this.toast("Prompt copied.")}catch{document.execCommand("copy"),this.toast("Prompt copied.")}}),xe("[data-t=finder-parse]",e).addEventListener("click",()=>{let o=xe("[data-t=finder-reply]",e).value;this.parseFinderReply(o)}),xe("[data-t=finder-reply]",e).addEventListener("input",()=>{if(!this.lastParse&&!this.suggestions.length)return;let o=xe("[data-t=finder-reply]",e).value;this.lastParse=null,this.suggestions=[],this.sugIndex=0,this.dismissToast(),this.renderFinder();let l=document.querySelector("[data-t=finder-reply]");l&&(l.value=o,l.focus())});let r=document.querySelector("[data-t=finder-accept]");r&&r.addEventListener("click",()=>this.acceptSuggestion());let a=document.querySelector("[data-t=finder-reject]");a&&a.addEventListener("click",()=>this.rejectSuggestion())}parseFinderReply(e){let n=bv(e,this.store.doc);return this.lastParse=n,n.ok?(this.suggestions=n.suggestions,this.sugIndex=0,this.toast(`${n.suggestions.length} suggestions staged. Nothing is applied until you accept.`)):(this.suggestions=[],this.sugIndex=0,this.toast(n.error??"Could not read that reply. Nothing was changed.",!0)),this.renderFinder(),n}acceptSuggestion(){let e=this.suggestions[this.sugIndex];if(!e)return;let n=e.kind==="grouping"?e.nodes.map(i=>this.store.doc.nodes[i]?.label).filter(Boolean):null;Mv(this.store,e),this.toast(n&&n.length?`Applied: ${cu(e,this.store.doc)} \u2014 labels were ${n.map(i=>`\u201C${i}\u201D`).join(", ")}`:`Applied: ${cu(e,this.store.doc)}`),this.suggestions.splice(this.sugIndex,1),this.sugIndex>=this.suggestions.length&&(this.sugIndex=Math.max(0,this.suggestions.length-1)),this.scene.markDirty(),this.renderFinder()}rejectSuggestion(){this.suggestions[this.sugIndex]&&(this.suggestions.splice(this.sugIndex,1),this.sugIndex>=this.suggestions.length&&(this.sugIndex=Math.max(0,this.suggestions.length-1)),this.toast("Rejected \u2014 no trace left on the map."),this.renderFinder())}stats(){let e=this.store.doc;return{map:e.id,name:e.name,lens:this.lens,surface:this.surface,nodes:Object.keys(e.nodes).length,links:Object.keys(e.links).length,holding:lr(e).length,selected:this.selected,hits:this.hits.length,sync:this.sync.status,hands:this.hands.status,pose:this.hands.frame.pose,suggestions:this.suggestions.length,positions:Object.fromEntries(Cn(e).map(n=>[n.id,n.pos]))}}glRenderer(){try{let e=this.scene.renderer.getContext(),n=e.getExtension("WEBGL_debug_renderer_info"),i=n?e.getParameter(n.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER);return String(i??"unknown")}catch{return"unavailable"}}provenance(){let e=navigator.userAgent,n=/Electron\/([0-9.]+)/.exec(e),i=/Chrome\/([0-9.]+)/.exec(e);return{runtime:n?`electron ${n[1]}`:i?`chromium ${i[1]}`:"unknown runtime",gl:this.glRenderer(),isElectron:!!n,platform:navigator.platform??"unknown",surface:this.surface,transport:this.sync.url,socket:this.sync.connId,serverPid:this.sync.serverPid,actor:this.sync.actor,status:this.sync.status}}},Ra=new URLSearchParams(location.search),wv=Ra.get("surface")==="android"?"android":"windows",Ev=new Ap(wv);window.mm=Ev;window.TEXT_COLOR=Qc;Ev.boot({mapId:Ra.get("map")||"map-fermentation",wsUrl:Ra.get("ws")||`ws://127.0.0.1:${Ra.get("port")||8788}`,account:Ra.get("account")||"kai@master-mind.local",actor:Ra.get("actor")||`${wv}-${Math.random().toString(36).slice(2,8)}`}).catch(t=>{document.body.appendChild(Tt("pre",{style:"color:#FF6B4A;padding:24px"},String(t&&t.stack||t)))});export{Ap as App};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
