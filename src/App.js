import React, { Component } from 'react';
import './App.css';

import Movie from './Movie';

class App extends Component {
  render() {

    const movieTitles = [
      "Matrix",
      "Full Metal Jacket",
      "Oldboy",
      "Star wars",
    ]
    const movieImage = [
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg",
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Oldboy_2013_film_poster.jpg/220px-Oldboy_2013_film_poster.jpg",
      "https://media.comicbook.com/2018/06/star-wars-darth-vader-yoda-comicbookcom-1116397-1280x0.jpeg",
    ]
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImage[0]}/>
        <Movie title={movieTitles[1]} poster={movieImage[1]}/>
        <Movie title={movieTitles[2]} poster={movieImage[2]}/>
        <Movie title={movieTitles[3]} poster={movieImage[3]}/>
      </div>

    );
  }
}

export default App;
