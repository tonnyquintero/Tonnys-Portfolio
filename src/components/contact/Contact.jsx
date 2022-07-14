import React, {useRef} from 'react';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import './contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_odwbfiv', 'template_0q1n6da', form.current, 'Wl-IzJ1QuHrMQ0XAc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
           <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>tonyoanthony@gmail.com</h5>
            <a href="mailto:tonyoanthony@gmail.com" target="_blank" rel='noreferrer'>Send a Message</a>
           </article>

           <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>Tony Quintero</h5>
            <a href="https://m.me/anthony.quintero.946" target="_blank" rel='noreferrer'>Send a Message</a>
           </article>

           <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h5>+573234257398</h5>
            <a href="https://api.whatsapp.com/send?phone=573234257398" target="_blank" rel='noreferrer'>Send a Message</a>
           </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      
    </section>
  )
}

export default Contact