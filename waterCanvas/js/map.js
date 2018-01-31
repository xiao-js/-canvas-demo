export default class Map{
    constructor(width,height,ctx){
        this.width = width
        this.height = height
        this.ctx = ctx
    }

    init(){
        this.ctx.beginPath()
        this.ctx.fillStyle="#fff"
        this.ctx.fillRect(0,0,this.width,this.height)
        this.ctx.fill()
    }
}

