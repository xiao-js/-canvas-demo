import Map from './js/map.js'
import Panel from './js/Panel'
import Point from './js/Point'
import Arc from "./js/Arc"
var level = 15;
var points = [];
var r = 2
const canvas = document.getElementById("canvas")
canvas.width = 500
canvas.height = 500
const context = canvas.getContext("2d")
    // var panel = new Panel(canvas.getContext('2d'))
    // var map = new Map(canvas.width,canvas.height,canvas.getContext("2d"))
var map = new Map(canvas.width, canvas.height, canvas.getContext("2d"))


//初始化背景函数
map.init()

function createPoint() {
    for (let i = 0; i < canvas.width; i += level) {
        points[i] = new Array
        for (let j = 0; j < canvas.height; j += level) {
            points[i][j] = new Point(i, j, r, context)
            points[i][j].init()
        }
    }
}

var x = 200;
var y = 200;
var r = 0;
var bigX, smallX, bigY, smallY
var arc = new Arc(200, 200, context, canvas.width)
var size = 3 //槽宽
createPoint()

function render(callback) {
    window.setTimeout(
        callback, 1000 / 60)
}

(function animate() {
    map.init()
    arc.step()
    for (let i = 0; i < canvas.width; i += level) {
        for (let j = 0; j < canvas.height; j += level) {
            points[i][j].init()
            bigX = i > x ? i : x
            smallX = i > x ? x : i
            bigY = j > y ? j : y
            smallY = j > y ? y : j
            if (Math.pow((bigX - size) - smallX, 2) + Math.pow((bigY - size) - smallY, 2) < r * r && Math.pow((bigX + size) - smallX, 2) + Math.pow((bigY + size) - smallY, 2) > r * r) {
                points[i][j].animation()
            }
        }
    }
    r++
    render(animate)
})()