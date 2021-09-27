import { SELECT_REGION } from '../actions/types';

const selectedReducer = (
  state = { name: 'Filter by Region', value: '' },
  action
) => {
  switch (action.type) {
    case SELECT_REGION:
      return action.payload;
    default:
      return state;
  }
};

export default selectedReducer;
