import { FETCHING_ACTION } from '../actions';

const initialState = {
    friendsList: [],
    isFetching: false
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_ACTION:
            return {
                ...state,
                isFetching: true
            }
        default:
            return state;
    }
};

export default reducer;