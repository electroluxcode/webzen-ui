<script setup>
import { onMounted } from 'vue'
  import './index.css'
  onMounted(() => {
    
    import('../../src/component/wz-card/')
    document.querySelector("#open").addEventListener("click",()=>{
        document.querySelector(".wz-card").switchActive()
    })
  })
</script>

<!-- message.create('This a info message') -->

<link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">

# card

卡片组件(注意本身设计是为了大屏设计的，如果需要使用需要提前设置父容器布局(宽高))



## 使用方式

```html

<script type="module" src="https://cdn.jsdelivr.net/npm/webzen-ui/src/component/wz-card/index.js"></script>


<div style="display:flex;width:100%;height:100px">
    <wz-card style="flex:1;margin:0px 10px" header-config='{
        cardTitleColor: " rgba(255, 255, 255, 1)",
        fontColor: "black"
    }' body-config='{
        cardBodyColor: "rgba(255, 255, 255, 1)",
    }'>
        <div slot="card_header_left">
            头部左边
        </div>
        <div slot="card_container">
            <div >测试数据</div>
        </div>
    </wz-card>
    <wz-card style="flex:1;margin:0px 10px" header-config='{
        cardTitleColor: " rgba(255, 255, 255, 1)",
        fontColor: "black"
    }' body-config='{
        cardBodyColor: "rgba(255, 255, 255, 1)",
    }'>
        <div slot="card_header_left">
            头部左边
        </div>
        <div slot="card_container">
            <div >测试数据</div>
        </div>
    </wz-card>
    <wz-card style="flex:1;margin:0px 10px" header-config='{
        cardTitleColor: " rgba(255, 255, 255, 1)",
        fontColor: "black"
    }' body-config='{
        cardBodyColor: "rgba(255, 255, 255, 1)",
    }'>
        <div slot="card_header_left">
            头部左边
        </div>
        <div slot="card_container">
            <div >测试数据</div>
        </div>
    </wz-card>
</div>



```



<div style="display:flex;width:100%;height:100px">
    <wz-card style="flex:1;margin:0px 10px" header-config='{
        cardTitleColor: " rgba(255, 255, 255, 1)",
        fontColor: "black"
    }' body-config='{
        cardBodyColor: "rgba(255, 255, 255, 1)",
    }'>
        <div slot="card_header_left">
            头部左边
        </div>
        <div slot="card_container">
            <div >测试数据</div>
        </div>
    </wz-card>
    <wz-card style="flex:1;margin:0px 10px" header-config='{
        cardTitleColor: " rgba(255, 255, 255, 1)",
        fontColor: "black"
    }' body-config='{
        cardBodyColor: "rgba(255, 255, 255, 1)",
    }'>
        <div slot="card_header_left">
            头部左边
        </div>
        <div slot="card_container">
            <div >测试数据</div>
        </div>
    </wz-card>
    <wz-card style="flex:1;margin:0px 10px" header-config='{
        cardTitleColor: " rgba(255, 255, 255, 1)",
        fontColor: "black"
    }' body-config='{
        cardBodyColor: "rgba(255, 255, 255, 1)",
    }'>
        <div slot="card_header_left">
            头部左边
        </div>
        <div slot="card_container">
            <div >测试数据</div>
        </div>
    </wz-card>
</div>


## 传参
wz-card 可以传入 两个参数 header-config 和 body-config，

header-config格式如下
```js
interface headerConfigType {
  cardTitleTargetColor?: string
  cardTitleColor: string
  fontColor: string
}

```
如果 cardTitleTargetColor 不传入就是 纯色,不然就是多色



body-config格式如下
```js
interface bodyConfigType {
  cardBodyColor?: string
}

```
如果 cardBodyColor 不传那么就是透明的


示例
```html

<wz-card header-config='{
            cardTitleTargetColor: " rgba(44, 123, 76, 0)",
            cardTitleColor: " rgba(44, 123, 76, 0.81)",
            fontColor: "white"
        }' body-config='{
            cardBodyColor: "rgba(0, 0, 0, 0.5)",
        }'>
      <div slot="card_header_left">
          头部左边
      </div>
      
      <div slot="card_container">
          <div >2</div>
      </div>
</wz-card>

```

