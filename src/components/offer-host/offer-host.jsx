import React from 'react';
import * as Type from '../../types';

const OfferHost = ({offer}) => {

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={ `property__avatar-wrapper ${ offer.host.isPro ? `property__avatar-wrapper--pro` : `` } user__avatar-wrapper` }>
          <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
        </div>
        <span className="property__user-name">
          { offer.host.name }
        </span>
        <span className="property__user-status">
          { offer.host.isPro ? `Pro` : `` }
        </span>
      </div>
      <div className="property__description">
        {
          offer.offerDescription.map((description, index) => {
            return (
              <p className="property__text" key={index}>
                { description }
              </p>
            );
          })
        }
      </div>
    </div>
  );
};

OfferHost.propTypes = {
  offer: Type.OFFER.isRequired
};

export default OfferHost;
