import PropTypes from 'prop-types';

export const POSTER = PropTypes.string.isRequired;
export const COLOR = PropTypes.string.isRequired;
export const VIDEO = PropTypes.string.isRequired;
export const TITLE = PropTypes.string.isRequired;
export const RATING_DESCRIPTION = PropTypes.string.isRequired;
export const DIRECTOR = PropTypes.string.isRequired;
export const GENRE = PropTypes.string.isRequired;
export const DISCRIPTION = PropTypes.string.isRequired;
export const CURRENT_TAB = PropTypes.string.isRequired;
export const PATH = PropTypes.string.isRequired;
export const AUTHORIZATION_STATUS = PropTypes.string.isRequired;
export const COMPONENT = PropTypes.object.isRequired;
export const STARRING = PropTypes.array.isRequired;
export const BOOLEAN = PropTypes.bool.isRequired;
export const FUNCTION = PropTypes.func.isRequired;
export const NUMBER = PropTypes.number.isRequired;

export const MOVIE = PropTypes.shape({
  id: NUMBER,
  poster: POSTER,
  preview: POSTER,
  backgroundImage: POSTER,
  backgroundColor: COLOR,
  video: VIDEO,
  previewVideo: VIDEO,
  title: TITLE,
  rating: PropTypes.shape({
    ratingScore: NUMBER,
    countVotesRating: NUMBER,
  }),
  director: DIRECTOR,
  starring: STARRING,
  year: NUMBER,
  runtime: NUMBER,
  genre: GENRE,
  description: DISCRIPTION,
  isFavorite: BOOLEAN,
}).isRequired;

export const MOVIES = PropTypes.arrayOf(MOVIE).isRequired;

const COMMENT = PropTypes.shape({
  id: NUMBER,
  user: PropTypes.shape({
    id: NUMBER,
    name: PropTypes.string.isRequired
  }),
  rating: NUMBER,
  comment: DISCRIPTION,
  date: PropTypes.string.isRequired
}).isRequired;

export const COMMENTS = PropTypes.arrayOf(COMMENT).isRequired;
