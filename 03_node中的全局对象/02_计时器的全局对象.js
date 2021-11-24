setTimeout(() => {
    console.log("settimeout");
}, 1000);


setInterval(() => {
    console.log("setinterval");
},1000)

setImmediate(() => {
    console.log("setimmediate");
})

process.nextTick(() => {
    console.log("process.nextTick");
})
