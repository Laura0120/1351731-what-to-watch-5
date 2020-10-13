import PropTypes from 'prop-types';

export default {
  movies: PropTypes.array.isRequired,
  movie: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.object.isRequired,
  ratingScore: PropTypes.string.isRequired,
  ratingDescription: PropTypes.string.isRequired,
  countVotesRating: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onMovieClick: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired,
};

