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
const statement = `SELECT * FROM products WHERE price > ? AND score > ?;`;

// 3.执行sql语句
// connection.query(statement, (err, result, fields) => {
//     console.log(result);
// })
connection.execute(statement,[6000,7],(err,result) => {
    console.log(result);
});

