var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _myDiv_mask_player_title_close, _myDiv_mask, _myDiv_mask_player_title_text, _myDiv_mask_player, _myDiv_mask_player_container;
import Base from "../wz-base.js";
// @ts-ignore
import styles from "./index.css?inline" assert { type: "css" };
class myDiv extends Base {
    constructor() {
        super();
        _myDiv_mask_player_title_close.set(this, void 0);
        _myDiv_mask.set(this, void 0);
        _myDiv_mask_player_title_text.set(this, void 0);
        _myDiv_mask_player.set(this, void 0);
        _myDiv_mask_player_container.set(this, void 0);
        // 这样我们才能够去追加元素
        const shadowRoot = this.attachShadow({ mode: "open" });
        // shadowRoot.adoptedStyleSheets = [styles];
        this.adoptedStyle(styles);
        this.shadowRootInit = shadowRoot;
    }
    // 监听
    static get observedAttributes() {
        return ["title", "background", "color"];
    }
    // 重要：生命周期方法 开始
    connectedCallback() {
        console.log("connectedCallback生命周期", styles);
        // 获取元素
        // console.log(this.shadowRoot.querySelector(".content"))
        // 获取属性
        // console.log( this.getAttribute("data-title"))
        this.render({
            title: this.getAttribute("title"),
            background: this.getAttribute("background"),
            color: this.getAttribute("color"),
        });
        this.closeRender();
    }
    closeRender() {
        console.log("borderadd");
        __classPrivateFieldGet(this, _myDiv_mask_player_title_close, "f").addEventListener("click", () => {
            __classPrivateFieldGet(this, _myDiv_mask, "f").style.display = "none";
        });
    }
    // 重要：生命周期方法 重新渲染 .甚至还是第一次进行渲染，比connect还快
    // 二次渲染的时候好用
    attributeChangedCallback(attr, oldValue, newValue) {
        if (oldValue) {
            switch (attr) {
                case "title":
                    __classPrivateFieldGet(this, _myDiv_mask_player_title_text, "f").textContent =
                        "|" + newValue;
                    break;
                case "background":
                    console.log("sss", newValue);
                    __classPrivateFieldGet(this, _myDiv_mask_player, "f").style.background =
                        newValue;
                    break;
                case "color":
                    __classPrivateFieldGet(this, _myDiv_mask_player_container, "f").style.color =
                        newValue;
                    break;
            }
        }
        console.log("arrributeChangeCallback", attr, oldValue, newValue);
    }
    render(data) {
        let { title, background, color } = data;
        // console.log()
        let nodeTemplate = document.createElement("template");
        nodeTemplate.innerHTML = `
        <div  class="mask" >
        <div class="mask_player" style="background:${background};">
          <div class="mask_player_title" style="color:${color}">
            <div class="mask_player_title_text">| ${title}</div>
            <div class="mask_player_title_close" >x</div>
          </div>
          <div class="mask_player_container">     
            <slot ></slot>
          </div>
        </div>
      </div>    
        `;
        this.shadowRootInit.appendChild(nodeTemplate.content);
        __classPrivateFieldSet(this, _myDiv_mask_player_title_close, this.shadowRootInit.querySelector(".mask_player_title_close"), "f");
        __classPrivateFieldSet(this, _myDiv_mask, this.shadowRootInit.querySelector(".mask"), "f");
        __classPrivateFieldSet(this, _myDiv_mask_player_title_text, this.shadowRootInit.querySelector(".mask_player_title_text"), "f");
        __classPrivateFieldSet(this, _myDiv_mask_player, this.shadowRootInit.querySelector(".mask_player"), "f");
        __classPrivateFieldSet(this, _myDiv_mask_player_container, this.shadowRootInit.querySelector(".mask_player_container"), "f");
        console.log("this.#mask_player_title_close", __classPrivateFieldGet(this, _myDiv_mask_player_title_close, "f"));
    }
}
_myDiv_mask_player_title_close = new WeakMap(), _myDiv_mask = new WeakMap(), _myDiv_mask_player_title_text = new WeakMap(), _myDiv_mask_player = new WeakMap(), _myDiv_mask_player_container = new WeakMap();
// 名字必须小写 必须有横线
customElements.define("wz-iframe", myDiv);
