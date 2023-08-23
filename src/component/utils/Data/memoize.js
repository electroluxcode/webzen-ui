"use strict";
/**
 * @des 函数记忆
 */
function memoizeAsync(func) {
    const cache = new Map();
    return async (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log("触发记忆");
            return cache.get(key);
        }
        const resultPromise = func(...args);
        cache.set(key, resultPromise);
        try {
            const result = await resultPromise;
            return result;
        }
        catch (error) {
            cache.delete(key);
            throw error;
        }
    };
}
let sleep = (a, b) => {
    return a + b;
};
let sleepTest = memoizeAsync(sleep);
console.log(sleepTest(1, 5));
console.log(sleepTest(1, 2));
console.log(sleepTest(1, 5));
// console.log()
