import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HomeButton extends Component {
  render() {
    return (
      <div>
        <Link className="home-button" to="/">
          <button>
            Back To Home Page
          </button>
        </Link>
      </div>
    )
  }
}

export default HomeButton
