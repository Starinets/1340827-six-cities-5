import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import FavoriteItems from './favorite-items';
import {
  emptyFunction,
  City,
  Offers
} from '../../test-data/test-data';

const favoritesByCity = {
  city: City.DUSSELDORF,
  favorites: Offers
};

it(`Component rendered correctly -> FavoriteItems`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <FavoriteItems
        favoritesByCity={ favoritesByCity }
        onCityGroupClick={ emptyFunction }
      />
  );
  expect(tree).toMatchSnapshot();
});
