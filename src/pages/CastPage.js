import React, { Component } from 'react'
import Axios from 'axios'
import HomeButton from '../components/HomeButton.js'
import CastMember from '../components/CastMember.js'
// import { Link } from 'react-router-dom'

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
        <div className="movie-page-container">
          <h1>Cast</h1>
        </div>
        <div>
          <ul>
            {this.state.castList.map((char, i) => {
              return <CastMember key={i} char={char} />
            })}
          </ul>
        </div>
        <HomeButton />
      </div>
    )
  }
}

export default CastPage
