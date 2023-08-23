/**
 * @des 链式调用数据
 */
class Chain {
    fn;
    nodeNext;
    // 一般会被当作初始数据
    ChainData;
    constructor(fn) {
        this.fn = fn;
        this.ChainData = {};
        this.nodeNext = null;
    }
    /**
     * @des 触发某一个事件
     * @param name
     * @param data 给function的值
     */
    emit = (name, data) => {
        // 判断
        console.log(this.ChainData);
        if (this.ChainData.eventBus) {
            if (this.ChainData.eventBus[name]) {
                this.ChainData.eventBus[name].forEach((element) => {
                    console.log(data);
                    element(data);
                });
            }
            else {
                throw new Error('没有这个事件');
            }
        }
    };
    /**
     * @des 初始化数据
     * @param data
     */
    dataSet(data) {
        this.ChainData = data;
    }
    /**
     * @des settimeout的 异步
     * this.fn(...args) 不会返回值那么就要放到后面去 | 避免 return 判断。因为不会return 值
     * @param args
     * @returns
     */
    asycNext() {
        if (this.nodeNext) {
            this.nodeNext.dataSet(this.ChainData);
            return this.nodeNext.passRequest();
        }
        return this.fn();
    }
    nodeSet(nodeNext) {
        this.nodeNext = nodeNext;
    }
    passRequest() {
        // 执行这个方法
        const res = this.fn();
        if (res === 'chainNext') {
            if (this.nodeNext) {
                // 所有的函数都要用 chain 方法包起来，否则没有 this.nodeNext
                this.nodeNext.dataSet(this.ChainData);
                return this.nodeNext.passRequest();
            }
        }
        if (this.nodeNext) {
            this.nodeNext.dataSet(this.ChainData);
        }
        return res;
    }
}
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                code: 200,
                data: [
                    { id: 1, name: "小明" }
                ]
            });
        }, 1000);
    });
};
// /**
//  * @des 初始化数据
//  * @param this 
//  * @returns 
//  */
// function initPost(this:ExtendedChainData) {
//   console.log('第一步:', this.ChainData);
//   return 'chainNext';
// }
// /**
//  * @des 异步逻辑
//  * @param this 
//  */
// async function asyncPost(this:ExtendedChainData) {
//   let data = await sleep() 
//   this.ChainData.res = data
//   console.log('第二步:', this.ChainData);
//   this.asycNext()
// }
// /**
//  * @des 异常处理
//  * try catch catch 中 this.emit("error","xxx报错就好了")
//  * 如果外部不 throw 他就不会停止
//  */
// async function errorPost(this:ExtendedChainData) {
//   this.emit("error","errorPost 报错示例")
//   console.log('第三步:', this.ChainData);
//   this.asycNext();
// }
// /** 
//  * @des 兜底
//  * @returns 
//  */
// function asSure(this:ExtendedChainData): OrderResult {
//   console.log('第四步:', this.ChainData);
//   this.emit("finish","chain传过来")
// }
// // 1. 初始化 链条
// const chainInitPost = new Chain(initPost);
// const chainAsyncPost = new Chain(asyncPost);
// const chainErrorPost = new Chain(errorPost);
// const chainOrderLast = new Chain(asSure);
// // 2. 设置关系 注意异步 用await 处理逻辑后调用 asyncNext 方法
// chainInitPost.nodeSet(chainAsyncPost);
// chainAsyncPost.nodeSet(chainErrorPost);
// chainErrorPost.nodeSet(chainOrderLast);
// // 3. 开始执行。从一开始的链条开始执行
// chainInitPost.dataSet({
//   eventBus:{
//     finish:[
//       (e:any)=>{
//         console.log("完成:",e)
//       }
//     ],
//     error:[
//       (e:any)=>{
//         console.log("error:",e)
//       }
//     ]
//   }
// })
// chainInitPost.passRequest();
export { Chain };
