import React from 'react';
import * as Type from '../../types';
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

import OfferCard from './../offer-card/offer-card';

import {
  OfferPlace,
  OfferListClassName
} from '../../constants';

class OfferList extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const className = this.props.offerPlace === OfferPlace.CITIES
      ? OfferListClassName.CITIES
      : OfferListClassName.NEIGHBORHOOD;

    const offers = this.props.offers.map((offer) => {
      return (
        <OfferCard
          key = { offer.id }
          offer = { offer }
          offerPlace = { this.props.offerPlace }
          onMouseOver = { this.props.changeHoveredOffer }
        />
      );
    });

    return (
      <div className={ className }>
        { offers }
      </div>
    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  changeHoveredOffer(hoveredOffer) {
    dispatch(ActionCreator.setHoveredOffer(hoveredOffer));
  }
});

OfferList.propTypes = {
  offers: Type.OFFERS.isRequired,
  offerPlace: Type.OFFER_PLACE.isRequired,
  changeHoveredOffer: Type.FUNCTION.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(OfferList);
