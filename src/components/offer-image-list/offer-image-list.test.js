import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import OfferImageList from './offer-image-list';
import {imageList} from '../../test-data/test-data';

it(`Component rendered correctly -> OfferImageList`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <OfferImageList
        imageList={ imageList }
      />
  );
  expect(tree).toMatchSnapshot();
});
