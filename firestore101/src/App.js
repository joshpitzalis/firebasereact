import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { db } from './firebase'

class App extends Component {
  state = {
    title: 'Welcome to React'
  }
  componentDidMount() {
    db
      .doc('courses/online')
      .get()
      .then(doc => this.setState({ title: doc.data().name }))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.title}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
