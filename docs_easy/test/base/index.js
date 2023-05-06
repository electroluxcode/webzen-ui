const randomID = () => {
  return Math.random().toString(36).substring(2, 8);
};

export default class wz_base extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.id = randomID();
    if (typeof globalThis.components !== 'object') {
      globalThis.components = {};
    }
    Object.defineProperty(globalThis.components, this.id, {
      value: this,
      configurable: true,
    });
  }

  disconnectedCallback() {
    delete globalThis.components[this.id];
  }
}
