import React, { Component } from 'react'
// imagePreUrl includes the hard coded size of w500
const imagePreUrl = 'https://image.tmdb.org/t/p/'
const imageSize = 'w500/'

class IndividualMovies extends Component {
  render() {
    return (
      <div>
        <h1 className="centered-text">{this.props.moOb.title}</h1>
        {/* image is not working */}
        <img src={`${imagePreUrl}${imageSize}${this.props.moOb.poster_url}`} />
        <h3 className="centered-text">{this.props.moOb.overview}</h3>
        <h4 className="right-justify">Rating/Vote Score: {this.props.moOb.vote_average}</h4>
        <h5 className="right-justify">Released: {this.props.moOb.release_date}</h5>
      </div>
    )
  }
}

export default IndividualMovies
