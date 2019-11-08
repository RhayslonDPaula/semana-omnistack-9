const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://Omnistack:vRwRqBpKQn9BoztO@rhaysloncluster-hgq8f.mongodb.net/semana09?retryWrites=true&w=majority',{
   useNewUrlParser: true,
   useUnifiedTopology: true,
})
//Omnistack 
//vRwRqBpKQn9BoztO
//GET, POST, PUT,DELETE
// req.query = acessar query params (para filtros)
//req.params = acessar route params (para ediçao, delete)
//req.body = acessar corpo da requisiçao (para criaçao, ediçao )
app.use(express.json())
app.use(routes)

app.listen(3333)