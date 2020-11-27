import React, {PureComponent, createRef} from "react";
import {STRING, BOOLEAN} from '../../prop-type';
class PreviewPlayer extends PureComponent {
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
      video.play().catch(() => {});
    } else {
      video.load();
    }
  }
}

PreviewPlayer.propTypes = {
  video: STRING,
  preview: STRING,
  isPlaying: BOOLEAN,
};

export default PreviewPlayer;
