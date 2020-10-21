import React from 'react';
import * as Type from '../../types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './../login/login';
import Favorites from './../favorites/favorites';
import Offer from './../offer/offer';
import Main from './../main/main';

const App = (props) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer/:id">
          <Offer />
        </Route>
        {/* не будем использовать 404, при любых не корректных данных отрисовать Main */}
        <Route path="/">
          <Main {...props} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  rentalOffersCount: Type.COUNT.isRequired,
  currentCity: Type.CITY.isRequired,
  offers: Type.OFFERS.isRequired
};

export default App;
