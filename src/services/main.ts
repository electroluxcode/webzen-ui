import { quesionConfig } from "../types/index"
interface domConfig {
    inputTextArea: { selector: string, value: string },
    outputTextArea: { selector: string, value: string },
    buttonArea: string
}
interface resultType {
    code: number,
    quesionConfig: object,
    result: object
}
// 解决key
interface ob {
    [key: string]: any
}
function domQuery(domConfig: domConfig, quesionConfig: quesionConfig) {
    return new Promise((resolve, reject) => {
        // 拿到输入框
        let inputDom: any = (document.querySelector(domConfig.inputTextArea.selector) as HTMLElement)
        inputDom[domConfig.inputTextArea.value] = quesionConfig.quesionText;
        //点击查询   这里难复用 唉 
        (document.querySelector(domConfig.buttonArea)?.parentElement as HTMLElement).click()

        setTimeout(() => {
            let output: Array<string | undefined> = []
            document.querySelectorAll(domConfig.outputTextArea.selector).forEach((e: Partial<ob>, index) => {
                // console.log(e.innerText)
                output.push(e[domConfig.outputTextArea.value])
            })

            let result: string | undefined = output.at(-1)
            // console.log("settimeout-output:"+output,result)
            resolve(result)
        }, (Number(quesionConfig.quesionTime) - 1) * 1000)
    })
}

function streamQuery(domConfig: domConfig, quesionConfig: quesionConfig, socket: any) {
    var timeDelay = 1
    var deadLine = 30
    var inputDom: any = (document.querySelector(domConfig.inputTextArea.selector) as HTMLElement)
    inputDom[domConfig.inputTextArea.value] = quesionConfig.quesionText;
    //点击查询    
    (document.querySelector(domConfig.buttonArea)?.parentElement as HTMLElement).click()

    // 界面上的dom元素
    var output: Array<string | undefined> = []
    // 旧元素新元素
    var dupTextCount: number = 0



    var res = setInterval(() => {
        timeDelay = timeDelay + 1
        // console.log(timeDelay)
        document.querySelectorAll(domConfig.outputTextArea.selector).forEach((e: Partial<ob>, index) => {
            if (index  >= document.querySelectorAll(domConfig.outputTextArea.selector).length-1) {
                let domTemp = e[domConfig.outputTextArea.value]
                domTemp = domTemp.replace(/\s*/g, "");
                output.push(domTemp)
            }
        })
        let result: string | undefined
        if(output.at(-1) && output.at(-2)){
            result = output.at(-1)?.replace(output.at(-2) as string, "")
        }else{
            // console.log(result)
            // result = output.at(-1)?.replace(output.at(-2) as string, "")
        }
        // console.log( output,":output")
        // 判断是否已经结束
        if ((document.querySelector("button.flex") as HTMLDivElement)?.innerText=='Regenerate response' || timeDelay > deadLine || dupTextCount>10 ) {
            console.log({
                code:200,
                text:result,
                isLast:true
            })
            // 空值判断
            console.log(output)
            if(output.length==1){
                socket.emit("resultGet", {
                    code:200,
                    text:result,
                    isLast:true
                })
                clearInterval(res)
                return
            }
            socket.emit("resultGet", {
                code:200,
                text:result,
                isLast:true
            })
            clearInterval(res)
            return
        }
        if (result && output.at(-1) != output.at(-2)) {
            dupTextCount = 0
            console.log(result,output.at(-1) , output.at(-2),"----")
            let res = {
                code:200,
                text:result,
                isLast:false
            }
            console.log(res)
            socket.emit("resultGet", res)
            
        }else{
            dupTextCount = dupTextCount+1
        }

    }, (Number(quesionConfig.quesionTime)) * 1000)
    
}

export { domQuery, streamQuery }

// localStorage.setItem("timeDelay","1")
// let deadLine = 5
// let res = setInterval(()=>{
//     let old = localStorage.getItem("oldArray")
//     let time = Number(localStorage.getItem("timeDelay"))
//     localStorage.setItem("timeDelay",String(Number(localStorage.getItem("timeDelay"))+1))
//     console.log(localStorage.getItem("timeDelay"))

//     if(time>deadLine){
//         clearInterval(res)
//     }
// },1000)

// let temp = "testParamtest"
// temp.replace("tes","")
// console.log(temp)
// "testParamtest".replace("test")