import React, { Component } from 'react'
import Axios from 'axios'
import HomeButton from '../components/HomeButton.js'
import IndividualMovies from '../components/IndividualMovies.jsx'

const apiKey = '?api_key=afc7a0ada171a2a77126fd0d421b758c'
const apiUrl = 'https://api.themoviedb.org/3/movie/'
const apiUrlEnd = '&language=en-US&page=1'

class SingleMovie extends Component {
  state = {
    movieInfo: []
  }
  componentDidMount() {
    // line below is supposed to match the movie ID
    // to the api call so that the info is available here
    // similar to how we did it for the cast page
    //  the only difference is that we are not doing a .map
    const movieId = this.props.match.params.id
    Axios.get(`${apiUrl}${movieId}${apiKey}${apiUrlEnd}`).then(resp => {
      this.setState({
        movieInfo: resp
      })
    })
  }

  render() {
    return (
      <div>
        <h1>This Is the Individual Movie Page</h1>
        <h2>
          {this.state.movieInfo.original_title}
          {/* <a href={this.state.movieInfo.homepage}>Movie Homepage</a> */}
        </h2>
        {/* <IndividualMovies moOb={this.state.movieInfo} /> */}
        <HomeButton />
      </div>
    )
  }
}

export default SingleMovie
