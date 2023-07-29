<script setup>
import { onMounted } from 'vue'
  import './index.css'
  onMounted(() => {
    import ('../../src/component/wz-button/');
    let link = document.createElement("link");
    link.setAttribute("rel","stylesheet");
    link.setAttribute("href","https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css")
    document.head.appendChild(link)
    import('../../src/component/wz-iframe/').then((res)=> {
        console.log(res)
         window.dialog =res.default
         
         window.dialogConfirm =()=> {
                let temp = document.createElement("div")
                temp.innerHTML=`
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



