/*
  exports {
      name,
      age,
      sayhello
  }
**/ 

// node中实现commonjs模块化的本质就是对象的引用赋值


// bar = exports
// const bar = require('./bar')
// console.log(bar.name);
// console.log(bar.age);
// bar.sayHello("kobe")

const bar = require('./bar')

console.log(bar.name.name);
console.log(bar.age);
bar.sayHello()

setTimeout(() => {
    console.log(bar.name.name);
},2000)

