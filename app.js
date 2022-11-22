//? dependencia de express
const express = require('express')

//? Initial configs

const port = 9000
const app = express()
//?Habilitar recibir formato JSON
app.use(express.json())