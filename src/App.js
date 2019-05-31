import React, { Component } from 'react'
import Homepage from './pages/Homepage'
import Cast from './pages/Cast'
import Axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/cast" exact component={Cast} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
