import '../scss/Loader.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Loader = () => {
  return (
    <div className="loader__container">
      <FontAwesomeIcon icon={solid('circle-notch')} className="loader" />
    </div>
  );
};

export default Loader;
