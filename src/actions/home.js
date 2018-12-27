import axios from 'axios';

const getListData = () => {
    return (dispatch) => {
        axios
            .get("https://swapi.co/api/people/")
            .then(response => {
                dispatch(getData(response.data.results));
            })
            .catch(err => {

            })
    }
}

const getData = (data) => {
    return {
        type: 'GET_DATA_SWAPI',
        payload: {
            data: data,
        }
    }
}

const logout = () => {
    localStorage.removeItem('username');
    return {
        type: 'REMOVE_USERNAME',
        payload: {
            username: '',
        }
    }
}

export {
    logout,
    getListData,
}