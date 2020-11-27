import React from 'react';
import * as Type from '../../types';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import Header from '../header/header';
import FavoriteList from '../favorite-list/favorite-list';
import FavoritesEmpty from '../favorites-empty/favorites-empty';

import {fetchFavoriteList} from '../../store/api-actions';
import {getFavoriteOfferList} from '../../store/selectors';
import {AppRoute} from '../../constants';

class Favorites extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getFavoriteList();
  }

  render() {

    const {favoriteList} = this.props;

    return (
      <div className="page">
        <Header/>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            { !favoriteList.length
              ? <FavoritesEmpty/>
              : <FavoriteList favoriteList={ favoriteList }/>
            }
          </div>
        </main>
        <footer className="footer container">
          <NavLink className="footer__logo-link" to={AppRoute.ROOT}>
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </NavLink>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  favoriteList: getFavoriteOfferList(state)
});

const mapDispatchToProps = (dispatch) => ({
  getFavoriteList() {
    dispatch(fetchFavoriteList());
  }
});

Favorites.propTypes = {
  favoriteList: Type.FAVORITES,
  getFavoriteList: Type.FUNCTION.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
