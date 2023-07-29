
import Base from "../wz-base.js";
// @ts-ignore
import styles from "./index.css?inline" assert { type: "css" };


function switchJson(input:string){
  let init = input
  init = (Function("return " + init))()

  return init
}

class myDiv extends Base {
  #mask: HTMLElement | any;
  shadowRootInit: any
  /**
   * @des 重要1：小写才能被监听到 - 是为了方便辨认 - 异步改变值的之后能够被监听到
   * @des 生命周期方法 重新渲染 .甚至还是第一次进行渲染，比connect还快
   */
  static get observedAttributes() {
    return ["header-config", "header-config"];
  }
  attributeChangedCallback(attr: string, oldValue: string, newValue: any) {
    
    newValue = switchJson(newValue)
    if (oldValue) {
      
      // console.log("sss", newValue)
      switch (attr) {
        case "header-config":
          // this.#mask_player_title_text.textContent =
          //   "|" + newValue;
          break;
        case "body-config":

          // this.#mask_player.style.background =
          //   newValue;
          break;

      }
    }
    console.log("arrributeChangeCallback", attr, oldValue, newValue);
  }

  /**
   * @des 重要2：dom节点的渲染
   * @param data 
   */
  render(data: any) {
    let { title, background, color } = data;
    // console.log()
    let nodeTemplate = document.createElement("template");
    nodeTemplate.innerHTML = `
        <div  class="container" >
      我是测试
       </div>    
        `;
    this.shadowRootInit!.appendChild(nodeTemplate.content);

    this.#mask = this.shadowRootInit.querySelector(".mask")
    console.log(getComputedStyle(this).getPropertyValue("--body_color"))
    // this.style.setProperty("--bg-color","#1EB3635E")
  }

  constructor() {
    super();
    // 这样我们才能够去追加元素
    const shadowRoot = this.attachShadow({ mode: "open" });
    // shadowRoot.adoptedStyleSheets = [styles];
    this.adoptedStyle(styles);
    this.shadowRootInit = shadowRoot
  }

  /**
   * @des 能力增强 和 初始化数据
   */
  connectedCallback() {
    console.log("connectedCallback:",this)
    
    this.render({
      title: this.getAttribute("title"),
      background: this.getAttribute("background"),
      color: this.getAttribute("color"),
    });
    // 重要4:能力增强
    this.closeRender();
  }
  closeRender() {
    // this.#mask.addEventListener("click", () => {
    //   // this.#mask.style.display = "none";
    //   alert("点了我")
    // });
  }

  

  
}
// 名字必须小写 必须有横线
customElements.define("wz-card", myDiv);
