const express = require('express');

const app = express();

const USERNAME_DOES_NOT_EXISTS = "USERNAME_DOES_NOT_EXISTS";
const USERNAME_ALREDAY_EXISTS = "USERNAME_ALREDAY_EXISTS";

app.post('/login', (req, res, next) => {
    // 假如在数据库中查询用户名，发现不存在
    const isLogin = false;
    if (isLogin) {
        res.json('用户登录成功')
    } else {
        // res.type(400);
        // res.json('用户不存在')
        next(new Error(USERNAME_DOES_NOT_EXISTS))
    }
})

app.post('/register', (req, res, next) => {
    // 假如在数据库中查询用户名，发现不存在
    const isExists = true;
    if (!isExists) {
        res.json('用户注册成功')
    } else {
        // res.type(400);
        // res.json('用户已存在')
        next(new Error(USERNAME_ALREDAY_EXISTS))
    }
})

// 错误的中间件
app.use((err, req, res, next) => {
    let status = 400;
    let message = '';

    switch (err.message) {
        case USERNAME_DOES_NOT_EXISTS:
            message = '用户不存在';
            break;
        case USERNAME_ALREDAY_EXISTS:
            message = '用户已存在';
            break;
        default:
            message = 'not found'
    }

    res.status(status)
    res.json({
        errCode: status,
        errMessage: message
    })

})

app.listen(8000, () => {
    console.log("程序启动成功");
})