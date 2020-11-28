import React from 'react';
import renderer from 'react-test-renderer';
import MainEmpty from './main-empty';
import {City} from '../../test-data/test-data';

it(`Component rendered correctly -> MainEmpty`, () => {
  const tree = renderer.create(
      <MainEmpty
        currentCity={ City.COLOGNE }
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
