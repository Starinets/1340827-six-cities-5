import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from './header';
import {BrowserRouter as Router} from 'react-router-dom';
import {authInfo} from '../../test-data/test-data';

describe(`Component rendered correctly -> Header`, () => {
  it(`Authorized user`, () => {
    const tree = renderer.create(
        <Router>
          <Header
            authInfo={ authInfo.AuthorizedUser }
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Unauthorized user`, () => {
    const tree = renderer.create(
        <Router>
          <Header
            authInfo={ authInfo.UnauthorizedUser }
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});


