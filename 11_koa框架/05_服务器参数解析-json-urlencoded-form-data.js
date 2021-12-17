const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
// 解析form-data数据格式
const multer = require('koa-multer');


const app = new Koa();

const upload = multer();

// 解析body中间件 json-urlencoded
app.use(bodyParser());

// 解析form-data数据格式
app.use(upload.any())

// const Router = require('koa-router');

// const userRouter = new Router({ prefix: '/users' })

// userRouter.get('/:id', (ctx, next) => {
//     console.log(ctx.request.params);
//     console.log(ctx.request.query);
// })



app.use((ctx, next) => {
    // multer将解析后的body放到ctx.req对象中
    console.log(ctx.req.body);

    // request 为koa自带的
    console.log(ctx.request.body);
    ctx.response.body = "hello world"
})

// app.use(userRouter.routes())

app.listen(8000, () => {
    console.log('koa服务启动');
})