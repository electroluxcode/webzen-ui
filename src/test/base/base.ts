interface OptionType{
    trigger:"click" | "all" | "hover",
    element:HTMLDivElement,
    position:"tl" | "tc" | "tr"  | "bl" | "bc" | "br",
    // 是否显示箭头
    arrow:boolean,
    options: OptionType
    $container: HTMLElement;
}
class popo{
    options: OptionType
    $container: HTMLElement;
    constructor(options: OptionType) {
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