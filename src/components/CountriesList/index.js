import '../scss/CountriesList.scss';
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { fetchCountries, setRendered } from '../../actions';
import _ from 'lodash';

import SearchInput from './SearchInput';
import Dropdown from './Dropdown';
import CountryCard from './CountryCard';
import Loader from './Loader';

const CountriesList = props => {
  const {
    fetchCountries,
    setRendered,
    rendered,
    countries,
    term,
    selectedRegion,
  } = props;
  const footerRef = useRef();

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;

      if (window.scrollY + window.innerHeight >= footerRef.current.offsetTop) {
        if (rendered <= 249) setRendered(18);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [rendered, setRendered]);

  const renderCards = () => {
    if (countries.length <= 247 || _.isEmpty(selectedRegion)) {
      return <Loader />;
    }

    let result = countries;
    if (selectedRegion.value.length && term.length) {
      result = countries.filter(
        country =>
          country.region === selectedRegion.value &&
          country.name.toLowerCase().includes(term.toLowerCase())
      );
    } else if (selectedRegion.value.length) {
      result = countries.filter(
        country => country.region === selectedRegion.value
      );
    } else if (term.length) {
      result = countries.filter(country =>
        country.name.toLowerCase().includes(term.toLowerCase())
      );
    }
    return result.slice(0, rendered).map(country => {
      return <CountryCard key={country.alpha3Code} data={country} />;
    });
  };

  return (
    <div className="countries-list">
      <div className="countries-list__menu">
        <SearchInput />
        <Dropdown />
      </div>
      <div className="countries-list__content">{renderCards()}</div>
      <footer ref={footerRef} style={{ padding: '2em' }}></footer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    countries: Object.values(state.countries),
    term: state.term,
    selectedRegion: state.selectedRegion,
    rendered: state.rendered,
  };
};

export default connect(mapStateToProps, { fetchCountries, setRendered })(
  CountriesList
);
