interface baseConfig {
    logConfig: {
        isLog: boolean
    }
}
interface errMsgConfig {
    code: number
    msg: string
    data: object
    date:string
}
export {
    baseConfig,
    errMsgConfig
}