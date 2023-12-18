interface OptionType {
    trigger: Array<"click" | "all" | "hover" | "contextmenu">,
    origin: HTMLDivElement,
    target: HTMLDivElement,
    position: "tl" | "tc" | "tr" | "bl" | "bc" | "br" | "auto",
    // 是否显示箭头
    arrow: boolean,
}





const HoverFn=(target:HTMLDivElement)=>{
    target.addEventListener("mouseenter", () => {
        if ( this.open) return;
        this.#isHover = true;
        this.#timer && clearTimeout(this.#timer);
        this.#timer = setTimeout(() => {
            this.#render();
            this.target = target;
            this.open = true;
        }, 200);
    });
}


if (option.trigger.includes("hover")) {
    target.addEventListener("mouseenter", () => {
        if (this.disabled || this.open) return;
        this.#isHover = true;
        this.#timer && clearTimeout(this.#timer);
        this.#timer = setTimeout(() => {
            this.#render();
            this.target = target;
            this.open = true;
        }, 200);
    });
    this.addEventListener("mouseenter", () => {
        if (this.#isHover) {
            this.#isHoverPoper = true;
            this.open = true;
        }
    });
    this.addEventListener("mouseleave", () => {
        if (this.#isHoverPoper) {
            this.open = false;
            this.#isHoverPoper = false;
        }
    });
    target.addEventListener("mouseleave", () => {
        // 是否处于hover
        setTimeout(() => {
            if (this.#isHover && !this.#isHoverPoper) {
                this.#isHover = false;
                this.open = false;
            }
            this.#timer && clearTimeout(this.#timer);
        }, 100);
    });
}
// if (option.trigger.includes("focus")) {
//     target.addEventListener("focus", () => {
//         if (this.disabled) return;
//         this.#render();
//         this.target = target;
//         this.open = true;
//     });
//     target.addEventListener("blur", () => {
//         this.open = false;
//     });
// }
// if (option.trigger.includes("click")) {
//     target.addEventListener("click", (ev:any) => {
//         ev.stopPropagation();
//         if (this.disabled) return;
//         this.#render();
//         this.target = target;
//         this.open = true;
//         // 注册 document click
//         if (this._documentClickEvent.length) return;
//         const click = (ev:any) => {
//             const { left, top, right, bottom } =
//                 this.#pop.getBoundingClientRect();
//             if (ev.x > right || ev.y > bottom || ev.x < left || ev.y < top) {
//                 this.open = false;
//             }
//         };
//         this._documentClickEvent.push(click);
//         document.addEventListener("click", click);
//     });
//     this.shadowRoot.addEventListener("click", (ev:any) => {
//         if (ev.target.closest("[close]")) {
//             this.open = false;
//         }
//     });
// }




class popover {
    options: OptionType
    constructor(options: OptionType) {
        const defaultOptions = {
            origin: null,
            target: null,
            trigger: ["hover"],
            position: "bc",
            // 是否显示箭头
            arrow: true,
        };
        this.options = Object.assign({}, defaultOptions, options);
       console.log("this.option:",this.options)
    }


    register(){

    }

    /**
     * @des 设置位置
     * @returns 
     */
    #SetPosition() {
        if (this.options.trigger?.includes("contextmenu")) return;
        if (!this.options.origin) return;
        const { left, top, right, bottom, width } =
            this.options.origin.getBoundingClientRect();
        // window.pageXOffset 是计算 滚动属性
        this.options.origin.style.setProperty("--left", String(left + window.pageXOffset));
        this.options.origin.style.setProperty("--top", String(top + window.pageYOffset));
        this.options.origin.style.setProperty("--right", String(right + window.pageXOffset));
        this.options.origin.style.setProperty("--bottom", String(bottom + window.pageYOffset));
        this.options.origin.style.setProperty("--width", String(width));
        // if (this.options.position =="auto") {
        //     // 自动识别位置
        //     const w = window.innerWidth;
        //     const h = window.innerHeight;
        //     const BOUND = {
        //         w: this.#pop.offsetWidth + 10,
        //         h: this.#pop.offsetHeight + 10,
        //     };
        //     if (top < BOUND.h) {
        //         const dir = ["bottom", "BL", "BR"].find((el) => this.auto.includes(el));
        //         dir && (this.dir = dir);
        //         return;
        //     }
        //     if (h - bottom < BOUND.h) {
        //         const dir = ["top", "TL", "TR"].find((el) => this.auto.includes(el));
        //         dir && (this.dir = dir);
        //         return;
        //     }
        //     if (left < BOUND.w) {
        //         const dir = ["right", "RT", "RB"].find((el) => this.auto.includes(el));
        //         dir && (this.dir = dir);
        //         return;
        //     }
        //     if (w - right < BOUND.w) {
        //         const dir = ["left", "LT", "LB"].find((el) => this.auto.includes(el));
        //         dir && (this.dir = dir);
        //         return;
        //     }
        // }
    }

}

new popover({
    trigger: ["hover"],
    origin: document.querySelector(".origin")!,
    target: document.querySelector(".target")!,
    position: "bc",
    // 是否显示箭头
    arrow: true,
})

export {
    popover
}