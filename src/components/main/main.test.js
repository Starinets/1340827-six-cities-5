import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {Main} from './main';
import {
  City,
  emptyFunction,
  SortList,
  Offers,
} from '../../test-data/test-data';

describe(`Component rendered correctly -> Main`, () => {
  it(`with offers`, () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(
        <Main
          offers={ Offers }
          currentCity={ City.COLOGNE }
          onCityClick={ emptyFunction }
          currentSorting={ SortList.PRICE_HIGH_TO_LOW }
          onSortingClick={ emptyFunction }
        />
    );
    expect(tree).toMatchSnapshot();
  });

  it(`without offers`, () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(
        <Main
          offers={ [] }
          currentCity={ City.COLOGNE }
          onCityClick={ emptyFunction }
          currentSorting={ SortList.TOP_RATED_FIRST }
          onSortingClick={ emptyFunction }
        />
    );
    expect(tree).toMatchSnapshot();
  });
});
