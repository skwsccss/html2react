import * as types from '../../actions/actionConstants';

const INITIAL_STATE = {
    friends: [],
    loading: false
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.FETCH_FRIEND:
            return {
                ...state,
                loading: true,
            };
        case types.FETCH_FRIEND_SUCCESS:
            return {
                ...state,
                loading: false,
                friends: action.payload
            }
        case types.FETCH_FRIEND_FAILED:
            return {
                ...state,
                ...action.message
            }
        default:
            return state;
    }
};