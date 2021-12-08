const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log('home common middleware');
    next()
})
// 路径和方法匹配的中间件
app.get('/home',(req,res,next) => {
    console.log('home path and method middleware');
    res.end('home path and method middleware')
})

app.post('/login',(req,res,next) => {
    console.log('login path and method middleware');
    res.end('login')
})

app.listen(8000, () => {
    console.log('服务启动');
})