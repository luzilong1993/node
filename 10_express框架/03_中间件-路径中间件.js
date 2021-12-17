const express = require('express');

const app = express();


// 中间件永远匹配查找到的第一个
app.use((req, res, next) => {
    console.log('common middleware 01');
    next()
})
// 路径匹配中间件
// app.use(path,callback)
app.use('/home', (req, res, next) => {
    console.log('home middleware 01');
    next()
})

// 中间插入一个普通中间件
app.use((req, res, next) => {
    console.log('common middleware 02');
    next()
})

app.use('/home', (req, res, next) => {
    console.log('home middleware 02');
    res.end('home middleware')
})


app.listen(8000, () => {
    console.log('服务启动');
})