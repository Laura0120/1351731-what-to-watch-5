import React, {PureComponent} from "react";

import VideoPlayer from "../../components/preview-player/preview-player";
import ShowMore from "../../components/show-more/show-more";
import {COUNT_MOVIE_PER_STEP} from "../../const";

const withPreviewPlayer = (Component) => {
  class WithPreviewPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentMovie: null,
        renderedMovieCount: COUNT_MOVIE_PER_STEP
      };
    }

    render() {
      const {currentMovie, renderedMovieCount} = this.state;

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
        renderedMovieCount={renderedMovieCount}
        renderShowMore = {()=>{
          return (
            <ShowMore onShowMoreClick={()=> {
              this.setState(() => ({renderedMovieCount: renderedMovieCount + COUNT_MOVIE_PER_STEP}));
            }}/>
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

  return WithPreviewPlayer;

};

export default withPreviewPlayer;
