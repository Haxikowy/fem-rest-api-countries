import React from 'react';

const TopLevelDomain = ({ label, data }) => {
  if (data === undefined) return null;

  return (
    <li className="country-details__item">
      <span className="highlighted">{label}</span>
      {data.join`, `}
    </li>
  );
};

export default TopLevelDomain;
