import React, { Component } from 'react'
import Axios from 'axios'
import HomeButton from '../components/HomeButton.js'
import IndividualMovies from '../components/IndividualMovies.jsx'

const apiKey = 'afc7a0ada171a2a77126fd0d421b758c'
const apiUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key='
const apiUrlEnd = '&language=en-US&page=1'

class SingleMovie extends Component {
  state = {
    movieInfo: []
  }
  componentDidMount() {
    Axios.get(`${apiUrl}${apiKey}${apiUrlEnd}`).then(resp => {
      this.setState({
        movieInfo: resp.data.results
      })
      console.log(this.state.movieInfo)
    })
  }

  render() {
    return (
      <div>
        <h1>This Is the Individual Movie Page</h1>
        <h2>
          we need to figure out how fetch or set the state of movieInfo to align
          with the movie Id number that the user clicked on on the home page
        </h2>
        <IndividualMovies moOb={this.state.movieInfo} />
        <HomeButton />
      </div>
    )
  }
}

export default SingleMovie
