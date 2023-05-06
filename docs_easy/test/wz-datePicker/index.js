// import events from "inquirer/lib/utils/events";

import base from '../base/index.js';
import styles from './index.css' assert { type: 'css' };

class TimePicker extends base {
  constructor() {
    super();
  }
  static get observedAttributes() {
    return ["onValue"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue);
    switch (name){
        case "onValue":
            console.log(new Function(newValue))
    }
        
  }

  connectedCallback() {
    console.log("组件id:",this.id,globalThis.components[this.id])
    console.log(this.getAttribute("onValue"))
    console.log(new Function(this.getAttribute("onValue"))())
    let nodeTemplate = document.createElement('template');
    nodeTemplate.innerHTML = `
        <label for="time-picker">选择时间:</label>
        <input type="time" id="time-picker">
        `;
    const template = nodeTemplate.content;
    this.shadowRoot.appendChild(template.cloneNode(true));
    this.input = this.shadowRoot.querySelector('#time-picker');

    this.input.addEventListener('change', this.handleChange.bind(this));
    //   this.input.addEventListener('change',  eval(this.getAttribute("onValue")(event)));
    this.shadowRoot.adoptedStyleSheets = [styles];
  }

  handleChange(event) {

    globalThis.eventbus.emit('测试', event.target.value);
    console.log(
        this.getAttribute('onValue')
      );
    this.dispatchEvent(
      new CustomEvent('timeChanged', { detail: event.target.value })
    );
  }
}

customElements.define('time-picker', TimePicker);
