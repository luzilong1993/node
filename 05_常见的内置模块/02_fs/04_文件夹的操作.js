const fs = require('fs');
const path = require('path')

// 1.创建文件夹
const dirname = "./why"
if (!fs.existsSync(dirname)) {
    fs.mkdir(dirname, (err) => {
        console.log(err);
    })
}

// 2.读取文件夹中所有文件
// fs.readdir(dirname, (err, files) => {
//     console.log(files);
// })

// function getFiles(dirname) {
//     fs.readdir(dirname, { withFileTypes: true }, (err, files) => {
//         files.forEach(file => {
//             if (file.isDirectory()) {
//                 const filepath = path.resolve(dirname, file.name);
//                 getFiles(filepath)
//             } else {
//                 console.log(file.name);
//             }
//         })
//     })
// }

// getFiles(dirname);

// 3.文件夹的重命名

fs.rename('./why','./kobe',(err) => {
    console.log(err);
})