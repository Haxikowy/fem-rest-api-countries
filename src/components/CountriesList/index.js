import '../scss/CountriesList.scss';
import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import restCountries from '../../apis/restCountries';
import Dropdown from './Dropdown';
import CountryCard from './CountryCard';

const CountriesList = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [term, setTerm] = useState('');
  const [countries, setCountries] = useState([]);

  const renderCards = () => {
    if (!countries.length) {
      return null;
    } else if (selectedRegion.length && term.length) {
      return countries
        .filter(
          country =>
            country.continent === selectedRegion &&
            country.name.toLowerCase().includes(term.toLowerCase())
        )
        .map(country => {
          return <CountryCard key={country.numericCode} data={country} />;
        });
    } else if (selectedRegion.length) {
      return countries
        .filter(country => country.continent === selectedRegion)
        .map(country => {
          return <CountryCard key={country.numericCode} data={country} />;
        });
    } else if (term.length) {
      return countries
        .filter(country =>
          country.name.toLowerCase().includes(term.toLowerCase())
        )
        .map(country => {
          return <CountryCard key={country.numericCode} data={country} />;
        });
    } else {
      return countries.map(country => {
        return <CountryCard key={country.numericCode} data={country} />;
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await restCountries.get(`/all`);

      setCountries(data);
    };

    fetchData();
  }, []);

  return (
    <div className="countries-list">
      <div className="countries-list__menu">
        <SearchInput term={term} setTerm={setTerm} />
        <Dropdown
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      </div>
      <div className="countries-list__content">{renderCards()}</div>
    </div>
  );
};

export default CountriesList;
