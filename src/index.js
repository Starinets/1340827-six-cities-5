import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";

import App from './components/app/app';

import mock from './mocks/offers';
import {reducer} from "./store/reducer";

const MockState = {
  rentalOffersCount: 32,
  currentCity: `Amsterdam`
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        {...MockState}
        offers={mock}
      />
    </Provider>,
    document.getElementById(`root`)
);
