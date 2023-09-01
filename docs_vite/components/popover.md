<script setup>
import { reactive, onMounted } from 'vue'
  onMounted(() => {
    import('../../src/component/wz-button/')
    import('../../src/component/wz-popover/')
    popover_event.addEventListener('show',function(ev){
        console.log('悬浮层出现了');
    })
    popover_event.addEventListener('hide',function(ev){
        console.log('悬浮层消失了');
    })
  })
</script>

# popover

悬浮提示（操作）框。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import '../components/wz-popover/index.js';
</script>
<!-- 使用 -->
<wz-button>pop confirm</wz-button>
<wz-popover>
    <!-- dom -->
    <div>自定义内容</div>
</wz-popover>
```

需要将悬浮内容放入`<wz-popover></wz-popover>`内

## 类型`type`

提供两种默认样式，默认是带指向箭头的，如果需要自定义，可以使用`custom`

<div class="wrap">
<wz-button type="primary">default</wz-button>
<wz-popover trigger="hover,focus">
    <wz-button type="flat">菜单一</wz-button>
    <wz-button type="flat">菜单二</wz-button>
    <wz-button type="flat">菜单三</wz-button>
</wz-popover>

<wz-button type="primary">custom</wz-button>
<wz-popover type="custom" trigger="hover,focus">
    <wz-button type="flat">菜单一</wz-button>
    <wz-button type="flat">菜单二</wz-button>
    <wz-button type="flat">菜单三</wz-button>
</wz-popover>
</div>

```html
<wz-button>default</wz-button>
<wz-popover>
    <wz-button type="flat">菜单一</wz-button>
    <wz-button type="flat">菜单二</wz-button>
    <wz-button type="flat">菜单三</wz-button>
</wz-popover>

<wz-button>custom</wz-button>
<wz-popover type="custom">
    <wz-button type="flat">菜单一</wz-button>
    <wz-button type="flat">菜单二</wz-button>
    <wz-button type="flat">菜单三</wz-button>
</wz-popover>
```

## 触发目标元素`target`

默认情况下，`wz-popover`是由**相邻的前一个节点**（`previousElementSibling`）控制的。如果需要自定义，可以通过`target`来选择，值为合法的选择器，比如`#id`、`.class`等

<div class="wrap">
  <wz-button type="primary" id="t1">target1</wz-button>
  <wz-button type="primary" id="t2">target2</wz-button>
</div>
<wz-popover target="#t2" trigger="hover,focus">
    <div> 我是 target1 触发的 </div>
</wz-popover>
<wz-popover target="#t1" trigger="hover,focus">
    <div> 我是 target2 触发的 </div>
</wz-popover>

```html
<wz-button id="t1">target1</wz-button>
<wz-button id="t2">target2</wz-button>
<wz-popover target="#t1" dir="top">
    我是 target1 触发的
</wz-popover>
<wz-popover target="#t2" dir="top">
    我是 target2 触发的
</wz-popover>
```

也可以指定多个`.class`，这样可以通过多个`target`来控制同一个悬浮层

<div class="wrap">
  <wz-button type="primary" class="target">target1</wz-button>
  <wz-button type="primary"  class="target">target2</wz-button>
  <wz-button type="primary"  class="target">target3</wz-button>
</div>
<wz-popover target=".target" trigger="click">
    我是 .target 触发的
</wz-popover>

```html
<wz-button class="target">target1</wz-button>
<wz-button class="target">target2</wz-button>
<wz-button class="target">target3</wz-button>
<wz-popover target=".target">
    我是 .target 触发的
</wz-popover>
```

每个目标元素和悬浮层直接都有一个对应关系，可以通过`.target`和`.pop` 分别获取

```js
悬浮层.target = 触发目标
触发目标.pop = 悬浮层
```



## 方向`dir`

通过`dir`可以设置悬浮层方向，可以取值`top`、`right`、`bottom`、`left`、`TL`、`TR`、`RT`、`RB`、`BL`、`BR`、`LT`、`LB`。

<style scoped>
  wz-popover p{
    padding: 0 4px;
    font-size: 14px;
    margin: 0;
    color:black !important;
  }
 wz-popover div{
    padding: 0 4px;
    font-size: 14px;
    margin: 0;
    color:black !important;
  }
</style>


```html
<wz-button>top</wz-button>
<wz-popover dir="top">
  <p>弹出内容</p>
  <p>弹出内容</p>
</wz-popover>
```

JavaScript操作`get`、`set`

```js
popover.dir;
popover.dir = 'right';
//原生属性操作
popover.getAttribute('dir');
popover.setAttribute('dir','right');
```

除了上述 12 个方位外，还可以设置两个值，以逗号分隔，比如`top,bottom`，可以自动根据位置来选择一个合适的方向。默认值为`TL,BL`。

<wz-button>top,bottom</wz-button>
<wz-popover dir="top,bottom">
    <p>我会自动调整位置</p>
    <p>在空间充足的情况下朝上</p>
    <p>在上方空间不足的情况下自动朝下</p>
</wz-popover>

```html
<wz-button>top,bottom</wz-button>
<wz-popover dir="top,bottom">
    <p>我会自动调整位置</p>
    <p>在空间充足的情况下朝上</p>
    <p>在上方空间不足的情况下自动朝下</p>
</wz-popover>
```

## 触发方式`trigger`

