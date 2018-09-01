/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react'
import logo from './logo.svg'
import './App.css'
import Toggle from './components/Toggle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              {on && <h1>whoa!!!</h1>}
              <button type="button" onClick={toggle}>
                Show/Hide
              </button>
            </Fragment>
          )}
        </Toggle>
      </div>
    )
  }
}

export default App
