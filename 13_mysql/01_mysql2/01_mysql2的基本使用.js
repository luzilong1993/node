const mysql = require('mysql2');

// 1.创建一个数据库连接
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'coderhub',
    user: 'root',
    password: ''
})

// 2.直接执行sql语句
const statement = `SELECT * FROM products WHERE price > 6000;`;

// 3.执行sql语句
connection.query(statement, (err, result, fields) => {
    console.log(result);
    // 1.终止连接
    connection.end();
    // 2.强制关闭
    connection.destroy();
})

