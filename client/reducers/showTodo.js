const initialState = false

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_FORM':
        return action.showTodo
        default:
        return state
    }
}

export default reducer