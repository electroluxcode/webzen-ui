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
var _Icon_icon;
import Base from '../wz-base.js';
// @ts-ignore
import style from './index.css?inline' assert { type: 'css' };
// # 代表是页面id
class Icon extends Base {
    static get observedAttributes() {
        return ['name', 'size', 'color', 'type', 'spin'];
    }
    constructor() {
        super();
        _Icon_icon.set(this, void 0);
        const shadowRoot = this.attachShadow({ mode: 'open' });
        this.adoptedStyle(style);
        shadowRoot.innerHTML = `<i id="icon" part="icon" class="icon" role="img"></i>`;
        __classPrivateFieldSet(this, _Icon_icon, shadowRoot.getElementById('icon'), "f");
    }
    get name() {
        return this.getAttribute('name');
    }
    get spin() {
        return this.getAttribute('spin') !== null;
    }
    get type() {
        return this.getAttribute('type') || 'regular';
    }
    set name(value) {
        this.setAttribute('name', value);
    }
    set type(value) {
        this.setAttribute('type', value);
    }
    get size() {
        return this.getAttribute('size') || '';
    }
    get color() {
        return this.getAttribute('color') || '';
    }
    set size(value) {
        this.setAttribute('size', value);
    }
    set color(value) {
        this.setAttribute('color', value);
    }
    set spin(value) {
        this.toggleAttribute('spin', value);
    }
    connectedCallback() { }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'name' || name === 'type') {
            const icon = `${this.constructor.urlPrefix}/${
            // 判断有没有
            this.name.includes('/') ? this.name : this.type + '/' + this.name}.svg`;
            __classPrivateFieldGet(this, _Icon_icon, "f").setAttribute('aria-label', this.name);
            __classPrivateFieldGet(this, _Icon_icon, "f").style.setProperty('--icon', `url(${icon})`);
        }
        if (name === 'color') {
            __classPrivateFieldGet(this, _Icon_icon, "f").style.color = newValue;
        }
        if (name === 'size') {
            __classPrivateFieldGet(this, _Icon_icon, "f").style.fontSize = newValue + 'px';
        }
        if (name === 'spin') {
            this.spin = newValue !== null;
        }
    }
}
_Icon_icon = new WeakMap();
if (!customElements.get('wz-icon')) {
    customElements.define('wz-icon', Icon);
}
