// let baseStyle = document.createElement('link')
// baseStyle.setAttribute("rel", "stylesheet")
// baseStyle.setAttribute("href", "https://cdn.bootcdn.net/ajax/libs/font-awesome/6.2.1/css/all.min.css")
// baseStyle.setAttribute("type", "text/css")
// document.head.appendChild(baseStyle)
let notifications = document.createElement('ul');
notifications.setAttribute('class', 'notifications_electrolux');
document.body.appendChild(notifications);
let iconStyle = document.createElement('script');
iconStyle.setAttribute('src', 'https://cdn.jsdelivr.net/npm/webzen-ui/src/component/wz-icon/index.js');
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
class Message {
    static get observedAttributes() {
        return ['type'];
    }
    constructor(e) {
        this.removeToast = (toast_electrolux) => {
            toast_electrolux.classList.add('hide');
            if (toast_electrolux.timeoutId)
                clearTimeout(toast_electrolux.timeoutId); // 清楚setTimeout
            // 移除li元素
            setTimeout(() => {
                toast_electrolux.remove();
            }, 500);
        };
        this.createToast = (id, text, timer, mode) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            // console.log(id)
            if (mode == 'dark') {
                const icon = (_b = (_a = toastDetails[id]) === null || _a === void 0 ? void 0 : _a.icon) !== null && _b !== void 0 ? _b : '';
                const color = (_d = (_c = toastDetails[id]) === null || _c === void 0 ? void 0 : _c.color) !== null && _d !== void 0 ? _d : '';
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
            }
            else {
                const icon = (_f = (_e = toastDetails[id]) === null || _e === void 0 ? void 0 : _e.icon) !== null && _f !== void 0 ? _f : '';
                const color = (_h = (_g = toastDetails[id]) === null || _g === void 0 ? void 0 : _g.color) !== null && _h !== void 0 ? _h : '';
                const toast_electrolux = document.createElement('li'); // 创建li元素
                toast_electrolux.className = `toast_electrolux ${id}`; // 为li元素新增样式
                toast_electrolux.innerHTML = `<div class="column" >
                    <wz-icon name="${icon}" color="${color}"></wz-icon>
                    <span>${text}</span>
                    </div>
                `;
                notifications.appendChild(toast_electrolux); // 添加元素到 notifications ul
                // 2秒后 隐藏toast
                let that = this;
                setTimeout(() => that.removeToast(toast_electrolux), timer);
            }
        };
        let list = JSON.parse(JSON.stringify(e));
        console.log(e);
        if (list.mode == 'dark') {
            let fontStyle = document.createElement('link');
            fontStyle.setAttribute('rel', 'stylesheet');
            fontStyle.setAttribute('href', 'https://cdn.jsdelivr.net/npm/frontmessageplugin@1.0.15/messageDark.css');
            fontStyle.setAttribute('id', 'electrolux_message');
            fontStyle.setAttribute('type', 'text/css');
            document.body.appendChild(fontStyle);
        }
        else {
            let fontStyle = document.createElement('link');
            fontStyle.setAttribute('rel', 'stylesheet');
            fontStyle.setAttribute('id', 'electrolux_message');
            fontStyle.setAttribute('href', 'https://cdn.jsdelivr.net/npm/frontmessageplugin@1.0.15/messageLight.css');
            fontStyle.setAttribute('type', 'text/css');
            document.body.appendChild(fontStyle);
        }
    }
}
export { Message };
