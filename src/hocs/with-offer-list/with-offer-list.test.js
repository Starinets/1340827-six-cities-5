import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import withOfferList from './with-offer-list';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {mockStore} from '../../test-data/test-store';

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

const MockComponentWrapped = withOfferList(MockComponent);

it(`HOC rendered correctly -> withOfferList`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <Provider store={ mockStore }>
        <MockComponentWrapped>
          <React.Fragment />
        </MockComponentWrapped>
      </Provider>
  );

  expect(tree).toMatchSnapshot();
});
