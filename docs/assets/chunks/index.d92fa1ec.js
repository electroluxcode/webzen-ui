var s=Object.defineProperty;var c=(r,e,a)=>e in r?s(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a;var d=(r,e,a)=>(c(r,typeof e!="symbol"?e+"":e,a),a);import{B as n}from"./wz-base.07e7f891.js";const l=`:host{--card_title_height: 36px}.card{color:#000;position:relative;width:100%;height:100%;transition:all .3s ease-in-out;border-radius:10px;border:.1px solid #e6e6e6;overflow:hidden;font-size:12px}.card_header{position:relative;display:flex;justify-content:space-between;background:black}.card_header_gradient{display:flex;position:relative;justify-content:space-between;z-index:99;align-items:center;height:var(--card_title_height);padding:0 10px}.card_header_wrapper{border-bottom:1px solid rgba(0,0,0,.1);position:relative;font-size:13px}.card_header_wrapper_before{width:100%;background:rgba(255,255,255,.4);content:"";position:absolute;height:var(--card_title_height);backdrop-filter:blur(2px);border-radius:5px 5px 0 0;align-items:center}.card_mask{background:rgba(255,255,255,.9);border-radius:10px;backdrop-filter:blur(6px);position:absolute;width:100%;height:100%;z-index:-1;transition:all .3s ease-in-out;overflow:hidden}.padding{padding:2px 10px;border-radius:5px 5px 0 0}.card_body{height:calc(100% - var(--card_title_height))}
`,h=`:host{--card_header_color: linear-gradient(90deg, var(--webzen-theme-color, rgba(44, 123, 76, .81)) 0%, rgba(44, 123, 76, 0) 100%);--card_title_height: 36px;--card_body_color: rgba(0, 0, 0, .3);--card_header_wrapper_divide: linear-gradient(270deg, rgba(217, 217, 217, 0) 0%, #00ffe4 50%, rgba(217, 217, 217, 0) 100%);--card_body_color: rgba(0, 0, 0, .5);--card_font_color: #f0f0f0}.dark.card{color:var(--card_font_color);position:relative;width:100%;height:100%;transition:all .3s ease-in-out;border-radius:10px;border:unset;overflow:hidden;font-size:12px}.dark .card_header_border{background:var(--card_header_wrapper_divide)!important;width:30%;height:2.5px!important}.dark .card_header{position:relative;display:flex;justify-content:space-between;background:black}.dark .card_header_gradient{display:flex;position:relative;justify-content:space-between;z-index:99;align-items:center;height:var(--card_title_height);padding:0 10px}.dark .card_header_wrapper{border-bottom:var(--card_header_wrapper_divide);position:relative;font-size:13px}.dark .card_header_wrapper_before{width:60%;background:var(--card_header_color);content:"";border-bottom:var(--card_header_wrapper_divide);position:absolute;height:var(--card_title_height);backdrop-filter:blur(2px);border-radius:5px 5px 0;align-items:center}.dark .card_mask{background:var(--card_body_color);border-radius:10px;backdrop-filter:blur(6px);position:absolute;width:100%;height:100%;z-index:-1;transition:all .3s ease-in-out;overflow:hidden}.dark .padding{padding:2px 10px;border-radius:5px 5px 0 0}.dark .card_body{height:calc(100% - var(--card_title_height))}
`;function o(r){let e=r;return e=Function("return "+e)(),e}class p extends n{constructor(){super();d(this,"close");d(this,"config");this.close=!1}static get observedAttributes(){return["config"]}connectedCallback(){this.render({}),this.config=o(this.getAttribute("config")),this.closeRender(),this.adoptedStyle(l),this.adoptedStyle(h)}closeRender(){}attributeChangedCallback(a,t,i){i=o(i)}render(a){let t=document.createElement("template");t.innerHTML=`
    <div class="card" >
        <div class="card_mask"></div>
  
        <div class="card_header_wrapper" part="card_header">
            <div class="card_header_wrapper_before"> </div>
            <div class="card_header_gradient ">
                <div class="card_header_left">
                  <slot name="card_header_left"></slot>
                </div>
                <div class="card_header_right">
                    <slot name="card_header_right"></slot>
                </div>
            </div>
        </div>
        <div class="card_header_border">
          
        </div>
        <div class="card_body " part="card_body">
          <slot name="card_container"></slot>
        </div>
    </div>
        `,this.shadowRootInit.appendChild(t.content)}switchActive(){this.close?this.shadowRootInit.querySelector(".card").style.height="100%":this.shadowRootInit.querySelector(".card").style.height="var(--card_title_height)",this.close=!this.close}}customElements.define("wz-card",p);
