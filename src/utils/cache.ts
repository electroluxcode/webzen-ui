class Cache {
    cacheData: {
        [key: string]: Array<object>
    }
    constructor() {
        this.cacheData = {
        }
    }
    set(name: string, item: any) {
        this.cacheData[name] = item
    }
    get(name: string) {
        const res = this.cacheData[name]
        return res
    }
    delete(name: string) {
        Reflect.deleteProperty(this.cacheData, name);
    }
    add(name: string, data: object) {
        if (this.cacheData[name]) {
            this.cacheData[name].push(data)
        }else{
            this.cacheData[name] = []
            this.cacheData[name].push(data)
        }
    }
}

export default new Cache()