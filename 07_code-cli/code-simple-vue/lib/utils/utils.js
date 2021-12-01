const path = require('path');
const fs = require('fs');

const log = require('./log')

const ejs = require('ejs');

// 编译ejs模版
const compile = (templatePath, data) => {

    return new Promise((resolve, reject) => {
        ejs.renderFile(templatePath, { data }, {}, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

// 写入文件
const writeToFile = (path, content) => {
    if (fs.existsSync(path)) {
        log.error("the file already exists~")
        return;
    }
    return fs.promises.writeFile(path, content);
}

// 创建文件夹
const createdir = (dirname) => {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        // 不存在
        if (createdir(path.dirname(dirname))) {
            fs.mkdirSync(dirname)
            return true
        }
    }
}


module.exports = {
    compile,
    writeToFile,
    createdir
}
