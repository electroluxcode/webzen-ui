import{p as o,ac as n,D as p,o as e,c as t,z as r,G as c,B as D,R as F,a as i}from"./chunks/framework.bc40fd44.js";import"./chunks/index.4ed993c7.js";const y=F("",6),d={class:"wrap"},u=JSON.parse('{"title":"iframe","description":"","frontmatter":{},"headers":[],"relativePath":"components/iframe.md","filePath":"components/iframe.md","lastUpdated":null}'),C={name:"components/iframe.md"},h=Object.assign(C,{setup(m){return o(()=>{n(()=>import("./chunks/index.6f4c3ccf.js"),["assets/chunks/index.6f4c3ccf.js","assets/chunks/wz-base.0300f7d9.js"]),n(()=>import("./chunks/index.569e5d43.js"),["assets/chunks/index.569e5d43.js","assets/chunks/wz-base.0300f7d9.js"]).then(s=>{console.log(s),window.dialog=s.default,window.dialogConfirm=()=>{let a=document.createElement("div");a.innerHTML=`
        <wz-iframe title="测试" background="rgb(14, 27, 48)" color="white">
            <div>
                <div class="wz_iframe_item" >
                    width
                </div>
            </div>
        </wz-iframe>
        <style>
            .wz_iframe_item{
                width:400px;
                height:200px;
                background:red;
                margin:0 auto
            }
        <//style>
                
                `,document.body.appendChild(a)}})}),(s,a)=>{const l=p("wz-button");return e(),t("div",null,[y,r("div",d,[c(l,{type:"primary",onclick:"dialogConfirm()"},{default:D(()=>[i("打开iframe")]),_:1})])])}}});export{u as __pageData,h as default};
