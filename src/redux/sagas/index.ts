import {take, takeEvery, takeLatest, takeLeading, select} from '@redux-saga/core/effects';
import {INCREASE_COUNT, DECREASE_COUNT, GET_LATEST_NEWS} from "../constants";
import {getLatestNews} from '../../api';

// const delay = (time: number) => new Promise((resolve, reject) => {
//     setTimeout(resolve, time * 1000);
// })

// all activities for async code and business logic: requests, browser api
export function* workerSaga(): any{
    // const count = yield select(({counter}) => counter.count);
    // yield delay(2);
    // console.log(`request: ${count}`);
    const data = yield getLatestNews();
    console.log('data', data)
}
// tracking the action, witch is triggered in app
export function* watchClickSaga(){
    // yield take(INCREASE_COUNT);
    // console.log('HELLO, 1!')
    // yield take(DECREASE_COUNT);
    // console.log('HELLO, 2!')
    // yield takeEvery(INCREASE_COUNT, workerSaga);
    // yield takeLatest(INCREASE_COUNT, workerSaga);
    // yield takeLeading(INCREASE_COUNT, workerSaga);
    yield takeEvery(GET_LATEST_NEWS, workerSaga);
}

export default function* rootSaga(){
    yield watchClickSaga();
}