define(function (require, exports, module) {
    const name = "six";
    const age = 20;
    const sayHello = function (name) {
        console.log("你好" + name);
    }

    module.exports = {
        name,
        age,
        sayHello
    }
})