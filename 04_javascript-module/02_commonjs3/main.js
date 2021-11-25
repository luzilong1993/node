// 加载过程是同步
// 模块在第一次引用时，会被执行一次
// 模块在多次引用时，会被缓存下来
// 


require('./bar');
require('./foo')

console.log("main中代码被执行");


