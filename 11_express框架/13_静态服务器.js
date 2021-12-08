const express = require('express');

const app = express();

// 静态资源根目录
app.use(express.static('./build'))

app.listen(8000, () => {
    console.log("程序启动成功");
})