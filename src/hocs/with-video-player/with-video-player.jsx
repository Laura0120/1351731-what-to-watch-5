import React, {PureComponent} from "react";

import VideoPlayer from "../../components/video-player/video-player";

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentMovie: null,
      };
    }

    render() {
      const {currentMovie} = this.state;

      return <Component
        {...this.props}
        renderPlayer = {(src, preview, id) => {
          return (
            <VideoPlayer
              src={src}
              preview={preview}
              isPlaying={id === currentMovie}
            />
          );
        }}
        onMouseOver={(evt) => {
          const activeMovie = evt.currentTarget;
          this.setState(() => ({currentMovie: parseInt(activeMovie.id, 10)}));
        }}
        onMouseOut={()=> {
          this.setState(() => ({currentMovie: null}));
        }}
      />;
    }
  }

  return WithActivePlayer;

};

export default withActivePlayer;
