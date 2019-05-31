import React, { Component } from 'react'
import Homepage from './pages/Homepage'
<<<<<<< HEAD
=======
import Cast from './pages/Cast'
import Axios from 'axios'
>>>>>>> d16239760823a0034a6d496de215a6429db090c5
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
