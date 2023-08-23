"use strict";
class enhance {
    fnArray;
    enhance;
    constructor(targetFn) {
        this.fnArray = [{
                priority: 0,
                fn: targetFn
            }];
        this.enhance = {};
    }
    addFunction(enhanceFn, priority) {
        this.fnArray?.push({
            fn: enhanceFn,
            priority
        });
    }
    next(arg) {
        this.fnArray = this.fnArray?.sort((a, b) => {
            return a.priority - b.priority;
        });
        for (let i = 0; i < this.fnArray?.length; i++) {
            this.fnArray[i].fn.call(this, arg);
        }
    }
    async asyncNext(arg) {
        this.fnArray = this.fnArray?.sort((a, b) => {
            return a.priority - b.priority;
        });
        for (let i = 0; i < this.fnArray?.length; i++) {
            await this.fnArray[i].fn.call(this, arg);
        }
    }
}
let sleepA = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("sleep了1秒");
        }, 1000);
    });
};
async function hello() {
    await sleepA();
    if (!this.enhance.count) {
        this.enhance.count = 1;
    }
    else {
        this.enhance.count = this.enhance.count + 1;
    }
    console.log("劫持了 window.console:", this.enhance.count);
}
let ftest = new enhance(globalThis.console.log);
ftest.addFunction(hello, 1);
ftest.asyncNext("传的参数2323").then((e) => {
    console.log(ftest.enhance);
});
