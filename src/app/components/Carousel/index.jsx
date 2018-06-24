import React from 'react';
import SVG from 'react-inlinesvg';
import LeftArrow from '../../../assets/img/left_arrow.svg';
import RightArrow from '../../../assets/img/right_arrow.svg'

import './styles.css';

const Carousel = ({images}) => (
  <div className='carousel'>
    <SVG className='arrow_left' src={LeftArrow} />
    <div className='carousel_content'>
      {images && images.length > 0 && images.map((image, key) =>
        <img className='carousel_img' key={key} src={image.src} />)
      }
    </div>
    <SVG className='arrow_right' src={RightArrow} />
  </div>
);

export default Carousel;
