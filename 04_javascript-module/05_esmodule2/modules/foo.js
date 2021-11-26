let name = "why";
let age = 18;
const sayHello = function (name) {
    console.log("你好" + name);
}

setTimeout(() => {
    name = "aaa";
}, 1000)

// 导出的为变量的引用
export {
    name,
    age,
    sayHello
}


