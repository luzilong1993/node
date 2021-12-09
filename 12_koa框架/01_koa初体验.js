const Koa = require('koa');

const app = new Koa();

// ctx -> context 为上下文
app.use((ctx,next) => {
    ctx.response.body = "hello world"
    next();
})

app.listen(8000,() => {
    console.log('koa服务启动');
})