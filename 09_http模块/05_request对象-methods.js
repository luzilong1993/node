const http = require('http');

const querystring = require('querystring');

const server1 = http.createServer((req, res) => {

    const { url, method, headers: { host } } = req;

    const myUrl = new URL(url, `http://${host}`);
    const { pathname } = myUrl;

    if (pathname === '/login') {
        if (method === "POST") {
            // 拿到body中的数据通过流的方式  req中没有body
            req.setEncoding('utf-8')
            req.on('data', (data) => {
                const { username, password } = JSON.parse(data);
                console.log(username);
                console.log(password);
            })
        }
    }
    res.end('请求结果')
})

server1.listen(8080, () => {
    console.log("server启动");
})