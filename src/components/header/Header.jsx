/* eslint-disable no-unused-vars */
import React  from 'react';
import CTA from './CTA';
import Me from '../../assets/fache.png';
import HeaderSocials from './HeaderSocials';
import './header.css';
import { useTranslation } from 'react-i18next';


const Header = () => {

  const [t, i18n] = useTranslation("globals");



  return (
    <header>
      <div className='container header_container'>

        <h5>{t('Header.hello-world')}</h5>
        <h1>Anthony Quintero</h1>
        <h5 className='text-light'>{t('Header.ocupation')}</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={Me} alt='Profile pic' />
        </div>

        <a href='#contact' className='scroll_down'>{t('Header.scroll')}</a>
      </div>
    </header>
  )
}

export default Header