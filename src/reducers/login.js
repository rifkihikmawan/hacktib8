const initialState = {
    username: '',
    password: '',
    nama: 'rifki',
    data: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password,
            };

        case 'CHANGE_USERNAME':
            return {
                ...state,
                username: action.payload.username
            };

        // case 'CHANGE_SWAPI2':
        //     return {
        //         ...state,
        //         data: action.payload.data
        //     };

        default:
            return state;
    }
}