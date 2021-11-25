console.log("es6 modules");
// 常见的导入方式也是三种

// 1.普通导入方式
// import { name, age, sayHello } from './modules/foo.js';

// 2.导出变量之后起别名
// import { name as wName, age as wAge, sayHello as wSayHello } from './modules/foo.js';

// 3.* as 别名

// import * as foo from './modules/foo.js';

// console.log(foo.name);
// console.log(foo.age);
// foo.sayHello("王小波")


// 演练：export和import结合使用

import { name, age, sayHello } from './modules/bar.js';
console.log(name);
console.log(age);
console.log(sayHello);


// 演练：default export 导入
import format from './modules/foo.js';
format()

// 演练：import函数
let flag = true;
if(flag) {
    // 执行函数
    // webpack环境下，使用require函数
    // es-module环境下，使用import函数
    // 脚手架 -> webpack:import()单独打包
    import("./modules/foo.js").then(res => {
        console.log(res.name);
        console.log(res.age);
        console.log(res.sayHello);
    })
}
