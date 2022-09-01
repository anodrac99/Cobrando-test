const { db, DataTypes } = require('../utils/dataBase.util')

//create Departments table
const Departments = db.define('departments', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    presupuesto: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    estatus: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'activo'
    }
})

module.exports = { Departments }