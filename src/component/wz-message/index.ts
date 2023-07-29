import Base from '../wz-base.js';

// export default
interface baseType {
  urlPrefix: string;
}

// let baseStyle = document.createElement('link')
// baseStyle.setAttribute("rel", "stylesheet")
// baseStyle.setAttribute("href", "https://cdn.bootcdn.net/ajax/libs/font-awesome/6.2.1/css/all.min.css")
// baseStyle.setAttribute("type", "text/css")
// document.head.appendChild(baseStyle)



let iconStyle = document.createElement('script');
iconStyle.setAttribute(
  'src',
  'https://cdn.jsdelivr.net/npm/webzen-ui/src/component/wz-icon/index.js'
);
iconStyle.setAttribute('type', 'module');
document.body.appendChild(iconStyle);

let toastDetails = {
  timer: 2000,
  success: {
    icon: 'solid/circle-check',
    color: "#0abf30"
  },
  error: {
    icon: 'solid/circle-xmark',
    color: "#e24d4c"
  },
  warning: {
    icon: 'solid/circle-exclamation',
    color: "#e9bd0c"
  },
  info: {
    icon: 'solid/circle-info',
    color: "#3498db"
  },
  mode: 'dark',
};

type toastDetailsType = keyof Omit<typeof toastDetails, 'timer' | 'mode'>;

function modeCssInit(config: Record<"mode", any>, appendDom: any) {
  if (config.mode == 'dark') {
    let fontStyle = document.createElement('link');
    fontStyle.setAttribute('rel', 'stylesheet');
    fontStyle.setAttribute(
      'href',
      'https://cdn.jsdelivr.net/npm/frontmessageplugin@1.0.15/messageDark.css'
    );
    fontStyle.setAttribute(
      'id',
      'electrolux_message'
    );
    fontStyle.setAttribute('type', 'text/css');
    appendDom.appendChild(fontStyle);
  }
  if (config.mode == 'light') {
    let fontStyle = document.createElement('link');
    fontStyle.setAttribute('rel', 'stylesheet');
    fontStyle.setAttribute(
      'id',
      'electrolux_message'
    );
    fontStyle.setAttribute(
      'href',
      'https://cdn.jsdelivr.net/npm/frontmessageplugin@1.0.15/messageLight.css'
    );
    fontStyle.setAttribute('type', 'text/css');
    appendDom.appendChild(fontStyle);
  }

}

function modeHtmlInit(config: Record<"mode" | "id" | "text" | "timer", any>, that: any, toastDetails: any) {
  const icon = toastDetails[config.id]?.icon ?? '';
  const color = toastDetails[config.id]?.color ?? '';
  const toast_electrolux = document.createElement('li'); // 创建li元素
  toast_electrolux.setAttribute("style",`background: white;color: black;`)
  toast_electrolux.className = `toast_electrolux ${config.id}`; // 为li元素新增样式
  toast_electrolux.innerHTML = `<div class="column" >
                <wz-icon name="${icon}" color="${color}"></wz-icon>
                <span>${config.text}</span>
                </div>
            `;
  // @ts-ignore
  that._notifications.appendChild(toast_electrolux); // 添加元素到 notifications ul
  // 2秒后 隐藏toast
  setTimeout(() => that.removeToast(toast_electrolux), config.timer);
}

class Message extends Base {
  // step1 :定义 属性 和 监听的属性
  static createToast: (id: any, text: any, timer: any, mode: string) => void;
  static removeToast: (toast_electrolux: any) => void;
  shadowRootInit;
  _notifications
  static get observedAttributes() {
    return ['type'];
  }
  constructor(e: any) {
    super()
    let list = JSON.parse(JSON.stringify({ mode: "dark" }))
    const shadowRoot = this.attachShadow({ mode: "open" });
    this.shadowRootInit = shadowRoot
    let notifications = document.createElement('ul');
    notifications.setAttribute('class', 'notifications_electrolux');
    this._notifications = notifications
    this.shadowRootInit.appendChild(notifications);


    modeCssInit(list, this.shadowRootInit)
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
    modeHtmlInit({id,text,timer,mode},this,toastDetails)
  };

}



customElements.define("wz-message", Message);

// export default Message;
