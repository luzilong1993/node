// 通过alloc的方式创建buffer
const buffer = Buffer.alloc(8);
console.log(buffer);

buffer[0] = 88;//10进制
buffer[1] = 0x88;//16进制
console.log(buffer);
