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
var _button_btnEl;
import Base from '../wz-base.js';
// @ts-ignore
import style from './index.css?inline' assert { type: 'css' };
class button extends Base {
    constructor() {
        super();
        // step1 :定义 属性 和 监听的属性
        _button_btnEl.set(this, void 0);
        const shadowRoot = this.attachShadow({ mode: "open" });
        this.adoptedStyle(style);
        shadowRoot.innerHTML = `<button
            class="button" part="button" id="button"
          >
          <slot></slot>
          </button>
          `;
        __classPrivateFieldSet(this, _button_btnEl, shadowRoot.getElementById("button"), "f");
    }
    static get observedAttributes() {
        return [
            "disabled",
        ];
    }
    focus() {
        __classPrivateFieldGet(this, _button_btnEl, "f").focus();
    }
    get disabled() {
        return this.getAttribute("disabled") !== null;
    }
    get size() {
        return this.getAttribute("size") || "";
    }
    set size(value) {
        this.setAttribute("size", value);
    }
    set disabled(value) {
        this.toggleAttribute("disabled", value);
    }
    connectedCallback() {
        this.addEventListener("click", function () {
        });
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "disabled") {
            __classPrivateFieldGet(this, _button_btnEl, "f").toggleAttribute("inert", newValue !== null);
            __classPrivateFieldGet(this, _button_btnEl, "f").toggleAttribute("disabled", newValue !== null);
            return;
        }
        __classPrivateFieldGet(this, _button_btnEl, "f")[name] = newValue;
    }
}
_button_btnEl = new WeakMap();
// 通过方法 来new出来
if (!customElements.get('wz-button')) {
    customElements.define('wz-button', button);
}
export default button;
