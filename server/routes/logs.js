const express = require('express')
const router = express.Router()
const db = require('../db/todos')

// GET /api/v1/

router.get('/', (req,res) => {
    db.getTodos()
    .then(todos => {
        res.json(todos)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: 'Something went wrong'})
    })
})

module.exports = router