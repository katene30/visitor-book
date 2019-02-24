const path = require('path')
const express = require('express')
const server = express()

const todosRoutes = require('./routes/todos')

server.use(express.static(path.join(__dirname,'../public')))
server.use(express.json())

server.use('/api/v1/todos', todosRoutes)

module.exports = server