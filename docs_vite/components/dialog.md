<script setup>
import { onMounted } from 'vue'
  import './index.css'
  onMounted(() => {
    import ('../../src/component/wz-button/')
    import('../../src/component/wz-dialog/').then((res)=> {
         window.dialog =res.default
         window.dialogConfirm =()=> {
                dialog.alert({
                    type:"confirm",
                    title: 'tit3le',//标题
                    submittext: 'ok',//确定键文本
                    canceltext: 'cance222l',//取消键文本
                    onsubmit: function () {
                        //按确定键的操作
                        alert("te")
                    },
                    oncancel:function(){
                        alert("点击了取消")
                    },
                    content: 'content',//内容
                });
         }
          window.dialogCommon =()=> {
                dialog.alert({
                    type:"common",
                    title: 'tit3le',//标题
                    submittext: 'ok',//确定键文本
                    canceltext: 'cance222l',//取消键文本
                    onsubmit: function () {
                        //按确定键的操作
                        alert("点击了确定")
                    },
                    oncancel:function(){
                        alert("点击了取消")
                    },
                    content: 'content',//内容
                });
         }
    })
    
  })
</script>

<!-- message.create('This a info message') -->



# dialog

弹窗组件

<style>
    ::part(dialog){
    width: 400px;
}
</style>

## 使用方式

```html

使用方式,用new 出来之后就可以使用里面的 alert 方法了.后面接着进行工程化的打包

<!-- 引入 -->
 <script type="module">
    import dialog from 'https://cdn.jsdelivr.net/npm/webzen-ui/src/component/wz-dialog/index.js';
    dialog.alert({
        type:"confirm",
        title: 'tit3le',//标题
        submittext: 'ok',//确定键文本
        canceltext: 'cance222l',//取消键文本
        onsubmit: function () {
            //按确定键的操作
            alert("点击了确定")
        },
        oncancel:function(){
            alert("点击了取消")
        },
        content: 'content',//内容
    });
</script>

```

## 类型
第一个参数是类型 支持 两个类型 `comfirm`, `common`
剩下的参数都是见文知意的

```js
import dialog from './index.js';
dialog.alert({
    type:"common",
    ...
});
dialog.alert({
    type:"confirm",
    ...
});
```

<div class="wrap">

<wz-button type="primary" onclick='dialogConfirm()'>common</wz-button>
<wz-button type="common" onclick='dialogCommon()'>confirm</wz-button>

</div >





##  自定义css

暴露出了一些css方法

```css

<style>
    ::part(dialog){
        width: 400px;
    }
    ::part(footer){
        justify-content: center
    }
</style>


```
