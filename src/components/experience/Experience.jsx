/* eslint-disable no-unused-vars */
import React from 'react';
import js from '../../assets/js3.png'
import css from '../../assets/css3.png'
import docker from '../../assets/docker3.png'
import html from '../../assets/html3.png'
import node from '../../assets/node3.png'
import postgre from '../../assets/postgre3.png'
import react from '../../assets/react3.png'
import sequelize from '../../assets/sequelize3.png'

import { useTranslation } from 'react-i18next';




import './experience.css';

const Experience = () => {

  const [t, i18n] = useTranslation("globals");


  return (
    <section id='experience'>
      <h5>{t('experience.skills')}</h5>
      <h2>{t('experience.title')}</h2>

      <div className="container experience_container">

        <h3 className='front'>Frontend</h3>
        <h3 className='back'>Backend</h3>
        

        <div className="cube2">
        <div className="big">
            <span style={{"--i":0, backgroundImage: `url(${js})`, backgroundRepeat: 'no-repeat'}}></span>
            <span style={{"--i":1, backgroundImage: `url(${css})`, backgroundRepeat: 'no-repeat'}}></span>
            <span style={{"--i":2, backgroundImage: `url(${html})`, backgroundRepeat: 'no-repeat'}}></span>
            <span style={{"--i":3, backgroundImage: `url(${react})`, backgroundRepeat: 'no-repeat'}}></span>
            <span className="top" style={{backgroundImage: 'url(./react3)', backgroundRepeat:' no-repeat'}}></span>      
        </div>
       </div>

       <h3 className='back-responsive'>Backend</h3>


       <div className="cube2">
        <div className="big">
            <span style={{"--i":0, backgroundImage: `url(${node})`, backgroundRepeat: 'no-repeat'}}></span>
            <span style={{"--i":1, backgroundImage: `url(${postgre})`, backgroundRepeat: 'no-repeat'}}></span>
            <span style={{"--i":2, backgroundImage: `url(${sequelize})`, backgroundRepeat: 'no-repeat'}}></span>
            <span style={{"--i":3, backgroundImage: `url(${docker})`, backgroundRepeat: 'no-repeat'}}></span>
            <span className="top" style={{backgroundImage: 'url(./react3)', backgroundRepeat:' no-repeat'}}></span>      
        </div>
       </div>

        

        </div>




    </section>
  )
}

export default Experience