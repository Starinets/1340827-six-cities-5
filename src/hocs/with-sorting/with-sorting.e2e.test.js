import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';

import withSorting from './with-sorting';

import {mockStore} from '../../test-data/test-store';
import {
  emptyFunction,
  SortList
} from '../../test-data/test-data';

configure({adapter: new Adapter()});

const MockComponent = () => (<div/>);

const MockComponentWrapped = withSorting(MockComponent);

it(`Property isOpen should be FALSE`, () => {
  const wrapper = shallow(
      <Provider store={mockStore}>
        <MockComponentWrapped
          currentSorting={ SortList.POPULAR }
          isOpen={ false }
          onSortingClick={ emptyFunction }
          onListItemClick={ emptyFunction }
          onListNameClick={ emptyFunction }
        />
      </Provider>
  );

  expect(wrapper.find(MockComponentWrapped).props().isOpen).toEqual(false);
  expect(wrapper.find(MockComponentWrapped).props().currentSorting).toEqual(SortList.POPULAR);
});
