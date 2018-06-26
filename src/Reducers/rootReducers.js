import { combineReducers, createStore, applyMiddleware } from 'redux'
import posts from './postReducers'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducers = combineReducers({
  posts
})

const middlewares = applyMiddleware(thunk, logger)

export default createStore(rootReducers, composeWithDevTools(middlewares))
