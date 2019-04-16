import {combineReducers} from 'redux'

import todos from './todos'
import showTodo from './showTodo'
import categories from './categories'
import logs from './logs'

const reducers = combineReducers({
    logs
})

export default reducers