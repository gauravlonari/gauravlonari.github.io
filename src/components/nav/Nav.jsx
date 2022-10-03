import React from 'react'
import {BiHome,BiMessageSquareDetail} from 'react-icons/bi'
import {AiOutlineUser,AiOutlineMessage} from 'react-icons/ai'
import {BsGearWideConnected} from 'react-icons/bs'
import {IoSchoolOutline} from 'react-icons/io5'
import {GiMoebiusTriangle} from 'react-icons/gi'
import './nav.css'

export default function Nav(props) {

  return (
    <nav>
      {/* eslint-disable-next-line  */}
      <a href="#" onClick={()=>{props.nav.setActiveNav('#')}} className={props.nav.activeNav==='#'?'active':''}><BiHome/></a>
      <a href="#about"  onClick={()=>{props.nav.setActiveNav('#about')}} className={props.nav.activeNav==='#about'?'active':''}><AiOutlineUser/></a>
      <a href="#education"  onClick={()=>{props.nav.setActiveNav('#education')}} className={props.nav.activeNav==='#education'?'active':''}><IoSchoolOutline/></a>
      <a href="#experience"  onClick={()=>{props.nav.setActiveNav('#experience')}} className={props.nav.activeNav==='#experience' || props.nav.activeNav==='#portfolio' ?'active':''}><BsGearWideConnected/></a>
      <a href="#projects"  onClick={()=>{props.nav.setActiveNav('#projects')}} className={props.nav.activeNav==='#projects'? 'active':''}><GiMoebiusTriangle/></a>
      <a href="#testimonials"  onClick={()=>{props.nav.setActiveNav('#testimonials')}} className={props.nav.activeNav==='#testimonials'?'active':''}><BiMessageSquareDetail/></a>
      <a href="#contact"  onClick={()=>{props.nav.setActiveNav('#contact')}} className={props.nav.activeNav==='#contact' || props.nav.activeNav==='#footer'?'active':''}><AiOutlineMessage/></a>
    </nav>
  )
}