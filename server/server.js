const path = require('path')
const express = require('express')
const server = express()

const logsRoutes = require('./routes/logs')

server.use(express.static(path.join(__dirname,'../public')))
server.use(express.json())

server.use('/api/v1', logsRoutes)

module.exports = server