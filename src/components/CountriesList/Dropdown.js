import '../scss/Dropdown.scss';
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { connect } from 'react-redux';
import { selectRegion, resetRendered } from '../../actions';

const regions = [
  { name: 'Filter by Region', value: '' },
  { name: 'Africa', value: 'Africa' },
  { name: 'America', value: 'Americas' },
  { name: 'Asia', value: 'Asia' },
  { name: 'Europe', value: 'Europe' },
  { name: 'Oceania', value: 'Oceania' },
];

const Dropdown = ({ selectedRegion, selectRegion, resetRendered }) => {
  const [active, setActive] = useState(false);
  const showDropdown = active ? 'active' : '';
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = e => {
      if (ref.current.contains(e.target)) {
        return;
      }

      setActive(false);
    };

    document.body.addEventListener('click', onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderList = () => {
    return regions.map((region, i) => {
      if (region.value === selectedRegion.value) return null;
      return (
        <li
          tabIndex="0"
          onKeyPress={e => {
            if (e.key === 'Enter') {
              selectRegion(region);
              resetRendered();
            }
          }}
          onClick={() => {
            selectRegion(region);
            resetRendered();
          }}
          key={i}
          className="dropdown__item">
          {region.name}
        </li>
      );
    });
  };

  return (
    <div
      tabIndex="0"
      ref={ref}
      onKeyPress={e => (e.key === 'Enter' ? setActive(!active) : null)}
      onClick={() => setActive(!active)}
      className={`dropdown ${showDropdown}`}>
      <div className="dropdown__text">
        {selectedRegion.name || 'Filter by Region'}
        <FontAwesomeIcon className="icon" icon={solid('angle-down')} />
      </div>
      <ul className={`dropdown__list`}>{renderList()}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { selectedRegion: state.selectedRegion };
};

export default connect(mapStateToProps, { selectRegion, resetRendered })(
  Dropdown
);
