/* eslint-disable no-unused-vars */
import React, {useContext} from 'react';
import { ThemeContext } from '../../context/ThemeContext'
import './portfolio.css';
import Store from '../../assets/nextStore.png';
import Rick from '../../assets/rick2.png';
import Task from '../../assets/taskMachine.png';
import Travel from '../../assets/tonnysTravelpng.png';
import susMedicos from '../../assets/susMedicosPage.png';
import videoJuego from '../../assets/videoJuego.png';
import Toscana from '../../assets/toscana.png';
import restaurante from '../../assets/myRestaurante.png';
import { useTranslation } from 'react-i18next';




const data = [
  {
    id: 1,
    title: 'Proinsa Web Site',
    image: Travel,
    gitHub: 'https://github.com/tonnyquintero/Proinsa-web-page',
    deploy: 'https://www.clinicaproinsa.com/'
  },
  {
    id: 2,
    title: 'Sus Médicos Web Site',
    image: susMedicos,
    gitHub: 'https://github.com/tonnyquintero/sus-medicos-page',
    deploy: 'https://www.sus-medicos.com/'
  },
  {
    id: 3,
    title: 'Task Machine',
    image: Task,
    gitHub: 'https://github.com/tonnyquintero/Task-Machine',
    deploy: 'https://tonnyquintero.github.io/Task-Machine/'
  },
  {
    id: 4,
    title: 'Video Juego con JavaScript',
    image: videoJuego,
    gitHub: 'https://github.com/tonnyquintero/js-videoGame',
    deploy: 'https://tonnyquintero.github.io/js-videoGame/'
  },
  {
    id: 5,
    title: 'Tu Restaurante App',
    image: restaurante,
    gitHub: 'https://github.com/tonnyquintero/smart-menu',
    deploy: 'https://smart-menu-omega.vercel.app/'
  },
  {
    id: 6,
    title: 'Next Store',
    image: Store,
    gitHub: 'https://github.com/tonnyquintero/nextstore',
    deploy: 'https://nextstore-neon.vercel.app/'
  },
  
]


const Portfolio = () => {

  const [t, i18n] = useTranslation("globals");

  const { darkMode } = useContext(ThemeContext)

  return (
    <section id='portfolio'>
      <h5>{t("portfolio.work")}</h5>
      <h2>{t("portfolio.title")}</h2>

      <div className="container portfolio_container">

        {
          data.map(({id, title, image, gitHub, deploy}, index) => {
            return (
              <article key={index} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
              <h3 className={darkMode ? 'claroH3' : 'oscuroH3'}>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={gitHub} className='btn' target='_blank' rel='noreferrer'>Git Hub</a>
                <a href={deploy} className='btn btn-primary' target='_blank' rel='noreferrer'>{t("portfolio.visit")}</a>
              </div>
              </article>
            )
          })
        }  

      </div>
    </section>
  )
}

export default Portfolio