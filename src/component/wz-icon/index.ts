import Base from '../wz-base.js';
// @ts-ignore
import style from './index.css?inline' assert { type: 'css' };

// export default 
interface baseType{
  urlPrefix:string
}
// # 代表是页面id
class Icon extends Base {
  #icon;
  static get observedAttributes() {
    return ['name', 'size', 'color', 'type', 'spin'];
  }

  constructor() {
    super();
    this.adoptedStyle(style);
    this.shadowRootInit.innerHTML = `<i id="icon" part="icon" class="icon" role="img"></i>`;
    this.#icon = this.shadowRootInit.getElementById('icon');
  }

  get name() {
    return this.getAttribute('name')!;
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

  connectedCallback() {}

  attributeChangedCallback(name:string, oldValue:string, newValue:string) {
    if (name === 'name' || name === 'type') {
      const icon = `${(this.constructor as unknown as baseType).urlPrefix}/${
        // 判断有没有
        this.name.includes('/') ? this.name : this.type + '/' + this.name
      }.svg`;
      this.#icon!.setAttribute('aria-label', this.name);
      this.#icon!.style.setProperty('--icon', `url(${icon})`);
    }
    if (name === 'color') {
      this.#icon!.style.color = newValue;
    }
    if (name === 'size') {
      this.#icon!.style.fontSize = newValue + 'px';
    }
    if (name === 'spin') {
      this.spin = newValue !== null;
    }
  }
}

if (!customElements.get('wz-icon')) {
  customElements.define('wz-icon', Icon);
}
