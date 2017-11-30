/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './HomePage';
import CarSelectPage from '../containers/CarSelectPage';
import CarOfWeekPage from '../containers/CarOfWeekPage';
import CarDetailPage from '../containers/CarDetailPage';

import NotFoundPage from './NotFoundPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div>
        <header className="bs-docs-nav navbar navbar-default navbar-static-top" role="banner">
        <div className="container">
          <div className="navbar-collapse bs-navbar-collapse collapse">
              <ul className="nav navbar-nav" id="top" role="navigation">
                <li>
                <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
                </li>
                <li>
                <NavLink to="/search" activeStyle={activeStyle}>Search</NavLink>
                </li>
                <li>
                <NavLink to="/carOfWeek" activeStyle={activeStyle}>Car of Week</NavLink>
                </li>
              </ul>
          </div>        
        </div>
        </header>
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/search" component={CarSelectPage} />          
            <Route path="/carOfWeek" component={CarOfWeekPage} />
            <Route path="/make/model/:id" component={CarDetailPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
