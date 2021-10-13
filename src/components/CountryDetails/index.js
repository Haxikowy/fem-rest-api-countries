import '../scss/CountryDetails.scss';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import { fetchCountries } from '../../actions';
import Loader from '../CountriesList/Loader';
import Detail from './Detail';
import TopLevelDomain from './TopLevelDomain';
import Currencies from './Currencies';
import Languages from './Languages';
import Borders from './Borders';

const CountryDetails = props => {
  const { fetchCountries, country, countries } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = props.match.params;

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  // resets state when u change page to other on details
  useEffect(() => {
    return () => {
      setIsLoaded(false);
    };
  }, [id]);

  const renderContent = () => {
    if (country === undefined || countries === undefined) return <Loader />;

    const population = `${country.population}`.replace(
      /(\d)(?=(\d\d\d)+(?!\d))/g,
      '$1,'
    );

    return (
      <>
        <button
          onClick={props.history.goBack}
          className="country-details__backBtn btn">
          <FontAwesomeIcon icon={solid('arrow-left')} className="icon" />
          Back
        </button>

        <div className="row">
          <div className="country-details__flag">
            {isLoaded ? null : <Loader />}
            <img
              onLoad={() => setIsLoaded(!isLoaded)}
              src={country.flags.png}
              style={isLoaded ? {} : { display: 'none' }}
              alt={`${country.name} flag`}
            />
          </div>

          <div className="country-details__informations">
            <h2 className="country-details__name">{country.name}</h2>
            <div className="col">
              <ul className="country-details__list">
                <Detail label={'Native Name: '} data={country.nativeName} />
                <Detail label={'Population: '} data={population} />
                <Detail label={'Region: '} data={country.region} />
                <Detail label={'Sub Region: '} data={country.subregion} />
                <Detail label={'Capital: '} data={country.capital} />
              </ul>
              <ul className="country-details__list">
                <TopLevelDomain
                  label={'Top Level Domain: '}
                  data={country.topLevelDomain}
                />
                <Currencies label="Currencies: " data={country.currencies} />
                <Languages label="Languages: " data={country.languages} />
              </ul>
            </div>
            <Borders
              label="Border Countries: "
              country={country}
              countries={countries}
            />
          </div>
        </div>
      </>
    );
  };

  return <main className="country-details">{renderContent()}</main>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    country: state.countries[ownProps.match.params.id],
    countries: Object.values(state.countries),
  };
};

export default connect(mapStateToProps, { fetchCountries })(CountryDetails);
