import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../../Actions/index'

class NewPost extends Component {
  state = {
    title: '',
    body: ''
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addPost = e => {
    e.preventDefault()
    this.props.onAddPost(this.state)
    this.setState({ title: '', description: '' })
  }

  render() {
    return (
      <form onSubmit={this.addPost}>
        <h2>New Post</h2>
        <hr />
        <input
          type="text"
          name="title"
          className="form-control mb-2"
          placeholder="Enter Post Title"
          onChange={this.handleInput}
          value={this.state.title}
        />
        <textarea
          cols="19"
          rows="8"
          className="form-control"
          name="body"
          placeholder="Enter Post Description"
          onChange={this.handleInput}
          value={this.state.body}
        />
        <button className="btn btn-primary mt-2" onClick={this.addPost}>
          Add Post
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onAddPost: post => {
    dispatch(createPost(post))
  }
})

export default connect(
  null,
  mapDispatchToProps
)(NewPost)
