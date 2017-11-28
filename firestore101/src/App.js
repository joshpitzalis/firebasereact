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

  handleSubmit = event => {
    event.preventDefault()
    db.doc('courses/online').set({ name: this.titleName.value })
    this.titleName.value = null
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

        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            ref={input => {
              this.titleName = input
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default App
