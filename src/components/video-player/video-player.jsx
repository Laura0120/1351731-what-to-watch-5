import React, {PureComponent, createRef} from "react";
// import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
  }

  componentDidMount() {
    const {src, poster} = this.props;
    const video = this._videoRef.current;

    video.src = src;
    video.poster = poster;
    video.width = '280';
    video.height = '175';
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncaplaythrough = null;
  }

  render() {
    const {isPlaying} = this.props;

    return <video autoPlay={isPlaying} ref={this._videoRef} > </video>;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    const {isPlaying} = this.props;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }
}
