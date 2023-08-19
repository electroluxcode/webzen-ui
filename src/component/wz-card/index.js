import Base from "../wz-base.js";
// @ts-ignore
import styles from "./index.css?inline" assert { type: "css" };
// @ts-ignore
import stylesnight from "./night.css?inline" assert { type: "css" };
console.log("styles:", styles);
function switchJson(input) {
    let init = input;
    init = (Function("return " + init))();
    return init;
}
function dataCssSwitch(headerConfig, bodyConfig, that) {
    if (!bodyConfig || !headerConfig) {
        that.shadowRootInit.querySelector(".card_header_wrapper").style.borderBottom = "unset";
        that.shadowRootInit.querySelector(".card").style.border = "unset";
        that.shadowRootInit.querySelector(".card_header_wrapper_before").style.width = "30%";
        console.log("参数传递有漏");
        return;
    }
    // 内容-颜色
    if (bodyConfig.cardBodyColor) {
        that.style.setProperty("--card_body_color", bodyConfig.cardBodyColor);
    }
    else {
        that.style.setProperty("--card_body_color", "transparent");
    }
    // 头部-颜色
    if (headerConfig.cardTitleTargetColor) {
        that.style.setProperty("--card_title_target_color", headerConfig.cardTitleTargetColor);
        that.style.setProperty("--card_title_color", headerConfig.cardTitleColor);
        that.shadowRootInit.querySelector(".card_header_wrapper_before").style.width = "30%";
        that.shadowRootInit.querySelector(".card_header_wrapper").style.borderBottom = "unset";
        that.shadowRootInit.querySelector(".card").style.border = "unset";
    }
    else {
        that.shadowRootInit.querySelector(".card_header_wrapper_before").style.width = "100%";
        that.shadowRootInit.querySelector(".card_header_wrapper_before").style.background = headerConfig.cardTitleColor;
    }
    // 字体颜色
    if (headerConfig.fontColor) {
        that.shadowRootInit.querySelector(".card").style.color = headerConfig.fontColor;
    }
}
class myDiv extends Base {
    close;
    headerConfig;
    bodyConfig;
    /**
     * @des 初始化监听数据
     */
    static get observedAttributes() {
        return ["header-config", "body-config"];
    }
    constructor() {
        super();
        // 是否 展开
        this.close = false;
        this.adoptedStyle(styles);
        this.adoptedStyle(stylesnight);
    }
    /**
     * @des 初始化数据
     */
    connectedCallback() {
        this.render({});
        this.headerConfig = switchJson(this.getAttribute("header-config"));
        this.bodyConfig = switchJson(this.getAttribute("body-config"));
        // console.log("this.headerConfig,this.bodyConfig:",this.headerConfig,this.bodyConfig)
        // 重要4:能力增强
        this.closeRender();
        dataCssSwitch(this.headerConfig, this.bodyConfig, this);
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
            // console.log("sss", newValue)
            switch (attr) {
                case "header-config":
                    break;
                case "body-config":
                    // this.#mask_player.style.background =
                    //   newValue;
                    break;
            }
        }
        // console.log("arrributeChangeCallback", attr, oldValue, newValue);
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
  
        <div class="card_header_wrapper">
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
        <div class="card_body ">
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
            // this.shadowRootInit.querySelector(".card_mask").style.height = "100%"
        }
        else {
            // this.shadowRootInit.querySelector(".card_mask").style.height = "var(--card_title_height)"
            this.shadowRootInit.querySelector(".card").style.height = "var(--card_title_height)";
        }
        this.close = !this.close;
    }
}
// 名字必须小写 必须有横线
customElements.define("wz-card", myDiv);
