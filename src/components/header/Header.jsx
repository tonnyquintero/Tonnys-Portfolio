/* eslint-disable no-unused-vars */
import React, {useContext}  from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import CTA from './CTA';
import Me from '../../assets/profile.png';
import MeDark from '../../assets/profile2.png'
import HeaderSocials from './HeaderSocials';
import './header.css';
import { useTranslation } from 'react-i18next';


const Header = () => {

  const [t, i18n] = useTranslation("globals");

  const {darkMode} = useContext(ThemeContext)

  return (
    <header>
      <div className={darkMode ? 'container claro' : 'container header_container'}>

        <h5>{t('Header.hello-world')}</h5>
        <h1 className='h1Nombre'>Anthony Quintero</h1>
        <h5 className={darkMode ? 'text-light-claro' : 'text-light'}>{t('Header.ocupation')}</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={darkMode ? Me : MeDark} alt='Profile pic' />
        </div>

        <a href='#contact' className='scroll_down'>{t('Header.scroll')}</a>
      </div>
    </header>
  )
}

export default Header