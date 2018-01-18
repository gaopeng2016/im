export default class Http {

        static HOST = 'http://127.0.0.1:3001';
    
        static dealy = (flag = false, ms = 20000) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    flag
                        ? resolve(`暂停${ms}`)
                        : reject('连接服务器超时')
                }, ms)
            })
        }
    
        static request = (url, { method = 'GET', body, params,  headers = {"Content-Type": "application/json"} } = {}) => {
            let init = { method, headers };
            if(body)
              init.body = JSON.stringify(body);
            if (params && method === 'GET') {
                let paramsArray = [];
                //encodeURIComponent
                Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
                if (url.search(/\?/) === -1) {
                    url += '?' + paramsArray.join('&')
                } else {
                    url += '&' + paramsArray.join('&')
                }
            }
            let myRequest = fetch(url, init);
            console.log(`发出请求:${url}`);
            return Promise.race([ myRequest, Http.dealy() ])
            
            // .then(res => res.ok ? res.json() : 
            // Promise.reject({message:` 返回值 ：${JSON.stringify(res)}  执行url ${url}错误 ： 配置 ${JSON.stringify(init)}`}))
        }
    }
    