const express = require('express')

//Router
const { employeedsRouter } = require('./routes/employeeds.routes')
const { departmentsRouter } = require('./routes/departments.routes')

const app = express()

//enable json
app.use(express.json())

//use Routers
app.use('/api/v1/employeeds', employeedsRouter)
app.use('/api/v1/departments', departmentsRouter)

module.exports = { app }