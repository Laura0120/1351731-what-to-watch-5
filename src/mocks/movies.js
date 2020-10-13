import moment from 'moment';

import {POSTERS, VIDEO, MOVIE_TITLES, DESCRIPTIONS, YEAR_OF_RELEASE, RATING_SCORE, RATING_DESCRIPTION, COUNT_VOTES_RATING, DURATION, GENRE, DIRECTOR, ACTOR} from './const';

const MOVIE_COUNT = 8;

let id = Date.now();

const generateId = () => {
  id += 1;
  return String(id);
};

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.round(lower + Math.random() * (upper - lower));
};

const generateRandomLengthString = (array, maxValue, separator) => {
  const stringLength = getRandomInteger(1, maxValue);
  const string =
    new Array(stringLength)
      .fill()
      .map(() => array[getRandomInteger(0, array.length - 1)])
      .join(separator) + `.`;
  return string;
};

const generateMovie = () => {
  return {
    id: generateId(),
    poster: POSTERS[getRandomInteger(0, POSTERS.length - 1)],
    video: VIDEO[getRandomInteger(0, VIDEO.length - 1)],
    title: MOVIE_TITLES[getRandomInteger(0, MOVIE_TITLES.length - 1)],
    rating: {ratingScore: RATING_SCORE[getRandomInteger(0, RATING_SCORE.length - 1)],
      ratingDescription: RATING_DESCRIPTION[getRandomInteger(0, RATING_DESCRIPTION.length - 1)],
      countVotesRating: COUNT_VOTES_RATING[getRandomInteger(0, COUNT_VOTES_RATING.length - 1)]},
    director: DIRECTOR[getRandomInteger(0, DIRECTOR.length - 1)],
    starring: generateRandomLengthString(ACTOR, 3, `, `),
    year: YEAR_OF_RELEASE[getRandomInteger(0, YEAR_OF_RELEASE.length - 1)],
    runtime: moment
      .utc()
      .startOf(`day`)
      .add({minutes: DURATION[getRandomInteger(0, DURATION.length - 1)]}),
    genre: GENRE[getRandomInteger(0, GENRE.length - 1)],
    description: generateRandomLengthString(DESCRIPTIONS, 5, `. `),
    isWatchlist: Boolean(getRandomInteger(0, 1)),
  };
};

export const movies = new Array(MOVIE_COUNT).fill().map(generateMovie);
