import {loadOfferList} from './action';

const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadOfferList(data)))
);

export {fetchOfferList};
