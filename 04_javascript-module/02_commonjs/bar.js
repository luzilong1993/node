// 就是一个文件

let name = "cord";
const age = 18;

const info = {
    name:"cord",
}

let message = "my name is why";

function sayHello(name) {
    console.log("hello" + name);
}


setTimeout(() => {
    info.name = 111;
},1000)

// exports.name = name;
// exports.age = age;
// exports.sayHello = sayHello;

// 本质上是module.exports在导出
module.exports = {
    name: info,
    age: 20,
    sayHello:function() {
        console.log("你好");
    }
}

// exports和module.exports关系
// module.exports = exports

