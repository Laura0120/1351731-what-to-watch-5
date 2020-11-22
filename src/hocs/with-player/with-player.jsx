import React, {PureComponent} from "react";

const withPlayer = (Component) => {
  class WithPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: true,
        runtimeVideo: 0,
        progressVideo: 0,
      };
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
        onCanPlayThrough = {(runtime) => {
          return this.setState({runtimeVideo: runtime});
        }}
        onProgressVideoSet = {(evt) => {
          return this.setState({
            progressVideo: evt.currentTarget.currentTime,
          });
        }}
        togglePlayState = {() => {
          return this.setState({
            isPlaying: !isPlaying,
          });
        }}
      />;
    }
  }

  return WithPlayer;

};

export default withPlayer;
