import * as actionTypes from '../actions/actionTypes'

export const peoplesReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_PEOPLE:
      return action.payload
    default:
      return state
  }
}

export const peopleReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_PEOPLE_BY_ID:
      return action.payload
    default:
      return state
  }
}
