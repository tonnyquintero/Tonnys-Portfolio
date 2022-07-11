import React, { useState } from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
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
      <a href='#services'
      onClick={() => setActiveNav('#services')} 
      className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href='#contact'
      onClick={() => setActiveNav('#contact')} 
      className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav;