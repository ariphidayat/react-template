import * as actionTypes from '../actions/actionTypes'

export const peopleReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_PEOPLE:
      return [ ...state, ...action.payload ]

    default:
      return state
  }
}
