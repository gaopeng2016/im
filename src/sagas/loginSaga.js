import { put, call, take, fork, cancel, cancelled } from 'redux-saga/effects';
import { takeEvery, delay, END } from 'redux-saga';
import { LOGIN } from "../constants/ActionTypes"
import Http from '../util/Http'

function * watchLoginRequest() {

    while (true) {
        const { payload } = yield take(LOGIN.DOING);

        try {
            const userName = payload.get('userName');
            const password = payload.get('password');
            const res =  yield Http.request(`${Http.HOST}/api/login`, {method:'POST', body:{userName, password}});
            const json = yield res.json();
            if(json && json.code === 0){
                yield put({type:LOGIN.DONE})
            } else {
                const newPayload = payload.set('error', json.message);
                yield put({type:LOGIN.ERROR, payload: newPayload})
            }
        } catch (e) {
            const newPayload = payload.set('error', e.message);
            yield put({type:LOGIN.ERROR, payload: newPayload})
        }

    }
}

export default function * watchLogin(){
    yield fork(watchLoginRequest);
}