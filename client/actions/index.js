import {getTodos as apiGetTodos,getTodosByCompleted as apiGetTodosByCompleted, addTodo as apiAddTodo, getTodosByCategory as apiGetTodosByCategory, getUniqueCategories as apiGetUniqueCategories} from '../api/todos'
import {toggleCompleted as apiToggleCompleted} from '../api/todos'


export function getTodos() {
    return dispatch => {
        return apiGetTodos()
        .then(todos => {
         dispatch(saveTodos(todos))
      })
      .then(() => {
          dispatch(getUniqueCategories())
      })
    }
  }

export function saveTodos(todos){
    return {
        type: 'SAVE_TODOS',
        todos:todos,
    }
}

export function getUniqueCategories(){
  return dispatch => {
    return apiGetUniqueCategories()
    .then(categories => {
      dispatch(saveCategories(categories))
    })
  }
}

export function saveCategories(uniqueCategories){
  return {
      type: 'SAVE_CATEGORIES',
      uniqueCategories
  }
}

export function toggleCompleted(id,isCompleted,completeComponent){
  return dispatch => {
    return apiToggleCompleted(id,isCompleted)
    .then(() => {
      if(completeComponent){
        dispatch(getTodosByCompleted(!isCompleted))        
      } else {
        dispatch(getTodos())                
      }
    })
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

export function getTodosByCategory(category) {
  return dispatch => {
    return apiGetTodosByCategory(category)
    .then(todos => {
      dispatch(saveTodos(todos))
    })
  }
}


export function addTodo(todo) {
  return dispatch => {
    return apiAddTodo(todo)
    .then(() => {
      dispatch(getTodos())
    })
  };
}

export const showForm = show => {
  return {
    type: 'SHOW_FORM',
    showTodo: show
  }
}