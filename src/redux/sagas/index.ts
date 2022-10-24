import {take, takeEvery, takeLatest, takeLeading, select, put, call} from '@redux-saga/core/effects';
import {INCREASE_COUNT, DECREASE_COUNT, GET_LATEST_NEWS, SET_LATEST_NEWS} from "../constants";
import {getLatestNews} from '../../api';
import {setLatestNews} from "../actions/actionCreator";

// const delay = (time: number) => new Promise((resolve, reject) => {
//     setTimeout(resolve, time * 1000);
// })

// all activities for async code and business logic: requests, browser api
// export function* workerSaga(): any{
export function* handleLatestNews(): any{
    // const count = yield select(({counter}) => counter.count);
    // yield delay(2);
    // console.log(`request: ${count}`);
    // const data = yield getLatestNews();
    // console.log('data', data)
    // const {hits} = yield getLatestNews();
    const {hits} = yield call(getLatestNews, 'react');
    yield put(setLatestNews(hits));
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
    yield takeEvery(GET_LATEST_NEWS, handleLatestNews);
}

export default function* rootSaga(){
    yield watchClickSaga();
}