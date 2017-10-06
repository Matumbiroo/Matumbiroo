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
            let recents = response.data.items;
            // console.log('response.data.items', response.data.items[0].track.album.images[1].url);
            // let imageUrl1 = response.data.items[0].track.album.images[1].url;
            dispatch(setRecentlyPlayed(recents))
        }).catch((error) => {
            console.error(error);
        })
    }
}
export function getCurrentSong(accessToken, id) {
    return dispatch => {
        dispatch(clearGifs());
        return axios.get(`https://api.spotify.com/v1/tracks/${id}`, {headers: {"Authorization": `Bearer ${accessToken}`}}).then((response)=> {
            let currentSong = response.data;
            let artist = currentSong.artists[0].name;
            let song = currentSong.name;
            console.log('response.data', response.data);
            axios.get(`http://api.giphy.com/v1/gifs/search?q=${artist}&api_key=pvXAxC0LmMyuslSuN1KEXVbHskcFITbw&limit=10`,
                {headers: {"Accept": "image/*"}}
            )
                .then((response) => {
                    currentSong.gifs = response.data.data;
                    axios.get(`http://api.giphy.com/v1/gifs/search?q=${song}&api_key=pvXAxC0LmMyuslSuN1KEXVbHskcFITbw&limit=10`,
                        {headers: {"Accept": "image/*"}}
                    )
                        .then((response) => {
                            currentSong.gifs = [...currentSong.gifs, ...response.data.data];
                            dispatch(setCurrentSong(currentSong))
                        })
                        .catch((error)=> {
                            console.log(error);
                        });
                })
                .catch((error)=> {
                    console.log(error);
                });
        }).catch((error) => {
            console.error(error);
        })
    }
}

export function getCurrentSongAudio(accessToken, id) {
    return dispatch => {
        return axios.get(`https://api.spotify.com/v1/audio-features/${id}`,{headers: {"Authorization": `Bearer ${accessToken}`}}).then((response)=> {
            let currentSongAudio = response.data;
            dispatch(setCurrentSongAudio(currentSongAudio))
        }).catch((error) => {
            console.error(error);
        })
    }
}



export function getAudioFeatures(accessToken) {
    return dispatch => {
        return axios.get(`https://api.spotify.com/v1/me/player/recently-played?limit=50`,{headers: {"Authorization": `Bearer ${accessToken}`}}).then((response)=> {
            let recents = response.data.items;
            let reducedIds = recents.map((song, index)=> {
                    return song.track.id;
                });
            reducedIds = reducedIds.join(',');
            axios.get(`https://api.spotify.com/v1/audio-features?ids=${reducedIds}`,{headers: {"Authorization": `Bearer ${accessToken}`}}).then((response)=> {

                let audioFeatures = response.data.audio_features;
                dispatch(setAudioFeatures(audioFeatures))
            })
                .catch((err)=> {
                console.error(err);
                })
        }).catch((error)=> {
            console.error(error);
        })
    }
}


export function setCurrentSongAudio(currentSongAudio) {
    return {
        type: "SET_CURRENT_SONG_AUDIO",
        currentSongAudio
    }
}

export function setCurrentSong(currentSong) {

    return {
        type: "SET_CURRENT_SONG",
        currentSong
    }
}

export function setAudioFeatures(audioFeatures) {
    return {
        type: "SET_AUDIO_FEATURES",
        audioFeatures
    }
}

export function setRecentlyPlayed(recent, imageUrl1, imageUrl2) {
    return {
        type: "SET_RECENTLY_PLAYED",
        recent,
        imageUrl1,
        imageUrl2,
    }
}

function clearGifs() {
    return {
        type: "CLEAR_GIFS",
    }
}

//-------------------------------------------------------------------------------------------------------

//MATUMBIROO AUTHORIZATION

const axiosUser = axios.create();

axiosUser.interceptors.request.use((config) => {
    let token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config
}, (err) => {
    return Promise.reject(err);
})

const authUrl = "http://localhost:8000/auth/";
const profileUrl = "http://localhost:8000/profile/";

export function authenticate(isValid, user){
    return {
        type: "AUTHENTICATE",
        isValid,
        user
    }
}

export function authError(err){
    return {
        type: "AUTH_ERROR",
        err
    }
}

export function verifyToken(){
    return (dispatch) => {
        axiosUser.get(profileUrl + "verify")
            .then((response) => {
                let user = response.data.user;
                let isValid = response.data.success;
                dispatch(authenticate(isValid, user));
            })
            .catch((err) => {
                console.error(err);
                dispatch(authError({verify: "Invalid token"}));
            })
    }
}

export function signup(credentials) {
    return (dispatch) => {
        axiosUser.post(authUrl + "signup", credentials)
            .then((response) => {
                console.log(response.data);
                let token = response.data.token
                localStorage.setItem("token", token);
                //takes user info and authorization status and dispatches it
                let user = response.data.user,
                    isValid = response.data.success;
                dispatch(authenticate(isValid, user));
            })
            .catch((err) => {
                console.error(err);
                dispatch(authError({signup: "Invalid username or password."}))
            })
    }
}

export function login(credentials) {
    return (dispatch) => {
        axiosUser.post(authUrl + "login", credentials)
            .then((response) => {
                console.log(response.data);
                //set token in storage
                //define user and valid
                //dispatch authenticate as valid user
                let token = response.data.token
                localStorage.setItem("token", token);
                //takes user info and authorization status and dispatches it
                let user = response.data.user,
                    isValid = response.data.success;
                dispatch(authenticate(isValid, user));
            })
            .catch((err) => {
                console.error(err);
                dispatch(authError({login: "Invalid username or password."}))
            })
    }
}

export function logout(){
    return (dispatch) => {
        localStorage.removeItem("token");
        dispatch({type: "LOGOUT"});
    }
}

//DATA
const dataUrl = "http://localhost:8080/dolphin";

// export function loadData(){
//     return (dispatch) => {
//         axios.get(url).then((response) => {
//             let users = response.data.data;
//             dispatch(setData(users))
//         })
//         .catch((err) => {
//             console.error(err);
//         })
//     }
// }

// export function setData(users){
//     return {
//         type: "SET_DATA",
//         users
//     }
// }

// export function deleteData(id){
//     return (dispatch) => {
//         axios.delete(url + id).then((response) => {
//             dispatch(loadData())
//         })
//         .catch((err) => {
//             console.error(err);
//         }) 
//     }
// }

// export function editData(editedUser, id) {
//     return (dispatch) => {
//         axios.put(url + id, editedUser).then((response) => {
//             dispatch(loadData())
//         })
//         .catch((err) => {
//             console.error(err);
//         })
//     }
// }

// export function postData(user, editedUser){
//     return (dispatch) => {
//         axios.post(url, editedUser).then((response) => {
//             dispatch(loadData())
//         })
//         .catch((err) => {
//             console.error(err);
//         })
//     }
// }