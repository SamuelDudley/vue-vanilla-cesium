(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~e44777f7"],{c2ce:function(t,e,n){"use strict";var r=n("535a"),o=n("2f63"),i=n("9f1d"),s=n("7d62"),u=n("974b"),a=n("283e"),c=n("a58e");function p(t,e,n,r,o,i){this._tileset=t,this._tile=e,this._resource=n,this._contents=[],this._readyPromise=c["a"].defer(),h(this,r,o,i)}Object(i["a"])(p.prototype,{featurePropertiesDirty:{get:function(){for(var t=this._contents,e=t.length,n=0;n<e;++n)if(t[n].featurePropertiesDirty)return!0;return!1},set:function(t){for(var e=this._contents,n=e.length,r=0;r<n;++r)e[r].featurePropertiesDirty=t}},featuresLength:{get:function(){return 0}},pointsLength:{get:function(){return 0}},trianglesLength:{get:function(){return 0}},geometryByteLength:{get:function(){return 0}},texturesByteLength:{get:function(){return 0}},batchTableByteLength:{get:function(){return 0}},innerContents:{get:function(){return this._contents}},readyPromise:{get:function(){return this._readyPromise.promise}},tileset:{get:function(){return this._tileset}},tile:{get:function(){return this._tile}},url:{get:function(){return this._resource.getUrlComponent(!0)}},batchTable:{get:function(){}}});var f=Uint32Array.BYTES_PER_ELEMENT;function h(t,e,n,i){n=Object(r["a"])(n,0);var s=new Uint8Array(e),p=new DataView(e);n+=f;var h=p.getUint32(n,!0);if(1!==h)throw new a["a"]("Only Composite Tile version 1 is supported. Version "+h+" is not.");n+=f,n+=f;var g=p.getUint32(n,!0);n+=f;for(var y=[],l=0;l<g;++l){var _=Object(u["a"])(s,n),d=p.getUint32(n+2*f,!0),v=i[_];if(!Object(o["a"])(v))throw new a["a"]("Unknown tile content type, "+_+", inside Composite tile");var w=v(t._tileset,t._tile,t._resource,e,n);t._contents.push(w),y.push(w.readyPromise),n+=d}c["a"].all(y).then((function(){t._readyPromise.resolve(t)})).otherwise((function(e){t._readyPromise.reject(e)}))}p.prototype.hasProperty=function(t,e){return!1},p.prototype.getFeature=function(t){},p.prototype.applyDebugSettings=function(t,e){for(var n=this._contents,r=n.length,o=0;o<r;++o)n[o].applyDebugSettings(t,e)},p.prototype.applyStyle=function(t){for(var e=this._contents,n=e.length,r=0;r<n;++r)e[r].applyStyle(t)},p.prototype.update=function(t,e){for(var n=this._contents,r=n.length,o=0;o<r;++o)n[o].update(t,e)},p.prototype.isDestroyed=function(){return!1},p.prototype.destroy=function(){for(var t=this._contents,e=t.length,n=0;n<e;++n)t[n].destroy();return Object(s["a"])(this)},e["a"]=p}}]);