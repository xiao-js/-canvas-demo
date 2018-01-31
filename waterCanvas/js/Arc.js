export default class Arc {
	constructor(x, y, ctx, r) {
		this.x = x
		this.y = y
		this.ctx = ctx
		this.r = r
		this.begin = 1
	}
	step() {
		if (this.begin > this.r) {
			this.begin = 0
		}
		this.ctx.beginPath()
		this.ctx.strokeStyle = "raga(255,255,255,0)"
		this.ctx.arc(this.x, this.y, this.begin, 0, Math.PI * 2)
		this.ctx.stroke()
		this.begin++
	}


}