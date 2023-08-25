<div align="center"><h1>
<br/>
📋
<br />
Webzen-ui
<br />
<br />
</h1>
<sup>
<br />
<br />
<a href="https://gitee.com/Electrolux/"><img src="https://img.shields.io/static/v1?label=version&message=v0.0.1&color=blue" alt="npm package" /></a><a href=https://space.bilibili.com/286773126><img src="https://img.shields.io/static/v1?label=Bili&message=Electrolux&color=red" alt="temp" /></a>
<a href="https://gitee.com/Electrolux/">   <img src="https://img.shields.io/static/v1?label=Author&message=electrolux&color=yellow" alt="demos" /></a>
<a href="https://gitee.com/Electrolux/">   <img src="https://img.shields.io/static/v1?label=Contribute&message=welcome&color=green" alt="demos" /></a>
<br />
</a>
<br />
Translations: <a href="">🇨🇳 汉语</a>
</sup>
</div>



由web-component构成的 前端框架





## Quick start

```shell
npm install webzen-ui 
```






## Features

- table
- card
- button
- layout






## Developer



- step1：根目录的src/components 文件中。新建你的组件文件夹,用icon做一个示例

结构如下
-wz-icon
--index.ts
--index.less
--index.html
--assets


- step2：如果你的组件编写完 运行 sh build.sh 进行 编译 .这个脚本会对 ts和 less进行编译(暂时不做这一块)


```shell
# 由于web component 的 一系列 不可控因素。因此 我们每一个 组件都必须 经过以下个流程


# step3：最终传入 core/.ts 进行引用
注意区分按需引入(import xx.js )
全量引入 (全部引入)

# step???：你的测试用例应该包括
-- 1.判断shadow dom 存不存在
-- 2.判断属性是否能够设置成功，判断属性设置之后能不能渲染出指定的dom数
-- 3.判断是否能够在50ms 渲染不大的数据
-- 4.判断工具方法是否能够生效




```







## Docs

```shell
# 全局安装 docsify-cli 工具
npm i docsify-cli -g
# 初始化项目
docsify init ./docs
# docs  的 意思 就是在 docs 中 新开一个 端口
docsify serve docs


# _navbar.md 文件可以修改侧边栏




```








## Todo



```
caiIpt.addEventListener('change', function(e) {
    console.log(e); // e.detail 为表单的值
  }) 
```


​          

​      













## Knowledge



### 1. webcomponent | 深浅色模式

一般我们说的深色浅色模式，有以下几种方案

- 例如vitepress 他是在头部添加class为night的变量,然后通过优先级控制的方法进行控制
- 例如antd 他是在 body 添加一个属性是data-theme 的字段
- 利用浏览器自身的方案：例如是prefer-color-theme 或者

我这里沿用 vitepress的 方案，但是区别是在头部加会因为shadow dom 的原因，而不能进行穿透。

我采用的方案如下

- 利用 发布者/订阅者模式，在我的基类元素初始化的时候给基类的头部添加元素就可以了，并且引入 dark/light的 样式文件

遇到的问题是 webcomponent是 异步的 ，因此需要引入声明周期的概念,













