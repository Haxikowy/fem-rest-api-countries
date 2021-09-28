import '../scss/CountryCard.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const CountryCard = ({ data }) => {
  const [isLoaded, setLoaded] = useState(false);

  const population = `${data.population}`.replace(
    /(\d)(?=(\d\d\d)+(?!\d))/g,
    '$1,'
  );

  return (
    <div className="country-card">
      <Link
        tabIndex="-1"
        to={`/details/${data.alpha3Code}`}
        className="country-card__flag">
        {isLoaded ? null : (
          <Loader style={{ width: '250px', height: '166px' }} />
        )}
        <img
          onLoad={() => setLoaded(!isLoaded)}
          style={isLoaded ? {} : { display: 'none' }}
          src={data.flag}
          alt={`${data.name} flag`}
        />
      </Link>

      <div className="country-card__informations">
        <Link to={`/details/${data.alpha3Code}`} className="country-card__name">
          {data.name}
        </Link>
        <p className="country-card__information">
          <span className="country-card__prefix">Population: </span>
          {population}
        </p>
        <p className="country-card__information">
          <span className="country-card__prefix">Region: </span>
          {data.region}
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
