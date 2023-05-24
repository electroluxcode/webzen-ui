import Base from "../wz-base.js";

import "../wz-button/index.js";
// @ts-ignore
import style from "./index.css?inline" assert { type: "css" };

class Dialog extends Base {
	#dialog :HTMLElement | any;
  #title:HTMLElement;
  #content;
  #btnClose:HTMLElement ;
  #btnCancel;
  #btnSubmit;

  
	static alert :()=>{};
    static show: (type: any, ...params: any[]) => any;
    static open: ({ type, title, content, submittext, canceltext, onsubmit, oncancel }: { type?: string | undefined; title?: string | undefined; content?: string | undefined; submittext?: string | undefined; canceltext?: string | undefined; onsubmit?: (() => void) | undefined; oncancel?: (() => void) | undefined; }) => any;

	
	static get observedAttributes() {
		return ["loading", "open", "title", "content", "canceltext", "submittext"];
	}

	constructor() {
		super();
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
		this.#dialog = shadowRoot.getElementById("dialog");
		this.#title = shadowRoot.getElementById("title")! ;
        this.#content = shadowRoot.querySelector("#content");
		this.#btnClose = shadowRoot.getElementById("btnClose")!;
		this.#btnCancel = shadowRoot.getElementById("btnCancel");
		this.#btnSubmit = shadowRoot.getElementById("btnSubmit");
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
    this.open = true
  }

  close() {
    this.open = false
  }

	connectedCallback() {
    this.#dialog.addEventListener('click', (ev:any) => {
      if (ev?.target?.closest('[close]')){
        this.open = false
        this.dispatchEvent(new Event("cancel"));
      }
    })
    this.#dialog.addEventListener('close', () => {
      this.open = false
      this.dispatchEvent(new Event("close"));
      console.log('close')
    })
    this.#dialog.addEventListener('cancel', () => {
      this.open = false
      this.dispatchEvent(new Event("cancel"));
      console.log('cancel')
    })
    if (this.#btnSubmit) {
      this.#btnSubmit.addEventListener('click', () => {
        this.dispatchEvent(new Event("submit"));
      })
    }
	}

	attributeChangedCallback(name:string, oldValue:string, newValue:string) {
    if (name === "open") {
      if (newValue !== null) {
        this.#dialog.showModal()
        setTimeout(() => {
          this.#btnClose.focus()
        }, 50);
      } else {
        this.#dialog.close()
      
      }
    }
    if (name === "title") {
			this.#title.textContent = newValue
		}
    if (name === "content") {
			this.#content!.textContent = newValue;
		}
    if (name === "canceltext" && this.#btnCancel) {
			this.#btnCancel.textContent = newValue;
		}
		if (name === "submittext" && this.#btnSubmit) {
			this.#btnSubmit.textContent = newValue;
		}
    
	}
}

if (!customElements.get("wz-dialog")) {
	customElements.define("wz-dialog", Dialog);
}

// 静态方法
Dialog.open = function({
  type = "", 
  title ="",
  content = "", 
  submittext = "", 
  canceltext = '取消', 
  onsubmit = () => {}, 
  oncancel = () => {}
}) {
 
	const dialog = new this();
  dialog.title = title;
  dialog.content = content;
  dialog.canceltext = canceltext;

  if (type !== 'confirm') {
    // dialog.shadowRoot.getElementById("btnSubmit").toggleAttribute('close', true)
    console.log(dialog.shadowRoot.getElementById("btnCancel"))
    dialog.shadowRoot.getElementById("btnCancel").remove();

    dialog.submittext = submittext || '知道了';
  } else {
    dialog.submittext = submittext || '确定';
  }
  dialog.addEventListener('cancel', (e:any)=>{oncancel(); e.stopPropagation();;dialog.remove(e)});
  dialog.addEventListener('close',(e:any)=> {dialog.remove(e)});
  dialog.addEventListener('submit', (e:any)=>{
    onsubmit();
    e.stopPropagation();
    dialog.remove(e)});
  document.body.append(dialog);
  dialog.clientWidth;
  dialog.open = true;
	return dialog;
}

Dialog.show = function(type, ...params) {
  console.log(params[0])
  if (typeof params[0] === 'object') {
    return this.open({
      type,
      ...params[0]
    })
  } 
  // 简写语法
  const [
    content, 
    onsubmit = () => {}, 
    oncancel = () => {}
  ] = params
  return this.open({
    type, 
    title:type,
    content,
    onsubmit, 
    oncancel
  })
}
Dialog.show = function(type, ...params) {
  console.log(params[0])
  if (typeof params[0] === 'object') {
    return this.open({
      type,
      ...params[0]
    })
  } 
  // 简写语法
  const [
    content, 
    onsubmit = () => {}, 
    oncancel = () => {}
  ] = params
  return this.open({
    type, 
    title:type,
    content,
    onsubmit, 
    oncancel
  })
}
Dialog.alert = function(...params) {
  return this.show('alert', ...params)
}

export default Dialog;