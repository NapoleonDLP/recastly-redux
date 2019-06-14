import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

<<<<<<< HEAD
// var mapStateToProps = (state) => ({
//   currentVideo: state.currentVideo,
//   VideoList: state.VideoList
// });
=======
// var mapStateToProps = (state) => {
//   return {
//     currentVideo: state.currentVideo,
//     VideoList: state.VideoList
//   };
// };
>>>>>>> c1e9d4902369fb73a3141fcbf71acb736af389c8

var mapDispatchToProps = (dispatch) => ({
  handleSearchInputChange: (q) => dispatch(handleSearchChange(q))
});

var SearchContainer = connect(null, mapDispatchToProps)(Search);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
