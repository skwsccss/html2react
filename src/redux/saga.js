import { put, takeEvery, takeLatest, all } from 'redux-saga/effects';

import { FETCH_ROOMS, FETCH_ROOMS_FAILED, FETCH_ROOMS_SUCCESS, FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILED, FETCH_FRIEND, FETCH_FRIEND_SUCCESS, FETCH_FRIEND_FAILED, FETCH_ROOM_TABS, FETCH_ROOM_TABS_FAILED, FETCH_ROOM_TABS_SUCCESS } from '../actions/actionConstants';
import { Rooms } from '../api/roomsData';
import { Users } from '../api/users';
import { roomTabs } from '../api/roomTab';

function* fetchRooms() {
    try {
        let Room = yield Rooms;
        yield put({ type: FETCH_ROOMS_SUCCESS, payload: Room });

    } catch (error) {
        yield put({ type: FETCH_ROOMS_FAILED, message: error })
    }
}

function* fetchUsers() {
    try {
        let User = yield Users;
        yield put({ type: FETCH_USER_SUCCESS, payload: User })
    } catch (error) {
        yield put({ type: FETCH_USER_FAILED, message: error })
    }
}

function* fetchFriend() {
    try {
        let friend = yield Users;
        yield put({ type: FETCH_FRIEND_SUCCESS, payload: friend })
    } catch (error) {
        yield put({ type: FETCH_FRIEND_FAILED, message: error })
    }
}

function* fetchRoomTabs() {
    try {
        let roomTab = yield roomTabs
        yield put({ type: FETCH_ROOM_TABS_SUCCESS, payload: roomTab })
    } catch (error) {
        yield put({ type: FETCH_ROOM_TABS_FAILED, message: error })
    }
}

function* actionWatcher() {
    yield takeLatest(FETCH_ROOMS, fetchRooms);
    yield takeEvery(FETCH_USER, fetchUsers);
    yield takeEvery(FETCH_FRIEND, fetchFriend);
    yield takeEvery(FETCH_ROOM_TABS, fetchRoomTabs);
}


export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ])
}