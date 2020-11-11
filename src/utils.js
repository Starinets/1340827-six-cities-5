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

const sorting = {
  [SortList.POPULAR]: (offers) => offers,
  [SortList.PRICE_HIGH_TO_LOW]: (offers) => offers.sort((a, b) => b.price - a.price),
  [SortList.PRICE_LOW_TO_HIGH]: (offers) => offers.sort((a, b) => a.price - b.price),
  [SortList.TOP_RATED_FIRST]: (offers) => offers.sort((a, b) => b.rating - a.rating)
};

export {
  transformRatingToWidth,
  formatDateToMonthYear,
  sorting
};
