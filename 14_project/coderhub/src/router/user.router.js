const Router = require('koa-router');

const {
    create
} = require('../controller/user.controller');
const {
    verifyUser
} = require('../middleware/user.middleware');

const userRouter = new Router({ prefix: '/users' });

// 路径-中间件处理逻辑
userRouter.post('/', verifyUser, create);

module.exports = userRouter;