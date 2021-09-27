import { SELECT_REGION } from '../actions/types';

const selectedReducer = (state = {}, action) => {
  switch (action.type) {
    case SELECT_REGION:
      return action.payload;
    default:
      return state;
  }
};

export default selectedReducer;
