import Base from "./base"
class Map extends Base {
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
export default new Map;