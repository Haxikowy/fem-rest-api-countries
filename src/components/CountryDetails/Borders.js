import React from 'react';
import { Link } from 'react-router-dom';

const Borders = ({ label, country, countries }) => {
  if (country.borders === undefined) return null;

  const listBorders = () => {
    return country.borders.map(border => {
      const borderCountry = countries.find(
        country => country.alpha3Code === border
      );
      if (!borderCountry) return null;
      return (
        <Link
          className="country-details_borderBtn btn"
          key={border}
          to={`/details/${border}`}>
          {borderCountry.name}
        </Link>
      );
    });
  };

  return (
    <div className="country-details__borders">
      <h3 className="highlighted">{label}</h3>
      <div className="country-details__buttons">{listBorders()}</div>
    </div>
  );
};

export default Borders;
