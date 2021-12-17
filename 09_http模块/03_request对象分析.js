const http = require('http');

const server1 = http.createServer((req, res) => {
    // request对象中封装了客户端给我们服务器传递过来的所有信息
    console.log(req.url);//url地址
    console.log(req.method);//请求方式
    console.log(req.headers);//请求头
    


    res.end('server1');
})

server1.listen(8080, () => {
    console.log("server启动");
})