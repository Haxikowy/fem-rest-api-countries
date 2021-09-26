import './scss/Header.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Header = props => {
  const renderButtonText = () => {
    if (props.theme) {
      return (
        <>
          <FontAwesomeIcon icon={solid('moon')} />
          Dark Mode
        </>
      );
    } else if (!props.theme) {
      return (
        <>
          <FontAwesomeIcon icon={solid('sun')} />
          Light Mode
        </>
      );
    }
  };

  return (
    <header className="header">
      <div className="wrapper">
        <Link to="/" className="header__logo">
          Where in the world?
        </Link>
        <button
          onClick={() => props.setTheme(!props.theme)}
          className="header__theme-switch">
          {renderButtonText()}
        </button>
      </div>
    </header>
  );
};

export default Header;
