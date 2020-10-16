import React, {PureComponent} from 'react';

import PROP_TYPES from '../../prop-type';
import MovieCard from '../movie-card/movie-card';

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: null,
    };
  }

  render() {
    const {onMovieClick, movies} = this.props;
    const {currentMovie} = this.state;

    return (
      <div className='catalog__movies-list'>
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              isPlaying={movie.id === currentMovie}
              onMovieClick={onMovieClick}
              onMouseOver={() => {
                this.setState(() => ({currentMovie: movie.id}));
              }}
              onMouseOut={()=> {
                this.setState(() => ({currentMovie: null}));
              }} />);
        })}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PROP_TYPES.movies,
  onMovieClick: PROP_TYPES.onMovieClick,
};

export default MovieList;
