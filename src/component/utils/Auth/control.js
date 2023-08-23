"use strict";
/**
 * @des 控制按钮显隐
 */
class AuthControl {
    authList;
    authRender;
    constructor() {
        this.authList = [
            "list/button/add",
            "list/button/delete"
        ];
        this.authRender = new Map();
        this.render();
    }
    render() {
        this.authList.forEach((e) => {
            this.authRender.set(e, 1);
        });
    }
}
let auth = new AuthControl();
// 输出json
console.log(Object.fromEntries(auth.authRender));
// 获取所有需要判断的权限列表 
let allDom = document.querySelectorAll("[vif]");
allDom.forEach((e) => {
    let attr = e.getAttribute("vif");
    // 权限判断 | weakmap | hash 都可以
    if (!auth.authRender.get(attr)) {
        e.style.display = "none";
    }
});
