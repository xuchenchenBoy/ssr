import * as types from './types'
import { fork, take } from 'redux-saga/effects'

function* getInfo() {
  while (1) {
    yield take(types.HOME_INFO_REQ)
  }
}

export default function* () {
  yield fork(getInfo)
}