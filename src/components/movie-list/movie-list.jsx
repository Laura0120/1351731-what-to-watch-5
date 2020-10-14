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
    return (
      <div className='catalog__movies-list'>
        {movies.map((movie) => {
          return (<MovieCard onMovieClick={onMovieClick} movie={movie} onMouseOver={() => {
            this.setState(() => ({currentMovie: movie.id}));
          }} key={movie.id}/>);
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
