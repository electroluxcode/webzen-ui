
import Base from "../wz-base.js";
// @ts-ignore
import left from "./left.css?inline" assert { type: "css" };
import top_card from "./top_card.css?inline" assert { type: "css" };
import top from "./top.css?inline" assert { type: "css" };
import top_middle from "./top_middle.css?inline" assert { type: "css" };
function switchJson(input: string): any {
  let init = input
  init = (Function("return " + init))()

  return init
}



type base = "left" | "top" | "top_card" | "top_middle"
interface TabsParamsType {
  position: base
}

function dataJsSwitch(mode:base,that: myDiv) {
  let tab_values = that.querySelectorAll('[slot="tabs_value"]')
  let tab_indexs =  that.querySelectorAll('[slot="tabs_index"]')
  // console.log("tab_indexs,tab_values:",tab_indexs.children.length,tab_indexs.children.length)
  // if(tab_indexs.children.length!=tab_values.children.length){
  //   return
  // }
  
  // 初始化 tab_index | 左边的初始化活跃
  let first_index = that.querySelector('[slot="tabs_index"]') as HTMLDivElement
  if(!first_index){
    console.log("找不到元素")
    return
  }
  first_index.classList.add("text_active")
  first_index.style.color=`
    rgb(13, 108, 252)
  `
 
  if(mode=="top_card"){
    that.querySelectorAll('[slot="tabs_index"]').forEach((e:any)=>{
      e.style=`
      font-size: 12px;
      font-family: PingFang, sans-serif;
      line-height: 1rem;
      /* color: #979797; */
      background: rgb(240, 240, 240);
      cursor: pointer;
      margin: 1px;
      padding:8px 10px;
      border-radius: 6px 6px 0px 0px;
      border: 1px solid #f0f0f0;
      transition: color .3s ;
    `
    })
    // @ts-ignore
    first_index.style=`
      position: relative;
      color: rgb(13, 108, 252);
      border-bottom: 0px;
      background: rgb(255, 255, 255);
    `
  }




  // 初始化下划线
  let divline = that.shadowRootInit.querySelector(".divline")
  if(mode=="top" || mode == "top_middle"){
    console.log(first_index.offsetLeft ,that.offsetLeft)
    divline.style.width = first_index.offsetWidth + "px"
    divline.style.left = first_index.offsetLeft -that.offsetLeft + "px"
    divline.style.top = (that.shadowRootInit.querySelector(".tab") as HTMLDivElement)!.offsetHeight -2 + "px"
  }
  if(mode=="left"){
    divline.style.width = first_index.offsetWidth-2 + "px"
  }
  if(mode=="top_card"){
    divline.style.display="none"
  }
  
  // 初始化内容  tab_value
  Array.from(tab_values).forEach((e) => {
    (e as HTMLDivElement).style.display = "none"
  })


  let first_value = that.querySelector(`[tab_value_key="${first_index.getAttribute("tab_item_key")}"]`) as HTMLDivElement
  // first_value.classList.add("move_left")
  first_value.style.display = "block"


  // 点击 事件
  that.shadowRootInit.querySelector(".tab").addEventListener("click", (e :any) => {
    if (JSON.stringify(e.target.getAttribute("tab_item_key"))) {
      // tab_index 的切换
      Array.from(tab_indexs).forEach((e:any) => {
        (e as  HTMLDivElement).classList.remove("text_active")
        e.style=`
        position: relative;
        color:rgb(151, 151, 151);
        `
        if(mode=="top_card"){
          e.style=`
          font-size: 12px;
          font-family: PingFang, sans-serif;
          line-height: 1rem;
          /* color: #979797; */
          background: rgb(240, 240, 240);
          cursor: pointer;
          margin: 1px;
          padding:8px 10px;
          border-radius: 6px 6px 0px 0px;
          border: 1px solid #f0f0f0;
          transition: color .3s ;
        `
        
        }
      })
      e.target.classList.add("text_active")
      e.target.style=`
      position: relative;
      color: rgb(13, 108, 252);
      `
      if(mode=="top_card"){
        // @ts-ignore
        e.style=`
          position: relative;
          color: rgb(13, 108, 252);
          border-bottom: 0px;
          background: rgb(255, 255, 255);
        `
      }
      let target_index = e.target.getAttribute("tab_item_key")

      // tab_value 的切换
      Array.from(tab_values).forEach((e:any) => {
        e.style.display = "none"
        // e.classList.remove("move_left")
      })
      let target_value = that.querySelector(`[tab_value_key="${target_index}"]`)! as HTMLDivElement
      target_value.style.display = "block"
      console.log("e.target", e.target)
      // target_value.classList.add("move_left")


      // 下拉条

      let index = Array.from(tab_indexs).indexOf(e.target)
      if(mode=="top"  || "top_middle"){
        divline.style.left = e.target.offsetLeft-that.offsetLeft + "px"
        divline.style.width = e.target.offsetWidth-2 + "px"
      }
      
      if(mode=="left"){
        divline.style.top = index * 36 + "px"
      }
    }
  })

  // 横向滚动条
  const sidebar = that.shadowRootInit.querySelector('.tab');
  if(mode=="top" || mode=="top_middle" || mode=="top_card"){
    sidebar.addEventListener('wheel', function (event:any) {
      const scrollAmount = event.deltaY;
  
      // 滚轮向上滚动，向左滚动侧边内容
      if (scrollAmount < 0) {
        this.scrollLeft -= 50;
      }
      // 滚轮向下滚动，向右滚动侧边内容
      else {
        this.scrollLeft += 50;
      }
  
      event.preventDefault();
    });
  }
  
}


