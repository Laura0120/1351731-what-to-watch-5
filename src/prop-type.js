import PropTypes from 'prop-types';

export const ID = PropTypes.string.isRequired;
export const POSTER = PropTypes.string.isRequired;
export const TITLE = PropTypes.string.isRequired;
export const RATING_SCORE = PropTypes.string.isRequired;
export const RATING_DESCRIPTION = PropTypes.string.isRequired;
export const COUNT_VOTER_RATING = PropTypes.string.isRequired;
export const DIRECTOR = PropTypes.string.isRequired;
export const STARRING = PropTypes.string.isRequired;
export const YEAR = PropTypes.string.isRequired;
export const GENRE = PropTypes.string.isRequired;
export const DISCRIPTION = PropTypes.string.isRequired;
export const ON_MOVIE_CLICK = PropTypes.func.isRequired;
export const ON_MOUSE_OVER = PropTypes.func.isRequired;
export const ON_MOUSE_OUT = PropTypes.func.isRequired;
export const RENDER_PLAYER = PropTypes.func.isRequired;
export const IS_PLAING = PropTypes.bool.isRequired;


export const MOVIE = PropTypes.shape({
  id: ID,
  poster: POSTER,
  title: TITLE,
  rating: PropTypes.shape({
    ratingScore: RATING_SCORE,
    ratingDescription: RATING_DESCRIPTION,
    countVotesRating: COUNT_VOTER_RATING,
  }),
  director: DIRECTOR,
  starring: STARRING,
  year: YEAR,
  genre: GENRE,
  description: DISCRIPTION,
}).isRequired;

export const MOVIES = PropTypes.arrayOf(MOVIE).isRequired;

