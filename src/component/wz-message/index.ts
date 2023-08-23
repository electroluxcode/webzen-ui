import Base from '../wz-base.js';
// @ts-ignore
import styleslight from "./assets/light.css?inline" assert { type: "css" };
// @ts-ignore
import stylesdark from "./assets/dark.css?inline" assert { type: "css" };
console.log("stylesdark:", stylesdark);
// export default
interface baseType {
  urlPrefix: string;
}
function chechIcon(){
  let label = document.querySelector("[id='electrolux_message']")
  if(!label){
    let fontStyle = document.createElement('link');
    fontStyle.setAttribute('rel', 'stylesheet');
    fontStyle.setAttribute(
      'id',
      'electrolux_message'
    );
    fontStyle.setAttribute(
      'href',
      'https://cdn.jsdelivr.net/npm/webzen-ui/wz-message/assets/icon.css'
    );
    fontStyle.setAttribute('type', 'text/css');
    document.body.appendChild(fontStyle);
  }

}
chechIcon()
let toastDetails = {
  timer: 2000,
  success: {
    icon: 'icon-success icon iconfont ',
    color: "#0abf30"
  },
  error: {
    icon: 'icon-error icon iconfont ',
    color: "#e24d4c"
  },
  warning: {
    icon: 'icon-warning icon iconfont ',
    color: "#e9bd0c"
  },
  info: {
    icon: 'icon-prompt icon iconfont ',
    color: "#3498db"
  },
  mode: 'dark',
};

type toastDetailsType = keyof Omit<typeof toastDetails, 'timer' | 'mode'>;



function modeHtmlInit(config: Record<"mode" | "id" | "text" | "timer", any>, that: any, toastDetails: any) {
  const icon = toastDetails[config.id]?.icon ?? '';
  const color = toastDetails[config.id]?.color ?? '';
  const toast_electrolux = document.createElement('li'); // 创建li元素
  toast_electrolux.className = `toast_electrolux ${config.id}`; // 为li元素新增样式
  toast_electrolux.innerHTML = `
  <div class="column" >
        <span class="${icon}"></span>
        <span class="column_text">${config.text}</span>
  </div>
`;
  // @ts-ignore
  that._notifications.appendChild(toast_electrolux); // 添加元素到 notifications ul
  that.adoptedStyle(stylesdark);
  that.adoptedStyle(styleslight);
  
  // 2秒后 隐藏toast
  setTimeout(() => that.removeToast(toast_electrolux), config.timer);
}

class Message extends Base {
  // step1 :定义 属性 和 监听的属性
  static createToast: (id: any, text: any, timer: any, mode: string) => void;
  static removeToast: (toast_electrolux: any) => void;
  _notifications
  static get observedAttributes() {
    return ['type'];
  }
  constructor(e: any) {
    super()
    
    let notifications = document.createElement('ul');
    notifications.setAttribute('class', 'notifications_electrolux');
    this._notifications = notifications
    this.shadowRootInit.appendChild(notifications);

  }


  removeToast = (toast_electrolux: HTMLElement | any) => {
    toast_electrolux.classList.add('hide');
    if (toast_electrolux.timeoutId) clearTimeout(toast_electrolux.timeoutId); // 清楚setTimeout
    // 移除li元素
    setTimeout(() => {
      toast_electrolux.remove();
    }, 500);
  };
  createToast = (
    id: toastDetailsType,
    text: string,
    timer: number,
    mode: string
  ) => {
    modeHtmlInit({ id, text, timer, mode }, this, toastDetails)
  };

}


customElements.define("wz-message", Message);

