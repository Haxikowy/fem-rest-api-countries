import '../scss/CountryCard.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ data }) => {
  const population = `${data.population}`.replace(
    /(\d)(?=(\d\d\d)+(?!\d))/g,
    '$1,'
  );

  return (
    <div className="country-card">
      <Link to={`/details/${data.numericCode}`} className="country-card__flag">
        <img src={data.flags[1]} alt={`${data.name} flag`} />
      </Link>
      <div className="country-card__informations">
        <Link
          to={`/details/${data.numericCode}`}
          className="country-card__name">
          {data.name}
        </Link>
        <p className="country-card__information">
          <span className="country-card__prefix">Population: </span>
          {population}
        </p>
        <p className="country-card__information">
          <span className="country-card__prefix">Region: </span>
          {data.continent}
        </p>
        <p className="country-card__information">
          <span className="country-card__prefix">Capital: </span>
          {data.capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
