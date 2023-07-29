import{p,ac as e,D as c,o as r,c as D,z as t,G as a,B as o,R as l,a as n}from"./chunks/framework.bc40fd44.js";import"./chunks/index.4ed993c7.js";const F=l(`<h1 id="button" tabindex="-1">button <a class="header-anchor" href="#button" aria-label="Permalink to &quot;button&quot;">​</a></h1><p>按钮。用于替代原生<code>button</code>。</p><h2 id="使用方式" tabindex="-1">使用方式 <a class="header-anchor" href="#使用方式" aria-label="Permalink to &quot;使用方式&quot;">​</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 引入 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://cdn.jsdelivr.net/npm/webzen-ui/src/component/wz-button/index.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;!--</span><span style="color:#A6ACCD;"> 使用 </span><span style="color:#89DDFF;">--&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">wz-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">button</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">wz-button</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="风格-type" tabindex="-1">风格 <code>type</code> <a class="header-anchor" href="#风格-type" aria-label="Permalink to &quot;风格 \`type\`&quot;">​</a></h2><p>按钮有4种风格，分别为<code>primary</code>，<code>danger</code>，<code>common</code>和默认。</p>`,6),y={class:"wrap"},i=l(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wz-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">primary</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wz-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wz-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">dashed</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wz-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wz-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">common</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">common</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wz-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wz-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">default</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wz-button</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="尺寸size" tabindex="-1">尺寸<code>size</code> <a class="header-anchor" href="#尺寸size" aria-label="Permalink to &quot;尺寸\`size\`&quot;">​</a></h2><p>按钮有大、中、小三种尺寸，分别为<code>large</code>、<code>default</code>（默认）、<code>small</code>。</p>`,3),d={class:"wrap"},u=l('<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wz-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">small</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">primary</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wz-button</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wz-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">primary</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wz-button</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wz-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">large</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">primary</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wz-button</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="禁用disabled" tabindex="-1">禁用<code>disabled</code> <a class="header-anchor" href="#禁用disabled" aria-label="Permalink to &quot;禁用`disabled`&quot;">​</a></h2><p>通过<code>disabled</code>可以禁用按钮，禁用后该按钮上的事件失效</p>',3),_={class:"wrap"},C=l(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wz-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">dashed</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wz-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wz-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">dashed</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wz-button</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="事件-js操作-event" tabindex="-1">事件 js操作 <code>event</code> <a class="header-anchor" href="#事件-js操作-event" aria-label="Permalink to &quot;事件 js操作 \`event\`&quot;">​</a></h2><p>与普通<code>button</code>标签一致。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">btn</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">size </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">small</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//原生属性操作</span></span>
<span class="line"><span style="color:#A6ACCD;">btn</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">size</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">small</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,4),q=JSON.parse('{"title":"button","description":"","frontmatter":{},"headers":[],"relativePath":"components/button.md","filePath":"components/button.md","lastUpdated":1684894914000}'),m={name:"components/button.md"},z=Object.assign(m,{setup(h){return p(()=>{e(()=>import("./chunks/index.2b93b198.js"),["assets/chunks/index.2b93b198.js","assets/chunks/wz-base.51abbcea.js"])}),(b,A)=>{const s=c("wz-button");return r(),D("div",null,[F,t("div",y,[a(s,{type:"primary",id:"button"},{default:o(()=>[n("primary")]),_:1}),a(s,{type:"danger"},{default:o(()=>[n("danger")]),_:1}),a(s,{type:"common"},{default:o(()=>[n("common")]),_:1}),a(s,null,{default:o(()=>[n("default")]),_:1})]),i,t("div",d,[a(s,{type:"primary",size:"small"},{default:o(()=>[n("primary")]),_:1}),a(s,{type:"primary",size:"default"},{default:o(()=>[n("primary")]),_:1}),a(s,{type:"primary",size:"large"},{default:o(()=>[n("primary")]),_:1})]),u,t("div",_,[a(s,{type:"primary"},{default:o(()=>[n("dashed")]),_:1}),a(s,{type:"primary",disabled:""},{default:o(()=>[n("dashed")]),_:1})]),C])}}});export{q as __pageData,z as default};