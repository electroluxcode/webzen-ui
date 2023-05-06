import { DefaultOptons,  Options  } from "../types/index"
import {ajax, cache,error,eventbus,tdk} from "../utils/index"
class utilInit {
    public data: DefaultOptons;
    public loading_circle:HTMLElement = document.createElement("div");
    public mask:HTMLElement = document.createElement("div");

    public constructor(options: Options) {
        // 赋值
        this.data = Object.assign(this.init(), options)
        this.init()
        
    }

    public config(){
        console.log(this.data)
    }
    public init(): DefaultOptons {
        return <DefaultOptons>{ 
            
        }
    }

    // 1.支持eventBus
    public eventbusFn(){
        return eventbus
    }

    // 2.支持cache
    public cacheFn(){
        return cache
    }

    //3.支持tdk，需要new
    public tdkFn(){
        return tdk
    }

    // 4.支持error
    public errorFn(){
        return error
    }
    
     // 5.支持ajax 需要new
     public ajaxFn(){
        return ajax
    }
}

export {
    utilInit
}
