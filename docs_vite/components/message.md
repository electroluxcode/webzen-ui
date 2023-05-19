<script setup>
import { onMounted } from 'vue'
  import './index.css'
  onMounted(() => {
    import ('../../src/component/wz-icon/')
    import ('../../src/component/wz-button/')
    import('../../src/component/wz-message/').then((res)=> {
         window.res =res
    })
  })
</script>

<!-- message.create('This a info message') -->



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
使用方式,用mode new 出来之后就可以使用里面的createToast 方法了

<!-- 引入 -->
<script type="module">
    import('../../src/component/wz-message/').then((res)=> {
         window.res =res
    })
    //import {Message} from "./index.js"
    let message =new res.Message({mode:"light"});
    message.createToast("info","你1好",1000,"light")
</script>

```

## 类型
第一个参数是类型 支持 四个类型 `info`, `success`,`error`,`warning`

第二个参数是 文本内容

第三个参数是持续时间
```js
document.querySelector("#electrolux_message")?.remove(); 
let message =new res.Message({mode:"dark"}); 
createToast("info","info",3000)
createToast("success","success",3000)
createToast("error","error",3000)
createToast("warning","warning",3000)
```
<div class="wrap">

 <wz-button type="primary" onclick='document.querySelector("#electrolux_message")?.remove(); let message =new res.Message({mode:"dark"}); message.createToast("success","success",2000)'>success</wz-button>
<wz-button type="common" onclick='document.querySelector("#electrolux_message")?.remove(); let message =new res.Message({mode:"dark"}); message.createToast("info","info",2000)'>info</wz-button>
<wz-button type="default" onclick='document.querySelector("#electrolux_message")?.remove(); let message =new res.Message({mode:"dark"}); message.createToast("warning","warning",2000)'>warning</wz-button>
<wz-button type="danger" onclick='document.querySelector("#electrolux_message")?.remove(); let message =new res.Message({mode:"dark"}); message.createToast("error","error",2000)'>error</wz-button>
</div >





##  黑夜白天模式

<div class="wrap">
<wz-button type="primary" onclick='document.querySelector("#electrolux_message")?.remove(); let message =new res.Message({mode:"light"}); message.createToast("info","你1好",2000,"light")'
>白天模式</wz-button>
 <wz-button type="danger" onclick='document.querySelector("#electrolux_message")?.remove(); let message =new res.Message({mode:"dark"}); message.createToast("info","你1好",2000,"dark")'>黑夜模式</wz-button>
</div>