const name = "why";
const age = 18;
const sayHello = function (name) {
    console.log("你好" + name);
}

// 导出三种方式
// 1.方式一：
// export const name = "why";
// export const age = 18;
// export const sayHello = function(name) {
//     console.log("你好" + name);
// }


// 方式二：{}中统一导出
// {},不是一个对象
// {放置要导出的变量的引用列表}
export {
    name,
    age,
    sayHello
}

// 方式三:{}导出时，可给变量起别名

// export {
//     name as fName,
//     age as fAge,
//     sayHello as fSayHello
// }



// 默认导出
// 注意： default默认的只能有一项
export default function () {
    console.log("对一个东西进行格式化");
}

