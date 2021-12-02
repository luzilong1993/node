setTimeout(() => {
    console.log("setTimeout");
},0)

setImmediate(() => {
    console.log("setImmediate");
})

// 问题：setTimeout  setImmediate谁先执行

