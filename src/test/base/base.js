"use strict";
class popovewr {
    options;
    $container;
    constructor(options) {
        const defaultOptions = {
            element: null,
            trigger: "hover",
            position: "bc",
            // 是否显示箭头
            arrow: true,
        };
        this.options = Object.assign({}, defaultOptions, options);
        this.$container = this.options.element;
    }
}
