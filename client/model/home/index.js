import * as reducer from './reducer'
import { combineReducers  } from 'redux'
import saga from './saga'

export default {
  name: 'home',
  reducer: combineReducers({ ...reducer }),
  saga
}