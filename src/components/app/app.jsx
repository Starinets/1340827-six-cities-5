import React from 'react';
import * as Type from '../../types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './../login/login';
import Favorites from './../favorites/favorites';
import Offer from './../offer/offer';
import Main from './../main/main';

const App = ({offers, rentalOffersCount, currentCity}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites
            offers = { offers }
          />
        </Route>
        <Route exact path="/offer/:id"
          render = { ({match}) => (
            <Offer
              offerID = { match.params.id }
              offers = { offers }
            />
          ) }
        />
        {/* не будем использовать 404, при любых не корректных данных отрисовать Main */}
        <Route path="/">
          <Main
            offers = { offers }
            rentalOffersCount = { rentalOffersCount }
            currentCity = { currentCity }
          />
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
