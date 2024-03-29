/* eslint-disable no-unused-vars */
import React, {useRef, useContext} from 'react';
import { ThemeContext } from '../../context/ThemeContext'
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import './contact.css';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';


const Contact = () => {

  const [t, i18n] = useTranslation("globals");

  const {darkMode} = useContext(ThemeContext)

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
      <h5 className='h5Section'>{t("contact.touch")}</h5>
      <h2>{t("contact.me")}</h2>

      <div className="container contact_container">
        <div className="contact_options">
           <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>tonyoanthony@gmail.com</h5>
            <a href="mailto:tonyoanthony@gmail.com" target="_blank" rel='noreferrer'>{t("contact.sendA")}</a>
           </article>

           <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>Tony Quintero</h5>
            <a href="https://m.me/anthony.quintero.946" target="_blank" rel='noreferrer'>{t("contact.sendA")}</a>
           </article>

           <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h5>+573234257398</h5>
            <a href="https://api.whatsapp.com/send?phone=573234257398" target="_blank" rel='noreferrer'>{t("contact.sendA")}</a>
           </article>
        </div>
        <div className={darkMode ? "box2" : "box"}>
        <form ref={form} onSubmit={sendEmail} className={darkMode ? "form2" : "form"}>
            <h2>Hablemos</h2>
            <div classNam="inputBox">
                <input type="text" name="name" placeholder={t("contact.name")} required="required" />
                <i></i>
            </div>
            <div classNam="inputBox">
                <input type="email" name='email' placeholder={t("contact.email")} required="required" />
                <i></i>
            </div>
          <textarea classNam="inputBox" name="message" placeholder={t("contact.message")} rows="7" required></textarea>
          <button type='submit' className='btn-primary1'>{t("contact.send")}</button>
        </form>
    </div>
      </div>
    </section>
  )
}

export default Contact