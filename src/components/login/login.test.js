import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {emptyFunction} from '../../test-data/test-data';
import Login from './login';

it(`Component rendered correctly -> Login`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <Login
        onFormSubmit={ emptyFunction }
        onEmailChange={ emptyFunction }
        onPasswordChange={ emptyFunction }
        email={ `` }
        password={ `` }
        onCityClick={ emptyFunction }
      />
  );
  expect(tree).toMatchSnapshot();
});
