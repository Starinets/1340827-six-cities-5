import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MainContent from './main-content';
import {
  emptyFunction,
  City,
  SortList,
  Offers} from '../../test-data/test-data';

it(`Component rendered correctly -> Main`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <MainContent
        cityOffers={ Offers }
        currentCity={ City.HAMBURG }
        currentSorting={ SortList.POPULAR }
        onSortingClick={ emptyFunction }
      />
  );
  expect(tree).toMatchSnapshot();
});
