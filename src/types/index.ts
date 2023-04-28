/**
 * @userConfig 用户id
 * @domConfig Dom节点配置  @inputTextArea 输入框的selector @buttonArea 点击事件的selector @outputTextArea 输出框的selector
 * @sdkVersion sdk版本
 */
export interface DefaultOptons {
    circleColor:string , // plugin | network
    maskColor: string,
    bgId:number

    // isSingleFront:boolean,
    sdkVersion: string | number,
   
}


export interface quesionConfig {
    quesionId:number | string,
    quesionText:string,
    quesionTime:number
}


//必传参数 requestUrl
export interface Options extends Partial<DefaultOptons> {
    requestUrl: string,
}

//版本  
export enum loadInitConfig {
    version = '1.0.0'
}
//上报必传参数
export type reportTrackerData = {
    [key: string]: any,
    event: string,
    targetKey: string | object
}