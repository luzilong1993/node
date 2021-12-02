const http = require('http');

// 第一种方式创建多个服务器
const server1 = http.createServer((req,res) => {
    res.end('server1');
})

// server1.listen(8080,() => {
//     console.log("server1启动");
// })

// const server2 = http.createServer((req,res) => {
//     res.end('server2');
// })

// server2.listen(9000,() => {
//     console.log("server2启动");
// })


// // 第二种
// // 本质上是一样：源码
// const server3 = new http.Server((req,res) => {
//     res.end('server3');
// })

// server3.listen(9001,() => {
//     console.log("server3启动");
// })




// 监听方法的使用
// server1.listen(8080,() => {
//     console.log("server1启动");
// })
// 如果不写端口号
server1.listen(8900,'127.0.0.1',() => {
    console.log("server1启动");
    console.log(server1.address().port);
})
// 主机号
// localhost:本质上是一个域名，通常解析成127.0.0.1
// 127.0.0.1:回环地址 表达的是我们主机自己发出去的包，自己接收
// 0.0.0.0:
