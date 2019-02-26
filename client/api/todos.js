import request from 'superagent'


export function getTodos(){
    return request.get('/api/v1/todos')
    .then(res => res.body)
}

export function toggleCompleted(id,isComplete){
    return request.post(`/api/v1/todos/complete/${id}/${isComplete}`)
    .then(res => res.body)
}