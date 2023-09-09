<style>
  .container11 {
    width: 400px;
    height: 200px;
    overflow: scroll;
  }
  .tree {
    width: 100%;
    overflow: hidden;

  }
  .red {
    color: red;
  }
</style>

<script setup>
import { onMounted } from 'vue'
// import './index.css'

onMounted(() => {
//------------------------------------------------
import ('../../src/component/wz-button/')
import ('../../src/component/wz-tree/')
// 扩展示例

const long = [
  {
    title: '标题-1',
    expand: true,
    key: '标题-1',
    selected: true,
  },
  {
    title: '标题-2',
    key: '标题-2',
    expand: true,
    children: [
      {
        title: '标题-3',
        key: '标题-3',
        selected: true,
        expand: false,
      },
      {
        title: '标题-4',
        key: '标题-4',
        selected: false,
        expand: false,
        children: [
          {
            title: '标题-5',
            key: '标题-5',
            selected: false,
            expand: false,
            children: [
              {
                title: '标题-6',
                key: '标题-6',
                selected: false,
                expand: false,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    title: '标题-7',
    key: '标题-7',
    expand: true,
    children: [
      {
        title: '标题-8',
        key: '标题-8',
        selected: true,
        expand: false,
      },
      {
        title: '标题-9',
        key: '标题-9',
        selected: false,
        expand: false,
        children: [
          {
            title: '标题-10',
            key: '标题-10',
            selected: false,
            expand: false,
            children: [
              {
                title: '标题-11',
                key: '标题-11',
                selected: false,
                expand: false,
              },
            ],
          },
        ],
      },
    ],
  },
];

function serialize(obj) {
  return JSON.stringify(obj, function (key, value) {
    if (typeof value === 'function') {
      return value.toString();
    }
    return value;
  });
}
const treeDatas = [
  {
    title: '标题-1',
    expand: true,
    key: '标题-1',
    selected: true,
    children: [
      {
        title: '标题-3',
        expand: true,
        key: '标题-3',
        selected: true,
      },
    ],
  },
  {
    title: '标题-2',
    key: '标题-2',
    expand: true,
  },
];

let config = {
  data: treeDatas,
  multiple: false,
  toggle: (node) => {},
  select: (node, nodes) => {
    console.log('选中数据:', nodes);
  },
};

const treeDataexpand = [
  {
    title: '标题-1',
    expand: false,
    key: '标题-1',
    selected: true,
    children: [
      {
        title: '标题-3',
        expand: true,
        key: '标题-3',
        selected: true,
      },
    ],
  },
  {
    title: '标题-2',
    key: '标题-2',
    expand: true,
  },
];
let configexpand = {
  data: treeDataexpand,
  multiple: true,
  toggle: (node) => {},
  select: (node, nodes) => {
    console.log('选中数据:', nodes);
  },
};

let multipleconfig = {
  data: treeDatas,
  multiple: true,
  toggle: (node) => {},
  select: (node, nodes) => {
    console.log('选中数据:', nodes);
  },
};

let asyncData = [
  {
    title: '标题-9',
    key: '标题-9',
    selected: false,
    expand: false,
    parent: '标题-2',
    children: [
      {
        title: '标题-10',
        key: '标题-10',
        selected: false,
        expand: true,
        parent: '标题-9',
      },
    ],
  },
  {
    title: '标题-12',
    key: '标题-12',
    selected: false,
    expand: true,
    children: [
      {
        title: '标题-13',
        key: '标题-13',
        selected: false,
        expand: true,
      },
    ],
  },
];
var asyncLoad;
customElements.whenDefined('wz-tree').then(async function () {
  await customElements.whenDefined('wz-icon');
  document.querySelector('.init').setAttribute('config', serialize(config));

  document
    .querySelector('.multiple')
    .setAttribute('config', serialize(multipleconfig));
  document
    .querySelector('.expand')
    .setAttribute('config', serialize(configexpand));

  document
    .querySelector('.async')
    .setAttribute('config', serialize(configexpand));
  let temp = document.querySelector('.async').ClassInstance;

  document.querySelector('wz-button').addEventListener('click', () => {
    console.log('dianwo');
    setTimeout(() => {
      temp.asyncData('标题-2', asyncData);
    }, 500);
  });

  let configlong = {
    data: long,
    multiple: true,
    toggle: (node) => {},
    select: (node, nodes) => {
      console.log('选中数据:', nodes);
    },
  };

  
  document
    .querySelector('.searchdom')
    .setAttribute('config', serialize(configlong));
    let temp1 = document.querySelector('.searchdom').ClassInstance;
  document.querySelector('.searchbutton').addEventListener('click', () => {
    setTimeout(() => {
      temp1.searchData('标题-5');
    }, 500);
  });
  // setTimeout(() => {
  //   temp.searchData("标题-5")
  // }, 1000);
  // setTimeout(() => {
  //   temp.searchData("标题-9")
  // }, 1000);
});





//------------------------------------------------
})
     

  
</script>
# tree 



## 使用方式

```html
<!-- 引入 -->
<script type="module" src="https://cdn.jsdelivr.net/npm/webzen-ui/src/component/wz-tree/index.js">
<!-- 使用 -->
<wz-tree></wz-tree>

const treeDatas = [
      {
        title: '标题-1',
        expand: true,
        key: "标题-1",
        selected: true,
        children:[
            {
              title: '标题-3',
              expand: true,
              key: "标题-3",
              selected: true,
            },
          
        ]
      },
      {
        title: '标题-2',
        key: "标题-2",
        expand: true,
      }
]

function serialize(obj) {
  return JSON.stringify(obj, function (key, value) {
    if (typeof value === 'function') {
      return value.toString();
    }
    return value;
  });
}
let config = {
  data: treeDatas,
  multiple: false,
  toggle: (node) => { },
  select: (node, nodes) => { console.log("选中数据:", nodes) }
}
document.querySelector(".init").setAttribute("config", serialize(config))

```

<div class="container11">
  <wz-tree class="init"></wz-tree>
</div>





## 是否多选 `multiple`



```js

let config = {
  multiple: false,
  ...
}

```


<div class="container11">
  <wz-tree class="multiple"></wz-tree>
</div>

## 初始化是否被展开 `expand` 



```js

 const treeDatas = [
      { 
        expand: false,
        ...
      },
    ...
]

```


<div class="container11">
  <wz-tree class="expand"></wz-tree>
</div>

## 初始是否被选择 `selected`

注意单选模式下初始没有任何会被选择

##  动态加载子节点


```js

let asyncData = [
  {
    title: '标题-9',
    key: '标题-9',
    selected: false,
    expand: false,
    parent: '标题-2',
    children: [
      {
        title: '标题-10',
        key: '标题-10',
        selected: false,
        expand: true,
        parent: '标题-9',
      },
    ],
  },
  {
    title: '标题-12',
    key: '标题-12',
    selected: false,
    expand: true,
    children: [
      {
        title: '标题-13',
        key: '标题-13',
        selected: false,
        expand: true,
      },
    ],
  },
];


document
    .querySelector('.async')
    .setAttribute('config', serialize(configexpand));
  let temp = document.querySelector('.async').ClassInstance;
  setTimeout(() => {
    temp.asyncData('标题-2', asyncData);
  }, 1000);

```


<div class="container11">
  <wz-tree class="async"></wz-tree>
</div>


<wz-button style="margin:20px" type="primary"> 点我</wz-button>




##  搜索树


```js

let asyncData = [
  {
    title: '标题-9',
    key: '标题-9',
    selected: false,
    expand: false,
    parent: '标题-2',
    children: [
      {
        title: '标题-10',
        key: '标题-10',
        selected: false,
        expand: true,
        parent: '标题-9',
      },
    ],
  },
  {
    title: '标题-12',
    key: '标题-12',
    selected: false,
    expand: true,
    children: [
      {
        title: '标题-13',
        key: '标题-13',
        selected: false,
        expand: true,
      },
    ],
  },
];


document
    .querySelector('.async')
    .setAttribute('config', serialize(configexpand));
  let temp = document.querySelector('.async').ClassInstance;
  setTimeout(() => {
    temp.asyncData('标题-5', asyncData);
  }, 1000);

```


<div class="container11">
  <wz-tree class="searchdom"></wz-tree>
</div>


<wz-button class="searchbutton" style="margin:20px" type="primary"> 点我</wz-button>