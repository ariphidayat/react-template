import { createStore, compose, applyMiddleware } from  'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

export default function configureStore() {
  const middlewares = [
    thunk
  ]

  return createStore(rootReducer, compose(
    applyMiddleware(...middlewares)
  ))
}
