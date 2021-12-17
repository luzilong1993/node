const express = require('express');

const app = express();

// body-parser
// app.use((req, res, next) => {
//     if (req.headers['content-type'] === 'application/json') {
//         req.on('data', (data) => {
//             const info = JSON.parse(data.toString());
//             req.body = info;

//         })
//         req.on('end', () => {
//             res.end('welcome back');
//             next()
//         })
//     } else {
//         next();
//     }
// })

// body-parser使用

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// extended
// true: 那么对urlencoded解析时，它使用第三方库 fs
// false: 那么对urlencoded解析时，它使用node内置模块querystring


app.post('/login', (req, res, next) => {
    console.log(req.body);
})

app.post('/products', (req, res, next) => {
    console.log(req.body);
})

app.listen(8000, () => {
    console.log('服务启动');
})