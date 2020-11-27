import React from 'react';
import * as Type from '../../types';
import {connect} from 'react-redux';

import {redirectToRoute} from '../../store/action';
import {getAuthorizationStatus} from '../../store/selectors';
import {setOfferStatus} from '../../store/api-actions';
import {
  AuthorizationStatus,
  APIRoute,
  FavoriteStatus
} from '../../constants';

class FavoriteButton extends React.PureComponent {

  constructor(props) {
    super(props);

    this.handleBookmarkClick = this.handleBookmarkClick.bind(this);
  }

  handleBookmarkClick() {
    const {
      isFavorite,
      authorizationStatus,
      id,
      redirectToLoginPage,
      changeOfferStatus
    } = this.props;

    if (authorizationStatus !== AuthorizationStatus.AUTH) {
      return redirectToLoginPage;
    }

    return () => {
      return changeOfferStatus(id, isFavorite ? FavoriteStatus.NO : FavoriteStatus.YES);
    };
  }

  render() {
    const {
      className,
      buttonWidth,
      buttonHeight,
      isFavorite
    } = this.props;

    return (
      <button
        onClick={ this.handleBookmarkClick() }
        className={`${ className }__bookmark-button ${ isFavorite ? `${ className }__bookmark-button--active` : `` } button`}
        type="button"
      >
        <svg
          className={ `${ className }__bookmark-icon` }
          width={ buttonWidth }
          height={ buttonHeight }>
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    );
  }
}

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  redirectToLoginPage() {
    dispatch(redirectToRoute(APIRoute.LOGIN));
  },
  changeOfferStatus(id, status) {
    dispatch(setOfferStatus(id, status));
  }
});

FavoriteButton.propTypes = {
  isFavorite: Type.BOOLEAN.isRequired,
  className: Type.STRING.isRequired,
  buttonWidth: Type.NUMBER.isRequired,
  buttonHeight: Type.NUMBER.isRequired,
  authorizationStatus: Type.STRING.isRequired,
  id: Type.NUMBER.isRequired,
  redirectToLoginPage: Type.FUNCTION.isRequired,
  changeOfferStatus: Type.FUNCTION.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
