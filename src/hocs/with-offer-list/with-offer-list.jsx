import React from 'react';
import {connect} from 'react-redux';
import {setHoveredOffer} from '../../store/action';

const withOfferList = (Component) => {
  const WithOfferList = (props) => {

    return (
      <Component
        { ...props }
      />
    );
  }

  const mapDispatchToProps = (dispatch) => ({
    changeHoveredOffer(hoveredOffer) {
      dispatch(setHoveredOffer(hoveredOffer));
    }
  });

  return connect(null, mapDispatchToProps)(WithOfferList);
};

export default withOfferList;
