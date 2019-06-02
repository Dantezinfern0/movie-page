import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class RandomButton extends Component {
  render() {
    return (
      <div className="random-button-container">
        <Link
          className="random-button-text"
          // to={`/Movie/${
          //   this.props.state.movieList[
          //     Math.floor(Math.random() * this.props.state.movieList.length)
          //   ]
          // }`}
          to="/Movie/420817"
        >
          To random movie...
        </Link>
      </div>
    )
  }
}

export default RandomButton
