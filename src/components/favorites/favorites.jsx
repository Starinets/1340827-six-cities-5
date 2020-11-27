// import React from 'react';
// import * as Type from '../../types';
// import {NavLink} from 'react-router-dom';

// import Header from '../header/header';
// import OfferCard from './../offer-card/offer-card';

// import {AppRoute} from '../../constants';

// const reduceOffersByCity = (offers) => {

//   return offers.reduce((offersByCity, offer) => {

//     if (Array.isArray(offersByCity[offer.city])) {
//       offersByCity[offer.city].push(offer);
//     } else {
//       offersByCity[offer.city] = [offer];
//     }

//     return offersByCity;
//   }, {});
// };

// const generateOfferList = (offers) => {
//   return offers.map((offer) => {
//     return (
//       <OfferCard
//         key = { offer.id }
//         offer = { offer }
//       />
//     );
//   });
// };

// const generateCityList = (cities) => {

//   return Object.entries(cities)
//     .map(([cityName, offers], index) => {
//       return (
//         <li className="favorites__locations-items" key={ index }>
//           <div className="favorites__locations locations locations--current">
//             <div className="locations__item">
//               <NavLink
//                 className="locations__item-link"
//                 to={ AppRoute.ROOT }
//               >
//                 <span>{ cityName }</span>
//               </NavLink>
//             </div>
//           </div>
//           <div className="favorites__places">
//             { generateOfferList(offers) }
//           </div>
//         </li>
//       );
//     });
// };

// const Favorites = (props) => {

//   return (
//     <div className="page">
//       <Header />

//       <main className="page__main page__main--favorites">
//         <div className="page__favorites-container container">
//           <section className="favorites">
//             <h1 className="favorites__title">Saved listing</h1>
//             <ul className="favorites__list">

//               { generateCityList(reduceOffersByCity(props.offers)) }

//             </ul>
//           </section>
//         </div>
//       </main>
//       <footer className="footer container">
//         <NavLink className="footer__logo-link" to="/">
//           <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
//         </NavLink>
//       </footer>
//     </div>
//   );
// };

// Favorites.propTypes = {
//   offers: Type.OFFERS.isRequired,
// };

// export default Favorites;





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
