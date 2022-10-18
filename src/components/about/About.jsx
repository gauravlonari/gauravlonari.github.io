import React from 'react'
import './about.css'
import dp2 from '../../assets/Profile4.JPG'
import {FaAndroid} from 'react-icons/fa'
import {BsCodeSlash} from 'react-icons/bs'
import {MdWorkOutline} from 'react-icons/md'

export default function About() {
  return (
    <section id="about">
      <h5>My Introduction</h5>
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
              <BsCodeSlash className='about_icon'/>
              <h5>Web Developer</h5>
              <small>MERN Stack</small>
            </article>
            <article className='about_card'>
              <FaAndroid className='about_icon'/>
              <h5>Android Developer</h5>
              <small>Java</small>
            </article>
            <article className='about_card'>
              <MdWorkOutline className='about_icon'/>
              <h5>Fresher Student</h5>
              <small>VIIT' 24</small>
            </article>
          </div>
          <ul>
            <li>I am <strong>Gaurav Lonari</strong>, passionate learner who tries to learn things all the way to the roots.</li>
            <li><strong>Problem solving</strong> and <strong>exploring</strong> are some of my hobbies.</li>
            <li>Focusing on me to improve mentally as well as physically.</li>
            <li>At the age of 20, searching for more metaphores of human life.</li>
            {/* <li>Eat - Code - Workout - Sleep - Repeat</li> */}
            {/* <li>Explore - Adapt - Improve</li> */}
          </ul>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
