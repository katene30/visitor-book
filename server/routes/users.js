const express = require('express')
const db = require('../db/users')
const router = express.Router()

router.use(express.json())

// GET /api/meetings
router.get('/', (req,res)=>{
  db.getAllUsers() 
  .then(users => {
    res.json(users)
  })
})

module.exports = router