interface AjaxRequest {
    method: 'GET' | 'get' | 'POST' | 'post';
    url: string;
    data?: any;
}
interface AjaxResponse {
    [prop: string]: any;
}
declare function ajax(options: AjaxRequest): Promise<AjaxResponse>;
export default ajax;
