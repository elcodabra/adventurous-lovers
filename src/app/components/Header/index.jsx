import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
// https://www.npmjs.com/package/react-responsive-carousel
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// youtube for carousel - http://react-responsive-carousel.js.org/storybook/?selectedKind=Carousel&selectedStory=youtube&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel
const Header = () => (
  <header>
    <Carousel
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
    >
      <div>
        <img src="public/background-img.jpg" />
      </div>
      <div>
        <img src="public/background-img.jpg" />
      </div>
      <div>
        <img src="public/background-img.jpg" />
      </div>
    </Carousel>
  </header>
)

export default Header;
