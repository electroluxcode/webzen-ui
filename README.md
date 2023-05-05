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




```shell
# 由于web component 的 一系列 不可控因素。因此 我们每一个 组件都必须 经过三个流程

# step1：根目录的docs/test 文件中。新建你的组件文件夹,用table做一个示例
结构如下
- test/table    # 主文件夹
-- test/table/table.html  # 里面写你的样式
-- test/table/table.js # 里面写你的shadow dom，事件等东西
-- test/table/table.test.js # 里面写你的测试用例

# step2：你的测试用例应该包括
-- 1.判断shadow dom 存不存在
-- 2.判断属性是否能够设置成功，判断属性设置之后能不能渲染出指定的dom数
-- 3.判断是否能够在50ms 渲染不大的数据
-- 4.判断工具方法是否能够生效

function fun(time) {
    let temp = document.createElement("my-div")
    document.body.appendChild(temp)
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve(Array.from( temp.shadowRoot.querySelectorAll("div")))
    document.body.remove(temp)
    },time)
})
test('chtml-webComponent-async',async ()=>{
    // 三秒后是否渲染

    let dom =  await fun(3000)
    console.log(dom,dom.length)
    expect(dom.length).toBeGreaterThan(0);

},7000)
# step3：


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