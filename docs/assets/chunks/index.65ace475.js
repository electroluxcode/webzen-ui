let s=document.createElement("ul");s.setAttribute("class","notifications_electrolux");document.body.appendChild(s);let v=document.createElement("script");v.setAttribute("src","https://cdn.jsdelivr.net/npm/webzen-ui/src/component/wz-icon/index.js");v.setAttribute("type","module");document.body.appendChild(v);let o={timer:2e3,success:{icon:"solid/circle-check",color:"#0abf30"},error:{icon:"solid/circle-xmark",color:"#e24d4c"},warning:{icon:"solid/circle-exclamation",color:"#e9bd0c"},info:{icon:"solid/circle-info",color:"#3498db"},mode:"dark"};class T{static get observedAttributes(){return["type"]}constructor(b){this.removeToast=e=>{e.classList.add("hide"),e.timeoutId&&clearTimeout(e.timeoutId),setTimeout(()=>{e.remove()},500)},this.createToast=(e,h,f,y)=>{var i,l,n,c,r,d,a,u;if(y=="dark"){const m=(l=(i=o[e])===null||i===void 0?void 0:i.icon)!==null&&l!==void 0?l:"",p=(c=(n=o[e])===null||n===void 0?void 0:n.color)!==null&&c!==void 0?c:"",t=document.createElement("li");t.className=`toast_electrolux ${e}`,t.innerHTML=`<div class="column" >
                    <wz-icon name="${m}" color="${p}"></wz-icon>
                    <span>${h}</span>
                    </div>
                `,s.appendChild(t),setTimeout(()=>this.removeToast(t),f)}else{const m=(d=(r=o[e])===null||r===void 0?void 0:r.icon)!==null&&d!==void 0?d:"",p=(u=(a=o[e])===null||a===void 0?void 0:a.color)!==null&&u!==void 0?u:"",t=document.createElement("li");t.className=`toast_electrolux ${e}`,t.innerHTML=`<div class="column" >
                    <wz-icon name="${m}" color="${p}"></wz-icon>
                    <span>${h}</span>
                    </div>
                `,s.appendChild(t);let A=this;setTimeout(()=>A.removeToast(t),f)}};let g=JSON.parse(JSON.stringify(b));if(console.log(b),g.mode=="dark"){let e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href","https://cdn.jsdelivr.net/npm/frontmessageplugin@1.0.15/messageDark.css"),e.setAttribute("id","electrolux_message"),e.setAttribute("type","text/css"),document.body.appendChild(e)}else{let e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("id","electrolux_message"),e.setAttribute("href","https://cdn.jsdelivr.net/npm/frontmessageplugin@1.0.15/messageLight.css"),e.setAttribute("type","text/css"),document.body.appendChild(e)}}}export{T as Message};
