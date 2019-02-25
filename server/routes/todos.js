const express = require('express')
const router = express.Router()

// GET /api/v1/todos
router.get('/', (req,res) => {
    res.json([
        {
            task: "buy a hammer",
            priority: 3,
            category: "home",
            is_complete: false,
            due_at: 27022019
        }
    ])
})



router.get('/priority/:priority', (req,res) => {
    // priority eg. 5
})

router.get('/category/:category', (req,res) => {
    // category eg. home
})

router.get('/complete/:is-complete', (req,res) => {
    // is-complete eg. true/false
})

module.exports = router