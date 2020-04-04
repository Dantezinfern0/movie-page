import React, { Component } from 'react'
import Homepage from './pages/Homepage'
import SingleMovie from './pages/SingleMovie'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CastPage from './pages/CastPage.js'
// import Axios from 'axios'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/Movie/:id" exact component={SingleMovie} />
            <Route path="/cast/:id" exact component={CastPage} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
