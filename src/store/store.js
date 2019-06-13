import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';
// import changeVideo from './../actions/currentVideo.js';
// import { connect } from 'react-redux';


// TODO:  Create your redux store, apply thunk as a middleware, and export it!


// var defaultStore = {
//   currentVideo: ,
//   videoList: null

// };


var store = function() {
  return createStore(
    rootReducer, 
    {currentVideo: exampleVideoData[0], videoList: exampleVideoData}, 
    applyMiddleware(thunk)
  );
};



// export default store;
export default store(   rootReducer,   {currentVideo: exampleVideoData[0], videoList: exampleVideoData},   applyMiddleware(thunk) ); 