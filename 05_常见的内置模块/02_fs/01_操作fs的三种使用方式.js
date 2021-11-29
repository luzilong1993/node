const fs = require('fs')

// 案例，读取文件信息
const filepath = "./abc.txt";

// 方式一：同步操作
// const info = fs.statSync(filepath);
// console.log("后续需要执行的代码");
// console.log(info);

// 方式二：异步操作
// fs.stat(filepath, (err, info) => {
//     console.log(info);
// })
// console.log("后续需要执行的代码");


// 方式三：promise方式
fs.promises.stat(filepath).then(info => {
    console.log(info);
}).catch(e => {
    console.log(e);
})
console.log("后续需要执行的代码");
