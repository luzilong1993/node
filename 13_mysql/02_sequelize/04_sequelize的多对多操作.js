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


// Student
class Student extends Model { }

Student.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    age: DataTypes.INTEGER
}, {
    tableName: 'students',
    createdAt: false,
    updatedAt: false,
    sequelize
})

// Course
class Course extends Model { }

Course.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    price: DataTypes.DOUBLE
}, {
    tableName: 'courses',
    createdAt: false,
    updatedAt: false,
    sequelize
})

// 学生课程表
class StudentsCourse extends Model { }

StudentsCourse.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    studentId: {
        type: DataTypes.INTEGER,
        references: {
            model: Student,
            key: 'id'
        },
        field: 'student_id'
    },
    courseId: {
        type: DataTypes.INTEGER,
        references: {
            model: Course,
            key: 'id'
        },
        field: 'course_id'
    }
},{
    tableName: 'students_select_courses',
    createdAt: false,
    updatedAt: false,
    sequelize
})

// 多对多关系的联系
Student.belongsToMany(Course, {
    through: StudentsCourse,
    foreignKey: 'studentId',
    otherKey: 'courseId'
});


Course.belongsToMany(Student, {
    through: StudentsCourse,
    foreignKey: 'courseId',
    otherKey: 'studentId'
})

// 查询语句
async function queryProduct() {
    const result = await Student.findAll({
        include: {
            model: Course
        }
    })
    console.log(result);
}
queryProduct()


