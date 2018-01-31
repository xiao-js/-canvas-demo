import Point from "./Point.js"
import map from "./Map.js"

export default class Enemy extends Point{
    constructor(option){
        //单个粒子属性
        super(option)
        this.speed = option.speed || 0.1
        this.radiusWidth = Math.random()*30
        this.color = this.colors()
    }
    updata(){
        this.x-=this.speed
        this.y+=this.speed
        this.radiusWidth = this.y/map.height*10
        if(this.x<0||this.y>map.height){
            this.x = Math.random()*map.width*2
            this.y = 0
            this.radiusWidth = Math.random()*3
            this.color = this.colors()
        }
    }
    colors(){
        var r = parseInt(Math.random()*255)
        var g = parseInt(Math.random()*255)
        var b = parseInt(Math.random()*255)
        return `rgb(${r},${g},${b})`
    }

    render(){
        // map.render()
        map.ctx.beginPath()
        map.ctx.arc(this.x,this.y,this.radiusWidth,0,Math.PI*2)
        map.ctx.fillStyle = this.color
        map.ctx.fill()

    }
}