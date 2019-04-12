import { combineReducers } from 'redux'
import home from '../model/home'

const rootReducers = combineReducers({
  home: home.reducer,
})

export default rootReducers;