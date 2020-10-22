import React from 'react';
import * as Type from '../../types';

const OfferFeatureList = ({featureList}) => {

  return featureList.map((feature, index) => {
    return (
      <li className="property__inside-item" key={index}>
        { feature }
      </li>
    );
  });
};

OfferFeatureList.propTypes = {
  featureList: Type.FEATURES
};

export default OfferFeatureList;
