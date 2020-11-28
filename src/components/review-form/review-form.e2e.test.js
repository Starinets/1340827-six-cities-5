import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReviewForm from './review-form';

import {emptyFunction} from '../../test-data/test-data';

configure({adapter: new Adapter()});

describe(`ReviewForm behavior`, () => {
  it(`on submit`, () => {
    const onSubmit = jest.fn();

    const wrapper = shallow(
        <ReviewForm
          rating={ 1 }
          review={ `` }
          isFormDisabled={ false }
          onRatingChange={ emptyFunction }
          onTextAreaChange = { emptyFunction }
          onSubmit={ onSubmit }
        />
    );

    const form = wrapper.find(`form`);
    form.simulate(`submit`, {preventDefault() {}});
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it(`on textarea changes`, () => {
    const onTextAreaChange = jest.fn();

    const wrapper = shallow(
        <ReviewForm
          rating={ 1 }
          review={ `` }
          isFormDisabled={ false }
          onRatingChange={ emptyFunction }
          onTextAreaChange = { onTextAreaChange }
          onSubmit={ emptyFunction }
        />
    );

    const textArea = wrapper.find(`textarea`);
    textArea.simulate(`change`, {target: {value: `email@domain.com`}});
    expect(onTextAreaChange).toHaveBeenCalledTimes(1);
  });

  it(`on rating changes`, () => {
    const onRatingChange = jest.fn();

    const wrapper = shallow(
        <ReviewForm
          rating={ 1 }
          review={ `` }
          isFormDisabled={ false }
          onRatingChange={ onRatingChange }
          onTextAreaChange = { emptyFunction }
          onSubmit={ emptyFunction }
        />
    );

    const inputs = wrapper.find(`input`);

    inputs.forEach((input) => {
      input.simulate(`change`);
    });

    expect(onRatingChange).toHaveBeenCalledTimes(inputs.length);
  });
});
