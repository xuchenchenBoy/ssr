import home from '../model/home'
import { all, fork, } from 'redux-saga/effects'

export default function* () {
  yield all([
    fork(home.saga)
  ])
}
