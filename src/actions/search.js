import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import thunk from 'redux-thunk';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  return (dispatch)=> {
    searchYouTube({YOUTUBE_API_KEY, q}, (data)=>{
      dispatch(changeVideo(data[0]));
      dispatch(changeVideoList(data));
    });
  };
};

export default handleVideoSearch;
