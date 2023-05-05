// import { multiply } from './example'
const path = require('path');
const example= require(path.join(__dirname, 'example'));


let window = globalThis
const isBrowser = typeof window !== 'undefined';
const isNavigator = typeof navigator !== 'undefined';


// console.log(example)


// 概念： 
// descrbe ：多个元素组合在一起的块状物体
// it 和 test 的区别 在于 失败时候的返回值 。但为了可读性我们最好用test
describe('commonJS', () => {


  // not.toBe(3)  .toEqual({ data: 'hello' }) .toMatch(/stop/); toBeGreaterThan toBeLessThan(number | bigint)
  // 数组可用 .toContain('h') 
  // test('cjs-base', () => {
  //   expect(example.multiply(4, 2)).toBe(8)
  // })

  // // 1.必须有这玩意
  // test('cjs-should be defined', () => {
  //   expect(example.multiply).toBeDefined();
  // });

  // // 2.限制返回值的格式
  // test('cjs-should be return num', () => {
  //   expect(typeof example.multiply(4, 2)).toBe('number');
  // });

  // // 3.限制输入，校验输入格式
  // test('cjs-should be default value(if user 没有传值)', () => {
  //   const hook = example.multiply(4, 2);
    
  //   expect(hook).toBe(isBrowser ? 8 : window.innerHeight);
  //   expect(hook).toBe(isBrowser ? 8  : window.innerWidth  );
  // });

  // 4.验证返回值是否正确，是否正确更新，是否正确初始化，是否正确删除，冲突之后怎么办
  test('cjs-should be return corrtly', () => {
    // localStorage.setItem('foo', '"bar"');
    // expect(localStorage.getItem('foo')).toBe('goo' );
  });

  //5. 接下来验证功能就好了


 

  //6.是否会对别的功能产生影响

  // 7.异步测试,最后是超时的秒数
  test('cjs-promise promiseTest', async() => {
    expect.assertions(1);
    let test =await example.promiseTest()
    expect(test).toBe('这是结果哦');
  },100000);
})


