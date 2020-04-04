import React, { Component } from 'react'
// import Moment from 'react-moment'
import { Link } from 'react-router-dom'

const imagePreUrl = 'https://image.tmdb.org/t/p/'
const imageSize = ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original']

class IndividualMovies extends Component {
  render() {
    return (
      <div className="movie-container">
        <h1 className="centered-text">{this.props.moOb.title}</h1>
        <Link key={this.props.moOb.id} to={`/Movie/${this.props.moOb.id}`}>
          <img
            className="home-poster"
            src={`${imagePreUrl}${imageSize[1]}${this.props.moOb.poster_path}`}
            alt={`poster for the movie ${this.props.moOb.title}`}
          />
        </Link>
        {/* <img src="http://image.tmdb.org/t/p/w500/wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg" /> working url path to test */}
        <h3 className="summary-info">{this.props.moOb.overview}</h3>
        <h6>
          <Link to={`/Cast/${this.props.moOb.id}`} className="movie-link">
            Meet the cast of {this.props.moOb.title}!
          </Link>
        </h6>
        <h4 className="right-justify">
          Rating/Vote Score: {this.props.moOb.vote_average}
        </h4>
        <h5 className="right-justify">
          Released:{this.props.moOb.release_date}
          {/* <Moment format="MMM Do, YYYY">{this.props.moOb.release_date}</Moment> */}
        </h5>
      </div>
    )
  }
}

export default IndividualMovies
