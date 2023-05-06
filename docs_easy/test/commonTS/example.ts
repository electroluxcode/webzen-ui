const multiply1 = (a:number, b:number) => {
    return a * b
}




exports.multiply =  multiply1




function promiseTest(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("这是结果哦")
        },5000)
    })
}


exports.promiseTest =  promiseTest
