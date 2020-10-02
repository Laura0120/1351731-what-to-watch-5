import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen';

const App = (props) => {
  const {movieTitle, genre, releaseYear} = props;

  return <MainScreen movieTitle={movieTitle} genre={genre} releaseYear={releaseYear} />;
};

App.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
};

export default App;
