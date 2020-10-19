import {
  number,
  string,
  bool,
  arrayOf,
  oneOf,
  shape
} from 'prop-types';

const COUNT = number;

const CITY = oneOf([
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
]);

const USER = shape({
  name: string.isRequired,
  isPro: bool.isRequired,
  avatar: string.isRequired
});

const FEATURE = oneOf([
  `Wi-Fi`,
  `Washing machine`,
  `Towels`,
  `Heating`,
  `Coffee machine`,
  `Baby seat`,
  `Kitchen`,
  `Dishwasher`,
  `Cable TV`,
  `Fridge`
]);

const FEATURES = arrayOf(
    FEATURE
);

const REVIEW = shape({
  user: USER.isRequired,
  rate: number.isRequired,
  text: string.isRequired,
  date: string.isRequired,
});

const REVIEWS = arrayOf(
    REVIEW
);

const OFFER = shape({
  id: number.isRequired,
  isPremium: bool.isRequired,
  image: string.isRequired,
  price: number.isRequired,
  isFavorite: bool.isRequired,
  rate: number.isRequired,
  name: string.isRequired,
  type: string.isRequired,
  bedroomsCount: number.isRequired,
  adultsCount: number.isRequired,
  host: USER.isRequired,
  images: arrayOf(string).isRequired,
  features: FEATURES.isRequired,
  reviews: REVIEWS.isRequired,
});

const OFFERS = arrayOf(OFFER);

export {
  COUNT,
  CITY,
  USER,
  FEATURE,
  FEATURES,
  REVIEW,
  REVIEWS,
  OFFER,
  OFFERS
};
