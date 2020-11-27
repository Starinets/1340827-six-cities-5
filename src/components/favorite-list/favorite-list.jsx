import React from 'react';
import * as Type from '../../types';
import FavoriteItems from '../favorite-items/favorite-items';

const FavoriteList = (props) => {

  const {favoriteList, onCityClick} = props;

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          favoriteList.map((favoritesByCity) => (
            <FavoriteItems
              key={ `favorite-item-${ favoritesByCity.city }` }
              favoritesByCity={ favoritesByCity }
              onCityClick={ onCityClick }
            />
          ))
        }
      </ul>
    </section>
  );
};

FavoriteList.propTypes = {
  favoriteList: Type.FAVORITES.isRequired,
  onCityClick: Type.FUNCTION.isRequired
};

export default FavoriteList;

