const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_TODOS':
        return action.todos
        default:
        return state
    }
}

export default reducer