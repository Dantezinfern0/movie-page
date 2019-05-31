import React, { Component } from 'react'
import Axios from 'axios'

// const apiKey = 'afc7a0ada171a2a77126fd0d421b758c'

class Cast extends Component {
  componentDidMount() {
    Axios.get(
      'https://api.themoviedb.org/3/movie/420817/credits?api_key=afc7a0ada171a2a77126fd0d421b758c'
    ).then(function(response) {
      console.log(response)
    })
  }

  render() {
    return (
      <div>
        <h2>Cast goes here. (with pictures hopefully)</h2>
      </div>
    )
  }
}

export default Cast
