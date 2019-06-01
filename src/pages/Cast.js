import React, { Component } from 'react'
import Axios from 'axios'
import HomeButton from '../components/HomeButton.js'

const apiKey = 'afc7a0ada171a2a77126fd0d421b758c'

class Cast extends Component {
  componentDidMount() {
    Axios.get(
      `https://api.themoviedb.org/3/movie/420817/credits?api_key=${apiKey}`
    ).then(function(response) {
      console.log(response)
    })
  }

  render() {
    return (
      <div>
        <h2>Cast goes here. (with pictures hopefully)</h2>
        <HomeButton/>
      </div>
    )
  }
}

export default Cast
