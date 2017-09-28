let initialState = {
    users: []
};

let mainReducer = function(state = initialState, action) {
    switch (action.type) {
        case "SET_DATA":
            return {
                users: action.users,
            }
        default:
            return {
                ...state,
            }
    }
}

export default mainReducer;