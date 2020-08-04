import React from 'react';
import YouTube from 'react-youtube';
import '../Styling/App.css';

class Podcasts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videoIds: [
        "6PK6aZJ_1a4",
        "KU9bnjYrTuw",
      ],
    };
  }

  playerOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  
  render() {
    const opts = {
      height:'390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return (
    <div>
        <p className ="TempText">Podcasts</p>
        <ul className = "VideoContainer">
          {this.state.videoIds.map(item => (
            <YouTube className = "Video" videoId={item} opts={opts} onReady={this.playerOnReady} />
          ))}
        </ul>
    </div>
    );
  }
}

export default Podcasts;