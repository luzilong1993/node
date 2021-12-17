const { Sequelize, DataTypes, Model, Op } = require('sequelize');

const sequelize = new Sequelize('coderhub', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log("连接成功");
}).catch(e => {
    console.log("连接失败", e);
})

// 定义类
class Product extends Model { }
// 建立关系映射
Product.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    price: DataTypes.DOUBLE,
    score: DataTypes.DECIMAL
}, {
    tableName: 'products',//关联的哪张表
    createdAt: false,
    updatedAt: false,
    sequelize
});


async function queryProduct() {
    // 1.查询数据库中products中的所有内容
    // const result = await Product.findAll();
    // console.log(result);

    // 2. 价格大于等于7000的手机
    // const result = await Product.findAll({
    //     where: {
    //         price:{
    //             [Op.gte]:7000
    //         }

    //     }
    // });
    // console.log(result);

    // 3.插入数据
    // const result = await Product.create({
    //     title: '三星nova',
    //     price: 8888,
    //     score: '5.4'
    // })

    // console.log(result);

    // 4.更新数据
    const result = await Product.update({
        price: 35666
    }, {
        where: {
            id: 1
        }
    })
}
queryProduct()
