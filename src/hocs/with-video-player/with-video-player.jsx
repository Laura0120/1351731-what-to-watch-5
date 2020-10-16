import React, {PureComponent} from "react";
import VideoPlayer from "../../components/video-player/video-player";

const withActivePlayer = (Component) => {
    class WithActivePlayer extends PureComponent {
        constructor(props) {
            super(props);

            this.state = {
                activePlayerId: null,
            };
        }
    }

    render() {
        const {activePlayerId} = this.state

        return (
            <Component {...this.props}
            renderPlayer = {(src, poster, id) => {
                return (
                    <VideoPlayer 
                        src={src}
                        poster={poster}
                        onMouseOver = {(evt) => this.setState({
                            activePlayerId: id
                        })}
                    />
                );
            }
        )
    }

    WithActivePlayer.propTypes = {};

    return WithActivePlayer;
};

export default withActivePlayers;