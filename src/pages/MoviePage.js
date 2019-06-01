import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import HomeButton from '../components/HomeButton.js'

const startUrl = 'https://api.themoviedb.org/3/movie/'
const midUrl = '/credits?api_key='
const apiKey = 'afc7a0ada171a2a77126fd0d421b758c'

class MoviePage extends Component {
  componentDidMount() {
    const movieId = this.props.match.params.id
    Axios.get(`${startUrl}${movieId}${midUrl}${apiKey}`).then(resp => {
      console.log({ resp })
      this.setState({
        movie: resp.data
      })
    })
  }
  render() {
    return (
      <div>
        <h1>Movie Title</h1>
        <i>Movie Picture</i>
        <p>movie description</p>
        <p>movie rating</p>
        <p>cast list</p>
        <HomeButton />
      </div>
    )
  }
}

export default MoviePage
