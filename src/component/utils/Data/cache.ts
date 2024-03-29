/**
 * @des Cache 缓存
 * @fn setData | getData | deleteData | addData 四个方法
 * @eg 
 */
class Cache {
    cacheData: {
        [key: string]: Array<any>
    }
    constructor() {
        this.cacheData = {
        }
    }
    /**
     * @des 存单个数据进去
     * @param name 
     * @param item 
     */
    setData(name: string, item: any) {
        this.cacheData[name] = item
    }
    /**
     * @des 获取某一个 key
     * @param name 
     * @returns 
     */
    getData(name: string) {
        const res = this.cacheData[name]
        return res
    }
    /**
     * @des 删掉某一个
     * @param name 
     */
    deleteData(name: string) {
        this.cacheData[name] = []
    }
    addData(name: string, data: any) {
        if (this.cacheData[name].length) {
            this.cacheData[name].push(data)
        }else{
            this.cacheData[name] = []
            this.cacheData[name].push(data)
        }
    }
}


// let cache1 = new Cache();cache1.addData("test","ddd")
//     cache1.addData("test",{
//         id:2,
//         fn:function (){
//             console.log("这是fn")
//         }
//     })
// // 返回值 必然是一个 array
// cache1.getData("test")[0]

export default new Cache()