<script setup>
import { onMounted } from 'vue'
  import './index.css'
  onMounted(() => {
    import ('../../src/component/wz-icon/')
  })
</script>

# icon
<style>
  .wrap #icon{
    
        font-size:25px;
        margin:10px 10px
    
  }
    
</style>


## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import ('../../src/component/wz-icon/')
</script>
<!-- 使用 -->
<wz-icon name="flag"></wz-icon>
<wz-icon name="user"></wz-icon>
```



<div class="wrap">
<wz-icon name="user" id="icon"></wz-icon>

<wz-icon name="flag"  id="icon"></wz-icon>

<wz-icon name="image"  id="icon"></wz-icon>

<wz-icon name="image" type="solid"  id="icon"></wz-icon>

</div >

### 类型
加上 `type="solid" `可以使得一部分图片填充
```html
<wz-icon name="image" ></wz-icon>
<wz-icon name="image" type="solid"></wz-icon>
```
<div class="wrap">
<wz-icon name="image" id="icon"></wz-icon>

<wz-icon name="image" id="icon" type="solid"></wz-icon>
</div >


### 大小
通过设置标签里的`size` 可以指定按钮的大小
```html
<wz-icon name="image" type="solid" size="20"></wz-icon>
<wz-icon name="image" type="solid" size="30"></wz-icon>
<wz-icon name="image" type="solid" size="40"></wz-icon>

xy-icon{
    font-size:30;
}
```
<div class="wrap">
<wz-icon name="image" type="solid" id="icon" size="20"></wz-icon>

 <wz-icon name="image" type="solid" id="icon" size="30"></wz-icon>

 <wz-icon name="image" type="solid" id="icon" size="40"></wz-icon>
</div >


### 颜色
通过设置标签里的`color` 可以设置颜色

```html
<wz-icon name="image" type="solid" color="blue"></wz-icon >
<wz-icon name="image" type="solid" color="yellow"></wz-icon >
<wz-icon name="image" type="solid" color="red"></wz-icon >
```

<div class="wrap">

<wz-icon name="image" type="solid" color="blue"  id="icon" ></wz-icon >

<wz-icon name="image" type="solid" color="yellow"  id="icon" ></wz-icon >

<wz-icon name="image" type="solid" color="red"  id="icon" ></wz-icon ></div>