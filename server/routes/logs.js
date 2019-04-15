const express = require('express')
const router = express.Router()
const db = require('../db/logs')

// GET /api/v1/logs returns all logs
router.get('/logs', (req,res) => {
    db.getLogs()
    .then(logs => {
        res.json(logs)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: 'Something went wrong'})
    })
})

// POST /api/v1/log Adds log to db
router.post('/log', (req,res) => {
    db.createLog(log)
    .then(([id]) => {
        res.json({id})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: 'Something went wrong'})
    })
})

// POST /api/v1/log/:id Updates log with sign out timestamp
router.post('/log/:id', (req,res) => {
    const log = req.body
    console.log(log)
    db.signOut(log)
    .then((num) => {
        res.json(num)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: 'Something went wrong'})
    })
})

module.exports = router