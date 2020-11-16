import React, {PureComponent, createRef} from "react";

const withPlayer = (Component) => {
  class WithPlayer extends PureComponent {
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
      this._onProgressVideoHandle = this._onProgressVideoHandle.bind(this);
    }

    _onProgressVideoHandle() {
      const videoElement = this._videoRef.current;
      this.setState({
        progressVideo: videoElement.currentTime,
      });
    }

    componentDidMount() {
      const videoElement = this._videoRef.current;

      videoElement.oncanplaythrough = () => this.setState({
        runtimeVideo: videoElement.duration
      });
      videoElement.addEventListener(`timeupdate`, this._onProgressVideoHandle);
    }

    componentWillUnmount() {
      const videoElement = this._videoRef.current;
      videoElement.removeEventListener(`timeupdate`, this._onProgressVideoHandle);
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
      const videoElement = this._videoRef.current;

      videoElement.requestFullscreen();

    }

    render() {
      const {isPlaying, runtimeVideo, progressVideo} = this.state;
      const toggleMovement = progressVideo / runtimeVideo * 100;

      return <Component
        {...this.props}

        isPlaying={isPlaying}
        runtimeVideo={runtimeVideo}
        progressVideo={progressVideo}
        toggleMovement={toggleMovement}
        onPlayPauseClick={this._onPlayPauseClickHandle}
        onFullScreenRequest={this._onFullScreenRequestHandle}

        renderVideo = {(src) => {
          return (
            <video
              src={src}
              ref={this._videoRef}
              className='player__video'
              autoPlay={isPlaying}>
            </video>
          );
        }}
      />;
    }
  }

  return WithPlayer;

};

export default withPlayer;
