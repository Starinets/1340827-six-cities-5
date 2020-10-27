import React from 'react';
import * as Type from '../../types';

const PremiumLabel = ({isPremium}) => {

  if (isPremium) {
    return (
      <div className="property__mark">
        <span>Premium</span>
      </div>
    );
  }

  return null;

};

PremiumLabel.propTypes = {
  isPremium: Type.BOOLEAN
};

export default PremiumLabel;
