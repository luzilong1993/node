const http = require('http');

const server1 = http.createServer((req, res) => {
    // request对象中封装了客户端给我们服务器传递过来的所有信息
    // 最基本的使用方式
    // if(req.url === '/login'){
    //     res.end('欢迎回来')
    // } else if(req.url === '/users' ){
    //     res.end('用户列表')
    // } else {
    //     res.end('错误请求，检查');
    // }

    // 请求数据放到url
    const { url, headers: { host } } = req;
    const myUrl = new URL(url, `http://${host}`);
    const { pathname, searchParams } = myUrl;

    console.log(searchParams.get('username'));
    console.log(searchParams.get('password'));

    // 


    res.end('请求结果')
})

server1.listen(8080, () => {
    console.log("server启动");
})