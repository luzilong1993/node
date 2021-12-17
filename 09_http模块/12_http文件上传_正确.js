const http = require('http');
const fs = require('fs');
const qs = require('querystring')

const server = http.createServer((req, res) => {
    if (req.url === '/upload') {
        if (req.method === 'POST') {
            // 文件上传必须设置为二进制
            req.setEncoding('binary');

            let body = '';

            const boundary = req.headers['content-type'].split(';')[1].replace(' boundary=', '');
            req.on('data', (data) => {
                body += data;
            })

            req.on('end', () => {
                // 处理body
                // 1.获取image/jpg的位置
                const payload = qs.parse(body, "\r\n", ': ');
                const type = payload['Content-Type'];

                // 2.开始在image/jpg位置截取
                const typeIndex = body.indexOf(type);
                const typeLength = type.length;
                let imageDate = body.substring(typeIndex + typeLength);

                // 3.将中间的两个空格截取
                imageDate = imageDate.replace(/^\s\s*/, '');
                // 4.将最后的boundary去除掉
                imageDate = imageDate.substring(0, imageDate.indexOf(`--${boundary}--`));

                fs.writeFile('./aa.jpg', imageDate, { encoding: 'binary' }, (err) => {
                    console.log("文件上传成功");
                    res.end("文件长传成功")
                })

            })
        }
    }
})

server.listen(8000, () => {
    console.log('文件上传启动成功');
})