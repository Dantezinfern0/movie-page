import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return <HelloWorld />
  }
}

export default App
