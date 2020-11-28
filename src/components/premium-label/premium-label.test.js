import React from 'react';
import renderer from 'react-test-renderer';
import PremiumLabel from './premium-label';

describe(`Component rendered correctly -> PremiumLabel`, () => {
  it(`is true`, () => {
    const tree = renderer.create(
        <PremiumLabel
          isPremium={ true }
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`is false`, () => {
    const tree = renderer.create(
        <PremiumLabel
          isPremium={ false }
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
