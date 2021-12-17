const http = require('http');

// http发送get请求
// http.get('http://localhost:3000/', (res) => {
//     res.on('data', (data) => {
//         console.log(data);
//     })

//     res.on('end',() => {
//         console.log('获取到了所有参数');
//     })
// })

// http 发送post请求
http.request({
    method: 'POST',
    hostname: 'localhost',
    port: 3000
}, (res) => {
    res.on('data', (data) => {
        console.log(data);
    })

    res.on('end', () => {
        console.log('获取到了所有参数');
    })
})
