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

let notifications = document.createElement('ul');
notifications.setAttribute('class', 'notifications_electrolux');
document.body.appendChild(notifications);

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
    color:"#0abf30"
  },
  error: {
    icon: 'solid/circle-xmark',
    color:"#e24d4c"
  },
  warning: {
    icon: 'solid/circle-exclamation',
    color:"#e9bd0c"
  },
  info: {
    icon: 'solid/circle-info',
    color:"#3498db"
  },
  mode: 'dark',
};

type toastDetailsType = keyof Omit<typeof toastDetails, 'timer' | 'mode'>;

class Message  {
  // step1 :定义 属性 和 监听的属性

  static createToast: (id: any, text: any, timer: any, mode: string) => void;
  static removeToast: (toast_electrolux: any) => void;

  static get observedAttributes() {
    return ['type'];
  }
  constructor(e: any) {
    let list = JSON.parse(JSON.stringify(e))
    console.log(e)
    if (list.mode == 'dark') {
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
      document.body.appendChild(fontStyle);
    } else {
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
      document.body.appendChild(fontStyle);
    }
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
    // console.log(id)
    if (mode == 'dark') {
      const icon = toastDetails[id]?.icon ?? '';
      const color = toastDetails[id]?.color ?? '';
      const toast_electrolux = document.createElement('li'); // 创建li元素
  
      toast_electrolux.className = `toast_electrolux ${id}`; // 为li元素新增样式
      toast_electrolux.innerHTML = `<div class="column" >
                    <wz-icon name="${icon}" color="${color}"></wz-icon>
                    <span>${text}</span>
                    </div>
                `;
      notifications.appendChild(toast_electrolux); // 添加元素到 notifications ul
      // 2秒后 隐藏toast
      setTimeout(() => this.removeToast(toast_electrolux), timer);
    } else {
      const icon = toastDetails[id]?.icon ?? '';
      const color = toastDetails[id]?.color ?? '';
      const toast_electrolux = document.createElement('li'); // 创建li元素
      toast_electrolux.className = `toast_electrolux ${id}`; // 为li元素新增样式
      toast_electrolux.innerHTML = `<div class="column" >
                    <wz-icon name="${icon}" color="${color}"></wz-icon>
                    <span>${text}</span>
                    </div>
                `;
      notifications.appendChild(toast_electrolux); // 添加元素到 notifications ul
      // 2秒后 隐藏toast
      let that =this
      setTimeout(() => that.removeToast(toast_electrolux), timer);
    }
  };
 
}





export default Message ;
