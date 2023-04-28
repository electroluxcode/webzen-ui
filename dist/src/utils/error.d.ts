declare class errLog {
    baseConfig: any;
    constructor(param: any);
    initErr(): any;
    errLogGet(): object[];
    errLogAdd(param: {
        code?: number;
        msg?: string;
        data?: object;
        date?: string;
    }): object[];
}
declare const _default: errLog;
export default _default;
