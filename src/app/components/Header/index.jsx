import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import SVG from 'react-inlinesvg';
import LeftQuotes from '../../../assets/img/left_quotes.svg';
import RightQuotes from '../../../assets/img/right_quotes.svg'
// https://www.npmjs.com/package/react-responsive-carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles.css';

// youtube for carousel - http://react-responsive-carousel.js.org/storybook/?selectedKind=Carousel&selectedStory=youtube&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel
const Header = () => (
  <header>
    <div className='logo'></div>
    <Carousel
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      // autoPlay={true}
    >
      <div>
        <img src="public/background-img.jpg" />
        <h2 className='logo'>Любители Приключений</h2>
        <div className='quote-section'>
          <div className='left-quotes quotes'>
            <SVG src={LeftQuotes} />
          </div>
          Полезный контент, после которого я чувствую прилив жизненных сил
          <div className='right-quotes quotes'>
            <SVG src={RightQuotes} />
          </div>
        </div>
        <input className='search' type='text' placeholder='Поиск...' />
      </div>
      <div>
        {/*<img src="public/background-img.jpg" />*/}
        <iframe width="1440" height="700" src="https://www.youtube.com/embed/n0F6hSpxaFc" />
      </div>
      <div>
        {/*<img src="public/background-img.jpg" />*/}
        <iframe width="1440" height="700" src="https://www.youtube.com/embed/C-y70ZOSzE0" />
      </div>
    </Carousel>
  </header>
)

export default Header;
