const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('coderhub', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('连接数据库成功');
}).catch(e => {
    console.log('连接数据库失败');
})
