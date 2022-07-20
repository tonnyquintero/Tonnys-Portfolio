/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';
import './footer.css';
import { useTranslation } from 'react-i18next';


const Footer = () => {

  const [t, i18n] = useTranslation("globals");


  return (
    <footer>
      <a href='#' className='footer_logo'>Tonnys Lab</a>

      <ul className='permalinks'>
        <li><a href='#'>{t("footer.home")}</a></li>
        <li><a href='#about'>{t("footer.about")}</a></li>
        <li><a href='#experience'>{t("footer.experience")}</a></li>
        <li><a href='#services'>{t("footer.services")}</a></li>
        <li><a href='#portfolio'>{t("footer.portfolio")}</a></li>
        <li><a href='#testimonials'>{t("footer.blog")}</a></li>
        <li><a href='#contact'>{t("footer.contact")}</a></li>
      </ul>

      <div className="footer_socials">
        <a href='https://github.com/tonnyquintero'><FaGithub /></a>
        <a href='https://www.instagram.com/tonnyy187/'><FiInstagram /></a>
        <a href='https://twitter.com/tonny_187'><IoLogoTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>{t("footer.developed")} &copy; TonnysLab. {t("footer.all")}</small>
      </div>

    </footer>
  )
}

export default Footer