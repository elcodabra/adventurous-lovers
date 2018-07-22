import React from 'react';
import Slider from 'react-slick';
import ReactPlayer from 'react-player'
import SVG from 'react-inlinesvg';

import LeftArrow from '../../../assets/img/left_arrow.svg';
import RightArrow from '../../../assets/img/right_arrow.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './styles.css';

const NextArrow = ({ className, style, onClick }) => (
  <div
    className='arrow_right'
    onClick={onClick}
  >
    <SVG src={RightArrow} />
  </div>
);

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className='arrow_left'
    onClick={onClick}
  >
    <SVG src={LeftArrow} />
  </div>
);

const settings = {
  dots: false,
  infinite: false,
  lazyLoad: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Carousel = ({cards}) => (
  <Slider {...settings}>
    {cards.map((card, key) =>
      <div key={key} className='card-section'>
        <div style={{margin: '0 20px', height: '193px', backgroundImage: `url(${card.image})`, backgroundSize: 'cover'}}>
          <ReactPlayer url={card.src} width='100%' height='100%'/>
        </div>
      </div>
    )}
  </Slider>
);

export default Carousel;
