const http = require('http');

// 创建一个web服务器
const server = http.createServer((req, res) => {

    // http状态码
    /*
    200: 客户端请求成功
    400: 由于客户端语法错误，不能被服务器所理解
    401: 请求未授权
    403: 服务端收到请求，但是拒绝提供服务
    404: 请求资源不存在
    500: 服务器错误
    503: 服务器当前不能够处理客户端的请求
    */ 

    // 设置状态码
    // 方式一：直接给属性赋值
    // res.statusCode = 400;

    // 方式二： 和Head一起设置
    res.writeHead(503)

    // 响应结果
    res.write("响应结果一")
    res.end("响应结果二")
})

server.listen(3000, '0.0.0.0', () => {
    console.log("服务器启动成功");
})