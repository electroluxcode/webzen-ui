import cache from "../Data/cache";


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
        return cache.getData("errorLog")
    }
    public errLogAdd(param:  {
        code?: number
        msg?: string
        data?: object
        date?:string
    }) {
        param.date=""+""+new Date().getFullYear()+new Date().getMonth()+new Date().getDay()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()
        cache.addData("errorLog",param)
        return cache.getData("errorLog")
    }
   
}

export default new errLog({
    logConfig:{
        isLog:true, 
    }
}) 