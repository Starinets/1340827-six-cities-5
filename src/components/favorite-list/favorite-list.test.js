import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import FavoriteList from './favorite-list';
import {
  emptyFunction,
  City,
  offers
} from '../../test-data/test-data';

const favoriteList = [
  {
    city: City.PARIS,
    favorites: offers
  },
  {
    city: City.DUSSELDORF,
    favorites: offers
  },
];

it(`Component rendered correctly -> FavoriteList`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <FavoriteList
        favoriteList={ favoriteList }
        onCityClick={ emptyFunction }
      />
  );
  expect(tree).toMatchSnapshot();
});
