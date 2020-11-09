import React from 'react';
import {connect} from "react-redux";

import {FUNCTION, MOVIES} from '../../prop-type';
import {getMoviesSimilar} from '../../store/selectors';
import MovieListWrapped from '../movie-list/movie-list';
import {fetchMovieById, fetchCommentsByMovieId} from "../../store/api-actions";

const MoreLikeThis = (props) => {
  const {movies, onMovieClick} = props;

  return (
    <section className='catalog catalog--like-this'>
      <h2 className='catalog__title'>More like this</h2>
      <div className='catalog__movies-list'>
        <MovieListWrapped movies={movies} onMovieClick={onMovieClick}/>
      </div>
    </section>
  );
};


MoreLikeThis.propTypes = {
  movies: MOVIES,
  onMovieClick: FUNCTION
};

const mapStateToProps = (state) => ({
  movies: getMoviesSimilar(state),
});

const mapDispatchToProps = (dispatch) => ({
  onMovieClick(id) {
    dispatch(fetchMovieById(id));
    dispatch(fetchCommentsByMovieId(id));
  }
});
export {MoreLikeThis};
export default connect(mapStateToProps, mapDispatchToProps)(MoreLikeThis);
