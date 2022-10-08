import React from 'react'
import './footer.css'
import {BsLinkedin,BsGithub,BsInstagram, BsHeartFill} from 'react-icons/bs'

export default function Footer() {
  return (
    <footer id="footer">
      {/* eslint-disable-next-line */}
      <a href="#" className='footer_logo'>Gaurav Lonari</a>
      <div className="footer_socials">
      <a rel='noreferrer' title='Linkedin' target="_blank" href="https://linkedin.com/in/gauravlonari"><BsLinkedin/></a>
        <a rel='noreferrer' title='GitHub' target="_blank" href="https://github.com/gauravlonari"><BsGithub/></a>
        <a rel='noreferrer' title='Instagram' target="_blank" href="https://instagram.com/lonari_gaurav_95"><BsInstagram/></a>
      </div>
      <div className="footer_copyright">
        <p>Made with </p>
        <BsHeartFill className='heart_icon'/>  
      </div>
      <img className='visitor_count' src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=http%3A%2F%2Fgauravlonari.github.io&count_bg=%23000000&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=Visits&edge_flat=false" alt="Visitor Count"/>
    </footer>
  )
}