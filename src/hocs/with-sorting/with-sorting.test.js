import React from 'react';
import renderer from 'react-test-renderer';
import withSorting from './with-sorting';
import {
  emptyFunction
} from '../../test-data/test-data';

const MockComponent = () => {
  return (
    <div/>
  );
};

const MockComponentWrapped = withSorting(MockComponent);

it(`HOC rendered correctly -> withSorting`, () => {
  const tree = renderer.create(
      <MockComponentWrapped
        isOpen={ true }
        onListItemClick={ emptyFunction }
        onListNameClick={ emptyFunction }
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
