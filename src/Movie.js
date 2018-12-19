import React, { component } from 'react';
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

function Movie({title, poster}){
    return(
        <div>
            <MoviePoster poster={poster} />
            <h1>{title}</h1>
        </div>
    )
}

Movie.propTypes = {
    title : PropTypes.string.isRequird,
    poster : PropTypes.string.isRequird,
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

function MoviePoster({poster}){
    return (
        <img src={poster} alt= "Movie Poster"/>
    )
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
}

export default Movie;