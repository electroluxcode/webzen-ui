"use strict";
// // 编译 private并没有 什么特殊的情况
// 第一步：获得上下文 =>canvasElem.getContext('2d');
// 第二步：开始路径规划 =>ctx.beginPath()
// 第三步：移动起始点 =>ctx.moveTo(x, y)
// 第四步：绘制线(矩形、圆形、图片...) =>ctx.lineTo(x, y)
// 第五步：闭合路径 =>ctx.closePath();
// 第六步：绘制描边 =>ctx.stroke();
class paint {
    isBanlance;
    isResponse;
    dom;
    baseMsg;
    constructor(dom) {
        this.isBanlance = true;
        this.isResponse = true;
        this.dom = dom;
        this.baseMsg = {
            width: this.dom.offsetWidth,
            height: this.dom.offsetHeight
        };
    }
}
// extends可以实现 接口与接口，接口与类 的继承
// implements本质上是用来实现类实现接口
// implements时，需要定义或实现所有属性和方法(总结来说,简单一点)
// abstract class AbstractParent {
//     abstract abstractFunc():string
// }
// class child extends AbstractParent {
//     abstractFunc():string {
//         return ''
//     }
// }
// window.console = ()=>{
//     let i = 0;
//     console.log(++i)
//     return window.console
// }
