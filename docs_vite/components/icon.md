<script setup>
import { onMounted } from 'vue'
  import './index.css'
  onMounted(() => {
    
  })
</script>

# 组件库

<style>
    wz-icon{
        font-size:30px;
        margin:10px 10px
    }
</style>

## wz-icon

```html
调用示例：
<wz-icon name="flag"></wz-icon>
<wz-icon name="user"></wz-icon>


详情和可调用类名参考 .默认调用regular文件下面的svg
https://gitee.com/Electrolux/webzen-ui-icons
https://yilaikesi.github.io/webzen-ui-icons
```



<wz-icon name="user"></wz-icon>

<wz-icon name="flag"></wz-icon>

<wz-icon name="image" ></wz-icon>

<wz-icon name="image" type="solid"></wz-icon>



### 类型

```html
<wz-icon name="image" ></wz-icon>
<wz-icon name="image" type="solid"></wz-icon>
```

<wz-icon name="image" ></wz-icon>

<wz-icon name="image" type="solid"></wz-icon>



### 大小

```html
<wz-icon name="image" type="solid" size="20"></wz-icon>
<wz-icon name="image" type="solid" size="30"></wz-icon>
<wz-icon name="image" type="solid" size="40"></wz-icon>

xy-icon{
    font-size:30;
}
```

<wz-icon name="image" type="solid" size="20"></wz-icon>

 <wz-icon name="image" type="solid" size="30"></wz-icon>

 <wz-icon name="image" type="solid" size="40"></wz-icon>



### 颜色

```html
<wz-icon name="image" type="solid" color="blue"></wz-icon >
<wz-icon name="image" type="solid" color="yellow"></wz-icon >
<wz-icon name="image" type="solid" color="red"></wz-icon >
```



<wz-icon name="image" type="solid" color="blue"></wz-icon >

<wz-icon name="image" type="solid" color="yellow"></wz-icon >

<wz-icon name="image" type="solid" color="red"></wz-icon >