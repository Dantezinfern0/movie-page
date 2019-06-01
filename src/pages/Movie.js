import React, { Component } from 'react'
import HomeButton from '../components/HomeButton.js'

class Movie extends Component {
  render() {
    return (
      <div>
        <h1>Title of the movie</h1>
        <h3>Description of the movie</h3>
        <h3>time showing, poster, etc</h3>
        <HomeButton />
      </div>
    )
  }
}

export default Movie