还可以通过`trigger`属性定义触发方式，默认为`hover,focus`，还可以设置为`click`，也可任意组合

::: tip
仅用于初始化，后续修改无效。
:::

<div class="wrap">
<wz-button type="primary">hover</wz-button>
<wz-popover trigger="hover">
    <p>我是通过 hover 触发的</p>
</wz-popover>
<wz-button type="primary">focus</wz-button>
<wz-popover trigger="focus">
    <p>我是通过 focus 触发的</p>
</wz-popover>
<wz-button type="primary">click</wz-button>
<wz-popover trigger="click">
    <p>我是通过 click 触发的</p>
</wz-popover>
</div>

```html
<wz-button>hover</wz-button>
<wz-popover trigger="hover">
  ...
</wz-popover>
<wz-button>focus</wz-button>
<wz-popover trigger="focus">
  ...
</wz-popover>
<wz-button>click</wz-button>
<wz-popover trigger="click">
  ...
</wz-popover>
```

还支持关键词`contextmenu`，可以实现自定义右键菜单

<style scoped>
.contextmenu{
  display: flex;
  width: 100%;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  background: var(--primary-bg-secondary);
  height: 200px;
}
</style>
<div class="wrap">
<div class="contextmenu">在这里单击右键</div>
<wz-popover type="custom" trigger="contextmenu">
    <wz-button type="flat">菜单一</wz-button>
    <wz-button type="flat">菜单二</wz-button>
    <wz-button type="flat">菜单三</wz-button>
</wz-popover>
</div>

```html
<div class="contextmenu">在这里单击右键</div>
<wz-popover type="custom" trigger="contextmenu">
    <wz-button type="flat">菜单一</wz-button>
    <wz-button type="flat">菜单二</wz-button>
    <wz-button type="flat">菜单三</wz-button>
</wz-popover>
```

## 显示`open`

还可以通过`open`主动去控制悬浮层的出现与隐藏，建议设置`trigger="none"`

<div class="wrap">
<wz-button>我不能触发，但是可以通过后面的开关触发</wz-button>
<wz-popover id="popover_open" dir="BL" type="custom" trigger="none">
    <wz-button type="flat">菜单一</wz-button>
    <wz-button type="flat">菜单二</wz-button>
    <wz-button type="flat">菜单三</wz-button>
</wz-popover>
<wz-switch onchange="document.getElementById('popover_open').open = this.checked"></wz-switch>
</div>

```html
<wz-popover trigger="none" open>
    ...
</wz-popover>
```

JavaScript操作set

```js
popover.open = true;
popover.open = false;
//原生属性操作
popover.setAttribute('open',true);
popover.setAttribute('open',false);
popover.toggleAttribute('open',[force]);
```

## 点击自动关闭`close`

每次都需要主动关闭太麻烦了，可以在需要点击关闭的按钮上添加`close`属性，这样在点击后悬浮层会自动关闭，无需`popover.open = false`

<div class="wrap">
<wz-button type="primary">点击出现下拉</wz-button>
<wz-popover type="custom" trigger="click">
    <wz-button type="flat">不会自动关闭</wz-button>
    <wz-button type="flat" close>会自动关闭</wz-button>
</wz-popover>
</div>

```html
<wz-popover type="custom" trigger="click">
    <wz-button type="flat">不会自动关闭</wz-button>
    <wz-button type="flat" close>会自动关闭</wz-button>
</wz-popover>
```

## 自定义样式

可以当成普通标签一样，直接对`wz-popover`进行自定义就行了，比如改变背景色

<style scoped>
.custom{
  background: #333;
  color: black
}
</style>

<wz-button type="primary">自定义样式</wz-button>
<wz-popover class="custom" trigger="hover,focus">
    <p>自定义样式</p>
    <p>自定义样式</p>
    <p>自定义样式</p>
</wz-popover>

```css
wz-popover{
  /* background: #333; */
  /* color: #fff */
}
```

## 事件`event`

### show、hide

悬浮层出现/消失时触发。

<div class="wrap">
<wz-button type="primary">show/hide 事件监听</wz-button>
<wz-popover id="popover_event" trigger="hover,focus">
    <wz-button >菜单一</wz-button>
    <wz-button >菜单二</wz-button>
    <wz-button >菜单三</wz-button>
</wz-popover>
</div>

由于原生并没有`show、hide`这两个事件，因此**只能通过`addEventListener`监听**

```js
popover.addEventListener('show',function(ev){
    console.log('出现了');
})
popover.addEventListener('hide',function(ev){
    console.log('消失了');
})
```

### change

悬浮层显示状态改变时触发。

虽然语义不太好，但还是比较方便，可以直接通过`onchange`监听


<div class="wrap">
<wz-button type="primary">change 事件监听</wz-button>
<wz-popover trigger="hover,focus" onchange="console.log('悬浮层状态：'+this.open)">
    <wz-button type="flat">菜单一</wz-button>
    <wz-button type="flat">菜单二</wz-button>
    <wz-button type="flat">菜单三</wz-button>
</wz-popover>
</div>

```html
<wz-popover onchange="console.log(this.open)">
  ...
</wz-popover>
```

```js
popover.onchange = function(ev){
    //获取open的方式
    console.log(this.open);
    console.log(ev.target.open);
}

popover.addEventListener('change',function(ev){
    console.log(this.open);
    console.log(ev.target.open);
})
```