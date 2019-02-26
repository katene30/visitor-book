const connection = require('./connection')

module.exports = {
    getTodos,
    createTodo,
    getTodosByCategory,
    getTodosByCompleted,
    getTodosByPriority,
    completeTodo
}

function getTodos(testDb){
    const db = testDb || connection

    return db('todos')
}

function createTodo(todo, testDb){
    const db = testDb || connection

    return db('todos').insert(todo)
}

function getTodosByPriority(priority, testDb){
    const db = testDb || connection

    return db('todos').where('priority', priority).select()
}

function getTodosByCategory(category, testDb){
    const db = testDb || connection

    return db('todos').where('category', category).select()
}

function getTodosByCompleted(is_complete, testDb){
    const db = testDb || connection

    return db('todos').where('is_complete', is_complete).select()
}

function completeTodo(id,completed, testDb){
    const db = testDb || connection

    return db('todos').where('id',id).update('is_complete',completed)
}