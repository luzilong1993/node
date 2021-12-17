const Koa = require('koa');
const koaStatic = require('koa-static');


const app = new Koa();

// 静态资源服务器
app.use(koaStatic('./build'));

app.listen(8000, () => {
    console.log('koa服务启动');
})