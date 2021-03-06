// token演练
const fs = require('fs');

const Koa = require('koa');
const Router = require('koa-router');

const jwt = require('jsonwebtoken');

const app = new Koa();
const testRouter = new Router();

// 在一个项目中的任何一个地方的相对路径，都是相对于process.cwd

const PRIVATE_KEY = fs.writeFileSync('./keys/private.key');
const PUBLIC_KEY = fs.writeFileSync('./keys/public.key');




testRouter.get('/test', (ctx, next) => {
    const user = { id: 110, user: 'why' }
    const token = jwt.sign(user, PRIVATE_KEY, { //过期时间等
        expiresIn: 100000,
        algorithm: 'RS256'
    })

    ctx.body = token;

});

testRouter.get('/demo', (ctx, next) => {
    const authorization = ctx.headers.authorization;
    const token = authorization.replace('Bearer ', '');
    // token认证
    console.log(token);
    try {
        const result = jwt.verify(token, PUBLIC_KEY, {
            algorithms: ['RS256']
        });
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