<wz-card header-config='{
            cardTitleTargetColor: " rgba(44, 123, 76, 0)",
            cardTitleColor: " rgba(44, 123, 76, 0.81)",
            fontColor: "white"
        }' body-config='{
            cardBodyColor: "rgba(0, 0, 0, 0.5)",
        }'>
      <div slot="card_header_left">
          头部左边
      </div>
      <div slot="card_container">
          <div >2</div>
      </div>
</wz-card>



## 插槽


提供了三个插槽,用户在分别在 wz-card 标签内部添加 slot =  card_header_left | card_header_right |  card_container 就可以使用


## 伸缩框

拿到 wz-card 这个实例然后 执行  switchActive()就可以了


```html

<script type="module" src="https://cdn.jsdelivr.net/npm/webzen-ui/src/component/wz-card/index.js"></script>

<div style="height: 100px;width:300px">
        <wz-card  class="wz-card" header-config='{
            cardTitleColor: " rgba(255, 255, 255, 1)",
            fontColor: "black"
        }' body-config='{
            cardBodyColor: "rgba(255, 255, 255, 1)",
        }'>
            <div slot="card_header_left">
                头部左边
            </div>
            <div slot="card_header_right">
                <i id="open" class="fa fa-arrows" style="color: rgb(75, 90, 75);" onclick=""></i>
            </div>
            <div slot="card_container">
                <div >测试数据</div>
                <div >测试数据</div>
                <div >测试数据</div>
                <div >测试数据</div>
            </div>
        </wz-card>
       
</div>

<script type="module">

      document.querySelector("#open").addEventListener("click",()=>{
          document.querySelector(".wz-card").switchActive()
      })
</script>

```



<div style="height: 100px;width:300px">
        <wz-card  class="wz-card" header-config='{
            cardTitleColor: " rgba(255, 255, 255, 1)",
            fontColor: "black"
        }' body-config='{
            cardBodyColor: "rgba(255, 255, 255, 1)",
        }'>
            <div slot="card_header_left">
                头部左边
            </div>
            <div slot="card_header_right">
                <i id="open" class="fa fa-arrows" style="color: rgb(75, 90, 75);" onclick=""></i>
            </div>
            <div slot="card_container">
                <div >测试数据</div>
                <div >测试数据</div>
                <div >测试数据</div>
                <div >测试数据</div>
            </div>
        </wz-card>
       
</div>



## 基本大屏布局示例(pc | mobile)

目前最佳实践是 在 pc端用grid 然后移动端用 flex，适配可以看到@media 

<style>
    .layout {
        width: 100%;
        height: 400px;
    }

    .card_container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 10px;
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }

    .container_item {
        background: #00ffe4;
    }

    .container_item:nth-child(2) {
        background: #c51313;
        /* 横着排列 */
        grid-column: 2 / span 1;
        /* 竖着排列 */
        grid-row: 1 / span 2;
    }

    @media screen and (max-width:1000px) {
        .card_container {
            display: flex;
            /* width: 60%; */
            flex-direction: column;

        }
        .layout {
            margin: 0 auto;
            width: 100%;
            height: 400vh;
        }
        .container_item {
            flex: 1;

        }
    }
</style>

<div class="layout">
    <div class="card_container">
      <div class="container_item">1</div>
      <div class="container_item">2</div>
      <div class="container_item">3</div>
      <div class="container_item">4</div>
      <div class="container_item">5</div>
      <div class="container_item">6</div>
      <div class="container_item">7</div>
      <div class="container_item">8</div>
    </div>
</div>


```html


<style>
    .layout {
        width: 100%;
        height: 400px;
    }

    .card_container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 10px;
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }

    .container_item {
        background: #00ffe4;
    }

    .container_item:nth-child(2) {
        background: #c51313;
        /* 横着排列 */
        grid-column: 2 / span 1;
        /* 竖着排列 */
        grid-row: 1 / span 2;
    }

    @media screen and (max-width:1000px) {
        .card_container {
            display: flex;
            /* width: 60%; */
            flex-direction: column;

        }
        .layout {
            margin: 0 auto;
            width: 100%;
            height: 400vh;
        }
        .container_item {
            flex: 1;

        }
    }
</style>

<div class="layout">
    <div class="card_container">
      <div class="container_item">1</div>
      <div class="container_item">2</div>
      <div class="container_item">3</div>
      <div class="container_item">4</div>
      <div class="container_item">5</div>
      <div class="container_item">6</div>
      <div class="container_item">7</div>
      <div class="container_item">8</div>
    </div>
</div>

```


