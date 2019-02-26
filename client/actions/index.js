import {getTodos as apiGetTodos,getTodosByCompleted as apiGetTodosByCompleted, addTodo as apiAddTodo} from '../api/todos'
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

export function addTodo(todo) {
  return dispatch => {
    return apiAddTodo(todo)
  };
}

export const showForm = show => {
  console.log(show)
  return {
    type: 'SHOW_FORM',
    showTodo: show
  }
}