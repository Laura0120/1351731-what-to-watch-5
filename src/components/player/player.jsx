import React, {PureComponent, createRef} from "react";
import {connect} from "react-redux";
import moment from 'moment';
import PropTypes from 'prop-types';
import {matchPath} from "react-router";

import {ActionCreator} from "../../store/action";
import {fetchMovieById, fetchCommentsByMovieId} from "../../store/api-actions";
import {FUNCTION, BOOLEAN, NUMBER, MOVIE} from '../../prop-type';
import withPlayer from "../../hocs/with-player/with-player";
import {adaptToClientMovie} from '../../utils/adapt';
import {AppRoute} from "../../const";

class Player extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
  }

  componentDidMount() {
    const {onCanPlayThrough, movie, loadMovie, location, togglePlayState} = this.props;

    if (!movie.id) {
      const locationInfo = matchPath(location.pathname, {
        path: AppRoute.PLAYER_ID,
        exact: true,
        strict: true
      });

      loadMovie(locationInfo.params.id);
      togglePlayState();
    }

    const videoElement = this._videoRef.current;

    videoElement.oncanplaythrough = (evt) => onCanPlayThrough(evt.currentTarget.duration);
  }

  _handlePlayPauseClick() {
    const videoElement = this._videoRef.current;
    const {isPlaying, togglePlayState} = this.props;

    if (!isPlaying) {
      videoElement.play();
    } else {
      videoElement.pause();
    }

    togglePlayState();
  }

  render() {
    const {movie, onExitClick, isPlaying, runtimeVideo, progressVideo, toggleMovement, onProgressVideoSet} = this.props;
    const {video, title, id} = movie;
    const videoElement = this._videoRef.current;

    return (
      <div className='player'>
        <video src={video} ref={this._videoRef} className='player__video' autoPlay={isPlaying} onTimeUpdate={onProgressVideoSet}></video>

        <button type='button' className='player__exit' onClick={() => onExitClick(id)}>
          Exit
        </button>

        <div className='player__controls'>
          <div className='player__controls-row'>
            <div className='player__time'>
              <progress className='player__progress' value={progressVideo} max={runtimeVideo}></progress>
              <div className='player__toggler' style={{left: toggleMovement + `%`}}>
                Toggler
              </div>
            </div>
            <div className='player__time-value'>
              {moment
                .utc()
                .startOf(`day`)
                .add({seconds: runtimeVideo - progressVideo})
                .format(`H[:]mm[:]ss`)}
            </div>
          </div>

          <div className='player__controls-row'>
            <button type='button' className='player__play' onClick={() => this._handlePlayPauseClick()}>
              {isPlaying ?
                <svg viewBox='0 0 14 21' width='19' height='19'>
                  <use xlinkHref='#pause'></use>
                </svg> :
                <svg viewBox='0 0 19 19' width='19' height='19'>
                  <use xlinkHref='#play-s'></use>
                </svg>}
              <span>Play</span>
            </button>
            <div className='player__name'>{title}</div>

            <button type='button' className='player__full-screen' onClick={() => videoElement.requestFullscreen()}>
              <svg viewBox='0 0 27 27' width='27' height='27'>
                <use xlinkHref='#full-screen'></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  movie: MOVIE.isRequired,
  onExitClick: FUNCTION,
  onCanPlayThrough: FUNCTION,
  onProgressVideoSet: FUNCTION,
  togglePlayState: FUNCTION,
  loadMovie: FUNCTION,
  isPlaying: BOOLEAN,
  runtimeVideo: NUMBER,
  progressVideo: NUMBER,
  toggleMovement: NUMBER,
  location: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  movie: adaptToClientMovie(state.DATA.openedMovie),
});

const mapDispatchToProps = (dispatch) => ({
  onExitClick(id) {
    dispatch(ActionCreator.redirectToRoute(`/films/${id}`));
  },
  loadMovie(id) {
    dispatch(fetchMovieById(id));
    dispatch(fetchCommentsByMovieId(id));
  }
});

export {Player};

const ConnectedPlayer = connect(mapStateToProps, mapDispatchToProps)(Player);

const PlayerWrapped = withPlayer(ConnectedPlayer);

export default PlayerWrapped;
