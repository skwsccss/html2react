import * as types from '../../actions/actionConstants';

const INITIAL_STATE = {
    rooms: [],
    room: {},
    loading: false
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.FETCH_ROOMS:
            return {
                ...state,
                loading: true,
            };
        case types.FETCH_ROOMS_SUCCESS:
            return {
                ...state,
                loading: false,
                rooms: action.payload
            }
        case types.FETCH_ROOMS_FAILED:
            return {
                ...state,
                ...action.message
            }
        default:
            return state;
    }
};