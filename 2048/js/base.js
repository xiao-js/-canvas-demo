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

export default Base;