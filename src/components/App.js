import './scss/App.scss';
import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import history from '../history';

import Header from './Header';
import CountriesList from './CountriesList/';
import CountryDetails from './CountryDetails';
import useTheme from '../hooks/useTheme';

const App = () => {
  const [currentTheme, theme, setTheme] = useTheme();

  return (
    <div className={`container ${currentTheme}`}>
      <div className="wrapper">
        <Router history={history}>
          <Header theme={theme} setTheme={setTheme} />
          <Switch>
            <Route path="/" exact component={CountriesList} />
            <Route path="/details/:id" exact component={CountryDetails} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
