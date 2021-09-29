import restCountries from '../apis/restCountries';
import {
  FETCH_COUNTRIES,
  SET_TERM,
  SELECT_REGION,
  SET_RENDERED,
  RESET_RENDERED,
} from './types';

export const fetchCountries = () => async dispatch => {
  const { data } = await restCountries.get('/all');

  return dispatch({ type: FETCH_COUNTRIES, payload: data });
};

export const setTerm = term => {
  return { type: SET_TERM, payload: term };
};

export const selectRegion = selected => {
  return { type: SELECT_REGION, payload: selected };
};

export const setRendered = addition => {
  return { type: SET_RENDERED, payload: addition };
};

export const resetRendered = () => {
  return { type: RESET_RENDERED };
};
