/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Arc=function(){
function Arc(x,y,ctx,r){_classCallCheck(this,Arc);
this.x=x;
this.y=y;
this.ctx=ctx;
this.r=r;
this.begin=1;
}_createClass(Arc,[{key:"step",value:function step()
{
if(this.begin>this.r){
this.begin=0;
}
this.ctx.beginPath();
this.ctx.strokeStyle="raga(255,255,255,0)";
this.ctx.arc(this.x,this.y,this.begin,0,Math.PI*2);
this.ctx.stroke();
this.begin++;
}}]);return Arc;}();exports.default=Arc;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Panel=
function Panel(ctx){_classCallCheck(this,Panel);
this.ctx=ctx;
};exports.default=Panel;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Point=function(){
function Point(x,y,r,ctx){_classCallCheck(this,Point);
this.ctx=ctx;
this.x=x;
this.y=y;
this.r=r;
}_createClass(Point,[{key:"init",value:function init()

{
this.ctx.beginPath();
this.ctx.fillStyle="#333";
this.ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
this.ctx.fill();
}},{key:"animation",value:function animation(

r){
this.ctx.beginPath();
this.ctx.arc(this.x,this.y,this.r+r,0,Math.PI*2);
this.ctx.fill();
}}]);return Point;}();exports.default=Point;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Map=function(){
function Map(width,height,ctx){_classCallCheck(this,Map);
this.width=width;
this.height=height;
this.ctx=ctx;
}_createClass(Map,[{key:"init",value:function init()

{
this.ctx.beginPath();
this.ctx.fillStyle="#fff";
this.ctx.fillRect(0,0,this.width,this.height);
this.ctx.fill();
}}]);return Map;}();exports.default=Map;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _map=__webpack_require__(3);var _map2=_interopRequireDefault(_map);
var _Panel=__webpack_require__(1);var _Panel2=_interopRequireDefault(_Panel);
var _Point=__webpack_require__(2);var _Point2=_interopRequireDefault(_Point);
var _Arc=__webpack_require__(0);var _Arc2=_interopRequireDefault(_Arc);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
var level=15;
var points=[];
var r=2;
var canvas=document.getElementById("canvas");
canvas.width=500;
canvas.height=500;
var context=canvas.getContext("2d");


var map=new _map2.default(canvas.width,canvas.height,canvas.getContext("2d"));



map.init();

function createPoint(){
for(var i=0;i<canvas.width;i+=level){
points[i]=new Array();
for(var j=0;j<canvas.height;j+=level){
points[i][j]=new _Point2.default(i,j,r,context);
points[i][j].init();
}
}
}

var x=200;
var y=200;
var r=0;
var bigX,smallX,bigY,smallY;
var arc=new _Arc2.default(200,200,context,canvas.width);
var size=3;
createPoint();

function render(callback){
window.setTimeout(
callback,1000/60);
}

(function animate(){
map.init();
arc.step();
for(var i=0;i<canvas.width;i+=level){
for(var j=0;j<canvas.height;j+=level){
bigX=i>x?i:x;
smallX=i>x?x:i;
bigY=j>y?j:y;
smallY=j>y?y:j;
if(Math.pow(bigX-size-smallX,2)+Math.pow(bigY-size-smallY,2)<r*r&&Math.pow(bigX+size-smallX,2)+Math.pow(bigY+size-smallY,2)>r*r){
points[i][j].animation();
}
}
}
r++;
render(animate);
})();

/***/ })
/******/ ]);