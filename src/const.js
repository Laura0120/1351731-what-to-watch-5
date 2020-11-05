const DEFAULT_GENRE = `All genres`;

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
  FILM_ID_REVIW: `/films/:id/reviw`,
};

const APIRoute = {
  QUESTIONS: `/films`,
  LOGIN: `/login`,
};


export {DEFAULT_GENRE, TABS_NAME, AuthorizationStatus, AppRoute, APIRoute};
