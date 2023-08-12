<script setup>
import { onMounted } from 'vue'
  import './index.css'
  onMounted(() => {
    
    import('../../src/component/wz-tabs/')
    document.querySelectorAll("#open").forEach((e)=>{
        e.addEventListener("click",(el)=>{  
            e.parentElement.parentElement.switchActive()
        })
    })
  })
</script>

<!-- message.create('This a info message') -->

<link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">

# tabs组件

tabs组件



## 使用方式

```html

<script type="module" src="https://cdn.jsdelivr.net/npm/webzen-ui/src/component/wz-tabs/index.js"></script>


 <wz-tabs tabs_params='{position:"top"}'>
    <div slot="tabs_index" tab_item_key="1">13333</div>
    <div slot="tabs_index" tab_item_key="2">33</div>

    <div slot="tabs_value" tab_value_key="1">
        <div style="height:300px;background: red;width: 200px;overflow: scroll;">
            45dd
        </div>
    </div>
    <div slot="tabs_value" tab_value_key="2">33</div>
</wz-tabs>



```







## slot 
wz-tabs 的slots 可以传入 两个参数 slot="tabs_index" 和 slot="tabs_value".

并且 tab_item_key 和 tab_item_value 必须要对应起来





## 异步渲染示例

在异步获取操作中需要获取到这个组件并且调用里面的rerender元素

```js
 setTimeout(() => {
      
    document.querySelector("wz-tabs").innerHTML = `
    
    <div slot="tabs_index" tab_item_key="1" class="tab_index">1333333333333</div>
    <div slot="tabs_index" tab_item_key="2" class="tab_index">33</div>
    
    <div slot="tabs_value" class="container_item" tab_value_key="1">33</div>
    <div slot="tabs_value" class="container_item" tab_value_key="2"></div>

    
    `
    document.querySelector("wz-tabs").rerender({
        position: "left"
    })
}, 1000);

```










## 传参


TabsParamsType 格式如下


```js

type base = "left" | "top" | "top_card" | "top_middle"
interface TabsParamsType {
  position: base
}

```



## 传参示例(left)


<wz-tabs tabs_params='{position:"left"}'>
            <div slot="tabs_index" tab_item_key="1">133333</div>
            <div slot="tabs_index" tab_item_key="2">33</div>

<div slot="tabs_value" tab_value_key="1">

<div style="height:600px;background: rgb(151, 146, 146);width: 100%">
    45d
</div>
</div>
<div slot="tabs_value" tab_value_key="2" style="height:600px;background: rgb(251, 146, 146);width: 80%">33</div>
</wz-tabs>

```html

<div style="height:600px;background: rgb(151, 146, 146);width: 100%">
    45d
</div>
</div>
<div slot="tabs_value" tab_value_key="2" style="height:600px;background: rgb(251, 146, 146);width: 80%">33</div>
</wz-tabs>

```
<br>
<br>
<br>



## 传参示例(top)



<wz-tabs tabs_params='{position:"top"}'>
            <div slot="tabs_index" tab_item_key="1">133333</div>
            <div slot="tabs_index" tab_item_key="2">33</div>

<div slot="tabs_value" tab_value_key="1">

<div style="height:600px;background: rgb(151, 146, 146);width: 80%">
    45d
</div>
</div>
<div slot="tabs_value" tab_value_key="2" style="height:600px;background: rgb(251, 146, 146);width: 80%">33</div>
</wz-tabs>


```html

<wz-tabs tabs_params='{position:"top"}'>
            <div slot="tabs_index" tab_item_key="1">133333</div>
            <div slot="tabs_index" tab_item_key="2">33</div>

<div slot="tabs_value" tab_value_key="1">

<div style="height:600px;background: rgb(151, 146, 146);width: 80%">
    45d
</div>
</div>
<div slot="tabs_value" tab_value_key="2" style="height:600px;background: rgb(251, 146, 146);width: 80%">33</div>
</wz-tabs>

```
<br>
<br>
<br>




## 传参示例(top_middle)

<wz-tabs tabs_params='{position:"top_middle"}'>
            <div slot="tabs_index" tab_item_key="1">133333</div>
            <div slot="tabs_index" tab_item_key="2">33</div>

<div slot="tabs_value" tab_value_key="1">

<div style="height:600px;background: rgb(151, 146, 146);width: 80%">
    45d
</div>
</div>
<div slot="tabs_value" tab_value_key="2" style="height:600px;background: rgb(251, 146, 146);width: 80%">33</div>
</wz-tabs>


```html

<wz-tabs tabs_params='{position:"top_middle"}'>
            <div slot="tabs_index" tab_item_key="1">133333</div>
            <div slot="tabs_index" tab_item_key="2">33</div>

<div slot="tabs_value" tab_value_key="1">

<div style="height:600px;background: rgb(151, 146, 146);width: 80%">
    45d
</div>
</div>
<div slot="tabs_value" tab_value_key="2" style="height:600px;background: rgb(251, 146, 146);width: 80%">33</div>
</wz-tabs>

```


<br>
<br>
<br>

## 传参示例(top_card)

<wz-tabs tabs_params='{position:"top_card"}'>
            <div slot="tabs_index" tab_item_key="1">133333</div>
            <div slot="tabs_index" tab_item_key="2">33</div>

<div slot="tabs_value" tab_value_key="1">

<div style="height:600px;background: rgb(151, 146, 146);width: 80%">
    45d
</div>
</div>
<div slot="tabs_value" tab_value_key="2" style="height:600px;background: rgb(251, 146, 146);width: 80%">33</div>
</wz-tabs>


```html

<wz-tabs tabs_params='{position:"top_card"}'>
            <div slot="tabs_index" tab_item_key="1">133333</div>
            <div slot="tabs_index" tab_item_key="2">33</div>

<div slot="tabs_value" tab_value_key="1">

<div style="height:600px;background: rgb(151, 146, 146);width: 80%">
    45d
</div>
</div>
<div slot="tabs_value" tab_value_key="2" style="height:600px;background: rgb(251, 146, 146);width: 80%">33</div>
</wz-tabs>

```











 