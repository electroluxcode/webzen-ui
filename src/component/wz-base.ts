import eventbus from "./utils/Data/eventbus.js"
import { throle } from "./utils/Api/debouce.js"
export default interface Base {
  slots: HTMLSlotElement
  mounted: Boolean
}
interface themeType {
  mode: "light" | "night"
}
export default class Base extends HTMLElement {

  shadowRootInit: any;
  static urlPrefix = 'https://cdn.jsdelivr.net/npm/webzen-ui-icons'
  // this.slots : Object
  constructor() {

    super();
    this.shadowRootInit = this.attachShadow({ mode: "open" })
    // console.log(document.querySelectorAll(":not(:defined)"))
    // this.theme()
    // let enhanceMount = throle(, 100)
    // enhanceMount()
    this.mount()
    // this.mount()
  }

  async mount() {
    console.log("开始挂载")
    const undefinedElements = document.querySelectorAll(":not(:defined)");

    const promises = [...undefinedElements].map((button) => {

      return customElements.whenDefined(button.localName)
    },
    );

    let res = await Promise.all(promises);
    //  挂载完成后的事情
    this.theme()
  }
  /**
   * @des e 没有传参 就是 初始化，传参就是切换
   * @param e 
   */
  theme(e?: themeType) {
    // 注册全局数据
    // let fn = this.mode.bind(this)
    // eventbus.add("mode",fn)
    // if((window as any).webzen){
    //   (window as any).webzen["mode"].push(...eventbus.eventBus["mode"])
    // }else{
    //   (window as any).webzen =(eventbus.eventBus)
    // }
    // // 注册全局方法
    // (window as any).webzenModeFn =(eventbus.emit)

    let temp = localStorage.getItem("webzen_theme")
    do {
      // 初始化
      if (!temp) {
        let init = { mode: "light" }
        localStorage.setItem("webzen_theme", JSON.stringify(init))
        this.mode({ mode: "light" })
      }
      // 读取缓存 | e不存在 和 temp存在
      if (temp && JSON.parse(temp)["mode"] && !e) {
        this.mode({ mode: JSON.parse(temp)["mode"] })
      }
      // 更改缓存 | e存在 和 temp存在
      if (e) {
        let init = { mode: e.mode }
        localStorage.setItem("webzen_theme", JSON.stringify(init))
        this.mode({ mode: e.mode })
      }
    } while (false)
  }
  /**
   * @des 深色浅色模式切换
   * @param e 
   */
  mode(e: themeType) {

    if (this.shadowRootInit.children.length > 1) {
      throw new Error("根元素不能超过1个")
    }
    if (e.mode == "light") {
      this.shadowRootInit.children[0].classList.remove("dark")
    } else {
      this.shadowRootInit.children[0].classList.add("dark")
    }
    console.log("出现吧", eventbus.eventBus, e)
  }

  adoptedStyle(style: CSSStyleSheet) {
    let styleSheet = style
    if (!style.type) {
      // vite会把style编译成成字符串
      styleSheet = new CSSStyleSheet();
      //@ts-ignore
      styleSheet.replace(style);
    }
    this.shadowRoot!.adoptedStyleSheets = [...this.shadowRoot!.adoptedStyleSheets, styleSheet];
  }
  get name() {
    return this.getAttribute('name')!
  }
  set name(value: string) {
    this.setAttribute('name', value)
    return
  }
  get attr() {
    const attrs = ['type', 'class']
    return [...this.attributes]
      .filter((el) => !el.name.startsWith("on") && !attrs.includes(el.name))
      .map((e) => e.name + "='" + (e.value || 'true') + "'").join(' ')
  }

  // slot元素渲染完成
  renderSlot() {
    if (!this.slots) {
      this.slots = this.shadowRoot!.querySelector('slot')!
    }
    if (!this.slots) return
    return new Promise((resolve: any) => {
      if (this.mounted) {
        resolve(0)
      } else {
        this.slots.addEventListener("slotchange", () => {
          this.mounted = true
          resolve()
        })
      }
    })
  }
}