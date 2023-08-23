import cache from "../Data/cache";
class errLog {
    baseConfig;
    constructor(param) {
        this.baseConfig = Object.assign(this.initErr(), param);
    }
    initErr() {
        return {
            logConfig: {
                isLog: true,
            }
        };
    }
    errLogGet() {
        return cache.getData("errorLog");
    }
    errLogAdd(param) {
        param.date = "" + "" + new Date().getFullYear() + new Date().getMonth() + new Date().getDay() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds();
        cache.addData("errorLog", param);
        return cache.getData("errorLog");
    }
}
export default new errLog({
    logConfig: {
        isLog: true,
    }
});
