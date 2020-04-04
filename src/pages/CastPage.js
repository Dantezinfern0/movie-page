import React, { Component } from 'react'
import Axios from 'axios'
import HomeButton from '../components/HomeButton.js'
import CastMember from '../components/CastMember.js'

const startUrl = 'https://api.themoviedb.org/3/movie/'
const midUrl = '/credits?api_key='
const apiKey = 'afc7a0ada171a2a77126fd0d421b758c'

class CastPage extends Component {
  state = {
    castList: []
  }
  componentDidMount() {
    const movieId = this.props.match.params.id
    Axios.get(`${startUrl}${movieId}${midUrl}${apiKey}`).then(resp => {
      console.log({ resp })
      this.setState({
        castList: resp.data.cast
      })
      console.log(this.state.castList)
    })
  }
  render() {
    return (
      <div className="background-scroll">
          <h1 className="center-text color-ivory">
            Cast
          </h1>
        <div className="center-text">
          <ul className="movie-page-container">
            {this.state.castList.map((char, i) => {
              return <CastMember key={i} char={char} />
            })}
          </ul>
        <HomeButton/>
        </div>
      </div>
    )
  }
}

export default CastPage