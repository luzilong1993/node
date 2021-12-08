const path = require('path');

const express = require('express');
const multer = require('multer');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads/')
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({
    // dest: './uploads/'
    storage
});


app.post('/login', upload.any(), (req, res, next) => {
    console.log(req.body);
    res.end('用户登录成功')
})

app.post('/upload', upload.single('file'), (req, res, next) => {
    console.log(req.files[0]);
    res.end('文件上传成功')
})

app.listen(8000, () => {
    console.log("服务器解析成功");
})