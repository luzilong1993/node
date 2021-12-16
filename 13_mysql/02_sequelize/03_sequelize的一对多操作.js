const { Sequelize, DataTypes, Model, Op } = require('sequelize');

const sequelize = new Sequelize('coderhub', 'root', 'lu942146', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log("连接成功");
}).catch(e => {
    console.log("连接失败", e);
})

// 定义类

class Brand extends Model { }
Brand.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    webSite: DataTypes.STRING,
    phoneRank: DataTypes.STRING
}, {
    tableName: 'brand',
    createdAt: false,
    updatedAt: false,
    sequelize
})


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
    score: DataTypes.DECIMAL,
    brandId: {
        field: 'brand_id', //指定映射
        type: DataTypes.INTEGER,
        references: {  //指定外键约束
            model: Brand,
            key: 'id'
        }
    }
}, {
    tableName: 'products',//关联的哪张表
    createdAt: false,
    updatedAt: false,
    sequelize
});



// 将两张表联系在一起
Product.belongsTo(Brand, {
    foreignKey: 'brandId'
})

async function queryProduct() {
    const result = await Product.findAll({
        include: {
            model: Brand
        }
    })
    console.log(result);
}
queryProduct()