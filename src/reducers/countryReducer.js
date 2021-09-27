import { FETCH_COUNTRY, FETCH_COUNTRIES } from '../actions/types';
import _ from 'lodash';

const countryReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_COUNTRY:
      return { ...state, [action.payload.alpha2Code]: action.payload };
    case FETCH_COUNTRIES:
      return { ...state, ..._.mapKeys(action.payload, 'alpha2Code') };
    default:
      return state;
  }
};

export default countryReducer;
