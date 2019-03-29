const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_CATEGORIES':
        return action.uniqueCategories
        default:
        return state
    }
}

export default reducer