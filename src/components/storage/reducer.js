import offers from "../mocks/offers";
import {
  City,
  Filter
} from "../../constants";

const initialState = {
  offers,
  cities: Object.values(City),
  currentCity: City.PARIS,
  filters: Object.values(Filter),
  activeFilter: Filter.POPULAR
};

const reducer = (state = initialState, action) => {

  switch (action) {

  }

  return state;
};

export {reducer};
