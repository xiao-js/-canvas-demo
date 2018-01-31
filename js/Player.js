import Point from "./Point.js"
import map from "./Map.js"
export default class Player extends Point{
    constructor(option){
        super(option)
        this.life = option.life || 2
        this.tail = []  //尾巴点数组
        this.tailLen = 25 //尾巴长度
        this.radius = 4
        this.color = option.color
        this.binding()
        this.render()
    }
    binding(){
        self = this
        // let left = (document.getElementById("game").clientWidth - document.getElementById("world").clientWidth)/2;
        window.addEventListener('mousemove', (e = window.event) => {
            self.moveTo(e.clientX, e.clientY);
        });
    }
    moveTo(x,y){
        this.x = x
        this.y = y
    }
    
    render(){
        map.render()
        map.ctx.beginPath()
        map.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2)
        map.ctx.fillStyle= "#ff0000"
        map.ctx.fill()
    }
}