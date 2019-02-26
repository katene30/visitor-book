import {getTodos as apiGetTodos} from '../api/todos'
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

// export function toggleCompleted(id,isCompleted){
//   return {
//     type: 'TOGGLE_COMPLETED',
//     todo:{
//       id,
//       isCompleted
//     }

//   }
// }

export function toggleCompleted(id,isCompleted){
  return dispatch => {
    return apiToggleCompleted(id,isCompleted)
  }
}