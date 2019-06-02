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
        <h2>I am not sure if we need another fetch or if we can tie into the data that we already fetched somehow but I'm a little lost so Individual going to go back to the P in PEDAC</h2>
        {/* <IndividualMovies moOb={this.state.MovieList} /> */}
        <HomeButton />
      </div>
    )
  }
}

export default SingleMovie
