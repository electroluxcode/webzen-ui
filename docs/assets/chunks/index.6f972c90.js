var E=Object.defineProperty;var y=(o,e,t)=>e in o?E(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var f=(o,e,t)=>(y(o,typeof e!="symbol"?e+"":e,t),t),m=(o,e,t)=>{if(!e.has(o))throw TypeError("Cannot "+t)};var i=(o,e,t)=>(m(o,e,"read from private field"),t?t.call(o):e.get(o)),h=(o,e,t)=>{if(e.has(o))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(o):e.set(o,t)},p=(o,e,t,s)=>(m(o,e,"write to private field"),s?s.call(o,t):e.set(o,t),t);import{B as C}from"./wz-base.07e7f891.js";const I=`:host{display:contents}.dialog{display:flex;align-items:flex-start;gap:12px;min-width:200px;border:0;border-radius:var(--border-radius-base, 4px);box-shadow:var(--shadow, 2px 2px 15px rgba(0,0,0,.15));padding:20px 24px;visibility:hidden;opacity:0;transform:scale(.8) translateY(-50px)}.dialog::backdrop{background-color:#00000073}.dialog[open]{visibility:visible;opacity:1;transform:translateY(0);transition:var(--transition, .2s)}.icon{font-size:22px}.title{margin:0;font-size:16px;line-height:1.5}.close{position:absolute;top:12px;inset-inline-end:12px}.close::part(button){width:32px;height:32px;font-size:18px;color:var(--text-color-secondary, rgba(0, 0, 0, .45))}.close{--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath d='M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256 7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256l118.2 119z'/%3E%3C/svg%3E") }.form{flex:1;display:flex;flex-direction:column;gap:10px}.footer{display:flex;justify-content:flex-end;gap:8px}
`;var c,b,g,x,u,a;class r extends C{constructor(){super();h(this,c,void 0);h(this,b,void 0);h(this,g,void 0);h(this,x,void 0);h(this,u,void 0);h(this,a,void 0);this.adoptedStyle(I),this.shadowRootInit.innerHTML=`
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
        `,p(this,c,this.shadowRootInit.getElementById("dialog")),p(this,b,this.shadowRootInit.getElementById("title")),p(this,g,this.shadowRootInit.querySelector("#content")),p(this,x,this.shadowRootInit.getElementById("btnClose")),p(this,u,this.shadowRootInit.getElementById("btnCancel")),p(this,a,this.shadowRootInit.getElementById("btnSubmit"))}static get observedAttributes(){return["loading","open","title","content","canceltext","submittext"]}get open(){return this.getAttribute("open")!==null}get submittext(){return this.getAttribute("submittext")||"确认"}get canceltext(){return this.getAttribute("canceltext")||"取消"}get content(){return this.getAttribute("content")||""}set content(t){this.setAttribute("content",t)}set submittext(t){this.setAttribute("submittext",t)}set canceltext(t){this.setAttribute("canceltext",t)}set open(t){this.toggleAttribute("open",t)}show(){this.open=!0}close(){this.open=!1}connectedCallback(){i(this,c).addEventListener("click",t=>{var s;(s=t==null?void 0:t.target)!=null&&s.closest("[close]")&&(this.open=!1,this.dispatchEvent(new Event("cancel")))}),i(this,c).addEventListener("close",()=>{this.open=!1,this.dispatchEvent(new Event("close")),console.log("close")}),i(this,c).addEventListener("cancel",()=>{this.open=!1,this.dispatchEvent(new Event("cancel")),console.log("cancel")}),i(this,a)&&i(this,a).addEventListener("click",()=>{this.dispatchEvent(new Event("submit"))})}attributeChangedCallback(t,s,l){t==="open"&&(l!==null?(i(this,c).showModal(),setTimeout(()=>{i(this,x).focus()},50)):i(this,c).close()),t==="title"&&(i(this,b).textContent=l),t==="content"&&(i(this,g).textContent=l),t==="canceltext"&&i(this,u)&&(i(this,u).textContent=l),t==="submittext"&&i(this,a)&&(i(this,a).textContent=l)}}c=new WeakMap,b=new WeakMap,g=new WeakMap,x=new WeakMap,u=new WeakMap,a=new WeakMap,f(r,"alert"),f(r,"show"),f(r,"open");customElements.get("wz-dialog")||customElements.define("wz-dialog",r);r.open=function({type:o="",title:e="",content:t="",submittext:s="",canceltext:l="取消",onsubmit:w=()=>{},oncancel:v=()=>{}}){const n=new this;return n.title=e,n.content=t,n.canceltext=l,o!=="confirm"?(console.log(n.shadowRoot.getElementById("btnCancel")),n.shadowRoot.getElementById("btnCancel").remove(),n.submittext=s||"知道了"):n.submittext=s||"确定",n.addEventListener("cancel",d=>{v(),d.stopPropagation(),n.remove(d)}),n.addEventListener("close",d=>{n.remove(d)}),n.addEventListener("submit",d=>{w(),d.stopPropagation(),n.remove(d)}),document.body.append(n),n.clientWidth,n.open=!0,n};r.show=function(o,...e){if(console.log(e[0]),typeof e[0]=="object")return this.open({type:o,...e[0]});const[t,s=()=>{},l=()=>{}]=e;return this.open({type:o,title:o,content:t,onsubmit:s,oncancel:l})};r.show=function(o,...e){if(console.log(e[0]),typeof e[0]=="object")return this.open({type:o,...e[0]});const[t,s=()=>{},l=()=>{}]=e;return this.open({type:o,title:o,content:t,onsubmit:s,oncancel:l})};r.alert=function(...o){return this.show("alert",...o)};export{r as default};
