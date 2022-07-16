import React from 'react';
import {BiCheck} from 'react-icons/bi'
import './services.css';

const Services = () => {
  return (
    <section id='services'>
      <div className="container services_container">

      <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Web sites Creation</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>SoftWare App with database</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Whatsapp Busines Api Connection</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Single Page Aplication with Html Css and JS</p>
            </li>
          </ul>
        </article>

       
        <article className='service'>
          <div className="service_head">
            <h3>Content Managment</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Social Media Managment</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Blog Creation</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Google adds</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Seo Tech service</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Soft Skills</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Excel</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Photoshop</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Three js</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Illustrator</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services