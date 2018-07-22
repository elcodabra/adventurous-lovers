import React from 'react';
import Carousel from '../Carousel';

import './styles.css';

const Section = ({title, cards}) => (
  <div className='section'>
    <div className='section_header'>
      <h2>{title}</h2>
      <div className='section_header-border'></div>
    </div>

    {cards && cards.length > 0 ?
      <div className='section_content'>
          <Carousel cards={cards} />
      </div>
      :
      "Пока еще нет картинок"
    }
  </div>
);

export default Section;
