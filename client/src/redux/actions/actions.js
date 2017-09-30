import Spotify from 'spotify-web-api-js';
import axios from 'axios';
const spotifyApi = new Spotify();

const url = 'http://localhost:8000/users/';

export const SPOTIFY_TOKENS = 'SPOTIFY_TOKENS';
export const SPOTIFY_ME_BEGIN = 'SPOTIFY_ME_BEGIN';
export const SPOTIFY_ME_SUCCESS = 'SPOTIFY_ME_SUCCESS';
export const SPOTIFY_ME_FAILURE = 'SPOTIFY_ME_FAILURE';

export const RECENT_FIFTY = 'RECENT_FIFTY';

export function setTokens({accessToken, refreshToken}) {
    if (accessToken) {
        spotifyApi.setAccessToken(accessToken);
    }

    return { type: SPOTIFY_TOKENS, accessToken, refreshToken };
}

export function getMyInfo() {
    return dispatch => {
        dispatch({ type: SPOTIFY_ME_BEGIN});
        spotifyApi.getMe().then(data => {
            dispatch({ type: SPOTIFY_ME_SUCCESS, data: data });
        }).catch(e => {
            dispatch({ type: SPOTIFY_ME_FAILURE, error: e });
        });
    };
}

export function getRecentFifty(accessToken) {
    return dispatch => {
        return axios.get(`https://api.spotify.com/v1/me/player/recently-played?limit=50`, {headers: {"Authorization": `Bearer ${accessToken}`}}).then((response)=> {
            console.log(response.data);
            let recents = response.data.items;
            dispatch(setRecentlyPlayed(recents))
        }).catch((error) => {
            throw error;
        })
    }
}

export function setRecentlyPlayed(recent) {
    return {
        type: "SET_RECENTLY_PLAYED",
        recent
    }
}

//-------------------------------------------------------------------------------------------------------

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

export function postData(user, editedUser){
    return (dispatch) => {
        axios.post(url, editedUser).then((response) => {
            dispatch(loadData())
        })
        .catch((err) => {
            console.error(err);
        })
    }
}