import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCountry } from '../actions';

const CountryDetails = props => {
  const { fetchCountry } = props;
  const { id } = props.match.params;

  useEffect(() => {
    fetchCountry(id);
  }, [fetchCountry, id]);

  return <div>CountryDetails</div>;
};

const mapStateToProps = (state, ownProps) => {
  return { countries: state.countries[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchCountry })(CountryDetails);
