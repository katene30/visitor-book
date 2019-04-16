import request from 'superagent'

export function getLogs(){
    return request.get('/api/v1/logs')
    .then(res => res.body)
}