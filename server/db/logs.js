const connection = require('./connection')

module.exports = {
    getLogs,
    createLog,
    signOut
}

function getLogs(testDb){
    const db = testDb || connection

    return db('logs')
}

function createLog(log, testDb){
    const db = testDb || connection

    return db('logs').insert(log)
}

function signOut(log, testDb){
    const db = testDb || connection

    return db('logs').where('id',log.id).update('time_out',log.time_out)
}