(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~e72dd61e"],{"9dbf":function(t,a,i){"use strict";var o=i("cef5"),e=i("670c"),n=i("be18"),r=i("a561"),s=i("bef8"),c=i("535a"),u=i("2f63"),h=i("9f1d"),m=i("55f9"),l=i("c52f"),d=i("1e13"),p=i("21d7"),f=i("ddf7"),_=i("4f77"),g=i("8dd9d"),v=i("66bf"),C=i("5410"),T=i("93da"),y=i("df07"),O=i("52f0"),E=i("713f"),w=i("4e1a"),b=i("0260"),W=i("2ac3"),I=i("eace"),j=i("f806"),P=i("b137"),x=i("482f"),M=i("a307");function N(t){this._scene=t,this._transform=O["a"].clone(O["a"].IDENTITY),this._invTransform=O["a"].clone(O["a"].IDENTITY),this._actualTransform=O["a"].clone(O["a"].IDENTITY),this._actualInvTransform=O["a"].clone(O["a"].IDENTITY),this._transformChanged=!1,this.position=new n["a"],this._position=new n["a"],this._positionWC=new n["a"],this._positionCartographic=new s["a"],this._oldPositionWC=void 0,this.positionWCDeltaMagnitude=0,this.positionWCDeltaMagnitudeLastFrame=0,this.timeSinceMoved=0,this._lastMovedTimestamp=0,this.direction=new n["a"],this._direction=new n["a"],this._directionWC=new n["a"],this.up=new n["a"],this._up=new n["a"],this._upWC=new n["a"],this.right=new n["a"],this._right=new n["a"],this._rightWC=new n["a"],this.frustum=new w["a"],this.frustum.aspectRatio=t.drawingBufferWidth/t.drawingBufferHeight,this.frustum.fov=T["a"].toRadians(60),this.defaultMoveAmount=1e5,this.defaultLookAmount=Math.PI/60,this.defaultRotateAmount=Math.PI/3600,this.defaultZoomAmount=1e5,this.constrainedAxis=void 0,this.maximumZoomFactor=1.5,this._moveStart=new p["a"],this._moveEnd=new p["a"],this._changed=new p["a"],this._changedPosition=void 0,this._changedDirection=void 0,this._changedFrustum=void 0,this.percentageChanged=.5,this._viewMatrix=new O["a"],this._invViewMatrix=new O["a"],S(this),this._mode=M["a"].SCENE3D,this._modeChanged=!0;var a=t.mapProjection;this._projection=a,this._maxCoord=a.project(new s["a"](Math.PI,T["a"].PI_OVER_TWO)),this._max2Dfrustum=void 0,ta(this,N.DEFAULT_VIEW_RECTANGLE,this.position,!0);var i=n["a"].magnitude(this.position);i+=i*N.DEFAULT_VIEW_FACTOR,n["a"].normalize(this.position,this.position),n["a"].multiplyByScalar(this.position,i,this.position)}function S(t){O["a"].computeView(t._position,t._direction,t._up,t._right,t._viewMatrix),O["a"].multiply(t._viewMatrix,t._actualInvTransform,t._viewMatrix),O["a"].inverseTransformation(t._viewMatrix,t._invViewMatrix)}function R(t){if(Object(u["a"])(t._oldPositionWC)){t.positionWCDeltaMagnitudeLastFrame=t.positionWCDeltaMagnitude;var a=n["a"].subtract(t.positionWC,t._oldPositionWC,t._oldPositionWC);t.positionWCDeltaMagnitude=n["a"].magnitude(a),t._oldPositionWC=n["a"].clone(t.positionWC,t._oldPositionWC),t.positionWCDeltaMagnitude>0?(t.timeSinceMoved=0,t._lastMovedTimestamp=Object(f["a"])()):t.timeSinceMoved=Math.max(Object(f["a"])()-t._lastMovedTimestamp,0)/1e3}else t._oldPositionWC=n["a"].clone(t.positionWC,t._oldPositionWC)}function A(t){j["a"].basisTo2D(t._projection,t._transform,t._actualTransform)}N.TRANSFORM_2D=new O["a"](0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1),N.TRANSFORM_2D_INVERSE=O["a"].inverseTransformation(N.TRANSFORM_2D,new O["a"]),N.DEFAULT_VIEW_RECTANGLE=I["a"].fromDegrees(-95,-20,-70,90),N.DEFAULT_VIEW_FACTOR=.5,N.DEFAULT_OFFSET=new _["a"](0,-T["a"].PI_OVER_FOUR,0),N.prototype.canPreloadFlight=function(){return Object(u["a"])(this._currentFlight)&&this._mode!==M["a"].SCENE2D},N.prototype._updateCameraChanged=function(){var t=this;if(R(t),0!==t._changed.numberOfListeners){var a=t.percentageChanged;if(t._mode!==M["a"].SCENE2D){if(!Object(u["a"])(t._changedDirection))return t._changedPosition=n["a"].clone(t.positionWC,t._changedPosition),void(t._changedDirection=n["a"].clone(t.directionWC,t._changedDirection));var i,o=T["a"].acosClamped(n["a"].dot(t.directionWC,t._changedDirection));i=Object(u["a"])(t.frustum.fovy)?o/(.5*t.frustum.fovy):o;var e=n["a"].distance(t.positionWC,t._changedPosition),r=e/t.positionCartographic.height;(i>a||r>a)&&(t._changed.raiseEvent(Math.max(i,r)),t._changedPosition=n["a"].clone(t.positionWC,t._changedPosition),t._changedDirection=n["a"].clone(t.directionWC,t._changedDirection))}else{if(!Object(u["a"])(t._changedFrustum))return t._changedPosition=n["a"].clone(t.position,t._changedPosition),void(t._changedFrustum=t.frustum.clone());var s,c=t.position,h=t._changedPosition,m=t.frustum,l=t._changedFrustum,d=c.x+m.left,p=c.x+m.right,f=h.x+l.left,_=h.x+l.right,g=c.y+m.bottom,v=c.y+m.top,C=h.y+l.bottom,y=h.y+l.top,O=Math.max(d,f),E=Math.min(p,_),w=Math.max(g,C),b=Math.min(v,y);if(O>=E||w>=v)s=1;else{var W=l;d<f&&p>_&&g<C&&v>y&&(W=m),s=1-(E-O)*(b-w)/((W.right-W.left)*(W.top-W.bottom))}s>a&&(t._changed.raiseEvent(s),t._changedPosition=n["a"].clone(t.position,t._changedPosition),t._changedFrustum=t.frustum.clone(t._changedFrustum))}}};var D=new s["a"],F=new n["a"],V=new n["a"],B=new r["a"],z=new r["a"],L=new r["a"],U=new r["a"],k=new r["a"];function H(t){var a=t._projection,i=a.ellipsoid,o=O["a"].getColumn(t._transform,3,B),e=i.cartesianToCartographic(o,D),s=a.project(e,F),c=z;c.x=s.z,c.y=s.x,c.z=s.y,c.w=1;var u=r["a"].clone(r["a"].UNIT_X,k),h=r["a"].add(O["a"].getColumn(t._transform,0,V),o,V);i.cartesianToCartographic(h,e),a.project(e,s);var m=L;m.x=s.z,m.y=s.x,m.z=s.y,m.w=0,n["a"].subtract(m,c,m),m.x=0;var l=U;if(n["a"].magnitudeSquared(m)>T["a"].EPSILON10)n["a"].cross(u,m,l);else{var d=r["a"].add(O["a"].getColumn(t._transform,1,V),o,V);i.cartesianToCartographic(d,e),a.project(e,s),l.x=s.z,l.y=s.x,l.z=s.y,l.w=0,n["a"].subtract(l,c,l),l.x=0,n["a"].magnitudeSquared(l)<T["a"].EPSILON10&&(r["a"].clone(r["a"].UNIT_Y,m),r["a"].clone(r["a"].UNIT_Z,l))}n["a"].cross(l,u,m),n["a"].normalize(m,m),n["a"].cross(u,m,l),n["a"].normalize(l,l),O["a"].setColumn(t._actualTransform,0,m,t._actualTransform),O["a"].setColumn(t._actualTransform,1,l,t._actualTransform),O["a"].setColumn(t._actualTransform,2,u,t._actualTransform),O["a"].setColumn(t._actualTransform,3,c,t._actualTransform)}var Y=new n["a"];function q(t){var a=t._mode,i=!1,o=0;a===M["a"].SCENE2D&&(o=t.frustum.right-t.frustum.left,i=o!==t._positionCartographic.height);var e=t._position,r=!n["a"].equals(e,t.position)||i;r&&(e=n["a"].clone(t.position,t._position));var s=t._direction,c=!n["a"].equals(s,t.direction);c&&(n["a"].normalize(t.direction,t.direction),s=n["a"].clone(t.direction,t._direction));var u=t._up,h=!n["a"].equals(u,t.up);h&&(n["a"].normalize(t.up,t.up),u=n["a"].clone(t.up,t._up));var m=t._right,l=!n["a"].equals(m,t.right);l&&(n["a"].normalize(t.right,t.right),m=n["a"].clone(t.right,t._right));var d=t._transformChanged||t._modeChanged;t._transformChanged=!1,d&&(O["a"].inverseTransformation(t._transform,t._invTransform),t._mode===M["a"].COLUMBUS_VIEW||t._mode===M["a"].SCENE2D?O["a"].equals(O["a"].IDENTITY,t._transform)?O["a"].clone(N.TRANSFORM_2D,t._actualTransform):t._mode===M["a"].COLUMBUS_VIEW?A(t):H(t):O["a"].clone(t._transform,t._actualTransform),O["a"].inverseTransformation(t._actualTransform,t._actualInvTransform),t._modeChanged=!1);var p=t._actualTransform;if(r||d)if(t._positionWC=O["a"].multiplyByPoint(p,e,t._positionWC),a===M["a"].SCENE3D||a===M["a"].MORPHING)t._positionCartographic=t._projection.ellipsoid.cartesianToCartographic(t._positionWC,t._positionCartographic);else{var f=Y;f.x=t._positionWC.y,f.y=t._positionWC.z,f.z=t._positionWC.x,a===M["a"].SCENE2D&&(f.z=o),t._projection.unproject(f,t._positionCartographic)}if(c||h||l){var _=n["a"].dot(s,n["a"].cross(u,m,Y));if(Math.abs(1-_)>T["a"].EPSILON2){var g=1/n["a"].magnitudeSquared(u),v=n["a"].dot(u,s)*g,C=n["a"].multiplyByScalar(s,v,Y);u=n["a"].normalize(n["a"].subtract(u,C,t._up),t._up),n["a"].clone(u,t.up),m=n["a"].cross(s,u,t._right),n["a"].clone(m,t.right)}}(c||d)&&(t._directionWC=O["a"].multiplyByPointAsVector(p,s,t._directionWC),n["a"].normalize(t._directionWC,t._directionWC)),(h||d)&&(t._upWC=O["a"].multiplyByPointAsVector(p,u,t._upWC),n["a"].normalize(t._upWC,t._upWC)),(l||d)&&(t._rightWC=O["a"].multiplyByPointAsVector(p,m,t._rightWC),n["a"].normalize(t._rightWC,t._rightWC)),(r||c||h||l||d)&&S(t)}function Z(t,a){var i;return i=T["a"].equalsEpsilon(Math.abs(t.z),1,T["a"].EPSILON3)?Math.atan2(a.y,a.x)-T["a"].PI_OVER_TWO:Math.atan2(t.y,t.x)-T["a"].PI_OVER_TWO,T["a"].TWO_PI-T["a"].zeroToTwoPi(i)}function G(t){return T["a"].PI_OVER_TWO-T["a"].acosClamped(t.z)}function X(t,a,i){var o=0;return T["a"].equalsEpsilon(Math.abs(t.z),1,T["a"].EPSILON3)||(o=Math.atan2(-i.z,a.z),o=T["a"].zeroToTwoPi(o+T["a"].TWO_PI)),o}var J=new O["a"],Q=new O["a"];Object(h["a"])(N.prototype,{transform:{get:function(){return this._transform}},inverseTransform:{get:function(){return q(this),this._invTransform}},viewMatrix:{get:function(){return q(this),this._viewMatrix}},inverseViewMatrix:{get:function(){return q(this),this._invViewMatrix}},positionCartographic:{get:function(){return q(this),this._positionCartographic}},positionWC:{get:function(){return q(this),this._positionWC}},directionWC:{get:function(){return q(this),this._directionWC}},upWC:{get:function(){return q(this),this._upWC}},rightWC:{get:function(){return q(this),this._rightWC}},heading:{get:function(){if(this._mode!==M["a"].MORPHING){var t=this._projection.ellipsoid,a=O["a"].clone(this._transform,J),i=j["a"].eastNorthUpToFixedFrame(this.positionWC,t,Q);this._setTransform(i);var o=Z(this.direction,this.up);return this._setTransform(a),o}}},pitch:{get:function(){if(this._mode!==M["a"].MORPHING){var t=this._projection.ellipsoid,a=O["a"].clone(this._transform,J),i=j["a"].eastNorthUpToFixedFrame(this.positionWC,t,Q);this._setTransform(i);var o=G(this.direction);return this._setTransform(a),o}}},roll:{get:function(){if(this._mode!==M["a"].MORPHING){var t=this._projection.ellipsoid,a=O["a"].clone(this._transform,J),i=j["a"].eastNorthUpToFixedFrame(this.positionWC,t,Q);this._setTransform(i);var o=X(this.direction,this.up,this.right);return this._setTransform(a),o}}},moveStart:{get:function(){return this._moveStart}},moveEnd:{get:function(){return this._moveEnd}},changed:{get:function(){return this._changed}}}),N.prototype.update=function(t){var a=!1;if(t!==this._mode&&(this._mode=t,this._modeChanged=t!==M["a"].MORPHING,a=this._mode===M["a"].SCENE2D),a){var i=this._max2Dfrustum=this.frustum.clone(),o=2,e=i.top/i.right;i.right=this._maxCoord.x*o,i.left=-i.right,i.top=e*i.right,i.bottom=-i.top}this._mode===M["a"].SCENE2D&&yt(this,this.position)};var K=new n["a"],$=new n["a"],tt=new n["a"];N.prototype._setTransform=function(t){var a=n["a"].clone(this.positionWC,K),i=n["a"].clone(this.upWC,$),o=n["a"].clone(this.directionWC,tt);O["a"].clone(t,this._transform),this._transformChanged=!0,q(this);var e=this._actualInvTransform;O["a"].multiplyByPoint(e,a,this.position),O["a"].multiplyByPointAsVector(e,o,this.direction),O["a"].multiplyByPointAsVector(e,i,this.up),n["a"].cross(this.direction,this.up,this.right),q(this)};var at=new e["a"],it=new W["a"],ot=new n["a"],et=new n["a"];N.prototype._adjustOrthographicFrustum=function(t){if(this.frustum instanceof E["a"]&&(t||!(this._positionCartographic.height<15e4)))if(O["a"].equals(O["a"].IDENTITY,this.transform)){var a,i,o=this._scene,e=o.globe;if(Object(u["a"])(e)){var r=at;r.x=o.drawingBufferWidth/2,r.y=o.drawingBufferHeight/2;var s=this.getPickRay(r,it);if(a=e.pickWorldCoordinates(s,o,ot),o.pickPositionSupported&&(i=o.pickPositionWorldCoordinates(r,et)),Object(u["a"])(a)&&Object(u["a"])(i)){var c=Object(u["a"])(i)?n["a"].distance(i,this.positionWC):Number.POSITIVE_INFINITY,h=Object(u["a"])(a)?n["a"].distance(a,this.positionWC):Number.POSITIVE_INFINITY;this.frustum.width=Math.min(c,h)}else Object(u["a"])(i)?this.frustum.width=n["a"].distance(i,this.positionWC):Object(u["a"])(a)&&(this.frustum.width=n["a"].distance(a,this.positionWC))}if(!Object(u["a"])(e)||!Object(u["a"])(a)&&!Object(u["a"])(i)){var m=Math.max(this.positionCartographic.height,0);this.frustum.width=m}}else this.frustum.width=n["a"].magnitude(this.position)};var nt=new n["a"],rt=new O["a"],st=new O["a"],ct=new b["a"],ut=new y["a"],ht=new s["a"];function mt(t,a,i){var o=O["a"].clone(t.transform,rt),e=j["a"].eastNorthUpToFixedFrame(a,t._projection.ellipsoid,st);t._setTransform(e),n["a"].clone(n["a"].ZERO,t.position),i.heading=i.heading-T["a"].PI_OVER_TWO;var r=b["a"].fromHeadingPitchRoll(i,ct),s=y["a"].fromQuaternion(r,ut);y["a"].getColumn(s,0,t.direction),y["a"].getColumn(s,2,t.up),n["a"].cross(t.direction,t.up,t.right),t._setTransform(o),t._adjustOrthographicFrustum(!0)}function lt(t,a,i,o){var e=O["a"].clone(t.transform,rt);if(t._setTransform(O["a"].IDENTITY),!n["a"].equals(a,t.positionWC)){if(o){var r=t._projection,s=r.ellipsoid.cartesianToCartographic(a,ht);a=r.project(s,nt)}n["a"].clone(a,t.position)}i.heading=i.heading-T["a"].PI_OVER_TWO;var c=b["a"].fromHeadingPitchRoll(i,ct),u=y["a"].fromQuaternion(c,ut);y["a"].getColumn(u,0,t.direction),y["a"].getColumn(u,2,t.up),n["a"].cross(t.direction,t.up,t.right),t._setTransform(e),t._adjustOrthographicFrustum(!0)}function dt(t,a,i,o){var r=O["a"].clone(t.transform,rt);if(t._setTransform(O["a"].IDENTITY),!n["a"].equals(a,t.positionWC)){if(o){var s=t._projection,c=s.ellipsoid.cartesianToCartographic(a,ht);a=s.project(c,nt)}e["a"].clone(a,t.position);var u=.5*-a.z,h=-u,m=t.frustum;if(h>u){var l=m.top/m.right;m.right=h,m.left=u,m.top=m.right*l,m.bottom=-m.top}}if(t._scene.mapMode2D===x["a"].ROTATE){i.heading=i.heading-T["a"].PI_OVER_TWO,i.pitch=-T["a"].PI_OVER_TWO,i.roll=0;var d=b["a"].fromHeadingPitchRoll(i,ct),p=y["a"].fromQuaternion(d,ut);y["a"].getColumn(p,2,t.up),n["a"].cross(t.direction,t.up,t.right)}t._setTransform(r)}var pt=new n["a"],ft=new n["a"],_t=new n["a"];function gt(t,a,i,o){var e=n["a"].clone(i.direction,pt),r=n["a"].clone(i.up,ft);if(t._scene.mode===M["a"].SCENE3D){var s=t._projection.ellipsoid,c=j["a"].eastNorthUpToFixedFrame(a,s,J),u=O["a"].inverseTransformation(c,Q);O["a"].multiplyByPointAsVector(u,e,e),O["a"].multiplyByPointAsVector(u,r,r)}var h=n["a"].cross(e,r,_t);return o.heading=Z(e,r),o.pitch=G(e),o.roll=X(e,r,h),o}var vt={destination:void 0,orientation:{direction:void 0,up:void 0,heading:void 0,pitch:void 0,roll:void 0},convert:void 0,endTransform:void 0},Ct=new g["a"];N.prototype.setView=function(t){t=Object(c["a"])(t,c["a"].EMPTY_OBJECT);var a=Object(c["a"])(t.orientation,c["a"].EMPTY_OBJECT),i=this._mode;if(i!==M["a"].MORPHING){Object(u["a"])(t.endTransform)&&this._setTransform(t.endTransform);var o=Object(c["a"])(t.convert,!0),e=Object(c["a"])(t.destination,n["a"].clone(this.positionWC,nt));Object(u["a"])(e)&&Object(u["a"])(e.west)&&(e=this.getRectangleCameraCoordinates(e,nt),o=!1),Object(u["a"])(a.direction)&&(a=gt(this,e,a,vt.orientation)),Ct.heading=Object(c["a"])(a.heading,0),Ct.pitch=Object(c["a"])(a.pitch,-T["a"].PI_OVER_TWO),Ct.roll=Object(c["a"])(a.roll,0),i===M["a"].SCENE3D?mt(this,e,Ct):i===M["a"].SCENE2D?dt(this,e,Ct,o):lt(this,e,Ct,o)}};var Tt=new n["a"];function yt(t,a){var i,o,e=t._scene.mapMode2D===x["a"].ROTATE,n=t._maxCoord.x,r=t._maxCoord.y;e?(o=n,i=-o):(o=a.x-2*n,i=a.x+2*n),a.x>n&&(a.x=o),a.x<-n&&(a.x=i),a.y>r&&(a.y=r),a.y<-r&&(a.y=-r)}N.prototype.flyHome=function(t){var a=this._mode;if(a===M["a"].MORPHING&&this._scene.completeMorph(),a===M["a"].SCENE2D)this.flyTo({destination:N.DEFAULT_VIEW_RECTANGLE,duration:t,endTransform:O["a"].IDENTITY});else if(a===M["a"].SCENE3D){var i=this.getRectangleCameraCoordinates(N.DEFAULT_VIEW_RECTANGLE),o=n["a"].magnitude(i);o+=o*N.DEFAULT_VIEW_FACTOR,n["a"].normalize(i,i),n["a"].multiplyByScalar(i,o,i),this.flyTo({destination:i,duration:t,endTransform:O["a"].IDENTITY})}else if(a===M["a"].COLUMBUS_VIEW){var e=this._projection.ellipsoid.maximumRadius,r=new n["a"](0,-1,1);r=n["a"].multiplyByScalar(n["a"].normalize(r,r),5*e,r),this.flyTo({destination:r,duration:t,orientation:{heading:0,pitch:-Math.acos(n["a"].normalize(r,Tt).z),roll:0},endTransform:O["a"].IDENTITY,convert:!1})}},N.prototype.worldToCameraCoordinates=function(t,a){return Object(u["a"])(a)||(a=new r["a"]),q(this),O["a"].multiplyByVector(this._actualInvTransform,t,a)},N.prototype.worldToCameraCoordinatesPoint=function(t,a){return Object(u["a"])(a)||(a=new n["a"]),q(this),O["a"].multiplyByPoint(this._actualInvTransform,t,a)},N.prototype.worldToCameraCoordinatesVector=function(t,a){return Object(u["a"])(a)||(a=new n["a"]),q(this),O["a"].multiplyByPointAsVector(this._actualInvTransform,t,a)},N.prototype.cameraToWorldCoordinates=function(t,a){return Object(u["a"])(a)||(a=new r["a"]),q(this),O["a"].multiplyByVector(this._actualTransform,t,a)},N.prototype.cameraToWorldCoordinatesPoint=function(t,a){return Object(u["a"])(a)||(a=new n["a"]),q(this),O["a"].multiplyByPoint(this._actualTransform,t,a)},N.prototype.cameraToWorldCoordinatesVector=function(t,a){return Object(u["a"])(a)||(a=new n["a"]),q(this),O["a"].multiplyByPointAsVector(this._actualTransform,t,a)};var Ot=new n["a"];N.prototype.move=function(t,a){var i=this.position;n["a"].multiplyByScalar(t,a,Ot),n["a"].add(i,Ot,i),this._mode===M["a"].SCENE2D&&yt(this,i),this._adjustOrthographicFrustum(!0)},N.prototype.moveForward=function(t){t=Object(c["a"])(t,this.defaultMoveAmount),this._mode===M["a"].SCENE2D?St(this,t):this.move(this.direction,t)},N.prototype.moveBackward=function(t){t=Object(c["a"])(t,this.defaultMoveAmount),this._mode===M["a"].SCENE2D?St(this,-t):this.move(this.direction,-t)},N.prototype.moveUp=function(t){t=Object(c["a"])(t,this.defaultMoveAmount),this.move(this.up,t)},N.prototype.moveDown=function(t){t=Object(c["a"])(t,this.defaultMoveAmount),this.move(this.up,-t)},N.prototype.moveRight=function(t){t=Object(c["a"])(t,this.defaultMoveAmount),this.move(this.right,t)},N.prototype.moveLeft=function(t){t=Object(c["a"])(t,this.defaultMoveAmount),this.move(this.right,-t)},N.prototype.lookLeft=function(t){t=Object(c["a"])(t,this.defaultLookAmount),this._mode!==M["a"].SCENE2D&&this.look(this.up,-t)},N.prototype.lookRight=function(t){t=Object(c["a"])(t,this.defaultLookAmount),this._mode!==M["a"].SCENE2D&&this.look(this.up,t)},N.prototype.lookUp=function(t){t=Object(c["a"])(t,this.defaultLookAmount),this._mode!==M["a"].SCENE2D&&this.look(this.right,-t)},N.prototype.lookDown=function(t){t=Object(c["a"])(t,this.defaultLookAmount),this._mode!==M["a"].SCENE2D&&this.look(this.right,t)};var Et=new b["a"],wt=new y["a"];N.prototype.look=function(t,a){var i=Object(c["a"])(a,this.defaultLookAmount),o=b["a"].fromAxisAngle(t,-i,Et),e=y["a"].fromQuaternion(o,wt),n=this.direction,r=this.up,s=this.right;y["a"].multiplyByVector(e,n,n),y["a"].multiplyByVector(e,r,r),y["a"].multiplyByVector(e,s,s)},N.prototype.twistLeft=function(t){t=Object(c["a"])(t,this.defaultLookAmount),this.look(this.direction,t)},N.prototype.twistRight=function(t){t=Object(c["a"])(t,this.defaultLookAmount),this.look(this.direction,-t)};var bt=new b["a"],Wt=new y["a"];N.prototype.rotate=function(t,a){var i=Object(c["a"])(a,this.defaultRotateAmount),o=b["a"].fromAxisAngle(t,-i,bt),e=y["a"].fromQuaternion(o,Wt);y["a"].multiplyByVector(e,this.position,this.position),y["a"].multiplyByVector(e,this.direction,this.direction),y["a"].multiplyByVector(e,this.up,this.up),n["a"].cross(this.direction,this.up,this.right),n["a"].cross(this.right,this.direction,this.up),this._adjustOrthographicFrustum(!1)},N.prototype.rotateDown=function(t){t=Object(c["a"])(t,this.defaultRotateAmount),Mt(this,t)},N.prototype.rotateUp=function(t){t=Object(c["a"])(t,this.defaultRotateAmount),Mt(this,-t)};var It=new n["a"],jt=new n["a"],Pt=new n["a"],xt=new n["a"];function Mt(t,a){var i=t.position;if(Object(u["a"])(t.constrainedAxis)&&!n["a"].equalsEpsilon(t.position,n["a"].ZERO,T["a"].EPSILON2)){var o=n["a"].normalize(i,It),e=n["a"].equalsEpsilon(o,t.constrainedAxis,T["a"].EPSILON2),r=n["a"].equalsEpsilon(o,n["a"].negate(t.constrainedAxis,xt),T["a"].EPSILON2);if(e||r)(e&&a<0||r&&a>0)&&t.rotate(t.right,a);else{var s=n["a"].normalize(t.constrainedAxis,jt),c=n["a"].dot(o,s),h=T["a"].acosClamped(c);a>0&&a>h&&(a=h-T["a"].EPSILON4),c=n["a"].dot(o,n["a"].negate(s,xt)),h=T["a"].acosClamped(c),a<0&&-a>h&&(a=-h+T["a"].EPSILON4);var m=n["a"].cross(s,o,Pt);t.rotate(m,a)}}else t.rotate(t.right,a)}function Nt(t,a){Object(u["a"])(t.constrainedAxis)?t.rotate(t.constrainedAxis,a):t.rotate(t.up,a)}function St(t,a){var i,o=t.frustum;if(a*=.5,Math.abs(o.top)+Math.abs(o.bottom)>Math.abs(o.left)+Math.abs(o.right)){var e=o.top-a,n=o.bottom+a,r=t._maxCoord.y;t._scene.mapMode2D===x["a"].ROTATE&&(r*=t.maximumZoomFactor),n>r&&(n=r,e=-r),e<=n&&(e=1,n=-1),i=o.right/o.top,o.top=e,o.bottom=n,o.right=o.top*i,o.left=-o.right}else{var s=o.right-a,c=o.left+a,u=t._maxCoord.x;t._scene.mapMode2D===x["a"].ROTATE&&(u*=t.maximumZoomFactor),s>u&&(s=u,c=-u),s<=c&&(s=1,c=-1),i=o.top/o.right,o.right=s,o.left=c,o.top=o.right*i,o.bottom=-o.top}}function Rt(t,a){t.move(t.direction,a)}N.prototype.rotateRight=function(t){t=Object(c["a"])(t,this.defaultRotateAmount),Nt(this,-t)},N.prototype.rotateLeft=function(t){t=Object(c["a"])(t,this.defaultRotateAmount),Nt(this,t)},N.prototype.zoomIn=function(t){t=Object(c["a"])(t,this.defaultZoomAmount),this._mode===M["a"].SCENE2D?St(this,t):Rt(this,t)},N.prototype.zoomOut=function(t){t=Object(c["a"])(t,this.defaultZoomAmount),this._mode===M["a"].SCENE2D?St(this,-t):Rt(this,-t)},N.prototype.getMagnitude=function(){return this._mode===M["a"].SCENE3D?n["a"].magnitude(this.position):this._mode===M["a"].COLUMBUS_VIEW?Math.abs(this.position.z):this._mode===M["a"].SCENE2D?Math.max(this.frustum.right-this.frustum.left,this.frustum.top-this.frustum.bottom):void 0};var At=new O["a"];N.prototype.lookAt=function(t,a){var i=j["a"].eastNorthUpToFixedFrame(t,l["a"].WGS84,At);this.lookAtTransform(i,a)};var Dt=new n["a"],Ft=new b["a"],Vt=new b["a"],Bt=new y["a"];function zt(t,a,i){a=T["a"].clamp(a,-T["a"].PI_OVER_TWO,T["a"].PI_OVER_TWO),t=T["a"].zeroToTwoPi(t)-T["a"].PI_OVER_TWO;var o=b["a"].fromAxisAngle(n["a"].UNIT_Y,-a,Ft),e=b["a"].fromAxisAngle(n["a"].UNIT_Z,-t,Vt),r=b["a"].multiply(e,o,e),s=y["a"].fromQuaternion(r,Bt),c=n["a"].clone(n["a"].UNIT_X,Dt);return y["a"].multiplyByVector(s,c,c),n["a"].negate(c,c),n["a"].multiplyByScalar(c,i,c),c}N.prototype.lookAtTransform=function(t,a){if(this._setTransform(t),Object(u["a"])(a)){var i;if(i=Object(u["a"])(a.heading)?zt(a.heading,a.pitch,a.range):a,this._mode===M["a"].SCENE2D){e["a"].clone(e["a"].ZERO,this.position),n["a"].negate(i,this.up),this.up.z=0,n["a"].magnitudeSquared(this.up)<T["a"].EPSILON10&&n["a"].clone(n["a"].UNIT_Y,this.up),n["a"].normalize(this.up,this.up),this._setTransform(O["a"].IDENTITY),n["a"].negate(n["a"].UNIT_Z,this.direction),n["a"].cross(this.direction,this.up,this.right),n["a"].normalize(this.right,this.right);var o=this.frustum,r=o.top/o.right;return o.right=.5*n["a"].magnitude(i),o.left=-o.right,o.top=r*o.right,o.bottom=-o.top,void this._setTransform(t)}n["a"].clone(i,this.position),n["a"].negate(this.position,this.direction),n["a"].normalize(this.direction,this.direction),n["a"].cross(this.direction,n["a"].UNIT_Z,this.right),n["a"].magnitudeSquared(this.right)<T["a"].EPSILON10&&n["a"].clone(n["a"].UNIT_X,this.right),n["a"].normalize(this.right,this.right),n["a"].cross(this.right,this.direction,this.up),n["a"].normalize(this.up,this.up),this._adjustOrthographicFrustum(!0)}};var Lt,Ut=new s["a"],kt=new s["a"],Ht=new n["a"],Yt=new n["a"],qt=new n["a"],Zt=new n["a"],Gt=new n["a"],Xt=new n["a"],Jt=new n["a"],Qt=new n["a"],Kt={direction:new n["a"],right:new n["a"],up:new n["a"]};function $t(t,a,i,o){var e=Math.abs(n["a"].dot(a,i));return e/o-n["a"].dot(t,i)}function ta(t,a,i,o){var e=t._projection.ellipsoid,r=o?t:Kt,s=a.north,c=a.south,h=a.east,m=a.west;m>h&&(h+=T["a"].TWO_PI);var l,p=.5*(m+h);if(c<-T["a"].PI_OVER_TWO+T["a"].RADIANS_PER_DEGREE&&s>T["a"].PI_OVER_TWO-T["a"].RADIANS_PER_DEGREE)l=0;else{var f=Ut;f.longitude=p,f.latitude=s,f.height=0;var _=kt;_.longitude=p,_.latitude=c,_.height=0;var g=Lt;Object(u["a"])(g)&&g.ellipsoid===e||(Lt=g=new d["a"](void 0,void 0,e)),g.setEndPoints(f,_),l=g.interpolateUsingFraction(.5,Ut).latitude}var v=Ut;v.longitude=p,v.latitude=l,v.height=0;var C=e.cartographicToCartesian(v,Jt),y=Ut;y.longitude=h,y.latitude=s;var O=e.cartographicToCartesian(y,Ht);y.longitude=m;var w=e.cartographicToCartesian(y,qt);y.longitude=p;var b=e.cartographicToCartesian(y,Gt);y.latitude=c;var W=e.cartographicToCartesian(y,Xt);y.longitude=h;var I=e.cartographicToCartesian(y,Zt);y.longitude=m;var j=e.cartographicToCartesian(y,Yt);n["a"].subtract(w,C,w),n["a"].subtract(I,C,I),n["a"].subtract(O,C,O),n["a"].subtract(j,C,j),n["a"].subtract(b,C,b),n["a"].subtract(W,C,W);var P=e.geodeticSurfaceNormal(C,r.direction);n["a"].negate(P,P);var x=n["a"].cross(P,n["a"].UNIT_Z,r.right);n["a"].normalize(x,x);var M,N=n["a"].cross(x,P,r.up);if(t.frustum instanceof E["a"]){var S,R,A=Math.max(n["a"].distance(O,w),n["a"].distance(I,j)),D=Math.max(n["a"].distance(O,I),n["a"].distance(w,j)),F=t.frustum._offCenterFrustum.right/t.frustum._offCenterFrustum.top,V=D*F;A>V?(S=A,R=S/F):(R=D,S=V),M=Math.max(S,R)}else{var B=Math.tan(.5*t.frustum.fovy),z=t.frustum.aspectRatio*B;if(M=Math.max($t(P,N,w,B),$t(P,N,I,B),$t(P,N,O,B),$t(P,N,j,B),$t(P,N,b,B),$t(P,N,W,B),$t(P,x,w,z),$t(P,x,I,z),$t(P,x,O,z),$t(P,x,j,z),$t(P,x,b,z),$t(P,x,W,z)),c<0&&s>0){var L=Ut;L.longitude=m,L.latitude=0,L.height=0;var U=e.cartographicToCartesian(L,Qt);n["a"].subtract(U,C,U),M=Math.max(M,$t(P,N,U,B),$t(P,x,U,z)),L.longitude=h,U=e.cartographicToCartesian(L,Qt),n["a"].subtract(U,C,U),M=Math.max(M,$t(P,N,U,B),$t(P,x,U,z))}}return n["a"].add(C,n["a"].multiplyByScalar(P,-M,Qt),i)}var aa=new s["a"],ia=new n["a"],oa=new n["a"];function ea(t,a,i){var o=t._projection;a.west>a.east&&(a=I["a"].MAX_VALUE);var e=t._actualTransform,n=t._actualInvTransform,r=aa;r.longitude=a.east,r.latitude=a.north;var s=o.project(r,ia);O["a"].multiplyByPoint(e,s,s),O["a"].multiplyByPoint(n,s,s),r.longitude=a.west,r.latitude=a.south;var c=o.project(r,oa);if(O["a"].multiplyByPoint(e,c,c),O["a"].multiplyByPoint(n,c,c),i.x=.5*(s.x-c.x)+c.x,i.y=.5*(s.y-c.y)+c.y,Object(u["a"])(t.frustum.fovy)){var h=Math.tan(.5*t.frustum.fovy),m=t.frustum.aspectRatio*h;i.z=.5*Math.max((s.x-c.x)/m,(s.y-c.y)/h)}else{var l=s.x-c.x,d=s.y-c.y;i.z=Math.max(l,d)}return i}var na=new s["a"],ra=new n["a"],sa=new n["a"];function ca(t,a,i){var o=t._projection,e=a.east;a.west>a.east&&(t._scene.mapMode2D===x["a"].INFINITE_SCROLL?e+=T["a"].TWO_PI:(a=I["a"].MAX_VALUE,e=a.east));var n=na;n.longitude=e,n.latitude=a.north;var r=o.project(n,ra);n.longitude=a.west,n.latitude=a.south;var s,c,u=o.project(n,sa),h=.5*Math.abs(r.x-u.x),m=.5*Math.abs(r.y-u.y),l=t.frustum.right/t.frustum.top,d=m*l;return h>d?(s=h,c=s/l):(c=m,s=d),m=Math.max(2*s,2*c),i.x=.5*(r.x-u.x)+u.x,i.y=.5*(r.y-u.y)+u.y,n=o.unproject(i,n),n.height=m,i=o.project(n,i),i}N.prototype.getRectangleCameraCoordinates=function(t,a){var i=this._mode;return Object(u["a"])(a)||(a=new n["a"]),i===M["a"].SCENE3D?ta(this,t,a):i===M["a"].COLUMBUS_VIEW?ea(this,t,a):i===M["a"].SCENE2D?ca(this,t,a):void 0};var ua=new W["a"];function ha(t,a,i,o){i=Object(c["a"])(i,l["a"].WGS84);var e=t.getPickRay(a,ua),n=C["a"].rayEllipsoid(e,i);if(n){var r=n.start>0?n.start:n.stop;return W["a"].getPoint(e,r,o)}}var ma=new W["a"];function la(t,a,i,o){var e=t.getPickRay(a,ma),r=e.origin;r=n["a"].fromElements(r.y,r.z,0,r);var s=i.unproject(r);if(!(s.latitude<-T["a"].PI_OVER_TWO||s.latitude>T["a"].PI_OVER_TWO))return i.ellipsoid.cartographicToCartesian(s,o)}var da=new W["a"];function pa(t,a,i,o){var e=t.getPickRay(a,da),r=-e.origin.x/e.direction.x;W["a"].getPoint(e,r,o);var s=i.unproject(new n["a"](o.y,o.z,0));if(!(s.latitude<-T["a"].PI_OVER_TWO||s.latitude>T["a"].PI_OVER_TWO||s.longitude<-Math.PI||s.longitude>Math.PI))return i.ellipsoid.cartographicToCartesian(s,o)}N.prototype.pickEllipsoid=function(t,a,i){var o=this._scene.canvas;if(0!==o.clientWidth&&0!==o.clientHeight){if(Object(u["a"])(i)||(i=new n["a"]),a=Object(c["a"])(a,l["a"].WGS84),this._mode===M["a"].SCENE3D)i=ha(this,t,a,i);else if(this._mode===M["a"].SCENE2D)i=la(this,t,this._projection,i);else{if(this._mode!==M["a"].COLUMBUS_VIEW)return;i=pa(this,t,this._projection,i)}return i}};var fa=new n["a"],_a=new n["a"],ga=new n["a"];function va(t,a,i){var o=t._scene.canvas,e=o.clientWidth,r=o.clientHeight,s=Math.tan(.5*t.frustum.fovy),c=t.frustum.aspectRatio*s,u=t.frustum.near,h=2/e*a.x-1,m=2/r*(r-a.y)-1,l=t.positionWC;n["a"].clone(l,i.origin);var d=n["a"].multiplyByScalar(t.directionWC,u,fa);n["a"].add(l,d,d);var p=n["a"].multiplyByScalar(t.rightWC,h*u*c,_a),f=n["a"].multiplyByScalar(t.upWC,m*u*s,ga),_=n["a"].add(d,p,i.direction);return n["a"].add(_,f,_),n["a"].subtract(_,l,_),n["a"].normalize(_,_),i}var Ca=new n["a"];function Ta(t,a,i){var o=t._scene.canvas,e=o.clientWidth,r=o.clientHeight,s=t.frustum;Object(u["a"])(s._offCenterFrustum)&&(s=s._offCenterFrustum);var c=2/e*a.x-1;c*=.5*(s.right-s.left);var h=2/r*(r-a.y)-1;h*=.5*(s.top-s.bottom);var m=i.origin;return n["a"].clone(t.position,m),n["a"].multiplyByScalar(t.right,c,Ca),n["a"].add(Ca,m,m),n["a"].multiplyByScalar(t.up,h,Ca),n["a"].add(Ca,m,m),n["a"].clone(t.directionWC,i.direction),t._mode!==M["a"].COLUMBUS_VIEW&&t._mode!==M["a"].SCENE2D||n["a"].fromElements(i.origin.z,i.origin.x,i.origin.y,i.origin),i}N.prototype.getPickRay=function(t,a){Object(u["a"])(a)||(a=new W["a"]);var i=this.frustum;return Object(u["a"])(i.aspectRatio)&&Object(u["a"])(i.fov)&&Object(u["a"])(i.near)?va(this,t,a):Ta(this,t,a)};var ya=new n["a"],Oa=new n["a"];N.prototype.distanceToBoundingSphere=function(t){var a=n["a"].subtract(this.positionWC,t.center,ya),i=n["a"].multiplyByScalar(this.directionWC,n["a"].dot(a,this.directionWC),Oa);return Math.max(0,n["a"].magnitude(i)-t.radius)};var Ea=new e["a"];function wa(t,a,i,o,e,r){var s=n["a"].clone(a);function c(i){var o=n["a"].lerp(a,s,i.time,new n["a"]);t.worldToCameraCoordinatesPoint(o,t.position)}return i.y>o?s.y-=i.y-o:i.y<-o&&(s.y+=-o-i.y),i.z>e?s.z-=i.z-e:i.z<-e&&(s.z+=-e-i.z),{easingFunction:m["a"].EXPONENTIAL_OUT,startObject:{time:0},stopObject:{time:1},duration:r,update:c}}N.prototype.getPixelSize=function(t,a,i){var o=this.distanceToBoundingSphere(t),e=this.frustum.getPixelDimensions(a,i,o,this._scene.pixelRatio,Ea);return Math.max(e.x,e.y)};var ba=new n["a"],Wa=new n["a"],Ia=new n["a"],ja=new n["a"];function Pa(t,a){var i=t.position,o=t.direction,e=t.worldToCameraCoordinatesVector(n["a"].UNIT_X,ba),r=-n["a"].dot(e,i)/n["a"].dot(e,o),s=n["a"].add(i,n["a"].multiplyByScalar(o,r,Wa),Wa);t.cameraToWorldCoordinatesPoint(s,s),i=t.cameraToWorldCoordinatesPoint(t.position,Ia);var c=Math.tan(.5*t.frustum.fovy),u=t.frustum.aspectRatio*c,h=n["a"].magnitude(n["a"].subtract(i,s,ja)),m=u*h,l=c*h,d=t._maxCoord.x,p=t._maxCoord.y,f=Math.max(m-d,d),_=Math.max(l-p,p);if(i.z<-f||i.z>f||i.y<-_||i.y>_){var g=s.y<-f||s.y>f,v=s.z<-_||s.z>_;if(g||v)return wa(t,i,s,f,_,a)}}N.prototype.createCorrectPositionTween=function(t){if(this._mode===M["a"].COLUMBUS_VIEW)return Pa(this,t)};var xa=new n["a"],Ma={destination:void 0,heading:void 0,pitch:void 0,roll:void 0,duration:void 0,complete:void 0,cancel:void 0,endTransform:void 0,maximumHeight:void 0,easingFunction:void 0};function Na(t,a){var i=t.frustum,o=Math.tan(.5*i.fovy),e=i.aspectRatio*o;return Math.max(a/e,a/o)}function Sa(t,a){var i,o,e=t.frustum;Object(u["a"])(e._offCenterFrustum)&&(e=e._offCenterFrustum);var n=e.right/e.top,r=a*n;return a>r?(i=a,o=i/n):(o=a,i=r),1.5*Math.max(i,o)}N.prototype.cancelFlight=function(){Object(u["a"])(this._currentFlight)&&(this._currentFlight.cancelTween(),this._currentFlight=void 0)},N.prototype.flyTo=function(t){t=Object(c["a"])(t,c["a"].EMPTY_OBJECT);var a=t.destination,i=this._mode;if(i!==M["a"].MORPHING){this.cancelFlight();var o=Object(c["a"])(t.orientation,c["a"].EMPTY_OBJECT);if(Object(u["a"])(o.direction)&&(o=gt(this,a,o,vt.orientation)),Object(u["a"])(t.duration)&&t.duration<=0){var e=vt;return e.destination=t.destination,e.orientation.heading=o.heading,e.orientation.pitch=o.pitch,e.orientation.roll=o.roll,e.convert=t.convert,e.endTransform=t.endTransform,this.setView(e),void("function"===typeof t.complete&&t.complete())}var n=Object(u["a"])(a.west);n&&(a=this.getRectangleCameraCoordinates(a,xa));var r,s=this;Ma.destination=a,Ma.heading=o.heading,Ma.pitch=o.pitch,Ma.roll=o.roll,Ma.duration=t.duration,Ma.complete=function(){r===s._currentFlight&&(s._currentFlight=void 0),Object(u["a"])(t.complete)&&t.complete()},Ma.cancel=t.cancel,Ma.endTransform=t.endTransform,Ma.convert=!n&&t.convert,Ma.maximumHeight=t.maximumHeight,Ma.pitchAdjustHeight=t.pitchAdjustHeight,Ma.flyOverLongitude=t.flyOverLongitude,Ma.flyOverLongitudeWeight=t.flyOverLongitudeWeight,Ma.easingFunction=t.easingFunction;var h=this._scene,m=P["a"].createTween(h,Ma);if(0!==m.duration){r=h.tweens.add(m),this._currentFlight=r;var l=this._scene.preloadFlightCamera;this._mode!==M["a"].SCENE2D&&(Object(u["a"])(l)||(l=N.clone(this)),l.setView({destination:a,orientation:o}),this._scene.preloadFlightCullingVolume=l.frustum.computeCullingVolume(l.positionWC,l.directionWC,l.upWC))}else"function"===typeof m.complete&&m.complete()}};var Ra=100;function Aa(t,a,i){i=_["a"].clone(Object(u["a"])(i)?i:N.DEFAULT_OFFSET);var o=t._scene.screenSpaceCameraController.minimumZoomDistance,e=t._scene.screenSpaceCameraController.maximumZoomDistance,n=i.range;if(!Object(u["a"])(n)||0===n){var r=a.radius;0===r?i.range=Ra:t.frustum instanceof E["a"]||t._mode===M["a"].SCENE2D?i.range=Sa(t,r):i.range=Na(t,r),i.range=T["a"].clamp(i.range,o,e)}return i}N.prototype.viewBoundingSphere=function(t,a){a=Aa(this,t,a),this.lookAt(t.center,a)};var Da=new O["a"],Fa=new n["a"],Va=new n["a"],Ba=new n["a"],za=new n["a"],La=new r["a"],Ua=new b["a"],ka=new y["a"];N.prototype.flyToBoundingSphere=function(t,a){a=Object(c["a"])(a,c["a"].EMPTY_OBJECT);var i=this._mode===M["a"].SCENE2D||this._mode===M["a"].COLUMBUS_VIEW;this._setTransform(O["a"].IDENTITY);var o,e=Aa(this,t,a.offset);o=i?n["a"].multiplyByScalar(n["a"].UNIT_Z,e.range,Fa):zt(e.heading,e.pitch,e.range);var r,s,u=j["a"].eastNorthUpToFixedFrame(t.center,l["a"].WGS84,Da);if(O["a"].multiplyByPoint(u,o,o),!i){if(r=n["a"].subtract(t.center,o,Va),n["a"].normalize(r,r),s=O["a"].multiplyByPointAsVector(u,n["a"].UNIT_Z,Ba),1-Math.abs(n["a"].dot(r,s))<T["a"].EPSILON6){var h=b["a"].fromAxisAngle(r,e.heading,Ua),m=y["a"].fromQuaternion(h,ka);n["a"].fromCartesian4(O["a"].getColumn(u,1,La),s),y["a"].multiplyByVector(m,s,s)}var d=n["a"].cross(r,s,za);n["a"].cross(d,r,s),n["a"].normalize(s,s)}this.flyTo({destination:o,orientation:{direction:r,up:s},duration:a.duration,complete:a.complete,cancel:a.cancel,endTransform:a.endTransform,maximumHeight:a.maximumHeight,easingFunction:a.easingFunction,flyOverLongitude:a.flyOverLongitude,flyOverLongitudeWeight:a.flyOverLongitudeWeight,pitchAdjustHeight:a.pitchAdjustHeight})};var Ha=new n["a"],Ya=new n["a"],qa=new n["a"],Za=new n["a"],Ga=[new n["a"],new n["a"],new n["a"],new n["a"]];function Xa(t,a){var i,o,e=a.radii,r=t.positionWC,s=n["a"].multiplyComponents(a.oneOverRadii,r,Ha),c=n["a"].magnitude(s),u=n["a"].normalize(s,Ya);n["a"].equalsEpsilon(u,n["a"].UNIT_Z,T["a"].EPSILON10)?(i=new n["a"](0,1,0),o=new n["a"](0,0,1)):(i=n["a"].normalize(n["a"].cross(n["a"].UNIT_Z,u,qa),qa),o=n["a"].normalize(n["a"].cross(u,i,Za),Za));var h=Math.sqrt(n["a"].magnitudeSquared(s)-1),m=n["a"].multiplyByScalar(u,1/c,Ha),l=h/c,d=n["a"].multiplyByScalar(i,l,Ya),p=n["a"].multiplyByScalar(o,l,qa),f=n["a"].add(m,p,Ga[0]);n["a"].subtract(f,d,f),n["a"].multiplyComponents(e,f,f);var _=n["a"].subtract(m,p,Ga[1]);n["a"].subtract(_,d,_),n["a"].multiplyComponents(e,_,_);var g=n["a"].subtract(m,p,Ga[2]);n["a"].add(g,d,g),n["a"].multiplyComponents(e,g,g);var v=n["a"].add(m,p,Ga[3]);return n["a"].add(v,d,v),n["a"].multiplyComponents(e,v,v),Ga}var Ja=new e["a"],Qa=new n["a"],Ka=[new s["a"],new s["a"],new s["a"],new s["a"]];function $a(t,a,i,o,e,n){Ja.x=t,Ja.y=a;var r=o.pickEllipsoid(Ja,e,Qa);return Object(u["a"])(r)?(Ka[i]=e.cartesianToCartographic(r,Ka[i]),1):(Ka[i]=e.cartesianToCartographic(n[i],Ka[i]),0)}N.prototype.computeViewRectangle=function(t,a){t=Object(c["a"])(t,l["a"].WGS84);var i=this.frustum.computeCullingVolume(this.positionWC,this.directionWC,this.upWC),e=new o["a"](n["a"].ZERO,t.maximumRadius),r=i.computeVisibility(e);if(r!==v["a"].OUTSIDE){var s=this._scene.canvas,u=s.clientWidth,h=s.clientHeight,m=0,d=Xa(this,t);if(m+=$a(0,0,0,this,t,d),m+=$a(0,h,1,this,t,d),m+=$a(u,h,2,this,t,d),m+=$a(u,0,3,this,t,d),m<2)return I["a"].MAX_VALUE;a=I["a"].fromCartographicArray(Ka,a);for(var p=0,f=Ka[3].longitude,_=0;_<4;++_){var g=Ka[_].longitude,C=Math.abs(g-f);C>T["a"].PI?p+=T["a"].TWO_PI-C:p+=C,f=g}return T["a"].equalsEpsilon(Math.abs(p),T["a"].TWO_PI,T["a"].EPSILON9)&&(a.west=-T["a"].PI,a.east=T["a"].PI,Ka[0].latitude>=0?a.north=T["a"].PI_OVER_TWO:a.south=-T["a"].PI_OVER_TWO),a}},N.prototype.switchToPerspectiveFrustum=function(){if(!(this._mode===M["a"].SCENE2D||this.frustum instanceof w["a"])){var t=this._scene;this.frustum=new w["a"],this.frustum.aspectRatio=t.drawingBufferWidth/t.drawingBufferHeight,this.frustum.fov=T["a"].toRadians(60)}},N.prototype.switchToOrthographicFrustum=function(){if(!(this._mode===M["a"].SCENE2D||this.frustum instanceof E["a"])){var t=this._scene;this.frustum=new E["a"],this.frustum.aspectRatio=t.drawingBufferWidth/t.drawingBufferHeight,this.frustum.width=n["a"].magnitude(this.position);var a=this.frustum.projectionMatrix;Object(u["a"])(a)&&this._adjustOrthographicFrustum(!0)}},N.clone=function(t,a){return Object(u["a"])(a)||(a=new N(t._scene)),n["a"].clone(t.position,a.position),n["a"].clone(t.direction,a.direction),n["a"].clone(t.up,a.up),n["a"].clone(t.right,a.right),O["a"].clone(t._transform,a.transform),a._transformChanged=!0,a.frustum=t.frustum.clone(),a},a["a"]=N}}]);