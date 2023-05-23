var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Dialog_dialog, _Dialog_title, _Dialog_content, _Dialog_btnClose, _Dialog_btnCancel, _Dialog_btnSubmit;
import Base from "../wz-base.js";
import "../wz-button/index.js";
// @ts-ignore
import style from "./index.css?inline" assert { type: "css" };
export default class Dialog extends Base {
    static get observedAttributes() {
        return ["loading", "open", "title", "content", "canceltext", "submittext"];
    }
    constructor() {
        super();
        _Dialog_dialog.set(this, void 0);
        _Dialog_title.set(this, void 0);
        _Dialog_content.set(this, void 0);
        _Dialog_btnClose.set(this, void 0);
        _Dialog_btnCancel.set(this, void 0);
        _Dialog_btnSubmit.set(this, void 0);
        const shadowRoot = this.attachShadow({ mode: "open" });
        this.adoptedStyle(style);
        shadowRoot.innerHTML = `
      <dialog class="dialog" id="dialog" part="dialog">
        <slot class="icon" name="icon" id="icon"></slot>
        <form class="form" method="dialog">
        <span id="btnClose" class="close" close type="flat">
      
      </span>
          <h4 class="title" id="title" part="title">dialog</h4>
          <slot id="content" class="content"></slot>
          <slot class="footer" name="footer" part="footer">
            <wz-button id="btnCancel" type="common" close >取消</wz-button>
            <wz-button id="btnSubmit" type="primary">确定</wz-button>
          </slot>
        </form>
      </dialog>
        `;
        __classPrivateFieldSet(this, _Dialog_dialog, shadowRoot.getElementById("dialog"), "f");
        __classPrivateFieldSet(this, _Dialog_title, shadowRoot.getElementById("title"), "f");
        __classPrivateFieldSet(this, _Dialog_content, shadowRoot.querySelector("#content"), "f");
        __classPrivateFieldSet(this, _Dialog_btnClose, shadowRoot.getElementById("btnClose"), "f");
        __classPrivateFieldSet(this, _Dialog_btnCancel, shadowRoot.getElementById("btnCancel"), "f");
        __classPrivateFieldSet(this, _Dialog_btnSubmit, shadowRoot.getElementById("btnSubmit"), "f");
    }
    get open() {
        return this.getAttribute("open") !== null;
    }
    get submittext() {
        return this.getAttribute("submittext") || "确认";
    }
    get canceltext() {
        return this.getAttribute("canceltext") || "取消";
    }
    get content() {
        return this.getAttribute("content") || "";
    }
    set content(value) {
        this.setAttribute("content", value);
    }
    set submittext(value) {
        this.setAttribute("submittext", value);
    }
    set canceltext(value) {
        this.setAttribute("canceltext", value);
    }
    set open(value) {
        this.toggleAttribute("open", value);
    }
    show() {
        this.open = true;
    }
    close() {
        this.open = false;
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _Dialog_dialog, "f").addEventListener('click', (ev) => {
            var _a;
            if ((_a = ev === null || ev === void 0 ? void 0 : ev.target) === null || _a === void 0 ? void 0 : _a.closest('[close]')) {
                this.open = false;
                this.dispatchEvent(new Event("cancel"));
            }
        });
        __classPrivateFieldGet(this, _Dialog_dialog, "f").addEventListener('close', () => {
            this.open = false;
            this.dispatchEvent(new Event("close"));
            console.log('close');
        });
        __classPrivateFieldGet(this, _Dialog_dialog, "f").addEventListener('cancel', () => {
            this.open = false;
            this.dispatchEvent(new Event("cancel"));
            console.log('cancel');
        });
        if (__classPrivateFieldGet(this, _Dialog_btnSubmit, "f")) {
            __classPrivateFieldGet(this, _Dialog_btnSubmit, "f").addEventListener('click', () => {
                this.dispatchEvent(new Event("submit"));
            });
        }
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "open") {
            if (newValue !== null) {
                __classPrivateFieldGet(this, _Dialog_dialog, "f").showModal();
                setTimeout(() => {
                    __classPrivateFieldGet(this, _Dialog_btnClose, "f").focus();
                }, 50);
            }
            else {
                __classPrivateFieldGet(this, _Dialog_dialog, "f").close();
            }
        }
        if (name === "title") {
            __classPrivateFieldGet(this, _Dialog_title, "f").textContent = newValue;
        }
        if (name === "content") {
            __classPrivateFieldGet(this, _Dialog_content, "f").textContent = newValue;
        }
        if (name === "canceltext" && __classPrivateFieldGet(this, _Dialog_btnCancel, "f")) {
            __classPrivateFieldGet(this, _Dialog_btnCancel, "f").textContent = newValue;
        }
        if (name === "submittext" && __classPrivateFieldGet(this, _Dialog_btnSubmit, "f")) {
            __classPrivateFieldGet(this, _Dialog_btnSubmit, "f").textContent = newValue;
        }
    }
}
_Dialog_dialog = new WeakMap(), _Dialog_title = new WeakMap(), _Dialog_content = new WeakMap(), _Dialog_btnClose = new WeakMap(), _Dialog_btnCancel = new WeakMap(), _Dialog_btnSubmit = new WeakMap();
if (!customElements.get("wz-dialog")) {
    customElements.define("wz-dialog", Dialog);
}
// 静态方法
Dialog.open = function ({ type = "", title = "", content = "", submittext = "", canceltext = '取消', onsubmit = () => { }, oncancel = () => { } }) {
    const dialog = new this();
    dialog.title = title;
    dialog.content = content;
    dialog.canceltext = canceltext;
    if (type !== 'confirm') {
        // dialog.shadowRoot.getElementById("btnSubmit").toggleAttribute('close', true)
        console.log(dialog.shadowRoot.getElementById("btnCancel"));
        dialog.shadowRoot.getElementById("btnCancel").remove();
        dialog.submittext = submittext || '知道了';
    }
    else {
        dialog.submittext = submittext || '确定';
    }
    dialog.addEventListener('cancel', (e) => { oncancel(); e.stopPropagation(); ; dialog.remove(e); });
    dialog.addEventListener('close', (e) => { dialog.remove(e); });
    dialog.addEventListener('submit', (e) => {
        onsubmit();
        e.stopPropagation();
        dialog.remove(e);
    });
    document.body.append(dialog);
    dialog.clientWidth;
    dialog.open = true;
    return dialog;
};
Dialog.show = function (type, ...params) {
    console.log(params[0]);
    if (typeof params[0] === 'object') {
        return this.open(Object.assign({ type }, params[0]));
    }
    // 简写语法
    const [content, onsubmit = () => { }, oncancel = () => { }] = params;
    return this.open({
        type,
        title: type,
        content,
        onsubmit,
        oncancel
    });
};
Dialog.show = function (type, ...params) {
    console.log(params[0]);
    if (typeof params[0] === 'object') {
        return this.open(Object.assign({ type }, params[0]));
    }
    // 简写语法
    const [content, onsubmit = () => { }, oncancel = () => { }] = params;
    return this.open({
        type,
        title: type,
        content,
        onsubmit,
        oncancel
    });
};
Dialog.alert = function (...params) {
    return this.show('alert', ...params);
};
export { Dialog };
