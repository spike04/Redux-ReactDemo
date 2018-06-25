import React from 'react'

const Post = ({ post: { title, description, id }, onDeletePost }) => (
  <div className="card p-4">
    <h2>{title}</h2>
    <p>{description}</p>
    <button className="btn btn-danger" onClick={() => onDeletePost(id)}>
      DELETE
    </button>
  </div>
)

export default Post
