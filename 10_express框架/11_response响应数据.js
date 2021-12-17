const express = require('express');


const app = express();



app.get('/products/:id', (req, res, next) => {
    console.log(req.params);
    // req.params => 在数据库中查询
    res.end('商品的详情数据')
})

app.get('/login', (req, res, next) => {
    console.log(req.query);

    // 设置响应码
    // res.status(204)

    // 设置内容
    // 第一种方式：但是返回的为字符串格式了   -- 不推荐
    // res.type("application/json");
    // res.end(JSON.stringify({ name: "why", age: 18 }))

    // 第二种方式： .json()

    // res.json({ name: "why", age: 18 })
    res.json(['abc','ccc','sdd'])

})

app.listen(8000, () => {
    console.log("服务器解析成功");
})