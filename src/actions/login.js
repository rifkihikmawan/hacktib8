import axios from 'axios';

const ubahLogin = (username, password) => {
    localStorage.setItem('username', username);
    return {
        type: 'LOGIN',
        payload: {
            username: username,
            password: password,
        }
    }
}

const ubahUsername = (username) => {
    localStorage.setItem('username', username);
    return {
        type: 'CHANGE_USERNAME',
        payload: {
            username: username
        }
    }
}

export {
    ubahLogin,
    ubahUsername,
}