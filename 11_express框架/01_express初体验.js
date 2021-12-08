const express = require('express');

// express其实是一个函数  createApplication

// 返回app()
const app = express();

// 监听默认路径
app.get('/', (req, res, next) => {
    res.end('hello express')
})

app.post('/',(req,res,next) => {
    res.end('hello post express')
})

app.post('/login',(req,res,next) => {
    res.end('欢迎回来')
})

// 
app.listen(8000, () => {
    console.log("开启监听");
});

// 调用createserver
