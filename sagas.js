import { delay } from 'redux-saga'
import {put, takeEvery } from 'redux-saga/effects'

export function* helloSaga() {
  console.log('Hello Sagas!')
}

export function* incrementAsynch() {
  yeild delay(1000)
  yeild put({type: 'INCREMENT'})
}

export function* watchIncrementAsynch() {
  yeild takeEvery('INCREMENT_ASYNCH', incremmentAsynch)
}
