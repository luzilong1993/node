const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/upload') {
        if (req.method === 'POST') {
            const fileWritter = fs.createWriteStream('./aa.jpg', { flags: 'a+' });

            req.on('data', (data) => {
                fileWritter.write(data)
            })

            req.on('end',()=> {
                console.log('文件上传成功');
                res.end('文件上传成功')
            })
        }
    }
})

server.listen(8000, () => {
    console.log('文件上传启动成功');
})