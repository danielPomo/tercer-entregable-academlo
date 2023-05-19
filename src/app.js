const express = require('express')
const cors = require("cors")
const db = require('./utils/database')
const initModels = require('./models/initModels')
initModels()
require('dotenv').config()
const usersRoutes = require('./routes/users.routes')
const todosRoutes = require('./routes/todos.routes')


const PORT = process.env.PORT || 8000

const app = express()

db.authenticate()
    .then( () => console.log("La base de datos se ha conectado de manera exitosa") )
    .catch( (err) => console.log(err) )

db.sync({alter: true})
    .then(() => console.log("tablas creadas con exito"))
    .catch((err) => console.log(err))

app.use(cors())
app.use(express.json())
app.use(usersRoutes)
app.use(todosRoutes)

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando desde el puerto ${PORT}`)
})


