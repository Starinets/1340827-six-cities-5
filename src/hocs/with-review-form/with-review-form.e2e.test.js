import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';

import withReviewForm from './with-review-form';

import {mockStore} from '../../test-data/test-store';
import {emptyFunction} from '../../test-data/test-data';

configure({adapter: new Adapter()});

const MockComponent = () => (<div/>);

const MockComponentWrapped = withReviewForm(MockComponent);

it(`Property state withReviewForm`, () => {
  const wrapper = shallow(
      <Provider store={mockStore}>
        <MockComponentWrapped
          rating={ 5 }
          review={ `test` }
          isFormDisabled={ true }
          authorizationStatus={ `AUTH` }
          onChangeRating={ emptyFunction }
          onChangeTextArea={ emptyFunction }
          onSubmit={ emptyFunction }
          reviewFormState={ `DEFAULT` }
          changeRating={ emptyFunction }
        />
      </Provider>
  );

  expect(wrapper.find(MockComponentWrapped).props().review).toEqual(`test`);
  expect(wrapper.find(MockComponentWrapped).props().rating).toEqual(5);
  expect(wrapper.find(MockComponentWrapped).props().isFormDisabled).toEqual(true);

});
