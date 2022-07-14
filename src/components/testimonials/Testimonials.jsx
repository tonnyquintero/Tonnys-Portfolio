import React from 'react';
import explorer from '../../assets/explorer2.jpg';
import next from '../../assets/nextjs2.png';
import solidity from '../../assets/solidity2.jpg';
import './testimonials.css';

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    image: explorer,
    title: 'La despedida de internet explorer',
    review: 'Que pensamiento o sentimiento se te viene a la mente cuando ves este icono? Quizás nostalgia, algún recuerdo emocionante, antipatía, pero lo más probable es que lo veas y te de enojo, IIRAAA, RABIAAAAAA!!!! Y es que la lentitud...',
    link: 'https://tonnys-lab.blogspot.com/2022/07/la-despedida-de-internet-explorer.html'
  },
  {
    image: next,
    title: 'Mi experiencia con Nextjs',
    review: 'Si de Tecnologías Frontend hablamos, Nextjs debe ser el pináculo, la cúspide, la punta de la pirámide en los sitios web, probablemente te preguntes, si React es un framework (o librería) de javascript, para que necesitamos otro framework ahora para react?',
    link: 'https://tonnys-lab.blogspot.com/2022/07/mi-experiencia-con-nextjs.html'
  },
  {
    image: solidity,
    title: 'El futuro de Solidity',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus perspiciatis ea aliquid tempora quis vitae magnam doloribus. Dolor, tempora iure dicta soluta eius eum consequatur reiciendis nulla, molestiae recusandae exercitationem!',
    link: 'https://tonnys-lab.blogspot.com/2022/07/la-despedida-de-internet-explorer.html'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Blogs</h5>
      <h2>Entrys</h2>

      <Swiper className="container testimonial_container"
        modules={[ Navigation, Pagination ]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}

      >
        {
          data.map(({image, title, review, link}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client_avatar">
                  <img src={image} alt={title} />
                </div>
                <h5 className='client_name'>{title}</h5>
                  <small className='client_review'>
                    {review}
                  </small>
                  <a href={link} target="_blank" rel='noreferrer' className='btn_blog'>Visit</a>
              </SwiperSlide>
            )
          } )
        }

      </Swiper>

    </section>
  )
}

export default Testimonials