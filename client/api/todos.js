import request from 'superagent'


export function getTodos(){
    return request.get('/api/v1/todos')
    .then(res => res.body)
}

export function toggleCompleted(id,isComplete){
    return request.post(`/api/v1/todos/complete/${id}/${isComplete}`)
    .then(res => res.body)
}

export function getTodosByCompleted(isCompleted){
    return request.get(`/api/v1/todos/complete/${isCompleted}`)
    .then(res => res.body)
}

export function addTodo(todo) {
    return request
      .post("./api/v1/todos")
      .send(todo)
      .then(res => res.body);
  }

export function getUniqueCategories(){
    return request.get('/api/v1/todos/category')
    .then(res => res.body)
}

export function getTodosByCategory(category){
    return request.get(`/api/v1/todos/category/${category}`)
    .then(res => res.body)
}