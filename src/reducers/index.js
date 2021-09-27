import { combineReducers } from 'redux';
import countryReducer from './countryReducer';
import termReducer from './termReducer';
import selectedReducer from './selectedReducer';
import renderedReducer from './renderedReducer';

export default combineReducers({
  countries: countryReducer,
  term: termReducer,
  selectedRegion: selectedReducer,
  rendered: renderedReducer,
});
