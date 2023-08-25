import Base from "../wz-base.js";
// @ts-ignore
import styleslight from "./assets/light_white.css?inline" assert { type: "css" };
// @ts-ignore
import stylesdark from "./assets/dark_green_half.css?inline" assert { type: "css" };
function switchJson(input) {
    let init = input;
    init = (Function("return " + init))();
    return init;
}
class myDiv extends Base {
    close;
    config;
    /**
     * @des 初始化监听数据
     */
    static get observedAttributes() {
        return ["config"];
    }
    constructor() {
        super();
        // 是否 展开
        this.close = false;
    }
    /**
     * @des 初始化数据
     */
    connectedCallback() {
        this.render({});
        this.config = switchJson(this.getAttribute("config"));
        // 重要4:能力增强
        this.closeRender();
        this.adoptedStyle(styleslight);
        this.adoptedStyle(stylesdark);
    }
    // 重要4:能力增强
    closeRender() {
    }
    /**
     * @des 生命周期方法 重新渲染 .甚至还是第一次进行渲染，比connect还快
     * @param attr
     * @param oldValue
     * @param newValue
     */
    attributeChangedCallback(attr, oldValue, newValue) {
        newValue = switchJson(newValue);
        if (oldValue) {
            switch (attr) {
                case "header-config":
                    break;
            }
        }
    }
    /**
     * @des dom节点的渲染
     * @param data
     */
    render(data) {
        // let { title, background, color } = data;
        // console.log()
        let nodeTemplate = document.createElement("template");
        nodeTemplate.innerHTML = `
    <div class="card" >
        <div class="card_mask"></div>
  
        <div class="card_header_wrapper" part="card_header">
            <div class="card_header_wrapper_before"> </div>
            <div class="card_header_gradient ">
                <div class="card_header_left">
                  <slot name="card_header_left"></slot>
                </div>
                <div class="card_header_right">
                    <slot name="card_header_right"></slot>
                </div>
            </div>
        </div>
        <div class="card_body " part="card_body">
          <slot name="card_container"></slot>
        </div>
    </div>
        `;
        this.shadowRootInit.appendChild(nodeTemplate.content);
        // console.log(this.shadowRootInit.querySelector(":root"),this.shadowRootInit)
        // console.log(getComputedStyle(this).getPropertyValue("--card_title_color"))
        // this.style.setProperty("--bg-color","#1EB3635E")
        // console.log("render:全局",globalThis.getComputedStyle(this.shadowRootInit.querySelector(":host")).getPropertyValue("--card_title_color"))
    }
    /**
     * @des 暴露一个收缩 | 伸展方法
     */
    switchActive() {
        if (this.close) {
            this.shadowRootInit.querySelector(".card").style.height = "100%";
        }
        else {
            this.shadowRootInit.querySelector(".card").style.height = "var(--card_title_height)";
        }
        this.close = !this.close;
    }
}
// 名字必须小写 必须有横线
customElements.define("wz-card", myDiv);
