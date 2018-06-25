import { ADD_POST, DELETE_POST } from '../Utils/types'

export default function postReducer(state = [], action) {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload]
    case DELETE_POST:
      console.log(action.payload.id)
      console.log(state)
      return state.filter(post => post.id !== action.payload.id)
    default:
      return state
  }
}
