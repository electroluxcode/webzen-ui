<script setup>
import { onMounted } from 'vue'
  import './index.css'
  onMounted(() => {
    import ('../../src/component/wz-icon/')
    import ('../../src/component/wz-button/')
    import('../../src/component/wz-message/')
  })
</script>

<!-- message.create('This a info message') -->

<wz-message></wz-message>

# message

信息组件,推荐全局黑暗模式

<style>
    wz-button{
        font-size:13px;
        margin:3px
    }
</style>

## 使用方式

```html
引用后直接在元素中调用方法就可以了
<script type="module" src="https://cdn.jsdelivr.net/npm/webzen-ui/src/component/wz-message/index.js"></script>

<wz-message></wz-message>

<script type="module">
  document.querySelector("wz-message").createToast("success", "success", 1000)
</script>

```

## 类型
第一个参数是类型 支持 四个类型 `info`, `success`,`error`,`warning`

第二个参数是 文本内容

第三个参数是持续时间
```js
document.querySelector("wz-message").createToast("success", "success", 1000)
document.querySelector("wz-message").createToast("info", "info", 1000)
document.querySelector("wz-message").createToast("warning", "warning", 1000)
document.querySelector("wz-message").createToast("error", "error", 1000)
```
<div class="wrap">

 <wz-button type="primary" onclick='document.querySelector("wz-message").createToast("success", "success", 1000)'>success</wz-button>
<wz-button type="common" onclick='document.querySelector("wz-message").createToast("info", "info", 1000)'>info</wz-button>
<wz-button type="default" onclick='document.querySelector("wz-message").createToast("warning", "warning", 1000)'>warning</wz-button>
<wz-button type="danger" onclick='document.querySelector("wz-message").createToast("error", "error", 1000)'>error</wz-button>
</div >





