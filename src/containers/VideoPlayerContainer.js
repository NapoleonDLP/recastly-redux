import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var mapStateToProps = (state) => ({
<<<<<<< HEAD
  currentVideo: state.currentVideo
});

var VideoPlayerContainer = connect(null, mapStateToProps);
=======
  video: state.currentVideo
});

var VideoPlayerContainer = connect(mapStateToProps, null)(VideoPlayer);
>>>>>>> c1e9d4902369fb73a3141fcbf71acb736af389c8

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
