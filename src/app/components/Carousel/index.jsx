import React from 'react';

import './styles.css';

const Carousel = ({images}) => (
  <div className='carousel'>
    {images && images.length > 0 && images.map((image, key) =>
      <img className='carousel_img' key={key} src={image.src} />)
    }
  </div>
);

export default Carousel;
