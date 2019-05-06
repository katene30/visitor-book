const express = require('express')
const db = require('../db/users')
const token = require('../auth/token')

const router = express.Router()

// POST /api/v1/auth/register
router.post('/register', register, token.issue)

function register (req, res, next) {
  const {username, password} = req.body
  db.createUser({username, password})
    .then(([id]) => {
      // Be sure to grab the id out of the array Knex returns it in!
      // You can use array destructuring (as above) if you like.
      res.locals.userId = id
      next()
    })
    .catch(({message}) => {
      // Fairly blunt error checking.
      if (message.includes('UNIQUE constraint failed: users.username')) {
        return res.status(400).json({
          ok: false,
          message: 'Username already exists.'
        })
      }
      res.status(500).json({
        ok: false,
        message: "Something bad happened. We don't know why."
      })
    })
}


module.exports = router