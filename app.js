//? Dependencies
const express = require('express')

//? File imports
const userRoutersV1 = require('./src/users/users.router')


//? Initial Config
const port = 9000
const app = express()

//? Json request available
app.use(express.json())

//? Para verificar que todo esta bien
app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok'})
})

//? Rutas de usuarios
app.use('/api/v1', userRoutersV1)


//? Cualquier ruta que no este definida 
app.use((req, res) => {
    console.log(req.path)
    res.status(404).json({message:"Not found"})
})


//? start server
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
