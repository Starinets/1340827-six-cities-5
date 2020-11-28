import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import withReviewsForm from './with-review-form';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {mockStore} from '../../test-data/test-store';
import {
  emptyFunction
} from '../../test-data/test-data';

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      { children }
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withReviewsForm(MockComponent);

it(`HOC rendered correctly -> withReviewForm`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <Provider store={ mockStore }>
        <MockComponentWrapped
          rating={ 5 }
          review={ `some comment from user` }
          isFormDisabled={ false }
          onRatingChange={ emptyFunction }
          onTextAreaChange={ emptyFunction }
          onSubmit={ emptyFunction }
        />
      </Provider>
  );

  expect(tree).toMatchSnapshot();
});
