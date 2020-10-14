import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';
import {movies} from './mocks/movies';

const MovieInfo = {
  MOVIE_TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE_YEAR: 2014,
};

ReactDom.render(
    <App movieTitle={MovieInfo.MOVIE_TITLE} genre={MovieInfo.GENRE} releaseYear={MovieInfo.RELEASE_YEAR} movies={movies} />,
    document.querySelector(`#root`));
