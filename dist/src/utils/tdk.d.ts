interface baseParam {
    title: string;
    description: string;
    keywords: string;
}
declare class tdk {
    config: baseParam;
    constructor(param: baseParam);
    main(): void;
}
export default tdk;
/**
 new tdk({
    title:"你好",
    keywords:"",
    description:"",
 })
 */ 
