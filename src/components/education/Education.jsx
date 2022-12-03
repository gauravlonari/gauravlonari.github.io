import React from 'react'
import './education.css'
import { BiCheck } from 'react-icons/bi'
import { GoLocation } from 'react-icons/go'
import { MdOutlineCorporateFare } from 'react-icons/md'
import { FaSchool } from 'react-icons/fa'
import { AiTwotoneCalendar } from 'react-icons/ai'

export default function Education() {
  return (
    <section id="education">
        <h5>Where I have been</h5>
        <h2>Qualification</h2>
      <div className="container qualification_container">
        
        <article className='qualification'>
          <div className="qualification_head">
            <h3>
            SSC
            </h3>
          </div>
          <ul className='qualification_list'>
            <li><MdOutlineCorporateFare className='qualification_list_icon'/><p>New English School</p></li>
            <li><GoLocation className='qualification_list_icon'/><p>Ashtapur, Haveli, Pune 412207</p></li>
            <li><FaSchool className='qualification_list_icon'/><p>Maharashtra State Board of Secondary and Higher Secondary Education, Pune</p></li>
            <li><AiTwotoneCalendar className='qualification_list_icon'/><p>March 2018</p></li>
            <li><BiCheck className='qualification_list_icon'/><p>Completed with 93.60%</p></li>
          </ul>
        </article>
        <article className='qualification'>
          <div className="qualification_head">
            <h3>
            Diploma in Computer Engineering
            </h3>
          </div>
          <ul className='qualification_list'>
            <li><MdOutlineCorporateFare className='qualification_list_icon'/><p>Government Polytechnic Pune</p></li>
            <li><GoLocation className='qualification_list_icon'/><p>Ganeshkhind, Shivajinagar, Pune 411014</p></li>
            <li><FaSchool className='qualification_list_icon'/><p>Autonomous Institute affilated with MSBTE</p></li>
            <li><AiTwotoneCalendar className='qualification_list_icon'/><p>September 2021</p></li>
            <li><BiCheck className='qualification_list_icon'/><p>Completed with 96.47%</p></li>
          </ul>
        </article>
        <article className='qualification'>
          <div className="qualification_head">
            <h3>
            B.Tech in Computer Engineering
            </h3>
          </div>
          <ul className='qualification_list'>
            <li><MdOutlineCorporateFare className='qualification_list_icon'/><p>Vishwakarma Institute of Information Technology, Pune</p></li>
            <li><GoLocation className='qualification_list_icon'/><p>Kondhwa, Pune 411048</p></li>
            <li><FaSchool className='qualification_list_icon'/><p>Autonomous Institute affilated with Savitribai Phule Pune University</p></li>
            <li><AiTwotoneCalendar className='qualification_list_icon'/><p>September 2024</p></li>
            <li><BiCheck className='qualification_list_icon'/><p>Current CGPA 9.94</p></li>
          </ul>
        </article>

      </div>
    </section>
  )
}