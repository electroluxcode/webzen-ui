const multiply = (a:number, b:number) => {
    return a * b
}




exports.multiply =  multiply




function promiseTest(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("这是结果哦")
        },5000)
    })
}


exports.promiseTest =  promiseTest
