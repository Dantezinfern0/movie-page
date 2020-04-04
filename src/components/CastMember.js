import React, { Component } from 'react'

const imagePreUrl = 'https://image.tmdb.org/t/p/'
const imageSize = ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original']

class CastMember extends Component {
  render() {
    return (
      <div>
        <div className="actor-container">
          <img
            className="cast-photo"
            src={`${imagePreUrl}${imageSize[1]}${this.props.char.profile_path}`}
            alt={`cast member ${this.props.char.name}`}
          />
          <p className="actor-info">
            {this.props.char.name} as "{this.props.char.character}"
          </p>
        </div>
        <hr />
      </div>
    )
  }
}

export default CastMember
