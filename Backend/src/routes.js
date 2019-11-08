const express =require('express')
const SessionController = require('./controllers/SessionController')
const routes = express.Router()

routes.post('/Sessions', SessionController.store) 

module.exports =routes 