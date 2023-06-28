<script setup>
import { onMounted } from 'vue'
  import './index.css'
  onMounted(() => {
    import ('../../src/component/wz-button/')
    import('../../src/component/wz-iframe/').then((res)=> {
        console.log(res)
         window.dialog =res.default
         
         window.dialogConfirm =()=> {
                let temp = document.createElement("div")
                temp.innerHTML=`
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
                
                `
                document.body.appendChild(temp)
         }
          
    })
    
  })
</script>

<!-- message.create('This a info message') -->



# iframe  

弹窗组件，自定义更加高了

<style>
    ::part(dialog){
    width: 400px;
}
</style>

## 使用方式

```html

使用方式,直接用就可以了

<!-- 引入 -->
    <script type="module" src="https://cdn.jsdelivr.net/npm/webzen-ui/src/component/wz-iframe/index.js"></script>
    <body>
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
        </style>

    </body>

```

## 传参
第一个参数是头部的title
剩下的参数都是见文知意的



<div class="wrap">

<wz-button type="primary" onclick='dialogConfirm()'>打开iframe</wz-button>


</div >



