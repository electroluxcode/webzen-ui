interface AjaxRequest {
    method: 'GET' | 'get' | 'POST' | 'post'
    url: string
    data?: any // post
}

interface AjaxResponse {
    [prop: string]: any
}
//注意是async 引用的时候可以await
async function ajax(options: AjaxRequest): Promise<AjaxResponse> {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const method = options.method.toUpperCase();

        if (method === 'GET') {
            xhr.open(method, options.url, true);
        }

        if (method === 'POST') {
            xhr.open(method, options.url, true);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.send(JSON.stringify(options.data));
        } else {//GET
            xhr.send();
        }

        xhr.onreadystatechange = () => {
            // xhr.readyState == 4 请求已完成，且响应已就绪
            if (xhr.readyState !== 4 || xhr.status === 0) return;
            const responseData: AjaxResponse = JSON.parse(xhr.response);
            // 当 readyState 等于 4 且status为 200 时，表示响应已就绪：
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(responseData);
            } else {
                reject(`request failed with status code ${xhr.status}`);
            }
        };
    });
}

export default ajax