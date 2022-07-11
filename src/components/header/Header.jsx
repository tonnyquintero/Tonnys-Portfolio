import React from 'react';
import CTA from './CTA'
import Me from '../../assets/fache.png';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Anthony Quintero</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={Me} alt='Profile pic' />
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header