import * as types from './types'

const INIT_STATE = {
  page: 'home'
}

export const homeInfo = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.HOME_INFO_REQ:
      return state;
    case types.HOME_INFO_SUC:
      return state;
    case types.HOME_INFO_FAIL:
      return state;
    default:
      return state;
  }
}