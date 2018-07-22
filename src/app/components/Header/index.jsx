import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Player } from 'video-react';
import ReactPlayer from 'react-player';

import SVG from 'react-inlinesvg';
import LeftQuotes from '../../../assets/img/left_quotes.svg';
import RightQuotes from '../../../assets/img/right_quotes.svg'
// https://www.npmjs.com/package/react-responsive-carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'video-react/dist/video-react.css';
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
      <div className='firstSlide' style={{backgroundImage: `url('public/background-img.jpg')`}}>
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
      <div className='player'>
        <Player
          fluid={false}
          playsInline
          poster='http://i3.ytimg.com/vi/9-wOXQiQ0Tw/hqdefault.jpg'
          src='https:\/\/r6---sn-p5qs7ned.googlevideo.com\/videoplayback?ipbits=0&lmt=1520408169624058&requiressl=yes&sparams=dur%2Cei%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cexpire&itag=22&ei=hGRUW6mnPMiG8wTRspXoAw&fvip=5&ip=54.161.149.51&id=o-AJ_PmkI13rWGPfyaHgbMVlZJtIITeM_TVpYY4JvN6J2a&expire=1532279013&key=yt6&mime=video%2Fmp4&mn=sn-p5qs7ned%2Csn-p5qlsnd6&mm=31%2C29&mt=1532257304&c=WEB&dur=36009.900&pl=14&initcwndbps=5231250&mv=m&ratebypass=yes&source=youtube&ms=au%2Crdu&signature=BD0F5119CF0F0B882CA01EDF5B3A033338A29FF0.5F2C0FDAF6499F0701B7A26FFB285029E5AEE6B6'
        />
      </div>
      <div>
        <iframe width='1440' height='700' src='https://www.youtube.com/embed/C-y70ZOSzE0?rel=0&modestbranding=1&showinfo=0'/>
      </div>
      <div className='player-wrapper'>
        <ReactPlayer
          fluid={false}
          className='react-player'
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          width='100%'
          height='100%'
        />
      </div>
    </Carousel>
  </header>
)

export default Header;
