const { app } = require('./app')

//models
const { Departments } = require('./models/departments.model')
const { Employeeds } = require('./models/employeeds.model')

//utils
const { db } = require('./utils/dataBase.util')

db.authenticate()
    .then( () => console.log('DataBase authenticated'))
    .catch( error => console.log(error))

//1 departamento <---> M Empleados
Departments.hasMany(Employeeds, { foreignKey: 'codigo_departamento' })
Employeeds.belongsTo(Departments)

db.sync()
    .then(() => console.log('DataBase synced'))
    .catch(error => console.log(error))

app.listen(1234, () => {
    console.log('Express app Running on port 1234');
})