import { FETCH_PEOPLE } from '../actions/types'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PEOPLE:
      return [ ...state, ...action.payload ]
  }

  return state
}
