const connection = require('./connection')

module.exports = {
    getLogsByOwner,
    getLogs,
    createLog,
    signOut
}

function getLogs(testDb){
    const db = testDb || connection

    return db('logs')
}

function getLogsByOwner(owner, testDb){
    const db = testDb || connection

    return db('logs').where('owner', owner)
}

function createLog(log, testDb){
    const db = testDb || connection

    return db('logs').insert(log,['id'])
}

function signOut(log, testDb){
    const db = testDb || connection

    return db('logs').where('id',log.id).update('time_out',log.time_out)
}