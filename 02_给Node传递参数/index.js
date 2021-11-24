console.log("hello world");
console.log(process.argv);


console.clear();//控制台清空操作
process.argv.forEach(item => {
    console.log(item);
});



function foo(){
    bar()
}


function bar(){
    console.trace();
}

foo()