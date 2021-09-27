import '../scss/CountriesList.scss';
import React, { useEffect, useRef } from 'react';
import SearchInput from './SearchInput';
import Dropdown from './Dropdown';
import CountryCard from './CountryCard';

import { connect } from 'react-redux';
import { fetchCountries, setRendered } from '../../actions';
import Loader from './Loader';

const CountriesList = props => {
  const { fetchCountries, setRendered, rendered } = props;
  const footerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;

      if (window.scrollY + window.innerHeight >= footerRef.current.offsetTop) {
        if (rendered < 248) setRendered(19);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [rendered, setRendered]);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  const renderCards = () => {
    const { countries, term, selectedRegion } = props;

    if (!countries.length) {
      return <Loader />;
    } else if (selectedRegion.value.length && term.length) {
      return countries
        .filter(
          country =>
            country.continent === selectedRegion.value &&
            country.name.toLowerCase().includes(term.toLowerCase())
        )
        .slice(0, rendered)
        .map(country => {
          return <CountryCard key={country.numericCode} data={country} />;
        });
    } else if (selectedRegion.value.length) {
      return countries
        .filter(country => country.continent === selectedRegion.value)
        .slice(0, rendered)
        .map(country => {
          return <CountryCard key={country.numericCode} data={country} />;
        });
    } else if (term.length) {
      return countries
        .filter(country =>
          country.name.toLowerCase().includes(term.toLowerCase())
        )
        .slice(0, rendered)
        .map(country => {
          return <CountryCard key={country.numericCode} data={country} />;
        });
    } else {
      return countries.slice(0, rendered).map((country, i, arr) => {
        if (arr.length === i + 1) {
          return <CountryCard key={country.alpha3Code} data={country} />;
        } else {
          return <CountryCard key={country.alpha3Code} data={country} />;
        }
      });
    }
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
