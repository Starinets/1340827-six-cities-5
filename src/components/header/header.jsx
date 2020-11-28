import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import * as Type from '../../types';

import {getAuthInfo} from '../../store/selectors';
import {AppRoute} from '../../constants';

const Header = ({authInfo}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <NavLink
              className="header__logo-link header__logo-link--active"
              to={ AppRoute.ROOT }
            >
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </NavLink>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <NavLink
                  className="header__nav-link header__nav-link--profile"
                  to={ AppRoute.FAVORITES }
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">
                    {
                      authInfo.email !== null
                        ? authInfo.email
                        : `Sign in`
                    }
                  </span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authInfo: Type.AUTH_INFO.isRequired
};

const mapStateToProps = (state) => ({
  authInfo: getAuthInfo(state)
});

export {Header};
export default connect(mapStateToProps)(Header);
