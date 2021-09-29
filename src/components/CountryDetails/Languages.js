import React from 'react';

const Languages = ({ label, data }) => {
  if (data === undefined) return null;

  return (
    <li className="country-details__item">
      <span className="highlighted">{label}</span>
      {data.map(language => language.name).join`, `}
    </li>
  );
};

export default Languages;
