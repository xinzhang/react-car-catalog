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
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to="/search" activeStyle={activeStyle}>Search</NavLink>
          {' | '}
          <NavLink to="/carOfWeek" activeStyle={activeStyle}>Car of Week</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={CarSelectPage} />          
          <Route path="/carOfWeek" component={CarOfWeekPage} />
          <Route path="/make/model/:id" component={CarDetailPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
