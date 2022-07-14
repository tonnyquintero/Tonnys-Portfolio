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
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus perspiciatis ea aliquid tempora quis vitae magnam doloribus. Dolor, tempora iure dicta soluta eius eum consequatur reiciendis nulla, molestiae recusandae exercitationem!'
  },
  {
    image: next,
    title: 'Mi experiencia con Nextjs',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus perspiciatis ea aliquid tempora quis vitae magnam doloribus. Dolor, tempora iure dicta soluta eius eum consequatur reiciendis nulla, molestiae recusandae exercitationem!'
  },
  {
    image: solidity,
    title: 'El futuro de Solidity',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus perspiciatis ea aliquid tempora quis vitae magnam doloribus. Dolor, tempora iure dicta soluta eius eum consequatur reiciendis nulla, molestiae recusandae exercitationem!'
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
          data.map(({image, title, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client_avatar">
                  <img src={image} alt={title} />
                </div>
                <h5 className='client_name'>{title}</h5>
                  <small className='client_review'>
                    {review}
                  </small>
              </SwiperSlide>
            )
          } )
        }

      </Swiper>

    </section>
  )
}

export default Testimonials