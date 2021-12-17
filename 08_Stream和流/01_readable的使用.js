const fs = require('fs');


// 传统方式读取
fs.readFile('./foo.txt', (err, content) => {
    console.log(content);
})


// 流的方式读取
const reader = fs.createReadStream('./foo.txt', {
    start: 3,
    end: 10,
    highWaterMark: 2
})
// 此时reader为Stream
// 数据读取过程
reader.on('data', (data) => {
    console.log(data);

    // 读的过程中暂停
    reader.pause();

    setTimeout(() => {
        // 暂停以后继续读
        reader.resume()
    },1000)
})

reader.on('open', () => {
    console.log('文件被打开');
})

reader.on('close', () => {
    console.log("文件被关闭");
})