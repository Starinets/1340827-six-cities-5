import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ReviewForm from './review-form';
import {
  emptyFunction
} from '../../test-data/test-data';

describe(`Component rendered correctly -> ReviewForm`, () => {
  it(`with data and the Form isn't disabled`, () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(
        <ReviewForm
          rating={ 5 }
          review={ `some comment from user` }
          isFormDisabled={ false }
          onRatingChange={ emptyFunction }
          onTextAreaChange={ emptyFunction }
          onSubmit={ emptyFunction }
        />
    );
    expect(tree).toMatchSnapshot();
  });

  it(`without data and the Form isn't disabled`, () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(
        <ReviewForm
          rating={ 0 }
          review={ `` }
          isFormDisabled={ false }
          onRatingChange={ emptyFunction }
          onTextAreaChange={ emptyFunction }
          onSubmit={ emptyFunction }
        />
    );
    expect(tree).toMatchSnapshot();
  });

  it(`when form is disabled`, () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(
        <ReviewForm
          rating={ 5 }
          review={ `` }
          isFormDisabled={ true }
          onRatingChange={ emptyFunction }
          onTextAreaChange={ emptyFunction }
          onSubmit={ emptyFunction }
        />
    );
    expect(tree).toMatchSnapshot();
  });
});
