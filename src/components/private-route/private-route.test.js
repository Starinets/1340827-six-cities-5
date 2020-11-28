import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {PrivateRoute} from './private-route';
import {
  emptyFunction,
  AuthorizationStatus
} from '../../test-data/test-data';

describe(`Component rendered correctly -> PrivateRoute`, () => {
  it(`with AuthorizationStatus.AUTH`, () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(
        <PrivateRoute
          authorizationStatus={ AuthorizationStatus.AUTH }
          exact={ true }
          path={`/`}
          render={ emptyFunction }
        />
    );
    expect(tree).toMatchSnapshot();
  });

  it(`with AuthorizationStatus.NO_AUTH`, () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(
        <PrivateRoute
          authorizationStatus={ AuthorizationStatus.NO_AUTH }
          exact={ true }
          path={`/`}
          render={ emptyFunction }
        />
    );
    expect(tree).toMatchSnapshot();
  });
});
