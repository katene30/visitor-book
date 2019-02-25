const express = require('express')
const router = express.Router()
const db = require('../db/todos')

// GET /api/v1/todos

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



router.get('/priority/:priority', (req,res) => {
    // priority eg. 5
    var priority = req.params.priority

    db.getTodosByPriority(priority)
    .then(todos => {
        res.json(todos)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: 'Something went wrong'})
    })
})

router.get('/category/:category', (req,res) => {
    // category eg. home
    var category = req.params.category

    db.getTodosByCategory(category)
    .then(todos => {
        res.json(todos)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: 'Something went wrong'})
    })
})

router.get('/complete/:is_complete', (req,res) => {
    // is-complete eg. true/false
    var isComplete = null

    if (req.params.is_complete == 'true'){
        isComplete = true
    } else {
        isComplete = false
    }
    db.getTodosByCompleted(isComplete)
    .then(todos => {
        res.json(todos)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: 'Something went wrong'})
    })
})

module.exports = router