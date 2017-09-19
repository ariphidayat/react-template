import { combineReducers } from 'redux'
import { peoplesReducer, peopleReducer }  from './peopleReducers'

export default combineReducers({
  peoples: peoplesReducer,
  people: peopleReducer
})
