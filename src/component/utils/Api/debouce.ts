declare global {
    interface Window {
        flag: any;
        throleFlag:boolean
    }
  }
let debounce=(fn:Function,timer:number)=>{
    window.flag;
    return function(args:any){
        if(window.flag){
            clearTimeout(window.flag);
        }
        window.flag = setTimeout(() => {

            fn(args);
        }, timer);
    }

}
window.throleFlag = true
let throle =(fn:Function,timer:number)=>{
    window.throleFlag ;

    return function(){
        if(window.throleFlag == true){
            fn();
            window.throleFlag =false
        }
        setTimeout(() => {
            window.throleFlag = true
        }, timer);
    }

}
export {debounce,throle}
// let hello1 = (param:any)=>{
//     console.log(param)
// }
// let enhanceFn = debounce(hello1,3000)

// enhanceFn(111)
// setTimeout(() => {
//     enhanceFn(333)
// }, 1000);