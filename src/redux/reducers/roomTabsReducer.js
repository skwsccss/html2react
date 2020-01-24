import * as types from '../../actions/actionConstants';

const INITIAL_STATE = {
    roomTabs: [],
    loading: false
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.FETCH_ROOM_TABS:
            return {
                ...state,
                loading: true,
            };
        case types.FETCH_ROOM_TABS_SUCCESS:
            return {
                ...state,
                loading: false,
                roomTabs: action.payload
            }
        case types.FETCH_ROOM_TABS_FAILED:
            return {
                ...state,
                ...action.message
            }
        default:
            return state;
    }
};