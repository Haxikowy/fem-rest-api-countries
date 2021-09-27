import '../scss/SearchInput.scss';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import { connect } from 'react-redux';
import { setTerm } from '../../actions';

const SearchInput = ({ term, setTerm }) => {
  return (
    <div className="search-input">
      <label htmlFor="input">
        <FontAwesomeIcon className="icon" icon={solid('search')} />
      </label>
      <input
        autoComplete="off"
        id="input"
        onChange={e => setTerm(e.target.value)}
        placeholder={'Search for a country...'}
        value={term}
        type="text"
      />
    </div>
  );
};

const mapStateToProps = state => {
  return { term: state.term };
};

export default connect(mapStateToProps, { setTerm })(SearchInput);
