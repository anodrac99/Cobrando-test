const { db, DataTypes } = require('../utils/dataBase.util')

//create employeeds table
const Employeeds = db.define('employeeds', {
    codigo: {
        primaryKey:true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    nif: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellido1: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellido2: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    codigo_departamento: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estatus: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'activo'
    }
})

module.exports = { Employeeds }