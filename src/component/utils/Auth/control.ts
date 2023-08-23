
/**
 * @des 控制按钮显隐
 */

class AuthControl{
    authList:string[]
    authRender:Map<string,any>
    constructor(){
        this.authList = [
            "list/button/add",
            "list/button/delete"
        ]
        this.authRender = new Map()
        this.render()
    }
    render(){
        this.authList.forEach((e:string)=>{
            this.authRender.set(e,1)
        })
    }
    
}


let auth = new AuthControl();

// 输出json
console.log(Object.fromEntries(auth.authRender))

// 获取所有需要判断的权限列表 
let allDom = document.querySelectorAll("[vif]") as  unknown as HTMLDivElement[]
allDom.forEach((e:HTMLDivElement)=>{
    let attr = e.getAttribute("vif")!
    // 权限判断 | weakmap | hash 都可以
    if(!auth.authRender.get(attr)){
        e.style.display="none"
    }
})