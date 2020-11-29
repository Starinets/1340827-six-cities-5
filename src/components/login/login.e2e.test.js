import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Login from './login';

import {emptyFunction} from '../../test-data/test-data';

configure({adapter: new Adapter()});

describe(`Login page behavior`, () => {
  it(`when form submit`, () => {
    const onFormSubmit = jest.fn();

    const wrapper = shallow(
        <Login
          onFormSubmit={ onFormSubmit }
          onEmailChange={ emptyFunction }
          onPasswordChange={ emptyFunction }
          email={ `` }
          password={ `` }
          onCityClick={ emptyFunction }
        />
    );

    const form = wrapper.find(`form`);
    form.simulate(`submit`, {preventDefault() {}});

    expect(onFormSubmit).toHaveBeenCalledTimes(1);
  });

  it(`when change email`, () => {
    const onEmailChange = jest.fn();

    const wrapper = shallow(
        <Login
          onFormSubmit={ emptyFunction }
          onEmailChange={ onEmailChange }
          onPasswordChange={ emptyFunction }
          email={ `` }
          password={ `` }
          onCityClick={ emptyFunction }
        />
    );

    const input = wrapper.find(`input`);

    input.at(0).simulate(`change`, {target: {value: `email@domain.com`}});

    expect(onEmailChange).toHaveBeenCalledTimes(1);
  });

  it(`when change password`, () => {
    const onPasswordChange = jest.fn();

    const wrapper = shallow(
        <Login
          onFormSubmit={ emptyFunction }
          onEmailChange={ emptyFunction }
          onPasswordChange={ onPasswordChange }
          email={ `` }
          password={ `` }
          onCityClick={ emptyFunction }
        />
    );

    const input = wrapper.find(`input`);

    input.at(1).simulate(`change`, {target: {value: `123`}});

    expect(onPasswordChange).toHaveBeenCalledTimes(1);
  });

  it(`when 'Amsterdam' click`, () => {
    const onCityClick = jest.fn();

    const wrapper = shallow(
        <Login
          onFormSubmit={emptyFunction}
          onEmailChange={emptyFunction}
          onPasswordChange={emptyFunction}
          email={``}
          password={``}
          onCityClick={ onCityClick }
        />
    );

    const link = wrapper.find(`.locations__item-link`);

    link.simulate(`click`);

    expect(onCityClick).toHaveBeenCalledTimes(1);
  });
});
