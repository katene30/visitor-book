const express = require('express')
const db = require('../db/logs')
const verifyJwt = require('express-jwt')
const {DateTime} = require('luxon')
const router = express.Router()

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

// GET /api/v1/logs/:owner returns logs based off location

router.get('/logs/:owner', (req,res) => {
    db.getLogsByOwner(req.params.owner)
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
    
    let today = DateTime.local().toISO()
    const log = {
        service: req.body.service,
        name: req.body.name,
        reference: req.body.reference,
        time_in: today,
        owner: req.body.owner
    }

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
    let today = DateTime.local().toISO()

    const log = {
        id:req.params.id,
        time_out: today
    }
    
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