import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const id = [
  420817,
  458156,
  299534,
  373571,
  447404,
  535581,
  531309,
  438650,
  412117,
  505600,
  449562,
  504608,
  502416,
  480414,
  456740,
  537915,
  157433,
  529983,
  527641,
  455957
]

class RandomButton extends Component {
  render() {
    return (
      <div className="random-button-container">
        <Link
          className="random-button-text"
          to={`/Movie/${id[Math.floor(Math.random() * 20)]}`}
        >
          To random movie...
        </Link>
      </div>
    )
  }
}

export default RandomButton
