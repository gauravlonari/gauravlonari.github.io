import React from 'react'
import {BsInstagram,BsLinkedin,BsGithub} from 'react-icons/bs'

const Socials = () => {
  return (
    <div className='socials'>
        <a rel='noreferrer' title='Linkedin' target="_blank" href="https://linkedin.com/in/gauravlonari"><BsLinkedin/></a>
        <a rel='noreferrer' title='GitHub' target="_blank" href="https://github.com/gauravlonari"><BsGithub/></a>
        <a rel='noreferrer' title='Instagram' target="_blank" href="https://instagram.com/lonari_gaurav_95"><BsInstagram/></a>
    </div>
  )
}

export default Socials;
