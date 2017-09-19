import axios from 'axios'
import * as actionTypes from './actionTypes'

export const fetchPeople = () => {
  return dispatch => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        dispatch({
          type: actionTypes.FETCH_PEOPLE,
          peoples: response.data
        })
      })
      .catch(error => {
        throw(error)
      })
  }
}

export const fetchPeopleById = peopleId => {
  return dispatch => {
    return axios.get('https://jsonplaceholder.typicode.com/users/' + peopleId)
      .then(response => {
        dispatch({
          type: actionTypes.FETCH_PEOPLE_BY_ID,
          people: response.data
        })
      })
      .catch(error => {
        throw(error)
      })
  }
}
