//models
const { Departments } = require('../models/departments.model')
const { Employeeds } = require('../models/employeeds.model')

const getAllDepartments = async (req, res, next) => {

    const data = await Departments.findAll({where: {estatus: 'activo'}, 
    attributes: ['codigo', 'nombre', 'presupuesto'], 
    include: [{
        model: Employeeds, attributes: ['codigo', 'nombre', 'apellido1', 'apellido2']
    }]})

    res.status(200).json({
        data,
        status: 'success'
    })

}

const newDepartment = async (req, res, next) => {

    const { nombre, presupuesto } = req.body

    const newDepartment = await Departments.create({
        nombre,
        presupuesto
    })

    res.status(201).json({
        newDepartment,
        status: 'success'
    })
    
}

const updateDepartment = async (req, res, next) => {
    
    const { codigo } = req.params
    const { name, presupuesto } = req.body

    const data = await Departments.findOne({where: {codigo: codigo}})

    await data.update({
        name,
        presupuesto
    })

    res.status(204).json()
}

const deleteDepartment = async (req, res, next) => {
    const { codigo } = req.params

    const data = await Departments.findOne({where: {codigo: codigo}})

    data.update({
        estatus: 'borrado'
    })
    
    res.status(204).json()
}

module.exports = { getAllDepartments,
    newDepartment,
    updateDepartment,
    deleteDepartment
}