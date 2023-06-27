
import Base from "../wz-base.js";
// @ts-ignore
import styles from "./index.css?inline" assert { type: "css" };
class myDiv extends  Base {
  #mask_player_title_close: HTMLElement | any;
  #mask: HTMLElement | any;
  #mask_player_title_text: HTMLElement | any;
  #mask_player: HTMLElement | any;
  #mask_player_container: HTMLElement | any
  shadowRootInit:any
  // 监听
  static get observedAttributes() {
    return ["title", "background", "color"];
  }

  constructor() {
    super();
    // 这样我们才能够去追加元素
    const shadowRoot = this.attachShadow({ mode: "open" });
    // shadowRoot.adoptedStyleSheets = [styles];
    this.adoptedStyle(styles);
    this.shadowRootInit = shadowRoot
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
    this.#mask_player_title_close.addEventListener("click", () => {
        this.#mask.style.display = "none";
      });
  }

  // 重要：生命周期方法 重新渲染 .甚至还是第一次进行渲染，比connect还快
  // 二次渲染的时候好用
  attributeChangedCallback(attr: string, oldValue: string, newValue: string) {
    if (oldValue) {
      switch (attr) {
        case "title":
          this.#mask_player_title_text.textContent =
            "|" + newValue;
          break;
        case "background":
          console.log("sss", newValue)
          this.#mask_player.style.background =
            newValue;
          break;
        case "color":
          this.#mask_player_container.style.color =
            newValue;
          break;
      }
    }
    console.log("arrributeChangeCallback", attr, oldValue, newValue);
  }
  render(data: any) {
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
    this.shadowRootInit!.appendChild(nodeTemplate.content);
    this.#mask_player_title_close = this.shadowRootInit.querySelector(".mask_player_title_close")
    this.#mask = this.shadowRootInit.querySelector(".mask")
    this.#mask_player_title_text = this.shadowRootInit.querySelector(".mask_player_title_text")
    this.#mask_player = this.shadowRootInit.querySelector(".mask_player")
    this.#mask_player_container = this.shadowRootInit.querySelector(".mask_player_container")
    console.log("this.#mask_player_title_close",this.#mask_player_title_close)
  }
}

// 名字必须小写 必须有横线
customElements.define("wz-iframe", myDiv);
