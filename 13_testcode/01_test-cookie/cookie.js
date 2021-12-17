// cookie演练

const Koa = require('koa');
const Router = require('koa-router')

const app = new Koa();
const testRouter = new Router();

testRouter.get('/test', (ctx, next) => {

    ctx.cookies.set('name', 'lilei', {
        maxAge: 50 * 1000
    })
    ctx.body = 'test';
});

testRouter.get('/demo', (ctx, next) => {
    // 读取cookie
    console.log(`你的cookie是${ctx.cookies.get('name')}`);
    ctx.body = 'demo';
})

app.use(testRouter.routes());
app.use(testRouter.allowedMethods());


app.listen(9000, () => {
    console.log('服务器启动成功,9000');
})