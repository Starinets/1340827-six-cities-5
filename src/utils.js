import {
  MAX_REVIEWS_ON_PAGE,
  RATING_MULTIPLICATOR,
  SortList
} from './constants';

const transformRatingToWidth = (rating) =>
  `${ Math.trunc(rating) * RATING_MULTIPLICATOR }%`;

const formatDateToMonthYear = (date) => {
  const options = {
    month: `long`,
    year: `numeric`,
  };

  date = new Date(date);

  return date.toLocaleString(`en-US`, options);
};

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const sortOfferListBy = {
  [SortList.POPULAR]: (offers) => offers,
  [SortList.PRICE_HIGH_TO_LOW]: (offers) => offers.sort((a, b) => b.price - a.price),
  [SortList.PRICE_LOW_TO_HIGH]: (offers) => offers.sort((a, b) => a.price - b.price),
  [SortList.TOP_RATED_FIRST]: (offers) => offers.sort((a, b) => b.rating - a.rating)
};

const adaptOfferToClient = (offer) => {
  if (!offer) {
    return offer;
  }

  return {
    id: offer.id,
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    image: offer.preview_image,
    adultsCount: offer.max_adults,
    name: offer.title,
    type: offer.type,
    price: offer.price,
    bedroomsCount: offer.bedrooms,
    features: offer.goods,
    description: offer.description,
    city: offer.city,
    rating: offer.rating,
    location: offer.location,
    images: offer.images,
    additions: offer.goods,
    host: {
      id: offer.host.id,
      isPro: offer.host.is_pro,
      name: offer.host.name,
      avatar: offer.host.avatar_url
    }
  };
};

const adaptOffersToClient = (offers) => {
  return offers.map((offer) => adaptOfferToClient(offer));
};

const getCurrentCityOfferList = (offers, currentCity) => {
  return offers.filter((offer) => offer.city.name === currentCity);
};

const adaptReviewsToClient = (reviews) => {
  return reviews.map((review) => ({
    id: review.id,
    rating: review.rating,
    text: review.comment,
    date: review.date,
    user: {
      id: review.user.id,
      isPro: review.user.is_pro,
      name: review.user.name,
      avatar: review.user.avatar_url
    }
  }))
  .sort((a, b) => Date.parse(a.date) < Date.parse(b.date) ? 1 : -1)
  .slice(0, MAX_REVIEWS_ON_PAGE);
};

const updateOffer = (offers, newOffer) => {
  const index = offers.findIndex((offer) => offer.id === newOffer.id);

  if (index !== -1) {
    return [
      ...offers.slice(0, index),
      newOffer,
      ...offers.slice(index + 1)
    ];
  }

  return offers;
};

const updateFavorite = (offers, newOffer) => {
  const index = offers.findIndex((offer) => offer.id === newOffer.id);
  if (index !== -1) {
    return [
      ...offers.slice(0, index),
      ...offers.slice(index + 1)
    ];
  }
  return offers;
};

export {
  transformRatingToWidth,
  formatDateToMonthYear,
  extend,
  sortOfferListBy,
  adaptOfferToClient,
  adaptOffersToClient,
  getCurrentCityOfferList,
  adaptReviewsToClient,
  updateOffer,
  updateFavorite
};
