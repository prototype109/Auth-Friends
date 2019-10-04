import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCHING_LOGIN_ACTION = 'FETCHING_LOGIN_ACTION';
export const SET_FRIEND_LIST_ACTION = 'SET_FRIEND_LIST_ACTION';

export function loginAction(credentials){
    return async function(dispatch){
        dispatch({type: FETCHING_LOGIN_ACTION});
    
        await axiosWithAuth().post('/login', credentials)
            .then(res => {
                console.log('RESULTS FROM LOGIN: ', res);
                localStorage.setItem('token', res.data.payload);
            })
            .catch(err => {
                console.log('ERROR FROM LOGIN', err);
            });
    }

}

export const getFriendsAction = () => dispatch => {
    axiosWithAuth().get('/friends')
        .then(res => {
            //console.log('RESULTS FROM GET FRIENDS: ', res);
            dispatch({type: SET_FRIEND_LIST_ACTION, payload: res.data});
        })
        .catch(err => {
            console.log('ERROR FROM GET FRIENDS: ', err);
        });
}