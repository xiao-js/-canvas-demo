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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var bigArray = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]
class Base {
    constructor() {
        this.canvas = document.getElementById("canvas")
        this.ctx = this.canvas.getContext("2d")
        this.url = ""
        this.arrayList = bigArray
    }

    loadimg() {
        this.url = this.canvas.toDataURL()
        img = new Image()
        img.src = url
        this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
    }
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
    
}

/* harmony default export */ __webpack_exports__["a"] = (Base);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(0);

class Action extends __WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */] {
    constructor() {
        super()
        // console.log(super())
        this.createNum = true
    }

    aninmation() {

    }

    move(direction) {
        //不能改变遍历方向，那么把数组倒转
        this.createNum = false        
        if(direction == 'bottom' || direction == "top") {
            if(direction == 'bottom') {
                this.arrayList = this.arrayList.reverse()
            }
            for(let i = 0; i < this.arrayList.length; i++) {
                let item = this.arrayList[i]
                for(let j = 0; j < item.length; j++) {
                    let findIndex
                    for( let m = i+1; m<this.arrayList.length; m++) {
                        if(this.arrayList[m][j]) {
                            findIndex = m    
                            this.createNum = true                     
                            break
                        }
                    }
                    if(findIndex) {
                        if(!item[j]) {
                            item[j] = this.arrayList[findIndex][j]
                            this.arrayList[findIndex][j] = 0
                            i--
                            break
                        }else if(this.arrayList[findIndex][j] == item[j]) {
                            item[j] = this.arrayList[findIndex][j]*2
                            this.arrayList[findIndex][j] = 0
                            i--
                            break                            
                        }
                    }
                }
            }
            if(direction == 'bottom') {
                this.arrayList = this.arrayList.reverse()
            }
        } else if(direction == 'left' || direction == "right") {
            for(let i = 0; i < this.arrayList.length; i++) {
                let item = this.arrayList[i]
                if(direction == 'right') {
                    item = this.arrayList[i].reverse()
                }
                for(let j = 0; j < item.length; j++) {
                    let it = item[j]
                    let findIndex
                    for(let m = j+1; m < item.length; m++) {
                        if(item[m]) {
                            findIndex = m
                            this.createNum = true
                            break
                        }
                    }
                    if(findIndex) {
                        if(!it) {
                            item[j] = item[findIndex]
                            item[findIndex] = 0
                            j--
                        } else if(it === item[findIndex]) {
                            item[j] = item[findIndex]*2
                            item[findIndex] = 0
                            j--
                        }
                    }
                }
                if(direction == 'right') {
                    this.arrayList[i] = this.arrayList[i].reverse()
                }
            }
        }
    }

    test() {    //验证是否死亡   是否有空格   是否右边和下面一样
        let leftCount = 0 
        for(let i = 0; i< this.arrayList.length;i ++) {
            for(let j = 0; j< this.arrayList[i].length; j++) {
                let item = this.arrayList[i][j]
                if(i < this.arrayList.length-1) {
                    if(item == this.arrayList[i+1][j]) {
                        return true
                    }
                }
                if(j < this.arrayList[i].length -1) {
                    if(item == this.arrayList[i][j+1]) {
                        return true
                    }
                }
                if(!item) {
                    leftCount++
                }
                if(leftCount>=2) {
                    return true
                }
            }
        }
        return false
    }

    radom() {   //生成数字
        let x = this.radomNum().x
        let y = this.radomNum().y        
        let flag = 0
        if(!this.createNum) return; 
        while(flag<2) {
            let x = this.radomNum().x
            let y = this.radomNum().y
            if(!this.arrayList[x][y]) {
                this.arrayList[x][y] = Math.random() > 0.5 ? 4 : 2
                flag++
            }
        }
    }
    radomNum() {
        return {
            x: parseInt(Math.random()*4),
            y: parseInt(Math.random()*4)
        }
    }
}
/* harmony default export */ __webpack_exports__["a"] = (new Action);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(0);

