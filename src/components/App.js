import './scss/App.scss';
import React, { useEffect, useState } from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import history from '../history';

import Header from './Header';
import CountriesList from './CountriesList/';
import CountryDetails from './CountryDetails';

const App = () => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    setTheme(window.matchMedia('(prefers-color-scheme: light)').matches);
  }, []);

  const containerClassName = theme ? 'light-theme' : 'dark-theme';

  return (
    <div className={`container ${containerClassName}`}>
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
