import React from 'react';
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Tonnys Lab</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Blog</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href='https://facebook.com'><FaGithub /></a>
        <a href='https://instagram.com'><FiInstagram /></a>
        <a href='https://twitter.com'><IoLogoTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>Developed by &copy; TonnysLab. All rigths reserved.</small>
      </div>

    </footer>
  )
}

export default Footer