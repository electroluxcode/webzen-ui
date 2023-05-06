class a extends HTMLElement{constructor(){super()}adoptedStyle(t){let e=t;t.type||(e=new CSSStyleSheet,e.replace(t)),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,e]}get name(){return this.getAttribute("name")}set name(t){this.setAttribute("name",t)}get attr(){const t=["type","class"];return[...this.attributes].filter(e=>!e.name.startsWith("on")&&!t.includes(e.name)).map(e=>e.name+"='"+(e.value||"true")+"'").join(" ")}renderSlot(){if(this.slots||(this.slots=this.shadowRoot.querySelector("slot")),!!this.slots)return new Promise(t=>{this.mounted?t(0):this.slots.addEventListener("slotchange",()=>{this.mounted=!0,t()})})}}a.urlPrefix="https://cdn.jsdelivr.net/npm/webzen-ui-icons";const l=`:host{display:inline-flex}.icon{width:1em;height:1em;margin:auto;background:currentColor;-webkit-mask:var(--icon, linear-gradient(transparent, transparent)) center no-repeat;animation:rotate 1.4s linear infinite paused}:host([spin]) .icon{animation-play-state:running}@keyframes rotate{to{transform:rotate(1turn)}}
`;var h=globalThis&&globalThis.__classPrivateFieldSet||function(i,t,e,s,r){if(s==="m")throw new TypeError("Private method is not writable");if(s==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?i!==t||!r:!t.has(i))throw new TypeError("Cannot write private member to an object whose class did not declare it");return s==="a"?r.call(i,e):r?r.value=e:t.set(i,e),e},o=globalThis&&globalThis.__classPrivateFieldGet||function(i,t,e,s){if(e==="a"&&!s)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?i!==t||!s:!t.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?s:e==="a"?s.call(i):s?s.value:t.get(i)},n;class c extends a{static get observedAttributes(){return["name","size","color","type","spin"]}constructor(){super(),n.set(this,void 0);const t=this.attachShadow({mode:"open"});this.adoptedStyle(l),t.innerHTML='<i id="icon" part="icon" class="icon" role="img"></i>',h(this,n,t.getElementById("icon"),"f")}get name(){return this.getAttribute("name")}get spin(){return this.getAttribute("spin")!==null}get type(){return this.getAttribute("type")||"regular"}set name(t){this.setAttribute("name",t)}set type(t){this.setAttribute("type",t)}get size(){return this.getAttribute("size")||""}get color(){return this.getAttribute("color")||""}set size(t){this.setAttribute("size",t)}set color(t){this.setAttribute("color",t)}set spin(t){this.toggleAttribute("spin",t)}connectedCallback(){}attributeChangedCallback(t,e,s){if(t==="name"||t==="type"){const r=`${this.constructor.urlPrefix}/${this.name.includes("/")?this.name:this.type+"/"+this.name}.svg`;o(this,n,"f").setAttribute("aria-label",this.name),o(this,n,"f").style.setProperty("--icon",`url(${r})`)}t==="color"&&(o(this,n,"f").style.color=s),t==="size"&&(o(this,n,"f").style.fontSize=s+"px"),t==="spin"&&(this.spin=s!==null)}}n=new WeakMap;customElements.get("wz-icon")||customElements.define("wz-icon",c);
