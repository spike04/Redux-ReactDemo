import { connect } from 'react-redux'
import React from 'react'

import { deletePost } from '../../Actions'
import Post from '../Post'

const PostList = ({ posts, onDeletePost }) => (
  <div>
    <h2>Post List</h2>
    <hr />
    {posts.map((post, i) => {
      return <Post key={post._id} post={post} onDeletePost={onDeletePost} />
    })}
  </div>
)

const mapStateToProps = state => ({
  posts: state.posts
})

const mapDispatchToProps = dispatch => ({
  onDeletePost: id => {
    dispatch(deletePost(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)
