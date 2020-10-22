import React from 'react';
import * as Type from '../../types';

const OfferImageList = ({imageList}) => {

  return imageList.map((image, index) => {
    return (
      <div className="property__image-wrapper" key={ index }>
        <img className="property__image" src={ image } alt="Photo studio" />
      </div>
    );
  });
};

OfferImageList.propTypes = {
  imageList: Type.IMAGES
};

export default OfferImageList;
