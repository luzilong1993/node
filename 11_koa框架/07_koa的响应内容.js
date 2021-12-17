const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
    // ctx.response.body = "hello world";
    // ctx.response.body = {
    //     name: 'aa',
    //     age: 28
    // }
    // 设置状态码
    // ctx.status = 400;
    // ctx.response.body = ['abc','cbcd','aaa']

    // ctx.response.body = 'hello world';
    ctx.body = 'aa';

    // ctx.body 代理到 ctx.response.body上  没有区别
})

app.listen(8000, () => {
    console.log('koa服务启动');
})