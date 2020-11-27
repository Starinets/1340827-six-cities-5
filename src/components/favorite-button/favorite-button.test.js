import React from 'react';
import renderer from 'react-test-renderer';
import {FavoriteButton} from './favorite-button';
import {
  emptyFunction,
  FavoriteButtonProperty,
  AuthorizationStatus
} from '../../test-data/test-data';

describe(`Component rendered correctly -> FavoriteButton`, () => {
  it(`the offer is in the favorite list, authorization is AUTH`, () => {
    const tree = renderer.create(
        <FavoriteButton
          isFavorite={ true }
          className={ FavoriteButtonProperty.PlaceCard.CLASS_NAME }
          buttonWidth={ FavoriteButtonProperty.PlaceCard.WIDTH }
          buttonHeight={ FavoriteButtonProperty.PlaceCard.WIDTH }
          authorizationStatus={ AuthorizationStatus.AUTH }
          id={ 1 }
          redirectToLoginPage={ emptyFunction }
          changeOfferStatus={ emptyFunction }
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`the offer isn't in the favorite list, authorization is AUTH`, () => {
    const tree = renderer.create(
        <FavoriteButton
          isFavorite={ false }
          className={ FavoriteButtonProperty.PlaceCard.CLASS_NAME }
          buttonWidth={ FavoriteButtonProperty.PlaceCard.WIDTH }
          buttonHeight={ FavoriteButtonProperty.PlaceCard.WIDTH }
          authorizationStatus={ AuthorizationStatus.AUTH }
          id={ 1 }
          redirectToLoginPage={ emptyFunction }
          changeOfferStatus={ emptyFunction }
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`the offer is in the favorite list, authorization is NO_AUTH`, () => {
    const tree = renderer.create(
        <FavoriteButton
          isFavorite={ true }
          className={ FavoriteButtonProperty.PlaceCard.CLASS_NAME }
          buttonWidth={ FavoriteButtonProperty.PlaceCard.WIDTH }
          buttonHeight={ FavoriteButtonProperty.PlaceCard.WIDTH }
          authorizationStatus={ AuthorizationStatus.NO_AUTH }
          id={ 1 }
          redirectToLoginPage={ emptyFunction }
          changeOfferStatus={ emptyFunction }
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`the offer isn't in the favorite list, authorization is NO_AUTH`, () => {
    const tree = renderer.create(
        <FavoriteButton
          isFavorite={ false }
          className={ FavoriteButtonProperty.PlaceCard.CLASS_NAME }
          buttonWidth={ FavoriteButtonProperty.PlaceCard.WIDTH }
          buttonHeight={ FavoriteButtonProperty.PlaceCard.WIDTH }
          authorizationStatus={ AuthorizationStatus.NO_AUTH }
          id={ 1 }
          redirectToLoginPage={ emptyFunction }
          changeOfferStatus={ emptyFunction }
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
