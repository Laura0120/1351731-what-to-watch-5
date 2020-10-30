import {getRandomInteger} from "../utils/common";

import {POSTERS, MOVIE_TITLES, DESCRIPTIONS, YEAR_OF_RELEASE, RATING_SCORE, RATING_DESCRIPTION, COUNT_VOTES_RATING, DURATION, GENRE, DIRECTOR, ACTOR} from './const';

let id = Date.now();

const generateId = () => {
  id += 1;
  return (id);
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
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    title: MOVIE_TITLES[getRandomInteger(0, MOVIE_TITLES.length - 1)],
    rating: {ratingScore: RATING_SCORE[getRandomInteger(0, RATING_SCORE.length - 1)],
      ratingDescription: RATING_DESCRIPTION[getRandomInteger(0, RATING_DESCRIPTION.length - 1)],
      countVotesRating: COUNT_VOTES_RATING[getRandomInteger(0, COUNT_VOTES_RATING.length - 1)]},
    director: DIRECTOR[getRandomInteger(0, DIRECTOR.length - 1)],
    starring: generateRandomLengthString(ACTOR, 3, `, `),
    year: YEAR_OF_RELEASE[getRandomInteger(0, YEAR_OF_RELEASE.length - 1)],
    runtime: DURATION[getRandomInteger(0, DURATION.length - 1)],
    genre: GENRE[getRandomInteger(0, GENRE.length - 1)],
    description: generateRandomLengthString(DESCRIPTIONS, 5, `. `),
    isWatchlist: Boolean(getRandomInteger(0, 1)),
  };
};

const generateMovies = (movieCount) => {
  return new Array(movieCount).fill().map(generateMovie);
};

const promoMovie = {
  id: 1,
  poster: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
  preview: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
  backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
  backgroundColor: `#F1E9CE`,
  video: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  title: `Macbeth`,
  rating: {
    ratingScore: 3.3,
    countVotesRating: 48798
  },
  director: `Justin Kurzel`,
  starring: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
  year: 2015,
  runtime: 113,
  genre: `Drama`,
  description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
  isFavorite: false
};

export {generateMovies, promoMovie};

