import React, { Component } from 'react'
import './App.css'
import Axios from 'axios'
import Loading from './component/Loading'

class App extends Component {
  state = {
    posts: []
  }

  componentWillMount() {
    Axios.get('http://jsonplaceholder.typicode.com/posts').then(res =>
      this.setState({
        posts: res.data
      })
    )
  }

  displayLoadingOrData = () => {
    if (this.state.posts.length > 0) {
      return (
        <ul className="list-group">
          {this.state.posts.map((post, i) => (
            <li key={i} className="list-group-item">
              <span className="text-muted">
                Id: {post.id} - UserId: {post.userId}
              </span>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )
    } else {
      return <Loading />
    }
  }

  render() {
    return (
      <div className="container mt-4" style={{ height: '100vh' }}>
        <h2>React Axios Demo</h2>
        <hr />
        {this.displayLoadingOrData()}
      </div>
    )
  }
}

export default App
