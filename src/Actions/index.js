import uuidv4 from 'uuid/v4'
import { ADD_POST, DELETE_POST } from '../Utils/types'

export const createPost = ({ title, description }) => ({
  type: ADD_POST,
  payload: {
    id: uuidv4(),
    title,
    description
  }
})

export const deletePost = id => ({
  type: DELETE_POST,
  payload: {
    id
  }
})
