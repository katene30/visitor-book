import {combineReducers} from 'redux'

import todos from './todos'
import showTodo from './showTodo'
import categories from './categories'

const reducers = combineReducers({
    todos,
    showTodo,
    categories
})

export default reducers