import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCHING_LOGIN_ACTION = 'FETCHING_LOGIN_ACTION';
export const SET_FRIEND_LIST_ACTION = 'SET_FRIEND_LIST_ACTION';
export const ADDING_FRIEND_LOADING_ACTION = 'ADDING_FRIEND_LOADING_ACTION';

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
            dispatch({type: SET_FRIEND_LIST_ACTION, payload: res.data});
        })
        .catch(err => {
            console.log('ERROR FROM GET FRIENDS: ', err);
        });
}

export const addFriendAction = friend => dispatch => {
    dispatch({type: ADDING_FRIEND_LOADING_ACTION});
    axiosWithAuth().post('/friends', friend)
        .then(res => {
            console.log('added friend');
        })
        .catch(err => {
            console.log('ERROR FROM ADDING FRIENDS: ', err);
        });
}

export const editFriendAction = friend => dispatch => {
    //dispatch({type: ADDING_FRIEND_LOADING_ACTION});
    axiosWithAuth().put(`/friends/${friend.id}`, friend)
        .then(res => {
            console.log('edited friend');
            //dispatch({type: SET_FRIEND_LIST_ACTION, payload: res.data});
        })
        .catch(err => {
            console.log('ERROR FROM ADDING FRIENDS: ', err);
        });
}