function dataCssSwitch(tabs_params: TabsParamsType, that: myDiv) {
  if (!tabs_params) {

    console.log("参数传递有漏")
    return
  }
  if (tabs_params.position == "left") {
    that.adoptedStyle(left);
    dataJsSwitch("left",that)
  }
  if (tabs_params.position == "top") {
    that.adoptedStyle(top);
    dataJsSwitch("top",that)

  }
  if (tabs_params.position == "top_card") {
    that.adoptedStyle(top_card);
    dataJsSwitch("top_card",that)
  }
  if (tabs_params.position == "top_middle") {
    that.adoptedStyle(top_middle);
    
    dataJsSwitch("top_middle",that)
  }
}

class myDiv extends Base {
  shadowRootInit: any;
  close: boolean;
  Config!: TabsParamsType;
  /**
   * @des 初始化监听数据
   */
  static get observedAttributes() {
    return ["tabs_params"];
  }

  constructor() {
    super();
    // 是否 展开
    this.close = false
    const shadowRoot = this.attachShadow({ mode: "open" });
    // this.adoptedStyle(styles);
    this.shadowRootInit = shadowRoot
  }

  /**
   * @des step1:初始化数据
   */
  connectedCallback() {
    console.log("connectedCallback:", this)
    this.render({})
    this.Config = switchJson(this.getAttribute("tabs_params")!)
    // console.log("this.headerConfig,this.bodyConfig:",this.headerConfig,this.bodyConfig)

    // 重要4:能力增强
    this.closeRender();
    dataCssSwitch(this.Config, this)
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
  attributeChangedCallback(attr: string, oldValue: string, newValue: any) {

    newValue = switchJson(newValue)
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
  render(data: any) {
    // let { title, background, color } = data;
    // console.log()
    let nodeTemplate = document.createElement("template");
    nodeTemplate.innerHTML = `
    <div class="component_container">

        <div class="tab center">
            
            
            <slot name="tabs_index">
            
            </slot>
            <div class="divline"></div>
          
        </div>
        <div class="container">
            
           
            <slot name="tabs_value">
            
            </slot>
        </div>
    </div>
        `;

    this.shadowRootInit!.appendChild(nodeTemplate.content);
    // console.log(this.shadowRootInit.querySelector(":root"),this.shadowRootInit)
    // console.log(getComputedStyle(this).getPropertyValue("--card_title_color"))
    // this.style.setProperty("--bg-color","#1EB3635E")
    // console.log("render:全局",globalThis.getComputedStyle(this.shadowRootInit.querySelector(":host")).getPropertyValue("--card_title_color"))
  }

  /**
   * @des 暴露一个重新渲染的方法
   */
  rerender(param:any) {
    console.log("???")
    dataCssSwitch(param,this)
  }

}
// 名字必须小写 必须有横线
customElements.define("wz-tabs", myDiv);
