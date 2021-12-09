const Router = require('koa-router');

// prefix -> 前缀 /users
const router = new Router({ prefix: "/users" });

router.get('/',(ctx,next) => {
    ctx.response.body = "users list"
})

router.put('/',(ctx,next) => {
    ctx.response.body = "put request"
})

module.exports = router;