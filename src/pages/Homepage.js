import React, { Component } from 'react'
import Axios from 'axios'
import IndividualMovies from '../components/IndividualMovies.jsx'
import RandomButton from '../components/RandomButton.jsx'
import TopButton from '../components/TopButton.jsx'


const apiKey = 'afc7a0ada171a2a77126fd0d421b758c'
const apiUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key='
const apiUrlEnd = '&language=en-US&page=1'

class Homepage extends Component {
  state = {
    movieList: []
  }
  componentDidMount() {
    Axios.get(`${apiUrl}${apiKey}${apiUrlEnd}`).then(resp => {
      this.setState({
        movieList: resp.data.results
      })
      console.log(this.state.movieList)
    })
  }
  render() {
    return (
      <div className="homepage-background">
        <div>
          <header className="nav">
            <h1>The Best Movie Site Ever</h1>
            <RandomButton />
          </header>
        </div>
        {/* link to movie page will be accessed by 
        clicking on the movie poster */}
        <ul>
          {this.state.movieList.map((mOb, i) => {
            return <IndividualMovies key={i} moOb={mOb} />
          })}
        </ul>
        <TopButton />
      </div>
    )
  }
}

export default Homepage
