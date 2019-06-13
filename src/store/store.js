import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';
import changeVideo from './../actions/currentVideo.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!


var defaultStore = {
  currentVideo: exampleVideoData[0],
  videoList: exampleVideoData

};

var configureStore = function(initialState) {
  return createStore (
    rootReducer, 
    defaultStore, 
    applyMiddleware(thunk));
};



export default configureStore;