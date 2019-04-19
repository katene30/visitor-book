import request from 'superagent'

export function getLogs(){
    return request.get('/api/v1/logs')
    .then(res => res.body)
}

export function signOut(id){
    return request.post(`api/v1/log/${id}`)
    .then(res => res.body)
}

export function addLog(log){
    return request.post('api/v1/log')
    .send(log)
    .then(res => res.body)
}