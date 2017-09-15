import axios from 'axios'
import * as actionTypes from './actionTypes'

export const fetchPeople = () => {
  return dispatch => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        dispatch({ type: actionTypes.FETCH_PEOPLE, payload: response.data })
      })
      .catch(error => {
        throw(error)
      })
  }
}
