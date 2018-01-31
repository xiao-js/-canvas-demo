// const BODYCOLOR = "#f5f5f5" 
import map from "./js/Map.js"
import Player from "./js/Player"
import Enemy from "./js/Enemy"

var enemyLen = 300
var enemy = []

const canvas = document.getElementById("canvas")
canvas.width = window.innerWidth > 1000 ? 1000 : window.innerWidth
canvas.height = window.innerHeight

map.init({
    canvas,
    width:canvas.width,
    height:canvas.height
})

map.render()

var player = new Player({
    x: map.width / 5,
    y: map.height * 0.6,
});

function createEnemy(){
    for(let i = 0; i <= enemyLen; i++){
        let x = Math.random()*map.width*2
        let speed  = Math.random()*3
        let y = 0
        enemy.push(
            new Enemy({
                x:x,y:y,speed:speed
            })
        )
        enemy[i].render()
    }
}
createEnemy()
//动画
const raf = window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.oRequestAnimationFrame
  || window.msRequestAnimationFrame
  || function(callback) {
    window.setTimeout(callback, 1000 / 60); //每帧1000/60ms
  };

(function animate(){
    map.render()
    player.render()
    for(let i = 0 ; i < enemyLen ; i++){
        enemy[i].render()
        enemy[i].updata()
    }
    raf(animate)
})()