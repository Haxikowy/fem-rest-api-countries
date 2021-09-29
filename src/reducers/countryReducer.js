import { FETCH_COUNTRIES } from '../actions/types';
import _ from 'lodash';

const countryReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return { ...state, ..._.mapKeys(action.payload, 'alpha3Code') };
    default:
      return state;
  }
};

export default countryReducer;
