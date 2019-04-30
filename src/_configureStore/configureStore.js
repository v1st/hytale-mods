import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import loggerMiddleware from './middleware/logger'
import rootReducer from '../_reducers'

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware]

  const store = createStore(rootReducer, preloadedState, composeWithDevTools(
    applyMiddleware(...middlewares),
  ));

  return store
}
