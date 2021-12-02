const http = require('http');

// 创建一个web服务器
const server = http.createServer((req, res) => {

    // 响应结果
    res.write("响应结果一")
    res.end("响应结果二")
})

server.listen(3000, '0.0.0.0', () => {
    console.log("服务器启动成功");
})