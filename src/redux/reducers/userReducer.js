import * as types from '../../actions/actionConstants';

const INITIAL_STATE = {
    users: [],
    loading: false
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.FETCH_USER:
            return {
                ...state,
                loading: true,
            };
        case types.FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case types.FETCH_USER_FAILED:
            return {
                ...state,
                ...action.message
            }
        default:
            return state;
    }
};