import React from 'react'
import './about.css';
import AboutPic from '../../assets/thinkb-removebg.png';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>AboutMe</h2>

    <div className='container about_container'>
      <div className="about_me">
        <div className="about_me-image">
          <img src={AboutPic} alt="acerca de mi" />
        </div>
      </div>
      <div className="about_content">
        <div className="about_cards">
          <article className="about_card">
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>3+ Years Developing</small>
          </article>
          <article className="about_card">
            <FiUsers className='about_icon'/>
            <h5>Clients</h5>
            <small>10+ Clients</small>
          </article>
          <article className="about_card">
            <VscFolderLibrary className='about_icon'/>
            <h5>Projects</h5>
            <small>30+ Completed Projects</small>
          </article>
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore magnam error et deserunt harum? Optio quaerat officiis, earum enim impedit, possimus vero repudiandae similique non id in, sit et.
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About