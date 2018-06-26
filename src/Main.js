import './App.css'

import React, { Component } from 'react'

import PostList from './Pages/PostList'
import NewPost from './Pages/NewPost'

class Main extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-5">
            <NewPost />
          </div>
          <div className="col-sm-6 offset-sm-1">
            <PostList />
          </div>
        </div>
      </div>
    )
  }
}

export default Main
