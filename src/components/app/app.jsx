import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import browserHistory from '../../browser-history';

import withLogin from '../../hocs/with-login/with-login';
import Login from './../login/login';
import Favorites from './../favorites/favorites';
import Offer from './../offer/offer';
import Main from './../main/main';

import PrivateRoute from "../private-route/private-route";
import {AppRoute} from '../../constants';

const WrappedLogin = withLogin(Login);

const App = () => {

  const favoriteCards = [];

  return (
    <Router history={ browserHistory }>
      <Switch>

        <Route exact path={ AppRoute.LOGIN }>
          <WrappedLogin/>
        </Route>

        <PrivateRoute
          exact
          path={ AppRoute.FAVORITES }
          render={ () => <Favorites offers={ favoriteCards } /> }
        />

        <Route exact path={ `${AppRoute.OFFER}/:id?` }
          render={(props) =>
            <Offer {...props} />
          }
        />

        {/* не будем использовать 404, при любых не корректных данных отрисовать Main */}
        <Route path={ AppRoute.ROOT }>
          <Main />
        </Route>

      </Switch>
    </Router>
  );
};

export default App;
