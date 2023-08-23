/**
 * @des 函数记忆
 */


 function memoizeAsync<T>(
    func: (...args: any[]) => Promise<T>
  ): (...args: any[]) => Promise<T> {
    const cache: Map<string, Promise<T>> = new Map();
  
    return async (...args: any[]): Promise<T> => {
      const key = JSON.stringify(args);
  
      if (cache.has(key)) {
        console.log("触发记忆")
        return cache.get(key)!;
      }
  
      const resultPromise = func(...args);
      cache.set(key, resultPromise);
  
      try {
        const result = await resultPromise;
        return result;
      } catch (error) {
        cache.delete(key);
        throw error;
      }
    };
  }

  
 let sleep = (a:any,b:any)=>{
    return a+b
 }
 
let sleepTest = memoizeAsync(sleep)
console.log(sleepTest(1,5))
console.log(sleepTest(1,2))
console.log(sleepTest(1,5))
// console.log()

