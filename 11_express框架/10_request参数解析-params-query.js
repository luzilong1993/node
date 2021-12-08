

const express = require('express');


const app = express();



app.get('/products/:id', (req, res, next) => {
    console.log(req.params);
    // req.params => 在数据库中查询
    res.end('商品的详情数据')
})

app.get('/login', (req, res, next) => {
   console.log(req.query); 
    res.end('登录成功')
})

app.listen(8000, () => {
    console.log("服务器解析成功");
})