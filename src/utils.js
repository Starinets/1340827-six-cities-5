import {SortList} from './constants';

const RATING_MULTIPLICATOR = 20;

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

const sortOfferListBy = {
  [SortList.POPULAR]: (offers) => offers,
  [SortList.PRICE_HIGH_TO_LOW]: (offers) => offers.sort((a, b) => b.price - a.price),
  [SortList.PRICE_LOW_TO_HIGH]: (offers) => offers.sort((a, b) => a.price - b.price),
  [SortList.TOP_RATED_FIRST]: (offers) => offers.sort((a, b) => b.rating - a.rating)
};

const adaptDataToClient = (offers) => {
  return offers.map((offer) => {
    const adaptedData = {
      id: offer.id,
      city: offer.city,
      location: offer.location,
      isPremium: offer.is_premium,
      image: offer.preview_image,
      price: offer.price,
      isFavorite: offer.is_favorite,
      rating: offer.rating,
      name: offer.title,
      type: offer.type,
      bedroomsCount: offer.bedrooms,
      adultsCount: offer.max_adults,
      description: offer.description,
      host: {
        id: offer.host.id,
        name: offer.host.name,
        isPro: offer.host.is_pro,
        avatar: offer.host.avatar_url
      },
      images: offer.images,
      features: offer.goods,
    };

    return adaptedData;
  });
};

const getCurrentCityOfferList = (offers, currentCity) => {
  return offers.filter((offer) => offer.city.name === currentCity);
};

export {
  transformRatingToWidth,
  formatDateToMonthYear,
  sortOfferListBy,
  adaptDataToClient,
  getCurrentCityOfferList
};
