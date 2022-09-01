const express = require('express')

//controllers
const { getAllEmpoyeeds, 
    newEmployee, 
    updateEmployee, 
    deleteEmployee 
} = require('../controllers/employeeds.controller')

const employeedsRouter = express.Router()

employeedsRouter.get('/', getAllEmpoyeeds)

employeedsRouter.post('/', newEmployee)

employeedsRouter.patch('/:codigo', updateEmployee)

employeedsRouter.delete('/:codigo', deleteEmployee)

module.exports = { employeedsRouter }