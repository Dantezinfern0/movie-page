import React, { Component } from 'react'

class CastMember extends Component {
  render() {
    return (
      <div className="actor-info">
        <p>actor image here</p>
        <p>
          {this.props.char.name} as {this.props.char.character}
        </p>
      </div>
    )
  }
}

export default CastMember
