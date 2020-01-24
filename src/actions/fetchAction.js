import * as types from './actionConstants';

export const fetchRoom = () => ({
    type: types.FETCH_ROOMS
})

export const fetchUsers = () => ({
    type: types.FETCH_USER
})

export const fetchFriend = () => ({
    type: types.FETCH_FRIEND
})

export const fetchRoomTabs = () => ({
    type: types.FETCH_ROOM_TABS
})