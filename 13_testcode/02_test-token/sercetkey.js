// token演练

const Koa = require('koa');
const Router = require('koa-router');

const jwt = require('jsonwebtoken');

const app = new Koa();
const testRouter = new Router();

const SERCET_KEY = 'SERCET_KEY';





testRouter.get('/test', (ctx, next) => {
    const user = { id: 110, user: 'why' }
    const token = jwt.sign(user, SERCET_KEY, { //过期时间等
        expiresIn: 100000
    })

    ctx.body = token;

});

testRouter.get('/demo', (ctx, next) => {
    const authorization = ctx.headers.authorization;
    const token = authorization.replace('Bearer ', '');
    // token认证
    console.log(token);
    try {
        const result = jwt.verify(token, SERCET_KEY);
        ctx.body = result;
    } catch (err) {
        ctx.body = 'token无效'
    }

})

app.use(testRouter.routes());
app.use(testRouter.allowedMethods());


app.listen(9000, () => {
    console.log('服务器启动成功,9000');
})