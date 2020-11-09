const DEFAULT_GENRE = `All genres`;
const COUNT_SILIMAR_MOVIE = 4;
const COUNT_MOVIE_PER_STEP = 8;

const TABS_NAME = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const AppRoute = {
  MAIN: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  FILM_ID: `/films/:id`,
  FILM_ID_REVIEW: `/films/:id/review`,
};

const APIRoute = {
  FILMS: `/films`,
  LOGIN: `/login`,
  PROMO: `/films/promo`,
};


export {DEFAULT_GENRE, TABS_NAME, AuthorizationStatus, AppRoute, APIRoute, COUNT_SILIMAR_MOVIE, COUNT_MOVIE_PER_STEP};
