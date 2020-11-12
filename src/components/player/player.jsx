import React, {PureComponent, createRef} from "react";
import {connect} from "react-redux";
import moment from 'moment';

import {ActionCreator} from "../../store/action";
import {MOVIE, FUNCTION} from '../../prop-type';


class Player extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isPlaying: true,
      isFullScreen: false,
      runtimeVideo: null,
      progressVideo: null,
    };

    this._onPlayPauseClickHandle = this._onPlayPauseClickHandle.bind(this);
    this._onFullScreenRequestHandle = this._onFullScreenRequestHandle.bind(this);
    this._onFullScreenExitHandle = this._onFullScreenExitHandle.bind(this);
  }

  componentDidMount() {
    const videoElement = this._videoRef.current;

    videoElement.oncanplaythrough = () => this.setState({
      runtimeVideo: videoElement.duration
    });

    videoElement.onloadedmetadata = () => this.setState({
      progressVideo: videoElement.currentTime,
    });
  }

  _onPlayPauseClickHandle() {
    const {isPlaying} = this.state;
    const newPlayingState = !isPlaying;
    const videoElement = this._videoRef.current;


    this.setState(() => ({isPlaying: newPlayingState}));

    if (newPlayingState) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }

  _onFullScreenRequestHandle() {
    const {isFullScreen} = this.state;
    const newScreenState = !isFullScreen;
    const videoElement = this._videoRef.current;


    this.setState(() => ({isFullScreen: newScreenState}));
    videoElement.requestFullscreen();
    document.addEventListener(`fullscreenchange`, this._onFullScreenExitHandle);

  }

  _onFullScreenExitHandle() {
    const {isFullScreen} = this.state;
    const newScreenState = !isFullScreen;

    this.setState(() => ({isFullScreen: newScreenState}));
    document.removeEventListener(`fullscreenchange`, this._onFullScreenExitHandle);
  }

  render() {
    const {movie, onExitClick} = this.props;
    const {video, title, id} = movie;
    const {isPlaying, runtimeVideo, progressVideo} = this.state;
    const toggleMovement = progressVideo / runtimeVideo * 100;

    return (
      <div className='player'>
        <video src={video} ref={this._videoRef} className='player__video' autoPlay={isPlaying} muted></video>

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
            <button type='button' className='player__play' onClick={this._onPlayPauseClickHandle}>
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

            <button type='button' className='player__full-screen' onClick={this._onFullScreenRequestHandle}>
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
  movie: MOVIE,
  onExitClick: FUNCTION
};

const mapStateToProps = (state) => ({
  movie: state.DATA.openedMovie || state.DATA.promoMovie
});

const mapDispatchToProps = (dispatch) => ({
  onExitClick(id) {
    dispatch(ActionCreator.redirectToRoute(`/films/${id}`));
  }
});

export {Player};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
