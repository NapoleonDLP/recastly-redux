import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';
import {Provider} from 'react-redux';
import store from './store/store.js';
import rootReducer from './reducers/main.js';
import VideoList from './components/VideoList.js';
import VideoPlayer from './components/VideoPlayer.js';
import handleVideoSearch from './actions/search.js';

//TODO: Import the Provider component from 'react-redux' here!

//TODO: Use the Provider component to make your store available to
//  the rest of your app.

// const store = configureStore(); // how do we pass initialState

// var defaultStore = {
//   currentVideo: VideoPlayer,
//   videoList: VideoList
// };


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('app'), () => handleVideoSearch('redux tutorials')(store.dispatch)
);

// ReactDOM.render(
//   <App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube} Provider={Provider}/>,
//   document.getElementById('app')
// );
