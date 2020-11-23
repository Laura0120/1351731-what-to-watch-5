import React, {PureComponent, createRef} from "react";
import {VIDEO, POSTER, BOOLEAN} from '../../prop-type';
class PreviwPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
  }

  render() {
    const {video, preview} = this.props;
    return <video src={video} poster={preview} width='280' height='175' muted ref={this._videoRef} > </video>;
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

PreviwPlayer.propTypes = {
  video: VIDEO,
  preview: POSTER,
  isPlaying: BOOLEAN,
};

export default PreviwPlayer;
