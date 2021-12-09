const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
// 解析form-data数据格式
const multer = require('koa-multer');


const app = new Koa();

const upload = multer({
    dest: './uploads/'
});

// 解析body中间件 json-urlencoded
app.use(bodyParser());

// 解析form-data数据格式
// app.use(upload.any())

const Router = require('koa-router');

const uploadRouter = new Router({ prefix: '/upload' })

uploadRouter.get('/avatar', upload.single('avatar'), (ctx, next) => {
    console.log(ctx.req.file);
    ctx.response.body = "上传文件成功"
})



app.use(uploadRouter.routes())

app.listen(8000, () => {
    console.log('koa服务启动');
})