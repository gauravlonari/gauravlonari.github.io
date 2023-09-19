import React from 'react'
import './education.css'
import { BiCheck } from 'react-icons/bi'
import { GoLocation } from 'react-icons/go'
import { MdOutlineCorporateFare } from 'react-icons/md'
import { FaSchool } from 'react-icons/fa'
import { AiTwotoneCalendar } from 'react-icons/ai'
import { EDUCATION_DATA as educationData } from '../../constants/data'

export default function Education() {

  return (
    <section id="education">
      <h5>Where I have been</h5>
      <h2>Qualification</h2>
      <div className="container qualification_container">

        {
          educationData.map(item => (
            <article className='qualification' key={item.name}>
              <div className="qualification_head">
                <h3>
                  {item.education}
                </h3>
              </div>
              <ul className='qualification_list'>
                <li><MdOutlineCorporateFare className='qualification_list_icon' /><p>{item.name}</p></li>
                <li><GoLocation className='qualification_list_icon' /><p>{item.address}</p></li>
                <li><FaSchool className='qualification_list_icon' /><p>{item.board}</p></li>
                <li><AiTwotoneCalendar className='qualification_list_icon' /><p>{item.dateOfCompletion}</p></li>
                <li><BiCheck className='qualification_list_icon' /><p>{item.progress}</p></li>
              </ul>
            </article>
          ))
        }
      </div>
    </section>
  )
}