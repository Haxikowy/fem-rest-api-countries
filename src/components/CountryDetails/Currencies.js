import React from 'react';

const Currencies = ({ label, data }) => {
  if (data === undefined) return null;

  return (
    <li className="country-details__item">
      <span className="highlighted">{label}</span>
      {data.map(currency => currency.name).join`, `}
    </li>
  );
};

export default Currencies;
