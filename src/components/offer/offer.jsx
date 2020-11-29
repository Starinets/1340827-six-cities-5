import React from 'react';
import * as Type from '../../types';
import {connect} from 'react-redux';

import Preloader from '../preloader/preloader';
import Header from '../header/header';
import PremiumLabel from '../premium-label/premium-label';
import OfferImageList from '../offer-image-list/offer-image-list';
import OfferFeatureList from '../offer-feature-list/offer-feature-list';
import OfferHost from '../offer-host/offer-host';
import OfferReviewList from '../offer-review-list/offer-review-list';
import withOfferList from '../../hocs/with-offer-list/with-offer-list';
import OfferList from '../offer-list/offer-list';
import withReviewForm from '../../hocs/with-review-form/with-review-form';
import ReviewForm from '../review-form/review-form';
import Map from '../map/map';
import FavoriteButton from '../favorite-button/favorite-button';

import {
  getCurrentOfferSelector,
  getReviewsSelector,
  getNeighborhoodsSelector
} from '../../store/selectors';
import {getOfferDetails} from '../../store/api-actions';
import {setHoveredOffer, updateCurrentOffer} from '../../store/action';
import {transformRatingToWidth} from '../../utils';
import {
  MapPlace,
  OfferPlace,
  FavoriteButtonProperty
} from '../../constants';

const OfferListWrapper = withOfferList(OfferList);
const ReviewFormWrapper = withReviewForm(ReviewForm);

class Offer extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.getCurrentOffer(id);
  }

  componentDidUpdate(prevProps) {
    const {id} = this.props.match.params;
    if (prevProps.match.params.id !== id) {
      this.props.getCurrentOffer(id);
    }
  }

  componentWillUnmount() {
    this.props.removeActiveCard();
  }

  render() {

    const SINGULAR_MEANING = 1;
    const {
      offer,
      neighborhoods,
      reviews
    } = this.props;

    if (!offer) {
      return (
        <div className="page">
          <Header />
          <main className="page__main page__main--property">
            <section className="property">
              <Preloader/>
            </section>
          </main>
        </div>
      );
    }

    const width = transformRatingToWidth(offer.rating);

    return (
      <div className="page">
        <Header />

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                <OfferImageList imageList={ offer.images } />
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                <PremiumLabel isPremium={ offer.isPremium } />
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    { offer.name }
                  </h1>
                  <button className={ `property__bookmark-button ${ offer.isFavorite ? `property__bookmark-button--active` : `` } button` } type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                  <FavoriteButton
                    id={ offer.id }
                    className={ FavoriteButtonProperty.Property.CLASS_NAME }
                    buttonWidth={ FavoriteButtonProperty.Property.WIDTH }
                    buttonHeight={ FavoriteButtonProperty.Property.HEIGHT }
                    isFavorite={ offer.isFavorite }
                  />
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={ {width} }></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{ offer.rating }</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    { offer.type }
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    { offer.bedroomsCount <= SINGULAR_MEANING ? `${ offer.bedroomsCount } Bedroom` : `${ offer.bedroomsCount } Bedrooms`}
                  </li>
                  <li className="property__feature property__feature--adults">
                    { offer.adult <= SINGULAR_MEANING ? `Max ${ offer.adultsCount } adult` : `Max ${ offer.adultsCount } adults`}
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{ offer.price }</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    <OfferFeatureList featureList={ offer.features }/>
                  </ul>
                </div>
                <OfferHost offer={ offer } />
                <section className="property__reviews reviews">
                  <OfferReviewList reviewList={ reviews } />
                  <ReviewFormWrapper id = { offer.id }/>
                </section>
              </div>
            </div>
            <Map
              offers = { neighborhoods }
              mapPlace = { MapPlace.OFFER }
            />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighborhood</h2>
              <OfferListWrapper
                offers = { neighborhoods }
                offerPlace = { OfferPlace.NEIGHBORHOOD }
              />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

Offer.propTypes = {
  offer: Type.OFFER,
  reviews: Type.REVIEWS,
  neighborhoods: Type.OFFERS,
  getCurrentOffer: Type.FUNCTION.isRequired,
  removeActiveCard: Type.FUNCTION.isRequired,
  match: Type.MATCH_OFFER_ID.isRequired,
};

const mapStateToProps = (state) => ({
  offer: getCurrentOfferSelector(state),
  reviews: getReviewsSelector(state),
  neighborhoods: getNeighborhoodsSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentOffer(id) {
    dispatch(getOfferDetails(id));
  },
  changeHoveredOffer(hoveredOffer) {
    dispatch(setHoveredOffer(hoveredOffer));
  },
  removeActiveCard() {
    dispatch(updateCurrentOffer(null));
  }
});

export {Offer};
export default connect(mapStateToProps, mapDispatchToProps)(Offer);
