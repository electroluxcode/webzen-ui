let debounce=(fn:Function,timer:number)=>{
    let flag:any;
    return function(args:any){
        if(flag){
            clearTimeout(flag);
        }
        flag = setTimeout(() => {
            fn(args);
        }, timer);
    }

}

// let throle =(fn:Function,timer:number)=>{
//     let flag = true;
//     let fn
//     return function(){
//         if(time == true){
//             fn();
//             clearTimeout(fn)
//             time =false
//         }
//         fn = setTimeout(() => {
//             flag = false
//         }, timer);
//     }

// }
// let hello1 = (param:any)=>{
//     console.log(param)
// }
// let enhanceFn = debounce(hello1,3000)

// enhanceFn(111)
// setTimeout(() => {
//     enhanceFn(333)
// }, 1000);