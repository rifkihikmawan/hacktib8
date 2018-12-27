const initialState = {
    username: '',
    password: '',
    isError: false,
    data: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                username: action.payload.username,
            };

        case 'REMOVE_USERNAME':
            return {
                ...state,
                username: action.payload.username,
            }

        case 'SET_ERROR':
            return {
                ...state,
                isError: action.payload.isError,
            }

        default:
            return state;
    }
}