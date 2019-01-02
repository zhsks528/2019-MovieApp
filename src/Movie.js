import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

// class Movie extends Component{
//     render(){
//         return(
//             <div>
//                 <MoviePoster poster={this.props.poster} />
//                 <h1>{this.props.title}</h1>
//             </div>    
//         )
//     }
// }

function Movie({title, poster, genres, synopsis}){
    return(
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre = {genre} key={index} />)}
                </div>
                <p className="Movie__Synopsis">
                    {synopsis}
                </p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    title : PropTypes.string.isRequird,
    poster : PropTypes.string.isRequird,
    genres : PropTypes.array.isRequired,
    synopsis : PropTypes.string.isRequired,
}
// class MoviePoster extends Component{
//     render(){
//         return(
//             <div>
//                 <img src={this.props.poster} />
//             </div>
//         )
//     }
// }

function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired,
}

function MovieGenre({genre}){
    return(
        <span className="Movie__Genre">{genre}</span>
    )
}

MovieGenre.propTypes = {
    genre : PropTypes.string.isRequired,
}

export default Movie;