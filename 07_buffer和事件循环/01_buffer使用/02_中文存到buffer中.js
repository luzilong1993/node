const message = "你好";

// 对中文进行编码
const buffer = Buffer.from(message);

console.log(buffer.toString());

// 2.编码使用uft16le，用utf8解码
// 怎样编码，就使用怎样的解码方式来进行解码
const buffer2 = Buffer.from(message,'utf16le');
console.log(buffer2);
console.log(buffer2.toString('utf16le'));
