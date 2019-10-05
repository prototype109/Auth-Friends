import { FETCHING_LOGIN_ACTION,
         SET_FRIEND_LIST_ACTION,
         ADDING_FRIEND_LOADING_ACTION 
        } from '../actions';

const initialState = {
    friendsList: [],
    isLoading: false,
    isAddingLoad: false
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_LOGIN_ACTION:
            return {
                ...state,
                isLoading: true
            }
        case ADDING_FRIEND_LOADING_ACTION:
            return {
                ...state,
                isAddingLoad: true
            }
        case SET_FRIEND_LIST_ACTION:
            return {
                ...state,
                friendsList: action.payload,
                isLoading: false,
                isAddingLoad: false
            }
        default:
            return state;
    }
};

export default reducer;