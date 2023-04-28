
import cache from "./cache"



class errLog {
    public baseConfig : any
    constructor(param: any) {
        this.baseConfig = Object.assign(this.initErr(), param)
    }
    public initErr(): any {
        return <any>{
            logConfig: {
                isLog: true,
            }
        }
    }
    public errLogGet() {
        return cache.get("errorLog")
    }
    public errLogAdd(param:  {
        code?: number
        msg?: string
        data?: object
        date?:string
    }) {
        param.date=""+""+new Date().getFullYear()+new Date().getMonth()+new Date().getDay()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()
        cache.add("errorLog",param)
        return cache.get("errorLog")
    }
   
}

export default new errLog({
    logConfig:{
        isLog:true, 
    }
}) 