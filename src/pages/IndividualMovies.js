import React, { Component } from 'react'
import HomeButton from '../components/HomeButton.js'

class IndividualMovies extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.moOb.title}</h1>
        <h3>{this.props.moOb.overview}</h3>
        <h3>Rating/Vote Score: {this.props.moOb.vote_average}</h3>
        <HomeButton />
      </div>
    )
  }
}

export default IndividualMovies
