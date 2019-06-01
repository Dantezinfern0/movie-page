import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import Movie from './Movie.js'

const apiKey = 'afc7a0ada171a2a77126fd0d421b758c'
const apiUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key='
const apiUrlEnd = '&language=en-US&page=1'

class Homepage extends Component {
  componentDidMount() {
    // Axios.get(`${apiUrl}${apiKey}${apiUrlEnd}`).then(function(response) {
    //   console.log(response)
    // })
    Axios.get(`${apiUrl}${apiKey}${apiUrlEnd}`).then(resp => {
      this.setState({
        movieList: resp.data.results
      })
    })
  }
  render() {
    return (
      <div className="homepage-background">
        <div>
          <header className="nav">
            <div>Home</div>
          </header>
        </div>
        <ul>
          {this.state.movieList.map((movie, index) => {
            return <Movie key={index} movie={movie} />
          })}
        </ul>
        <button>
          link to movie page will be accessed by clicking on the movie
        </button>
        <Link to="/cast"> Aladdin cast</Link>
      </div>
    )
  }
}

export default Homepage
