//所有的点的父类
export default class Point{
    constructor(option){
        if(option){
            this.x = option.x || 1
            this.y = option.y || 1
            this.radius = option.radius
            this.color = option.color
        }
    }
}