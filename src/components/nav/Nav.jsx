/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {FaBloggerB} from 'react-icons/fa';
import {BiMessageSquareDetail} from 'react-icons/bi';
import './nav.css';

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a onClick={() => setActiveNav('#')} 
      className={activeNav === '#' ? 'active' : ''}
      href='#'><AiOutlineHome /></a>
      <a href='#about' 
      onClick={() => setActiveNav('#about')} 
      className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#portfolio'
      onClick={() => setActiveNav('#portfolio')} 
      className={activeNav === '#portfolio' ? 'active' : ''}><BiBook /></a>
      <a href='#testimonials'
      onClick={() => setActiveNav('#testimonials')} 
      className={activeNav === '#testimonials' ? 'active' : ''}><FaBloggerB /></a>
      <a href='#contact'
      onClick={() => setActiveNav('#contact')} 
      className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav;