const path = require('path');

// 1.获取路径的信息
// const filepath = '/User/why/abc.txt';

// console.log(path.dirname(filepath));//文件夹路径
// console.log(path.basename(filepath));//文件名称
// console.log(path.extname(filepath));//后缀名


// 2.join路径拼接

const basePath = 'User/why';
const filename = 'abc.txt';

const filepath1 = path.join(basePath,filename);

console.log(filepath1);


// 3.resolve路径拼接
// resolve会判断拼接的路径字符串中，是否有以/或./或../开头的路径

const filepath2 = path.resolve(basePath,filename);
console.log(filepath2);

const basePath2 = 'User/why';
const basename2 = '/test/abc.txt';

const filepath3 = path.resolve(basePath2,basename2);///test/abc.txt
console.log(filepath3);

const basename3 = './test/abc.txt';

const filepath4 = path.resolve(basePath2,basename3);///Users/mininglamp/Desktop/company-project/node/node/05_常见的内置模块/01_path/User/why/test/abc.txt
console.log(filepath4);