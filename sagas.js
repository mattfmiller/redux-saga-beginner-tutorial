import { delay } from 'redux-saga'
import {put, takeEvery, all } from 'redux-saga/effects'

function* helloSaga() {
  console.log('Hello Sagas!')
}

function* incrementAsynch() {
  yield delay(1000)
  yield put({type: 'INCREMENT'})
}

function* watchIncrementAsynch() {
  yield takeEvery('INCREMENT_ASYNCH', incremmentAsynch)
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsynch()
  ])
}
