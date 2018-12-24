import axios from 'axios';

const getListData = () => {
    return (dispatch) => {
        axios
            .get("https://swapi.co/api/people/")
            .then(response => {
                console.log("masuk pak eko", response);
                // let data = response.data.results;
                // let names = data.map(datum => datum.name); //array of names
                // let newUserName = names[1];
                dispatch(getData(response.data.results));
            })
            .catch(err => {
                // dispatch(ubahUserNameFailed(err.message));
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

export {
    getListData,
}