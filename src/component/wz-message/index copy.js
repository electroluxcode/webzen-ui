// Import the necessary dependencies
import Base from '../wz-base.js';

// Define the template for the web component
const template = document.createElement('template');
template.innerHTML = `
  <style>
    /* Add your styles here */
  </style>
  <ul class="notifications_electrolux"></ul>
`;

class MessageComponent  {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.notifications = this.shadowRoot.querySelector('.notifications_electrolux');
    this.iconStyle = document.createElement('script');
    this.iconStyle.src = 'https://cdn.jsdelivr.net/npm/webzen-ui/src/component/wz-icon/index.js';
    this.iconStyle.type = 'module';
    this.shadowRoot.appendChild(this.iconStyle);


    let list = JSON.parse(JSON.stringify(e))
    console.log("list-:",list)
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




    this.toastDetails = {
      timer: 2000,
      success: {
        icon: 'solid/circle-check',
        color: '#0abf30',
      },
      error: {
        icon: 'solid/circle-xmark',
        color: '#e24d4c',
      },
      warning: {
        icon: 'solid/circle-exclamation',
        color: '#e9bd0c',
      },
      info: {
        icon: 'solid/circle-info',
        color: '#3498db',
      },
      mode: 'dark',
    };
  }

  static get observedAttributes() {
    return ['type'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'type') {
      this.createToast(newValue, 'Sample text', this.toastDetails.timer, this.mode);
    }
  }

  removeToast(toast_electrolux) {
    toast_electrolux.classList.add('hide');
    if (toast_electrolux.timeoutId) clearTimeout(toast_electrolux.timeoutId);
    setTimeout(() => {
      toast_electrolux.remove();
    }, 500);
  }

  createToast(id, text, timer, mode) {
    const icon = this.toastDetails[id]?.icon ?? '';
    const color = this.toastDetails[id]?.color ?? '';
    const toast_electrolux = document.createElement('li');
    toast_electrolux.className = `toast_electrolux ${id}`;
    toast_electrolux.innerHTML = `<div class="column">
                    <wz-icon name="${icon}" color="${color}"></wz-icon>
                    <span>${text}</span>
                    </div>
                `;
    this.notifications.appendChild(toast_electrolux);
    setTimeout(() => this.removeToast(toast_electrolux), timer);
  }
}

// Define the custom element
// customElements.defisne('message-component', MessageComponent);

export default MessageComponent;
