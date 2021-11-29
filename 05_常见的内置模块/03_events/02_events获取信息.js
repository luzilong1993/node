const EventEmitter = require('events');

// 1.创建发射器
const emitter = new EventEmitter();

// 2.监听某一个事件
// on
//on alias  addListener
emitter.on('click', (args) => {
    console.log("监听1到click事件", args);
})

const listener2 = (args) => {
    console.log("监听2到click事件", args);
}

emitter.on('click', listener2);

emitter.on('tap', (args) => {
    console.log(args);
})

// 3.获取注册的时间
console.log(emitter.eventNames());
console.log(emitter.listenerCount("click"));
console.log(emitter.listeners('click'));
