const express = require('express')

//controllers
const {getAllDepartments,
    newDepartment,
    updateDepartment,
    deleteDepartment
} = require('../controllers/departments.controller')

const departmentsRouter = express.Router()

departmentsRouter.get('/', getAllDepartments)

departmentsRouter.post('/', newDepartment)

departmentsRouter.patch('/:codigo', updateDepartment)

departmentsRouter.delete('/:codigo', deleteDepartment)

module.exports = { departmentsRouter }