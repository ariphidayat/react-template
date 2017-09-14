import { combineReducers } from 'redux'
import peopleReducer from './people'

const rootReducers = combineReducers({
  people: peopleReducer
})

export default rootReducers
