import axios from 'axios';

function setError(param) {
    return {
        type: 'SET_ERROR',
        payload: {
            isError: param,
        }
    }
}

function setLogin(username) {
    localStorage.setItem('username', username);
    return {
        type: 'LOGIN',
        payload: {
            username: username,
        }
    }
}

const login = (username, password) => {
    return (dispatch) => {
        if (username == '' || password == '') {
            dispatch(setError(true));
        } else {
            dispatch(setError(false));
            dispatch(setLogin(username));
        }
    }
}

export {
    login,
}