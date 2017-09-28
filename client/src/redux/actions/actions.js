import axios from 'axios';

const url = 'http://localhost:8000/users/';

export function loadData(){
    return (dispatch) => {
        axios.get(url).then((response) => {
            let users = response.data.data;
            dispatch(setData(users))
        })
        .catch((err) => {
            console.error(err);
        })
    }
}

export function setData(users){
    return {
        type: "SET_DATA",
        users
    }
}

export function deleteData(id){
    return (dispatch) => {
        axios.delete(url + id).then((response) => {
            dispatch(loadData())
        })
        .catch((err) => {
            console.error(err);
        }) 
    }
}

export function editData(editedUser, id) {
    return (dispatch) => {
        axios.put(url + id, editedUser).then((response) => {
            dispatch(loadData())
        })
        .catch((err) => {
            console.error(err);
        })
    }
}

export function postData(user){
    console.log(user)
    return (dispatch) => {
        axios.post(url, editedUser).then((response) => {
            dispatch(loadData())
        })
        .catch((err) => {
            console.error(err);
        })
    }
}