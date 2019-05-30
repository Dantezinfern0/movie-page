import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

const apiKey = 'afc7a0ada171a2a77126fd0d421b758c'
const apiUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key='
const apiUrlEnd = '&language=en-US&page=1'

class Homepage extends Component {
  componentDidMount() {
    Axios.get(`${apiUrl}${apiKey}${apiUrlEnd}`).then(function(response) {
      console.log(response)
    })
  }
  render() {
    return (
      <div className="homepage-background">
        <header>Current Movies:</header>
        <p>movie 1 goes here</p>
        <p>Dante Was Here</p>
        <p>Dante Makes a lot of changes</p>
      </div>
    )
  }
}

export default Homepage
