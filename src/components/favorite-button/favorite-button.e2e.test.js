import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {FavoriteButton} from './favorite-button';

import {AuthorizationStatus} from '../../constants';
import {FavoriteButtonProperty} from '../../test-data/test-data';

configure({adapter: new Adapter()});

describe(`FavoriteButton behavior`, () => {
  it(`when authorization status is AUTH`, () => {

    const redirectToLoginPage = jest.fn();
    const changeOfferStatus = jest.fn();
    const authorizationStatus = AuthorizationStatus.AUTH;

    const wrapper = shallow(
        <FavoriteButton
          isFavorite={ true }
          className={ FavoriteButtonProperty.Property.CLASS_NAME }
          buttonWidth={ FavoriteButtonProperty.Property.WIDTH }
          buttonHeight={ FavoriteButtonProperty.Property.WIDTH }
          authorizationStatus={ authorizationStatus }
          id={ 1 }
          redirectToLoginPage={ redirectToLoginPage }
          changeOfferStatus={ changeOfferStatus }
        />
    );

    const button = wrapper.find(`button`);

    button.simulate(`click`);

    expect(changeOfferStatus).toHaveBeenCalledTimes(1);
    expect(redirectToLoginPage).toHaveBeenCalledTimes(0);

  });

  it(`when authorization status is NO_AUTH`, () => {

    const redirectToLoginPage = jest.fn();
    const changeOfferStatus = jest.fn();
    const authorizationStatus = AuthorizationStatus.NO_AUTH;

    const wrapper = shallow(
        <FavoriteButton
          isFavorite={ true }
          className={ FavoriteButtonProperty.Property.CLASS_NAME }
          buttonWidth={ FavoriteButtonProperty.Property.WIDTH }
          buttonHeight={ FavoriteButtonProperty.Property.WIDTH }
          authorizationStatus={ authorizationStatus }
          id={ 1 }
          redirectToLoginPage={ redirectToLoginPage }
          changeOfferStatus={ changeOfferStatus }
        />
    );

    const button = wrapper.find(`button`);

    button.simulate(`click`);

    expect(changeOfferStatus).toHaveBeenCalledTimes(0);
    expect(redirectToLoginPage).toHaveBeenCalledTimes(1);

  });
});
