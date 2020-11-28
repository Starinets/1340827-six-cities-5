import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Sorting from './sorting';
import {
  emptyFunction,
  SortList
} from '../../test-data/test-data';

describe(`Component rendered correctly -> Sorting`, () => {
  it(`when the Sort is open`, () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(
        <Sorting
          currentSorting={ SortList.PRICE_HIGH_TO_LOW }
          onSortingClick={ emptyFunction }
          isOpen={ true }
          onListItemClick={ emptyFunction }
          onListNameClick={ emptyFunction }
        />
    );
    expect(tree).toMatchSnapshot();
  });

  it(`when the Sort is close`, () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(
        <Sorting
          currentSorting={ SortList.TOP_RATED_FIRST }
          onSortingClick={ emptyFunction }
          isOpen={ false }
          onListItemClick={ emptyFunction }
          onListNameClick={ emptyFunction }
        />
    );
    expect(tree).toMatchSnapshot();
  });
});
