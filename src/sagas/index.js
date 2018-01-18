import { put, call, take, fork, cancel, cancelled } from 'redux-saga/effects';
import loginSaga from './loginSaga'

export default function * rootSaga (){
    yield [
        fork(loginSaga),
    ]
}