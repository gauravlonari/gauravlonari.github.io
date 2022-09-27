import React from 'react'
import {BiHome,BiMessageSquareDetail} from 'react-icons/bi'
import {AiOutlineUser,AiOutlineMessage} from 'react-icons/ai'
import {BsGearWideConnected} from 'react-icons/bs'
import {SiGooglescholar} from 'react-icons/si'
import './nav.css'
import { useState } from 'react'

export default function Nav() {
  const [activeNav, setActiveNav] = useState('#');
  
  return (
    <nav>
      <a href="#" onClick={()=>{setActiveNav('#')}} className={activeNav==='#'?'active':''}><BiHome/></a>
      <a href="#about"  onClick={()=>{setActiveNav('#about')}} className={activeNav==='#about'?'active':''}><AiOutlineUser/></a>
      <a href="#education"  onClick={()=>{setActiveNav('#education')}} className={activeNav==='#education'?'active':''}><SiGooglescholar/></a>
      <a href="#experience"  onClick={()=>{setActiveNav('#experience')}} className={activeNav==='#experience'?'active':''}><BsGearWideConnected/></a>
      <a href="#testimonials"  onClick={()=>{setActiveNav('#testimonials')}} className={activeNav==='#testimonials'?'active':''}><BiMessageSquareDetail/></a>
      <a href="#contact"  onClick={()=>{setActiveNav('#contact')}} className={activeNav==='#contact'?'active':''}><AiOutlineMessage/></a>
    </nav>
  )
}