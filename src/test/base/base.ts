interface OptionType{
    trigger:"click" | "all" | "hover",
    element:HTMLDivElement,
    position:"tl" | "tc" | "tr"  | "bl" | "bc" | "br",
    // 是否显示箭头
    arrow:boolean,
}
class popovewr{
    options: OptionType
    $container: HTMLElement;
    constructor(options: OptionType) {
        const defaultOptions = {
            element: null,
            trigger:"hover",
            position:"bc" ,
            // 是否显示箭头
            arrow:true,
        };
        this.options = Object.assign({}, defaultOptions, options);
        this.$container = this.options.element;
       
    }
}