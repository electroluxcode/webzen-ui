import Base from '../wz-base.js';
// @ts-ignore
import style from './index.css?inline' assert { type: 'css' };

// export default

type buttonBase = HTMLElement | any

class button extends Base {
  // step1 :定义 属性 和 监听的属性
  #btnEl;
	static get observedAttributes() {
		return [
			"disabled",
		];
	}

	constructor() {
		super();
		const shadowRoot = this.attachShadow({ mode: "open" });
		this.adoptedStyle(style);
		
			shadowRoot.innerHTML = `<button
            class="button" part="button" id="button"
          >
          <slot></slot>
          </button>
          `;
		
		this.#btnEl = shadowRoot.getElementById("button")! as buttonBase;
	}

	focus() {
		this.#btnEl.focus();
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

	attributeChangedCallback(name:string, oldValue:string, newValue:string) {
		if (name === "disabled") {
			this.#btnEl.toggleAttribute("inert", newValue !== null);
			this.#btnEl.toggleAttribute("disabled", newValue !== null);
			return;
		}
		
		this.#btnEl[name] = newValue;
	}
}



// 通过方法 来new出来
if (!customElements.get('wz-button')) {
  customElements.define('wz-button', button);
}
export default button ;
