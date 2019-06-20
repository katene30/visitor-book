const connection = require('./connection')
const {DateTime} = require('luxon')


module.exports = {
    getLogsByOwner,
    getLogs,
    createLog,
    signOut,
    timeOut
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

function timeOut(testDb){
    let now = DateTime.local().toISO()

    const db = testDb || connection
    return db('logs').whereNull('time_out')
    .then(logs => {
        logs.forEach(log => {
            return db('logs').update('time_out',now).where('id',log.id)
        });
    })
    .catch(error => console.log(error))
}
