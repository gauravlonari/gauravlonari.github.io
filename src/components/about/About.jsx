import React from 'react'
import './about.css'
import dp2 from '../../assets/Profile1.jpg'
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
            <li>Making my debut into Web Development, I am <strong>Gaurav Lonari</strong>, being passionate learner who tries to explore things all the way to the roots.</li>
            <li><strong>Problem solving</strong> and <strong>building</strong> new stuff are some of my hobbies. </li>
            <li>On the extra-curricular side, I do <strong>social work</strong> being the part of NSS, VIIT and <strong>connect with the students</strong> of institute being a part of  I2IC Council.</li>
            {/* <li>Eat - Code - Workout - Sleep - Repeat</li> */}
            <li>Explore - Adapt - Improve</li>
          </ul>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
