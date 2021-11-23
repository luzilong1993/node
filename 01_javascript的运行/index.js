console.log('hello world');


function sum(num1, num2) {
    return num1 + num2
}

console.log(sum(10, 20)) 

console.log(sum('aaa', 'bbb'));



setTimeout(() => {
    console.log("定时器被执行");
}, 2000);
