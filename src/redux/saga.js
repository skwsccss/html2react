import { put, takeEvery, takeLatest, all } from 'redux-saga/effects';

import { FETCH_ROOMS, FETCH_ROOMS_FAILED, FETCH_ROOMS_SUCCESS, FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from '../actions/actionConstants';
import { Rooms } from '../api/roomsData';
import { Users } from '../api/users';

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
function* actionWatcher() {
    yield takeLatest(FETCH_ROOMS, fetchRooms);
    yield takeEvery(FETCH_USER, fetchUsers);
}


export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ])
}