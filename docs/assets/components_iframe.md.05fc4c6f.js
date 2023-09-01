import{p as o,ac as l,D as e,o as p,c as t,z as r,G as c,B as i,R as D,a as y}from"./chunks/framework.bc40fd44.js";import"./chunks/index.4ed993c7.js";const F=D(`<h1 id="iframe" tabindex="-1">iframe <a class="header-anchor" href="#iframe" aria-label="Permalink to &quot;iframe&quot;">​</a></h1><p>弹窗组件，自定义更加高了</p><h2 id="使用方式" tabindex="-1">使用方式 <a class="header-anchor" href="#使用方式" aria-label="Permalink to &quot;使用方式&quot;">​</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">使用方式,直接用就可以了</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 引入 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://cdn.jsdelivr.net/npm/webzen-ui/src/component/wz-iframe/index.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wz-iframe</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">测试</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">background</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rgb(14, 27, 48)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">white</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wz_iframe_item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    width</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wz-iframe</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">        &lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">wz_iframe_item</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">400px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> auto</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="传参" tabindex="-1">传参 <a class="header-anchor" href="#传参" aria-label="Permalink to &quot;传参&quot;">​</a></h2><p>第一个参数是头部的title 剩下的参数都是见文知意的</p>`,6),d={class:"wrap"},g=JSON.parse('{"title":"iframe","description":"","frontmatter":{},"headers":[],"relativePath":"components/iframe.md","filePath":"components/iframe.md","lastUpdated":1690609389000}'),_={name:"components/iframe.md"},f=Object.assign(_,{setup(m){return o(()=>{l(()=>import("./chunks/index.bbb7dda3.js"),["assets/chunks/index.bbb7dda3.js","assets/chunks/wz-base.1dcc12f2.js"]);let s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("href","https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css"),document.head.appendChild(s),l(()=>import("./chunks/index.42b0d80f.js"),["assets/chunks/index.42b0d80f.js","assets/chunks/wz-base.1dcc12f2.js"]).then(n=>{console.log(n),window.dialog=n.default,window.dialogConfirm=()=>{let a=document.createElement("div");a.innerHTML=`
        <wz-iframe title="测试" background="rgb(14, 27, 48)" color="white">
            <div class="mask_player_container">
       
         <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.vmPWowgdWTfOcPhc5fehCgHaEo?w=243&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="mask_player_container_video"> </img>

        <div class="mask_player_container_tool">
          <div class="mask_player_container_tool_left">
            <i class="fa fa-pause"></i>	
            <i class="fa fa-gear"></i>	
          </div>
          <div class="mask_player_container_tool_right">
            <i class="fa fa-arrows-alt"></i>
          </div>
        </div>
      </div>

        </wz-iframe>
        <style>
           



.mask_player_container_video {
  width: 850px;
  position: relative;
  height:400px;
}

.mask_player_container_tool {
  height: 30px;
  background: rgb(48, 47, 47);
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding: 0px 10px;
  position: relative;

bottom: 30px;
}
.mask_player_container_tool_right {
  line-height: 100%;
  align-self: center;
  margin: 10px;
}

.mask_player_container_tool_left {
  line-height: 100%;
  align-self: center;
  margin: 10px;
}
.fa{
    margin:0px  15px 0px 0px;
}
.mask_player_title_close{
    cursor: pointer;
}
        <//style>
                
                `,document.body.appendChild(a)}})}),(s,n)=>{const a=e("wz-button");return p(),t("div",null,[F,r("div",d,[c(a,{type:"primary",onclick:"dialogConfirm()"},{default:i(()=>[y("打开iframe")]),_:1})])])}}});export{g as __pageData,f as default};
