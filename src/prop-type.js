import PropTypes from 'prop-types';

export const ID = PropTypes.number.isRequired;
export const POSTER = PropTypes.string.isRequired;
export const COLOR = PropTypes.string.isRequired;
export const VIDEO = PropTypes.string.isRequired;
export const TITLE = PropTypes.string.isRequired;
export const RATING_SCORE = PropTypes.number.isRequired;
export const RATING_DESCRIPTION = PropTypes.string.isRequired;
export const COUNT_VOTER_RATING = PropTypes.number.isRequired;
export const DIRECTOR = PropTypes.string.isRequired;
export const STARRING = PropTypes.array.isRequired;
export const YEAR = PropTypes.number.isRequired;
export const RUNTIME = PropTypes.number.isRequired;
export const GENRE = PropTypes.string.isRequired;
export const DISCRIPTION = PropTypes.string.isRequired;
export const CURRENT_TAB = PropTypes.string.isRequired;
export const ON_MOVIE_CLICK = PropTypes.func.isRequired;
export const ON_MOUSE_OVER = PropTypes.func.isRequired;
export const ON_MOUSE_OUT = PropTypes.func.isRequired;
export const RENDER_PLAYER = PropTypes.func.isRequired;
export const ON_CHANGE_GENRE = PropTypes.func.isRequired;
export const ON_CHANGE_FIELD = PropTypes.func.isRequired;
export const ON_SUBMIT = PropTypes.func.isRequired;
export const REENDER_TABS = PropTypes.func.isRequired;
export const ON_CHANGE_TAB = PropTypes.func.isRequired;
export const IS_PLAING = PropTypes.bool.isRequired;
export const IS_FAVORITE = PropTypes.bool.isRequired;

export const MOVIE = PropTypes.shape({
  id: ID,
  poster: POSTER,
  preview: POSTER,
  backgroundImage: POSTER,
  backgroundColor: COLOR,
  video: VIDEO,
  previewVideo: VIDEO,
  title: TITLE,
  rating: PropTypes.shape({
    ratingScore: RATING_SCORE,
    countVotesRating: COUNT_VOTER_RATING,
  }),
  director: DIRECTOR,
  starring: STARRING,
  year: YEAR,
  runtime: RUNTIME,
  genre: GENRE,
  description: DISCRIPTION,
  isFavorite: IS_FAVORITE,
}).isRequired;

export const MOVIES = PropTypes.arrayOf(MOVIE).isRequired;


