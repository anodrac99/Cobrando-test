//models
const { Employeeds } = require('../models/employeeds.model')

const getAllEmpoyeeds = async (req, res, next) => {

    const data = await Employeeds.findAll({where: {estatus: 'activo'}})

    res.status(200).json({
        data,
        status: 'success'
    })
}

const newEmployee = async (req, res, next) => {
    const {nif, 
        nombre, 
        apellido1, 
        apellido2, 
        codigo_departamento
    } = req.body

    const newUser = await Employeeds.create({
        nif,
        nombre,
        apellido1,
        apellido2,
        codigo_departamento
    })

    res.status(201).json({
        message: 'Usuario Creado',
        newUser
    })
    
}

const updateEmployee = async (req, res, next) => {
    const { codigo } = req.params;
    const {nombre, 
        apellido1, 
        apellido2, 
        codigo_departamento
    } = req.body

    const data = await Employeeds.findOne({where: {codigo: codigo}})
    
    await data.update({
        nombre,
        apellido1,
        apellido2,
        codigo_departamento
    })

    res.status(204).json()
}

const deleteEmployee = async (req, res, next) => {
    const { codigo } = req.params

    const data = await Employeeds.findOne({where: {codigo: codigo}})

    data.update({
        estatus: 'borrado'
    })

    res.status(204).json()
}

module.exports = { getAllEmpoyeeds, 
    newEmployee, 
    updateEmployee, 
    deleteEmployee 
}
