import React from 'react'
import './about.css'
import dp2 from '../../assets/Profile1.jpg'
import {FiUsers,FiAward} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={dp2} alt="About Profile" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FiAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>200 Clients Worldwide</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima dolorem impedit doloribus eveniet laborum unde reiciendis earum aliquid inventore voluptates nemo sapiente dolores quis non ad, harum at magnam.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
