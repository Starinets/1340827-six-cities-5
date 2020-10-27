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

export {
  transformRatingToWidth,
  formatDateToMonthYear
};
