//? Dependencies
const express = require('express')

//? File imports
const userRoutersV1 = require('./users/users.router')


//? Initial Config
const port = 9000
const app = express()

//? Json request available
app.use(express.json())

//? To prove the server
app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok'})
})

//? Version one user routes
app.use('/api/v1', userRoutersV1)


//? Any route not defined
app.use((req, res) => {
    console.log(req.path)
    res.status(404).json({message:"Not found"})
})


//? start server
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})

