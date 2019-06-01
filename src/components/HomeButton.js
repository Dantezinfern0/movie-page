import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HomeButton extends Component {
  render() {
    return (
      <div>
        <Link className="home-button" to="/">
          Home Page
        </Link>
      </div>
    )
  }
}

export default HomeButton
