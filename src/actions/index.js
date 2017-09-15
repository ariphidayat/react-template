import { FETCH_PEOPLE } from './types'
import axios from 'axios'

export function fetchPeople() {
  return function(dispatch) {
    return axios.get('https://jsonplaceholder.typicode.com/users')
      .then(function(response) {
        dispatch({ type: FETCH_PEOPLE, payload: response.data })
      })
      .catch(function(error) {
        throw(error)
      })
  }
}
