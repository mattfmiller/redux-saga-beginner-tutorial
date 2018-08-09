import { delay } from 'redux-saga'
import {put, takeEvery, all } from 'redux-saga/effects'

function* helloSaga() {
  console.log('Hello Sagas!')
}

function* incrementAsynch() {
  yeild delay(1000)
  yeild put({type: 'INCREMENT'})
}

function* watchIncrementAsynch() {
  yeild takeEvery('INCREMENT_ASYNCH', incremmentAsynch)
}

export default function* rootSaga() {
  yeild all([
    helloSaga(),
    watchIncrementAsynch()
  ])
}
