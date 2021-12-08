const express = require('express');

const userRouter = require('./routers/user');

const app = express();

app.use("/users", userRouter);

app.listen(8000, () => {
    console.log("程序启动成功");
})

