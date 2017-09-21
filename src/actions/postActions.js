import axios from 'axios'
import * as actionTypes from './actionTypes'

export const fetchPost = () => {
  return dispatch => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        dispatch({
          type: actionTypes.FETCH_POST,
          payload: response.data
        })
      })
      .catch(error => {
        throw(error)
      })
  }
}

export const createPost = (post) => {
  return (dispatch) => {
    return axios.post('https://jsonplaceholder.typicode.com/posts', post)
      .then(response => {
        dispatch({
          type: actionTypes.CREATE_POST,
          payload: response.data
        })
      })
      .catch(error => {
        throw(error);
      });
  };
};
