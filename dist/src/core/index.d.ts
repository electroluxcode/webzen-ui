import { DefaultOptons, Options } from "../types/index";
import { ajax, tdk } from "../utils/index";
declare class UiInit {
    data: DefaultOptons;
    loading_circle: HTMLElement;
    mask: HTMLElement;
    constructor(options: Options);
    config(): void;
    init(): DefaultOptons;
    eventbusFn(): {
        eventBus: {
            [key: string]: any;
        };
        on: (name: string, event: Function) => void;
        emit: (name: string, data: any) => void;
        off: (eventName: string) => void;
        say: () => void;
    };
    cacheFn(): {
        cacheData: {
            [key: string]: object[];
        };
        set(name: string, item: any): void;
        get(name: string): object[];
        delete(name: string): void;
        add(name: string, data: object): void;
    };
    tdkFn(): typeof tdk;
    errorFn(): {
        baseConfig: any;
        initErr(): any;
        errLogGet(): object[];
        errLogAdd(param: {
            code?: number | undefined;
            msg?: string | undefined;
            data?: object | undefined;
            date?: string | undefined;
        }): object[];
    };
    ajaxFn(): typeof ajax;
}
export { UiInit };
