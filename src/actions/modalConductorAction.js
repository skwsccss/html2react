import * as types from './actionConstants';


export const OpenModal = (modalName) => ({
    type: types.OPEN_MODAL,
    modalName
})

export const HideModal = () => ({
    type: types.HIDE_MODAL
})