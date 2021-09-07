import React, { Component } from 'react'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import axios from 'axios'
import './App.css'

class App extends Component {
  state = {
    users: [],
    loading: false,
  }

  async componentDidMount() {
    const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID
    const clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET

    this.setState({ loading: true })
    const res = await axios.get(
      `http://api.github.com/users?cliet_id=${clientId}&client_secret=${clientSecret}`
    )
    this.setState({ users: res.data, loading: false })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    )
  }
}

export default App
