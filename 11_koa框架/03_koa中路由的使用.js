const Koa = require('koa');

const app = new Koa();

const usersRouter = require('./router/user');

// 使用use注册中间件
// app.use((ctx, next) => {
//     // ctx.response.body = "hello world";
//     next();
// })

app.use(usersRouter.routes());
app.use(usersRouter.allowedMethods());

app.listen(8000, () => {
    console.log('koa服务启动');
})