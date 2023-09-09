var h=(e,s,t)=>{if(!s.has(e))throw TypeError("Cannot "+t)};var l=(e,s,t)=>(h(e,s,"read from private field"),t?t.call(e):s.get(e)),i=(e,s,t)=>{if(s.has(e))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(e):s.set(e,t)},r=(e,s,t,o)=>(h(e,s,"write to private field"),o?o.call(e,t):s.set(e,t),t);import{B as b}from"./wz-base.07e7f891.js";const m=`.mask{top:0px;left:0px;width:100vw;height:100%;background:rgba(48,47,47,.4);position:fixed;z-index:1}.mask_player{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);// width: 400px;background:rgb(14,27,48);padding:10px 30px 0;border-radius:10px;// scale: 1.2;transform-origin:0%}.mask_player_title{padding:10px 0 20px;color:#fff;display:flex;justify-content:space-between}.mask_player_title_close,.mask_player_title_closed{cursor:pointer}.mask_player_container{min-width:500px;color:#fff}
`;var c,n,d,p,_;class g extends b{constructor(){super();i(this,c,void 0);i(this,n,void 0);i(this,d,void 0);i(this,p,void 0);i(this,_,void 0);this.adoptedStyle(m)}static get observedAttributes(){return["title","background","color"]}connectedCallback(){console.log("connectedCallback生命周期",m),this.render({title:this.getAttribute("title"),background:this.getAttribute("background"),color:this.getAttribute("color")}),this.closeRender()}closeRender(){console.log("borderadd"),l(this,c).addEventListener("click",()=>{l(this,n).style.display="none"})}attributeChangedCallback(t,o,a){if(o)switch(t){case"title":l(this,d).textContent="|"+a;break;case"background":console.log("sss",a),l(this,p).style.background=a;break;case"color":l(this,_).style.color=a;break}console.log("arrributeChangeCallback",t,o,a)}render(t){let{title:o,background:a,color:y}=t,k=document.createElement("template");k.innerHTML=`
        <div  class="mask" >
        <div class="mask_player" style="background:${a};">
          <div class="mask_player_title" style="color:${y}">
            <div class="mask_player_title_text">| ${o}</div>
            <div class="mask_player_title_close" >x</div>
          </div>
          <div class="mask_player_container">     
            <slot ></slot>
          </div>
        </div>
      </div>    
        `,this.shadowRootInit.appendChild(k.content),r(this,c,this.shadowRootInit.querySelector(".mask_player_title_close")),r(this,n,this.shadowRootInit.querySelector(".mask")),r(this,d,this.shadowRootInit.querySelector(".mask_player_title_text")),r(this,p,this.shadowRootInit.querySelector(".mask_player")),r(this,_,this.shadowRootInit.querySelector(".mask_player_container")),console.log("this.#mask_player_title_close",l(this,c))}}c=new WeakMap,n=new WeakMap,d=new WeakMap,p=new WeakMap,_=new WeakMap;customElements.define("wz-iframe",g);
