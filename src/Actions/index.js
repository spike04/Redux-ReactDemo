import { ADD_POST, DELETE_POST, FETCH_POST } from '../Utils/types'
import Axios from 'axios'

const apiUrl = 'http://localhost:4000/posts'

export const fetchAllPosts = () => {
  return dispatch => {
    return Axios.get(`${apiUrl}`)
      .then(response => {
        dispatch(fetchPosts(response.data))
      })
      .catch(err => {
        throw err
      })
  }
}

export const createPost = ({ title, body }) => {
  return dispatch => {
    return Axios.post(`${apiUrl}`, { title, body })
      .then(response => {
        dispatch(createPostSusccess(response.data))
      })
      .catch(err => {
        throw err
      })
  }
}

export const deletePost = id => {
  return dispatch => {
    return Axios.delete(`${apiUrl}/${id}`)
      .then(response => {
        dispatch(deletePostSuccess(response.data))
      })
      .catch(err => {
        throw err
      })
  }
}

export const fetchPosts = posts => ({
  type: FETCH_POST,
  posts
})

export const createPostSusccess = data => ({
  type: ADD_POST,
  payload: {
    _id: data._id,
    title: data.title,
    body: data.body
  }
})

export const deletePostSuccess = id => ({
  type: DELETE_POST,
  payload: {
    id
  }
})
