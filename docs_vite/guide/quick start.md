# 快速开始



## cdn 引入

```html

<script type="module" src="https://cdn.jsdelivr.net/npm/webzen-ui@0.0.4/src/component/wz-icon/index.js">

</script>

<wz-icon name="image" ></wz-icon>
```


## 深色浅色模式

原理是 eventbus

只需要 在挂载的时候添加 这些代码就可以了.他就可以给shadow的跟标签 添加 样式和注入 night 或者light

```js
customElements.whenDefined('wz-card').then(() => {    
    window.webzenMode("mode",{mode:"light"},webzen)
})


```









## npm 安装

```sh
npm install webzen-ui
import * from "webzen-ui/src/component/wz-icon/index.js"
```

