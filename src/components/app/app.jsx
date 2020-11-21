import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './../login/login';
import Favorites from './../favorites/favorites';
import Offer from './../offer/offer';
import Main from './../main/main';

const App = () => {

  const favoriteCards = [];

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites
            offers = { favoriteCards }
          />
        </Route>
        <Route exact path="/offer/:id"
          render={() =>
            <Offer
              offer = {{}}
              reviews = {[]}
              offers = {[]}
            />
          }
        />
        {/* не будем использовать 404, при любых не корректных данных отрисовать Main */}
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
