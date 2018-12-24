const initialState = {
    data: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA_SWAPI':
            return {
                ...state,
                data: action.payload.data,
            };

        default:
            return state;
    }
}