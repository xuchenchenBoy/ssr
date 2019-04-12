import { createStore } from 'redux'
import rootReducers from './rootReducers'

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__
const INIT_STATE = preloadedState || {}
const store = createStore(rootReducers, INIT_STATE)

export default store;