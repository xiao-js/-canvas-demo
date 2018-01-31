export default class Point {
    constructor(x, y, r, ctx) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.r = r
    }

    init() {
        this.ctx.beginPath()
        this.ctx.fillStyle = "#333"
        this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        this.ctx.fill()
    }

    animation(r) {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.r + r, 0, Math.PI * 2)
        this.ctx.fill()
    }

}