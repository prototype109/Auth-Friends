import { FETCHING_LOGIN_ACTION,
         SET_FRIEND_LIST_ACTION } from '../actions';

const initialState = {
    friendsList: [],
    isLoading: false
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_LOGIN_ACTION:
            return {
                ...state,
                isLoading: true
            }
        case SET_FRIEND_LIST_ACTION:
            return {
                ...state,
                friendsList: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
};

export default reducer;