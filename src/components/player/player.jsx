import React from "react";
import {connect} from "react-redux";
import moment from 'moment';

import {ActionCreator} from "../../store/action";
import {MOVIE, FUNCTION, NUMBER} from '../../prop-type';
import withPlayer from '../../hocs/with-player/with-player';


const Player = (props) => {
  const {movie, onExitClick, isPlaying, runtimeVideo, progressVideo, toggleMovement, onPlayPauseClick, onFullScreenRequest, renderVideo} = props;
  const {video, title, id} = movie;
  return (
    <div className='player'>
      {renderVideo(video)}
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
          <button type='button' className='player__play' onClick={onPlayPauseClick}>
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

          <button type='button' className='player__full-screen' onClick={onFullScreenRequest}>
            <svg viewBox='0 0 27 27' width='27' height='27'>
              <use xlinkHref='#full-screen'></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};


Player.propTypes = {
  movie: MOVIE,
  onExitClick: FUNCTION,
  isPlaying: FUNCTION,
  onPlayPauseClick: FUNCTION,
  onFullScreenRequest: FUNCTION,
  renderVideo: FUNCTION,
  runtimeVideo: NUMBER,
  progressVideo: NUMBER,
  toggleMovement: NUMBER,
};

const mapStateToProps = (state) => ({
  movie: state.DATA.openedMovie || state.DATA.promoMovie
});

const mapDispatchToProps = (dispatch) => ({
  onExitClick(id) {
    dispatch(ActionCreator.redirectToRoute(`/films/${id}`));
  }
});

connect(mapStateToProps, mapDispatchToProps)(Player);

const PlayerWrapped = withPlayer(Player);

export default PlayerWrapped;
