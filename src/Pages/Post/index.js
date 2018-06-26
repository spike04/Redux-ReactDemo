import React from 'react'

const styles = {
  borderBottom: '2px solid #eee',
  background: '#f5f5f5',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
}

const Post = ({ post: { title, body, _id }, onDeletePost }) => (
  <div style={styles}>
    <h2>{title}</h2>
    <p>{body}</p>
    <button className="btn btn-danger" onClick={() => onDeletePost(_id)}>
      Remove
    </button>
  </div>
)

export default Post
