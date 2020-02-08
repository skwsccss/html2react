import * as types from '../../actions/actionConstants';

const INITIAL_STATE = {
    modalName: 'NOTICE'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.OPENED_MODAL:
            console.log(action.payload)
            return {
                ...state,
                modalName: action.payload
            }
        case types.HIDED_MODAL:
            return {
                ...state,
                modalName: null
            }
        default:
            return state;
    }
};