import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

const MockState = {
  rentalOffersCount: 32,
  currentCity: `Amsterdam`
};

ReactDOM.render(
    <App
      rentalOffersCount={MockState.rentalOffersCount}
      currentCity={MockState.currentCity}
    />,
    document.getElementById(`root`)
);
