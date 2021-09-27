import { SET_TERM } from '../actions/types';

const termReducer = (state = '', action) => {
  switch (action.type) {
    case SET_TERM:
      return action.payload;
    default:
      return state;
  }
};

export default termReducer;
