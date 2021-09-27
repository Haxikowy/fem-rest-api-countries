import { RESET_RENDERED, SET_RENDERED } from '../actions/types';

const renderedReducer = (state = 20, action) => {
  switch (action.type) {
    case SET_RENDERED:
      return state + action.payload;
    case RESET_RENDERED:
      return (state = 20);
    default:
      return state;
  }
};

export default renderedReducer;
