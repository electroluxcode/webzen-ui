"use strict";
/**
 * @des 策略模式
 */
class strategy {
    errorRules;
    constructor() {
        this.errorRules = {
            minLength: function (value) {
                if (value.length < 6) {
                    return '输入数据长度不足';
                }
            },
            isNumber: function (value) {
                if (!/\d+/.test(value)) {
                    return '请输入数字';
                }
            },
            required: function (value) {
                if (value === '') {
                    return '内容不为空';
                }
            },
        };
    }
    /**
     * @des 添加规则
     * @param name 规则名
     * @param fn 方法
     */
    addRule(name, fn) {
        this.errorRules[name] = fn;
    }
    /**
     * @des 校验
     * @param rules 规则数组
     * @param value 被校验的值
     * @returns
     */
    chainFn(rules, value) {
        let result = {
            code: 200,
            msg: [],
            status: true,
        };
        for (let i in rules) {
            const rule = rules[i];
            if (this.errorRules[rule]) {
                const errorMessage = this.errorRules[rule](value);
                if (errorMessage) {
                    result.msg.push(errorMessage);
                }
            }
            else {
                result.status = false;
            }
        }
        return result;
    }
}
// 调用部分
// const validator = new strategy();
// let result = ['minLength', 'isNumber'];
// validator.addRule('customRule', function (value) {
//     if (value === 'abc') {
//         return "不能输入'abc'";
//     }
// });
// console.log(JSON.stringify(validator.chainFn(result, '123'), null, 2));
