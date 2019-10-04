import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN_ACTION = 'LOGIN_ACTION';
export const FETCHING_ACTION = 'FETCHING_ACTION';
export const SET_FRIEND_LIST_ACTION = 'SET_FRIEND_LIST_ACTION';

export const loginAction = credentials => dispatch => {
    dispatch({type: FETCHING_ACTION});

    axiosWithAuth().post('/login', credentials)
        .then(res => {
            console.log('RESULTS FROM LOGIN: ', res);
            localStorage.setItem('token', res.data.payload);
        })
        .catch(err => {
            console.log('ERROR FROM LOGIN', err);
        })

}