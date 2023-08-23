Promise.asyncAll = function (promiseArray, timeout) {
    let count = 0;
    const arr = [];
    return new Promise((resolve) => {
        promiseArray.forEach((promiseItem, index) => {
            setTimeout(async (timeoutData) => {
                const { promiseItem, index, } = timeoutData;
                // console.log(promiseItem,promiseArray.length)
                console.log("延迟的函数:", index, promiseItem);
                let data = await promiseItem;
                count = count + 1;
                console.log("data", data, count);
                arr.push(data);
                if (count == promiseArray.length) {
                    resolve(arr);
                }
            }, index * timeout, {
                index: index,
                promiseItem: promiseItem,
            });
        });
    });
};
// Promise.asyncAll([sleep1(7000), sleep1(500)], 1000).then((e: any) => {
//     console.log(e)
// })
let sleep1 = (timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(timeout);
            resolve(timeout);
        }, timeout);
    });
};
export {};
// array.reduce(async(e,i)=>{
//     await asyncFunc({i})
// },all)
