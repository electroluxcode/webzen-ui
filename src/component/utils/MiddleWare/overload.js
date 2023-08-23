/**
 * @des 函数重载 | 利用 map | 先addfn 接着 callfn
 * @returns
 */
class Overload {
    callMap;
    constructor() {
        this.callMap = new Map();
    }
    /**
     * @des 定义重载函数，接收入参类型 和 对应的function
     * @param params
     * @param fn
     * @returns
     */
    addFn(params, fn) {
        if (!fn || typeof fn !== "function") {
            return;
        }
        // 拿到传参的类型数组
        const types = JSON.stringify(params.map((v) => typeof v));
        this.callMap.set(types, fn);
    }
    /**
     * @des 根据类型找值进行调用
     * @param args
     * @returns
     */
    callFn(param) {
        const key = JSON.stringify(param.map((v) => typeof v));
        const value = this.callMap.get(key);
        if (value) {
            return value.apply(this, param);
        }
    }
}
// 使用示例
const overload = new Overload();
overload.addFn([1, 2], (a, b) => a + b); // 添加一个接收两个 number 参数的函数
overload.addFn(["string"], (str) => str.toUpperCase()); // 添加一个接收一个 string 参数的函数
console.log(overload.callFn([1, 2])); // 输出：3
console.log(overload.callFn(["hello"])); // 输出：HELLO
console.log(overload.callFn([1, "world"])); // 输出：undefined，没有对应的函数
// 这种情况 用类似函数记忆那种 方式有问题因为 不是 一对一的
function overloadFn(fn) {
    let cache = new Map();
    return;
}
export { Overload };
// function fc([a]){
//   console.log(a)
// }
