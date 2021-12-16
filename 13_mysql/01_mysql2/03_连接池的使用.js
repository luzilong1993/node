const mysql = require('mysql2');

// 1.创建连接池
const connections = mysql.createPool({
    host: 'localhost',
    port: 3306,
    database: 'coderhub',
    user: 'root',
    password: 'lu942146',
    connectionLimit: 10 //最多建立几个连接
})

const statement = `SELECT * FROM products WHERE price > ? AND score > ?;`;

// 2.使用连接池
// connections.getConnection
connections.execute(statement, [6000, 7], (err, result) => {
    console.log(result);
})
