import React, { Component } from 'react'

class IndividualMovies extends Component {
  render() {
    return (
      <div>
        <h1 className="centered-text">{this.props.moOb.title}</h1>
        <h3 className="centered-text">{this.props.moOb.overview}</h3>
        <h4>Rating/Vote Score: {this.props.moOb.vote_average}</h4>
        <h5>Released: {this.props.moOb.release_date}</h5>
      </div>
    )
  }
}

export default IndividualMovies
