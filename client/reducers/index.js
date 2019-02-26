import {combineReducers} from 'redux'

import todos from './todos'
import showTodo from './showTodo'

const reducers = combineReducers({
    todos,
    showTodo
})

export default reducers