import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillTwitterSquare} from 'react-icons/ai';

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com' target='blank'><BsLinkedin /></a>
        <a href='https://github.com' target='blank'><FaGithub /></a>
        <a href='https://twitter.com' target='blank'><AiFillTwitterSquare /></a>
    </div>
  )
}

export default HeaderSocials