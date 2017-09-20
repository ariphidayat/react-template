import { combineReducers } from 'redux'
import { peoplesReducer, peopleReducer }  from './peopleReducers'
import { postsReducer }  from './postReducers'

export default combineReducers({
  peoples: peoplesReducer,
  people: peopleReducer,
  posts: postsReducer
})
