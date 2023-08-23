// function singleton(classN: any){
//     let ins:any
//     return new Proxy(classN,{
//         // 将 target 参数的类型标注为 never，并将其命名为 _target，表示我不会使用它。这样做就可以避免 TypeScript 报错，同时仍然能够顺利编译和运行该代码。
//         construct(target,arg){
//             if(!ins){
//                 ins = new classN(...arg)
//             }
//             console.log("触发")
//             return ins
//         }
//     })
// }
function singleton(classN: any):any{
    let ins:any
    return function(args:any){
        if(!ins){
            ins = new classN(args)
            return ins
        }
        return ins
    }
}
class testParam{
    a:any
    constructor(a:any){
        this.a = a
    }
    test(){
        console.log("???",this.a)
    }
}

let ano = singleton(testParam)
let v =new ano("ddddd")
let c =new ano("ddddd22222")
c.test()
v.test()