const {generatePasswordHash} = require('../auth/hash')

const connection = require('./connection')

function userExists (username, testDb) {
  const db = testDb || connection

  return db('users')
    .where('username', username)
    .then(users => users.length > 0)
}

function getUserByUsername (username, testDb) {
  const db = testDb || connection

  return db('users')
    .where('username', username)
    .first()
}

function getAllUsers(testDb) {
  const db = testDb || connection
  return db('users')
}

module.exports = {
  userExists,
  getUserByUsername,
  getAllUsers
}