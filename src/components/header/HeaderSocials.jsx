import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillTwitterSquare} from 'react-icons/ai';

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <ul className='social_icons'>
          <li><a className='fa' href='https://www.linkedin.com/in/anthony-quintero-216767182/' target='blank'><BsLinkedin size={40} /></a></li>
          <li><a className='fa' href='https://github.com/tonnyquintero' target='blank'><FaGithub size={40} /></a></li>
          <li><a className='fa' href='https://twitter.com/tonny_187' target='blank'><AiFillTwitterSquare size={45} /></a></li>
        </ul>
    </div>
  )
}

export default HeaderSocials