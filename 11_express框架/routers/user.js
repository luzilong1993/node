const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.json(['why', 'kobe', '李雷'])
})

router.post('/:id', (req, res, next) => {
    res.json(`${req.params.id}用户的信息`)
})

router.post('/', (req, res, next) => {
    res.json('创建用户成功')
})

module.exports = router;