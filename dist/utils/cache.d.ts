declare class Cache {
    cacheData: {
        [key: string]: Array<object>;
    };
    constructor();
    set(name: string, item: any): void;
    get(name: string): object[];
    delete(name: string): void;
    add(name: string, data: object): void;
}
declare const _default: Cache;
export default _default;
