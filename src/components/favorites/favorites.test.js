import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Favorites from './favorites';
import {BrowserRouter as Router} from 'react-router-dom';
import {
  City,
  emptyFunction,
  offers
} from '../../test-data/test-data';

const favoriteList = [
  {
    city: City.HAMBURG,
    favorites: offers
  },
  {
    city: City.BRUSSELS,
    favorites: offers
  }
];

describe(`Component rendered correctly -> Favorites`, () => {

  it(`Favorites isn't empty`, () => {

    const renderer = new ShallowRenderer();

    const tree = renderer.render(
        <Router>
          <Favorites
            favoriteList={ favoriteList }
            onCityClick={ emptyFunction }
          />
        </Router>
    );
    expect(tree).toMatchSnapshot();
  });

  it(`Favorites is empty`, () => {

    const renderer = new ShallowRenderer();

    const tree = renderer.render(
        <Router>
          <Favorites
            favoriteList={ [] }
            onCityClick={ emptyFunction }
          />
        </Router>
    );
    expect(tree).toMatchSnapshot();
  });
});

