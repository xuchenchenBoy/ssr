import * as types from './types'

const INIT_STATE = {
  page: 'home'
}

export const homeInfo = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.HOME_INFO_REQ:
      return { ...state, status: 'reqIng', status: 0 };
    case types.HOME_INFO_SUC:
      return { ...state, status: 'reqSuc', status: action.payload };
    case types.HOME_INFO_FAIL:
    return { ...state, status: 'reqFail', status: 2 };
    default:
      return state;
  }
}