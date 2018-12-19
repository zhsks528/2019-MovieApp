import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  //Render : componentWillmount() -> render() -> componentDidMount()

  //update : componentWillReceiveProps() -> shouldComponentUpdate() -> componetWillUpdate() -> render() -> componentDidUpdate()

  state = {
  }

  componentDidMount(){
    setTimeout(()=> {
      this.setState({
        movies : [
          {
            title: "Matrix",
            poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
          },
          {
            title: "Full Metal Jacket",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg",
          },
          {
            title: "OldBoy",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Oldboy_2013_film_poster.jpg/220px-Oldboy_2013_film_poster.jpg",
          },
          {
            title: "Star wars",
            poster: "https://media.comicbook.com/2018/06/star-wars-darth-vader-yoda-comicbookcom-1116397-1280x0.jpeg"
          }
        ]
      })
    }, 5000)
  }

  _renderMoives = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })

    return movies;

  //_ 쓰는이유 : React 함수와 내 함수를 구분하기 위해서..
  }
  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMoives() : "Loading"}
      </div>

    );
  }
}

export default App;
