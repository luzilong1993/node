const fs = require('fs');

// 传统方式写入
fs.readFile('./bar.txt',(err,data) => {
    fs.writeFile('./baz.txt',data,(err1) => {
        console.log(err1);
    })
})

// Stream写法
const reader = fs.createReadStream('./foo.txt');
const writer = fs.createWriteStream('./foz.txt');

reader.pipe(writer);
writer.end();
