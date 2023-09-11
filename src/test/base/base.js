"use strict";
class popo {
    options;
    $container;
    constructor(options) {
        const defaultOptions = {
            element: null,
            data: [],
            multiple: false,
            toggle: () => { },
            select: () => { },
        };
        this.options = Object.assign({}, defaultOptions, options);
        this.$container = this.options.element;
    }
}
