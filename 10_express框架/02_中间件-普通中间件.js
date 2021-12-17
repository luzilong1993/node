const express = require('express');

const app = express();

// 编写普通中间件
// use注册一个中间件（回调函数）
app.use((req, res, next) => {
    console.log("注册了第01个中间件");
    next();
})

app.use((req, res, next) => {
    console.log("注册了第02个中间件");
    next();
})

app.use((req, res, next) => {
    console.log("注册了第03个中间件");
    res.end('hello world');
})

app.listen(8000, () => {
    console.log("服务启动");
})