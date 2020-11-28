import React from 'react';
import renderer from 'react-test-renderer';
import {Map} from './map';
import {
  Offers,
  MapPlace,
  offer
} from '../../test-data/test-data';

describe(`Component rendered correctly -> Map`, () => {
  it(`on the Main page`, () => {
    const div = document.createElement(`div`);
    div.id = `map`;
    document.body.appendChild(div);

    const tree = renderer.create(
        <Map
          offers={ Offers }
          mapPlace={ MapPlace.CITIES }
          hoveredOffer={ offer }
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`on the Offer page`, () => {
    document.getElementById(`map`).remove();
    const div = document.createElement(`div`);
    div.id = `map`;
    document.body.appendChild(div);

    const tree = renderer.create(
        <Map
          offers={ Offers }
          mapPlace={ MapPlace.OFFER }
          hoveredOffer={ offer }
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
