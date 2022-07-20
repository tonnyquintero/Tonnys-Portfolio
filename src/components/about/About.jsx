/* eslint-disable no-unused-vars */
import React from 'react'
import './about.css';
import AboutPic from '../../assets/thinkb-removebg.png';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
import { useTranslation } from 'react-i18next';

const About = () => {

  const [t, i18n] = useTranslation("globals");

  return (
    <section id='about'>
      <h5>{t('about.getToKnow')}</h5>
      <h2>{t('about.aboutMe')}</h2>

    <div className='container about_container'>
      <div className="about_me">
        <div className="about_me-image">
          <img src={AboutPic} alt="acerca de mi" />
        </div>
      </div>
      <div className="about_content">
        <div className="about_cards">
          <article className="about_card">
            <FaAward className='about_icon'/>
            <h5>{t('about.experience')}</h5>
            <small>{t('about.years')}</small>
          </article>
          <article className="about_card">
            <FiUsers className='about_icon'/>
            <h5>{t('about.clients')}</h5>
            <small>{t('about.clientsNumber')}</small>
          </article>
          <article className="about_card">
            <VscFolderLibrary className='about_icon'/>
            <h5>{t('about.projects')}</h5>
            <small>{t('about.ProjectsNumber')}</small>
          </article>
        </div>
        <p>
          {t('about.description')}
        </p>
        <a href='#contact' className='btn btn-primary'>{t('about.letsTalk')}</a>
      </div>
    </div>
    </section>
  )
}

export default About