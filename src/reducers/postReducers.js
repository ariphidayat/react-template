import * as actionTypes from '../actions/actionTypes'

export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_POST:
      return action.payload
    default:
      return state
  }
}
