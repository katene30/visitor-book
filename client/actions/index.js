import {getTodos as apiGetTodos,getTodosByCompleted as apiGetTodosByCompleted} from '../api/todos'
import {toggleCompleted as apiToggleCompleted} from '../api/todos'


export function getTodos() {
    return dispatch => {
        return apiGetTodos()
        .then(todos => {
         dispatch(saveTodos(todos))
      })
    }
  }

export function saveTodos(todos){
    return {
        type: 'SAVE_TODOS',
        todos:todos,
    }
}

export function toggleCompleted(id,isCompleted){
  return dispatch => {
    return apiToggleCompleted(id,isCompleted)
  }
}

export function getTodosByCompleted(isCompleted) {
  return dispatch => {
      return apiGetTodosByCompleted(isCompleted)
      .then(todos => {
       dispatch(saveTodos(todos))
    })
  }
}