class Map extends __WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */] {
    constructor() {
        super()
        this.width = 600
        this.height = 600                       
        this.radius = 400                       //半径
        this.begin = (this.width-this.radius)/2 //起点坐标
        this.cellWidth = 100
        this.lineWidth = 10
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    drawItem() {
        this.arrayList.map((item,index)=> {
            item.map((it,ins)=> {
                if(it) {
                    if(it>10) {
                        this.ctx.font = 'bold 80px consolas';
                    }else {
                        this.ctx.font = 'bold 120px consolas';
                    }
                    this.ctx.textAlign = 'center';
                    this.ctx.textBaseline = 'top';
                    this.ctx.strokeStyle = '#DF5326';
                    this.ctx.strokeText(it,  100+ins*100+50, 150+index*100-50);
                }else {
                    this.ctx.fillStyle = "#fee"
                    this.ctx.fillRect( 100+ins*100, 100+index*100, 100, 100)
                }
            })
        })
    }
    drawMap() {
        this.canvas.width = this.width
        this.canvas.height = this.height
        this.ctx.beginPath()
        this.ctx.moveTo(this.begin, this.begin)
        this.ctx.lineTo(this.begin+this.radius, this.begin)
        this.ctx.lineTo(this.begin+this.radius, this.begin+this.radius)
        this.ctx.lineTo(this.begin, this.begin+this.radius)
        this.ctx.lineTo(this.begin, this.begin)   
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = "#afe"
        //三条线
        this.ctx.moveTo(this.begin+this.cellWidth,this.begin)
        this.ctx.lineTo(this.begin+this.cellWidth,this.begin+this.radius)
        this.ctx.moveTo(this.begin+this.cellWidth*2,this.begin)
        this.ctx.lineTo(this.begin+this.cellWidth*2,this.begin+this.radius)
        this.ctx.moveTo(this.begin+this.cellWidth*3,this.begin)
        this.ctx.lineTo(this.begin+this.cellWidth*3,this.begin+this.radius)
        //三条线
        this.ctx.moveTo(this.begin, this.begin+this.cellWidth)
        this.ctx.lineTo(this.begin+this.radius, this.begin+this.cellWidth)    
        this.ctx.moveTo(this.begin, this.begin+this.cellWidth*2)
        this.ctx.lineTo(this.begin+this.radius,this.begin+this.cellWidth*2)
        this.ctx.moveTo(this.begin, this.begin+this.cellWidth*3)
        this.ctx.lineTo(this.begin+this.radius,this.begin+this.cellWidth*3)      
        this.ctx.stroke()
    }
}
/* harmony default export */ __webpack_exports__["a"] = (new Map);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_map__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_action__ = __webpack_require__(1);


__WEBPACK_IMPORTED_MODULE_1__js_action__["a" /* default */].radom()
__WEBPACK_IMPORTED_MODULE_0__js_map__["a" /* default */].drawMap()
__WEBPACK_IMPORTED_MODULE_0__js_map__["a" /* default */].drawItem()

let over = false
function goStep(direction) {
    if(over) return;
    __WEBPACK_IMPORTED_MODULE_1__js_action__["a" /* default */].move(direction)
    __WEBPACK_IMPORTED_MODULE_1__js_action__["a" /* default */].radom()
    __WEBPACK_IMPORTED_MODULE_0__js_map__["a" /* default */].clear()
    __WEBPACK_IMPORTED_MODULE_0__js_map__["a" /* default */].drawMap()
    __WEBPACK_IMPORTED_MODULE_0__js_map__["a" /* default */].drawItem()
    if(__WEBPACK_IMPORTED_MODULE_1__js_action__["a" /* default */].test()) {

    } else {
        alert("game over")
        over = true
    }
}


document.addEventListener("keydown", e =>{
    console.log(e.which)
    switch(e.which) {
        case 38:
            goStep("top")
            break
        case 39:
            goStep("right")
            break
        case 40:
            goStep("bottom")
            break
        case 37:
            goStep("left")
            break 
    }
})

/***/ })
/******/ ]);