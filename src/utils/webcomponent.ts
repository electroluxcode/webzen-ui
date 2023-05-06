

import styles from "../css/normal.css" assert { type: "css" };
let style_res = new CSSStyleSheet();
style_res.replaceSync(styles);
class myDiv extends HTMLElement {
    // 监听
    static get observedAttributes(){
        return ["option","name"]
    }
    constructor() {
        super();
        // 这样我们才能够去追加元素
        this.attachShadow({ mode: 'open' })
      
    }

    // 重要：生命周期方法 开始
    connectedCallback() {
        console.log("connectedCallback生命周期")
        this.render()
    }
    attributeChangedCallback(attr:string,oldValue:string,newValue:string){
    }

    async render() {
        
        console.log("styles:",typeof styles)
        let nodeTemplate = document.createElement("template")
        nodeTemplate.innerHTML = `
            <div class="content" >
                <div class="title">组件 </div> 
                <slot name="container"></slot>
            </div>
        `
  
        // const styles = await import(/* webpackChunkName: "webcomponent" */'./webcomponent.css', {
        //     assert: { type: 'css' }
        // });
        this.shadowRoot!.appendChild(nodeTemplate.content)
        // console.log("style:",styles)
       //@
    //    styles.then((e)=>{
    //     console.log(e,"333")
    //     this.shadowRoot!.adoptedStyleSheets =[styles]
    //    })
       this.shadowRoot!.adoptedStyleSheets =[style_res]
     
        
    }
}
// 名字必须小写 必须有横线
customElements.define("my-div", myDiv)

export default myDiv

