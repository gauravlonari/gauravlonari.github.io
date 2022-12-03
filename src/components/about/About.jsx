import React from 'react'
import './about.css'
import dp1 from '../../assets/highlight1.jpg'
import dp2 from '../../assets/Profile4.JPG'
import {TbAugmentedReality} from 'react-icons/tb'
import {BsCodeSlash} from 'react-icons/bs'
import {MdAndroid} from 'react-icons/md'

export default function About() {
  return (
    <section id="about">
      <h5>My Introduction</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={dp1} onMouseOver={e=>{e.currentTarget.src=dp2}} onMouseOut={e=>{e.currentTarget.src=dp1}} alt="About Profile" />
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
              <TbAugmentedReality className='about_icon'/>
              <h5>AR VR Enthusiast</h5>
              <small>Unity Engine</small>
            </article>
            <article className='about_card'>
              <MdAndroid className='about_icon'/>
              <h5>Android Developer</h5>
              <small>Java</small>
            </article>
          </div>
          <ul>
            <li>I am <strong>Gaurav Lonari</strong>, passionate learner who tries to learn things all the way to the roots.</li>
            <li><strong>Problem solving</strong> and <strong>exploring</strong> are one of my hobbies.</li>
            <li>Focused to improve mentally and physically.</li>
            <li>At the age of 20, searching for equality in javascript.</li>
            {/* <li>Eat - Code - Workout - Sleep - Repeat</li> */}
            {/* <li>Explore - Adapt - Improve</li> */}
          </ul>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
