import React from 'react';

import './styles.css';

const Section = ({title}) => (
  <div className='section'>
    <div className='section_header'>
      <h2>{title}</h2>
      <div className='section_header-border'></div>
    </div>
    <div className='section_content'>
      Some videos...
    </div>
  </div>
);

export default Section;
