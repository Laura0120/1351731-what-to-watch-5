import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';
import {generateMovies} from './mocks/movies';

const MOVIE_COUNT = 8;

ReactDom.render(
    <App movies={generateMovies(MOVIE_COUNT)} />,
    document.querySelector(`#root`));
