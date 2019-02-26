const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_TODOS':
        return action.todos
        // case 'TOGGLE_COMPLETED':
        // return action.todo
        default:
        return state
    }
}

export default reducer