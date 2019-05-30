import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const apiKey = 'afc7a0ada171a2a77126fd0d421b758c'

class Homepage extends Component {
  render() {
    return (
      <div>
        <header>Current Movies:</header>
        <p>movie 1 goes here</p>
        <p>Dante Was Here</p>
        <p>Dante Makes a lot of changes</p>
      </div>
    )
  }
}

export default Homepage
