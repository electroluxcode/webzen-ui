import { quesionConfig } from "../types/index";
interface domConfig {
    inputTextArea: {
        selector: string;
        value: string;
    };
    outputTextArea: {
        selector: string;
        value: string;
    };
    buttonArea: string;
}
declare function domQuery(domConfig: domConfig, quesionConfig: quesionConfig): Promise<unknown>;
declare function streamQuery(domConfig: domConfig, quesionConfig: quesionConfig, socket: any): void;
export { domQuery, streamQuery };
