import React from 'react';
import { Link } from 'react-router-dom';
import FB from '../../../assets/img/social/Facebook_White.png';
import IM from '../../../assets/img/social/Instagram_White.png';
import YT from '../../../assets/img/social/Youtube_White.png';
// TODO: add VK icon

import './styles.css'

const Footer = () => (
  <footer>
    <div className='social-icons'>
      <Link className='social-icon' to='/'><img src={FB} /></Link>
      <Link className='social-icon' to='/'><img src={IM} /></Link>
      <Link className='social-icon' to='/'><img src={YT} /></Link>
    </div>
    <div className='logo-footer-name'>Любители Приключений, 2018</div>
  </footer>
)

export default Footer;
