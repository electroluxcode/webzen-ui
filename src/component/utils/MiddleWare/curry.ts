function curry(fn: any): any {
    // curriedFn 为柯里化生产的新函数
    // 之前传入的参数都储存在 args 中
    return function curriedFn(): any {
        // console.log("res:",args,JSON.stringify(Array.from(arguments)))
        // return function(params:any){
        //     return curriedFn(params)
        // }
        let beforeArr = arguments
        if (beforeArr.length < 3) {
            return function () {
        
                // console.log(beforeArr)
                // 递归执行，重复之前的过程
                // @ts-ignore
                return curriedFn(Array.from(arguments).concat(beforeArr))
            }
        }
        console.log(beforeArr)
        return fn(beforeArr)
    }
}
let add = (p1: any, p2: any) => {
    return p1 + p2
}
let test = curry(add)
console.log(test(1)(3)(5))


