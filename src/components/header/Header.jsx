import React from 'react'
import CTA from './CTA'
import './header.css'
import dp1 from '../../assets/Profile3.png'
import Socials from './Socials'

export default function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Gaurav Lonari</h1>
        <h5 className='text-light'>Tech Geek</h5>
        <CTA/>
        <Socials/>
        <div className='me'>
          <img src={dp1} alt="Front Profile" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}