const fs = require('fs');

const express = require('express');
const morgan = require('morgan');

const app = express();

const writerStream = fs.createWriteStream('./logs/access.log', {
    flags: 'a+'
})

app.use(morgan("combined", { stream: writerStream }))

app.get('/home', (req, res, next) => {
    res.end('hello world')
})

app.listen(8000, () => {
    console.log("服务器解析成功");
})