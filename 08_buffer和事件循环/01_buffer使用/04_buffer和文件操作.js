const fs = require('fs');
const sharp = require('sharp')

// 读取文本文件
fs.readFile('./foo.txt', { encoding: 'utf8' }, (err, data) => {
    console.log(data);
})

// 读取图片文件
fs.readFile('./aa.jpg', (err, data) => {
    console.log(data);
    fs.writeFile('./bb.jpg', data, err => {
        console.log(err);
    })
})

// sharp裁剪图片
sharp('aa.jpg')
    .resize(10, 10)
    .toBuffer()
    .then(data => {
        fs.writeFile('./cc.jpg', data, err => {
            console.log(
                err
            );
        })
    })