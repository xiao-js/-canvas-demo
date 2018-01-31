import Base from "./base"
class Action extends Base {
    constructor() {
        super()
        // console.log(super())
        this.createNum = true
    }

    aninmation() {

    }

    move(direction) {
        //不能改变遍历方向，那么把数组倒转
        this.createNum = false        
        if(direction == 'bottom' || direction == "top") {
            if(direction == 'bottom') {
                this.arrayList = this.arrayList.reverse()
            }
            for(let i = 0; i < this.arrayList.length; i++) {
                let item = this.arrayList[i]
                for(let j = 0; j < item.length; j++) {
                    let findIndex
                    for( let m = i+1; m<this.arrayList.length; m++) {
                        if(this.arrayList[m][j]) {
                            findIndex = m    
                            this.createNum = true                     
                            break
                        }
                    }
                    if(findIndex) {
                        if(!item[j]) {
                            item[j] = this.arrayList[findIndex][j]
                            this.arrayList[findIndex][j] = 0
                            i--
                            break
                        }else if(this.arrayList[findIndex][j] == item[j]) {
                            item[j] = this.arrayList[findIndex][j]*2
                            this.arrayList[findIndex][j] = 0
                            i--
                            break                            
                        }
                    }
                }
            }
            if(direction == 'bottom') {
                this.arrayList = this.arrayList.reverse()
            }
        } else if(direction == 'left' || direction == "right") {
            for(let i = 0; i < this.arrayList.length; i++) {
                let item = this.arrayList[i]
                if(direction == 'right') {
                    item = this.arrayList[i].reverse()
                }
                for(let j = 0; j < item.length; j++) {
                    let it = item[j]
                    let findIndex
                    for(let m = j+1; m < item.length; m++) {
                        if(item[m]) {
                            findIndex = m
                            this.createNum = true
                            break
                        }
                    }
                    if(findIndex) {
                        if(!it) {
                            item[j] = item[findIndex]
                            item[findIndex] = 0
                            j--
                        } else if(it === item[findIndex]) {
                            item[j] = item[findIndex]*2
                            item[findIndex] = 0
                            j--
                        }
                    }
                }
                if(direction == 'right') {
                    this.arrayList[i] = this.arrayList[i].reverse()
                }
            }
        }
    }

    test() {    //验证是否死亡   是否有空格   是否右边和下面一样
        let leftCount = 0 
        for(let i = 0; i< this.arrayList.length;i ++) {
            for(let j = 0; j< this.arrayList[i].length; j++) {
                let item = this.arrayList[i][j]
                if(i < this.arrayList.length-1) {
                    if(item == this.arrayList[i+1][j]) {
                        return true
                    }
                }
                if(j < this.arrayList[i].length -1) {
                    if(item == this.arrayList[i][j+1]) {
                        return true
                    }
                }
                if(!item) {
                    leftCount++
                }
                if(leftCount>=2) {
                    return true
                }
            }
        }
        return false
    }

    radom() {   //生成数字
        let x = this.radomNum().x
        let y = this.radomNum().y        
        let flag = 0
        if(!this.createNum) return; 
        while(flag<2) {
            let x = this.radomNum().x
            let y = this.radomNum().y
            if(!this.arrayList[x][y]) {
                this.arrayList[x][y] = Math.random() > 0.5 ? 4 : 2
                flag++
            }
        }
    }
    radomNum() {
        return {
            x: parseInt(Math.random()*4),
            y: parseInt(Math.random()*4)
        }
    }
}
export default new Action