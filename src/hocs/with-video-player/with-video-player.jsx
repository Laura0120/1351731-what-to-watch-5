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
        renderPlayer = {(src, poster, id) => {
          return (
            <VideoPlayer
              src={src}
              poster={poster}
              isPlaying={id === currentMovie}
            />
          );
        }}
        onMouseOver={(evt) => {
          const activMovie = evt.currentTarget;
          this.setState(() => ({currentMovie: activMovie.id}));
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
