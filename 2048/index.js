import Map from './js/map'
import Action from './js/action'
Action.radom()      //生成数字
Map.drawMap()       //生成地图
Map.drawItem()      //生成数字对应的视图

let over = false
function goStep(direction) {
    if(over) return;
    Action.move(direction)
    Action.radom()
    Map.clear()
    Map.drawMap()
    Map.drawItem()
    if(Action.test()) {
        
    } else {
        alert("game over")
        over = true
    }
}
document.addEventListener("keydown", e =>{
    console.log(e.which)
    switch(e.which) {
        case 38:
            goStep("top")
            break
        case 39:
            goStep("right")
            break
        case 40:
            goStep("bottom")
            break
        case 37:
            goStep("left")
            break 
    }
})