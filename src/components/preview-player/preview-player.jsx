import React, {PureComponent, createRef} from "react";
import {VIDEO, POSTER, BOOLEAN} from '../../prop-type';
class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
  }

  componentDidMount() {
    const {src, preview} = this.props;
    const video = this._videoRef.current;

    video.src = src;
    video.poster = preview;
    video.width = `280`;
    video.height = `175`;
  }


  render() {
    return <video muted ref={this._videoRef} > </video>;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    const {isPlaying} = this.props;

    if (isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }
}

VideoPlayer.propTypes = {
  src: VIDEO,
  preview: POSTER,
  isPlaying: BOOLEAN,
};

export default VideoPlayer;
