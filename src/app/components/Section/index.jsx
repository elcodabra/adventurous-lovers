import React from 'react';
import Carousel from '../Carousel';

import './styles.css';

const Section = ({title, images}) => (
  <div className='section'>
    <div className='section_header'>
      <h2>{title}</h2>
      <div className='section_header-border'></div>
    </div>

    {images && images.length > 0 ?
      <div className='section_content'>
          <Carousel images={images} />
      </div>
      :
      "Пока еще нет картинок"
    }
  </div>
);

export default Section;
