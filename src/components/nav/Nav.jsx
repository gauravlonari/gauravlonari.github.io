import React from 'react'
// import {BiHome} from 'react-icons/bi'
// import {BiMessageSquareDetail} from 'react-icons/bi'
import {AiOutlineMessage} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsGearWideConnected,BsSignpostSplit} from 'react-icons/bs'
import {IoSchoolOutline} from 'react-icons/io5'
import {GiMoebiusTriangle} from 'react-icons/gi'
import './nav.css'

export default function Nav(props) {

  return (
    <nav>
      {/* <a href="#" onClick={()=>{props.nav.setActiveNav('#')}} className={props.nav.activeNav==='#'?'active':''}><BiHome/></a> */}
      {/* eslint-disable-next-line  */}
      <a href="#"  onClick={()=>{props.nav.setActiveNav('#')}} className={props.nav.activeNav==='#about'?'active': props.nav.activeNav==='#' ? 'active' : '' }><AiOutlineUser/></a>
      <a href="#education"  onClick={()=>{props.nav.setActiveNav('#education')}} className={props.nav.activeNav==='#education'?'active':''}><IoSchoolOutline/></a>
      <a href="#skillset"  onClick={()=>{props.nav.setActiveNav('#skillset')}} className={props.nav.activeNav==='#skillset' ?'active':''}><BsGearWideConnected/></a>
      <a href="#positions"  onClick={()=>{props.nav.setActiveNav('#positions')}} className={props.nav.activeNav==='#positions'? 'active':''}><BsSignpostSplit/></a>
      <a href="#projects"  onClick={()=>{props.nav.setActiveNav('#projects')}} className={props.nav.activeNav==='#projects'? 'active': props.nav.activeNav==='#certifications'? 'active' : ''}><GiMoebiusTriangle/></a>
      {/* <a href="#testimonials"  onClick={()=>{props.nav.setActiveNav('#testimonials')}} className={props.nav.activeNav==='#testimonials'?'active':''}><BiMessageSquareDetail/></a> */}
      <a href="#contact"  onClick={()=>{props.nav.setActiveNav('#contact')}} className={props.nav.activeNav==='#contact' || props.nav.activeNav==='#footer'?'active':''}><AiOutlineMessage/></a>
    </nav>
  )
}