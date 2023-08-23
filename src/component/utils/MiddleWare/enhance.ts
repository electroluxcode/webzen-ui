/**
 * @des 可以看作是函数增强 | 保存劫持函数 | 添加逻辑 | 返回enhance后的增强逻辑
 * 默认target 优先级是0 
 */
interface fnType{
    priority:number;
    fn:Function
}
class enhance{
    fnArray:Array<fnType>
    enhance:Record<any,any>
    constructor(targetFn:Function){
        this.fnArray = [{
            priority:0,
            fn:targetFn
        }]
        this.enhance = {

        }
    }
    addFunction(enhanceFn:Function,priority:number){
        this.fnArray?.push({
            fn:enhanceFn,
            priority
        })
    }
    next(arg:any){
        this.fnArray = this.fnArray?.sort((a,b)=>{
            return a.priority-b.priority
        })
        for(let i  =0;i<this.fnArray?.length;i++){
            this.fnArray[i].fn.call(this,arg)
        }
    }
    async asyncNext(arg:any){
        this.fnArray = this.fnArray?.sort((a,b)=>{
            return a.priority-b.priority
        })
        for(let i  =0;i<this.fnArray?.length;i++){
           await this.fnArray[i].fn.call(this,arg)
        }
    }
}





let sleepA=()=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("sleep了1秒")
        }, 1000);
    })
}
async function hello(this:enhance){
    await sleepA()
    if(!this.enhance.count){
        this.enhance.count = 1
    }else{
        this.enhance.count = this.enhance.count+1
    }
    console.log("劫持了 window.console:",this.enhance.count)
}

let ftest = new enhance(globalThis.console.log)
ftest.addFunction(hello,1)
ftest.asyncNext("传的参数2323").then((e)=>{
    console.log(ftest.enhance)
})


