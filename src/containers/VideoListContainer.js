import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

<<<<<<< HEAD
var mapStateToProps = state => ({
  videoList: state.videoList,
});

var mapDispatchToProps = (dispatch) => ({
  handleVideoListEntryTittleClick: (video) => dispatch(changeVideo(video)),
=======
var mapStateToProps = (state) => ({
  
    
  videos: state.videoList
  
});

var mapDispatchToProps = (dispatch) => ({
  
  handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video)),

>>>>>>> c1e9d4902369fb73a3141fcbf71acb736af389c8
});



<<<<<<< HEAD
var VideoListContainer = () => {
  connect(mapStateToProps, mapDispatchToProps)(VideoList);
};
=======
var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);
	
>>>>>>> c1e9d4902369fb73a3141fcbf71acb736af389c8

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
