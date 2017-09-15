import { combineReducers } from 'redux'
import { peopleReducer }  from './peopleReducers'

export default combineReducers({
  people: peopleReducer
})
