import React from 'react'
import { NAVIGATION_DATA as navbarData } from '../../constants/data'
import './nav.css'

export default function Nav(props) {

  return (
    <nav>
      {navbarData.map(item => (
        <a key={item.address} href={item.address} onClick={() => { props.nav.setActiveNav(item.address) }} className={item.activeRoutes.includes(props.nav.activeNav) ? 'active' : ''}><item.icon /></a>
      ))}
    </nav>
  )
}