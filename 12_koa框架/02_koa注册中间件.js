const Koa = require('koa');

const app = new Koa();

// 使用use注册中间件
app.use((ctx, next) => {
    if(ctx.request.url === '/login'){
        if(ctx.request.method === 'GET'){
            ctx.response.body = "欢迎回来"
        }
    } else {
        ctx.response.body = "hello world"
    }
})

// 没有提供下面的注册方式
// app.get
// app.use(path,(ctx,next)=>{})
// 连续注册中间件也没提供  如下：
// app.use((ctx, next) => {

// }, (ctx, next) => {

// })

app.listen(8000, () => {
    console.log('koa服务启动');
})