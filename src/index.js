import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

const MockState = {
  rentalOffersCount: 32,
  currentCity: `Amsterdam`
};

ReactDOM.render(
    <App
      {...MockState}
    />,
    document.getElementById(`root`)
);
