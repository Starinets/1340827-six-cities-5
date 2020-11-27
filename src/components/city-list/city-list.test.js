import React from 'react';
import renderer from 'react-test-renderer';
import CityList from './city-list';
import {BrowserRouter as Router} from 'react-router-dom';
import {City, emptyFunction} from '../../test-data/test-data';

it(`Component rendered correctly -> CityList`, () => {
  const tree = renderer.create(
      <Router>
        <CityList
          currentCity={ City.AMSTERDAM }
          onCityClick={ emptyFunction }
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
