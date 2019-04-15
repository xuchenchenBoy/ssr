import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'

const configureStore = (rootReducers, initState) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducers, initState, applyMiddleware(sagaMiddleware))
  return {
    ...store,
    runSaga: sagaMiddleware.run,
    close: () => store.dispatch(END)
  }
}

export default configureStore;