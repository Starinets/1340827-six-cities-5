import React from 'react';
import PropTypes from 'prop-types';

import Main from './../main/main';

const App = (props) => {
  return (
    <Main
      {...props}
    />
  );
};

App.propTypes = {
  rentalOffersCount: PropTypes.number.isRequired,
  currentCity: PropTypes.string.isRequired
};

export default App;
