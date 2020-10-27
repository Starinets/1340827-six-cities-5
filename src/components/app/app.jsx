import React from 'react';
import * as Type from '../../types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './../login/login';
import Favorites from './../favorites/favorites';
import Offer from './../offer/offer';
import Main from './../main/main';

export default class App extends React.PureComponent {

  constructor(props) {
    super();

    this.state = {
      offers: props.offers,
      rentalOffersCount: props.rentalOffersCount,
      currentCity: props.currentCity,
      currentOffer: undefined
    };

    this.onCardMouseEnter = this.onCardMouseEnter.bind(this);
  }

  onCardMouseEnter(currentOffer) {
    this.setState({currentOffer});
  }

  render() {

    const {
      offers,
      rentalOffersCount,
      currentCity,
      currentOffer
    } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/favorites">
            <Favorites
              offers = { offers }
              onCardMouseEnter = { this.onCardMouseEnter }
            />
          </Route>
          <Route exact path="/offer/:id">
            <Offer
              offer = { currentOffer }
              offers = { offers }
              onCardMouseEnter = { this.onCardMouseEnter }
            />
          </Route>
          {/* не будем использовать 404, при любых не корректных данных отрисовать Main */}
          <Route path="/">
            <Main
              offers = { offers }
              rentalOffersCount = { rentalOffersCount }
              currentCity = { currentCity }
              onCardMouseEnter = { this.onCardMouseEnter }
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  rentalOffersCount: Type.COUNT.isRequired,
  currentCity: Type.CITY.isRequired,
  offers: Type.OFFERS.isRequired
};
