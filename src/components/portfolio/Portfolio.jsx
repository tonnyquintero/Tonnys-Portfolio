import React from 'react';
import './portfolio.css';
import Store from '../../assets/nextStore.png';
import Rick from '../../assets/rick2.png';
import Task from '../../assets/taskMachine.png';
import Travel from '../../assets/tonnysTravel.png';
import Toscana from '../../assets/toscana.png';
import restaurante from '../../assets/tuRestaurante.png';


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={Store} alt="nextstore" />
          </div>
          <h3>Next Store</h3>
          <div className="portfolio_item-cta">
            <a href='https://github.com/tonnyquintero/nextstore' className='btn' target='_blank' rel='noreferrer'>Git Hub</a>
            <a href='https://nextstore-neon.vercel.app/' className='btn btn-primary' target='_blank' rel='noreferrer'>Visit</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={Travel} alt="nextstore" />
          </div>
          <h3>Tonny's Travel</h3>
          <div className="portfolio_item-cta">
            <a href='https://github.com/tonnyquintero/tonnys-travel' className='btn' target='_blank' rel='noreferrer'>Git Hub</a>
            <a href='https://tonnys-travel.netlify.app/' className='btn btn-primary' target='_blank' rel='noreferrer'>Visit</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={Task} alt="nextstore" />
          </div>
          <h3>Task Machine</h3>
          <div className="portfolio_item-cta">
            <a href='https://github.com/tonnyquintero/Task-Machine' className='btn' target='_blank' rel='noreferrer'>Git Hub</a>
            <a href='https://tonnyquintero.github.io/Task-Machine/' className='btn btn-primary' target='_blank' rel='noreferrer'>Visit</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={Rick} alt="nextstore" />
          </div>
          <h3>Rick and Morty Api</h3>
          <div className="portfolio_item-cta">
            <a href='https://github.com/tonnyquintero/Rick-and-Morty-Api' className='btn' target='_blank' rel='noreferrer'>Git Hub</a>
            <a href='https://rick-and-morty-api-pearl-sigma.vercel.app/' className='btn btn-primary' target='_blank' rel='noreferrer'>Visit</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={Toscana} alt="nextstore" />
          </div>
          <h3>Carta Toscana</h3>
          <div className="portfolio_item-cta">
            <a href='https://github.com/tonnyquintero/carta-toscana' className='btn' target='_blank' rel='noreferrer'>Git Hub</a>
            <a href='https://carta-toscana.vercel.app/' className='btn btn-primary' target='_blank' rel='noreferrer'>Visit</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={restaurante} alt="nextstore" />
          </div>
          <h3>Tu Restaurante App</h3>
          <div className="portfolio_item-cta">
            <a href='https://github.com/tonnyquintero/smart-menu' className='btn' target='_blank' rel='noreferrer'>Git Hub</a>
            <a href='https://smart-menu-omega.vercel.app/' className='btn btn-primary' target='_blank' rel='noreferrer'>Visit</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio