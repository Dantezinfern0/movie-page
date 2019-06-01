import React, { Component } from 'react'
import Homepage from './pages/Homepage'
import Cast from './pages/Cast'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Axios from 'axios'

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
