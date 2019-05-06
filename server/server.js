const path = require('path')
const express = require('express')
const server = express()

const usersRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const logsRoutes = require('./routes/logs')

server.use(express.static(path.join(__dirname,'../public')))
server.use(express.json())

server.use('/api/v1', logsRoutes)
server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/auth', authRoutes)
module.exports = server