// import { multiply } from './example'
const path = require('path');
const example= require(path.join(__dirname, 'example'));


let window = globalThis
const isBrowser = typeof window !== 'undefined';
const isNavigator = typeof navigator !== 'undefined';


// console.log(example)

describe('commonHTML', () => {

  test('chtml-localhost', () => {
    localStorage.setItem('foo', 'bar');
    expect(localStorage.getItem('foo')).toBe('bar' );
  })
  

  // test('chtml-webComponent-shadowRoot',()=>{
  //   let temp = document.createElement("my-div")
  //   temp.innerHTML = `
  //   <div slot="container" id="test" >
  //       hello
  //   </div>

  //   <div slot="container" id="test" class="active">
  //       tab1
  //   </div>

  //   <div slot="container" id="test" class="active">
  //       tab2
  //   </div>
  //   <div slot="container" id="test" class="active">
  //       tab3
  //   </div>
  //   `

  //   expect(temp.shadowRoot).toBeDefined();

   
  // },5000)

  test('chtml-webComponent-shadow',()=>{
    let temp = document.createElement("my-div")
    temp.setAttribute("option","你好")

    expect(temp.shadowRoot).toBeDefined();

   
  },7000)



  function fun(time) {
    let temp = document.createElement("my-div")
    document.body.appendChild(temp)
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
       
          resolve(Array.from( temp.shadowRoot.querySelectorAll("div")))
          document.body.remove(temp)
      },time)
  })
  
  }
  // 是否异步
  test('chtml-webComponent-async',async ()=>{
    // jest.useFakeTimers();  
    // 三秒后是否渲染
    
    let dom =  await fun(3000)
    console.log(dom,dom.length)
    expect(dom.length).toBeGreaterThan(0);

  },7000)
})


