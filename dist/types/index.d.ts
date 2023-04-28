/**
 * @userConfig 用户id
 * @domConfig Dom节点配置  @inputTextArea 输入框的selector @buttonArea 点击事件的selector @outputTextArea 输出框的selector
 * @sdkVersion sdk版本
 */
export interface DefaultOptons {
    circleColor: string;
    maskColor: string;
    bgId: number;
    sdkVersion: string | number;
}
export interface quesionConfig {
    quesionId: number | string;
    quesionText: string;
    quesionTime: number;
}
export interface Options extends Partial<DefaultOptons> {
    requestUrl: string;
}
export declare enum loadInitConfig {
    version = "1.0.0"
}
export declare type reportTrackerData = {
    [key: string]: any;
    event: string;
    targetKey: string | object;
};
