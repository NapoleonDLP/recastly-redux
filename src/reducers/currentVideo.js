import Redux from 'redux';

var currentVideoReducer = (state, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch (action.type) {
  case 'CHANGE_VIDEO':
    return action.video;

<<<<<<< HEAD
  default:
    return state; //null

=======
  default: 
    return null;
    
>>>>>>> 47a0a3c03ece662cc3d682b823159f480acfb52f
  }
};

export default currentVideoReducer;
