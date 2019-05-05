import * as types from './types'
import { fork, take, put, call, takeEvery, } from 'redux-saga/effects'
import { getReq } from '../../utils/request'

// 提供给 server 端初始化数据
export function getInfo(store) {
  return new Promise(function(resolve) {
    getReq({
      url: 'http://rap2api.taobao.org/app/mock/10621/integral/user/statRankName'
    })
      .then(res => {
        store.dispatch({ 
          type: types.HOME_INFO_SUC, 
          payload: res.data.status 
        })
        resolve()
      })
  })
}

export default function* () {

}