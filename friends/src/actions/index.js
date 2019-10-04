import axiosWithAuth from '../utils/axiosWithAuth';

export const LOGIN_ACTION = 'LOGIN_ACTION';
export const FETCHING_ACTION = 'FETCHING_ACTION';

export const loginAction = credentials => dispatch => {
    dispatch({type: FETCHING_ACTION});

    axiosWithAuth().post('/login', credentials)
        .then(res => {
            console.log('RESULTS FROM LOGIN: ', res);
        })
        .catch(err => {
            console.log('ERROR FROM LOGIN', err);
        })

}