现在我们就可以直接把大屏放进去












<style>
        .layout {
            width: 100%;
            height: 400px;
        }

        .card_container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            gap: 10px;
            width: 100%;
            height: 100%;
            margin: 0 auto;
        }

        .container_item_card {
           
        }

        .container_item_card:nth-child(2) {
            
            /* 横着排列 */
            grid-column: 2 / span 1;
            /* 竖着排列 */
            grid-row: 1 / span 2;
        }

        @media screen and (max-width:1000px) {
            .card_container {
                display: flex;
                /* width: 60%; */
                flex-direction: column;

            }
            .layout {
                margin: 0 auto;
                width: 100%;
                height: 400vh;
            }
            .container_item_card {
                flex: 1;

            }
        }
    </style>

  <div class="layout">
      <div class="card_container">
          <div class="container_item_card">
          <wz-card header-config='{
                      cardTitleTargetColor: " rgba(44, 123, 76, 0)",
                      cardTitleColor: " rgba(44, 123, 76, 0.81)",
                      fontColor: "white"
                  }' body-config='{
                      cardBodyColor: "rgba(0, 0, 0, 0.5)",
                  }'>
                <div slot="card_header_left">
                    劳务管理
                </div>
                <div slot="card_container">
                    <div >2</div>
                </div>
          </wz-card>
          </div>
          <div class="container_item_card">
            <wz-card header-config='' body-config=''>
                  <div slot="card_header_left">
                      ai管理
                  </div>
                  <div slot="card_container">
                      <div >2</div>
                  </div>
            </wz-card>
          </div>
          <div class="container_item_card">
            <wz-card header-config='' body-config=''>
                  <div slot="card_header_left">
                      视频管理
                  </div>
                  <div slot="card_container">
                      <div >2</div>
                  </div>
            </wz-card>
          </div>
          <div class="container_item_card">4</div>
          <div class="container_item_card">5</div>
          <div class="container_item_card">6</div>
          <div class="container_item_card">7</div>
          <div class="container_item_card">8</div>
      </div>

  </div>


  ```html

<style>
        .layout {
            width: 100%;
            height: 400px;
        }

        .card_container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            gap: 10px;
            width: 100%;
            height: 100%;
            margin: 0 auto;
        }

        .container_item_card {
           
        }

        .container_item_card:nth-child(2) {
            
            /* 横着排列 */
            grid-column: 2 / span 1;
            /* 竖着排列 */
            grid-row: 1 / span 2;
        }

        @media screen and (max-width:1000px) {
            .card_container {
                display: flex;
                /* width: 60%; */
                flex-direction: column;

            }
            .layout {
                margin: 0 auto;
                width: 100%;
                height: 400vh;
            }
            .container_item_card {
                flex: 1;

            }
        }
    </style>

  <div class="layout">
      <div class="card_container">
          <div class="container_item_card">
          <wz-card header-config='{
                      cardTitleTargetColor: " rgba(44, 123, 76, 0)",
                      cardTitleColor: " rgba(44, 123, 76, 0.81)",
                      fontColor: "white"
                  }' body-config='{
                      cardBodyColor: "rgba(0, 0, 0, 0.5)",
                  }'>
                <div slot="card_header_left">
                    劳务管理
                </div>
                <div slot="card_container">
                    <div >2</div>
                </div>
          </wz-card>
          </div>
          <div class="container_item_card">
            <wz-card header-config='' body-config=''>
                  <div slot="card_header_left">
                      ai管理
                  </div>
                  <div slot="card_container">
                      <div >2</div>
                  </div>
            </wz-card>
          </div>
          <div class="container_item_card">
            <wz-card header-config='' body-config=''>
                  <div slot="card_header_left">
                      视频管理
                  </div>
                  <div slot="card_container">
                      <div >2</div>
                  </div>
            </wz-card>
          </div>
          <div class="container_item_card">4</div>
          <div class="container_item_card">5</div>
          <div class="container_item_card">6</div>
          <div class="container_item_card">7</div>
          <div class="container_item_card">8</div>
      </div>

  </div>


  ```


 