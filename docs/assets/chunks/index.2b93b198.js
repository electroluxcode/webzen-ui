var n=(o,r,t)=>{if(!r.has(o))throw TypeError("Cannot "+t)};var e=(o,r,t)=>(n(o,r,"read from private field"),t?t.call(o):r.get(o)),l=(o,r,t)=>{if(r.has(o))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(o):r.set(o,t)},d=(o,r,t,a)=>(n(o,r,"write to private field"),a?a.call(o,t):r.set(o,t),t);import{B as b}from"./wz-base.51abbcea.js";const p=`:root{--primary-color: royalblue}:host{display:inline-flex;--primary-color-opacity-100: color-mix(in srgb, var(--primary-color) 10%, transparent);--primary-color-opacity-200: color-mix(in srgb, var(--primary-color) 20%, transparent);--primary-color-opacity-600: color-mix(in srgb, var(--primary-color) 60%, transparent)}@supports not (color: color-mix(in srgb,red,pink)){:host{--primary-color-opacity-100: rgba(255, 119, 117, .1);--primary-color-opacity-200: rgba(255, 119, 117, .2);--primary-color-opacity-600: rgba(255, 119, 117, .6)}}.button{position:relative;display:flex;width:-webkit-fill-available;width:-moz-available;gap:4px;padding:4px 15px;box-sizing:border-box;height:var(--height-base, 32px);align-items:center;justify-content:center;background-color:var(--primary-bg, #fff);border:1px solid transparent;font-size:var(--font-size, 14px);color:var(--text-color, rgba(0, 0, 0, .88));border-radius:var(--border-radius-base, 4px);outline-color:var(--primary-color-opacity-600);outline-width:2px;outline-offset:1px;transition:var(--transition, .2s)}:host([disabled]){pointer-events:none}:host([type=primary]) .button{color:#fff;border:0;background:var(--primary-color,#1E90EF)}:host(:not([disabled])) .button:not(:disabled):hover{z-index:1}:host([size=small]) .button{font-size:var(--font-size-sm, 12px);height:var(--height-sm, 24px);padding:0 7px}:host([size=large]) .button{font-size:var(--font-size-lg, 16px);height:var(--height-lg, 40px);padding:6px 15px;border-radius:8px}:host(:not([disabled])) .button:not(:disabled){cursor:pointer}:host([type=common]) button{background:#31d06e;color:#fff}:host(:not([type=primary],[loading],[disabled],[type=danger],[type="common"])) .button:hover{color:var(--primary-color, #1E90EF);border:var(--primary-color,#1E90EF) 1px solid}:host([type=danger]) button{background:#ff7875;color:#fff}:host(:is([disabled],[loading])) .button:disabled{opacity:.8;cursor:not-allowed!important}
`;var i;class c extends b{constructor(){super();l(this,i,void 0);const t=this.attachShadow({mode:"open"});this.adoptedStyle(p),t.innerHTML=`<button
            class="button" part="button" id="button"
          >
          <slot></slot>
          </button>
          `,d(this,i,t.getElementById("button"))}static get observedAttributes(){return["disabled"]}focus(){e(this,i).focus()}get disabled(){return this.getAttribute("disabled")!==null}get size(){return this.getAttribute("size")||""}set size(t){this.setAttribute("size",t)}set disabled(t){this.toggleAttribute("disabled",t)}connectedCallback(){this.addEventListener("click",function(){})}attributeChangedCallback(t,a,s){if(t==="disabled"){e(this,i).toggleAttribute("inert",s!==null),e(this,i).toggleAttribute("disabled",s!==null);return}e(this,i)[t]=s}}i=new WeakMap;customElements.get("wz-button")||customElements.define("wz-button",c);export{c as default};
