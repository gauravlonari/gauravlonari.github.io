import React from 'react'
import './about.css'
import dp2 from '../../assets/Profile1.jpg';

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
            <article className='about_card'></article>
          </div>
        </div>
      </div>
    </section>
  )
}
