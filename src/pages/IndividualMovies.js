import React, { Component } from 'react'
import HomeButton from '../components/HomeButton.js'

class IndividualMovies extends Component {
  render() {
    return (
      <div>
        {/* <h1>{this.props.movieAll.title}</h1>
        <h3>{this.props.movieAll.overview}</h3>
        <h3>Rating/Vote Score: {this.props.movieAll.vote_average}</h3> */}
        <HomeButton />
      </div>
    )
  }
}

export default IndividualMovies
