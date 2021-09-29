import React from 'react';

const Detail = ({ label, data }) => {
  if (data === undefined) return null;

  return (
    <li className="country-details__item">
      <span className="highlighted">{label}</span>
      {data}
    </li>
  );
};

export default Detail;
