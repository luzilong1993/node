const message = 'Hello World';

// 创建buffer
// 创建方式一
const buffer = new Buffer(message);
console.log(buffer);

// 创建方式二
const buffer2 = Buffer.from(message);
console.log(buffer2);