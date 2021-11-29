const EventEmitter = require('events');

// 1.创建发射器
const emitter = new EventEmitter();

// 2.监听某一个事件
// on
//on alias  addListener
emitter.once('click', (...args) => {
    console.log("监听1到click事件", args);
})

// once只监听一次

const listener2 = function(args) {
    //箭头函数不绑定this,也没有arguments
    console.log(arguments);
    console.log(this);//{}
    console.log("监听2到click事件", args);
}

emitter.on('click', listener2)

emitter.prependListener('click', (...args) => {
    console.log("监听3到click事件", args);
})

emitter.on('scroll',(args) => {
    console.log("监听scroll方法");
})
// 发出一个事件

setTimeout(() => {
    emitter.removeAllListeners("click");
    emitter.emit('click', "why", "jams", "koby");
    emitter.emit('click', "why", "jams", "koby");
    emitter.emit('scroll', "why", "jams", "koby");
}, 2000)
