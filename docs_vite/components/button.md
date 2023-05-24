<script setup>
import { onMounted } from 'vue'
  import './index.css'
  onMounted(() => {
   import ('../../src/component/wz-button/')
  })
</script>
# button 

按钮。用于替代原生`button`。

## 使用方式

```html
<!-- 引入 -->
<script type="module" src="https://cdn.jsdelivr.net/npm/webzen-ui/src/component/wz-button/index.js">
<!-- 使用 -->
<wz-button>button</wz-button>
```

## 风格 `type`

按钮有4种风格，分别为`primary`，`danger`，`common`和默认。

<div class="wrap">
  <wz-button type="primary" id="button">primary</wz-button>
  <wz-button type="danger">danger</wz-button>
  <wz-button type="common">common</wz-button>
 
  <wz-button>default</wz-button>
</div>

```html
<wz-button type="primary" id="btn">primary</wz-button>
<wz-button type="danger">dashed</wz-button>
<wz-button type="common">common</wz-button>
<wz-button>default</wz-button>
```


## 尺寸`size`

按钮有大、中、小三种尺寸，分别为`large`、`default`（默认）、`small`。
<div class="wrap">

<wz-button type="primary" size="small">primary</wz-button>
<wz-button type="primary" size="default">primary</wz-button>
<wz-button type="primary" size="large">primary</wz-button>

</div >


```html
<wz-button type="primary" size="small">primary</wz-button>
<wz-button type="primary" size="default">primary</wz-button>
<wz-button type="primary" size="large">primary</wz-button>
```


## 禁用`disabled`

通过`disabled`可以禁用按钮，禁用后该按钮上的事件失效

<div class="wrap">
   <wz-button type="primary">dashed</wz-button>
   <wz-button type="primary" disabled>dashed</wz-button>
</div>

```html
<wz-button type="primary">dashed</wz-button>
   <wz-button type="primary" disabled>dashed</wz-button>
```






## 事件 js操作 `event`

与普通`button`标签一致。


```js
btn.size = 'small';
//原生属性操作
btn.setAttribute('size','small');
```
